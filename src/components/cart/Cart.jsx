import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { PiMinusCircle } from "react-icons/pi";
import { IoAddCircleOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux'

import './Cart.css'

import { decrementByAmount, deletByAmount, incrementByAmount } from '../../redux/cartSlice';
import Navbar from '../../components/navabr/Navbar';
let Subtotal=0
const Cart = () => {
  let Subtotal=0

  // @ts-ignore
  const {selectedProducts} = useSelector((state) => state.carttt)
  const dispatch = useDispatch()
  console.log(selectedProducts)

  return (

    <>
    <Navbar/>
    <div dir='rtl' className='  bg-[#2C5149]  flex  md:justify-between  justify-center    flex-wrap  md:m-20   '>



 



    <div className='  flex flex-wrap  w-96   '>
    <h1 className=' my-24 flex   items-center text-sm '>    <p className="text-sm font-semiBold  text-white xl:text-xl leading-5.5">سبد خرید شما</p> <span className='   p-3 text-sm  font-medium text-white   '> {selectedProducts.length} عدد کالا </span></h1>
  
  {selectedProducts.map((item)=>{
      Subtotal+=item.price *item.quantity

return(

  <div dir="rtl" className="   mb-6 w-[17rem]   shadow-[box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;]   p-4 rounded-2xl shadow-slate-300  item-container flex-wrap    ">
      
<div className=' my-3 '>

{item.title}
  </div>

  <div className='    photo '>

<div className=' my-4  image'>  
  
<img className='  size-44 ' src={item.image} alt="" />
  
   </div>
<div className=' flex items-center my-12 '>  
  
<div className="price">
 { Number(item.price) *item.quantity} تومان
  </div>  
<div className=' flex items-center  gap-2 flex-wrap '>
<IoAddCircleOutline onClick={(() => {
  dispatch(incrementByAmount(item))
}
)} className=' mr-6 cursor-pointer  text-white text-2xl'/>
<span className=' sm:gap-2 '> {item.quantity} </span>
<PiMinusCircle onClick={() => {
dispatch(decrementByAmount(item))
}
} className=' cursor-pointer   text-white text-2xl' />
  <MdDeleteOutline onClick={() => {
     dispatch(deletByAmount(item))
  }
  }  />
  </div>
 
  
   </div>
    </div>

  


 
</div>
)

  })}


{/* end cahs card */}

    </div>
    <div className='  w-96  shadow-3xl rounded-1xl  m-32  ' >
<div className=' flex  justify-between ' >
<h1> صورتحساب </h1>



</div>
<div className=' flex justify-between my-5   shadow-2xl '>



<span className=' '> قیمت محصولات </span>
<span className=' text-sm  font-medium text-white '>{Subtotal}  تومان </span>


</div>
<div className=' flex justify-between my-5   shadow-2xl '>



<span className=' '> جمع کل  </span>
<span className=' text-sm  font-medium text-white '>{Subtotal}  تومان </span>


</div>
<button className='   opacity-100 hover:opacity-75   w-full p-2  border rounded-xl bg-lime-600 '>ادامه خرید</button>
</div>
    </div>  
    </>
  )
}

export default Cart
