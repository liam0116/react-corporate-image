import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import { LocationOn, Email, Phone } from '@mui/icons-material';
import logo from '../../assets/logo.svg'; // 導入 SVG 文件

const FooterInfo: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff'}}>
      <Divider sx={{ backgroundColor: '#333', marginBottom: 4 }} />

      {/* 內容區塊：一排三個 */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'start',
          gap: 4,
          textAlign: 'center',
        }}
      >
        {/* 左側區塊：公司資訊（含 Logo） */}
        <Box sx={{ flex: '1 1 30%' }}>
          <img src={logo} alt="Company Logo" width="80" height="80" />
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
           Company Name 棟
          </Typography>
        </Box>

        {/* 中間區塊：聯繫方式 */}
        <Box sx={{ flex: '1 1 30%', borderLeft: '1px solid #333', paddingLeft: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}
          >
            <LocationOn sx={{ color: '#bb86fc' }} /> 123 Innovation Street, Tech City, Country
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}
          >
            <Email sx={{ color: '#bb86fc' }} /> info@company.com
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}
          >
            <Phone sx={{ color: '#bb86fc' }} /> +1 234 567 890
          </Typography>
        </Box>

        {/* 右側區塊：Google 地圖鏈接和其他鏈接 */}
        <Box sx={{ flex: '1 1 30%', borderLeft: '1px solid #333', paddingLeft: 2 }}>
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
              sx={{ display: 'block', color: '#bb86fc', textDecoration: 'none', fontSize: '0.9rem', marginBottom: 1 }}
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