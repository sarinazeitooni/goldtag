import React from 'react';
import { shallow } from 'enzyme';
import MainDescription from "../MainDescription";
describe("MainDescription component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<MainDescription id={1}/>)
        expect(container).toMatchSnapshot();
    });
});