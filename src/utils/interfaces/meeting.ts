import Partners from "./partners"

interface Meeting {
    id: string,
    partnerId: string,
    title: string,
    description?: string,
    meetingDateTime: string,
    createdAt: string,
    updatedAt: string,
    Partner: Partners
}

export default Meeting