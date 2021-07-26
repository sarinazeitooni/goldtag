import React from 'react';
import {shallow} from 'enzyme';
import rootReducer from "../combineReducer";
describe("rootReducer component", () => {
    const container = shallow(<rootReducer/>)
    it("it should render", () => {
        expect(container).toMatchSnapshot();
    });
});