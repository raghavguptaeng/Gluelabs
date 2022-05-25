import { data_set_action_type } from "../../Components/constants"

export const setMovies = movies =>{
    return {
        type: data_set_action_type,
        payload: movies
    }
}