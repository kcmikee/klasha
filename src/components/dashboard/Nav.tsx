import React, { useEffect } from "react";
import { CiBellOn } from "react-icons/ci";
import { CgChevronDown } from "react-icons/cg";
import Image from "next/image";

import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

import { HiOutlineChevronDown, HiOutlineUserCircle } from "react-icons/hi";
import { Row } from "../common/SideBar";

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

  return (
    <div className="flex items-center justify-between">
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
