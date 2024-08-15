import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as BlogService from '../../services/blog.services.js';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga
  const toastId = useRef(null); // useRef para manejar los toast

  useEffect(() => {
    const showLoadingToast = setTimeout(() => {
      if (!toastId.current) {
        toastId.current = toast.info('Cargando detalles del blog...', { autoClose: false, toastId: 'loadingToast' });
      }
    }, 300); // Demora de 300ms para mostrar el toast

    BlogService.findByBlogId(id)
      .then(data => {
        clearTimeout(showLoadingToast); // Limpiar el timeout si los datos llegan rápido
        setBlog(data);
        setLoading(false); // Finalizar la carga cuando los datos se obtienen correctamente
        toast.dismiss(toastId.current); // Quitar el toast de carga
        toast.success('Detalles del blog cargados con éxito');
        toastId.current = null; // Resetear el toastId
      })
      .catch((err) => {
        clearTimeout(showLoadingToast); // Limpiar el timeout si hay un error rápido
        console.log(err);
        setLoading(false); // Finalizar la carga en caso de error
        toast.dismiss(toastId.current); // Quitar el toast de carga
        toast.error('Error al cargar los detalles del blog');
        toastId.current = null; // Resetear el toastId
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-5">
        <p></p>
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
      </div>
    );
  }

  if (!blog || blog.length === 0) {
    return (
      <div className="container mt-5">
        <p>No se encontraron detalles del blog.</p>
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
      </div>
    );
  }

  return (
    <section className="container-fluid">
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

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 colorBlog mt-5">
          <h1 className="my-4">{blog[0].name}</h1>

          {blog[0].image && (
            <div className="text-center contImagen mb-4">
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
