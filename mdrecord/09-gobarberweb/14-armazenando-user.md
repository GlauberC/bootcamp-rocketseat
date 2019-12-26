# Armazenando dados do usuário
- src/store/modules/user/sagas.js
```js
import { all } from "redux-saga/effects";

export default all([]);

```

- src/store/modules/user/reducer.js
```js
import produce from "immer";

const INITIAL_STATE = {
  profile: null
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@auth/SIGN_IN_SUCCESS":
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    default:
      return state;
  }
}

```
- src/store/modules/rootReducer.js
```js
...
import user from "./user/reducer";
...

export default combineReducers({
  auth,
  user
});

```

- src/store/modules/rootSaga.js
```js
...
import user from "./user/sagas";
...
return yield all([auth, user]);
...


```