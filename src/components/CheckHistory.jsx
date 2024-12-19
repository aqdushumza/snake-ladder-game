import React from 'react';
import { useNavigate } from "react-router-dom"; 

const CheckHistory = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/CheckHistory'); 
    };

  return (
    <div>
        <button onClick={handleClick}>Check History</button>
    </div>
  );
}

export default CheckHistory;
