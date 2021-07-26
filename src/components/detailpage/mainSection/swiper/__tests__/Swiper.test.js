import React from 'react';
import { shallow } from 'enzyme';
import MainSwiper from "../Swiper";
describe("MainSwiper component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<MainSwiper swiperData={['','']}/>)
        expect(container).toMatchSnapshot();
    });
});