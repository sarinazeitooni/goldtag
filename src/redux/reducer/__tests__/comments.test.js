import React from 'react';
import {shallow} from 'enzyme';
import comments from "../comments";
describe("comments reducer component", () => {

    const container = shallow(<comments/>)
    it("it should render", () => {
        expect(container).toMatchSnapshot();
    });
});