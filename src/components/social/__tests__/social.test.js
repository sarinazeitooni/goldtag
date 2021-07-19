import React from 'react';
import { shallow } from 'enzyme';
import Social from "../social";
describe("Social component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Social/>)
        expect(container).toMatchSnapshot();
    });
});