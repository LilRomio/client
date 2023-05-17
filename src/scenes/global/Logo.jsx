import { Box } from '@mui/material';
import React from 'react';

import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: { xs: 'none', sm: 'none', md: 'block' },
      }}
    >
      <div className="logo-main">
        <img
          onClick={() => navigate('/')}
          src="/images/logo.png"
          alt="Logo"
          width="250px"
          height="60px"
          style={{ cursor: 'pointer' }}
        />
      </div>
    </Box>
  );
};

export default Logo;
