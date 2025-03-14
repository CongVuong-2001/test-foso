import Hero from "../conponent/Hero";
import Blog from "../conponent/Blog";
import Menu from "../conponent/Menu";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center p-8">
        <p className="text-gray-600 text-sm">
          Trang chủ &gt; Tin tức &gt; <span className="font-semibold">Blog</span>
        </p>
      </div>
      <Hero />
      <div className="px-4 md:px-8 lg:px-16 xl:px-46 w-full flex gap-6">
        <div className="w-full md:w-3/4">
          <Blog />
        </div>
        <div className="hidden md:flex w-1/4">
          <Menu />
        </div>

      </div>

    </div>
  );
}
