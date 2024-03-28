'use client'

import { useEffect, useState } from 'react';
import NotiHub from './NotiHub';
import styles from './styles.module.css';
import { Noti } from './types';
import { v4 as uuidv4 } from 'uuid';

const notiHub: NotiHub = NotiHub.getInstance();

type NotiTagProps = {
  noti: Noti;
};

const NotiTag: React.FunctionComponent<NotiTagProps> = ({
  noti,
}: NotiTagProps) => {
  return (
    <div className={styles.tag}>
      <div className={styles.msg}>{noti.msg}</div>
    </div>
  );
};

const NotiStack: React.FunctionComponent = () => {
  const [idSub, setIdSub] = useState<string>('');
  const [notiList, setNotiList] = useState<Noti[]>([]);

  const callbackHub = (list: Noti[]) => {
    setNotiList(list);
  };

  useEffect(() => {
    if (idSub === '') {
      const id: string = notiHub.subscribe(callbackHub);
      setIdSub(id);
    }
    return () => notiHub.unsubscribe(idSub);
  }, []);

  return (
    <div className={styles.stack}>
      {notiList.map((n: Noti) => (
        <NotiTag key={n.id} noti={n} />
      ))}
    </div>
  );
};

export default NotiStack;
export { NotiTag };
