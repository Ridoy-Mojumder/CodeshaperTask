
const notificationsData = [
  {
    id: 1,
    title: 'New Comment on Post',
    description: 'John commented on your post.',
    time: '2 hours ago',
  },
  {
    id: 2,
    title: 'New Follower',
    description: 'Sarah started following you.',
    time: '4 hours ago',
  },
  {
    id: 3,
    title: 'Update Available',
    description: 'A new version of the app is available.',
    time: '1 day ago',
  },
  {
    id: 4,
    title: 'Mention in a Comment',
    description: 'Alex mentioned you in a comment.',
    time: '5 hours ago',
  },
  {
    id: 5,
    title: 'New Like',
    description: 'Your post has a new like.',
    time: '3 days ago',
  },
  {
    id: 6,
    title: 'Friend Request',
    description: 'Mark sent you a friend request.',
    time: '2 days ago',
  },
  {
    id: 7,
    title: 'Group Invitation',
    description: 'You are invited to join the "Developers" group.',
    time: '6 hours ago',
  },
  {
    id: 8,
    title: 'Event Reminder',
    description: 'Don’t forget about the upcoming event tomorrow.',
    time: '8 hours ago',
  },
];


const Notifications = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <div className="bg-white shadow-md rounded-md">
        {notificationsData.length > 0 ? (
          notificationsData.map((notification) => (
            <div
              key={notification.id}
              className="p-4 border-b last:border-b-0 flex items-start space-x-4"
            >
              <div className="flex-shrink-0 h-10 w-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
                <span className="text-lg font-bold">
                  {notification.title[0]}
                </span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {notification.title}
                </h2>
                <p className="text-gray-600">{notification.description}</p>
                <p className="text-sm text-gray-400">{notification.time}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="p-4 text-gray-500">No notifications available.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
