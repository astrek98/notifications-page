import { type Notification } from '../types/types';

interface Props {
  message: Pick<Notification['type'], 'privateMessage'>['privateMessage'];
}

export function PrivateMessage({ message }: Props) {
  if (message == null) {
    return null;
  }
  return (
    <p className="rounded-md border p-4 mt-2 hover:bg-[#E5EFF9]">{message}</p>
  );
}
