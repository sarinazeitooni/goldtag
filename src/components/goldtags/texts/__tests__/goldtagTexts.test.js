import React from 'react';
import { shallow } from 'enzyme';
import goldtagTexts from "../goldtagTexts";
describe("goldtagTexts text" , ()=>{
    it("it should render",()=>{
        const container = shallow(<goldtagTexts/>)
        expect(container).toMatchSnapshot();
    });
});