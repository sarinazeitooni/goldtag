import React from 'react';
import {shallow} from 'enzyme';
import DropDown from "../Dropdown";

describe("DropDown component", () => {
    const data={
        firstLine : ["",""],
        secondLine : ['',''],
        title : 'test',
        img: 'test'
    }
    it("it should render a div", () => {
        const container = shallow(<DropDown menu={data}/>)
        expect(container).toMatchSnapshot();
    })
});