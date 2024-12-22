import { Home, Compass, Clock, ThumbsUp, PlaySquare, History } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home' },
  { icon: Compass, label: 'Explore' },
  { icon: Clock, label: 'Shorts' },
  { icon: PlaySquare, label: 'Subscriptions' },
  { icon: History, label: 'History' },
  { icon: ThumbsUp, label: 'Liked Videos' },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-14 w-64 h-[calc(100vh-3.5rem)] bg-white p-2 overflow-y-auto">
      {menuItems.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="flex items-center gap-4 w-full p-3 hover:bg-gray-100 rounded-lg"
        >
          <Icon size={20} />
          <span>{label}</span>
        </button>
      ))}
    </aside>
  );
}