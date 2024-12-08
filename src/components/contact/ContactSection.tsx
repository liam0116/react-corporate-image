import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import logo from '../../assets/logo.svg'; // 使用 import 引入 logo
import { motion } from 'framer-motion'; // 使用 Framer Motion 添加動畫效果

const ContactSection: React.FC = () => {
  return (
    <Box
      sx={{
        padding: { xs: 4, md: 8 },
        textAlign: 'center',
        display: 'flex', // 使用 flexbox 來對齊
        flexDirection: 'column', // 垂直方向排列
        justifyContent: 'center', // 垂直方向置中
        alignItems: 'center', // 水平方向置中
      }}
    >
      {/* 公司卡片 */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.05, // 卡片放大
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.8)', // 更强的阴影效果
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            sx={{
              maxWidth: 600, // 增加卡片寬度
              height: '300px', // 增加卡片高度
              backgroundColor: '#1e1e1e', // 深灰色卡片背景
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.7)', // 更显著的阴影
              borderRadius: '16px',
              padding: 4, // 增加內邊距
              display: 'flex', // 使用 flexbox 布局
              alignItems: 'center', // 垂直居中
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
        </motion.div>
      </Box>
    </Box>
  );
};

export default ContactSection;