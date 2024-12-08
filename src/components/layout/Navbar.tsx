import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { LANGUAGES } from '../../i18n';
import logo from '../../assets/logo.svg'; // 導入 SVG 文件

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation('global'); // 加载 Navbar 命名空间翻译
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    handleMenuClose();
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const isMenuOpen = Boolean(anchorEl);

  const NAV_ITEMS = [
    { label: t('navbar.home'), path: '/' },
    { label: t('navbar.cases'), path: '/cases' },
    { label: t('navbar.products'), path: '/products' },
    { label: t('navbar.contact'), path: '/contact' },
  ];

  return (
    <AppBar position="sticky" sx={{top: 0, backgroundColor: '#000', color: '#fff', zIndex: 1100 }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // 左右對齊
          alignItems: 'center',
        }}
      >
        {/* 左側 Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Company Logo" width="100" height="50" />
        </Box>

        {/* 中間導航按鈕 - 桌面版顯示 */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' }, // 在手機版隱藏
            gap: 3,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color="inherit"
              sx={{
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                borderBottom: location.pathname === item.path ? '2px solid #fff' : 'none',
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* 語言切換按鈕 和 手機版菜單按鈕 */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* 語言切換按鈕 */}
          <Button
            color="inherit"
            onClick={handleMenuOpen}
            endIcon={isMenuOpen ? <ArrowDropUp /> : <ArrowDropDown />}
            sx={{
              textTransform: 'none',
              border: '1px solid #bb86fc',
              padding: '4px 8px',
              borderRadius: '20px',
              overflowY: 'auto', // 启用垂直滚动条
              '&:hover': { backgroundColor: '#333' },
            }}
          >
            {LANGUAGES.find((lang) => lang.code === i18n.language)?.label || 'English'}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            slotProps={{
              paper: {
                sx: {
                    backgroundColor: '#222', // 自定义背景颜色
                    color: '#fff',
                    maxHeight: '200px', // 设置最大高度
                    overflowY: 'auto', // 启用垂直滚动
                },
              },
            }}
          >
            {LANGUAGES.map((lang) => (
              <MenuItem
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                sx={{ '&:hover': { backgroundColor: '#444' } }}
              >
                {lang.label}
              </MenuItem>
            ))}
          </Menu>

          {/* 手機版菜單按鈕 */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* 手機版 Drawer 菜單 */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: '100%',
            backgroundColor: '#000',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
            <IconButton color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {NAV_ITEMS.map((item) => (
              <ListItem
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  textAlign: 'center',
                  color: location.pathname === item.path ? '#bb86fc' : '#fff',
                  textDecoration: 'none',
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;