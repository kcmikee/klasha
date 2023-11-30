import { SideNav } from "@/types";
import {
  Dashboard,
  activeDashboard,
  activetransaction,
  balance,
  chartB,
  exchange,
  paymentLink,
  radar,
  shoppingCart,
  swapB,
  transaction,
  wire,
} from ".";

export const sidenav: SideNav[] = [
  {
    title: "Main pages",
    links: [
      {
        name: "Dashboard",
        route: "/dashboard/home",
        image: Dashboard,
        active: activeDashboard,
      },
      {
        name: "Balances",
        route: "/dashboard/balance",
        image: balance,
        active: balance,
      },
      {
        name: "Transactions",
        route: "/dashboard/transactions",
        image: transaction,
        active: activetransaction,
      },
      {
        name: "Analytics",
        route: "/dashboard/analytics/",
        image: chartB,
        active: chartB,
      },
      {
        name: "Marketing",
        route: "/dashboard/marketing/",
        image: radar,
        active: radar,
      },
      {
        name: "Exchange rates",
        route: "/dashboard/rates/",
        image: swapB,
        active: exchange,
      },
    ],
  },
  {
    title: "Accept payments",
    links: [
      {
        name: "Checkout",
        route: "/dashboard/checkout/",
        image: shoppingCart,
        active: shoppingCart,
      },
      {
        name: "Payment Links",
        route: "/dashboard/payments/",
        image: paymentLink,
        active: paymentLink,
      },
    ],
  },
  {
    title: "Send payments",
    links: [
      { name: "Wire", route: "/dashboard/wire/", image: wire, active: wire },
    ],
  },
];
