import React from 'react';
import {shallow} from 'enzyme';
import SideSection from "../sideSection";
import Conditions from "../conditions/Conditions";
import SideSectionDescription from "../description/sideSectionDescription";
import SideAddress from "../address/address";
describe("SideSection component", () => {
    const container = shallow(<SideSection id={''} itemTags={''} description={''} clothes={''}/>)
    it("it should render a div", () => {
        expect(container).toMatchSnapshot();
    });
    it("it should render Conditions component", () => {
        expect(container.find(<Conditions id={''}/>)).toBeTruthy();
    });
    it("it should render SideSectionDescription component", () => {
        expect(container.find(<SideSectionDescription clothes={''} description={''}/>)).toBeTruthy();
    });
    it("it should render SideAddress component", () => {
        expect(container.find(<SideAddress id={''}/>)).toBeTruthy();
    });
});