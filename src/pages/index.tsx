import { Row } from "@/components/common/SideBar";
import DashboardLayout from "@/layout/DashboardLayout";
import { useRouter } from "next/navigation";
import React from "react";
import tw from "twin.macro";

export default function Home() {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/dashboard/home");
  }, [router]);

  return <></>;
}
