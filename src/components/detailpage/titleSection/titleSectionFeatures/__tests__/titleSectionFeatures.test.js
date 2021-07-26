import React from 'react';
import { shallow } from 'enzyme';
import TitleSectionFeatures from "../titleSectionFeatures";
describe("TitleSectionFeatures component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<TitleSectionFeatures id={{items : ['','']}} />)
        expect(container).toMatchSnapshot();
    });
});