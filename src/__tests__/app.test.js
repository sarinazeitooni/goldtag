import React from 'react';
import {shallow} from 'enzyme';
import App from "../App";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

describe("App component", () => {
    const store = configureStore();
    const initialState = {}
    const mockStore = configureStore();
    let Store = mockStore(initialState);
    it("it should render", () => {
        const container = shallow(<Provider store={Store}><App/></Provider>)
        expect(container).toMatchSnapshot();
    });
});