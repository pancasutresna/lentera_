import React from 'react';
import {shallow} from 'enzyme';
import App from 'App';
import CommentBox from 'components/CommentBox';
import CommentList from '../components/CommentList';

let wrapped;

beforeEach(() => {
     wrapped = shallow(<App />);
});

it('shows the CommentBox component', () => {
     expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('show the CommentList component', () => {
     expect(wrapped.find(CommentList).length).toEqual(1);
});