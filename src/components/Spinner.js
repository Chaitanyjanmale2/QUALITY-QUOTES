import React  from 'react';
//this spinner runs when quote is not fetched
const Spinner =(props)=>{
    const reload=()=>{
 if(props.result!==''){
      return (<div>{props.result}</div>)
     }else{
            return (
            <div className="spinner-border" role="status"><span className="sr-only">loading...</span></div>
         )
     }
    }
    
    return(
       <div>{reload()}</div> 
    )
}
export default Spinner;