import React from 'react';
import { shallow } from 'enzyme';
import Divider from "../Divider";
describe("Divider component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Divider/>)
        expect(container).toMatchSnapshot();
    })
});