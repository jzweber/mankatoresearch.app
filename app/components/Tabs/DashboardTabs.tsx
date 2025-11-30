"use client"
import React from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/Tabs/tabs'
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Analytics from '../Analytics/Analytics';
import Reports from '../Reports/Reports';
import Settings from '../Settings/Settings';

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
        <Tabs defaultValue="overview" className="w-full">
            <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
                {children}
            </TabsContent>
            <TabsContent value="analytics">
                <Analytics />
            </TabsContent>
            <TabsContent value="reports">
                <Reports />
            </TabsContent>
            <TabsContent value="settings">
                <Settings />
            </TabsContent>
        </Tabs>
        
    </>
  )
}

export default DashboardTabs