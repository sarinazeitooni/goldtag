import React from 'react';
import {shallow} from 'enzyme';
import Detail from "../detail";
import {Route} from "react-router-dom";
import MainSection from "../../mainSection/mainSection";
import TitleSection from "../../titleSection/titleSection";
import Attributes from "../../Attributes/Attributes";
import SideSection from "../../sideSection/sideSection";
describe("Detail component", () => {
    const container = shallow(<Route path="/:id"><Detail/></Route>)
    it("it should render a div", () => {
        expect(container).toMatchSnapshot();
    });
    it("it should render MainSection", () => {
        expect(container.find(<MainSection/>)).toBeTruthy();
    });
    it("it should render TitleSection", () => {
        expect(container.find(<TitleSection/>)).toBeTruthy();
    });
    it("it should render Attributes", () => {
        expect(container.find(<Attributes/>)).toBeTruthy();
    });
    it("it should render SideSection", () => {
        expect(container.find(<SideSection/>)).toBeTruthy();
    });

});