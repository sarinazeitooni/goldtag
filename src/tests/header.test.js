import React from 'react';
import {shallow} from 'enzyme';
import Header from "../components/header/Header";
import ReponsiveHeader from "../components/header/ResponsiveHeader";
describe("header component" , ()=>{
    it("header should match snap shot" , ()=>{
        const wrapper = shallow(<Header/>);
        expect(wrapper).toMatchSnapshot();
    });
    it("responsive header should match snap shot" , ()=>{
        const wrapper = shallow(<ReponsiveHeader/>);
        expect(wrapper).toMatchSnapshot();
    });
    it("header should render src correctly" , ()=>{
        const wrapper = shallow(<Header/>);
        const image = wrapper.find('img.goldtagIcon');
        expect(image.prop("src")).toEqual("https://cdn.goldtag.net/frontend/assets/v1/desktop/build/images/logo.svg");
    });
    it("responsive header should render src correctly" , ()=>{
        const wrapper = shallow(<ReponsiveHeader/>);
        const image = wrapper.find('img.goldtag');
        expect(image.prop("src")).toEqual("https://cdn.goldtag.net/frontend/assets/v1/mobile/build/images/mobile-logo.svg");
    });
})