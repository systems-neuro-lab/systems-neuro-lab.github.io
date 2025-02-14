import React, { useEffect } from "react";
import { newsItems } from "../components/NewsSidebar";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">News from the Systems Neuroscience Lab!</h1>
        <div className="mt-8">
          <ul className="list-disc list-inside space-y-6">
            {newsItems.map((item, index) => (
              <li key={index} className="text-gray-800">
                <span className="font-semibold text-primary">{item.date}</span>
                <br />
                <span className="ml-5 block mt-2">{item.content}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;