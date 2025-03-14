import Image from 'next/image';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";


const Menu = () => {
    const dataMenu = [
        { name: "Tất cả", count: 108 },
        { name: "Thiết Kế Website", count: 36 },
        { name: "Thiết Kế App Mobile", count: 13 },
        { name: "Quản Lý Sản Xuất", count: 25 },
        { name: "Quản Lý Bán Hàng", count: 22 },
        { name: "Báo Chí Nói Về FOSO", count: 7 },
        { name: "Tin Tức FOSO", count: 5 }
    ];

    return (
        <div className='hidden md:flex flex-col'>
            <h2 className='font-bold text-2xl'>Tìm Kiếm</h2>
            <div className='flex mt-6 shadow bg-white px-1 py-2 items-center justify-between rounded-2xl'>
                <input className='focus:outline-none px-2' placeholder='Tìm kiếm bài viết' />
                <div className='bg-[#15AA7A] p-3 rounded-xl'>
                    <CiSearch className='text-white' />
                </div>
            </div>
            <div className='py-6'>
                <h3 className="text-lg font-semibold mb-2">Danh Mục</h3>
                <ul className="flex flex-col gap-y-3 mt-6">
                    {dataMenu.map((menu: any) => (
                        <li key={menu.name} className="flex justify-between text-gray-700 hover:text-green-600 cursor-pointer">
                            <span>{menu.name}</span>
                            <span>{menu.count}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Banner */}
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

export default Menu