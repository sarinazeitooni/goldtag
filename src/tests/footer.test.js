import React from 'react';
import {shallow} from 'enzyme';
import Footer from "../components/footer/footer";
import FooterBottom from "../components/footer/FooterBottom";
describe("footer component" , ()=>{
    it("footer should match snap shot" , ()=>{
        const wrapper = shallow(<Footer/>);
        expect(wrapper).toMatchSnapshot();
    });
    it(" footer bottom should match snap shot" , ()=>{
        const wrapper = shallow(<FooterBottom/>);
        expect(wrapper).toMatchSnapshot();
    });
    it(" footer should render 4 item section" , ()=>{
        const wrapper = shallow(<Footer/>);
        const sections = wrapper.find("div.footer-sections");
        expect(sections.length).toEqual(4);
    });
    it("footer bottom should render container" , ()=>{
        const wrapper = shallow(<FooterBottom/>);
        const conatiner = wrapper.find('div.footer-bottom-container');
        expect(conatiner.exists()).toBe(true);
    })
})