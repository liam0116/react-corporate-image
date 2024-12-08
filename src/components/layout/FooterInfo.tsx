import React from 'react';
import { Box, Typography, Link, Divider, useMediaQuery } from '@mui/material';
import { Facebook, Instagram, LineStyle } from '@mui/icons-material';

const FooterInfo: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); // 偵測是否為手機版本

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', padding: isMobile ? 1 : 3 }}>
      <Divider sx={{ backgroundColor: '#333', marginBottom: isMobile ? 1 : 3 }} />

      {/* 內容區塊 */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row', // 手機版上下排列，桌面版水平排列
          justifyContent: 'center', // 水平置中
          alignItems: isMobile ? 'center' : 'start', // 手機版置中，桌面版靠上
          gap: isMobile ? 2 : 4, // 調整區塊間距
          textAlign: 'center',
        }}
      >
        {/* 第一區：客戶服務時間 */}
        <Box sx={{ flex: isMobile ? '1 1 auto' : '1 1 30%', maxWidth: '300px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: isMobile ? 0.5 : 1 }}>
            客戶服務時間
          </Typography>
          <Typography variant="body2">週一～週五：09:00 ~ 22:00 (UTC+8)</Typography>
          <Typography variant="body2">週六／日及連續假日：12:00 ~ 18:00 (UTC+8)</Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            電話：+886-2-7755-0575
          </Typography>
          <Typography variant="body2">傳真：+886-2-2784-5272</Typography>
          <Typography variant="body2">信箱：customer_tw@asiayo.com</Typography>
        </Box>

        {/* 第二區：公司資訊 (僅桌面版顯示) */}
        {!isMobile && (
          <Box sx={{ flex: '1 1 30%', maxWidth: '300px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              公司資訊
            </Typography>
            <Typography variant="body2">帥哥棟</Typography>
            <Typography variant="body2">高雄市楠梓區德祥路</Typography>
          </Box>
        )}

        {/* 第三區：社群媒體 */}
        <Box sx={{ flex: isMobile ? '1 1 auto' : '1 1 30%', maxWidth: '300px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: isMobile ? 0.5 : 1 }}>
            社群媒體
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center', // icon 水平置中
              alignItems: 'center',
              gap: isMobile ? 1.5 : 2, // 手機版 icon 間距更緊湊
            }}
          >
            <Link href="#" aria-label="Facebook" sx={{ color: '#bb86fc' }}>
              <Facebook fontSize="medium" />
            </Link>
            <Link href="#" aria-label="Instagram" sx={{ color: '#bb86fc' }}>
              <Instagram fontSize="medium" />
            </Link>
            <Link href="#" aria-label="LINE" sx={{ color: '#bb86fc' }}>
              <LineStyle fontSize="medium" />
            </Link>
          </Box>
        </Box>
      </Box>

      {/* 隱私政策和服務條款 */}
      <Box
        sx={{
          borderTop: '1px solid #333',
          paddingTop: 2,
          textAlign: 'center',
          marginTop: 2,
        }}
      >
        <Link
          href="/privacy-policy"
          sx={{ color: '#bb86fc', textDecoration: 'none', marginRight: 2 }}
        >
          隱私政策
        </Link>
        <Link href="/terms-of-service" sx={{ color: '#bb86fc', textDecoration: 'none' }}>
          服務條款
        </Link>
      </Box>

      {/* 底部版權聲明 */}
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          paddingTop: 1,
        }}
      >
        &copy; {new Date().getFullYear()} 公司名稱. 版權所有.
      </Typography>
    </Box>
  );
};

export default FooterInfo;