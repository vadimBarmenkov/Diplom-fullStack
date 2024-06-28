import {ObjectId} from "mongoose";

export interface GetChatListParams {
    user: ObjectId | null;
    isActive: boolean;
}