
import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jasonplaceholder from '../api/jasonplaceholder';
import imageapi from '../api/imageapi';
import Spinner from './Spinner';

  const App=()=>{
  const [state,setState]= useState(0);//state  to track the button clicks to fetch quotes
  const [result,setResult]=useState('');//state  used to store the quote api responce
  const [image,setImage]=useState('');//state used to grab the array of images from api
  const [backimg,setBackimg]=useState('');//state used to store the imaage src from fetched image 
   
  const style={
                backgroundImage:`url('${backimg}')`,
                backgroundSize:"100% 100%",
                backgroundAttachment:"fixed",
                width:"100%",
                position:"fixed",
                height:"100%",
                backgroundRepeat:"no-repeat",
                backgroundPosition:"center center",
                
             } 
     

       const imgsrc=(Math.floor(Math.random()*10))//genrate random no. to select the random img from fetched images 
      
  useEffect(()=>{
           
    const search=async ()=>{
          const {data}= await jasonplaceholder.get('/random',{  // <= this useeffect loads at 1st render and then fetches the quotes and set the result state a the result state is changed calls the second useeffect
            state
        })
      setResult(data.content)
     
    }
     search()
        
 
      },[state])
  
  useEffect(()=>{
    
    const fetimg=async sea =>{
          const {data}= await imageapi.get('/search/photos',{  // <= this useeffect loads at 1st render when result state is changed and fetches the imge array 
              params:{query:"universe"}
            })
        
            setImage(data.results)//we fill the feched img array into image state
          
      }
      fetimg()
      
        if(image){ setBackimg(image[imgsrc].urls.regular) }//we do this if  image state is filled so we grab  background image to set 
      
         
       
      },[result])
  
      
            
      
  return(
    
<div  style={style} className="d-flex  justify-content-center align-items-center">
  <div className="m-3"> 
    <div className="card " style={{backgroundColor:" rgba(255, 255, 255, 0.5)"}}  >
      <div className="card-header"><h5 className="text-center">Quote</h5> </div>
       <div className="card-body text-center">
         <h5 className="card-title"><Spinner result={result}/></h5>
         <button className="  btn btn-primary" onClick={()=>{setState(state+1)}}> click</button>
      </div>
    </div>
  </div>
</div>
    
         
  )}

export default App;