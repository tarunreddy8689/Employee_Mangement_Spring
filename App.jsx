import React, { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import NotificationProvider, { useNotification } from './components/Notification';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';
import './App.css';

function AppRoutes() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: '80vh' }}
    >
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </Container>
    </motion.div>
  );
}

export default function App() {
  return (
    <NotificationProvider>
      <Header company="VEDTS" />
      <AppRoutes />
      <Footer />
    </NotificationProvider>
  );
}