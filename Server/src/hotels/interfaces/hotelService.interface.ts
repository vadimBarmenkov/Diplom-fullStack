import {Hotel} from "./schemas/hotel.schema";
import {ObjectId} from "mongoose";
import {UpdateHotelDto} from "./dto/update-hotel.dto";
import {SearchHotelDto} from "./dto/search-hotel.dto";

export interface IHotelService {
    create(data: any): Promise<Hotel>;

    findById(id: ObjectId): Promise<Hotel>;

    search(params: SearchHotelDto): Promise<Hotel[]>;

    update(id: ObjectId, data: UpdateHotelDto): Promise<Hotel>;
}