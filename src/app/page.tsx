import { CardProps } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
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
      Homepage
    </div>
  );
}
