"use client";
import React from "react";
import LeftNavigation from "@/components/shared/LeftNavigation";
import MyTask from "@/components/shared/MyTask";
import DonutChart from "@/components/shared/DonutChart";
import MyMeetings from "@/components/shared/MyMeetings";
import InvoiceOverview from "@/components/shared/InvoiceOverview";
import TopNavBar from "@/layouts/TopNavBar";
import { Input } from "@/components/ui/input";
import IncomeVsExpenseChart from "@/components/shared/IncomeVsExpenseChart";

function Dashboard() {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Top Navbar */}
      <TopNavBar />

      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Navigation - hidden on mobile */}
        <div className="hidden lg:block">
          <LeftNavigation />
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 py-5 w-full">
          {/* Header with search bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 gap-2">
            {/* Heading */}
            <div>
              <p className="text-Black font-medium leading-3 text-sm sm:text-base">
                Manage and track your projects
              </p>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-Black">
                Project Dashboard
              </h1>
            </div>
            {/* Search bar */}
            <div className="w-full sm:w-1/2">
              <Input
                placeholder="Search tasks, meetings, projects..."
                className="rounded-full w-full"
              />
            </div>
          </div>

          {/* Dashboard Layout */}
          <div className="flex flex-col xl:flex-row gap-4">
            {/* My Tasks */}
            <div className="xl:w-1/4">
              <MyTask />
            </div>

            {/* Charts and Invoice */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Charts */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <DonutChart />
                </div>
                <div className="w-full">
                  <IncomeVsExpenseChart />
                </div>
              </div>
              {/* Invoice */}
              <InvoiceOverview />
            </div>

            {/* My Meetings */}
            <div className="xl:w-1/4">
              <MyMeetings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
