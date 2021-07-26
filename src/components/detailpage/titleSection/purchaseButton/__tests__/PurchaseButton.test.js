import React from 'react';
import { shallow } from 'enzyme';
import PurchaseButton from "../PurchaseButton";
describe("PurchaseButton component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<PurchaseButton data={''} id={''}/>)
        expect(container).toMatchSnapshot();
    });
});