// // src/components/BlogPost.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { getPost } from '../utils/mockAPI';
// import './BlogPost.css'; // Import the CSS file

// const BlogPost = () => {
//   const { id } = useParams();
//   const post = getPost(id);

//   if (!post) {
//     return <div>Post not found</div>;
//   }

//   return (
//     <div className="blog-post-container">
//       <div className="blog-post">
//         <h1>{post.title}</h1>
//         <p className="author">By {post.author}</p>
//         <p className="date">{new Date(post.date).toLocaleDateString()}</p>
//         <p>{post.content}</p>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;


// src/components/BlogPost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPost } from '../utils/mockAPI';
import { FaEdit } from 'react-icons/fa';
import './BlogPost.css'; // Import the CSS file

const BlogPost = () => {
  const { id } = useParams();
  const post = getPost(id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <div className="blog-post-header">
          <h1>{post.title}</h1>
          <Link to={`/edit/${post.id}`} className="edit-icon">
            <FaEdit />
          </Link>
        </div>
        <p className="author">By {post.author}</p>
        <p className="date">{new Date(post.date).toLocaleDateString()}</p>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
