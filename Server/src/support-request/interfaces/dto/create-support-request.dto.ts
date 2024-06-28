import {ObjectId} from "mongoose";

export interface CreateSupportRequestDto {
    user: ObjectId;
    text: string;
}
  