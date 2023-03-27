import { authReducer } from "../../../src/auth"
import { types } from "../../../src/auth/types/types";

describe('Prueba authReducer', () => { 
    
    test('debe de retornar el estado por defecto', () => { 
        const state = authReducer({ logged: false}, {});
        expect(state).toStrictEqual({logged: false});
     })

     test('debe de llamar al login, autenticar y establecer el user name', () => { 
        const action = {
            type: types.login,
            payload: {
                name: 'Angel',
                id: '123'
            }
        }
        const state = authReducer({ logged: false}, action);

        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
     })

     test('debe de hacer logout borrar el name del usuario y logged en false', () => { 
        const state = { 
            logged: true,
            user: { id: '123', name: 'Juan'}
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer( state, action );

        expect(newState).toEqual({logged: false});
     })

 })