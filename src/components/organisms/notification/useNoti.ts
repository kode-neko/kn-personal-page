import NotiHub from './NotiHub';
import { Noti } from './types';

const notiHub: NotiHub = NotiHub.getInstance();

const sendNoti = (msg: Noti) => {
  notiHub.sendMessage(msg);
};

export default sendNoti;
