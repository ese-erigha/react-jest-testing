describe("The Question list",()=>{

    beforeEach(()=>{
        console.log("Before Each!!!!");
    });

    beforeAll(()=>{
        console.log("Before All!!!!");
    });

    afterEach(()=>{
        console.log("After Each!!!!");
    });

    afterAll(()=>{
        console.log("After All!!!!");
    });

    //only this test should run
    it.only("should display a list of items",()=>{
        expect(2+2).toEqual(4);
    });

    //Skip the execution of this test
    it.skip("should equate value",()=>{
        expect(2+3).toEqual(5);
    });
});