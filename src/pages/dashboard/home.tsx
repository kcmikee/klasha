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
import { lines, logo } from "@/constant";
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

const Box = tw.div`border-[1px] border-black h-[240px] w-[256px] rounded-lg p-6 flex flex-col justify-between`;
const OverFlow = tw(Row)`overflow-x-auto flex-nowrap gap-x-10 `;
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
          beginAtZero: true,
        },
        // to remove the y-axis grid
        grid: {
          drawBorder: false,
          display: false,
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
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "#EF2C5A",
        borderWidth: 1,
        backgroundColor:
          "linear-gradient(0deg, #EF2C5A -435.62%, rgba(239, 44, 90, 0) 93.15%)",
      },
    ],
  };
  const data3 = {
    labels,
    datasets: [
      {
        fill: true,
        label: "",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
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
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "#EF2C5A",
        borderWidth: 1,
        backgroundColor: "#fff",
      },
    ],
  };

  return (
    <DashboardLayout>
      <h2 className="mt-[108px] text-xl">Sales overview</h2>
      <OverFlow className="mt-6 no-scrollbar">
        <Box>
          <div className="w-[208px]">
            <p className="text-sm font-normal">Today's sales</p>
            <p className="text-xl font-medium">₦1,652.50</p>
          </div>
        </Box>
        <Box className="bg-black">
          <div>
            <p className="text-sm font-normal text-white">24 Aug - 01 Sep 21</p>
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
      <div className="flex w-full gap-5 mt-8 h-[355px]">
        <div className="w-9/12">
          <Row className="flex items-center w-full mt-3">
            <h3 className="text-xl">Sale</h3>
            <Row className="">
              <h3 className="text-[#EF2C5A] font-semibold text-sm cursor-pointer">
                7 days
              </h3>

              <h3 className="text-sm font-semibold cursor-pointer">30 days</h3>
            </Row>
            <select
              className="customSelectXyz bg-white border border-gray-700 text-black 
              text-sm rounded-lg focus:ring-blue-500 
              focus:border-blue-500 block p-2.5 
             w-[91px]"
            >
              <option value="">USD</option>
            </select>
            <select
              className="customSelectXyz bg-white border border-gray-700 text-black 
              text-sm rounded-lg focus:ring-blue-500 
              focus:border-blue-500 block p-2.5 
             w-[283px]"
            >
              <option value="">Email</option>
            </select>
            <button className="flex items-center gap-2 border-[1px] border-black rounded-lg h-10 w-[148px] justify-center">
              <HiOutlineArrowDown size={15} />
              <p className="text-xs font-bold">Download report</p>
            </button>
          </Row>
          <div className="h-[284px] w-full border-[1px] border-black mt-2 rounded-xl p-3">
            <Line
              options={options2}
              data={data3}
              style={{ width: "100%", height: 284 }}
            />
          </div>
        </div>
        <div className="w-3/12 h-2 mt-3">
          <div className="pt-14">
            <div className="h-[274px] w-[274px] bg-[#EF2C5A] rounded-xl p-6 relative overflow-hidden">
              <p className="text-lg font-medium text-white">
                KlashaWire - <Block>send money to businesses</Block>{" "}
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
    </DashboardLayout>
  );
}
