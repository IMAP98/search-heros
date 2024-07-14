import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";


describe('Tests in <AppRouter />', () => { 
    
    test('Should show the login if the user it\'s not autenticated', () => { 

        const contextValue = {
            logged: false,
        }
        
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // screen.debug();

        expect( screen.getAllByText('Login').length ).toBe(2);

    });
    
    test('Should show the marvel component if the user it\'s autenticated', () => { 

        const contextValue = {
            logged: true,
            user: {
                id: '666',
                name: 'Patada de tosta'
            }
        }
        
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // screen.debug();

        expect( screen.getByText('MarvelPage') ).toBeTruthy();

    });

});