import React from 'react';
import { shallow } from 'enzyme';
import Conditions from "../Conditions";
describe("Conditions component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Conditions id={{items:['','']}}/>)
        expect(container).toMatchSnapshot();
    });
});