# criar input foto perfil
- src/pages/Profile/AvatarInput/index.js
```js

import React, { useState, useRef, useEffect } from "react";
import { useField } from "@rocketseat/unform";
import api from "~/services/api";

import { Container } from "./styles";

export default function AvatarInput() {
  const { defaultValue, registerField } = useField("avatar");
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: "avatar_id",
        ref: ref.current,
        path: "dataset.file"
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  async function handleChange(e) {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    const response = await api.post("files", data);
    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }
  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || "https://api.adorable.io/avatars/50/abott@adorable.png"
          }
          alt=""
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}


```

- src/pages/Profile/AvatarInput/styles.js
```js

import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;


```

- src/pages/Profile/index.js
```js
...
import AvatarInput from "./AvatarInput";
...
    <Form initialData={profile} onSubmit={handleSubmit}> 
      <AvatarInput name="avatar_id" />
...

```
- src/store/modules/user/sagas.js
```js
...
try {
    const { name, email, avatar_id, ...rest } = payload.data;

    export function* updateProfile({ payload }) {
      const profile = Object.assign(
        { name, email, avatar_id },
        rest.oldPassword ? rest : {}
      );
...

```