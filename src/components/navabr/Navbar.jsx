import React from 'react'
import { IoMdCart } from "react-icons/io";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Nav.css'
const Navbar = () => {
  const {selectedProducts} = useSelector((state) => state.carttt)
  const navigate = useNavigate();
  return (
    <div className=' flex justify-between items-center my-4 p-4 '>
        
<div>
<IoMdCart onClick={() => {
  navigate("/cart")
}
} className=' cursor-pointer      text-3xl '/>
<div className='  absolute  top-6   left-11  rounded-2xl border p-2 dot'>
{selectedProducts.length }
</div>

</div>
<div className='  btn  text-3xl'>
    ثبت نام
</div>
    </div>
  )
}

export default Navbar