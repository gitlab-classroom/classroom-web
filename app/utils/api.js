const basePath = '/api/v1';

function handleResponse(rsp) {
  return new Promise((resolve, reject) => {
    const handleError = (error) => reject({
      status: rsp.status,
      headers: rsp.headers,
      error,
    });
    if (rsp.ok) {
      rsp.json().then(resolve).catch(handleError);
    } else {
      try {
        rsp.json().then(handleError).catch(handleError);
      } catch (e) {
        rsp.text().then(handleError).catch(handleError);
      }
    }
  });
}

function getParam(params) {
  const searchParams = new URLSearchParams();
  Object.keys(params).forEach((key) =>
    searchParams.append(key, params[key]));
  const query = searchParams.toString();
  return query ? `?${query}` : '';
}

function request(method, url, params = {}, body) {
  const p = {
    method,
    credentials: 'same-origin',
    timeout: 500,
  };
  if (body) {
    p.headers = {
      'Content-Type': 'application/json',
    };
    p.body = JSON.stringify(body);
  }
  return fetch(basePath + url + getParam(params), p).then(handleResponse);
}

export default {

  request,

  get(...args) {
    return request.apply(this, ['GET', ...args]);
  },

  post(...args) {
    return request.apply(this, ['POST', ...args]);
  },
};
