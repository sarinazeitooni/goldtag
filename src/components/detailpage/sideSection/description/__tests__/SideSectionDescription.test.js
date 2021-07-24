import React from 'react';
import { shallow } from 'enzyme';
import SideSectionDescription from "../sideSectionDescription";
describe("SideSectionDescription component" , ()=>{
    const container = shallow(<SideSectionDescription description={"s"} clothes={true}/>)
    it("it should render a div",()=>{
        expect(container).toMatchSnapshot();
    });
    it("it should render description",()=>{
        expect(container.find('div.description')).toBeTruthy();
    });
});