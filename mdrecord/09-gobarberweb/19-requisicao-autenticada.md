# Utilizar token

- store/modules/auth/sagas.js

```js
export function* signIn({ payload }) { //ja tava
  ...
  api.defaults.headers.Authorization = `Bearer ${token}`;

  yield put(signInSuccess(token, user)); //ja tava
  ...

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp)
]);


```
