import API from '../../config/backApi';

export const USER_STARTED = 'USER_STARTED';
export const USER_ERROR = 'USER_ERROR';
export const SET_USER = 'SET_USER';
export const SET_USERS = 'SET_USERS';
export const SET_USER_ID= 'SET_USER_ID';
export const USER_UPDATE = 'USER_UPDATE';
export const DELETE_USER = 'DELETE_USER';


export const setUsers = () => {
    return async dispatch => {
        try{
            dispatch({ type: USER_STARTED });
            const response = await API.get("/users");
            
            dispatch({type: SET_USERS, users: response.data  })
            
        }catch (error) {

            dispatch({ type: USER_ERROR, error: "No se pudo obtener el listado de usuarios" });
        }
        
    }

}

export const getUser = (id) => {
    return async dispatch => {
        try{
            dispatch({ type: USER_STARTED });
            const response = await API.get(`/users/${id}`)
            dispatch({ type: SET_USER, user: response.data });

        }catch (error){
            
            dispatch({ type: USER_ERROR, error : "No se pudo obtener el usuario" });
        }
    }
}

export const updateUser = (user, id) => {


    return async dispatch => {


        try {

            dispatch({ type: USER_STARTED });
            await API.put(`/users/${id}`, user);
            dispatch({ type: USER_UPDATE, updatedUser: user });

        } catch (error) {
            console.error(error);
            dispatch({ type: USER_ERROR, error: "No se pudo actualizar el usuario" });
        }

    }

}


export const deleteUser = (id) => {
    return async dispatch=> {
        try {
            dispatch({ type: USER_STARTED });
            await API.delete(`/users/${id}`);
            dispatch({ type: DELETE_USER, currentUserId: id });

        } catch (error) {
            console.error(error);
            dispatch({ type: USER_ERROR, error : "No se pudo eliminar el usuario" });
        }
    }
}

export const setUserId = id => {

    return {

        type: SET_USER_ID,
        id : id

    }

}