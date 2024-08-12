import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as BlogService from '../../services/blog.services';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';

const BlogPage = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    BlogService.findAllBlogs()
      .then(data => {
        setAllBlogs(data);
        setFilteredBlogs(data);
      });
  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchQuery(searchValue);
    const filtered = allBlogs.filter(blog => 
      blog.name.toLowerCase().includes(searchValue) ||
      blog.info.some(data => data.title.toLowerCase().includes(searchValue))
    );
    setFilteredBlogs(filtered);
  };

  return (
    <section className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-10 col-lg-6 text-center my-5'>
          <h1 className="display-4">Blog Maximal STR Corp</h1>
          <p className="lead">Encuentra artículos interesantes sobre nuestros temas.</p>
          <input 
            type="text" 
            placeholder="Buscar en el blog..." 
            className='form-control mt-3 mb-5' 
            value={searchQuery}
            onChange={handleSearch} 
          />
        </div>
      </div>
     
      <div className="row justify-content-center">
        {filteredBlogs.map(blog => (
          <Link 
            key={blog._id}
            className='col-10 col-sm-6 col-md-4 col-lg-3 mx-2 mb-4 text-decoration-none' 
            to={`/blogs/${blog._id}`}
          >
            <Card className="h-100 shadow-sm border-0">
              <CardMedia
                sx={{ height: 200 }}
                image={blog.image || 'https://via.placeholder.com/300'}
                title={blog.name}
              />
              <CardContent className="p-3">
                <h5 className="card-title text-dark">{blog.name}</h5>
                <ul className="list-unstyled">
                  {blog.info.map((data, index) => (
                    <li key={index} className="text-muted">{data.title}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
