"use client"
import React from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/Tabs/tabs'
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardTabs = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            </TabsContent>
            <TabsContent value="reports">
            </TabsContent>
            <TabsContent value="settings">
            </TabsContent>
        </Tabs>
        
    </>
  )
}

export default DashboardTabs