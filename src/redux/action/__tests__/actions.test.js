import React from 'react';
import { shallow } from 'enzyme';
import exportObject from "../actions";
describe("exportObject text" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<exportObject/>)
        expect(container).toMatchSnapshot();
    });
});