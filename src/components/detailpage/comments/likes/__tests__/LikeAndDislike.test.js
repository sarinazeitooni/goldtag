import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import LikeAndDislike from "../LikeAndDislike";
describe("LikeAndDislike component", () => {
    const initialState = {}
    const mockStore = configureStore();
    let Store = mockStore(initialState);
    it("it should render", () => {
        const container = shallow(<Provider store={Store}><LikeAndDislike data={''} id={''}/></Provider>)
        expect(container).toMatchSnapshot();
    });
    it("it should render like-dislike-container div", () => {
        const container = shallow(<Provider store={Store}><LikeAndDislike data={''} id={''}/></Provider>)
        expect(container.find('div.like-dislike-container')).toBeTruthy();
    });
});