import React from 'react';
import { shallow } from 'enzyme';
import MainSwipper from "../mainswipper";
import Card from "../../card/card";
describe("MainSwipper component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<MainSwipper/>)
        expect(container).toMatchSnapshot();
    });
    // it("it should use swiper",()=>{
    //     const container = shallow(<Card/>)
    //     expect(container.find('Swiper')).toHaveLength(1);
    // });
});