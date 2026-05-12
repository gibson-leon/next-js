import React from "react";
import Image from "next/image";

const Page = () => {
    return (
        <>
            <img src="https://ik.imagekit.io/dass/sea-ocean?updatedAt=1755766586673" alt="image" width={500} height={500} />
            <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="image" width={500} height={500} />
            <Image src={"https://ik.imagekit.io/dass/sea-ocean?updatedAt=1755766586673"} width={500} height={500} alt="image" />
        </>
    );
}

export default Page;