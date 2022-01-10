const BASE_URL = 'http://demo1030918.mockable.io/'

export const request = () => {
  return fetch(BASE_URL).then(result => result.json())
}
