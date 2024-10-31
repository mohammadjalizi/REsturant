import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=' home flex flex-col  items-center '>
<div  className='  border rounded-3xl m-6 ' >
<video  width={340}   height={140} autoPlay  playsInline preload="" loop  muted>
  <source src="public\Ritaj 1402-09-30 - Talk V1.2.mov" />
</video> 


</div>

{/* languch */}
<div className='  left-14  bg-gradient-to-r    flex gap-6  mt-4 mb-2 '>

  
<h1 onClick={() => {
  navigate("/app")
}
}  className=' cursor-pointer border rounded-3xl p-3  '>  منوی فارسی </h1>
<h1  onClick={() => {
  navigate("/app")
}
} className=' cursor-pointer  border rounded-3xl p-3 '> القائمة  العربية</h1>

</div>
    </div>
  )
}

export default Home