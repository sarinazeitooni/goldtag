import React from 'react';
import { shallow } from 'enzyme';
import MainComponents from "../MainComponents";
import MainSwipper from "../swiper/mainswipper";
import Goldtags from "../goldtags/goldtags";
import Category from "../category/category";
import Features from "../features/features";
import Social from "../social/social";
describe("MainComponents component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<MainComponents/>)
        expect(container).toMatchSnapshot();
    });
    it("it should render MainSwipper",()=>{
        const container = shallow(<MainComponents/>);
        expect(container.find(<MainSwipper/>)).toBeTruthy();
    });
    it("it should render Goldtags",()=>{
        const container = shallow(<MainComponents/>);
        expect(container.find(<Goldtags/>)).toBeTruthy();
    });
    it("it should render Category",()=>{
        const container = shallow(<MainComponents/>);
        expect(container.find(<Category/>)).toBeTruthy();
    });
    it("it should render Features",()=>{
        const container = shallow(<MainComponents/>);
        expect(container.find(<Features/>)).toBeTruthy();
    });
    it("it should render Social",()=>{
        const container = shallow(<MainComponents/>);
        expect(container.find(<Social/>)).toBeTruthy();
    });
});