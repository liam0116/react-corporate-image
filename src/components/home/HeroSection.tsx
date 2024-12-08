import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const images = [
  {
    url: '/images/building/building1.jpg',
    title: '創新建築設計',
    description: '我們設計啟發靈感並經得起時間考驗的空間。',
  },
  {
    url: '/images/building/building2.jpg',
    title: '可靠施工',
    description: '準時交付項目，確保精準施工。',
  },
  {
    url: '/images/building/building3.jpg',
    title: '可持續發展設計',
    description: '為現代生活提供環保的解決方案。',
  },
];

const HeroSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(images.length).fill(false));

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % images.length);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + images.length) % images.length);
  };

  // Preload images
  useEffect(() => {
    const preloadImage = (src: string, index: number) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prev) => {
          const newLoadedImages = [...prev];
          newLoadedImages[index] = true;
          return newLoadedImages;
        });
      };
    };

    images.forEach((image, index) => {
      if (!loadedImages[index]) {
        preloadImage(image.url, index);
      }
    });
  }, [loadedImages]);

  return (
    <Box
    sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '60vh', sm: '70vh', md: '100vh' }, // 根據屏幕尺寸調整高度
        overflow: 'hidden',
      }}
    >
      {/* 背景圖片 */}
      <Box
        sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: loadedImages[activeStep]
              ? `url(${images[activeStep].url})`
              : 'none', // 未加载完成时不显示
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 0.5s ease-in-out',
            opacity: loadedImages[activeStep] ? 1 : 0, // 過渡效果
            zIndex: -1,
          }}
      />
      {/* 漸變層 */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))',
          zIndex: 0,
        }}
      />
      {/* 內容 */}
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' }, // 手機版更小字體
            fontWeight: 'bold',
          }}
        >
          {images[activeStep].title}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          gutterBottom
          sx={{
            fontSize: { xs: '0.9rem', sm: '1.25rem' },
            marginBottom: 3,
            padding: { xs: '0 20px', sm: 0 }, // 手機版增加內邊距
          }}
        >
          {images[activeStep].description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: '25px',
            padding: '10px 30px',
            fontSize: { xs: '0.8rem', sm: '1rem' }, // 手機版更小字體
          }}
        >
          聯繫我們
        </Button>
      </Container>

      {/* 左切換按鈕 */}
      <IconButton
        onClick={handleBack}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 16,
          transform: 'translateY(-50%)',
          color: 'white',
          zIndex: 2,
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* 右切換按鈕 */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 16,
          transform: 'translateY(-50%)',
          color: 'white',
          zIndex: 2,
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default HeroSection;