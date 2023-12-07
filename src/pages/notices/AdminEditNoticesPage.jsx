import {useState} from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as NoticeService from '../../services/notices.services.js'

import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react';




function editNotice({show, handleClose,refresh, notice_id, notice_name, notice_description, notice_form}){

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [form, setForm] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        setId(notice_id)
    }, [show])

    function changeName(e){
        setName(e.target.value)
    }

    function changeDescription(e){
        setDescription(e.target.value)
    }

    function changeForm(e){
        setForm(e.target.value)
    }



    function onSubmit(){
        NoticeService.editNotice(notice_id, {name,description,form})
            .then(() =>{
                refresh(),
                handleClose()
            })
    }

    function acceptDeleteNotice() {

        NoticeService.deleteNotice(notice_id)
            .then(() =>{
                  refresh(),
                  handleClose()
                  
            })
        };


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h2 className='my-4 text-center'>Administrá la noticia.</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body className='row justify-content-center text-center'>        
            <form className='col-10' onSubmit={onSubmit}>

                <div className="mb-3">
                    <label htmlFor="name" className="mb-2">Nombre</label>
                    <input type="text" className="form-control" id="name" name="name"  onChange={changeName} defaultValue={notice_name} />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="mb-2">Descripción</label>
                    <textarea type="text" className="form-control" id="description" name="description" defaultValue={notice_description} onChange={changeDescription} rows="6"/>
                </div>

                <div className="my-3">
                    <label htmlFor="form" className="mb-2">Formulario</label>
                    <input type="text" className="form-control" id="form" name="form" onChange={changeForm} defaultValue={notice_form} />
                </div>

                <button className='btn btn-warning ' >Editar noticia</button>

            </form>

            <div className='col-6 text-center mt-4'>
                <h3 className='mb-3'>Eliminar noticia</h3>
                <button className='btn btn-danger' onClick={(e) => acceptDeleteNotice()}>Eliminar</button>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button className='btn btn-warning' onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default editNotice