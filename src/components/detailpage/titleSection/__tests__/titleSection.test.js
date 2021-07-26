import React from 'react';
import {shallow} from 'enzyme';
import TitleSection from "../../titleSection/titleSection";
import PurchaseButton from "../../titleSection/purchaseButton/PurchaseButton";
import TitleSectionFeatures from "../../titleSection/titleSectionFeatures/titleSectionFeatures";
import TitleSharing from "../../titleSection/titleSharing/TitleSharing";
import Titles from "../../titleSection/titles/Titles";
import Buttons from "../../titleSection/buttons/Buttons";
import SharingContainer from "../../titleSection/sharingContainer/sharing";
describe("SideSection component", () => {
    const container = shallow(<TitleSection data={''}/>)
    it("it should render a div", () => {
        expect(container).toMatchSnapshot();
    });
    it("it should render Titles component", () => {
        expect(container.find(<Titles id={''} titleSection={''} />)).toBeTruthy();
    });
    it("it should render PurchaseButton component", () => {
        expect(container.find(<PurchaseButton data={''} id={''}/>)).toBeTruthy();
    });
    it("it should render Buttons component", () => {
        expect(container.find(<Buttons data={''} titleSectionData={''}/>)).toBeTruthy();
    });
    it("it should render SharingContainer component", () => {
        expect(container.find(<SharingContainer titleSectionData={''}/>)).toBeTruthy();
    });
    it("it should render TitleSectionFeatures component", () => {
        expect(container.find(<TitleSectionFeatures id={''}/>)).toBeTruthy();
    });
    it("it should render TitleSharing component", () => {
        expect(container.find(<TitleSharing id={''}/>)).toBeTruthy();
    });
});