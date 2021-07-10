import React from 'react';
import {shallow} from 'enzyme';
import Address from "../Address";

describe("Address component", () => {
    it("it should render a div", () => {
        const container = shallow(<Address id={{
            address: {
                home: '',
                category: '',
                secondCategory: ''
            }
        }}/>)
        expect(container).toMatchSnapshot();
    });
});