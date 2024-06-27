// src/utils/mockAPI.js
export const getPosts = () => {
    const posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : [];
  };
  
  export const getPost = (id) => {
    const posts = getPosts();
    return posts.find(post => post.id === id);
  };
  
  export const addPost = (post) => {
    const posts = getPosts();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  };
  
  export const updatePost = (updatedPost) => {
    const posts = getPosts();
    const index = posts.findIndex(post => post.id === updatedPost.id);
    posts[index] = updatedPost;
    localStorage.setItem('posts', JSON.stringify(posts));
  };
  
  export const deletePost = (id) => {
    const posts = getPosts();
    const updatedPosts = posts.filter(post => post.id !== id);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };
  