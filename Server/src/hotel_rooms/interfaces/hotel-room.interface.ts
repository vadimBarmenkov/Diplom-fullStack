import {Types} from "mongoose";

export interface HotelRoomInterface {
    hotel: Types.ObjectId;
    title: string;
    description: string;
    images: string[];
    createdAt: Date;
    updatedAt: Date;
    isEnabled: boolean;
}

