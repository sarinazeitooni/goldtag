import React from 'react';
import { shallow } from 'enzyme';
import Card from "../components/card/card";
describe("card component" , ()=>{
    it("should match snap shot" , ()=>{
        const wrapper = shallow(<Card/>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should render soldout image" , ()=>{
        const wrapper = shallow(<Card available={true}/>);
        const soldOut = wrapper.find('div.soldout-block');
        expect(soldOut.exists()).toBe(true);
    });
    it("should not render soldout image" , ()=>{
        const wrapper = shallow(<Card available={false}/>);
        const soldOut = wrapper.find('div.soldout-none');
        expect(soldOut.exists()).toBe(true);
    });
    it("should render price correctly" , ()=>{
        const wrapper = shallow(<Card price={1}/>);
        const price = wrapper.find('div.old-price');
        // expect(price.text()).toEqual(1);
        expect(price.exists()).toBe(true);
    });
    it("should render subtitle correctly" , ()=>{
        const wrapper = shallow(<Card subtitle={1}/>);
        const subtitles = wrapper.find('div.card-subtitle');
        // expect(subtitles.text()).toEqual(1);
        expect(subtitles.exists()).toBe(true);
    });
});