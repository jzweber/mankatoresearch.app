import React from 'react'
import DashboardTabs from '@/app/components/Tabs/DashboardTabs';
import Chatbot from '@/app/components/Chatbot/Chatbot';
export default async function DashboardPage() {

  return (
    <>
      <div className="container mx-auto p-4">
        <h4 className=" font-bold mb-6">Dashboard</h4>
        <DashboardTabs>
          <Chatbot />
        </DashboardTabs>
      </div>
    </>
  )
}