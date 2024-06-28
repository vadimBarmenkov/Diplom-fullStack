import {ObjectId} from "mongoose";
import {HotelRoom} from "./schemas/hotelRoom.schema";
import {SearchHotelRoomsDto} from "./dto/search-hotel-rooms.dto";
import {CreateHotelRoomDto} from "./dto/create-hotel-room.dto";

export interface HotelRoomServiceInterface {
    create(data: Partial<CreateHotelRoomDto>): Promise<HotelRoom>;

    findById(id: ObjectId): Promise<HotelRoom>;

    search(params: SearchHotelRoomsDto): Promise<HotelRoom[]>;

    update(id: ObjectId, data: Partial<HotelRoom>): Promise<HotelRoom>;
}