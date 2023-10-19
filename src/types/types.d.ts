export type Notifications = Notification[];

export interface Notification {
  id: number;
  type: Type;
  user: User;
  image?: Image;
  read: boolean;
  createdAt: string;
}

export interface Type {
  key: string;
  value: string;
  link?: Image;
  privateMessage?: string;
}

export interface Image {
  value: string;
  url: string;
}

export interface User {
  id: number;
  name: string;
  avatar: string;
}
