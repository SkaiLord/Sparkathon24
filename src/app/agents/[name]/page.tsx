"use client";
import DemoFlow from "@/components/reactflow/DemoFlow";
import { useParams } from "next/navigation";

export default function AgentId() {
  const params = useParams();
  return (
    <div>
      <DemoFlow title={params.name as string} />
    </div>
  );
}
