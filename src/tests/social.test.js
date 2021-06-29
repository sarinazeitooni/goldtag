import React from 'react';
import {shallow} from 'enzyme';
import Social from "../components/social/social";
describe("social component" , ()=>{
    it("should match snap shot" , ()=>{
        const wrapper = shallow(<Social/>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should render correctly" , ()=>{
        const wrapper = shallow(<Social/>);
        const container = wrapper.find('div.social-container');
        expect(container.exists()).toBe(true);
    });
    it("should render image correctly" , ()=>{
       const wrapper = shallow(<Social/>);
       const image = wrapper.find("div.social-icon");
       expect(image.exists()).toBe(true);
    });
})