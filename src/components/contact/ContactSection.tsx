import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import logo from '../../assets/logo.svg'; // 使用 import 引入 logo

const ContactSection: React.FC = () => {
  return (
    <Box
      sx={{
        padding: { xs: 4, md: 8 },
        textAlign: 'center',
        backgroundColor: '#121212', // 深色背景
      }}
    >
      {/* 標題 */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#bb86fc', // 使用主题紫色标题
          marginBottom: 4,
        }}
      >
        聯絡我們
      </Typography>

      {/* 公司卡片 */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            width: '100%',
            backgroundColor: '#1e1e1e', // 深灰色卡片背景
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.6)', // 更显著的阴影
            borderRadius: '12px',
            textAlign: 'center',
            padding: 2,
          }}
        >
          {/* 公司Logo */}
          <CardMedia
            component="img"
            image={logo} // 使用 import 的 logo
            alt="Company Logo"
            sx={{
              width: '100px',
              height: '100px',
              objectFit: 'contain',
              margin: '0 auto',
              marginBottom: 2,
            }}
          />
          {/* 公司資訊 */}
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: '#bb86fc', // 紫色标题
                marginBottom: 2,
              }}
            >
              公司名稱
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#e0e0e0', // 浅灰色字体
                marginBottom: 2,
              }}
            >
              地址：123 商業路，科技城
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#e0e0e0', // 浅灰色字体
                marginBottom: 2,
              }}
            >
              電話：+123 456 789
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#e0e0e0', // 浅灰色字体
              }}
            >
              電子郵件：info@company.com
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ContactSection;