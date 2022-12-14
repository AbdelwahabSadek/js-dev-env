import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
  return get('users');
}

export function deleteUser(id){
  return del(`users/${id}`);
}

function del(url){
  const request = new Request(baseUrl + url, {
    method: 'Delete'
  });

  return fetch(request).then(onSuccess, onError);
}

function get(url){
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  // eslint-disable-next-line no-console
  console.log(error);
}
