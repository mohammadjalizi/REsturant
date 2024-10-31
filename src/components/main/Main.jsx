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



    <div className="menu-item">
    <img
      src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-1.jpg"
      alt=""
    />
    <div className="title">Food Restaurant | Chineese &amp; Thai</div>
    <div className="location">Lahore, Pakistan</div>
    <div className="order flex">
      <div className="price">$25.00</div>
      <a href="#" className="btn btn-menu">
        Order Now
      </a>
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