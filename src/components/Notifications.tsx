import { useNotifications } from '../hooks/useNotifications';
import { type Notification as NotificationType } from '../types/types';
import { Notification } from './Notification';
import { NotificationsHeader } from './NotificationsHeader';

export function Notifications() {
  const { notifications, unreadCount, markAllAsRead, markAsRead } =
    useNotifications();

  const handleNotificationClick = ({ id, read }: NotificationType) => {
    if (!read) {
      markAsRead(id);
    }
  };

  return (
    <div className="bg-white sm:m-10 w-full max-w-[41.5rem] p-4 rounded-lg flex flex-col gap-5">
      <NotificationsHeader
        unreadCount={unreadCount}
        markAllAsRead={markAllAsRead}
      />

      <section className="flex flex-col gap-2 h-full overflow-y-auto">
        {notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              notification={notification}
              onClick={() => {
                handleNotificationClick(notification);
              }}
            />
          );
        })}
      </section>
    </div>
  );
}
