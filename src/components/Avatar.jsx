import { Box } from '@mui/material';
import React from 'react';

const Avatar = () => {
  return (
    <Box>
      <img
        height="30px"
        width="30px"
        src="/images/placeholder.jpg"
        alt="Avatar"
        style={{
          borderRadius: '50%',
        }}
      />
    </Box>
  );
};

export default Avatar;
