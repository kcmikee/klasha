import SideBar from "@/components/common/SideBar";
import NavBar from "@/components/dashboard/Nav";
import { logo } from "@/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import tw from "twin.macro";

const Container = tw.div`flex items-start w-screen h-screen bg-white`;
const LogoContainer = tw.div`w-[84px] h-[26px]`;
const SideContainer = tw.div`w-[19%] h-full pt-8 pl-12 relative hidden lg:block bg-[#FFFBF7]`;
const ContentContent = tw.div`w-full xl:w-[80%] h-full lg:pt-4 ml-8 mr-4 overflow-scroll pb-20 `;

function DashboardLayout({
  children,
  headerProps,
}: {
  children: React.ReactNode;
  headerProps?: any;
}) {
  const router = useRouter();

  return (
    <Container>
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
