import React from 'react';
import { shallow } from 'enzyme';
import Advices from "../components/advices/advices";
import Divider from "../components/divider/Divider";
import AdviceTexts from "../components/advices/texts/advicesTexts";
describe("advices component" , ()=>{
    it("should match snap shot" , ()=>{
        const wrapper = shallow(<Advices/>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should render Divider" , ()=>{
        const wrapper = shallow(<Advices/>);
        const divider = wrapper.find(Divider);
        expect(divider.exists()).toBe(true);
    });
    it("should render advice text" , ()=>{
        const wrapper = shallow(<Advices/>);
        const adviceText = wrapper.find("div.advice-text");
        expect(adviceText.exists()).toBe(true);
        // expect(adviceText.text()).toBe(adviceText.enterEmail);
    });
});