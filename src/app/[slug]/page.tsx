import MenuSlug from '@/conponent/MenuSlug'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiCalendar, FiClock, FiCornerDownRight } from 'react-icons/fi'
import { BsDot } from "react-icons/bs";


const page = () => {

    const posts = [
        {
            id: 1,
            title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
            date: "17/11/2022",
            readTime: "10 phút đọc",
            category: "Quản lý sản xuất",
            image: "/Blog.png",
            link: "#",
        },
        {
            id: 2,
            title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
            date: "17/11/2022",
            readTime: "10 phút đọc",
            category: "Quản lý sản xuất",
            image: "/Blog.png",
            link: "#",
        },
        {
            id: 3,
            title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
            date: "17/11/2022",
            readTime: "10 phút đọc",
            category: "Quản lý sản xuất",
            image: "/Blog.png",
            link: "#",
        }
    ]

    return (
        <div className='px-4 md:px-16 lg:px-32 xl:px-46 w-full flex gap-4'>
            <div className="max-w-4xl mx-auto py-4 px-4 w-full md:w-2/3">
                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500">
                    <Link href="https://fososoft.vn/" className="hover:underline">Trang chủ</Link> &gt;
                    <Link href="/" className="hover:underline"> Tài nguyên</Link> &gt;
                    <Link href="/" className="hover:underline"> Blog</Link> &gt;
                    <span className="font-semibold text-black"> Quản Lý Sản Xuất</span>
                </nav>
                <div className='bg-[#E2F0FE] text-blue-500 px-2 w-max mt-12'><p>Quản Lý Sản Xuất</p></div>
                {/* Tiêu đề */}
                <h1 className="text-3xl font-bold mt-2">Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nên Biết</h1>

                {/* Tác giả + Ngày đăng + Thời gian đọc */}
                <div className="md:flex items-center justify-between mt-4">
                    <div className='flex items-center'>
                        <Image src="/avatar.png" alt="Tác giả" width={54} height={40} className="rounded-full mr-2" />
                        <div className='flex flex-col'>
                            <p className='text-sm text-gray-400'>Tác giả</p>
                            <span className=" font-semibold">FOSO Creator</span>
                        </div>

                    </div>

                    <div className='flex mx-2'>
                        <span className="text-gray-500 flex items-center"><FiCalendar className="mr-1" /> Cập nhật vào: 17/11/2022</span>
                        <span className="text-gray-500 mx-4">|</span>
                        <span className="text-gray-500 flex items-center"><FiClock className="mr-1" /> 10 phút đọc</span>
                    </div>
                </div>
                <div className=" py-8 px-4 text-gray-800 leading-relaxed">
                    {/* Tiêu đề chính */}
                    <Image src="/detail-blog/quy-trinh-5s.png" alt="Tác giả" width={500} height={500} className="w-full" />
                    <h2 id="title-1" className="text-center text-gray-400 font-semibold text-sm">Quy trình 5S là gì?</h2>

                    {/* Đoạn giới thiệu in nghiêng */}
                    <p className="italic text-lg text-gray-600 text-center mt-2">
                        "Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì?
                        Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết..."
                    </p>

                    {/* Chương mục 1 */}
                    <h1 className="text-green-600 font-bold text-xl mt-6">1. Quy trình 5S là gì?</h1>
                    <p className="mt-2">
                        Quy trình 5S được biết đến là mô hình quản trị hiệu quả trong sản xuất. Nguồn gốc của quy trình 5S là đến từ Nhật Bản.
                    </p>

                    <p className="mt-2">
                        5S hiện nay đang được rất nhiều nước trên thế giới ứng dụng. Quy trình này gồm 5 chữ S đầu trong tiếng Nhật:
                    </p>

                    {/* Danh sách các bước */}
                    <ul className="mt-3 space-y-1">
                        <li className=" flex items-center">
                            <BsDot className="mr-2" /> <span className='text-green-600'>Seiri &nbsp;</span> (Ngăn nắp)
                        </li>
                        <li className="flex items-center">
                            <BsDot className="mr-2" /> <span className='text-green-600'>Seiton</span> &nbsp;(Sắp xếp)
                        </li>
                        <li className="flex items-center">
                            <BsDot className="mr-2" /> <span className='text-green-600'>Seiso</span>  &nbsp;(Vệ sinh)
                        </li>
                        <li className="flex items-center">
                            <BsDot className="mr-2" /> <span className='text-green-600'>Seiketsu</span> &nbsp;(Tiêu chuẩn hóa)
                        </li>
                        <li className="flex items-center">
                            <BsDot className="mr-2" /><span className='text-green-600'>Shitsuke</span>  &nbsp;(Kỷ luật)
                        </li>
                    </ul>
                    <h1 id="title-2" className="text-green-600 font-bold text-xl my-4">2. Lợi ích quy trình 5s đem lại</h1>
                    <p className="leading-relaxed">
                        Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi trường làm việc của doanh nghiệp.
                    </p>

                    <p className="leading-relaxed mt-4">
                        Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.
                    </p>

                    <p className="leading-relaxed mt-4">
                        Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa doanh nghiệp tích cực.
                    </p>

                    <Image src="/detail-blog/tai-sao.png" alt="Tác giả" width={500} height={500} className="w-full" />
                    <h2 className="text-gray-500 text-center italic mb-4">
                        Tại sao doanh nghiệp cần áp dụng quy trình 5S?
                    </h2>

                    <h3 id="title-3" className="text-green-600 font-bold text-lg">
                        3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
                    </h3>

                    <p className=" mt-2">
                        Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:
                    </p>

                    <h4 className="text-green-500 font-semibold mt-4">3.1 Cải thiện rõ nét môi trường làm việc</h4>
                    <p className=" mt-2">
                        Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.
                    </p>

                    <h4 className="text-green-500 font-semibold mt-4">3.2 Tiết kiệm thời gian đáng kể</h4>
                    <p className=" mt-2">
                        Khi doanh nghiệp áp dụng quy trình, nhiều nhiệm vụ sẽ được tối ưu hóa thời gian đáng kể khi không còn mất nhiều thời gian để tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm trở nên dễ dàng.
                    </p>

                    <h4 className="text-green-500 font-semibold mt-4">3.3 Tăng năng suất làm việc</h4>
                    <p className=" mt-2">
                        Với việc áp dụng 5S, bằng cách loại bỏ những thứ không cần thiết, sắp xếp vật liệu, dụng cụ và các thiết bị một cách hợp lý, năng suất làm việc của doanh nghiệp sẽ được tăng lên đáng kể.
                    </p>

                    <h4 className="text-green-500 font-semibold mt-4">3.4 Tiết kiệm chi phí</h4>
                    <p className=" mt-2">
                        Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm đáng kể chi phí hoạt động cho doanh nghiệp của mình.
                    </p>

                    <h4 className="text-green-500 font-semibold mt-4">3.5 Tăng chất lượng sản phẩm</h4>
                    <p className=" mt-2">
                        5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm lỗi sai trong sản xuất không mong muốn.
                    </p>

                    <Image src="/detail-blog/cac-buoc-1.png" alt="Tác giả" width={500} height={500} className="w-full" />

                    <h2 className="text-gray-500 text-center italic mb-4">
                        Quy trình 5S gồm các bước
                    </h2>

                    <h3 id="title-4" className="text-green-600 font-bold text-lg">
                        4. Quy trình 5S gồm các bước
                    </h3>

                    <p className="text-gray-700 mt-2">
                        5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp.
                        Sau bao gồm năm bước cơ bản sau:
                    </p>

                    <h4 className="text-green-500 font-semibold mt-4">4.1 Seiri (Ngăn nắp)</h4>
                    <p className="text-gray-700 mt-2">
                        Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết
                        để tạo ra một không gian làm việc gọn gàng và tiết kiệm thời gian.
                    </p>

                    <h4 className="text-green-500 font-semibold mt-4">4.2 Seiton (Sắp xếp)</h4>
                    <p className="text-gray-700 mt-2">
                        Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng
                        để giúp tìm kiếm và sử dụng nhanh chóng hơn.
                    </p>

                    <h4 className="text-green-500 font-semibold mt-4">4.3 Seiso (Vệ sinh)</h4>
                    <p className="text-gray-700 mt-2">
                        Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ dọn sạch môi trường làm việc luôn sạch sẽ.
                        Việc vệ sinh thường xuyên sẽ giúp giảm thiểu sự xảy ra nhiễm bẩn tại nơi làm việc và tăng cường sức khỏe cho mỗi nhân viên.
                    </p>

                    <h4 className="text-green-500 font-semibold mt-4">4.4 Seiketsu (Tiêu chuẩn hóa)</h4>
                    <p className="text-gray-700 mt-2">
                        Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn vệ sinh sẵn sàng,
                        gọn gàng và cách thức duy trì chúng.
                    </p>

                    <h4 className="text-green-500 font-semibold mt-4">4.5 Shitsuke (Kỷ luật)</h4>
                    <p className="text-gray-700 mt-2">
                        Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong quy trình hiệu quả của quy tắc 5S trong doanh nghiệp.
                        Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức
                        duy trì và tuân thủ theo quy trình.
                    </p>

                    <Image src="/detail-blog/cac-buoc-2.png" alt="Tác giả" width={500} height={500} className="w-full" />

                    <h2 className="text-gray-500 text-center italic mb-4">
                        Các bước thực hiện quy trình 5S
                    </h2>

                    <h3 id="title-5" className="text-green-600 font-bold text-lg">
                        5. Quy trình được thực hiện như sau:
                    </h3>

                    <p className="text-gray-700 mt-2">
                        Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng
                        chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:
                    </p>

                    <h4 className="text-green-500 font-semibold mt-4">5.1 Giai đoạn chuẩn bị</h4>
                    <p className="text-gray-700 mt-2">
                        Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực để đưa hành và quản lý quá trình thực hiện quy trình 5S.
                        Việc phân bổ nhân sự phù hợp giúp quy trình áp dụng thực tế 5S sẽ hiệu quả hơn.
                    </p>

                    <h4 className="text-green-500 font-semibold mt-4">5.2 Tiến hành rộng rãi</h4>
                    <p className="text-gray-700 mt-2">
                        Bước tiến doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ
                        kiến thức cũng như cách áp dụng hiệu quả vào doanh nghiệp của mình.
                    </p>

                    <h4 className="text-green-500 font-semibold mt-4">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h4>
                    <p className="text-gray-700 mt-2">
                        Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền rộng rãi
                        để tạo ý thức vệ sinh chung cho nhân sự.
                    </p>

                    <h4 className="text-green-500 font-semibold mt-4">5.4 Sàng lọc, sắp xếp và đánh giá</h4>
                    <p className="text-gray-700 mt-2">
                        Bước tiếp theo sau khi tiến hành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn lọc và
                        loại bỏ các vật dụng không cần thiết và sắp xếp trật tự khoa học hơn, giúp tối ưu hóa và tiết kiệm không gian làm việc.
                    </p>

                    <h4 className="text-green-500 font-semibold mt-4">5.5 Đánh giá</h4>
                    <p className="text-gray-700 mt-2">
                        Sau khi hoàn tất các bước, doanh nghiệp nên tiến hành kết quả triển khai để tìm ra xem xét cần cải tiến phương diện nào
                        hay không trong quá trình thực hiện 5S.
                    </p>

                    <h3 id="title-6" className="text-green-600 font-bold text-lg mt-6">
                        6. Quy trình 5S có giống với Kaizen?
                    </h3>

                    <p className="text-gray-700 mt-2">
                        Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau
                        nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.
                    </p>

                    <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700 my-4">
                        “Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp.
                        Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.”
                    </blockquote>

                    <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700 my-4">
                        “Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất.
                        5S tập trung vào việc sắp xếp, xác lập, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.”
                    </blockquote>

                    <p className="text-gray-700 mt-2">
                        Tóm lại, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ,
                        khoa học và hiệu quả. Từ đó doanh nghiệp có thể ứng dụng song song giữa 5S và Kaizen để đạt tính liên tục tiến lên, phát triển và hoàn thiện không ngừng
                        nhằm chắc chắn cho hoạt động đạt tiến cao nhất.
                    </p>
                    <h3 id="title-7" className="text-green-600 font-bold text-lg mt-6">
                        7. Đối tượng nào nên áp dụng 5S?
                    </h3>

                    <p className="text-gray-700 mt-2">
                        Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh
                        nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ
                        chức phi lợi nhuận và các doanh nghiệp nhỏ.
                    </p>

                    <p className="text-gray-700 mt-2">
                        Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được
                        quản lý và sử dụng hiệu quả.
                    </p>

                    <Image src="/detail-blog/yeu-to.png" alt="Tác giả" width={500} height={500} className="w-full" />

                    <h3 id="title-8" className="text-green-600 font-bold text-lg mt-6">
                        8. Các yếu tố tạo nên thành công cho quy trình 5S
                    </h3>

                    <p className="text-gray-700 mt-2">
                        Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh
                        nghiệp đó là từ phía:
                    </p>

                    <ul className="list-disc pl-5 text-gray-700 mt-2">
                        <li>
                            <strong>Lãnh đạo</strong> có cam kết và ủng hộ áp dụng quy trình vào doanh nghiệp. Đây được
                            xem là yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng được quy tắc này hay không.
                        </li>
                        <li>
                            <strong>Chương trình</strong>  kế hoạch thực hiện quy trình: Sau khi lãnh đạo đồng ý, doanh nghiệp
                            cần bộ phận đầu tiên tuyên truyền, kế hoạch thực hiện ban đầu 5S.
                        </li>
                        <li>
                            <strong>Sự huy động tình nguyện từ nhân viên</strong>: Doanh nghiệp cần động viên và khuyến khích
                            nhân viên tự nguyện thực hiện 5S để tạo nền văn hóa của chính các doanh nghiệp.
                        </li>
                    </ul>

                    <p className="text-gray-700 mt-2">
                        Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt
                        trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình.
                    </p>


                    <div className="bg-white p-4 rounded-lg mt-6">
                        <h4 className="text-center font-semibold">Bạn thấy bài viết như thế nào?</h4>
                        <p className="text-center text-gray-500">4 phản hồi</p>
                        <div className="flex justify-center gap-4 mt-4">
                            <div className="text-center">
                                <button className='cursor-pointer focus:border focus:border-green-300 px-3'>
                                    <span className="text-yellow-500 text-2xl ">👍</span>
                                    <p className="text-sm text-green-600 font-semibold">Hữu ích</p>
                                    <p className="text-gray-500 text-xs">1</p>
                                </button>

                            </div>
                            <div className="text-center">
                                <button className='cursor-pointer focus:border focus:border-green-300 px-3'>
                                    <span className="text-green-500 text-2xl">💚</span>
                                    <p className="text-sm text-gray-700">Yêu thích</p>
                                    <p className="text-gray-500 text-xs">0</p>
                                </button>

                            </div>
                            <div className="text-center">
                                <button className='cursor-pointer focus:border focus:border-green-300 px-3'>
                                    <span className="text-yellow-500 text-2xl">😲</span>
                                    <p className="text-sm text-gray-700">Bất ngờ</p>
                                    <p className="text-gray-500 text-xs">0</p>
                                </button>

                            </div>
                            <div className="text-center">
                                <button className='cursor-pointer focus:border focus:border-green-300 px-3'>
                                    <span className="text-yellow-500 text-2xl">🤔</span>
                                    <p className="text-sm text-gray-700">Nhàm chán</p>
                                    <p className="text-gray-500 text-xs">0</p>
                                </button>

                            </div>
                            <div className="text-center">
                                <button className='cursor-pointer focus:border focus:border-green-300 px-3'>
                                    <span className="text-red-500 text-2xl">😡</span>
                                    <p className="text-sm text-gray-700">Tức giận</p>
                                    <p className="text-gray-500 text-xs">0</p>
                                </button>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="max-w-6xl mx-auto py-8">
                    <h2 className="text-xl font-bold mb-4">Bài Viết Liên Quan</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <Image src={post.image} alt={post.title} width={500} height={500} className="w-full h-52" />
                                <div className="p-4">
                                    <div className='px-1 bg-blue-200 w-max rounded-4xl'>
                                        <span className="text-sm text-blue-500 font-medium">{post.category}</span>
                                    </div>

                                    <h3 className="text-lg font-semibold mt-1">{post.title}</h3>
                                    <div className="flex items-center text-gray-500 text-sm mt-2">
                                        <span className="mr-3">📅 {post.date}</span>
                                        <span>⏳ {post.readTime}</span>
                                    </div>
                                    <a href={post.link} className="text-gray-500 font-medium flex items-center mt-3">
                                        Khám phá thêm →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='hidden md:flex md:w-1/3'>
                <MenuSlug />
            </div>
        </div>
    )
}

export default page