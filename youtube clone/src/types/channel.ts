export interface Channel {
  id: string;
  name: string;
  type: 'text' | 'voice';
  serverId: string;
}