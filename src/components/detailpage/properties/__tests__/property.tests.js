import React from 'react';
import { shallow } from 'enzyme';
import Property from "../property";
describe("Property component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Property data={{property : ['','']}}/>)
        expect(container).toMatchSnapshot();
    });
});