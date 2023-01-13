import {useState, useEffect} from 'react'
import * as RecordsService from '../../services/records.services.js';
import Logo from '../../components/Logo'
import _ from 'lodash'
import Select from "react-select"


import {Link, useParams} from 'react-router-dom'

function UsersListPage() {

    //Variable que contiene todos los records
    //Var con el filtro de edad
    //Var con el filtro de sexo
    
    const [recordsSquat, setRecordsSquat] = useState([])
    const [recordsBench, setRecordsBench] = useState([])
    const [recordsDeadlift, setRecordsDeadlift] = useState([])
    const [recordsTotal, setRecordsTotal] = useState([])
    const [age, setAge] = useState("24-34")
    const [sex, setSex] = useState("M")
    /*const [equiped1, setEquiped1] = useState("Raw")
    const [equiped2, setEquiped2] = useState("Wraps")*/


    //useEffect que renderiza por primera vez los records predeterminados
    useEffect(() => {
        records("24-34", "M")
    }, [])

    const optionsAge = [
        {value: "5-12",label:"5-12"},
        {value: "13-15",label:"13-15"},
        {value: "16-17",label:"16-17"},
        {value: "18-19",label:"18-19"},
        {value: "20-23",label:"20-23"},
        {value: "24-34",label:"24-34"},
        {value: "35-39",label:"35-39"},
        {value: "40-44",label:"40-44"},
        {value: "45-49",label:"45-49"},
        {value: "50-54",label:"50-54"},
        {value: "55-59",label:"55-59"},
        {value: "60-64",label:"60-64"},
        {value: "65-69",label:"65-69"},
        {value: "70-74",label:"70-74"},
        {value: "75-79",label:"75-79"}]

    const optionsSex = [
        {value: "M",label:"M"},
        {value: "F",label:"F"}]


    /*const optionsEquiped = [
        {value: "Raw",label:"Raw"},
        {value: "Wraps",label:"Wraps"},
        {value: "Raw+Wraps",label:"Raw+Wraps"},

    ]*/
    
    //Handle que guarda el value del select en age, resetea los records e imprime
    const handleChangeAge = (selectedOption) => {
        setAge(selectedOption)
        setRecordsSquat([])
        setRecordsBench([])
        setRecordsDeadlift([])
        setRecordsTotal([])
        if(sex == "M"){
            records(selectedOption.value, sex)
        }else{
            records(selectedOption.value,sex.value)
        }
        
    }

    //Handle que guarda el value del select en sex, resetea los records e imprime

    const handleChangeSex = (selectedOption2) => {
        setSex(selectedOption2)
        setRecordsSquat([])
        setRecordsBench([])
        setRecordsDeadlift([])
        setRecordsTotal([])
        if(age == "24-34"){
            records(age, selectedOption2.value)    
        }else{records(age.value, selectedOption2.value)}

    }

    //Función asincronica para imprimir los records, traer solo los nombres únicos y solo los 3 primeros.
    async function imprimo(clase,edad,sexo){

        await RecordsService.findRecords("squat",clase,edad,sexo)
            .then(records => {
                const uniq = _.uniqBy(records, 'Name')
                const primerosTres = uniq.slice(0,3)
                setRecordsSquat(data => data.concat(primerosTres))
            })

            await RecordsService.findRecords("bench",clase,edad,sexo)
            .then(records => {
                const uniq = _.uniqBy(records, 'Name')
                const primerosTres = uniq.slice(0,3)
                setRecordsBench(data => data.concat(primerosTres))
            })

            await RecordsService.findRecords("deadlift",clase,edad,sexo)
            .then(records => {
                const uniq = _.uniqBy(records, 'Name')
                const primerosTres = uniq.slice(0,3)
                setRecordsDeadlift(data => data.concat(primerosTres))
            })

            await RecordsService.findRecords("total",clase,edad,sexo)
            .then(records => {
                const uniq = _.uniqBy(records, 'Name')
                const primerosTres = uniq.slice(0,3)
                setRecordsTotal(data => data.concat(primerosTres))
            })
    }

    //Función para impimir todos los records según la clase y los filtros que seleccionemos.
    if(sex == "M"){
        function records(edad,sex){
            imprimo(52,edad,sex)
            imprimo(56,edad,sex)
            imprimo(60,edad,sex)
            imprimo(67.5,edad,sex)
            imprimo(75,edad,sex)
            imprimo(82.5,edad,sex)
            imprimo(90,edad,sex)
            imprimo(100,edad,sex)
            imprimo(110,edad,sex)
            imprimo(125,edad,sex)
            //+140
        }
    } else{
        function records(edad,sex){
            imprimo(44,edad,sex)
            imprimo(48,edad,sex)
            imprimo(52,edad,sex)
            imprimo(56,edad,sex)
            imprimo(60,edad,sex)
            imprimo(67.5,edad,sex)
            imprimo(75,edad,sex)
            imprimo(82.5,edad,sex)
            imprimo(90,edad,sex)
            //+90


        }
    }
    

    //Ordeno por clase
    recordsSquat.sort((x,y) => x.WeightClassKg - y.WeightClassKg)
    recordsBench.sort((x,y) => x.WeightClassKg - y.WeightClassKg) 
    recordsDeadlift.sort((x,y) => x.WeightClassKg - y.WeightClassKg) 
    recordsTotal.sort((x,y) => x.WeightClassKg - y.WeightClassKg) 

    return (
        <section className='container'>
            <Logo />
    
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <Select 
                        defaultValue={optionsAge[5]}
                        options={optionsAge} 
                        onChange={handleChangeAge}
                    />
                </div>
                <div className='col-6'>
                    <Select 
                        defaultValue={optionsSex[0]}
                        options={optionsSex} 
                        onChange={handleChangeSex}
                    />
                </div>
            </div>

            <div className='row justify-content-center my-2'>
                <div className='col-10 col-lg-6'>
                    <h2 className='text-center my-5 pb-2'>Sentadilla (Full Power)</h2>
                    <table className="table table-bordered text-center align-middle tableRecords">
                        <thead className='table-light'>
                            <tr>
                                <th scope="col">Clase</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Sentadilla</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Federación</th>

                            </tr>
                        </thead>
                        <tbody>
                            
                        {
                            recordsSquat.map(({_id,WeightClassKg, Name, Best3SquatKg, Date, Federation}) =>
                            <tr key={_id}>
                                <td className='text-center'>{WeightClassKg}</td>
                                <td className='text-center'>{Name}</td>
                                <td className='text-center'>{Best3SquatKg}</td>
                                <td className='text-center'>{Date}</td>
                                <td className='text-center'>{Federation}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>


                <div className='col-10 col-lg-6'>
                    <h2 className='text-center my-5 pb-2'>Banco plano (Full Power)</h2>
                    <table className="table table-bordered text-center align-middle tableRecords">
                        <thead className='table-light'>
                            <tr>
                                <th scope="col">Clase</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Banco plano</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Federación</th>

                            </tr>
                        </thead>
                        <tbody>
                            
                        {
                            recordsBench.map(({_id,WeightClassKg, Name, Best3BenchKg, Date, Federation}) =>
                            <tr key={_id}>
                                <td className='text-center'>{WeightClassKg}</td>
                                <td className='text-center'>{Name}</td>
                                <td className='text-center'>{Best3BenchKg}</td>
                                <td className='text-center'>{Date}</td>
                                <td className='text-center'>{Federation}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>


                <div className='col-10 col-lg-6'>
                    <h2 className='text-center my-5 pb-2'>Peso muerto (Full Power)</h2>
                    <table className="table table-bordered text-center align-middle tableRecords">
                        <thead className='table-light'>
                            <tr>
                                <th scope="col">Clase</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Peso muerto</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Federación</th>

                            </tr>
                        </thead>
                        <tbody>
                            
                        {
                            recordsDeadlift.map(({_id,WeightClassKg, Name, Best3DeadliftKg, Date, Federation}) =>
                            <tr key={_id}>
                                <td className='text-center'>{WeightClassKg}</td>
                                <td className='text-center'>{Name}</td>
                                <td className='text-center'>{Best3DeadliftKg}</td>
                                <td className='text-center'>{Date}</td>
                                <td className='text-center'>{Federation}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>


                <div className='col-10 col-lg-6'>
                    <h2 className='text-center my-5 pb-2'>Total (Full Power)</h2>
                    <table className="table table-bordered text-center align-middle tableRecords">
                        <thead className='table-light'>
                            <tr>
                                <th scope="col">Clase</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Total</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Federación</th>

                            </tr>
                        </thead>
                        <tbody>
                            
                        {
                            recordsTotal.map(({_id,WeightClassKg, Name, TotalKg, Date, Federation}) =>
                            <tr key={_id}>
                                <td className='text-center'>{WeightClassKg}</td>
                                <td className='text-center'>{Name}</td>
                                <td className='text-center'>{TotalKg}</td>
                                <td className='text-center'>{Date}</td>
                                <td className='text-center'>{Federation}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    )
}

export default UsersListPage