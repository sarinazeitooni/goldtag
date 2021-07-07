import React from 'react';
import { shallow } from 'enzyme';
import Header from "../Header";
describe("Header component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Header/>)
        expect(container).toMatchSnapshot();
    })
});