import { useState } from 'react';
import * as NoticeService from '../../services/notices.services.js';
import { useNavigate } from 'react-router-dom';

function CreateNotice({ refresh }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [form, setForm] = useState('');
    const [image, setImage] = useState(null); // Nuevo estado para el archivo
    const navigate = useNavigate();

    function changeName(e) {
        setName(e.target.value);
        console.log(e.target.value)
    }

    function changeDescription(e) {
        setDescription(e.target.value);
        console.log(e.target.value)
    }

    function changeForm(e) {
        setForm(e.target.value);
        console.log(e.target.value)
    }


    // Manejar cambios en la carga de archivos
    function handleFileChange(e) {
        setImage(e.target.files[0]);
        console.log(e.target.files[0])
    }

    function onSubmit(e) {
        e.preventDefault()

        NoticeService.createNotice({name,description,form,image}).then(() => {
            refresh();
            console.log("done")

        });
    }

    return (
        <div>
            <h2 className='my-4 text-center'>Agregá una noticia.</h2>
            <div className='row justify-content-center text-center'>
                <form  className='col-10 col-lg-6' onSubmit={onSubmit}>
                    <div className='my-3'>
                        <label htmlFor='name' className='visually-hidden '>
                            Nombre de la noticia
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='name'
                            name='name'
                            onChange={changeName}
                            value={name}
                            placeholder='Nombre de la noticia'
                        />
                    </div>
                    <div className='my-3'>
                        <label htmlFor='description' className='visually-hidden '>
                            Descripción de la noticia
                        </label>
                        <textarea
                            type='text'
                            className='form-control'
                            id='description'
                            name='description'
                            onChange={changeDescription}
                            placeholder='Descripcion de la noticia'
                        />
                    </div>
                    <div className='my-3'>
                        <label htmlFor='form' className='visually-hidden '>
                            Formulario
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='form'
                            name='form'
                            onChange={changeForm}
                            placeholder='Formulario'
                        />
                    </div>
                    <button className='input-group-text btn btn-warning'>Crear noticia</button>
                </form>
            </div>
        </div>
    );
}

export default CreateNotice;