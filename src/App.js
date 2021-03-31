import React, {useState} from 'react';
import Images from './Images';
import './App.css';

const App = ()=>{
    const [selectImg, setSelectImg] = useState(Images[0]);
   
 return (
      <div className='App'>
         <div className='container'>
         <img src={selectImg} alt="selected" className="selected" />
           <div className='imgContainer'>
           <ul>
              {Images.map((img, index)=>{
                return(
                  <li>
                  <img style={{border : selectImg === img ? '4px solid purple':null}} 
                  src={img}
                  key={index}
                  alt=''
                  onClick={()=>{setSelectImg(img)}}
                  />
                  </li>
                  )
              })}
             </ul>
           </div>
         </div>
      </div>
    );
};

export default App;