import ChatbotBubble from "@/components/ChatbotBubble";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F5F5F5]  grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className=" flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div class="font-[sans-serif] p-4 mx-auto">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            Top Brand Laptops
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg hover:rounded-lg  transition-all relative ">
              <div class="w-full h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
                <img
                  src="https://readymadeui.com/images/laptop2.webp"
                  alt="laptop1"
                  class="h-full w-full object-contain"
                />
              </div>

              <div class="p-6">
                <hr class="border-2 mb-6" />
                <div>
                  <h3 class="text-base text-gray-800">
                    HP Polycarbonate Laptop 15S, AMD, 15.6-IInch (39.6 Cm)
                  </h3>
                  <h4 class="text-xl text-gray-800 font-bold mt-4">$600</h4>
                </div>

                <div class="flex space-x-1.5 mt-4">
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p class="text-base text-gray-800 !ml-2">50</p>
                </div>
              </div>
            </div>

            <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg hover:rounded-lg transition-all relative">
              <div class="w-full h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
                <img
                  src="https://readymadeui.com/images/laptop3.webp"
                  alt="laptop2"
                  class="h-full w-full object-contain"
                />
              </div>

              <div class="p-6">
                <hr class="border-2 mb-6" />
                <div>
                  <h3 class="text-base text-gray-800">
                    ASUS Vivobook 15, Intel Core i3-1220P 12th Gen
                  </h3>
                  <h4 class="text-xl text-gray-800 font-bold mt-4">$550</h4>
                </div>

                <div class="flex space-x-1.5 mt-4">
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p class="text-base text-gray-800 !ml-2">70</p>
                </div>
              </div>
            </div>

            <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg hover:rounded-lg transition-all relative">
              <div class="w-full h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
                <img
                  src="https://readymadeui.com/images/laptop1.webp"
                  alt="laptop3"
                  class="h-full w-full object-contain"
                />
              </div>

              <div class="p-6">
                <hr class="border-2 mb-6" />
                <div>
                  <h3 class="text-base text-gray-800">
                    Lenovo V15 Intel Celeron N4500 15.6" (39.62 cm)
                  </h3>
                  <h4 class="text-xl text-gray-800 font-bold mt-4">$570</h4>
                </div>

                <div class="flex space-x-1.5 mt-4">
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p class="text-base text-gray-800 !ml-2">30</p>
                </div>
              </div>
            </div>

            <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg hover:rounded-lg transition-all relative">
              <div class="w-full h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
                <img
                  src="https://readymadeui.com/images/laptop4.webp"
                  alt="laptop4"
                  class="h-full w-full object-contain"
                />
              </div>

              <div class="p-6">
                <hr class="border-2 mb-6" />
                <div>
                  <h3 class="text-base text-gray-800">
                    Acer One 14 AMD Ryzen 3 (8GB RAM/256GB SSD/AMD)
                  </h3>
                  <h4 class="text-xl text-gray-800 font-bold mt-4">$520</h4>
                </div>

                <div class="flex space-x-1.5 mt-4">
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p class="text-base text-gray-800 !ml-2">55</p>
                </div>
              </div>
            </div>

            <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg hover:rounded-lg transition-all relative">
              <div class="w-full h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
                <img
                  src="https://readymadeui.com/images/laptop5.webp"
                  alt="laptop5"
                  class="h-full w-full object-contain"
                />
              </div>

              <div class="p-6">
                <hr class="border-2 mb-6" />
                <div>
                  <h3 class="text-base text-gray-800">
                    Dell 15 Laptop, 8GB/ 1TB+256GB SSD/15.6
                  </h3>
                  <h4 class="text-xl text-gray-800 font-bold mt-4">$570</h4>
                </div>

                <div class="flex space-x-1.5 mt-4">
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p class="text-base text-gray-800 !ml-2">65</p>
                </div>
              </div>
            </div>

            <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg hover:rounded-lg transition-all relative">
              <div class="w-full h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
                <img
                  src="https://readymadeui.com/images/laptop6.webp"
                  alt="laptop5"
                  class="h-full w-full object-contain"
                />
              </div>

              <div class="p-6">
                <hr class="border-2 mb-6" />
                <div>
                  <h3 class="text-base text-gray-800">
                    Samsung 15 Laptop, 8GB/ 1TB+256GB SSD/15.6
                  </h3>
                  <h4 class="text-xl text-gray-800 font-bold mt-4">$770</h4>
                </div>

                <div class="flex space-x-1.5 mt-4">
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#d40029]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p class="text-base text-gray-800 !ml-2">85</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChatbotBubble />
      </main>
    </div>
  );
}
