import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full py-12 px-4 text-center">
      <div className="container max-w-screen-xl mx-auto">
        {/* Tiêu đề */}
        <h1 className="text-2xl md:text-4xl font-semibold mt-4 md:mt-6">
          Blog <span className="text-green-600 font-bold">FOSO</span> – <br className="hidden md:block" />
          Cập Nhật Tin Tức <span className="font-extrabold text-black">Mới Nhất</span>
        </h1>

        {/* Mô tả */}
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
        </p>

        <div className="absolute top-0 left-5 md:left-20 w-16 md:w-24 h-16 md:h-24">
          <Image src='/hero-left.png' width={500} height={100} alt='' className='w-full h-full object-contain' />
        </div>
        <div className="absolute top-0 right-5 md:right-20 w-16 md:w-24 h-16 md:h-24">
          <Image src='/hero-right.png' width={500} height={550} alt='' className='w-full h-full object-contain' />
        </div>
      </div>
    </section>
  )
}

export default Hero