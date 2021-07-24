import React from 'react';
import { shallow } from 'enzyme';
import Navbar from "../Navbar";
describe("Navbar component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Navbar/>)
        expect(container).toMatchSnapshot();
    })
});