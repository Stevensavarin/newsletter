"use client"

import React from 'react'
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import DashboardOverViewCard from "@/shared/components/cards/overview.card";
import SubscribersChart from "@/shared/components/charts/subscribers.chart";

const Main = () => {
    const { user } = useUser();
    const [copied, setCopied] = useState(false);

  return (
    <div className="p-5 w-full h-screen bg-[#f9fafb]">
        <h1 className="text-2xl text-surface-900 font-medium">
            Hi {user?.fullName} 👋
        </h1>
        <p className="opacity-[.7] text-sm pt-2">
            Here&apos;s how your publication is doing
        </p>
        <div className='w-full flex'>
            <div className="w-[65%] min-h-[88vh] pr-5">
            <br />
            <DashboardOverViewCard />
            <br />
            <SubscribersChart />
            </div>
        </div>
    </div>
  )
}

export default Main