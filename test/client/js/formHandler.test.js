import { fetchResult } from "../../../src/client/js/formHandler"


const event = { preventDefault: () => {} };

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});


describe("Testing the submit functionality", () => {
    
    test("Testing the fetchResult() function", () => {
        fetchResult();
        expect(fetch).toHaveBeenCalledTimes(1);

})});