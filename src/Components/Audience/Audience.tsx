

const audienceData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  { id: 3, name: 'David Johnson', email: 'david@example.com', status: 'Active' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', status: 'Active' },
];

const Audience = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Audience</h1>
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {audienceData.map((person) => (
              <tr key={person.id} className="border-t">
                <td className="px-6 py-4 text-gray-800">{person.name}</td>
                <td className="px-6 py-4 text-gray-600">{person.email}</td>
                <td
                  className={`px-6 py-4 text-sm font-semibold ${
                    person.status === 'Active'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {person.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Audience;
