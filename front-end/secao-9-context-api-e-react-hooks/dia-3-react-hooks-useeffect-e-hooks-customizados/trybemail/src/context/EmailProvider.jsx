import React, { useState } from 'react';
import EmailContext from './EmailContext';
import emails from '../mock/emailsMock';

export default function EmailProvider({ children }) {
  const [emailList, setEmailList] = useState(emails);

  const changeStateToRead = (emailId = 'all') => {
    const auxEmailList = [...emailList];

    if (emailId === 'all') {
      auxEmailList.forEach((email) => {
        email.status = 1;
      });
    } else {
      const index = auxEmailList.findIndex((email) => email.id === emailId);
      auxEmailList[index].status = 1;
    }

    setEmailList(auxEmailList);
  };

  const changeStateToUnread = (emailId = 'all') => {
    const auxEmailList = [...emailList];

    if (emailId === 'all') {
      auxEmailList.forEach((email) => {
        email.status = 0;
      });
    } else {
      const index = auxEmailList.findIndex((email) => email.id === emailId);
      auxEmailList[index].status = 0;
    }

    setEmailList(auxEmailList);
  };

  const context = { emailList, changeStateToRead, changeStateToUnread };

  return <EmailContext.Provider value={context}>{children}</EmailContext.Provider>;
}
