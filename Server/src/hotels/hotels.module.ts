import {Module} from '@nestjs/common';
import {HotelsService} from './hotels.service';
import {HotelsController} from './hotels.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Hotel, HotelSchema} from "./interfaces/schemas/hotel.schema";
import {HotelRoom, HotelRoomSchema} from "../hotel_rooms/interfaces/schemas/hotelRoom.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Hotel.name, schema: HotelSchema},
            {name: HotelRoom.name, schema: HotelRoomSchema},
        ]),
    ],
    providers: [HotelsService],
    controllers: [HotelsController]
})
export class HotelsModule {
}
