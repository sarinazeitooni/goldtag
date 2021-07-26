import React from 'react';
import { shallow } from 'enzyme';
import cardTexts from "../cardTexts";
describe("cardTexts text" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<cardTexts/>)
        expect(container).toMatchSnapshot();
    });
});