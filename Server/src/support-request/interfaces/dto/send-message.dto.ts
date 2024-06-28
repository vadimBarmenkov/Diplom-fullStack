import {ObjectId} from "mongoose";

export interface SendMessageDto {
    author: ObjectId;
    supportRequest: ObjectId;
    text: string;
}