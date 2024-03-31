type Noti = {
  id?: string;
  msg: string;
};

type NotiListener = {
  id?: string;
  callback: (list: Noti[]) => void;
};

export { Noti, NotiListener };
