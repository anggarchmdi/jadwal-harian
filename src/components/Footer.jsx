import React from 'react'

function Footer() {
  return (
    <>
    <div className="w-full h-8 bg-black text-white fixed bottom-0 flex justify-center font-extralight">
    <p className="text-sm">&copy; {new Date().getFullYear()} Copyright by Angga | All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer