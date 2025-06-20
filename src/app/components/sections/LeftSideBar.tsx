'use client'
import { useCurrPage } from '@/lib/store';
import { ArrowUp, FileUser, Mail, User, Workflow } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function LeftSideBar() {
    const { page, setPage } = useCurrPage();
  return (
               <aside className="md:w-[14%] w-full end-0 fixed md:h-screen md:sticky  border-r-1 flex md:flex-col md:items-center md:justify-center border-[#202021] top-0 bg-gray-100 md:dark:bg-[#050505] dark:bg-transparent">
              <div className="flex md:h-[95vh] h-auto w-full md:pr-8 md:flex-col justify-between items-end p-4">
                <Image
                  className="rounded-full hidden md:flex border-5 border-[#202021]"
                  src="https://avatars.githubusercontent.com/u/109146556?v=4"
                  alt="Description"
                  width={70}
                  height={70}
                />

                <div className="flex gap-8 md:gap-4 md:flex-col justify-center items-start md:ml-4 fixed bottom-0 md:static bg-[#0A0A0B] md:border-t-0 border-t-2 md:border-none border-dashed border-[#202021]  left-0 w-full md:w-auto z-50 py-4 md:py-0 md:bg-transparent">
                  <div  className="flex z-50 gap-4 group justify-center items-center">
                    <User
                      className={page === 'home' ? "text-[#999999] cursor-pointer group  h-12 w-12 p-3 rounded-xl bg-[#141415] dark:text-[#999999]" : "text-[#999999] cursor-pointer group hover:bg-[#0A0A0B] border-1 border-transparent hover:border-[#202021] h-12 w-12 p-3 rounded-xl  dark:text-[#999999]"}
                      size={24}
                      onClick={() => {setPage('home')
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                    />
                    <h1  className="group-hover:text-[#999999] scale-75 bg-transparent text-transparent hidden md:flex  group-hover:scale-100  group-hover:right-25 md:group-hover:flex transition-all ease-in-out duration-500 group-hover:bg-[#141415] p-2 px-3 rounded-xl group-hover:dark:text-white absolute right-15 ">Home</h1>
                  </div>
                  <div className="flex gap-4 group justify-center items-center">
                    <Workflow
                      className={page === 'work' ? "text-[#999999] cursor-pointer group  h-12 w-12 p-3 rounded-xl bg-[#141415] dark:text-[#999999]" : "text-[#999999] cursor-pointer group hover:bg-[#0A0A0B] border-1 border-transparent hover:border-[#202021] h-12 w-12 p-3 rounded-xl  dark:text-[#999999]"}
                      size={24}
                        onClick={() => {setPage('work')
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                    />
                    <h1 className="group-hover:text-[#999999] scale-75 bg-transparent text-transparent   hidden md:flex group-hover:scale-100  group-hover:right-25 md:group-hover:flex transition-all ease-in-out duration-500 group-hover:bg-[#141415] p-2 px-3 rounded-xl group-hover:dark:text-white absolute right-15 ">Work</h1>
                  </div>

                  <div className="flex gap-4 group justify-center items-center">
                    <Mail
                      className={page === 'contact' ? "text-[#999999] cursor-pointer group  h-12 w-12 p-3 rounded-xl bg-[#141415] dark:text-[#999999]" : "text-[#999999] cursor-pointer group hover:bg-[#0A0A0B] border-1 border-transparent hover:border-[#202021] h-12 w-12 p-3 rounded-xl  dark:text-[#999999]"}
                      size={24}
                        onClick={() => {setPage('contact')
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                    />
                    <h1 className="group-hover:text-[#999999] scale-75 bg-transparent text-transparent  hidden md:flex  group-hover:scale-100  group-hover:right-25 md:group-hover:flex transition-all ease-in-out duration-500 group-hover:bg-[#141415] p-2 px-3 rounded-xl group-hover:dark:text-white absolute right-15 ">Contact</h1>
                  </div>


                   <div className="flex gap-4 group justify-center items-center">
                    <FileUser
                      className={page === 'resume' ? "text-[#999999] cursor-pointer group  h-12 w-12 p-3 rounded-xl bg-[#141415] dark:text-[#999999]" : "text-[#999999] cursor-pointer group hover:bg-[#0A0A0B] border-1 border-transparent hover:border-[#202021] h-12 w-12 p-3 rounded-xl  dark:text-[#999999]"}
                      size={24}
                        onClick={() => {
                         window.open("https://drive.google.com/file/d/13rBZ-XsTdCBmTH2qC2JDtV0QZPWJglYm/view?usp=sharing", "_blank")
                        }}
                    />
                    <h1 className="group-hover:text-[#999999] scale-75 bg-transparent text-transparent  hidden md:flex  group-hover:scale-100  group-hover:right-25 md:group-hover:flex transition-all ease-in-out duration-500 group-hover:bg-[#141415] p-2 px-3 rounded-xl group-hover:dark:text-white absolute right-15 ">Resume</h1>
                  </div>
                </div>
                <div className="md:flex group cursor-pointer flex-col justify-center hidden  items-start ml-4"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
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