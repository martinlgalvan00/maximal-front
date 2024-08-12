import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as BlogService from '../../services/blog.services.js';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    BlogService.findByBlogId(id)
      .then(data => setBlog(data));
  }, [id]);

  if (!blog) {
    return <div>Cargando...</div>;
  }

  return (
    <section className="container-fluid">
      <div className="row justify-content-center ">
        <div className="col-12 col-md-8 colorBlog mt-5">
          <h1 className="my-4">{blog[0].name}</h1>

          {blog[0].image && (
            <div className="text-center  contImagen mb-4">
              <img 
                src={blog[0].image} 
                alt={blog[0].name} 
                className="img-fluid rounded shadow-sm"
              />
            </div>
          )}

          <ul className="list-group list-group-flush">
            {blog[0].info.map((data, index) => (
              <div key={index} className="mb-4">
                <h2 className="list-group-item border-0 p-0 mb-3">{data.title}</h2>
                <p className="list-group-item border-0 p-0">{data.description}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
