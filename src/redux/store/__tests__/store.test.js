import React from 'react';
import { shallow } from 'enzyme';
import store from "../store";
describe("store text" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<store/>)
        expect(container).toMatchSnapshot();
    });
});