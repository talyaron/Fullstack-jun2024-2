export interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
}
export const ChatData: Chat[] = [
  { id: '1', name: 'NoamBramy 1', lastMessage: 'Testing 1', timestamp: '10:30 AM', unreadCount: 2 },
  { id: '2', name: 'NoamBramy 2', lastMessage: 'Testing 2', timestamp: 'Today', unreadCount: 5 },
  { id: '3', name: 'NoamBramy 3', lastMessage: 'Testing 3', timestamp: 'Yesterday', unreadCount: 1 },
];

export interface ChatItemProps {
  chatData: Chat;
}

export interface ChatListProps {
  chats: Chat[];
}