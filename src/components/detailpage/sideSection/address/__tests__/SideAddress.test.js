import React from 'react';
import {shallow} from 'enzyme';
import SideAddress from '../address';
 describe("sideAddress component",()=>{
     const comments = '';
     const id = {
         Address : '',
         number : '',
         fullAddress : '',
         tags : ''
     };
     const container = shallow(<SideAddress id={id} comments={comments}/>);
    it("should match snap shot",()=>{
        expect(container).toMatchSnapshot();
    })
 });