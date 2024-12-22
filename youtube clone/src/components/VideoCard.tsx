import React from 'react';
import type { Video } from '../types/video';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    }
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="object-cover w-full h-full hover:scale-105 transition-transform"
        />
      </div>
      <div className="flex gap-3">
        <img
          src={video.channel.avatar}
          alt={video.channel.name}
          className="w-9 h-9 rounded-full"
        />
        <div>
          <h3 className="font-medium line-clamp-2">{video.title}</h3>
          <p className="text-sm text-gray-600">{video.channel.name}</p>
          <p className="text-sm text-gray-600">
            {formatViews(video.views)} views • {video.timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}