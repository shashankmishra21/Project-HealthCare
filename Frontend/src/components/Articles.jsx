import React from "react";

const Articles = () => {
  const articles = [
    {
      title: "10 Tips for Heart Health",
      description:
        "Learn essential tips to keep your heart healthy and strong.",
      readTime: "9 min read",
      category: "Cardiology",
      date: "May 15, 2023",
    },
    {
      title: "Understanding Diabetes",
      description: "A comprehensive guide to managing diabetes effectively.",
      readTime: "6 min read",
      category: "Endocrinology",
      date: "April 28, 2023",
    },
    {
      title: "Mental Health Awareness",
      description: "Breaking the stigma around mental health discussions.",
      readTime: "5 min read",
      category: "Psychiatry",
      date: "June 2, 2023",
    },
  ];

  return (
    <div className="bg-emerald-50">
      {" "}
      {/* Added green background */}
      <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Health Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with expert health insights and latest medical
            research
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <a href="#" key={index} className="block">
              <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-emerald-100">
                {/* Featured Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center border-b border-emerald-50">
                  <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium text-emerald-600">
                      {article.date}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 mb-5 text-sm">
                    {article.description}
                  </p>

                  <a
                    href="#"
                    className="w-full py-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 font-medium rounded-md transition-colors text-sm flex items-center justify-center"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            </a>
          ))}
        </div>

        {/* View All Button - Resized */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-2.5 bg-emerald-600 text-white font-medium text-sm leading-tight rounded-lg hover:bg-emerald-700 transition-colors shadow-sm hover:shadow-md"
          >
            View All Articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Articles;
