import { useEffect, useState } from 'react';
import { NOTIFICATIONS } from '../consts';

export function useNotifications() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    setUnreadCount(notifications.filter(({ read }) => !read).length);
  }, [notifications]);

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  const markAsRead = (id: number) => {
    setNotifications((prevNotifications) => {
      return prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      );
    });
  };

  return { notifications, unreadCount, markAllAsRead, markAsRead };
}
