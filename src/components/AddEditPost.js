// src/components/AddEditPost.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addPost, updatePost, getPost } from '../utils/mockAPI';
import './AddEditPost.css'; // Import the CSS file

const AddEditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const existingPost = id ? getPost(id) : { title: '', author: '', content: '', date: '' };

  const [post, setPost] = useState(existingPost);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updatePost({ ...post, id });
    } else {
      addPost({ ...post, id: Date.now().toString() });
    }
    navigate('/');
  };

  return (
    <div className="add-edit-post-container">
      <form onSubmit={handleSubmit} className="add-edit-post-form">
        <h3>Add/Edit Blog</h3>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={post.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" name="author" value={post.author} onChange={handleChange} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea name="content" value={post.content} onChange={handleChange} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={post.date} onChange={handleChange} required />
        </div>
        <button type="submit">{id ? 'Update' : 'Add'} Post</button>
      </form>
    </div>
  );
};

export default AddEditPost;
