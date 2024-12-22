export interface Channel {
  name: string;
  avatar: string;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: Channel;
  views: number;
  publishedAt: string;
}