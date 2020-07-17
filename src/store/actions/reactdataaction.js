import * as actionTypes from './actionTypes';
import axios from 'axios';

export const initServices = () => {
    return dispatch =>{
        axios.get('http://my-json-server.typicode.com/vamsigoteti7/ReactAPI/ingredients')
            .then(response => {
                console.log(response.data);
               dispatch(setIngredients(response.data));
            })
            .catch(error => { });
        };
};