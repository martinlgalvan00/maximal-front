import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as BlogService from '../../services/blog.services';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const BlogPage = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true); // Estado para controlar la carga
  const toastId = useRef(null); // useRef para manejar los toast

  useEffect(() => {
    toastId.current = toast.info('Cargando blogs...', { autoClose: false, toastId: 'loadingToast' });

    BlogService.findAllBlogs()
      .then(data => {
        setAllBlogs(data);
        setFilteredBlogs(data);
        toast.dismiss(toastId.current); // Quitar el toast de carga
        toast.success('Blogs cargados con éxito');
      })
      .catch((err) => {
        console.log(err);
        toast.dismiss(toastId.current); // Quitar el toast de carga
        toast.error('Error al cargar los blogs');
      })
      .finally(() => setLoading(false)); // Finaliza la carga
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
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <div className='row justify-content-center'>
        <div className='col-10 col-lg-6 text-center my-5'>
          <h1 className="display-4">Blog Maximal STR Corp</h1>
          <p className="lead">Encontrá artículos escritos por nosotros, sobre entrenamiento.</p>
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
        {loading ? (
          <p>Cargando blogs...</p> // Mostrar un mensaje mientras los blogs están cargando
        ) : (
          filteredBlogs.map(blog => (
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
          ))
        )}
      </div>
    </section>
  );
};

export default BlogPage;
