import Endpoints from "../enums/endpoints";
import api from "../../services/api";
import Dashboard from "../interfaces/dashboard";

class DashboardRequests {
    public async get() {
        try {
            const response = await api.get(Endpoints.DASHBOARD)
            const dashboard: Dashboard = response.data
            return dashboard;
        } catch(error) {
            console.log("ERRO ao obter dados do dashboard", error)
            return "error"
        }
    }
}

export default new DashboardRequests()