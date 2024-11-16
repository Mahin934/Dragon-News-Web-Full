import React from 'react';
import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { author, title, rating, total_view, image_url, details } = news;


    return (
        <div className='mb-8'>
            <div className="bg-white shadow-lg rounded-lg p-5 border border-gray-200">
                {/* Header Section */}
                <div className="flex items-center mb-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                        <h2 className="font-semibold text-gray-800">{author.name}</h2>
                        <p className="text-sm text-gray-500">{new Date(author.published_date).toDateString()}</p>
                    </div>
                    <div className="ml-auto text-gray-500">
                        <FaShareAlt className="cursor-pointer" />
                    </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-gray-800">{title}</h3>

                {/* Thumbnail Image */}
                <img
                    src={image_url}
                    alt={title}
                    className="w-full  object-cover rounded-md mt-3"
                />

                {/* Details and Read More */}
                <p className="text-gray-600 text-sm mt-3">
                    {details.slice(0, 350)}... <Link to={`/news/${news._id}`}><span className="text-blue-600 cursor-pointer">Read More</span></Link>
                </p>
                <div className="divider"></div>
                {/* Rating and Views */}
                <div className="flex items-center justify-between mt-3">
                    {/* Star Rating */}
                    <div className="flex items-center text-yellow-500">
                        {Array.from({ length: 5 }, (_, i) => (
                            <FaStar key={i} className={i < Math.round(rating.number) ? "text-yellow-500" : "text-gray-300"} />
                        ))}
                        <span className="ml-1 font-semibold text-gray-800">{rating.number}</span>
                    </div>

                    {/* Total Views */}
                    <div className="text-gray-500 flex items-center">
                        <FaEye className="inline-block mr-1" />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;