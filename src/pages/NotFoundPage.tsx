import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // 返回首頁
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff', // 白色字體
        padding: 4,
        gap: 2, // 子元素之間的間距
      }}
    >
      {/* 背景裝飾 */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
          width: '80%',
          height: '80%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(187,134,252,0.2) 0%, rgba(0,0,0,0) 80%)',
        }}
      />

      {/* 404 標題 */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '3rem', sm: '5rem' },
          color: '#bb86fc',
        }}
      >
        404
      </Typography>

      {/* 說明文字 */}
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: '1rem', sm: '1.25rem' },
          color: '#e0e0e0',
          marginBottom: 2,
        }}
      >
        抱歉，您訪問的頁面不存在！
      </Typography>

      {/* 返回首頁按鈕 */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        sx={{
          padding: '10px 30px',
          fontSize: '1rem',
          borderRadius: '8px',
          backgroundColor: '#bb86fc',
          ':hover': {
            backgroundColor: '#9c4dcc',
          },
        }}
      >
        返回首頁
      </Button>
    </Box>
  );
};

export default NotFoundPage;