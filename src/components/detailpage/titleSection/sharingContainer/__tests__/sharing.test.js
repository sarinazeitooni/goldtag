import React from 'react';
import { shallow } from 'enzyme';
import SharingContainer from "../sharing";
describe("SharingContainer component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<SharingContainer titleSectionData={''}/>)
        expect(container).toMatchSnapshot();
    });
});