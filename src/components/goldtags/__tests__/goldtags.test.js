import React from 'react';
import { shallow } from 'enzyme';
import Goldtags from "../goldtags";
describe("Goldtags component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Goldtags/>)
        expect(container).toMatchSnapshot();
    })
});