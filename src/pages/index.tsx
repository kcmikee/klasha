import { Row } from "@/components/common/SideBar";
import DashboardLayout from "@/layout/DashboardLayout";
import { useRouter } from "next/navigation";
import React from "react";
import tw from "twin.macro";

const Box = tw.div`border-[1px] border-black h-[240px] w-[256px] rounded-lg`;
const OverFlow = tw(Row)`overflow-x-auto flex-nowrap gap-x-10 `;

export default function Home() {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  return <></>;
}
