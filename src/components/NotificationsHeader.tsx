interface Props {
  unreadCount: number;
  markAllAsRead: () => void;
}

export function NotificationsHeader({ unreadCount, markAllAsRead }: Props) {
  return (
    <header className="flex justify-between items-center gap-1">
      <h1>
        <span className="font-extrabold plus-jakarta-sans-extrabold text-lg">
          Notifications
        </span>
        &nbsp;
        <span
          className="ml-2 px-2.5 py-0.5 rounded text-white bg-[#073478] font-semibold text-sm"
          role="status"
        >
          {unreadCount}
        </span>
      </h1>
      {unreadCount > 0 && (
        <button
          className="text-[#8C8F98] text-sm hover:text-[#073478]"
          onClick={markAllAsRead}
        >
          Mark all as read
        </button>
      )}
    </header>
  );
}
