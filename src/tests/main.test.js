import React from 'react';
import { shallow } from 'enzyme';
import MainComponents from "../components/MainComponents";
import MainSwipper from "../components/swiper/mainswipper";
import Features from "../components/features/features";
import Goldtags from "../components/goldtags/goldtags";
import Category from "../components/category/category";
import Social from "../components/social/social";
describe("main component" , ()=>{
    it("should match snap shot" , ()=>{
        const wrapper = shallow(<MainComponents/>);
        expect(wrapper).toMatchSnapshot();
    });
   it("should render swiper" , ()=>{
       const wrapper = shallow(<MainComponents/>);
       const swiper = wrapper.find(MainSwipper);
       expect(swiper.exists()).toBe(true);
   });
    it("should render features" , ()=>{
        const wrapper = shallow(<MainComponents/>);
        const feature = wrapper.find(Features);
        expect(feature.exists()).toBe(true);
    });
    it("should render Gold tags" , ()=>{
        const wrapper = shallow(<MainComponents/>);
        const GoldTag = wrapper.find(Goldtags);
        expect(GoldTag.exists()).toBe(true);
    });
    it("should render Category" , ()=>{
        const wrapper = shallow(<MainComponents/>);
        const Categories = wrapper.find(Category);
        expect(Categories.exists()).toBe(true);
    });
    it("should render Social" , ()=>{
        const wrapper = shallow(<MainComponents/>);
        const Socials = wrapper.find(Social);
        expect(Socials.exists()).toBe(true);
    });

});