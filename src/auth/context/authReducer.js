import { types } from "../../types/types";

// ! IMPORTANT: The reducers should not call an external functionallity (localStorage, axios, fetchAPI, etc). They must work only with the args (state & action)

export const authReducer = (state = {}, action) => {

    switch (action.type) {

        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                logged: false,
            };

        default:
            return state;
    }

}