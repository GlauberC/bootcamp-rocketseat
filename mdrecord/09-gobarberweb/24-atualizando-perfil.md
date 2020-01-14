# atualizando perfil
- src/store/modules/user/actions.js
```js
export function updateProfileRequest(data) {
  return {
    type: "@user/UPDATE_PROFILE_REQUEST",
    payload: { data }
  };
}
export function updateProfileSuccess(profile) {
  return {
    type: "@user/UPDATE_PROFILE_SUCCESS",
    payload: { profile }
  };
}
export function updateProfileFailure() {
  return {
    type: "UPDATE_PROFILE_FAILURE"
  };
}

```

- src/store/modules/user/sagas.js
```js
import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import { updateProfileSuccess, updateProfileFailure } from "./actions";

import api from "~/services/api";

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );
    const response = yield call(api.put, "users", profile);

    toast.success("Pefil atualizado com sucesso!");
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error("Erro ao atualizar perfil, confira seus dados!");
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);


```

- src/pages/Profile/index.js
```js
...
import { useDispatch, useSelector } from "react-redux";
...
import { updateProfileRequest } from "~/store/modules/user/actions";
...
export default function Profile() {
  const dispatch = useDispatch();
...
  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
...

```

- src/store/modules/user/reducer.js
```js
import produce from "immer";

const INITIAL_STATE = {
  profile: null
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/SIGN_IN_SUCCESS": {
        draft.profile = action.payload.user;
        break;
      }
      case "@user/UPDATE_PROFILE_SUCCESS": {
        draft.profile = action.payload.profile;
        break;
      }
      default:
    }
  });
}

```