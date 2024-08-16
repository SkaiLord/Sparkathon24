"use client";
import { Button } from "@/components/ui/button";
import { ExpandableCardList } from "@/components/ui/ExpandableCardsList";
import Link from "next/link";

export default function RecipesDashboard() {
  const recipes = [
    {
      description: "Order Fulfillment",
      title: "Optimize Order Processing",
      src: "/order-fulfillment.png",
      ctaText: "View",
      ctaLink: "/agents/order-fulfillment",
      content: () => {
        return (
          <p>
            Streamline order processing from placement to delivery. Utilize
            rule-based agents for basic order validation and routing, and
            machine learning agents to predict shipping times, optimize
            inventory levels, and recommend alternative shipping options.
          </p>
        );
      },
    },
    {
      description: "Customer Support",
      title: "Enhance Customer Experience",
      src: "/customer-support.webp",
      ctaText: "View",
      ctaLink: "/agents/customer-support",
      content: () => {
        return (
          <p>
            Improve customer satisfaction through efficient issue resolution.
            Employ language model agents for understanding and responding to
            customer inquiries, and rule-based agents for handling common
            requests and routing complex issues to human agents.
          </p>
        );
      },
    },
    {
      description: "Inventory Management",
      title: "Optimize Stock Levels",
      src: "/inventory-management.png",
      ctaText: "View",
      ctaLink: "/agents/inventory-management",
      content: () => {
        return (
          <p>
            Prevent stockouts and overstocks by effectively managing inventory.
            Utilize machine learning agents for demand forecasting and anomaly
            detection, and rule-based agents for inventory replenishment and
            reorder point calculations.
          </p>
        );
      },
    },
    {
      description: "Fraud Prevention",
      title: "Protect Against Fraud",
      src: "/fraud-prevention.png",
      ctaText: "View",
      ctaLink: "/agents/fraud-prevention",
      content: () => {
        return (
          <p>
            Safeguard against financial losses by detecting and preventing
            fraudulent transactions. Employ machine learning agents for anomaly
            detection and pattern recognition, and rule-based agents for
            defining fraud rules and flagging suspicious activities.
          </p>
        );
      },
    },
  ];
  return (
    <div className="flex flex-col h-screen">
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <h1 className="text-xl font-semibold">Recipes</h1>
      </header>
      <main className="flex-1 gap-4 h-screen p-4 overflow-hidden items-center flex flex-col">
        <div className="text-xl">
          Create your{" "}
          <span className="decoration-wavy decoration-violet-600 underline">
            own workflow
          </span>{" "}
          using{" "}
          <span className="bg-violet-500 text-white px-2 py-1">
            {" "}
            custom agents
          </span>
        </div>
        <div className="flex flex-col w-full gap-8 h-fit items-center">
          <ExpandableCardList cards={recipes} />
          <Button
            className="bg-violet-500 hover:bg-violet-800 text-white w-fit"
            asChild
          >
            <Link href="/agents">Add Agent</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
