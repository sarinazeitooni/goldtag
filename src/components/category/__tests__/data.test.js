import React from 'react';
import { shallow } from 'enzyme';
import data from "../data/data";
describe("data text" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<data/>)
        expect(container).toMatchSnapshot();
    });
});