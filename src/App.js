// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPost from './components/BlogPost';
import AddEditPost from './components/AddEditPost';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<BlogPostList />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/add" element={<AddEditPost />} />
        <Route path="/edit/:id" element={<AddEditPost />} />
      </Routes>
    </Router>
  );
}

export default App;
