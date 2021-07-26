import React from 'react';
import { shallow } from 'enzyme';
import texts from "../texts";
describe("texts text" , ()=>{
    it("it should render",()=>{
        const container = shallow(<texts/>)
        expect(container).toMatchSnapshot();
    });
});