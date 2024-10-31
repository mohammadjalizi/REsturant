import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedProducts: localStorage.getItem("selectedProducts") ?
  JSON.parse(localStorage.getItem("selectedProducts"))
    : [],
  selectedProductsID: localStorage.getItem("selectedProductsID")
    ? JSON.parse(localStorage.getItem("selectedProductsID"))
    : [],


}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart: (state, action) => {
const productWitdhQuntity={...action.payload,"quantity":1};
      state.selectedProducts.push(productWitdhQuntity)
      state.selectedProductsID.push(action.payload.id)
      console.log("doneeeeeee")
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    
    },

    incrementByAmount: (state, action) => {
      // action.payload => product From user
      console.log("a500000")
      const incresdedProuct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      incresdedProuct.quantity += 1;

      localStorage.setItem("selectedProducts",JSON.stringify(state.selectedProducts))
    },

    decrementByAmount: (state, action) => {
      const incresdedProuct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      incresdedProuct.quantity -= 1;
      if (incresdedProuct.quantity===0) {
        // delet the product
        const newArry=state.selectedProducts.filter((item)=>{
return item.id !==action.payload.id

        })
        const newArry2=state.selectedProductsID.filter((item)=>{
          return item!==action.payload.id
          
                  })
        state.selectedProducts=newArry
        state.selectedProductsID=newArry2
        localStorage.setItem("selectedProductsID",JSON.stringify(state.selectedProductsID))
  
      }
      localStorage.setItem("selectedProducts",JSON.stringify(state.selectedProducts))
    },
    deletByAmount: (state, action) => {
      const newArry=state.selectedProducts.filter((item)=>{
        return item.id !==action.payload.id
        
                })
                const newArr2 = state.selectedProductsID.filter((item) => {
                  return item !== action.payload.id;
                });
                state.selectedProducts=newArry
                state.selectedProductsID = newArr2;
                localStorage.setItem("selectedProducts",JSON.stringify(state.selectedProducts))
                localStorage.setItem("selectedProductsID",JSON.stringify(state.selectedProductsID))
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {  addToCart,incrementByAmount,deletByAmount,decrementByAmount } = counterSlice.actions

export default counterSlice.reducer