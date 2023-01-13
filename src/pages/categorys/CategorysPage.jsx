
import Logo from '../../components/Logo'

import TableCategoryAge from '../../components/Tables/TableCategoryAge'
import TableCategoryWeigthMale from '../../components/TableCategoryWeigthMale'
import TableCategoryWeigthFem from '../../components/TableCategoryWeigthFem'



function CategorysPage(){

    return (
        <main className='container-sm'>
            <Logo />
            <div className='row justify-content-center'>
                <h2 className='col-12 text-center my-4'>Categoria por edad - Hombres y mujeres</h2>
                <TableCategoryAge />

            </div>

            <div className='row justify-content-center'>
                <div className='col-12 col-lg-6'>
                    <h2 className='text-center my-4'>Categoria por peso - Hombres</h2>
                    <TableCategoryWeigthMale/>
                </div>

                <div className='col-12 col-lg-6'>
                    <h2 className='text-center my-4'>Categoria por peso - Mujeres</h2>
                    <TableCategoryWeigthFem/>
                </div>

            </div>

            
            

            
        </main>)           
}


export default CategorysPage
