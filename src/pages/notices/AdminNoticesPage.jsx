import {useState} from 'react'
import Logo from '../../components/Logo'
import CreateNotice from '../../components/CreateNotice'

function AdminNoticesPage(){

    return (
        <main className='container-sm'>

            <Logo />
            
            <CreateNotice/>
            
        </main>)           
}


export default AdminNoticesPage
