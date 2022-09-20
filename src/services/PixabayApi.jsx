function pixFetch(searchValue, PAGE = 1) {
  const BASIC_URL = `https://pixabay.com/api/`;
  const searchParam = new URLSearchParams({
    key: '29972596-184f280b38cc30846c7b002d8',
    q: `${searchValue}`,
    image_type: 'photo',
    orientation: 'horizontal',
    page: `${PAGE}`,
    per_page: 12,
  });

  return fetch(`${BASIC_URL}?${searchParam}`).then(response => response.json());
}

export default pixFetch;
