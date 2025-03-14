'use client'

import Image from 'next/image'
import Link from 'next/link';
import React, { useCallback, useState } from 'react'
import { FiArrowUpRight, FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<{ [key: string]: boolean }>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const ToggleDrop = useCallback((menu: string) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  }, []);
  return (
    <nav className="w-10/12 fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-16 py-4 flex items-center justify-between gap-4 z-50 ">

      {/* Logo */}
      <Link href="/">
        <Image src="/logo.png" alt="foso" width={108} height={64} />
      </Link>

      {/* Menu cho desktop */}
      <div className="hidden lg:flex items-center gap-4">
        <h4 className="cursor-pointer">Về chúng tôi</h4>

        
        <div className="relative">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => ToggleDrop("giaiPhap")}
          >
            <h4>Giải pháp</h4>
            <FiChevronDown className={`transition-transform ${openDropdown["giaiPhap"] ? "rotate-180" : "rotate-0"}`} />
          </div>
          {openDropdown["giaiPhap"] && (
            <div className="absolute left-0 top-full mt-2 w-max bg-white shadow-lg rounded-lg border z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Giải pháp 1</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Giải pháp 2</li>
              </ul>
            </div>
          )}
        </div>

   
        <div className="relative">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => ToggleDrop("taiNguyen")}
          >
            <h4>Tài Nguyên</h4>
            <FiChevronDown className={`transition-transform ${openDropdown["taiNguyen"] ? "rotate-180" : "rotate-0"}`} />
          </div>
          {openDropdown["taiNguyen"] && (
            <div className="absolute left-0 w-max top-full mt-2 bg-white shadow-lg rounded-lg border z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">abc</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">xyz</li>
              </ul>
            </div>
          )}
        </div>
        <div>
          Liên Hệ
        </div>

        <div className="flex gap-4">
          <div className="bg-[#e6e7e7] flex items-center rounded-4xl py-2 px-4">
            <Image src="/icon_country.png" width={20} height={16} alt="logo" />
            <select className="border-none bg-transparent ml-2">
              <option>VI</option>
              <option>EN</option>
            </select>
          </div>
          <div className="flex bg-[#4BDDAD] items-center gap-x-2 rounded-4xl py-2 px-4 cursor-pointer">
            Trở thành khách hàng
            <FiArrowUpRight className="bg-black text-white p-1 rounded-4xl h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        {isMobileMenuOpen ? (
          <FiX className="text-2xl cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
        ) : (
          <FiMenu className="text-2xl cursor-pointer" onClick={() => setIsMobileMenuOpen(true)} />
        )}
      </div>



      {/* Menu cho Mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md absolute top-16 left-0 w-full py-4 px-6">
          <ul className="space-y-4">
            <li className="cursor-pointer">Về chúng tôi</li>


            <li className="cursor-pointer" onClick={() => ToggleDrop("giaiPhap")}>
              <div className="flex justify-between items-center">
                Giải pháp <FiChevronDown className={`transition-transform ${openDropdown["giaiPhap"] ? "rotate-180" : "rotate-0"}`} />
              </div>
              {openDropdown["giaiPhap"] && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li className="cursor-pointer">Giải pháp 1</li>
                  <li className="cursor-pointer">Giải pháp 2</li>
                </ul>
              )}
            </li>


            <li className="cursor-pointer" onClick={() => ToggleDrop("taiNguyen")}>
              <div className="flex justify-between items-center">
                Tài Nguyên <FiChevronDown className={`transition-transform ${openDropdown["taiNguyen"] ? "rotate-180" : "rotate-0"}`} />
              </div>
              {openDropdown["taiNguyen"] && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>abc</li>
                  <li>xyz</li>
                </ul>
              )}
            </li>


            <li className="flex items-center gap-4">
              <Image src="/icon_country.png" width={20} height={16} alt="logo" />
              <select className="border-none bg-transparent">
                <option>VI</option>
                <option>EN</option>
              </select>
            </li>


            <li className="flex bg-[#4BDDAD] items-center gap-x-2 rounded-4xl py-2 px-4 justify-center cursor-pointer">
              Trở thành khách hàng
              <FiArrowUpRight className="bg-black text-white p-1 rounded-4xl h-5 w-5" />
            </li>
          </ul>
        </div>
      )}
    </nav>

  )
}

export default Header
