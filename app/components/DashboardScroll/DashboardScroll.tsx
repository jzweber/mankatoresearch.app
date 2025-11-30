"use client";

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const DashboardScroll = () => {
    const searchParams = useSearchParams();
    useEffect(() => {
        if (searchParams.get('dashboard') !== null) {
            scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [searchParams]);

    return null;
};

export default DashboardScroll;