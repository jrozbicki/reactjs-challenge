export const CURRENT_PAGE = 'CURRENT_PAGE';

export function setCurrentPage(page) {
  return {
    type: CURRENT_PAGE,
    payload: page,
  };
}
