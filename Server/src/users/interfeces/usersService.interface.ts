import {ObjectId} from "mongoose";
import {User} from "./schemas/user.schema";

export interface UsersServiceInterface {
    create(data: Partial<User>): Promise<User>;

    findById(id: ObjectId): Promise<User>;

    findByEmail(email: string): Promise<User>;

    findAll(params: SearchUserDto): Promise<User[]>;
}