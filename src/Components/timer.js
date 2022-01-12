
import {Timerbtn} from './timerbtn'
import './timer.css';
import {  useState } from 'react';

export function Timer () {
 const [ start , setStart] = useState( {ms:0 , s:0 , m: 0 ,  h: 0  } )
 const [time  ,setTime] = useState()
const [status  ,setStatus] = useState(0)
console.log(start)
const val =() =>{
   state()
   setStatus(1)

   setTime(setInterval(state, 10))
 }



 const stop =() =>{
   state(1)

   setStatus(2)
clearInterval(time)
 }


 const reset =() =>{

   clearInterval(time)
   setStatus(0)
   setStart({ms:0 , s:0 , m: 0 ,  h: 0 })



 }
 const resume =() => val()


 console.log(val)
   let updateMS = start.ms , updateS = start.s  ,updateM = start.m  , updateH = start.h

  const state = () =>{
   if (updateM === 60 ) {
      updateH++        
      updateM = 0
   }
   console.log(state)
   if (updateS === 60 ) {
      updateM++        
      updateS = 0
   }
   if (updateMS === 100 ) {
      updateS++        
      updateMS = 0
   }
   updateMS++
   return setStart({   ms : updateMS , s : updateS , m : updateM   , h : updateH })

  }
   const h = () =>{
      if(start.h ===0 ){
          return ""
      }       else{
          return (
          <span>{(start.h  >=    10 ) ?   start.h  : "0" + start.h }</span>
          )
      }
   }
   console.log(h())
    return (
    <div className="App">
    <div className="stopwatch">
        
    <h1>STOPWATCH </h1>

         <h1 className='circle '> 
                   
              {h()} 
             <span className='time'>{(start.m >= 10 )?   start.m  : "0" +   start.m  }</span>:
             <span className='time'>{(start.s >= 10 )?   start.s  : "0" +   start.s  }</span>:
             <span className='time'>{(start.ms >= 10 )?   start.ms  : "0" +   start.ms  }</span>
               </h1>   
            </div> 
     

     
<Timerbtn status={status} resume={resume}  reset={reset}  val= {val}   stop={stop} /> 
     </div>
  );
}


