import React from 'react';
import { Box, Typography, Card, CardContent, Grid2 } from '@mui/material';
import { Architecture, Build, Engineering, Nature  } from '@mui/icons-material';

const engineeringServices = [
  {
    icon: <Architecture sx={{ fontSize: 48, color: '#bb86fc' }} />,
    title: '建築設計',
    description: '提供現代化、創新的建築設計方案，滿足不同需求。',
  },
  {
    icon: <Engineering sx={{ fontSize: 48, color: '#bb86fc' }} />,
    title: '結構工程',
    description: '專注於安全可靠的結構設計，確保建築穩固性。',
  },
  {
    icon: <Build sx={{ fontSize: 48, color: '#bb86fc' }} />,
    title: '施工管理',
    description: '從規劃到竣工，提供全面的施工管理支持。',
  },
  {
    icon: <Nature sx={{ fontSize: 48, color: '#bb86fc' }} />,
    title: '環保設計',
    description: '採用綠色建築技術，實現可持續發展的設計方案。',
  },
];

const EngineeringServicesSection: React.FC = () => {
      
  return (
    <Box
      sx={{
        textAlign: 'center',
        position: 'relative',
        marginBottom: { xs: 2, md: 16 }, // 与下方组件拉开距离
      }}
    >
        {/* 标题 */}
        <Typography
            variant="h4"
            gutterBottom
            sx={{
            padding: { xs: 1, md: 8 },
            fontWeight: 'bold',
            color: '#bb86fc', // 主題紫色
            }}
        >
            工程服務
        </Typography>

        {/* 分割线 */}
        <Box
            sx={{
            height: 4,
            width: '60%',
            margin: '0 auto 30px',
            background: 'linear-gradient(90deg, #bb86fc, #6200ea)', // 渐变分割线
            borderRadius: 2,
            }}
        ></Box>
        
        {/* 服务卡片 */}
        <Grid2
            container
            rowSpacing={2} // 行间距
            spacing={4} // 列间距
            direction={{ xs: 'column', sm: 'row-reverse' , md: 'row' }}
        >
        {engineeringServices.map((service, index) => (
            <Grid2
                key={index}
                size={{ xs: 12, sm: 6, md: 3 }}
            >
            <Card
                    sx={{
                        height: '100%',
                        width: '100%',
                        maxWidth: '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.6)',
                        borderRadius: '12px',
                        backgroundColor: '#1f1f1f',
                        color: '#fff',
                        padding: 3,
                        '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.8)',
                        },
                }}
                >
                <Box>{service.icon}</Box>
                <CardContent>
                <Typography
                    variant="h6"
                    sx={{
                    fontWeight: 'bold',
                    marginBottom: 2,
                    color: '#bb86fc', // 主題紫色
                    }}
                >
                    {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
                    {service.description}
                </Typography>
                </CardContent>
            </Card>
            </Grid2>
        ))}
        </Grid2>
    </Box>
  );
};

export default EngineeringServicesSection;
