import React from 'react';
import { Box, Typography, Container } from '@mui/material';

// 圖片變數
const aboutImageSrc = '/images/about-image.jpg'; // 替換為實際圖片路徑

const AboutSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1e1e1e', // 深色背景
        color: '#fff', // 白色字体
        padding: { xs: 4, md: 8 }, // 适配不同屏幕的间距
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        {/* 主标题 */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            marginBottom: 4,
            textAlign: 'center',
            color: '#bb86fc', // 使用主题的紫色
          }}
        >
          關於我們
        </Typography>

        {/* 内容区块 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            marginTop: 4,
          }}
        >
          {/* 左侧图片 */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={aboutImageSrc} // 使用變數管理圖片
              alt="關於我們"
              style={{
                maxWidth: '100%',
                borderRadius: '12px', // 圆角效果
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.6)', // 添加阴影
              }}
            />
          </Box>

          {/* 右侧文字 */}
          <Box
            sx={{
              flex: 1,
              textAlign: 'left',
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#bb86fc', // 主題紫色
              }}
            >
              我們是一家致力於建築行業的公司
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.8,
                color: '#e0e0e0', // 浅灰色字体
              }}
            >
              提供創新設計、高效施工管理和可持續發展的解決方案。我們以專業的團隊和先進的技術，為客戶創造價值並實現卓越的建築體驗。
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;