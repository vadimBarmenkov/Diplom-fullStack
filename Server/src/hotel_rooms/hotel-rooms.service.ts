import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import mongoose, {Model, ObjectId} from "mongoose";
import {HotelRoom, HotelRoomDocument} from "./interfaces/schemas/hotelRoom.schema";
import {HotelRoomServiceInterface} from "./interfaces/hotelRoomService.interface";
import {SearchHotelRoomsDto} from "./interfaces/dto/search-hotel-rooms.dto";
import {CreateHotelRoomDto} from "./interfaces/dto/create-hotel-room.dto";
import {UpdateHotelRoomDto} from "./interfaces/dto/update-hotel-room.dto";

@Injectable()
export class HotelRoomsService implements HotelRoomServiceInterface {
    constructor(@InjectModel(HotelRoom.name) private hotelRoomModel: Model<HotelRoomDocument>) {
    }

    async getAll(): Promise<HotelRoom[]> {
        return this.hotelRoomModel.find().exec();
    }

    async findById(id: ObjectId): Promise<HotelRoom> {
        return this.hotelRoomModel.findById(id);
    }

    async findByHotelId(id: ObjectId): Promise<HotelRoom[]> {
        return this.hotelRoomModel.find({hotel: id}).exec();
    }

    async create(data: CreateHotelRoomDto): Promise<HotelRoom> {
        const newHotel = new this.hotelRoomModel({
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
            hotel: new mongoose.Types.ObjectId(data.hotelId)
        });
        return newHotel.save();
    }

    async search(params: SearchHotelRoomsDto): Promise<HotelRoom[]> {
        return Promise.resolve([]);
    }

    async update(id: ObjectId, data: UpdateHotelRoomDto): Promise<HotelRoom> {
        return this.hotelRoomModel.findByIdAndUpdate(id, {...data, updatedAt: new Date()}, {new: true});
    }

}