import {Injectable} from '@nestjs/common';
import {Model, ObjectId} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {IHotelService} from "./interfaces/hotelService.interface";
import {Hotel, HotelDocument} from "./interfaces/schemas/hotel.schema";
import {UpdateHotelDto} from "./interfaces/dto/update-hotel.dto";
import {CreateHotelDto} from "./interfaces/dto/create-hotel.dto";
import {SearchHotelDto} from "./interfaces/dto/search-hotel.dto";

@Injectable()
export class HotelsService implements IHotelService {
    constructor(@InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>) {
    }

    async getTotalCount() {
        const docCount = await this.hotelModel.countDocuments({}).exec();
        return docCount;
    }

    async getAll(limit: number, offset: number) {
        return this.hotelModel.find().skip(offset).limit(limit);
    }


    async findById(id: ObjectId): Promise<Hotel> {
        return this.hotelModel.findById(id);
    }


    async create(data: CreateHotelDto): Promise<Hotel> {
        const newHotel = new this.hotelModel({...data, createdAt: new Date(), updatedAt: new Date()});
        return newHotel.save();
    }


    async search(params: SearchHotelDto): Promise<Hotel[]> {
        return this.hotelModel.find({
            title: {"$regex": params.title},
            limit: {"$regex": params.limit},
            offset: {"$regex": params.offset}
        }).exec();
    }

    async update(id: ObjectId, data: UpdateHotelDto): Promise<Hotel> {
        return this.hotelModel.findByIdAndUpdate(id, {...data, updatedAt: new Date()}, {new: true});
    }

}
