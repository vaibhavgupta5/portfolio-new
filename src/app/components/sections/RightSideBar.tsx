'use client'
import {  Mail, User, Workflow } from 'lucide-react'
import React from 'react'

function RightSideBar() {
  return (
               <aside className="w-[14%] h-screen sticky border-l-1 flex flex-col items-center justify-center border-[#202021] top-0 bg-gray-100 dark:bg-[#050505]">
              <div className="flex h-[95vh] w-full pl-8 flex-col justify-center items-start p-4">
              
                <div className="flex gap-4 flex-col justify-center items-start ">
                  <div  className="flex gap-4 group justify-center items-center">
                    <User
                      className={"text-[#999999] cursor-pointer group bg-[#0A0A0B] hover:bg-[#141415] border-1  border-[#202021] h-12 w-12 p-3 rounded-xl  dark:text-[#999999]"}
                      size={24}
                    />
                   
                  </div>
                  <div className="flex gap-4 group justify-center items-center">
                    <Workflow
                      className={"text-[#999999] cursor-pointer group bg-[#0A0A0B] hover:bg-[#141415] border-1  border-[#202021] h-12 w-12 p-3 rounded-xl  dark:text-[#999999]"}
                      size={24}
                    />
                  </div>

                  <div className="flex gap-4 group justify-center items-center">
                    <Mail
                      className={"text-[#999999] cursor-pointer group bg-[#0A0A0B] hover:bg-[#141415] border-1  border-[#202021] h-12 w-12 p-3 rounded-xl  dark:text-[#999999]"}
                      size={24}
                    />
                  </div>
                </div>

              </div>
            </aside>
  )
}

export default RightSideBar