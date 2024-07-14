import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/types/types";


describe('Pruebas en authReducer', () => {

    test('Should return the default state.', () => {

        const state = authReducer({ logged: false }, {});

        expect(state).toEqual({ logged: false });

    });

    test('Should call the auth login & set the user.', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Patada de tosta',
                id: '666'
            }
        }

        const state = authReducer({ logged: false }, action);

        expect(state).toEqual({
            logged: true,
            user: action.payload
        });

    });

    test('Should delete the user name & logged in false.', () => {

        const initialState = {
            logged: true,
            user: { id: '666', name: 'Patada de tosta' }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(initialState, action);

        expect(newState).toEqual({ logged: false });

    });

});