import React, { useContext } from 'react'
import EmailContext from '../context/EmailContext';

export default function ControlButtons() {
  const { changeStateToRead, changeStateToUnread } = useContext(EmailContext);

  return (
    <div>
      <button onClick={ () => changeStateToRead() }>
        Marcar todas como lida
      </button>
      <button onClick={ () => changeStateToUnread() }>
        Marcar todas como não lida
      </button>
    </div>
  )
}
