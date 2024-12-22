import { useSearchParams } from 'react-router-dom';
import { VideoCard } from '../components/video/VideoCard';
import { useVideos } from '../hooks/useVideos';

export function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { videos } = useVideos();

  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Search results for "{query}"</h2>
      <div className="space-y-4">
        {filteredVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}