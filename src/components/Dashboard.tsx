import { AppBar } from "./subcompoents/AppBar";
import { BalanceBar } from "./subcompoents/Balance";

import { Users } from "./users"

export function Dashboard() {
    return <>
        <div>
            <AppBar isLandingPage="false"/>
            <BalanceBar />
            <Users />
        </div>
    </>
}



