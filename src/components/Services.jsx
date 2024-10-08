import React from "react";
import {
    FaCarSide,
    FaHeadphonesAlt,
    FaCar,
    FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className="text-4xl md:text-5xl" style={{color: "red"}}/>,
        title: "Free Shipping",
        description: "Free Shipping On first 10 Order",
    },
    {
        id: 2,
        icon: <FaCheckCircle className="text-4xl md:text-5xl" style={{color: "red"}}/>,
        title: "Safe Money ",
        description: "30 Days Money Back",
    },
    {
        id: 3,
        icon: <FaCar className="text-4xl md:text-5xl" style={{color: "red"}}/>,
        title: "Fast Delivery",
        description: "cash on delivery",
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className="text-4xl md:text-5xl" style={{color: "red"}}/>,
        title: "Online Supoort 24/7",
        description: "Technical Support 24/7",
    },
];

const Services = () => {
    return (
        <div>
            <div className="container my-4 sm:mb-20 md:my-20" style={{height: "100px", paddingLeft: "100px",}}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 pt-4">
                    {ServiceData.map((data) => (
                        <div className="flex flex-col items-start sm:flex-row gap-4">
                            {data.icon}
                            <div>
                                <h1 className="lg:text-xl font-bold text-black">{data.title}</h1>
                                <h1 className="text-gray-400 text-sm">{data.description}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;


