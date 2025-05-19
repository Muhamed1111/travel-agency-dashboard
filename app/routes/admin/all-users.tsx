import {Header} from "../../../components";
import React from "react";

const AllUsers = () => {
    const user={name:"Seolina"}
    return(
        <main className="dashboard wrapper">
            <Header
                title={`Welcome ${user?.name ?? 'Guest'}`}
                description="Check out our current users in real time"
            />
            Dashboard Page Contents
        </main>
    )

}
export default AllUsers