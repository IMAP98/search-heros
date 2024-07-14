import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe('Testsin <Public Route.jsx />', () => {  

    test('Should show his children if it\'s not autenticated', () => { 
        
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Public Route') ).toBeTruthy();

    });

    test('Should navigate if it\'s autenticated', () => { 
        
        const contextValue = {
            logged: true,
            user: {
                name: 'Patada de tosta',
                id: '666'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Public Route</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={ <h1>Marvel page</h1> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug();

        expect(screen.getByText('Marvel page')).toBeTruthy();

    });

});

