import React from 'react';
import { shallow } from 'enzyme';
import Advices from "../advices";
describe("advices component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Advices/>)
        expect(container).toMatchSnapshot();
    })
});