import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as BlogService from './../services/blog.services.js';
import { InputTextarea } from 'primereact/inputtextarea';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import { ToastContainer, toast, Bounce } from 'react-toastify';  // Importar react-toastify
import 'react-toastify/dist/ReactToastify.css';  // Importar el CSS de react-toastify

const App = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [status, setStatus] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [newBlog, setNewBlog] = useState({ name: '', info: [{ title: '', description: '' }] });
  const [isEditDialogVisible, setIsEditDialogVisible] = useState(false);
  const [isDeleteDialogVisible, setIsDeleteDialogVisible] = useState(false);
  const [isNewDialogVisible, setIsNewDialogVisible] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false); // Nuevo estado para el loading

  useEffect(() => {
    if (!status) return;

    toast.info('Cargando blogs...', { autoClose: false, toastId: 'loadingToast' });
    BlogService.findAllBlogs()
        .then(data => {
            setAllBlogs(data);
            setStatus(false);
            toast.dismiss('loadingToast');
            toast.success('Blogs cargados con éxito');
        })
        .catch((err) => {
            console.log(err);
            toast.dismiss('loadingToast');
            toast.error('Error al cargar los blogs');
        });
}, [status]);

  useEffect(() => {
    console.log(selectedBlog);
  }, [selectedBlog]);

  const openEditDialog = (blog) => {
    setSelectedBlog(blog);
    setIsEditDialogVisible(true);
    setImageFile(null);  // Reset image file selection when opening the dialog
  };

  const openDeleteDialog = (blog) => {
    setSelectedBlog(blog);
    setIsDeleteDialogVisible(true);
  };

  const openNewDialog = () => {
    setNewBlog({ name: '', info: [{ title: '', description: '' }] });
    setIsNewDialogVisible(true);
  };

  const handleEdit = () => {
    setLoading(true);
    toast.info('Editando blog...', { autoClose: false, toastId: 'loadingToast' }); // Mostrar toast de carga

    const formData = new FormData();
    formData.append('data', JSON.stringify(selectedBlog));
    if (imageFile) {
      formData.append('image', imageFile);
    }

    BlogService.editBlog(selectedBlog._id, formData)
      .then((data) => {
        setAllBlogs(allBlogs.map(blog => blog._id === selectedBlog._id ? selectedBlog : blog));
        setIsEditDialogVisible(false);
        setStatus(true);

      })
      .catch((err) => {
        console.log(err);
        toast.dismiss('loadingToast'); // Quitar el toast de carga
        toast.error('Error al editar el blog'); // Notificación de error
      })
      .finally(() => setLoading(false));
  };

  const handleDelete = () => {
    setLoading(true);
    toast.info('Eliminando blog...', { autoClose: false, toastId: 'loadingToast' }); // Mostrar toast de carga

    BlogService.deleteBlog(selectedBlog._id)
      .then((data) => {
        setAllBlogs(allBlogs.filter(blog => blog._id !== selectedBlog._id));
        setIsDeleteDialogVisible(false);
        setStatus(true);

      })
      .catch((err) => {
        console.log(err);
        toast.dismiss('loadingToast'); // Quitar el toast de carga
        toast.error('Error al eliminar el blog'); // Notificación de error
      })
      .finally(() => setLoading(false));
  };

  const handleNewBlogChange = (index, field, value) => {
    const updatedInfo = newBlog.info.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    setNewBlog({ ...newBlog, info: updatedInfo });
  };

  const handleEditBlogChange = (index, field, value) => {
    const updatedInfo = selectedBlog.info.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    setSelectedBlog({ ...selectedBlog, info: updatedInfo });
  };

  const handleAddEntry = () => {
    setNewBlog({ ...newBlog, info: [...newBlog.info, { title: '', description: '' }] });
  };

  const handleAddEditEntry = () => {
    setSelectedBlog({ ...selectedBlog, info: [...selectedBlog.info, { title: '', description: '' }] });
  };

  const handleCreate = () => {
    if (loading) return; // Evitar ejecuciones repetidas si ya está cargando
    setLoading(true);
    
    toast.info('Creando blog...', { autoClose: false, toastId: 'loadingToast' });

    const formData = new FormData();
    formData.append('data', JSON.stringify(newBlog));
    if (imageFile) {
        formData.append('image', imageFile);
    }

    BlogService.createBlog(formData)
        .then((createdBlog) => {
            setIsNewDialogVisible(false);
            setStatus(true);

        })
        .catch((err) => {
            console.log(err);
            toast.dismiss('loadingToast');
            toast.error('Error al crear el blog');
        })
        .finally(() => setLoading(false));
};

  const getDialogWidth = () => {
    return window.innerWidth < 700 ? '80%' : '50%';
  };

  const dialogStyle = {
    width: getDialogWidth(),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div className="container mt-5">
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={1}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      /> {/* Contenedor para las notificaciones */}

      <div className='row justify-content-center'>
        <h1 className="text-center mb-4">Blogs</h1>
        <button onClick={openNewDialog} className="btn btn-primary mb-4 text-center col-auto" disabled={loading}>
          Crear Nuevo Blog
        </button>
      </div>

      <div className="row justify-content-center">
        {allBlogs && allBlogs.map(blog => (
          <Card key={blog._id} className="my-3 cardShadow titleCard col-10 col-sm-4 mx-2">
            <CardMedia
              className='imgMedia img-fluid'
              sx={{ height: 200 }}
              image={blog.image || 'https://via.placeholder.com/300'}
              title={blog.name}
            />
            <CardHeader title={blog.name} />
            <CardContent className="p-0">
              <ul className="list-group list-group-flush">
                {blog.info.map(data => (
                  <li key={data.title} className="list-group-item">{data.title}</li>
                ))}
              </ul>
            </CardContent>
            <CardActions className="row justify-content-between">
              <IconButton aria-label="edit" className="p-0 col-3" onClick={() => openEditDialog(blog)} disabled={loading}>
                <EditIcon className="" />
              </IconButton>

              <IconButton aria-label="delete" className="p-0 col-3" onClick={() => openDeleteDialog(blog)} disabled={loading}>
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>

      {selectedBlog && (
        <Dialog style={dialogStyle} header={`Editar el Blog "${selectedBlog.name}"`} visible={isEditDialogVisible} onHide={() => setIsEditDialogVisible(false)}>
          <div className="p-fluid">
            <div className=" row justify-content-center text-center mb-4">
              <div className='col-8 text-center'>
                <label htmlFor="name">Nombre del Blog</label>
                <input
                  type="text"
                  id="name"
                  value={selectedBlog.name}
                  onChange={(e) => setSelectedBlog({ ...selectedBlog, name: e.target.value })}
                  className="form-control text-center"
                  disabled={loading}
                />
              </div>
            </div>

            {selectedBlog.info.map((entry, index) => (
              <div key={index} className="form-group">
                <label htmlFor={`title-${index}`}>{index + 1}º Título</label>
                <input
                  type="text"
                  id={`title-${index}`}
                  value={entry.title}
                  onChange={(e) => handleEditBlogChange(index, 'title', e.target.value)}
                  className="form-control mb-3"
                  disabled={loading}
                />
                <label htmlFor={`description-${index}`}>Descripción</label>
                <InputTextarea
                  id={`description-${index}`}
                  value={entry.description}
                  onChange={(e) => handleEditBlogChange(index, 'description', e.target.value)}
                  className="form-control mb-3"
                  autoResize
                  disabled={loading}
                />
              </div>
            ))}

            <button className="btn btn-warning mt-2 mb-4" onClick={handleAddEditEntry} disabled={loading}>Agregar entrada</button>

            <div className="form-group">
              <label htmlFor="edit-image">Cambiar Imagen</label>
              <input
                type="file"
                id="edit-image"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="form-control"
                disabled={loading}
              />
            </div>

            <button className="btn btn-warning mt-2" onClick={handleEdit} disabled={loading}>Guardar</button>
          </div>
        </Dialog>
      )}

      <Dialog style={dialogStyle} header="Crear Nuevo Blog" visible={isNewDialogVisible} onHide={() => setIsNewDialogVisible(false)}>
        <div className="p-fluid">
          <div className="row justify-content-center text-center">
            <div className='col-8 mb-3'>
              <label htmlFor="new-name">Nombre del Blog</label>
              <input
                type="text"
                id="new-name"
                value={newBlog.name}
                onChange={(e) => setNewBlog({ ...newBlog, name: e.target.value })}
                className="form-control mb-3"
                disabled={loading}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="new-image">Seleccionar Imagen</label>
            <input
              type="file"
              id="new-image"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="form-control mb-3"
              disabled={loading}
            />
          </div>
          {newBlog.info.map((entry, index) => (
            <div key={index} className="form-group">
              <label htmlFor={`new-title-${index}`}>{index + 1}º Título</label>
              <input
                type="text"
                id={`new-title-${index}`}
                value={entry.title}
                onChange={(e) => handleNewBlogChange(index, 'title', e.target.value)}
                className="form-control mb-3"
                disabled={loading}
              />
              <label htmlFor={`new-description-${index}`}>Descripción</label>
              <InputTextarea
                id={`new-description-${index}`}
                value={entry.description}
                onChange={(e) => handleNewBlogChange(index, 'description', e.target.value)}
                className="form-control mb-3"
                autoResize
                disabled={loading}
              />
            </div>
          ))}
          <div className='row justify-content-between'>
            <button className="btn btn-warning mt-2 col-5" onClick={handleAddEntry} disabled={loading}>Agregar entrada</button>
            <button className="btn btn-warning mt-2 col-5" onClick={handleCreate} disabled={loading}>Crear</button>
          </div>
        </div>
      </Dialog>

      {selectedBlog && (
        <Dialog style={dialogStyle} header="Eliminar Blog" visible={isDeleteDialogVisible} onHide={() => setIsDeleteDialogVisible(false)}>
          <p>¿Estás seguro de que quieres eliminar este blog?</p>
          <Button label="Eliminar" className="btn btn-danger mt-2" onClick={handleDelete} disabled={loading} />
        </Dialog>
      )}
    </div>
  );
};

export default App;
