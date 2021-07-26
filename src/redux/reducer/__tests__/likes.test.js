import React from 'react';
import {shallow} from 'enzyme';
import likes from "../likes";
describe("like reducer component", () => {
    const container = shallow(<likes/>)
    it("it should render", () => {
        expect(container).toMatchSnapshot();
    });
});