import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as BlogService from './../services/blog.services.js';
import * as Notify from "./../helpers/notify.js";

import { InputTextarea } from 'primereact/inputtextarea';  // Importar el componente InputTextarea de PrimeReact
import { ToastContainer } from "./../helpers/notify.js";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';

const App = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [status, setStatus] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [newBlog, setNewBlog] = useState({ name: '', info: [{ title: '', description: '' }] });
  const [isEditDialogVisible, setIsEditDialogVisible] = useState(false);
  const [isDeleteDialogVisible, setIsDeleteDialogVisible] = useState(false);
  const [isNewDialogVisible, setIsNewDialogVisible] = useState(false);

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {


    BlogService.findAllBlogs()
      .then(data => {
        setAllBlogs(data);
        setStatus(false);
        console.log(data);

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
      });
  };

  const handleDelete = () => {
    BlogService.deleteBlog(selectedBlog._id)
      .then((data) => {
        setAllBlogs(allBlogs.filter(blog => blog._id !== selectedBlog._id));
        setIsDeleteDialogVisible(false);
        setStatus(true);
        
      })
      .catch((err) => {
        console.log(err);
      });
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
      });
  };

  const getDialogWidth = () => {
    return window.innerWidth < 700 ? '80%' : '50%';
  };

  return (
    <div className="container mt-5">
      <div className='row justify-content-center'>
        <h1 className="text-center mb-4">Blogs</h1>
        <button onClick={openNewDialog} className="btn btn-primary mb-4 text-center col-auto">Crear Nuevo Blog</button>
      </div>

      <div className="row justify-content-center">
        {allBlogs && allBlogs.map(blog => (
          <Card key={blog._id} className="my-3 cardShadow titleCard col-10 col-sm-4 mx-2" >
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
              <IconButton aria-label="edit" className="p-0 col-3" onClick={() => openEditDialog(blog)} >
                <EditIcon className="" />
              </IconButton>

              <IconButton aria-label="delete" className="p-0 col-3" onClick={() => openDeleteDialog(blog)} >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>

      {selectedBlog && (
        <Dialog style={{ width: getDialogWidth() }} header={`Editar el Blog "${selectedBlog.name}"`} visible={isEditDialogVisible} onHide={() => setIsEditDialogVisible(false)}>
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
                />
                <label htmlFor={`description-${index}`}>Descripción</label>
                <InputTextarea
                  id={`description-${index}`}
                  value={entry.description}
                  onChange={(e) => handleEditBlogChange(index, 'description', e.target.value)}
                  className="form-control mb-3"
                  autoResize
                />
              </div>
            ))}

            <button className="btn btn-warning mt-2 mb-4" onClick={handleAddEditEntry}>Agregar entrada</button>

            <div className="form-group">
              <label htmlFor="edit-image">Cambiar Imagen</label>
              <input
                type="file"
                id="edit-image"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="form-control"
              />
            </div>

            <button className="btn btn-warning mt-2" onClick={handleEdit}>Guardar</button>
          </div>
        </Dialog>
      )}

      <Dialog style={{ width: getDialogWidth() }} header="Crear Nuevo Blog" visible={isNewDialogVisible} onHide={() => setIsNewDialogVisible(false)}>
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
              />
              <label htmlFor={`new-description-${index}`}>Descripción</label>
              <InputTextarea
                id={`new-description-${index}`}
                value={entry.description}
                onChange={(e) => handleNewBlogChange(index, 'description', e.target.value)}
                className="form-control mb-3"
                autoResize
              />
            </div>
          ))}
          <div className='row justify-content-between'>

            <button className="btn btn-warning mt-2  col-5" onClick={handleAddEntry}>Agregar entrada</button>
            <button  className="btn btn-warning mt-2 col-5" onClick={handleCreate}>Crear</button>

          </div>

        </div>
      </Dialog>

      {selectedBlog && (
        <Dialog style={{ width: getDialogWidth() }} header="Eliminar Blog" visible={isDeleteDialogVisible} onHide={() => setIsDeleteDialogVisible(false)}>
          <p>¿Estás seguro de que quieres eliminar este blog?</p>
          <Button label="Eliminar" className="btn btn-danger mt-2" onClick={handleDelete} />
        </Dialog>
      )}

              <ToastContainer
                position="bottom-center"
                autoClose={200}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

    </div>
    
  );
};

export default App;
