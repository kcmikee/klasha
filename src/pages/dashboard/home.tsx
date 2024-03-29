import { Row } from "@/components/common/SideBar";
import DashboardLayout from "@/layout/DashboardLayout";
import tw from "twin.macro";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { HiOutlineArrowDown } from "react-icons/hi";
import { lines } from "@/constant";
import Image from "next/image";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const SaleRow = tw(Row)`gap-2.5`;
const Box = tw.div`border-[1px] border-black w-[43%] h-[240px] md:h-[240px] md:min-w-[256px] rounded-lg p-3 md:p-6 flex flex-col justify-between`;
const OverFlow = tw(
  Row
)`overflow-x-auto lg:w-[96%] flex-wrap md:justify-center lg:justify-between lg:flex-nowrap gap-x-7 `;
const Block = tw.span`block`;

export default function Home() {
  const options = {
    responsive: true,
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    // Modify the axis by adding scales
    scales: {
      // to remove the labels
      x: {
        ticks: {
          display: false,
          drawBorder: false,
        },
        border: {
          display: false,
        },
        // to remove the x-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      // to remove the y-axis labels
      y: {
        ticks: {
          display: false,
          beginAtZero: true,
        },
        border: {
          display: false,
        },
        // to remove the y-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };
  const labels = [
    "20 Aug",
    "21 Aug",
    "22 Aug",
    "23 Aug",
    "24 Aug",
    "25 Aug",
    "26 Aug",
  ];

  const options2 = {
    responsive: true,
    maintainAspectRatio: true,
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "",
      },
    },
    scales: {
      // to remove the labels
      x: {
        ticks: {
          display: true,
          drawBorder: false,
          beginAtZero: false,
          color: "black",
        },

        // to remove the x-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      // to remove the y-axis labels
      y: {
        ticks: {
          display: true,
          beginAtZero: false,
          stepSize: 1000,
          color: "black",
        },
        // to remove the y-axis grid
        grid: {
          drawBorder: true,
          display: true,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderColor: "#EF2C5A",
        borderWidth: 1,
        backgroundColor: "rgba(239, 44, 90, 0.13)",
      },
    ],
  };
  const data3 = {
    labels,
    datasets: [
      {
        fill: true,
        label: "",
        data: labels.map(() => faker.number.int({ min: 1000, max: 4000 })),
        borderColor: "#EF2C5A",
        borderWidth: 1,
        backgroundColor: "rgba(239, 44, 90, 0.09)",
      },
    ],
  };

  const data2 = {
    labels,
    datasets: [
      {
        fill: true,
        label: "",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderColor: "#EF2C5A",
        borderWidth: 1,
        backgroundColor: "rgba(239, 44, 90, 0.05)",
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className="px-4 md:pl-8">
        <h2 className="mt-[50px] lg:mt-[104px] text-xl">Sales overview</h2>
        <OverFlow className="mt-6 no-scrollbar">
          <Box>
            <div className="md:w-[208px]">
              <p className="text-sm font-normal">Today's sales</p>
              <p className="text-xl font-medium">₦1,652.50</p>
            </div>
          </Box>
          <Box className="bg-black">
            <div>
              <p className="text-sm font-normal text-white">
                24 Aug - 01 Sep 21
              </p>
            </div>
            {/* <div className="h-16 w-52"> */}
            <Line
              options={options}
              data={data}
              style={{ height: 64, width: 215 }}
            />
            {/* </div> */}
            <div>
              <p className="text-sm font-normal text-white">This month</p>
              <p className="text-xl font-medium text-white">₦1,652.50</p>
            </div>
          </Box>
          <Box>
            <div>
              <p className="text-sm font-normal ">24 Aug - 01 Sep 21</p>
            </div>
            {/* <div className="h-16 w-52"> */}
            <Line
              options={options}
              data={data2}
              style={{ height: 64, width: 208 }}
            />
            {/* </div> */}
            <div>
              <p className="text-sm font-normal ">This month</p>
              <p className="text-xl font-medium ">₦1,652.50</p>
            </div>
          </Box>
          <Box>
            <div>
              <p className="text-sm font-normal ">24 Aug - 01 Sep 21</p>
            </div>
            {/* <div className="h-16 w-52"> */}
            <Line
              options={options}
              data={data2}
              style={{ height: 64, width: 208 }}
            />
            {/* </div> */}
            <div>
              <p className="text-sm font-normal">This month</p>
              <p className="text-xl font-medium -white">₦1,652.50</p>
            </div>
          </Box>
        </OverFlow>
        <div className="flex flex-col xl:flex-row w-full gap-5 mt-20 md:mt-8 lg:h-[355px] mb-20 ">
          <div className="w-full xl:w-9/12">
            <div className="grid items-center w-full grid-cols-4 gap-4 mt-3 xl:grid-cols-5">
              <div className="flex items-center col-span-4 space-x-6 md:col-span-2">
                <h3 className="pr-4 text-xl border-r border-gray-400">Sale</h3>
                <Row className="xl:space-x-1">
                  <h3 className="text-[#EF2C5A] font-semibold text-sm cursor-pointer">
                    7 days
                  </h3>

                  <h3 className="text-sm font-semibold cursor-pointer">
                    30 days
                  </h3>
                </Row>
                <select
                  className="customSelectXyz bg-white border border-gray-700 text-black 
              text-sm rounded-lg focus:ring-blue-500 
              focus:border-blue-500 block p-2.5 
            "
                >
                  <option value="">USD</option>
                </select>
              </div>
              <select
                className="customSelectXyz bg-white border border-gray-700 text-black 
              text-sm rounded-lg outline-none block p-2.5 col-span-2 md:col-span-1 lg:col-span-2"
              >
                <option value="">Email</option>
              </select>
              <button className="flex items-center gap-2 border-[1px] border-black rounded-lg h-10 col-span-2 md:col-span-1 justify-center">
                <HiOutlineArrowDown size={15} />
                <p className="text-xs font-bold">Download report</p>
              </button>
            </div>
            <div className="md:h-[284px] w-full border-[1px] border-black mt-2 rounded-xl p-5">
              <Line
                options={options2}
                data={data3}
                style={{ minWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
          {/* red */}
          <div className="w-3/12 h-2 mt-3 ">
            <div className="xl:pt-14">
              <div className="h-[277px] w-[274px] bg-[#EF2C5A] rounded-xl p-6 relative overflow-hidden">
                <p className="text-lg font-medium text-white">
                  KlashaWire - send<Block>money to businesses</Block>{" "}
                  <Block>globally from Africa</Block>
                </p>
                <button className="bg-black h-12 w-[130px] absolute bottom-5 z-10 rounded-xl cursor-pointer text-white ">
                  Send a Wire
                </button>
                <Image src={lines} alt="lines" fill className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-52 lg:hidden" />
      </div>
    </DashboardLayout>
  );
}
