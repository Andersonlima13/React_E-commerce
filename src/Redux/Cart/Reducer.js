import CartActionType from "./ActionType"

const initialState = {
   Products  : [],
   ProductsPrice : 0

} 

const cartReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case CartActionType.ADD_PRODUCT:
            return {
                ...initialState, Products: [...initialState.Products , action.payload],
            };

        default:
            return state;
    }

}

export default cartReducer