jest.mock('../__mocks__/RequestCache');

import ComicList from '../src/components/comic/ComicList';

// The assertion for a promise must be returned.
it('works with promises', () => {
  let comicList = new ComicList();
  expect.assertions(1);
  return comicList.makeRemoteRequest().then(data => expect(data).toEqual('Captain America'));
});