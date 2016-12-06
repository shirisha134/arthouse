import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import NavBar from '../app/components/navbar/navbar';
import NavBarItem from '../app/components/navbar/navBarItem';

describe('component.Navbar',()=>{

it('should be visible',()=>{
    const wrapper=shallow(<NavBar/>);
    expect(wrapper.type()).to.equal('nav');
    expect(wrapper.find('.navbar')).to.have.length(1);
    expect(wrapper.find('.container-fluid')).to.have.length(1);
    expect(wrapper.find('.navbar-header')).to.have.length(1);
    expect(wrapper.find('.btn')).to.have.length(1);
    expect(wrapper.find('.navBarItem')).to.have.length(1);
    {/*expect(wrapper.contains(<button className="btn" />)).to.equal(true);*/}
});
});

