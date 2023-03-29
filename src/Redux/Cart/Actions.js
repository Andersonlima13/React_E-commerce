import CartActionType from "./ActionType";

export const addProduct = (payload) => ({
    type : CartActionType.ADD_PRODUCT,
    payload,
})