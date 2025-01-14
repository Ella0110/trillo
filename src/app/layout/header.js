"use client"

import React, { useEffect } from "react"
import AuthModel from "../components/authmodel/authmodel"
import nextConfig from "../../../next.config.mjs"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react"
import { signOut, getCurrentUser, fetchAuthSession } from "@aws-amplify/auth"
import { useRouter } from 'next/navigation'

export default function Header({children}) {
  const [showModal, setShowModal] = useState(false)
  const [authStates, setAuthStates] = useState("")
  const [isSignin, setIsSignin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    async function getUserState(){
    try{
      await fetchAuthSession({ forceRefresh: true });
      // const start = Date.now()
      const { signInDetails, username, userId } = await getCurrentUser()
      // console.log(Date.now() - start)
      console.log(signInDetails, username, userId )

      setIsSignin(!!userId)
    }  catch (error) {
      
      console.log("error signing out: ", error)
    }}
    getUserState()
  }, [])

  async function handleSignOut() {
    try {
      setAuthStates('')
      await signOut({ global: true })
      console.log("退出登录")
      setIsSignin(false)
      router.push('/')
    } catch (error) {
      console.log("error signing out: ", error)
    }
  }

  return (
    <>
      <header className="text-sm h-14 px-10 bg-white border-gray-200 border-b-[1px] flex justify-between items-center">
      <Link href="/">
        <Image
          src={`${nextConfig.basePath}/img/logo.png`}
          alt="Logo"
          width={50}
          height={50}
          className=""
        ></Image>
     </Link>
        <div
          className="flex  items-center  p-6 lg:px-8"
          aria-label="Global"
        >
          
          {children}
          {!isSignin ? (
            <div className="lg:flex absolute right-0  p-4 lg:justify-end">
              <button
                className="text-xs font-semibold  bg-pink-600 rounded-full py-1 px-3 text-white hover:bg-pink-700"
                onClick={() => {
                  setShowModal(true)
                  setAuthStates("login")
                }}
              >
                Log in{" "}
              </button>
              <button
                className="text-xs pl-2 font-semibold rounded-full py-2 px-4 text-zinc-800"
                onClick={() => {
                  setShowModal(true)
                  setAuthStates("signup")
                }}
              >
                Sign Up{" "}
              </button>

              <AuthModel
                showModal={showModal}
                setShowModal={setShowModal}
                authStates={authStates}
                setAuthStates={setAuthStates}
                setIsSignin={setIsSignin}
              />
            </div>
          ) : (
            <div className="lg:flex absolute right-0 p-4 lg:justify-end">
            <button
              className="text-xs lg:justify-end font-semibold  bg-gray-800 rounded-full py-2 px-4 text-white hover:bg-black"
              onClick={() => {
                handleSignOut()
              }}
            >
              Sign out{" "}
            </button>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
