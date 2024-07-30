import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        catg: [],
        selCatg: "beauty",
        cart: [],
        productList:[],
        search:null,
        user:''
    },
    reducers: {
        setProduct(state, action) {
            state.list = action.payload;
        },
        setCatg(state, action) {
            state.catg = action.payload;
        },
        setSelectedCatg(state, action) {
            state.selCatg = action.payload;
        },
        addCart(state, action) {
            // Add item to cart with initial quantity
            state.cart.push({ ...action.payload, qty: 1 });
        },
        removeCart(state, action) {
            state.cart = state.cart.filter((el) => el.id !== action.payload.id);
        },
        increaseQty(state, action) {
            const item = state.cart.find((el) => el.id === action.payload.id);
            if (item) {
                item.qty += 1;
            }
        },
        decreaseQty(state, action) {
            const item = state.cart.find((el) => el.id === action.payload.id);
            if (item && item.qty > 1) {
                item.qty -= 1;
            }
        },
        setSearch(state,action){
            // console.log(action)
            state.search=action.payload;
        },
        setProductList(state,action){
            console.log(action)
            state.productList=action.payload;
        },
        setUser(state,action){
            // console.log(action);
            state.user=action.payload;
        }
    },
});
export const { setProduct, setCatg,
     setSelectedCatg, addCart, removeCart, 
    increaseQty, decreaseQty,setSearch,
   setProductList,setUser
 } = productSlice.actions;
export default productSlice.reducer;
