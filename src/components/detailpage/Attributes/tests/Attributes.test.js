import React from 'react';
import { shallow } from 'enzyme';
import Attributes from "../Attributes";
import data from "../../../assets/data/Data";
describe("attribute component" , ()=>{
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: () => ({
            id : 1
        }),
        useRouteMatch: () => ({ url: '/1' }),
    }));
    it("it should render a div",()=>{
        const container = shallow(<Attributes data={data['1']}/>)
        expect(container).toMatchSnapshot();
    });
});