export interface Message {
  id: string;
  content: string;
  timestamp: string;
  user: {
    id: string;
    username: string;
    avatar?: string;
  };
}