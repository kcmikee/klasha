import { sidenav } from "@/constant/navigation";
import { SideNav } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { HiChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import tw from "twin.macro";

export const Row = tw.div`flex items-center gap-5`;
const Header = tw.h4`text-[#8D8D8D] font-medium mb-2`;
const Support = tw.div`text-[#8D8D8D] font-medium mb-2`;
const Hide = tw.div`border-[1px] border-[#0A0A0A] rounded-lg h-10 w-[120px] mt-4 flex items-center justify-center`;

function SideBar() {
  const router = useRouter();

  return (
    <div>
      {sidenav.map((sideNav1: SideNav, index: number) => (
        <div key={index}>
          <Header
            className={`font-medium mb-6 ${index === 0 ? " mt-12" : "mt-8"}`}
          >
            {sideNav1.title}
          </Header>
          <div>
            {sideNav1.links.map((level2, index2: number) => (
              <Link href={level2.route} key={index2}>
                <Row
                  className={`w-[90%] h-10 justify-between items-center  rounded-md 
                group/item`}
                >
                  <Row className="items-center">
                    <div className="h-[21px] w-[21px] stroke-red-500">
                      {router.pathname.includes(level2.route) ? (
                        <Image
                          priority
                          src={level2.active}
                          alt={level2.name}
                          width={21}
                          height={21}
                        />
                      ) : (
                        <Image
                          priority
                          src={level2.image}
                          alt={level2.name}
                          width={21}
                          height={21}
                        />
                      )}
                    </div>
                    <h3
                      className={` ml-1 ${
                        router.pathname.includes(level2.route)
                          ? "text-red-600 font-medium"
                          : "text-black"
                      }`}
                    >
                      {level2.name}
                    </h3>
                  </Row>
                </Row>
              </Link>
            ))}
          </div>
          <div className="absolute bottom-6">
            <div className="flex items-center gap-2 w-[120px] bg-[#ef2c5a] h-10 rounded-full justify-center">
              <BsQuestionCircle color="white" />
              <p className="text-sm text-white">Support</p>
            </div>
            <Hide>
              <HiChevronLeft size={20} />
              <p className="text-sm text-black">Hide panel</p>
            </Hide>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
