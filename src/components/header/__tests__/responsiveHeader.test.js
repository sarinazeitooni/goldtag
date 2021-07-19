import React from 'react';
import { shallow } from 'enzyme';
import ReponsiveHeader from "../ResponsiveHeader";
describe("ReponsiveHeader component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<ReponsiveHeader/>)
        expect(container).toMatchSnapshot();
    });
});