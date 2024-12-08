import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import { LocationOn, Email, Phone } from '@mui/icons-material';
import logo from '../../assets/logo.svg'; // 導入 SVG 文件

const FooterInfo: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', padding: 4 }}>
      <Divider sx={{ backgroundColor: '#333', marginBottom: 4 }} />

      {/* 內容區塊：一排兩個 */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'start',
          gap: 4,
          textAlign: { xs: 'center', md: 'left' }, // 手機版居中
          position: 'relative', // 用于分隔线定位
        }}
      >
        {/* 左側區塊：公司資訊（含 Logo）與聯繫方式 */}
        <Box sx={{ flex: '1 1 45%' }}>
          <img src={logo} alt="Company Logo" width="80" height="80" />
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
            Company Name 棟
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            <Typography
              variant="body2"
              sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }}
            >
              <LocationOn sx={{ color: '#bb86fc' }} /> 123 Innovation Street, Tech City, Country
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }}
            >
              <Email sx={{ color: '#bb86fc' }} /> info@company.com
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }}
            >
              <Phone sx={{ color: '#bb86fc' }} /> +1 234 567 890
            </Typography>
          </Box>
        </Box>

        {/* 中間分隔线 */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: 'none', md: 'block' }, // 手機版隱藏
            backgroundColor: '#333',
            width: '2px',
          }}
        />

        {/* 右側區塊：Google 地圖鏈接和其他鏈接 */}
        <Box sx={{ flex: '1 1 45%' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Find Us
          </Typography>
          <Link
            href="https://www.google.com/maps?q=123+Innovation+Street,+Tech+City,+Country"
            target="_blank"
            rel="noopener"
            sx={{ color: '#bb86fc', textDecoration: 'none', fontSize: '0.9rem' }}
          >
            View Location on Google Maps
          </Link>
          <Box sx={{ marginTop: 2 }}>
            <Link
              href="/privacy-policy"
              sx={{
                display: 'block',
                color: '#bb86fc',
                textDecoration: 'none',
                fontSize: '0.9rem',
                marginBottom: 1,
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              sx={{ display: 'block', color: '#bb86fc', textDecoration: 'none', fontSize: '0.9rem' }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Box>

      {/* 底部版權聲明 */}
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          marginTop: 3,
          paddingTop: 2,
          borderTop: '1px solid #333',
        }}
      >
        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
      </Typography>
    </Box>
  );
};

export default FooterInfo;