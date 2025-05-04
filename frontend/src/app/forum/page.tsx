"use client";

import Header from "@/components/forum/Header";
import RootLayout from "@/layouts/RootLayout";

export default function ForumPage() {
    const handleSearch =()=>{};
    return(
        <RootLayout>
            <Header searchFunction={handleSearch}/>
        </RootLayout>
    );
}