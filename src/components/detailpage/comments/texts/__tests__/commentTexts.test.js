import React from 'react';
import {shallow} from 'enzyme';
import commentTexts from "../commentTexts";
describe("commentTexts component", () => {
    const container = shallow(<commentTexts/>)
    it("it should render a div", () => {
        expect(container).toMatchSnapshot();
    });
});