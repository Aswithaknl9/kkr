import React, { useState } from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Main reasons to explain fast business builder",
    date: "October 18, 2018",
    author: "Riva Collins",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog1-600x336.jpg",
    link: "https://demo.casethemes.net/finano/main-reasons-to-explan-fast-business-builder/",
  },
  {
    id: 2,
    title: "Blackpool police's hunt for David Schwimmer",
    date: "August 18, 2018",
    author: "Riva Collins",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog2-600x336.jpg",
    link: "https://demo.casethemes.net/finano/blackpool-polices-hunt-for-david-schwimmer/",
  },
  {
    id: 3,
    title: "Strategy for Norway’s Pension Fund Global",
    date: "July 18, 2018",
    author: "Riva Collins",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog3-600x336.jpg",
    link: "https://demo.casethemes.net/finano/strategy-for-norways-pesion-fund-global/",
  },
  {
    id: 4,
    title: "Business structures are changed by Onevo",
    date: "June 18, 2018",
    author: "Riva Collins",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog4-600x336.jpg",
    link: "https://demo.casethemes.net/finano/business-structured-are-changed-by-onevo/",
  },
  {
    id: 5,
    title: "Loft Office With Vintage Decor For Creative",
    date: "May 18, 2018",
    author: "Riva Collins",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog5-600x336.jpg",
    link: "https://demo.casethemes.net/finano/loft-office-with-vintage-decor-for-creative-working/",
  },
  {
    id: 6,
    title: "We are hiring many developers to develop",
    date: "April 18, 2018",
    author: "Riva Collins",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog6-600x336.jpg",
    link: "https://demo.casethemes.net/finano/we-are-hiring-many-developer-to-develop-apps/",
  },
  {
    id: 7,
    title: "Maecenas ac ultricieslo nunc, lacinia semper.",
    date: "April 5, 2018",
    author: "Riva Collins",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog7-600x336.jpg",
    link: "https://demo.casethemes.net/finano/we-are-hiring-many-developer-to-develop-apps/",
  },
  {
    id: 8,
    title: "Aliquam augue eros, for pulvinar et rutrum non",
    date: "April 3, 2018",
    author: "Riva Collins",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog8-600x336.jpg",
    link: "https://demo.casethemes.net/finano/we-are-hiring-many-developer-to-develop-apps/",
  },
  {
    id: 9,
    title: "Rermentum magna toi cursus lobortis Aenean",
    date: "April 1, 2018",
    author: "Riva Collins",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog9-600x336.jpg",
    link: "https://demo.casethemes.net/finano/we-are-hiring-many-developer-to-develop-apps/",
  },
];

const BlogGrid = () => {
  const firstPagePosts = 6;
  const postsPerPageAfterFirst = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil((blogPosts.length - firstPagePosts) / postsPerPageAfterFirst) + 1;

  const getDisplayedPosts = () => {
    if (currentPage === 1) {
      return blogPosts.slice(0, firstPagePosts);
    }
    const startIndex = firstPagePosts + (currentPage - 2) * postsPerPageAfterFirst;
    return blogPosts.slice(startIndex, startIndex + postsPerPageAfterFirst);
  };

  return (
    <div className="container mx-auto pt-[85px] pb-[90px]">
      <div className="text-center mb-8">
        <span className="text-gray-500 text-sm uppercase">News Grid</span>
        <h3 className="text-3xl font-bold mt-2 text-[#1a1e66]">
          We are here to manage your <br />
          finance with <cite className="text-[#3140fc] font-playfair">experience</cite>
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {getDisplayedPosts().map((post) => (
          <div key={post.id} className="p-[15px] mb-[44px]">
            <div className="relative shadow-md bg-white rounded-lg overflow-hidden group transition-transform duration-300">
              <div className="relative overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-50 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative pt-[29px] pl-[29px] pr-[32px] pb-[38px] border border-transparent">
                <ul className="text-[#1a1e66] text-sm flex space-x-4 pb-[15px] border-b mb-[10px]">
                  <li className="pr-[24px]">
                    <i className="fa fa-calendar text-[#314afc]"></i> {post.date}
                  </li>
                  <li>
                    <i className="fa fa-user text-[#314afc]"></i> By <Link to="#">{post.author}</Link>
                  </li>
                </ul>

                <h3 className="text-[24px] text-[#1a1e66] font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-600">
                  <Link to={post.link}>{post.title}</Link>
                </h3>


                <div className="absolute  left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bottom-4">
                  <Link
                    to={post.link}
                    className="px-[43px] py-2 bg-[#3140fc] text-white rounded-full shadow-md hover:bg-blue-600 transition-all duration-300 inline-block text-center"
                  >
                    View Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <nav className="flex space-x-2">
          {currentPage > 1 && (
            <button
              className="px-4 py-2 rounded-md bg-gray-200 text-gray-700"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <i className="fa fa-angle-left"></i>
            </button>
          )}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              className="px-4 py-2 rounded-md bg-gray-200 text-gray-700"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <i className="fa fa-angle-right"></i>
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default BlogGrid;
