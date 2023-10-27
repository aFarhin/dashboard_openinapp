import {
  LikeIcon,
  RevenueIcon,
  TotalUsersIcon,
  TransactionsIcon2,
} from "@/util/icons"

const statsData = [
  {
    id: 1,
    title: "total revenues",
    total: "$2129430",
    bcg: "#DDEFE0",
    icon: <RevenueIcon />,
  },
  {
    id: 2,
    title: "Total Transactions",
    total: 1520,
    bcg: "#F4ECDD",
    icon: <TransactionsIcon2 />,
  },
  {
    id: 3,
    title: "Total Likes",
    total: 9721,
    bcg: "#EFDADA",
    icon: <LikeIcon />,
  },
  {
    id: 4,
    title: "Total Users",
    total: 892,
    bcg: "#DEE0EF",
    icon: <TotalUsersIcon />,
  },
]

const StatsCard = () => {
  return (
    <section className=" grid grid-cols-2 gap-5 lg:grid-cols-4 md:grid-cols-2 md:gap-9 my-10 ">
      {statsData.map((stat) => {
        const { id, title, total, icon, bcg } = stat
        return (
          <article
            key={id}
            style={{ backgroundColor: `${bcg}` }}
            className="  rounded-[20px] py-8 md:px-7 px-4   "
          >
            <span className=" flex justify-end items-center  ">{icon}</span>
            <div className=" flex flex-col ">
              <span className=" font-lato text-sm capitalize py-1  ">
                {title}
              </span>
              <span className="font-openSans text-xl md:text-2xl font-bold py-2 ">
                {total.toLocaleString()}
              </span>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default StatsCard
