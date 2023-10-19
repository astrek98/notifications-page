import { type Notification as NotificationType } from '../types/types';
import { NotificationContent } from './NotificationContent';
import { NotificationImage } from './NotificationImage';

interface Props {
  notification: NotificationType;
  onClick?: () => void;
}

export function Notification({ notification, onClick }: Props) {
  const { user, read, image } = notification;
  const bgClass = read ? 'bg-white' : 'bg-[#F6FAFD]';

  return (
    <article
      className={`flex gap-2 justify-between ${bgClass} p-4 rounded-md h-full] hover:cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex gap-4">
        <NotificationImage src={user.avatar} alt={user.name} />
        <NotificationContent notification={notification} />
      </div>
      <NotificationImage src={image?.value} alt="Picture" />
    </article>
  );
}
