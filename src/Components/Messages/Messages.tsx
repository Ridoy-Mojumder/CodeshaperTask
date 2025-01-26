import { useState } from "react";
import banner from '../../image/modalNavabr.png';

const messagesData = [
  {
    id: 1,
    sender: 'John Doe',
    subject: 'Meeting at 3 PM',
    preview: 'Let’s meet at 3 PM to discuss the project...',
    time: '2 hours ago',
  },
  {
    id: 2,
    sender: 'Sarah Lee',
    subject: 'Follow-up on Email',
    preview: 'Just wanted to follow up on my previous email...',
    time: '4 hours ago',
  },
  {
    id: 3,
    sender: 'Mark Wilson',
    subject: 'Reminder for Task Completion',
    preview: 'Please make sure the task is completed by tomorrow...',
    time: '1 day ago',
  },
  {
    id: 4,
    sender: 'Anna Smith',
    subject: 'New Project Proposal',
    preview: 'I have attached the proposal for the new project...',
    time: '2 days ago',
  },
  {
    id: 5,
    sender: 'James Clark',
    subject: 'Feedback Request',
    preview: 'Can you provide feedback on the design mockup?',
    time: '5 hours ago',
  },
  {
    id: 6,
    sender: 'Emily White',
    subject: 'Team Meeting Agenda',
    preview: 'Here’s the agenda for our meeting tomorrow...',
    time: '6 hours ago',
  },
  {
    id: 7,
    sender: 'David Brown',
    subject: 'Weekly Report Submission',
    preview: 'Please find attached the weekly report for review...',
    time: '3 days ago',
  },
  {
    id: 8,
    sender: 'Olivia Davis',
    subject: 'Project Update',
    preview: 'The project is progressing well. Here’s an update...',
    time: '8 hours ago',
  },
];

const Messages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <div className="bg-white shadow-md rounded-md">
        {messagesData.length > 0 ? (
          messagesData.map((message) => (
            <div
              key={message.id}
              className="p-4 border-b last:border-b-0 flex items-start space-x-4 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="flex-shrink-0 h-10 w-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
                <span className="text-lg font-bold">{message.sender[0]}</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{message.subject}</h2>
                <p className="text-gray-600">{message.preview}</p>
                <p className="text-sm text-gray-400">{message.time}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="p-4 text-gray-500">No messages available.</p>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div
            className="absolute bg-white rounded-[6px] shadow-lg border border-gray-200 flex flex-col"
            style={{
              width: "412px",
              height: "488px",
              top: "61px",
              right: "337px",
            }}
          >
            
            <div className="relative">
              <img
                src={banner} 
                alt="Modal Banner"
                className="w-full rounded-t-[6px]"
              />
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>


            <ul className="p-4 space-y-3 overflow-y-auto flex-1">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100"
                >
                  <img
                    src={`https://randomuser.me/api/portraits/men/${index}.jpg`} 
                    alt={`Notification ${index}`}
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 font-medium">Wade Raketune</p>
                    <p className="text-xs text-gray-500">
                      It is nice to be chatting with...
                    </p>
                  </div>
                  <span className="text-xs text-gray-400">2 minutes</span>
                </li>
              ))}
            </ul>

            <div className="px-4 py-3 bg-gray-100">
              <button className="text-sm h-8 bg-indigo-600 w-full text-white font-medium rounded">
                View All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
