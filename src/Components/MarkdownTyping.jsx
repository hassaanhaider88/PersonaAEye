"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

// Simple markdown parser to convert markdown to HTML
const parseMarkdown = (markdown) => {
  let html = markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold text-gray-800 mb-2 mt-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold text-gray-800 mb-3 mt-5">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold text-gray-900 mb-4 mt-6">$1</h1>')
    // Bold
    .replace(/\*\*(.*)\*\*/gim, '<strong class="font-semibold">$1</strong>')
    // Italic
    .replace(/\*(.*)\*/gim, '<em class="italic">$1</em>')
    // Code blocks
    .replace(
      /```([\s\S]*?)```/gim,
      '<pre class="bg-gray-100 p-3 rounded-md my-3 overflow-x-auto"><code class="text-sm font-mono">$1</code></pre>',
    )
    // Inline code
    .replace(/`([^`]*)`/gim, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
    // Links
    .replace(/\[([^\]]*)\]$$([^$$]*)\)/gim, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline">$1</a>')
    // Unordered lists
    .replace(/^\* (.*$)/gim, '<li class="ml-4 mb-1">• $1</li>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gim, '<li class="ml-4 mb-1 list-decimal">$1</li>')
    // Line breaks
    .replace(/\n\n/gim, '</p><p class="mb-3">')
    // Horizontal rules
    .replace(/^---$/gim, '<hr class="border-t border-gray-300 my-4">')

  // Wrap in paragraphs if not already wrapped
  if (!html.includes("<p>") && !html.includes("<h") && !html.includes("<li>")) {
    html = `<p class="mb-3">${html}</p>`
  }

  return html
}

// Function to extract plain text from markdown
const extractPlainText = (markdown) => {
  return (
    markdown
      // Remove code blocks
      .replace(/```[\s\S]*?```/gim, "")
      // Remove inline code
      .replace(/`([^`]*)`/gim, "$1")
      // Remove links but keep text
      .replace(/\[([^\]]*)\]$$[^$$]*\)/gim, "$1")
      // Remove bold/italic markers
      .replace(/\*\*(.*?)\*\*/gim, "$1")
      .replace(/\*(.*?)\*/gim, "$1")
      // Remove headers markers
      .replace(/^#{1,6}\s*/gim, "")
      // Remove list markers
      .replace(/^\* /gim, "• ")
      .replace(/^\d+\. /gim, "")
      // Remove horizontal rules
      .replace(/^---$/gim, "")
      // Clean up extra whitespace
      .replace(/\n{3,}/gim, "\n\n")
      .trim()
  )
}

const MarkdownTyping = ({
  message,
  speed = 0.03,
  delay = 0,
  className = "",
  showCursor = true,
  cursorChar = "|",
  onComplete = () => {},
}) => {
  const textRef = useRef(null)
  const cursorRef = useRef(null)
  const [isTyping, setIsTyping] = useState(false)
  const [showFormatted, setShowFormatted] = useState(false)
  const timelineRef = useRef(null)

  useEffect(() => {
    if (!textRef.current || !message) return

    // Extract plain text for typing animation
    const plainText = extractPlainText(message)
    const container = textRef.current

    // Clear any existing content
    container.innerHTML = ""
    setShowFormatted(false)

    // Create spans for each character
    const chars = plainText.split("").map((char, index) => {
      const span = document.createElement("span")
      span.textContent = char === " " ? "\u00A0" : char // Use non-breaking space
      span.style.opacity = "0"
      span.className = "inline-block"
      return span
    })

    // Append all character spans to container
    chars.forEach((char) => container.appendChild(char))

    // Create GSAP timeline
    timelineRef.current = gsap.timeline({
      delay: delay,
      onStart: () => setIsTyping(true),
      onComplete: () => {
        setIsTyping(false)
        // Stop cursor blinking when typing is complete
        if (timelineRef.current.cursorAnimation) {
          timelineRef.current.cursorAnimation.kill()
          // Hide cursor
          if (cursorRef.current) {
            gsap.set(cursorRef.current, { opacity: 0 })
          }
        }

        // Show formatted content after a brief delay
        setTimeout(() => {
          setShowFormatted(true)
          onComplete()
        }, 300)
      },
    })

    // Animate each character appearing
    chars.forEach((char, index) => {
      timelineRef.current.to(
        char,
        {
          opacity: 1,
          duration: 0.01,
          ease: "none",
        },
        index * speed,
      )
    })

    // Cursor blinking animation
    if (showCursor && cursorRef.current) {
      const cursorAnimation = gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })

      // Store cursor animation reference for cleanup
      timelineRef.current.cursorAnimation = cursorAnimation
    }

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        if (timelineRef.current.cursorAnimation) {
          timelineRef.current.cursorAnimation.kill()
        }
        timelineRef.current.kill()
      }
    }
  }, [message, speed, delay, showCursor, onComplete])

  return (
    <div className={`inline-block w-full ${className}`}>
      {!showFormatted ? (
        // Show typing animation
        <div className="inline-block">
          <span ref={textRef} className="inline-block whitespace-pre-wrap"></span>
          {showCursor && (
            <span
              ref={cursorRef}
              className="inline-block ml-1 text-current font-normal"
              style={{ opacity: isTyping ? 1 : 0 }}
            >
              {cursorChar}
            </span>
          )}
        </div>
      ) : (
        // Show formatted markdown content
        <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: parseMarkdown(message) }} />
      )}
    </div>
  )
}

export default MarkdownTyping
