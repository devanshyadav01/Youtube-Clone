import { useState, useEffect } from 'react';
import type { Video } from '../types/video';

const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Building a Modern Web Application with React and TypeScript',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    channel: {
      name: 'Tech Academy',
      avatar: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=64',
    },
    views: 1500000,
    publishedAt: '2024-02-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Learn Web Development in 2024 - Complete Guide',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    channel: {
      name: 'Code Masters',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64',
    },
    views: 820000,
    publishedAt: '2024-03-01T15:30:00Z',
  },
  {
    id: '3',
    title: 'The Future of Artificial Intelligence',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    channel: {
      name: 'AI Insights',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=64',
    },
    views: 2100000,
    publishedAt: '2024-02-28T08:15:00Z',
  },
  {
    id: '4',
    title: '10 Programming Languages to Learn in 2024',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
    channel: {
      name: 'Programming Hub',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64',
    },
    views: 950000,
    publishedAt: '2024-02-25T12:45:00Z',
  },
];

export function useVideos() {
  const [videos, setVideos] = useState<Video[]>(MOCK_VIDEOS);

  return { videos };
}