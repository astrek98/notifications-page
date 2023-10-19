import { useState } from 'react';
import Mark from '../assets/images/avatar-mark-webber.webp';
import Angela from '../assets/images/avatar-angela-gray.webp';
import Jacob from '../assets/images/avatar-jacob-thompson.webp';
import Rizky from '../assets/images/avatar-rizky-hasanuddin.webp';
import Kimberly from '../assets/images/avatar-kimberly-smith.webp';
import Nathan from '../assets/images/avatar-nathan-peterson.webp';
import Anna from '../assets/images/avatar-anna-kim.webp';
import ImageChess from '../assets/images/image-chess.webp';

export function useNotifications() {
  const [notifications] = useState([
    {
      id: 7,
      type: {
        key: 'reacted-to-post',
        value: 'reacted to your recent post',
        link: {
          value: 'My first tournament today!',
          url: '#',
        },
      },
      user: {
        id: 1,
        name: 'Mark Webber',
        avatar: Mark,
      },
      read: false,
      createdAt: '1m ago',
    },
    {
      id: 6,
      type: {
        key: 'followed-you',
        value: 'followed you',
      },
      user: {
        id: 2,
        name: 'Angela Gray',
        avatar: Angela,
      },
      read: false,
      createdAt: '5m ago',
    },
    {
      id: 5,
      type: {
        key: 'joined-group',
        value: 'has joined your group',
        link: {
          value: 'Chess Club',
          url: '#',
        },
      },
      user: {
        id: 3,
        name: 'Jacob Thompson',
        avatar: Jacob,
      },
      read: false,
      createdAt: '1 day ago',
    },
    {
      id: 4,
      type: {
        key: 'sent-you-a-message',
        value: 'sent you a private message',
        privateMessage:
          "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      },
      user: {
        id: 4,
        name: 'Rizky Hasanuddin',
        avatar: Rizky,
      },
      read: true,
      createdAt: '5 days ago',
    },
    {
      id: 3,
      type: {
        key: 'commented-on-your-picture',
        value: 'commented on your picture',
        image: {
          value: ImageChess,
          url: '#',
        },
      },
      user: {
        id: 5,
        name: 'Kimberly Smith',
        avatar: Kimberly,
      },
      read: true,
      createdAt: '1 week ago',
    },
    {
      id: 2,
      type: {
        key: 'reacted-to-post',
        value: 'reacted to your recent post',
        link: {
          value: '5 end-game strategies to increase your win rate',
          url: '#',
        },
      },
      user: {
        id: 6,
        name: 'Nathan Peterson',
        avatar: Nathan,
      },
      read: true,
      createdAt: '2 weeks ago',
    },
    {
      id: 1,
      type: {
        key: 'left-group',
        value: 'left the group',
        link: {
          value: 'Chess Club',
          url: '#',
        },
      },
      user: {
        id: 7,
        name: 'Anna Kim',
        avatar: Anna,
      },
      read: true,
      createdAt: '2 weeks ago',
    },
  ]);

  return { notifications };
}
