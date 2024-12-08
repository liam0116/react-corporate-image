import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/home';
import CasesPage from './pages/cases';
import ContactPage from './pages/contact';
import ProductsPage from './pages/products';
import NotFoundPage from './pages/NotFoundPage'; // 引入 404 頁面

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* 404 頁面匹配 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;