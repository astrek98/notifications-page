import { HIGHLIGHTED_TYPES } from '../consts';
import { type Notification as NotificationType } from '../types/types';
import { PrivateMessage } from './PrivateMessage';
import { UnReadIndicator } from './UnreadIndicator';

interface Props {
  notification: NotificationType;
}

export function NotificationContent({ notification }: Props) {
  const { type, user, read, createdAt } = notification;

  const typeHighlightClass = HIGHLIGHTED_TYPES.includes(type?.key) ? 'text-[#073478]' : '';

  return (
    <div className="flex flex-col gap-0.5 text-[#72777D] leading-5">
      <p>
        <span className="font-bold text-black hover:text-[#073478]">
          {user.name}
        </span>{' '}
        {type.value}
        {type.link != null && (
          <>
            {' '}
            <a href={type.link.url} className={`font-bold hover:text-[#073478] ${typeHighlightClass}`}>
              {type.link.value}
            </a>
          </>
        )}
        {!read && <UnReadIndicator />}
      </p>
      <small className="text-[#8C8F98] text-sm">{createdAt}</small>
      <PrivateMessage message={type.privateMessage} />
    </div>
  );
}
