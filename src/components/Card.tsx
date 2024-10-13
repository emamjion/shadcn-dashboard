import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
};

const Card = (props: CardProps) => {
  return (
    <CardContent>
      <section className="flex justify-between gap-2">
        <p className="text-sm">{props.label}</p>
        <props.icon className="text-gray-400 w-4 h-4" />
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
        <p className="text-xs text-gray-500">{props.description}</p>
      </section>
    </CardContent>
  );
};

export default Card;

export const CardContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
      )}
      {...props}
    />
  );
};
