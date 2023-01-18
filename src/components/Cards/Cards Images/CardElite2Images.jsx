import { useEffect, useState } from 'react';

import logo from './../../../assets/img/usuario.png'
import imagesElite2022 from '../../../assets/img/elite2022Images'


let imgsElite2022 = imagesElite2022.map((image) => {
  
  return `${image.name}`
  
})




function CardElite2022Images() {
  return (
    <div className='row justify-content-center'>
      
      
        
      {imgsElite2022.map((img) =>
      <div className='col-12 col-lg-4 m-0 p-0'>
        <img className='img-fluid my-1' src={img} alt="" />
      </div>
       )}


    

    </div>
  );
}

export default CardElite2022Images;