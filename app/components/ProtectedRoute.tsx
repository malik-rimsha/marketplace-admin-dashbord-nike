// "use client";

// import { useRouter } from "next/router";
// import React, { Children, useEffect } from "react";

// export default function ProtectedRoute({ }: { children: React.ReactNode }) {
//     const router = useRouter()

//     useEffect(() => {
//         const isLogedIn = localStorage.getItem("isLogedIn")
//         if (!isLogedIn) {
//             router.push("/admin")
//         }
//     },[router])

//     return <>
//       {children}
//     </>
// }


"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function ProtectedRoute({children} : {children : React.ReactNode}){
    const router = useRouter()

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn")
        if (!isLoggedIn) {
            router.push("/admin")
        }

    },[router])

    return <>
    {children}
    </>
}