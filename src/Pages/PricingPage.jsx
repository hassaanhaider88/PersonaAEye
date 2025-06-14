import React from 'react'
import { useLocation } from 'react-router-dom';
import UpgradePage from './UpgradePage';

const PricingPage = () => {
        const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const plan = searchParams.get("plan");
  return (
    <div>
      <UpgradePage plan={plan}/>
    </div>
  )
}

export default PricingPage