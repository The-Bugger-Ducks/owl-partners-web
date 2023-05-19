import PartnerStatus from "../enums/partnerStatus";

interface Partners {
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    zipCode?: string,
    state: string,
    city?: string,
    neighborhood?: string,
    address: string,
    classification: string,
    status: PartnerStatus,
    memberNumber?: number,
    disabled: boolean,
    createdAt: string

}

export default Partners;