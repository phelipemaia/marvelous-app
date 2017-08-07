import React from 'react';
import ComicList from '../src/components/comic/ComicList';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <ComicList/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});