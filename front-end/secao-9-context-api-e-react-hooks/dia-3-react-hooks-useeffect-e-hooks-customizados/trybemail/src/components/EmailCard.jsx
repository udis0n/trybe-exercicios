import React, { useContext } from 'react';
import EmailContext from '../context/EmailContext';

export default function EmailCard({ title, id }) {
  const { changeStateToRead, changeStateToUnread } = useContext(EmailContext);

  return (
    <div>
      <p>{title}</p>
      <button onClick={ () => changeStateToRead(id) } >Lido</button>
      <button onClick={ () => changeStateToUnread(id) } >Não Lido</button>
    </div>
  );
}
