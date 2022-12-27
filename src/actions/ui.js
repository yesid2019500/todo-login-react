import { baseUrl } from "../hooks/constant"
import { types } from "../types/types"


export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
})

// remover el error

export const removeError = () => ({
    type: types.uiRemoveError,
})


export const startLoading = () => ({
    type: types.uiStartLoading
})

export const finishLoading = () => ({
    type: types.uiFinishLoading
})


 const getData = (todo) => ({
    type: types.data,
    payload: todo
})



export const loadTodo  = () => {
    return async (dispath)=> {
        const api = await fetch( `${process.env.REACT_APP_API_URL || baseUrl}` )
        const response =  await api.json()
        dispath( getData(response) )
        console.log(response);
    }
}

