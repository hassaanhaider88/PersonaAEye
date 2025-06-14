import React from 'react';
import { HiOutlineClipboardDocument } from 'react-icons/hi2';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const CopyButton = ({ContentForCopy}) => {
        const handleClick = ()=>{
                window.navigator.clipboard.writeText(ContentForCopy)
                toast.success('Copied Successfully...')
        }
  return (
    <StyledWrapper>
      <button onClick={handleClick}>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
           <HiOutlineClipboardDocument />
          </div>
        </div>
        <span>Copy</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    font-family: inherit;
    font-size: 10px;
    background: #291356;
    color: white;
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
  }

  button span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  button:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(0.9);
  }

  button:hover span {
    transform: translateX(5em);
  }

  button:active {
    transform: scale(0.95);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }

    to {
      transform: translateY(-0.1em);
    }
  }`;

export default CopyButton;
