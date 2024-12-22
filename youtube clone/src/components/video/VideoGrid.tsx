import { VideoCard } from './VideoCard';
import { useVideos } from '../../hooks/useVideos';

export function VideoGrid() {
  const { videos } = useVideos();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}