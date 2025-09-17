import React, {ReactNode} from "react";
import Navbar from "@/app/(website)/_components/navbar";
import {Footer} from "@/app/(website)/_components/footer";
import { GoogleTagManager } from "@next/third-parties/google";

const WebsiteLayout = ({children}: { children: ReactNode }) => {
    return (
        <>
            <div className="max-w-(--breakpoint-xl) mx-auto  px-6">
                <Navbar/>
                <main>{children}</main>
                <Footer/>
            </div>
            <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID as string} />
        </>
    );
};

export default WebsiteLayout;
