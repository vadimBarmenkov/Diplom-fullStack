import {ObjectId} from "mongoose";
import {Role} from "src/enums/role.enum";

export interface IAuthDto {
    email: string;
    id: ObjectId;
    role: Role;
}