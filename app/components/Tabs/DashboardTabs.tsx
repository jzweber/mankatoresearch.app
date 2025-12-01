"use client"
import React from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/Tabs/tabs'
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Analytics from '../Analytics/Analytics';
import Reports from '../Reports/Reports';
import Payload from '../Payload/Payload';
import Chatbot from '../Chatbot/Chatbot';
const DashboardTabs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]);

  return (
    <>
        <Tabs defaultValue="chatbot" className="w-full">
            <TabsList>
                <TabsTrigger value="chatbot">Chatbot</TabsTrigger>
                <TabsTrigger value="payload">Payload</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="chatbot" forceMount={true}>
                <Chatbot />
            </TabsContent>
            <TabsContent value="payload" forceMount={true}>
                <Payload />
            </TabsContent>
            <TabsContent value="reports" forceMount={true}>
                <Reports />
            </TabsContent>
            <TabsContent value="analytics" forceMount={true}>
                <Analytics />
            </TabsContent>
        </Tabs>
        
    </>
  )
}

export default DashboardTabs