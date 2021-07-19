import React from 'react';
import { shallow } from 'enzyme';
import Features from "../features";
describe("Features component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Features/>)
        expect(container).toMatchSnapshot();
    })
});