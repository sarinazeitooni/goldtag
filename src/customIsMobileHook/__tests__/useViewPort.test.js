import React from 'react';
import { shallow } from 'enzyme';
import useViewPort from "../useViewPort";
describe("useViewPort hook" , ()=>{
    it("it should render",()=>{
        const container = shallow(<useViewPort/>)
        expect(container).toMatchSnapshot();
    });
});