import axiosApi from "../axiosApi";

export const ORDER_URL_ID_SUCCESS = 'ORDER_URL_ID_SUCCESS';
export const ORDER_URL_ERROR = 'ORDER_URL_ERROR';


export const orderUrlIdSuccess = idUrl => ({type: ORDER_URL_ID_SUCCESS, idUrl});
export const orderUrlError = () => ({type: ORDER_URL_ERROR});



export const postUrl = url => {
    return async (dispatch)=>{
        try{
           const id =  await axiosApi.post('/url', url);
            dispatch(orderUrlIdSuccess(id.data))
        }catch (e) {
            dispatch(orderUrlError())
        }
    }
};