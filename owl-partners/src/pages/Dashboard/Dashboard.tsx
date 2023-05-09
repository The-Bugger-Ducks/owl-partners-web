import { useEffect, useState } from "react";
import dashboardRequests from "../../utils/requests/dashboard";
import { default as DashboardInterface } from "../../utils/interfaces/dashboard";

export default function Dashboard() {
    const [dashboardData, setDashboardData] = useState<DashboardInterface>()

    useEffect(() => {
        getDashboardData()  
    }, []);

    const getDashboardData = async () => {
        const data = await dashboardRequests.get()
        if (data !== "error") setDashboardData(data)
    }

    return <>Olá, mundo 🌏 Dashboard</>
}