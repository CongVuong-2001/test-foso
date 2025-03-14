"use client"

import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { FiArrowUpRight, FiChevronDown } from 'react-icons/fi'

const MenuSlug = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleOpen = () => {
    setIsOpen((prev) => (!prev))
  }

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <div className="rounded-lg p-4 md:flex flex-col max-w-md mt-16">
      <div
        className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
        <h2 className="text-lg font-bold">Nội Dung Bài Viết</h2>
        <div>
          <FiChevronDown
            className={`transition-transform duration-200 ${isOpen ? "rotate-0" : "rotate-180"}
            `}
          />
        </div>

      </div>

      {isOpen && (
        <ul className="mt-2 text-gray-700">
          <li onClick={() => scrollToSection("title-1")} className="font-semibold cursor-pointer text-green-600">1. Quy trình 5S là gì?</li>
          <li onClick={() => scrollToSection("title-2")} className='cursor-pointer'>2. Lợi ích quy trình 5S đem lại</li>
          <li >
            <p onClick={() => scrollToSection("title-3")} className='cursor-pointer'>3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</p>
            <ul className="ml-4 text-sm">
              <li>3.1 Cải thiện rõ nét môi trường làm việc</li>
              <li>3.2 Tiết kiệm thời gian đáng kể</li>
              <li>3.3 Tăng năng suất làm việc</li>
              <li>3.4 Tiết kiệm chi phí</li>
              <li>3.5 Tăng chất lượng sản phẩm</li>
            </ul>
          </li>
          <li>
            <p onClick={() => scrollToSection("title-4")} className='cursor-pointer'>4. Quy trình 5S gồm các bước:</p>
            <ul className="ml-4 text-sm">
              <li>4.1 Seiri (Ngăn nắp)</li>
              <li>4.2 Seiton (Sắp xếp)</li>
              <li>4.3 Seiso (Vệ sinh)</li>
              <li>4.4 Seiketsu (Tiêu chuẩn hóa)</li>
              <li>4.5 Shitsuke (Kỷ luật)</li>
            </ul>
          </li>
          <li>
            <p onClick={() => scrollToSection("title-4")} className='cursor-pointer'>5. Quy trình được thực hiện như sau:</p>
            <ul className="ml-4 text-sm">
              <li>5.1 Giai đoạn chuẩn bị</li>
              <li>5.2 Triển khai rộng rãi</li>
              <li>5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</li>
              <li>5.4 Sàng lọc, sắp xếp và đánh giá</li>
              <li>5.5 Đánh giá</li>
            </ul>
          </li>
          <li className='cursor-pointer' onClick={() => scrollToSection("title-6")}>6. Quy trình 5S có giống với Kaizen?</li>
          <li className='cursor-pointer' onClick={() => scrollToSection("title-7")}>7. Đối tượng nào nên áp dụng 5S?</li>
          <li className='cursor-pointer' onClick={() => scrollToSection("title-8")}>8. Các yếu tố tạo nên thành công cho quy trình 5S</li>
        </ul>
      )}

      <div className="text-white bg-blue-600 rounded-lg text-center space-y-3">
        <div className="flex flex-col items-center  space-y-2">
          <div className='relative w-full min-h-48'>
            <Image
              src="/menu-1.png"
              alt="Miễn phí dùng thử"
              width={200}
              height={192}
              className="absolute right-0 top-4"
            />
          </div>
          <div className="relative w-full min-h-32">
            <Image
              src="/menu-2.png"
              alt="Miễn phí dùng thử"
              width={100}
              height={120}
              className="absolute left-2 top-0"
            />
            <Image
              src="/menu-3.png"
              alt="Miễn phí dùng thử"
              width={200}
              height={100}
              className=" absolute left-10 top-5"
            />
          </div>
        </div>
        <div className="pb-6 px-4">
          <button className="flex items-center justify-center w-full bg-transparent border rounded-3xl text-white py-2 font-semibold">
            Trải Nghiệm Ngay <FiArrowUpRight className="ml-2" />
          </button>
        </div>
      </div>
      <div className="mt-8 text-white bg-blue-600 rounded-lg text-center space-y-3">

        <Image src="/menu-4.png" alt="Miễn phí dùng thử" width={164} height={64} className="w-full" />

        <h3 className="text-lg font-semibold">Gia nhập cộng đồng FMRP Việt - Kết nối, chia sẽ, cùng phát triển!</h3>
        <div className="py-6 px-4 ">
          <button className="flex items-center justify-center w-full bg-transparent border rounded-3xl text-white py-2 font-semibold">
            Trải Nghiệm Ngay <FiArrowUpRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuSlug