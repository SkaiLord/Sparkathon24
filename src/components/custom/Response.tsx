import React, { useMemo } from "react";
import { TableView } from "./TableView";
import { Badge } from "../ui/badge";
import dynamic from "next/dynamic";
import ProgressBar from "./ProgressBar";
import Image from "next/image";
import { Button } from "../ui/button";
import { Download, MoveUp } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
const Map = dynamic(() => import("./Map"), { ssr: false });

const Response = ({ step }: { step: number }) => {
  const handleDownload = (src: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = "chart.png";
    link.click();
  };
  const partnersTableProps = {
    columns: [
      { name: "Name", accessorKey: "name" },
      { name: "Impacted", accessorKey: "isImpacted", customElement: true },
      { name: "Last Updated", accessorKey: "lastUpdated" },
    ],
    data: [
      {
        name: "Best Price | North Delhi",
        isImpacted: {
          element: <Badge variant="destructive">Impacted</Badge>,
        },
        lastUpdated: "2 hours ago",
      },
      {
        name: "Best Price | South Delhi",
        isImpacted: {
          element: <Badge variant="success">Unimpacted</Badge>,
        },
        lastUpdated: "1 hour ago",
      },
      {
        name: "Best Price | Noida",
        isImpacted: {
          element: <Badge variant="success">Unimpacted</Badge>,
        },
        lastUpdated: "3 hours ago",
      },
    ],
  };

  const mapData = [
    {
      name: "Best Price | North Delhi",
      position: [28.592440613523, 77.08171287555567],
      status: "Impacted",
    },
    {
      name: "Best Price | South Delhi",
      position: [28.529304150941826, 77.1076803772591],
      status: "Unimpacted",
    },
    {
      name: "Best Price | Noida",
      position: [28.581183771623632, 77.3285914355004],
      status: "Unimpacted",
    },
  ];

  const deliveryTableProps = {
    columns: [
      { name: "Store", accessorKey: "name" },
      {
        name: "% Orders Delayed",
        accessorKey: "ordersDelayed",
        customElement: true,
      },
      { name: "Delivery Delay", accessorKey: "delay" },
    ],
    data: [
      {
        name: "Best Price | North Delhi",
        ordersDelayed: {
          element: <ProgressBar progress={60} />,
        },
        delay: "30 mins",
      },
      {
        name: "Best Price | South Delhi",
        ordersDelayed: {
          element: <ProgressBar progress={40} />,
        },
        delay: "12 mins",
      },
      {
        name: "Best Price | Noida",
        ordersDelayed: {
          element: <ProgressBar progress={80} />,
        },
        delay: "90 mins",
      },
    ],
  };
  if (step == 1)
    return (
      <div className="w-full h-fit shadow-md bg-slate-100 grid grid-cols-2 p-4 gap-4">
        <TableView
          {...partnersTableProps}
          className="flex flex-col  border bg-white p-2 shadow-sm col-span-2"
        />
        <div className="w-full h-full col-span-2">
          <Map
            data={mapData}
            zoom={11}
            position={[28.607039686206683, 77.21807923424487]}
          />
        </div>
      </div>
    );

  if (step == 2)
    return (
      <div className="w-full h-fit shadow-md bg-slate-100 grid grid-cols-2  p-4 gap-4">
        <TableView
          {...deliveryTableProps}
          className="flex flex-col  border bg-white p-2 shadow-sm col-span-2"
        />
      </div>
    );

  if (step == 3)
    return (
      <div className="w-full h-full shadow-md bg-slate-100 grid p-4 gap-4">
        <div className="flex justify-between">
          <div className="text-lg font-semibold">
            Link to{" "}
            <Link href="/models" className="hover:text-blue-700">
              Models
            </Link>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleDownload("/demand-charts.png")}
          >
            <Download className="w-6 h-6" />
          </Button>
        </div>
        <Image
          src="/demand-charts.png"
          width={900}
          height={1000}
          alt="chart"
          className="w-full h-auto"
        />
      </div>
    );

  if (step == 4)
    return (
      <div className="w-full h-full shadow-md bg-slate-100 grid p-2 gap-4 text-xl font-semibold">
        <div className="text-base font-medium">
          Inventory capacity increase of other unimpacted stores
        </div>
        <div className="flex-1 flex items-center p-4 bg-white justify-between gap-10">
          <div className="bg-slate-300 shadow flex items-center p-2 rounded-sm">
            10%
            <MoveUp className="w-4 h-4" />
          </div>
          <div className="flex items-center">
            <div className="border p-2 rounded-sm">
              44%{" "}
              <span className="text-slate-400 text-xs">
                Average Orders Fulfilled
              </span>
            </div>
            <div className="border p-2 rounded-sm">
              ₹100{" "}
              <span className="text-slate-400 text-xs">
                Additional Logistic Cost Per Order
              </span>
            </div>
          </div>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex-1 flex items-center p-4 bg-white justify-between gap-10 hover:border-t-4 hover:border-t-sky-300 hover:cursor-pointer">
              <div className="bg-sky-300 shadow flex items-center p-2 rounded-sm">
                20%
                <MoveUp className="w-4 h-4" />
              </div>
              <div className="flex items-center">
                <div className="border p-2 rounded-sm">
                  75%{" "}
                  <span className="text-slate-400 text-xs">
                    Average Orders Fulfilled
                  </span>
                </div>
                <div className="border p-2 rounded-sm">
                  ₹180{" "}
                  <span className="text-slate-400 text-xs">
                    Additional Logistic Cost Per Order
                  </span>
                </div>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Optimal Solution</p>
          </TooltipContent>
        </Tooltip>

        <div className="flex-1 flex items-center p-4 bg-white justify-between gap-10">
          <div className="bg-slate-300 shadow flex items-center p-2 rounded-sm">
            30%
            <MoveUp className="w-4 h-4" />
          </div>
          <div className="flex items-center">
            <div className="border p-2 rounded-sm">
              84%{" "}
              <span className="text-slate-400 text-xs">
                Average Orders Fulfilled
              </span>
            </div>
            <div className="border p-2 rounded-sm">
              ₹210{" "}
              <span className="text-slate-400 text-xs">
                Additional Logistic Cost Per Order
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Response;
