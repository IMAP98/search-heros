import { types } from "../../../src/types/types";


describe('Tests ins "types.js"', () => {

    test('Should return this types', () => {

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });

    });

});