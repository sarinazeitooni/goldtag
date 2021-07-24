import React from 'react';
import { shallow } from 'enzyme';
import Titles from "../Titles";
describe("Titles component" , ()=>{
    const id={title : '', subtitle : ''};
    const titleSection = {shipping : ''};
    const container = shallow(<Titles id={id} titleSection={titleSection}/>);
    it("it should render a div",()=>{
        expect(container).toMatchSnapshot();
    });
    it("it should render",()=>{
        expect(container.find('div.like-dislike-container')).toBeTruthy();
    });
});