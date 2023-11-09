import './Home.css'
import imageslide from './Data'
import { useState ,useEffect} from 'react'
const BackgroundSlider = () => {
const [currentState, setCurrentState] = useState(0)
    useEffect(() => {
      const timer = setTimeout( ()=>{
        if(currentState===2){
          setCurrentState(0)
        }
        else{
          setCurrentState(currentState+1)
        }
      },5000)
      return ()=> clearTimeout(timer)
  },[currentState])
      
const bgImageStyle ={
backgroundImage: `url(${imageslide [currentState].url})`,
backgroundPosition:"center",
backgroundSize:'cover',
height:'100%'
}
const goToNext = (currentState)=>{
  setCurrentState(currentState)
}
return(
<div className='countiner-style' >
<div style={bgImageStyle} ></div>
<div className=''></div>
<div className='description'>
  <div>
    <h1>{imageslide[currentState].title}</h1>
    <p>{imageslide[currentState].body}</p>
  </div>
<div className='carousel-boullt' >
  {
    imageslide.map((imageslide,currentState)=>(
      <span key={currentState} onClick={()=>goToNext(currentState)}></span> 
    ))
  } </div>
</div>
</div>
)
}
export default BackgroundSlider;