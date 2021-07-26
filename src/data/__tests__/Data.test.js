import React from 'react';
import { shallow } from 'enzyme';
import data from "../Data";
describe("data text" , ()=>{
    it("it should render",()=>{
        const container = shallow(<data/>)
        expect(container).toMatchSnapshot();
    });
});