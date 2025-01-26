import upArrow from "../../image/upArrow.png";
import downArrow from "../../image/downArrow.png";
import sales from "../../image/sales.png";
import visitors from "../../image/visitors.png";
import order from "../../image/order.png";
import refunded from "../../image/Refunded.png";
import { IoIosArrowRoundDown } from "react-icons/io";

const Home = () => {
    const stats = [
        {
            title: "Total Sales",
            value: "$876,543.79",
            change: "+12.9%",
            positive: true,
            icon: sales,
        },
        {
            title: "Visitors",
            value: "950,198",
            change: "-2.5%",
            positive: false,
            icon: visitors,
        },
        {
            title: "Total Order",
            value: "4,623,764",
            change: "+12.9%",
            positive: true,
            icon: order,
        },
        {
            title: "Refunded",
            value: "970,234",
            change: "-3.4%",
            positive: false,
            icon: refunded,
        },
    ];

    const campaignData = [
        {
            source: "Google Ads",
            impression: "25,675,060",
            cost: "$655,389",
            clicks: "123,875",
            crt: "1.7%",
            conversion: "161,319",
        },
        {
            source: "Twitter Ads",
            impression: "12,871,692",
            cost: "$984,384",
            clicks: "321,875",
            crt: "1.3%",
            conversion: "98,745",
        },
        {
            source: "Facebook Ads",
            impression: "4,259,754",
            cost: "$355,389",
            clicks: "875,654",
            crt: "1.1%",
            conversion: "124,576",
        },
        {
            source: "Tiktok Ads",
            impression: "1,728,412",
            cost: "$984,384",
            clicks: "98,875",
            crt: "0.7%",
            conversion: "24,578",
        },
        {
            source: "Instagram",
            impression: "1,543,181",
            cost: "$655,380",
            clicks: "149,756",
            crt: "0.5%",
            conversion: "141,245",
        },
        {
            source: "LinkedIn",
            impression: "543,181",
            cost: "$984,384",
            clicks: "123,875",
            crt: "1.2%",
            conversion: "132,245",
        },
    ];

    return (
        <div className="bg-gray-100 p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="w-full h-[140px] sm:h-[160px] md:h-[100px] p-4 flex justify-between items-center bg-white shadow-md rounded-[12px] border-[1px] border-gray-200"
                    >
                        <div>
                            <div className="text-bold text-black">{stat.title}</div>
                            <div className="text-xl sm:text-2xl font-bold text-gray-800">{stat.value}</div>
                        </div>

                        <div>
                            <img
                                src={stat.icon}
                                alt={`${stat.title} icon`}
                                className="h-10 sm:h-12 w-10 sm:w-12 p-2 rounded-full bg-blue-100"
                            />
                            <div className="flex items-center space-x-1">
                                <img
                                    src={stat.positive ? upArrow : downArrow}
                                    alt="trend icon"
                                    className="h-4 w-4"
                                />
                                <span
                                    className={`text-sm font-medium ${stat.positive ? "text-green-500" : "text-red-500"}`}
                                >
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden mt-6">
                <h2 className="text-xl sm:text-2xl font-bold p-4">Campaign Performance by Source</h2>
                <table className="min-w-full border-collapse">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="flex px-4 sm:px-6 py-3 text-left text-sm font-medium text-gray-500">
                                Source <IoIosArrowRoundDown />
                            </th>
                            <th className="px-4 sm:px-6 py-3 text-left text-sm font-medium text-gray-500">Impression</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-sm font-medium text-gray-500">Cost</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-sm font-medium text-gray-500">Clicks</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-sm font-medium text-gray-500">CRT</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-sm font-medium text-gray-500">Conversion</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-inter font-medium text-gray-600 leading-5">
                        {campaignData.map((data, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-4 sm:px-6 py-4 text-[#5325DC]">{data.source}</td>
                                <td className="px-4 sm:px-6 py-4">{data.impression}</td>
                                <td className="px-4 sm:px-6 py-4">{data.cost}</td>
                                <td className="px-4 sm:px-6 py-4">{data.clicks}</td>
                                <td className="px-4 sm:px-6 py-4">{data.crt}</td>
                                <td className="px-4 sm:px-6 py-4">{data.conversion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
