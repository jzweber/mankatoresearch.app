import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/Tabs/tabs'

const page = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h4 className=" font-bold mb-6">Dashboard</h4>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
          </TabsContent>
          <TabsContent value="analytics">
          </TabsContent>
          <TabsContent value="reports">
          </TabsContent>
          <TabsContent value="settings">
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default page