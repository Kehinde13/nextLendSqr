import React from "react";
import users from "@/public/icons/userIcon.png";
import active from "@/public/icons/icon (1).png";
import loan from "@/public/icons/icon (2).png";
import savings from "@/public/icons/icon (3).png";
import Image from "next/image";

const icons = {
  users: users,
  active: active,
  loan: loan,
  savings: savings,
};

export default async function CardWrapper() {
  const users = "2,453";
  const active = "2,453";
  const loan = "2,453";
  const savings = "2,453";

  return (
    <div className="md:flex justify-between">
      <Card title="USERS" value={users} icon="users" />
      <Card title="ACTIVE USERS" value={active} icon="active" />
      <Card title="USERS WITH LOANS" value={loan} icon="loan" />
      <Card title="USERS WITH SAVINGS" value={savings} icon="savings" />
    </div>
  );
}

const Card = ({
  title,
  icon,
  value,
}: {
  title: string;
  value: number | string;
  icon: "users" | "active" | "loan" | "savings";
}) => {
  return (
    <div className="md:w-[23%] mb-5 shadow-xl p-5 flex flex-col gap-3 rounded-xl bg-white font-bold">
      <Image src={icons[icon]} alt={icon} className="" />
      <h6 className="text-sm text-gray-500">{title}</h6>
      <h2 className="text-xl">{value}</h2>
    </div>
  );
};
