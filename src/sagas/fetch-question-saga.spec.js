import {handleFetchQuestion} from './fetch-question-saga';
//returns the mocked fetch of the isomorphic-fetch in the __mocks__ folder
//That is why we are able to access __setValue in the fetch param
import fetch from 'isomorphic-fetch'; 

describe("Fetch Question Saga",()=>{
    beforeAll(()=>{
        fetch.__setValue([]);   //expected value from the http request; dummy value
    });

    it.skip("should fetch the question",async ()=>{

        const gen = handleFetchQuestion({question_id: 42});
        const {value} = await gen.next();
        expect(value).toEqual([]);
    });

    it("API should be called with",async()=>{
        const gen = handleFetchQuestion({question_id: 42});
        const {value} = await gen.next();
        //console.log(value);
        expect(fetch).toHaveBeenCalledWith(`/api/questions/42`); //spy function; validates that the fetch api calls the url with questio_id 42
    });
});