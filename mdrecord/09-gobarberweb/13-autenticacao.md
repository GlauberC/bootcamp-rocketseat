# configurando autenticação
```sh
  yarn add axios
```

- src/store/modules/auth/actions.js
```js
export function signInRequest(email, password) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { email, password }
  };
}
export function signInSuccess(token, user) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { token, user }
  };
}

export function signFailure() {
  return {
    type: "@auth/SIGN_FAILURE"
  };
}

```

- src/store/modules/auth/sagas.js
```js
import { takeLatest, call, put, all } from "redux-saga/effects";

import { signInSuccess } from "./actions";

import history from "~/services/history";
import api from "~/services/api";

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, "sessions", {
    email,
    password
  });

  const { token, user } = response.data;

  console.tron.error("Usuário não é prestador");

  if (!user.provider) {
    console.tron.error("Usuário não é prestador");
    return;
  }

  yield put(signInSuccess(token, user));
  history.push("/dashboard");
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);

```

- src/services/api.js
```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333"
});

export default api;

```
- src/pages/SignIn/index.js
```js
...
import { useDispatch } from "react-redux";
...
import { signInRequest } from "~/store/modules/auth/actions";
...

export default function SignIn() {
  const dispatch = useDispatch();

  // function handleSubmit(data) {
  //   console.tron.log(data);
  // }
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  ...
```

- src/store/modules/auth/reducer.js
```js
import produce from "immer";

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@auth/SIGN_IN_SUCCESS":
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    default:
      return state;
  }
}

```

- src/routes/Route.js
```js
...
import store from "~/store";
...
// const signed = false;
const { signed } = store.getState().auth;
...
```




