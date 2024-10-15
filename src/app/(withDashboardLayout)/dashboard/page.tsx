import Card, { CardProps } from "@/components/Card";
import { DataChart } from "@/components/DataChart";
import Logout from "@/components/Logout";
import PageTitle from "@/components/PageTitle";
import RecentSales from "@/components/RecentSales";
import { authOptions } from "@/utils/authOptions";
import { ChartSpline, CreditCard, DollarSign, Users } from "lucide-react";
import { getServerSession } from "next-auth";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    description: "+180.1% from last month",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "+12,234",
    description: "+19.1% from last month",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "+573",
    description: "+201% from last month",
    icon: ChartSpline,
  },
];

// type ImageProps = {
//   user: {
//     image ? : string | null | undefined;
//     email ? : string | null | undefined;
//     name ? : string | null | undefined;
    
//   }
// }

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session)
  
  return (
    <div>
      <div className="flex justify-between">
          <div>
            <PageTitle title="Dashboard" />
            <div className="flex items-center gap-2 mt-2">
              <span className="font-medium">Welcome!!</span>
              <h1 className="font-semibold">{session?.user?.name}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <Avatar>
                <AvatarImage src={session?.user?.image as string} alt="User Image" />
                <AvatarFallback>NU</AvatarFallback>
            </Avatar>
            </div>
            {
              session?.user ? <Logout/> : (
                <Link href={'/login'}>
                  <Button>Login</Button>
                </Link>
              )
            }
          </div>
      </div>
      <section className="flex gap-4 mt-4">
        {
          cardData.map((cd, index) => (
            <Card key={index} label={cd.label} amount={cd.amount} description={cd.description} icon={cd.icon} /> 
          ))
        }
      </section>
      {/* chart and Recent sales section */}
      <section className="mt-4 flex gap-4">
        {/* chart */}
        <div className="w-[60%]">
          <DataChart/>
        </div>

        {/* Recent sales */}
        <div className="w-[40%] p-6 rounded-xl border shadow">
          <RecentSales/>
        </div>
      </section>
    </div>
  );
}
