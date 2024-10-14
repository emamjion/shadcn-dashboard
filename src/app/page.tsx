import Card, { CardProps } from "@/components/Card";
import { DataChart } from "@/components/DataChart";
import PageTitle from "@/components/PageTitle";
import RecentSales from "@/components/RecentSales";
import { ChartSpline, CreditCard, DollarSign, Users } from "lucide-react";

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

export default function Home() {
  return (
    <div>
      <PageTitle title="Dashboard" />
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
