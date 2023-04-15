import CartActionType from "./ActionType"

const initialState = {
   Products  : [] ,
   ProductsPrice : 0

} 

/// erro ao retornar o inicial state 

const cartReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case CartActionType.ADD_PRODUCT:
            return {
                ...initialState, Products: [...initialState.Products , action.payload ,console.log(state)],
                
            };

        default:
            return state;
    }

}

export default cartReducer