import { io } from 'socket.io-client';
import { socketListenEvent } from './event';

export const initSocket = ({ setSocketValue }) => {
  const socket = io(import.meta.env.VITE_SERVER_URL);

  socketListenEvent(socket, { setSocketValue });
  setSocketValue((prev) => ({ ...prev, socket }));
};
