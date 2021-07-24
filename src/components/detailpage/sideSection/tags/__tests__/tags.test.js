import React from 'react';
import { shallow } from 'enzyme';
import Tags from "../tags";
describe("Tags component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Tags id={['','']}/>)
        expect(container).toMatchSnapshot();
    });
    it("it should render MainSwipper",()=>{
        const container = shallow(<Tags  id={['','']}/>);
        expect(container.find('button')).toBeTruthy();
    });
});