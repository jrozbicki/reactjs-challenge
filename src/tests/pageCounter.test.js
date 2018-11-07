import pageCounter from '../utils/pageCounter';

test('151 objects with 20 on each page should display 8 pages', () => {
  expect(pageCounter(151, 20)).toBe(8);
});

test('73 objects with 30 on each page should display 3 pages', () => {
  expect(pageCounter(73, 30)).toBe(3);
});

test('89 objects with 20 on each page should display 1 pages', () => {
  expect(pageCounter(132, 50)).toBe(3);
});
