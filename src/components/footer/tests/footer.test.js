import React from 'react';
import { shallow } from 'enzyme';
import Footer from "../footer";
describe("Footer component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Footer/>)
        expect(container).toMatchSnapshot();
    })
});