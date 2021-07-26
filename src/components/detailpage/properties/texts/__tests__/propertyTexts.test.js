import React from 'react';
import { shallow } from 'enzyme';
import propertyTexts from "../propertyTexts";
describe("propertyTexts text" , ()=>{
    it("it should render",()=>{
        const container = shallow(<propertyTexts/>)
        expect(container).toMatchSnapshot();
    });
});