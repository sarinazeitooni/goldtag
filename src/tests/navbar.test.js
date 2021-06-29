import React from 'react';
import {shallow} from 'enzyme';
import DropDown from "../components/header/navbar/dropdown/Dropdown";
import Navbar from "../components/header/navbar/Navbar";
describe("Navbar component" , ()=>{
    it("should match snap shot" , ()=>{
        const wrapper = shallow(<Navbar/>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should render container" , ()=>{
        const wrapper = shallow(<Navbar/>);
        const container = wrapper.find('ul.menu-container');
        expect(container.exists()).toBe(true);
    });
    it("should render drop down" , ()=>{
        const wrapper = shallow(<Navbar/>);
        const dropDown = wrapper.find('li.menu-item');
        expect(dropDown.exists()).toBe(true);
    });
})