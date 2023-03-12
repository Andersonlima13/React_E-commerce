// armazena state , no caso o state do usuário 

const initialState = {
    current : null,
}


const userReducer = (state = initialState, action) => {
    if (action.type == "User/login"){
        return{... state , currentUSer : 10}
    }
        return state

 }


export default userReducer