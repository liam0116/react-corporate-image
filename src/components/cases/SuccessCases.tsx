import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';

// 成功案例数据
const cases = [
  {
    title: '現代建築設計',
    description: '提供創新和高效的建築設計解決方案。',
    image: '/images/cases/case1.jpg', // 替换为实际图片路径
  },
  {
    title: '高層建築施工',
    description: '我們完成了一個高層建築項目，展示了我們的施工能力。',
    image: '/images/cases/case2.jpg',
  },
  {
    title: '環保社區開發',
    description: '利用可持續發展技術構建綠色社區。',
    image: '/images/cases/case3.jpg',
  },
  {
    title: '城市基礎設施建設',
    description: '協助城市提升基礎設施，改善居民生活質量。',
    image: '/images/cases/case4.jpg',
  },
];

const SuccessCases: React.FC = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#121212', padding: { xs: 4, md: 8 } }}>
      {/* 标题 */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#bb86fc',
          marginBottom: 4,
        }}
      >
        成功案例
      </Typography>

      {/* 案例展示区 */}
      {cases.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: index % 2 === 0 ? '#1e1e1e' : '#2c2c2c', // 一深一浅交替背景色
            color: '#fff',
            padding: { xs: 4, md: 6 },
            borderRadius: '12px',
            marginBottom: 4,
          }}
        >
          {/* 图片 */}
          <CardMedia
            component="img"
            image={item.image}
            alt={item.title}
            sx={{
              width: { xs: '100%', md: '50%' },
              height: 250,
              objectFit: 'cover',
              borderRadius: '12px',
              marginBottom: { xs: 2, md: 0 }, // 移动设备下图片底部留空
            }}
          />
          {/* 描述 */}
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              padding: { xs: 0, md: 4 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: '#bb86fc',
                marginBottom: 2,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#e0e0e0',
                lineHeight: 1.8,
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SuccessCases;