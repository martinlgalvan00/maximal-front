import { useEffect, useState } from 'react';

import logo from './../../../assets/img/usuario.png'
import images from '../../../assets/img/copaImages'


let imgsCopaPitbull = images.map((image) => {
  
  return `${image.name}`
  
})

function CardCopaPitbull() {
  return (
    <div className='row justify-content-center'>
      
      {imgsCopaPitbull.map((img) =>
      <div className='col-12 col-lg-4 m-0 p-0'>
        <img className='img-fluid my-1' src={img} alt="" />
      </div>
       )}
    
    </div>
  );
}

export default CardCopaPitbull;