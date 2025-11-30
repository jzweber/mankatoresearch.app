"use client"
import React from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/Tabs/tabs'
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Analytics from '../Analytics/Analytics';
import Reports from '../Reports/Reports';
import Payload from '../Payload/Payload';

const DashboardTabs = ({ children }: Readonly<{ children: React.ReactNode }>) => {
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
                <TabsTrigger value="overview">Chatbot</TabsTrigger>
                <TabsTrigger value="payload">Payload</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="chatbot">
                {children}
            </TabsContent>
            <TabsContent value="payload">
                <Payload />
            </TabsContent>
            <TabsContent value="reports">
                <Reports />
            </TabsContent>
            <TabsContent value="analytics">
                <Analytics />
            </TabsContent>
        </Tabs>
        
    </>
  )
}

export default DashboardTabs