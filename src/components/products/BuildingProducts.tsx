import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid2, Pagination } from '@mui/material';

// 模拟商品数据
const products = [
  {
    id: 1,
    name: '建築商品 A',
    image: '/images/products/product1.jpg',
    description: '高品質的建築商品，提供穩定與持久性。',
  },
  {
    id: 2,
    name: '建築商品 B',
    image: '/images/products/product2.jpg',
    description: '創新設計，適合現代化建築需求。',
  },
  {
    id: 3,
    name: '建築商品 C',
    image: '/images/products/product3.jpg',
    description: '堅固耐用，適用於多種建築用途。',
  },
  {
    id: 4,
    name: '建築商品 D',
    image: '/images/products/product4.jpg',
    description: '環保材料，助力可持續建築。',
  },
  {
    id: 5,
    name: '建築商品 E',
    image: '/images/products/product4.jpg',
    description: 'sdasd，dasda。',
  },
];

const BuildingProducts: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 4;

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const displayedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const placeholders = Array.from(
    { length: productsPerPage - displayedProducts.length },
    (_, index) => (
      <Grid2
        size={{ xs: 12, sm: 6, md: 3 }}
        key={`placeholder-${index}`}
        sx={{
          height: 350,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          visibility: 'hidden', // 隱藏占位符
        }}
      >
        <Card
          sx={{
            height: 350, // 固定卡片高度
            width: 300, // 固定卡片寬度
            backgroundColor: '#1f1f1f',
            borderRadius: '12px',
          }}
        />
      </Grid2>
    )
  );

  return (
    <Box
      sx={{
        backgroundColor: '#121212', // 黑灰色背景
        color: '#fff', // 白色字體
        width: 'auto',
        padding: 6, // 调整上下左右一致的内边距
        textAlign: 'center', // 居中对齐内容
      }}
    >
      {/* 標題 */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#bb86fc', // 紫色標題
          marginBottom: 6,
        }}
      >
        建築商品頁面
      </Typography>

      {/* 商品展示區 */}
      <Grid2 container spacing={4} >
        {displayedProducts.map((product) => (
          <Grid2
            size={{ xs: 12, sm: 6, md: 3 }}
            key={product.id}
          >
            <Card
              sx={{
                height: 350, // 統一卡片高度
                width: 300, // 統一卡片寬度
                backgroundColor: '#1f1f1f', // 深灰色卡片背景
                color: '#fff',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.6)',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', // 均勻分佈內容
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  height: 200, // 固定圖片高度
                  objectFit: 'cover',
                  borderRadius: '12px 12px 0 0', // 圓角
                }}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexGrow: 1,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#bb86fc', // 紫色標題
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#e0e0e0', // 淺灰色描述
                  }}
                >
                  {product.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 'bold',
                    color: '#bb86fc',
                    textAlign: 'center',
                  }}
                >
                  以需求定價，歡迎詢問
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
        {/* 填充占位符，保持版面整齊 */}
        {placeholders}
      </Grid2>

      {/* 分頁 */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 6,
        }}
      >
        <Pagination
          count={Math.ceil(products.length / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            '& .MuiPaginationItem-root': {
              color: '#bb86fc',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default BuildingProducts;