import {ObjectId} from "mongoose";

export interface MarkMessagesAsReadDto {
    user: ObjectId;
    supportRequest: ObjectId;
    createdBefore: Date;
}