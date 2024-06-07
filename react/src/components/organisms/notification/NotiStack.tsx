'use client'

import { useEffect, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import NotiHub from './NotiHub';
import styles from './styles.module.css';
import { Noti } from './types';
import { Icon } from '..';

const notiHub: NotiHub = NotiHub.getInstance();

type NotiTagProps = {
  noti: Noti;
};

const NotiTag: React.FunctionComponent<NotiTagProps> = ({
  noti,
}: NotiTagProps) => {
  return (
    <div className={styles.tag}>
      <div onClick={() => notiHub.deleteMsg(noti.id as string)}>
        <Icon
          icon="fa-regular fa-circle-xmark"
          className={styles.close}
        />
      </div>
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
      <AnimatePresence>
        {notiList.map((n: Noti) => (
          <motion.div 
            key={n.id}
            initial={{ transform: 'translateX(21.88rem)' }}
            animate={{ transform: 'translateX(0)' }}
            exit={{ transform: 'translateX(-21.88rem)' }}
          >
            <NotiTag noti={n} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotiStack;
export { NotiTag };
