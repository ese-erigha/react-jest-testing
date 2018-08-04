const delay = ()=> new Promise(resolve => setTimeout(resolve,1500));

it("async test 1",done=>{setTimeout(done,100)});

it("async test 2",()=>{
    return delay();
});


it("async test 3",async()=>{
    return await delay();
});