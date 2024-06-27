// src/components/BlogPostList.js
import React, { useState, useEffect } from 'react';
import { getPosts, deletePost } from '../utils/mockAPI';
import { Link } from 'react-router-dom';
import './BlogPostList.css'; // Import the CSS file

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const handleDelete = (id) => {
    deletePost(id);
    setPosts(getPosts());
  };

  return (
    <div className="blog-post-list">
      <h1>BlogPosts</h1>
      <div className="blog-post-container">
        {posts.map(post => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>By {post.author}</p>
            <p>{post.summary}</p>
            <p>{new Date(post.date).toLocaleDateString()}</p>
            <Link to={`/post/${post.id}`} className='read-more'>Read More</Link>
            
            <button onClick={() => handleDelete(post.id)} className='delete-button'>Delete</button>
          </div>
        ))}
      </div>
      <Link to="/add" className='add-new-post'>Add New Post</Link>
    </div>
  );
};

export default BlogPostList;
