import React from 'react';
import TagsList from './TagsList';
import renderer from 'react-test-renderer';


describe("The tags list",()=>{
    it("renders as expected", ()=>{
        const tree = renderer.create(<TagsList tags={[`css`,`html`,`swift`]}/>); //generated html
        const snapshot = tree.toJSON(); //html to JSON
        console.log(snapshot);

        expect(snapshot).toMatchSnapshot();
    });
});

