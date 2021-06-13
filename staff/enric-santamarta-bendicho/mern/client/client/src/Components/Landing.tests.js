import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';

it('Landing component should render without crashing', () => { shallow(<Landing />); })