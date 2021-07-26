import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import CommentsContainer from "../CommentsContainer";

const initialState = {
    Tab : false
}
const mockStore = configureStore();
let Store = mockStore(initialState);
describe("CommentsContainer component", () => {
    it("it should render a div", () => {
        const container = shallow(<Provider store={Store}><CommentsContainer/></Provider>)
        expect(container).toMatchSnapshot();
    });
});