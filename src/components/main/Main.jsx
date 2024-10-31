import React from 'react'
import './main.css'
import { ImCart } from "react-icons/im";
import { useState } from 'react';
import { useGetproductsByNameQuery } from '../../redux/ProductsApi';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart, decrementByAmount, deletByAmount, incrementByAmount } from '../../redux/cartSlice';
import { IoAddCircleOutline } from 'react-icons/io5';
import { PiMinusCircle } from 'react-icons/pi';
import { MdDeleteOutline } from 'react-icons/md';
import Loading from '../loadin/Loding';
const myproject=[
{ title:"برگر", Category:"barger",imgpath:"public/img/burger/bacon-2.png",price:22 },
{ title:"چیکن زغالی", Category:"chiken",imgpath:"public/img/chicken/box-3.png",price:20 },
{ title:"سیب زمینی", Category:"fries",imgpath:"public/img/fries/cheese-fries.png",price:"۳٬۱۰۰٬۰۰۰"  },

]
const Main = () => {
  const { data, error, isLoading } = useGetproductsByNameQuery()
  const {selectedProducts,selectedProductsID} = useSelector((state) => state.carttt)

  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myproject);

  const dispatch = useDispatch()
  if (isLoading) {
    return (
<div>

<Loading/>
</div>

    )
  }
if (data) {
  return (
    <div className='    flex    mt-8    gap-5 '>
        
<div  className="left flex    flex-col     gap-4  ">
<button onClick={() => {
  setcurrentActive("all")
  const newarry=myproject.filter((item)=>{
return  item.Category=== "barger"

  })
  setArr(newarry)
}
} className={currentActive==="all"?"active":null}>  صبحانه  </button>
<button onClick={() => {
  setcurrentActive("chiken")
  const newarry=myproject.filter((item)=>{
    return  item.Category=== "chiken"
    
      })
      setArr(newarry)
}
} className={currentActive==="chiken"?"active":null}> پیش غذا</button>
<button onClick={() => {
  setcurrentActive("rice")
  const newarry=myproject.filter((item)=>{
    return  item.Category=== "fries"
    
      })
      setArr(newarry)
}
} className={currentActive==="rice"?"active":null}>غذای اصلی</button>
<button onClick={() => {
  setcurrentActive("pasta")
}
} className={currentActive==="pasta"?"active":null}>پاستا</button>
<button onClick={() => {
  setcurrentActive("pitzaa")
}
} className={currentActive==="pitzaa"?"active":null}>پیتزا
    
</button>
</div>
<div className="right   grid lg:grid-cols-3 md:grid-cols-2 gap-8   mb-16 ">
{arr.map((item)=>{

  return(



    <div
    className="font-bold w-[250px]   p-5 flex flex-col rounded-2xl gap-2 shadow-xl
 ">
    <img
       src="https://fastfood-dashboard.netlify.app/img/chicken/deluxe-2.png"
       alt=""
       className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
    />
    <div className=" text-sm  flex flex-col  items-end gap-4 ">
       <h2 className=' text-black '>{item.title}</h2>
     <div dir='rtl' className=' flex  '>
     <span   className="text-yellow   text-red-600 ">  {item.price} </span>
     <span> ریال</span>
      </div>
    </div>

    <div className="flex justify-between mt-4 ">
       <span className="flex items-center justify-center">
         
       </span>

       {/* Add to Cart */}
       <button
          onClick={() => 
             dispatch(addToCart(item))
          }
          className="p-1 text-sm text-white rounded-lg bg-yellow hover:text-black">
          Add to cart
       </button>
    </div>
 </div>

  )
})}

</div>
    </div>
  )
}
if (error) {
  return(

    <h1>eroooooorrrrr</h1>
  )

}

}

export default Main