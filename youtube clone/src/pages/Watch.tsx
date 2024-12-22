import { useSearchParams } from 'react-router-dom';
import { useVideos } from '../hooks/useVideos';
import { VideoCard } from '../components/video/VideoCard';
import { ThumbsUp, ThumbsDown, Share, Flag } from 'lucide-react';

export function Watch() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const { videos } = useVideos();

  const currentVideo = videos.find(v => v.id === videoId);
  const recommendedVideos = videos.filter(v => v.id !== videoId);

  if (!currentVideo) {
    return <div>Video not found</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      <div className="lg:w-2/3">
        <div className="aspect-video bg-black rounded-xl overflow-hidden">
          <img
            src={currentVideo.thumbnail}
            alt={currentVideo.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-xl font-semibold">{currentVideo.title}</h1>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-4">
              <img
                src={currentVideo.channel.avatar}
                alt={currentVideo.channel.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium">{currentVideo.channel.name}</h3>
                <p className="text-sm text-gray-600">1M subscribers</p>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-full font-medium">
                Subscribe
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <ThumbsUp size={20} />
                <span>123K</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <ThumbsDown size={20} />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <Share size={20} />
                <span>Share</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <Flag size={20} />
                <span>Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 space-y-4">
        <h2 className="font-semibold">Recommended videos</h2>
        {recommendedVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}