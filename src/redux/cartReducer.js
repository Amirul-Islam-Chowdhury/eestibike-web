const initialstate ={
    cartItems:["1"],
}

export const cartReducer = (state= initialstate, action) =>{


    switch(action.type){
        case "ADD_TO_CART": {
            return{
                ...state,
                cartItems:[...state.cartItems, action.payload]
            }
        }



        
    default:return state;
}
}