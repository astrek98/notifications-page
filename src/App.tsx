import { useNotifications } from './hooks/useNotifications';

export function App() {
  return (
    <main className="bg-[#F9FAFE] h-screen max-h-screen flex justify-center">
      <Notifications />
    </main>
  );
}

function Notifications() {
  const { notifications, unreadCount, markAllAsRead, markAsRead } =
    useNotifications();

  return (
    <div className="bg-white sm:m-10 w-full max-w-[39rem] p-4 rounded-lg flex flex-col gap-5">
      <NotificationsHeader
        unreadCount={unreadCount}
        markAllAsRead={markAllAsRead}
      />

      <section className="flex flex-col gap-2 h-full overflow-y-auto">
        {notifications.map(({ id, type, user, read, createdAt }) => {
          return (
            <Notification
              key={id}
              type={type}
              user={user}
              read={read}
              createdAt={createdAt}
              onClick={() => {
                if (!read) {
                  markAsRead(id);
                }
              }}
            />
          );
        })}
      </section>
    </div>
  );
}

function NotificationsHeader({
  unreadCount,
  markAllAsRead,
}: {
  unreadCount?: number;
  markAllAsRead: () => void;
}) {
  return (
    <header className="flex justify-between items-center gap-1">
      <h1>
        <span className="font-extrabold plus-jakarta-sans-extrabold text-lg">
          Notifications
        </span>
        &nbsp;
        <span className=" ml-2 px-2.5 py-0.5 rounded text-white bg-[#073478] font-semibold text-sm">
          {unreadCount}
        </span>
      </h1>
      <button
        className="text-[#8C8F98] text-sm hover:text-[#073478]"
        onClick={markAllAsRead}
      >
        Mark all as read
      </button>
    </header>
  );
}

function TextLink({ link }: { link?: { url: string; value: string } }) {
  if (link == null) {
    return null;
  }

  return (
    <a
      href={link.url}
      className="text-[#72777D] font-bold hover:text-[#073478]"
    >
      {link.value}
    </a>
  );
}

function NotificationText({
  username,
  text,
  link,
  read = false,
}: {
  username: string;
  text: string;
  link?: { url: string; value: string };
  read?: boolean;
}) {
  return (
    <p className="text-xs">
      <Username>{username}</Username>{' '}
      <span className="text-[#72777D]">{text}</span> <TextLink link={link} />
      {!read && <UnReadIndicator />}
    </p>
  );
}

function PrivateMessage({ message }: { message?: string }) {
  if (message == null) {
    return null;
  }
  return (
    <p className="text-[#72777D] text-xs rounded-md border p-4 mt-2 hover:bg-[#E5EFF9]">
      {message}
    </p>
  );
}

function UnReadIndicator() {
  return (
    <span className="bg-[#FF4C45] inline-block w-2 h-2 rounded-full ml-1.5"></span>
  );
}

function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <img src={src} alt={alt} width={40} height={40} className="w-10 h-10" />
  );
}

function Username({ children }: { children: React.ReactNode }) {
  return <span className="font-bold hover:text-[#073478]">{children}</span>;
}

function NotificationContainer({
  read = false,
  onClick,
  children,
}: {
  read?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const bgClass = read ? 'bg-white' : 'bg-[#F6FAFD]';
  return (
    <article
      className={`flex gap-4 ${bgClass} p-4 rounded-md h-full] hover:cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </article>
  );
}

function NotificationImage({ src }: { src: string }) {
  return (
    <img src={src} alt="Picture" width={40} height={40} className="w-10 h-10" />
  );
}

function Notification({ type, user, read, createdAt, onClick }: any) {
  return (
    <NotificationContainer read={read} onClick={onClick}>
      <Avatar src={user.avatar} alt={user.name} />
      <div className="flex justify-between w-full gap-3">
        <div className="flex flex-col gap-0.5">
          <NotificationText
            username={user.name}
            text={type.value}
            link={type.link}
            read={read}
          />
          <small className="text-[#8C8F98] text-xs">{createdAt}</small>
          <PrivateMessage message={type.privateMessage} />
        </div>

        {type.image != null && <NotificationImage src={type.image.value} />}
      </div>
    </NotificationContainer>
  );
}
