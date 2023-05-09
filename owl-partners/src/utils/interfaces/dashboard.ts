import PartnerStatus from "../enums/partnerStatus";
import Meeting from "./meeting";
import Partners from "./partners";

interface Dashboard {
    totalActivePartners: number;
    top10MostMembers: Partners[];
    partnersPerStatus: PartnersPerStatus[];
    partnersPerState: PartnersPerState[];
    partnerPerClassification: PartnerPerClassification[];
    nextMeeting: Meeting
}

interface PartnersPerStatus {
    _count: number,
    status: PartnerStatus
}

interface PartnersPerState {
    _count: number,
    state: string
}

interface PartnerPerClassification {
    _count: number,
    classification: string
}

export default Dashboard;