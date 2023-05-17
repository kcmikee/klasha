import Link from "next/link";
import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import { BsArrowLeftShort, BsBack } from "react-icons/bs";

function SignupLayout({
  children,
  isBack,
}: //   router,
{
  children: React.ReactNode;
  isBack?: boolean;
  //   router: any;
}) {
  return (
    <div className="w-screen min-h-screen p-10 bg-white">
      <p className="text-right text-black">
        <Link href={"/"}>Log in</Link>
      </p>
      <div className="w-9/12 h-full mx-auto bg-black">
        {isBack && (
          <div
            className="flex  cursor-pointer lg:ml-[191px]"
            //   onClick={() => router.back()}
          >
            <BsArrowLeftShort size={24} />
            <p className="text-base">Back</p>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export default SignupLayout;
