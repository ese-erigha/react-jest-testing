import {questions} from './questions';
import { stat } from 'fs';

describe("The question reducer",()=>{

    it("should work",()=>{
        const state = ["foo", "bar"];

        //Test that the reducer returns the default state when an unsupported action is provided
        const newState = questions(state,{type: "UNRECOGNIZED_ACTION"});
        expect(newState).toEqual(state);
        expect(newState).toBe(state);
    });


    it("should add new question",()=>{

        const state = [{question_id: "foo"},{question_id: "bar"}];
        const newQuestion = {question_id: "baz"};
        const newState = questions(state,{type: `FETCHED_QUESTION`,question: newQuestion});
        expect(newState).toContain(newQuestion);
        expect(state).not.toContain(newQuestion);
        expect(newState).toHaveLength(3);
    });
});