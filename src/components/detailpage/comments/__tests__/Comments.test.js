import React from 'react';
import {shallow} from 'enzyme';
import Comments from "../Comments";
import Comment from "../Comment";

describe("Rating component", () => {
    const container = shallow(<Comments items={{comments: ["1", "2"]}}/>)

    it("it should render a div", () => {
        expect(container).toMatchSnapshot();
    });
    it("it should render comment", () => {
        expect(container.find(<Comment data={'data'} id={'item.id'} like={'item.like'} dislike={'item.dislike'} name={'item.name'}
                                       date={'item.date'} customercomment={'item.customercomment'}
                                       goldcomment={'item.goldcomment'}/>)).toBeTruthy();
    });
});