import {ObjectId} from "mongoose";

export interface SearchHotelRoomsDto {
    limit: number;
    offset: number;
    hotel: ObjectId;
    isEnabled?: boolean;
}