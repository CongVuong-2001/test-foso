'use client'

import React, { useState } from 'react'
import Post from './Post';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import postData from '@/data';


const Blog = () => {

        const itemsPerPage = 6; 
        const [currentPage, setCurrentPage] = useState<number>(1);

        
        const totalPages = Math.ceil(postData.length / itemsPerPage);


        const currentPosts = postData.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );

        const goToPage = (page:number) => {
            if (page >= 1 && page <= totalPages) {
                setCurrentPage(page);
            }
        };

        const getPaginationNumbers = () => {
            const pages = [];
            if (totalPages <= 5) {
                for (let i = 1; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                if (currentPage > 3) pages.push("...");
                for (
                    let i = Math.max(2, currentPage - 1);
                    i <= Math.min(totalPages - 1, currentPage + 1);
                    i++
                ) {
                    pages.push(i);
                }
                if (currentPage < totalPages - 2) pages.push("...");
                pages.push(totalPages);
            }
            return pages;
        };
        return (
            <div className="container max-w-screen-xl mx-auto px-4">
                <h2 className="font-bold text-2xl">Tất cả bài viết</h2>

                {/* Banner */}
                <div className="relative w-full mt-6 bg-blue-700 text-white rounded-xl px-6 py-6 flex flex-col md:flex-row items-center justify-between">
                    <div className="max-w-lg m-4 w-full md:w-1/2">
                        <h2 className="text-2xl font-bold">
                            Gia nhập cộng đồng <span className="text-white">FMRP</span> – Kết nối, chia sẻ, cùng phát triển!
                        </h2>
                        <button className="mt-4 px-6 py-2 bg-transparent text-white border rounded-3xl font-semibold flex items-center gap-4">
                            Tham Gia Ngay <FiArrowUpRight />
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image
                            src="/blog-img-1.png"
                            alt="Blog Banner"
                            width={300}
                            height={200}
                            className="object-contain w-3/4 md:w-72"
                        />
                    </div>
                </div>

                {/* Danh sách bài viết */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {currentPosts.map((post) => (
          <Post key={post.id} name={post.name} url={post.image} />
        ))}
      </div>

      {/* Phân trang */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={() => goToPage(currentPage - 1)}
          className={`px-4 py-2 border rounded-lg ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"}`}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {getPaginationNumbers().map((page, index) =>
          page === "..." ? (
            <span key={index} className="px-3">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => goToPage(Number(page))}
              className={`px-4 py-2 border rounded-lg ${
                currentPage === page ? "bg-blue-500 text-white" : "hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => goToPage(currentPage + 1)}
          className={`px-4 py-2 border rounded-lg ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"}`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
        )
    }

    export default Blog