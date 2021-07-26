import React from 'react';
import { shallow } from 'enzyme';
import Comment from "../Comment";
describe("Rating component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Comment />)
        expect(container).toMatchSnapshot();
    });
});