import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';

import {usernameState} from './atoms';

function App() {
  const username = useRecoilValue(usernameState)
  const [userEdit, setUserEdit] = useRecoilState(usernameState);

  return (
    <>
      <h1>{username}</h1>
      <br/>
      Username:
      <input
        type="text"
        placeholder="Digie seu nome..."
        value={userEdit}
        onChange={e => setUserEdit(e.target.value)}
      />
    </>
  );
}

export default App;
