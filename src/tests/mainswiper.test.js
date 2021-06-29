import React from 'react';
import {shallow} from 'enzyme';
import MainSwiper from "../components/swiper/mainswipper";
describe("main swiper component" , ()=>{
    it("should match snap shot" , ()=>{
        const wrapper = shallow(<MainSwiper/>);
        expect(wrapper).toMatchSnapshot();
    });
   it("should render correctly" , ()=>{
       const wrapper = shallow(<MainSwiper/>);
       const items = wrapper.find('div.swiper-item');
       expect(items.exists()).toBe(true);
    });
});