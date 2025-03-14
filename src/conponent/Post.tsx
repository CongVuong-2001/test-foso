import React from 'react'
import { LuClock3 } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import Image from 'next/image';
import Link from 'next/link';
import slugify from "slugify";
import postData from '@/data';

type PostProps = {
  name:string,
  slug?: string,
  url: string,
  createAt?: string
}

const Post = ({name, url, createAt} : PostProps) => {

  const toSlug = (str: string) => {
    return slugify(str, {
      lower: true, 
      remove: /[*+~.()'"!:@]/g, 
      locale: 'vi', 
    });
  };
  const slug = toSlug(name);
 

        return (
          <Link key={slug} href={`/${slug}`}>
            <div className="bg-white overflow-hidden rounded-3xl cursor-pointer transition-transform transform hover:scale-105">
              <Image
                src={url}
                alt={name}
                width={500}
                height={300}
                className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-3xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mt-2">{name}</h3>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <span className="mr-2 flex items-center">
                    <CiCalendar /> {createAt}
                  </span>
                  <span className="flex items-center gap-1">
                    <LuClock3 /> 10 phút đọc
                  </span>
                </div>
                <span className="mt-4 text-gray-500 font-semibold inline-block">
                  Khám phá thêm →
                </span>
              </div>
            </div>
          </Link>
       
  )
}

export default Post