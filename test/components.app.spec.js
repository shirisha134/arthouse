import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import NavBar from '../app/components/navbar/navbar';


import App from '../app/components/app';

describe('Components.App', () => {

    it('should be visible', () => {

        const wrapper=shallow(<App />);
        expect(wrapper.type()).to.equal('div');
        expect(wrapper.containsAllMatchingElements([<NavBar />])).to.equal(true);
    });
});