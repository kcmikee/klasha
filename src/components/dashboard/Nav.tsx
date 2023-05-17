import React, { useEffect } from "react";
import { CiBellOn } from "react-icons/ci";
import { CgChevronDown } from "react-icons/cg";
import Image from "next/image";
import { sidenav } from "@/constant/navigation";
import { SideNav } from "@/types";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

import {
  HiOutlineChevronDown,
  HiOutlineMenu,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { Header, Hide, Row } from "../common/SideBar";
import { logo } from "@/constant";
import { useRouter as useRouter2 } from "next/router";
import tw from "twin.macro";
import { BsQuestionCircle } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { HiChevronLeft } from "react-icons/hi";
import Link from "next/link";

const MobileSideBar = tw.div`absolute top-0 -left-20 z-30 w-full h-full p-8 bg-white`;

function NavBar({
  goBack,
  none,
  user,
}: {
  goBack?: boolean;
  none?: boolean;
  user?: any;
}) {
  const router = useRouter();
  const router2 = useRouter2();
  return (
    <div className="relative flex items-center justify-between">
      <div className="flex items-center gap-3 lg:hidden">
        <HiOutlineMenu size={24} />
        <Image src={logo} alt="folio" width={84} height={26} />
      </div>
      {goBack ? (
        <Row className="cursor-pointer" onClick={() => router.back()}>
          <BiArrowBack />
          <p>Back</p>
        </Row>
      ) : none ? (
        <div />
      ) : (
        <div></div>
      )}

      <div className="flex gap-6">
        <div className="flex items-center gap-6 ">
          <div className="flex items-center gap-2">
            <HiOutlineUserCircle size={32} />
            <HiOutlineChevronDown />
          </div>
          <div className="flex items-center gap-2">
            <p>En</p>
            <CgChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
