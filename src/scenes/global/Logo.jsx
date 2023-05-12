import React from 'react';

import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="logo-main">
      <img
        onClick={() => navigate('/')}
        src="/images/logo1.png"
        alt="Logo"
        width="200px"
        height="50px"
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default Logo;
