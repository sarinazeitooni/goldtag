import React from 'react';
import { shallow } from 'enzyme';
import texts from "../texts";
describe("categoryData text" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<texts/>)
        expect(container).toMatchSnapshot();
    });
});