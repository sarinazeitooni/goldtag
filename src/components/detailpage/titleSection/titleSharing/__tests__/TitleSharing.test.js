import React from 'react';
import { shallow } from 'enzyme';
import TitleSharing from "../TitleSharing";
describe("TitleSharing component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<TitleSharing id={{share : ''}}/>)
        expect(container).toMatchSnapshot();
    });
});