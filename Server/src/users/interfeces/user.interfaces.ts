import {Role} from "src/enums/role.enum";

export interface IUser {
    email: string;
    passwordHash: string;
    name: string;
    contactPhone: string;
    role: Role;
}