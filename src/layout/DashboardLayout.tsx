import SideBar from "@/components/common/SideBar";
import NavBar from "@/components/dashboard/Nav";
import { logo } from "@/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import tw from "twin.macro";

import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const Container = tw.div`flex items-start w-screen h-screen bg-white`;
const LogoContainer = tw.div`w-[84px] h-[26px]`;
const SideContainer = tw.div`w-[25%] xl:w-[19%] h-full pt-8 pl-4 xl:pl-12 relative hidden lg:block bg-[#FFFBF7]`;
const ContentContent = tw.div`w-full lg:w-[76%] xl:w-[80.9%] h-full pt-4  overflow-scroll lg:pb-10 `; //ml-4 mr-4 md:ml-8 md:mr-4
const MobileSideBar = tw.div`absolute top-0 left-0 z-30 w-full h-full p-8 bg-black`;

function DashboardLayout({
  children,
  headerProps,
}: {
  children: React.ReactNode;
  headerProps?: any;
}) {
  const router = useRouter();

  return (
    <Container className={`${inter.variable}`}>
      <SideContainer>
        <LogoContainer>
          <Image src={logo} alt="folio" width={84} height={26} />
        </LogoContainer>
        <SideBar />
      </SideContainer>
      <ContentContent className="no-scrollbar">
        <NavBar {...headerProps} />
        {children}
      </ContentContent>
    </Container>
  );
}

export default DashboardLayout;
