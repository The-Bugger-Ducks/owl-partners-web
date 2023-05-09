import UserRole from "../enums/userRole";

interface User {
    id: string;
    name: string;
    lastName: string;
    email: string;
    role: UserRole;
    createdAt: Date;
}

export default User;