// armazena state , no caso o state do usuário 

const initialState = {
    currentUser : null,
}


const userReducer = (state = initialState, action) => {
    if (action.type === "User/login"){
        return{ ...state , currentUser : "Cadastrado com sucesso!"}
    }
        return state

 }


export default userReducer