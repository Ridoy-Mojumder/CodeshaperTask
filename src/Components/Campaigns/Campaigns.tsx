

const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      name: "Black Friday Sale",
      status: "Active",
      startDate: "2025-01-01",
      endDate: "2025-02-01",
    },
    {
      id: 2,
      name: "Holiday Discounts",
      status: "Inactive",
      startDate: "2025-03-01",
      endDate: "2025-03-31",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Campaigns</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          + Add New Campaign
        </button>
      </div>

      {/* Campaigns Table */}
      <div className="bg-white rounded shadow-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Campaign Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Start Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                End Date
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr
                key={campaign.id}
                className="border-b last:border-none hover:bg-gray-50"
              >
                <td className="px-6 py-4 text-sm text-gray-700">
                  {campaign.name}
                </td>
                <td
                  className={`px-6 py-4 text-sm ${
                    campaign.status === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {campaign.status}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {campaign.startDate}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {campaign.endDate}
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-sm px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Edit
                  </button>
                  <button className="text-sm px-4 py-1 ml-2 bg-red-600 text-white rounded hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Campaigns;
