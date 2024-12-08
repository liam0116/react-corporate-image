import React from 'react';
import Navbar from '../components/layout/Navbar';
import FooterInfo from '../components/layout/FooterInfo';
import { Box } from '@mui/material';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box>
         {/* 顶部导航栏 */}
        <Navbar />
        {/* 主内容 */}
        <Box component="main" sx={{ minHeight: '80vh'}}>
            {children}
        </Box>
        {/* 底部信息 */}
        <FooterInfo />
    </Box>
  );
};

export default MainLayout;