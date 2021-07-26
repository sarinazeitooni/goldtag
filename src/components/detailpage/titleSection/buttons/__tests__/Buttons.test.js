import React from 'react';
import { shallow } from 'enzyme';
import Buttons from "../Buttons";
describe("Conditions component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Buttons data={''} titleSectionData={''}/>)
        expect(container).toMatchSnapshot();
    });
});