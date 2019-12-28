# criando funcionalidade de cadastro

- store/modules/auth/reducer.js

```js
...
export function signUpRequest(name, email, password) {
  return {
    type: "@auth/SIGN_UP_REQUEST",
    payload: { name, email, password }
  };
}
...
```

- pages/SignUp/index.js

```js
...
import { useDispatch } from "react-redux";
...
import { signUpRequest } from "~/store/modules/auth/actions";
...
export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
...
```

- store/modules/auth/sagas.js

```js
export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, "users", { name, email, password, provider: true });

    history.push("/");
  } catch (err) {
    toast.error("Falha no cadastro, verifique seus dados!");
    yield put(signFailure());
  }
}

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp)
]);
```
