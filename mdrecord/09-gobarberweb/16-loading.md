# criando tela de loading

- deletar localStorage para deslogar

- store/modules/auth/reducer.js

```js
...
export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/SIGN_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/SIGN_IN_SUCCESS": {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case "@auth/SIGN_FAILURE": {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
```

- pages/SignIn/index.js

```js
...
import { useDispatch, useSelector } from "react-redux";
...

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  ...
  <button type="submit">{loading ? "Carregando..." : "Acessar"}</button>
  <Link to="/register">Criar conta gratuita</Link>
```

- store/modules/auth/sagas.js

```js
...
import { useDispatch, useSelector } from "react-redux";
...
import { signInSuccess, signFailure } from "./actions";

...

export function* signIn({ payload }) {
  try{
    ...
  }catch(err) {
    yield put(signFailure());
  }
```
