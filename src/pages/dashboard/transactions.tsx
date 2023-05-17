import { Row } from "@/components/common/SideBar";
import DashboardLayout from "@/layout/DashboardLayout";
import React from "react";
import { BsFilter } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import DataTable from "react-data-table-component";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function Transactions() {
  const columns = [
    {
      name: "Transaction ID",
      selector: (row: any) => row.id,
      width: "190px",
    },
    {
      name: "Source",
      selector: (row: any) => row.source,
      width: "100px",
    },
    {
      name: "Customer name",
      selector: (row: any) => row.name,
      width: "230px",
    },
    {
      name: "Customer email",
      selector: (row: any) => row.email,
      width: "200px",
    },
    {
      name: "Amount",
      selector: (row: any) => row.amount,
      width: "100px",
    },
    {
      name: "Request Date",
      selector: (row: any) => row.date,
    },
    {
      name: "Status",
      selector: (row: any) => row.status,
    },
  ];

  const data = [
    {
      id: "GB124QWERTY12346",
      source: "GTB",
      name: "Esenwa Kachukwu Michael",
      email: "tugrp@example.com",
      amount: "100",
      date: "2021-10-10",
      status: "Pending",
    },
    {
      id: "GB124QWERTY12346",
      source: "GTB",
      name: "Esenwa Kachukwu Michael",
      email: "tugrp@example.com",
      amount: "100",
      date: "2021-10-10",
      status: "Pending",
    },
    {
      id: "GB124QWERTY12346",
      source: "GTB",
      name: "Esenwa Kachukwu Michael",
      email: "tugrp@example.com",
      amount: "100",
      date: "2021-10-10",
      status: "Pending",
    },
    {
      id: "GB124QWERTY12346",
      source: "GTB",
      name: "Esenwa Kachukwu Michael",
      email: "tugrp@example.com",
      amount: "100",
      date: "2021-10-10",
      status: "Pending",
    },
    {
      id: "GB124QWERTY12346",
      source: "GTB",
      name: "Esenwa Kachukwu Michael",
      email: "tugrp@example.com",
      amount: "100",
      date: "2021-10-10",
      status: "Pending",
    },
  ];
  return (
    <DashboardLayout>
      <h2 className="mt-[50px] lg:mt-[108px] font-medium text-xl">
        Transaction history
      </h2>
      <Row className="flex-col justify-between md:flex-row mt-7">
        <div className="w-full md:w-[280px] h-[54px] border-[1px] border-gray-200 rounded-xl overflow-hidden px-4 flex items-center ">
          <input
            type="text"
            className="h-full outline-none w-[90%]"
            placeholder="Search"
          />
          <CiSearch size={20} />
        </div>
        <Row className="w-full">
          <button className="w-[45%] md:w-[94px] h-[40px] border-[1px] border-black rounded-lg flex justify-center items-center gap-2 ">
            Filter <BsFilter />
          </button>
          <button className="w-[45%] md:w-[94px] h-[40px] border-[1px] border-black rounded-lg ">
            Export
          </button>
        </Row>
      </Row>
      <div className="mt-8 border-b-[1px] border-gray-200 pb-14 ">
        <DataTable columns={columns} data={data} />
        <div className="flex items-center justify-around w-full md:w-8/12 lg:w-6/12 h-[48px] border-[1px] border-gray-200 ml-auto mt-4 rounded-lg overflow-hidden">
          {["1", 1, 2, 3, "...", 8, 9, 10, "10"].map((pagi, index) => {
            if (index === 0) {
              return (
                <div className="flex items-center justify-center h-full text-gray-300 cursor-pointer">
                  <HiOutlineChevronLeft size={20} />
                </div>
              );
            } else if (index === 8) {
              return (
                <div className="flex items-center justify-center h-full text-gray-300 cursor-pointer">
                  <HiOutlineChevronRight size={20} />
                </div>
              );
            } else
              return (
                <div
                  className={`${
                    index === 1
                      ? "bg-[#F0F0F0] h-[35px] w-[35px] px-[9px] rounded-full"
                      : " h-full"
                  } flex items-center justify-center cursor-pointer text-gray-500`}
                >
                  {pagi}
                </div>
              );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Transactions;
