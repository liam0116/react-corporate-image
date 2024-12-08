import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardMedia, Button, useMediaQuery } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// 合作公司數據
const partners = [
  { name: '公司A', logo: '/images/partners/partner1.png' },
  { name: '公司B', logo: '/images/partners/partner2.png' },
  { name: '公司C', logo: '/images/partners/partner3.png' },
  { name: '公司D', logo: '/images/partners/partner4.png' },
];

const PartnersSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)'); // 判斷是否為手機設備

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    resetAutoPlay();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? partners.length - 1 : prevIndex - 1
    );
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000); // 暂停8秒后恢复自动切换
  };

  useEffect(() => {
    if (isPaused) return; // 如果暂停则不启动自动切换

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 4000); // 每4秒自动切换

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: { xs: 4, md: 8 },
        color: '#fff',
        gap: 4,
      }}
    >
      {/* 左侧标题区域 */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#bb86fc',
            marginBottom: 2,
          }}
        >
          合作公司
        </Typography>
        {!isMobile && ( // 在非移动设备显示描述文字
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: '#e0e0e0',
            }}
          >
            我們與多家優秀的公司合作，共同打造高品質的建築和技術解決方案。
          </Typography>
        )}
      </Box>

      {/* 右侧合作公司幻灯片 */}
      <Box
        sx={{
          flex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          maxWidth: '600px',
          height: '250px',
        }}
      >
        {!isMobile && ( // 仅在非移动设备显示切换按钮
          <Button
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 0,
              zIndex: 2,
              color: '#bb86fc',
              minWidth: 'auto',
            }}
          >
            <ArrowBackIos />
          </Button>
        )}

        {/* 幻灯片内容 */}
        <Box
          sx={{
            display: 'flex',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${partners.length * 100}%`,
          }}
        >
          {partners.map((partner, index) => (
            <Box
              key={index}
              sx={{
                flex: '0 0 100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Card
                sx={{
                  backgroundColor: '#1f1f1f',
                  color: '#fff',
                  padding: 2,
                  borderRadius: 2,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.6)',
                  width: '200px',
                  height: '200px',
                  textAlign: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image={partner.logo}
                  alt={partner.name}
                  sx={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'contain',
                    margin: '0 auto',
                    marginBottom: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#bb86fc',
                  }}
                >
                  {partner.name}
                </Typography>
              </Card>
            </Box>
          ))}
        </Box>

        {!isMobile && ( // 仅在非移动设备显示切换按钮
          <Button
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 0,
              zIndex: 2,
              color: '#bb86fc',
              minWidth: 'auto',
            }}
          >
            <ArrowForwardIos />
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default PartnersSection;