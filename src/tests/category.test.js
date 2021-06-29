import React from 'react';
import { shallow } from 'enzyme';
import Category from "../components/category/category";
import { Swiper } from 'swiper/react';
import Divider from "../components/divider/Divider";
describe("card component" , ()=>{
    it("should match snap shot" , ()=>{
        const wrapper = shallow(<Category/>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should render swiper correctly" , ()=>{
        const wrapper = shallow(<Category/>);
        const items = wrapper.find("div.category-item-container");
        expect(items.exists()).toBe(true);
        // const swiper = wrapper.find(<Swiper spaceBetween={1} slidesPerView={1} />);
        // expect(swiper.exists()).toBe(true);
    });
});