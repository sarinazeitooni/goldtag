import React from 'react';
import { shallow } from 'enzyme';
import MainSection from "../mainSection";
describe("MainSection component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<MainSection id={{swiper:'' , clothes:true}} />)
        expect(container).toMatchSnapshot();
    });
});