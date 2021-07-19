import React from 'react';
import { shallow } from 'enzyme';
import Comments from "../Comments";
describe("Rating component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Comments items={{comments:["1" , "2"]}}/>)
        expect(container).toMatchSnapshot();
    });
});