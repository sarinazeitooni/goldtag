import React from 'react';
import {shallow} from 'enzyme';
import Goldtags from "../components/goldtags/goldtags";
describe("goldtags component" , ()=>{
    it("should match snap shot" , ()=>{
        const wrapper = shallow(<Goldtags/>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should have tags container" , ()=>{
        const wrapper = shallow(<Goldtags/>);
        const container = wrapper.find('div.cards-container');
        expect(container.exists()).toBe(true);
    })
})