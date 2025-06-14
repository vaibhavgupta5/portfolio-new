'use client'
import { useCurrPage } from '@/lib/store';
import { ArrowUp, Mail, User, Workflow } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function LeftSideBar() {
    const { page, setPage } = useCurrPage();
  return (
               <aside className="w-[14%] h-screen sticky border-r-1 flex flex-col items-center justify-center border-[#202021] top-0 bg-gray-100 dark:bg-[#050505]">
              <div className="flex h-[95vh] w-full pr-8 flex-col justify-between items-end p-4">
                <Image
                  className="rounded-full  border-5 border-[#202021]"
                  src="https://avatars.githubusercontent.com/u/109146556?v=4"
                  alt="Description"
                  width={70}
                  height={70}
                />

                <div className="flex gap-4 flex-col justify-center items-start ml-4">
                  <div  className="flex gap-4 group justify-center items-center">
                    <User
                      className={page === 'home' ? "text-[#999999] cursor-pointer group  h-12 w-12 p-3 rounded-xl bg-[#141415] dark:text-[#999999]" : "text-[#999999] cursor-pointer group hover:bg-[#0A0A0B] border-1 border-transparent hover:border-[#202021] h-12 w-12 p-3 rounded-xl  dark:text-[#999999]"}
                      size={24}
                      onClick={() => setPage('home')}
                    />
                    <h1  className="group-hover:text-[#999999] scale-75 bg-transparent text-transparent   group-hover:scale-100  group-hover:right-25 group-hover:flex transition-all ease-in-out duration-500 group-hover:bg-[#141415] p-2 px-3 rounded-xl group-hover:dark:text-white absolute right-15 ">Home</h1>
                  </div>
                  <div className="flex gap-4 group justify-center items-center">
                    <Workflow
                      className={page === 'work' ? "text-[#999999] cursor-pointer group  h-12 w-12 p-3 rounded-xl bg-[#141415] dark:text-[#999999]" : "text-[#999999] cursor-pointer group hover:bg-[#0A0A0B] border-1 border-transparent hover:border-[#202021] h-12 w-12 p-3 rounded-xl  dark:text-[#999999]"}
                      size={24}
                        onClick={() => setPage('work')}
                    />
                    <h1 className="group-hover:text-[#999999] scale-75 bg-transparent text-transparent   group-hover:scale-100  group-hover:right-25 group-hover:flex transition-all ease-in-out duration-500 group-hover:bg-[#141415] p-2 px-3 rounded-xl group-hover:dark:text-white absolute right-15 ">Work</h1>
                  </div>

                  <div className="flex gap-4 group justify-center items-center">
                    <Mail
                      className={page === 'contact' ? "text-[#999999] cursor-pointer group  h-12 w-12 p-3 rounded-xl bg-[#141415] dark:text-[#999999]" : "text-[#999999] cursor-pointer group hover:bg-[#0A0A0B] border-1 border-transparent hover:border-[#202021] h-12 w-12 p-3 rounded-xl  dark:text-[#999999]"}
                      size={24}
                        onClick={() => setPage('contact')}
                    />
                    <h1 className="group-hover:text-[#999999] scale-75 bg-transparent text-transparent   group-hover:scale-100  group-hover:right-25 group-hover:flex transition-all ease-in-out duration-500 group-hover:bg-[#141415] p-2 px-3 rounded-xl group-hover:dark:text-white absolute right-15 ">Contact</h1>
                  </div>
                </div>
                <div className="flex group cursor-pointer flex-col justify-center items-start ml-4">
                  <ArrowUp
                    className="text-[#999999] dark:text-[#999999]"
                    size={24}
                  />
                    <h1 className="group-hover:text-[#999999] scale-75 bg-transparent text-transparent   group-hover:scale-100  group-hover:right-20 group-hover:flex transition-all ease-in-out duration-500 group-hover:bg-[#141415] p-2 px-3 rounded-xl group-hover:dark:text-white absolute right-10 ">Top</h1>
                </div>
              </div>
            </aside>
  )
}

export default LeftSideBar