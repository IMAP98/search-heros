import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui";


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Tests in <Navbar />', () => { 

    const contextValue = {
        logged: true,
        user: {
            name: 'Patada de tosta'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());
    
    test('Should show the user name.', () => {  

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug();

        expect(screen.getByText('Patada de tosta')).toBeTruthy();

    });
    
    test('Should call the logout & the navigate when the logout button is clicked.', () => {  

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith( "/login", {"replace": true} );
        
    });

});