import Link from 'next/link'
import React from 'react'

const SecondaryButton = () => {
  return (
    <>
        <div className="rounded-[5px]  border border-[#d03434] p-2 w-auto">
            <Link href="/" >
                <p className="text-lg text-center text-[#d03434]">
                    Contact Yamikani
                </p>
            </Link>
        </div>
    </>
  )
}

export default SecondaryButton