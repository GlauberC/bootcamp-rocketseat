# botão de logout
- src/store/modules/auth/actions.js
```js
...
export function signOut() {
  return {
    type: "@auth/SIGN_OUT"
  };
}

```
- src/store/modules/auth/reducer.js
```js
...
      case "@auth/SIGN_OUT": {
        draft.token = null;
        draft.signed = false;
        break;
      }
...
```

- src/store/modules/user/reducer.js
```js
...
      case "@auth/SIGN_OUT": {
        draft.profile = null;
        break;
      }
...
```

- src/store/modules/auth/sagas.js
```js
...
export function signOut({ payload }) {
  history.push("/");
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/SIGN_OUT", signOut)
]);

```

- src/pages/Profile/index.js
```js
...
import { signOut } from "~/store/modules/auth/actions";
...
  function handleSignOut(data) {
    dispatch(signOut());
  }

...
      <button type="button" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
...
```