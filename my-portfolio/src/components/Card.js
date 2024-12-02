import React from 'react';

const tagColors = {
    dataScience: "bg-blue-200 text-blue-800",
    nlp: "bg-green-200 text-green-800",
    machineLearning: "bg-purple-200 text-purple-800",
    default: "bg-gray-200 text-gray-700", // Fallback for unrecognized tags
};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function Card({ title, description, image, tags, href }) {
    return (
        <div className="card max-w-sm transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
            <img
                alt={`${title} Image`}
                src={image}
                className="w-full h-56 object-cover"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-6">
                {tags && tags.map((tag, index) => (
                    <span
                        key={index}
                        className={classNames(
                            "inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2",
                            tagColors[tag] || tagColors.default
                        )}
                    >
                        #{tag}
                    </span>
                ))}
            </div>
            <div className="px-6 pb-4 justify-end flex items-center space-x-1 text-indigo-500 hover:text-indigo-700">
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium"
                >
                    View Github
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    );
}

export default Card;