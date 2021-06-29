import React from 'react';
import {shallow} from 'enzyme';
import Features from "../components/features/features";
describe("features component" , ()=>{
    it("should match snap shot" , ()=>{
        const wrapper = shallow(<Features/>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should render container" , ()=>{
        const wrapper = shallow(<Features/>);
        const container = wrapper.find('div.features-container');
        expect(container.exists()).toBe(true);
    });
    it("should render items" , ()=>{
        const wrapper = shallow(<Features/>);
        const items = wrapper.find('div.feature-item');
        expect(items.length).toEqual(5);
    })
})