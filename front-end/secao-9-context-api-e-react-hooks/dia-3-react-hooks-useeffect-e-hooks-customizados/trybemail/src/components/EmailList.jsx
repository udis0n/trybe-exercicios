import React, { useContext } from 'react';
import EmailContext from '../context/EmailContext';
import ControlButtons from './ControlButtons';
import EmailCard from './EmailCard';

export default function EmailList() {
  const { emailList } = useContext(EmailContext);

  return (
    <div>
      <ControlButtons />
      {emailList.map(({ title, id }) => (
        <EmailCard key={ id } title={title} id={ id } />
      ))}
    </div>
  );
}
