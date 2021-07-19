import { validateText } from "../../../src/client/js/nameChecker"


describe("Testing the validation functionality", () => {

    test("Validate returns false if text is empty", () => {
        jest.spyOn(window, 'alert').mockImplementation(() => {});

        Object.defineProperty(global, "window", {
            value: {
                alert: jest.fn(),
            },
        });
        expect(validateText('')).toBe(false);
    })

    test("validateText() returns true if text is given", () => {
        expect(validateText('Some text')).toBe(true);
 })

});