import { useEffect, useState } from 'react';

import logo from './../../../assets/img/usuario.png'
import images from '../../../assets/img/elite2021Images'


let imgsElite2021 = images.map((image) => {
  
  return `${image.name}`
  
})




function CardElite2021Images() {
  return (
    <div className='row justify-content-center'>
      
      
        
      {imgsElite2021.map((img) =>
      <div className='col-12 col-md-5 col-lg-4 p-0'>
        <img className='img-fluid my-1' src={img} alt="" />
      </div>
       )}


    

    </div>
  );
}

export default CardElite2021Images;