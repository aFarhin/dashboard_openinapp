import {
  DashboardIcon,
  SchedulesIcon,
  SettingsIcon,
  TransactionsIcon,
  UsersIcon,
} from "@/util/icons"

export const links = [
  {
    id: 1,
    title: "dashboard",
    url: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    title: "Transactions",
    url: "/transactions",
    icon: <TransactionsIcon />,
  },
  {
    id: 3,
    title: "Schedules",
    url: "/schedules",
    icon: <SchedulesIcon />,
  },
  {
    id: 4,
    title: "Users",
    url: "/users",
    icon: <UsersIcon />,
  },
  {
    id: 5,
    title: "Settings",
    url: "/settings",
    icon: <SettingsIcon />,
  },
]
