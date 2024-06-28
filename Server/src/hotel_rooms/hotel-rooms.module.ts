import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {HotelRoomsService} from './hotel-rooms.service';
import {HotelsRoomController} from './hotel-rooms.controller';
import {Hotel, HotelSchema} from 'src/hotels/interfaces/schemas/hotel.schema';
import {HotelRoom, HotelRoomSchema} from './interfaces/schemas/hotelRoom.schema';
import {JwtModule} from '@nestjs/jwt';
import {ConfigModule, ConfigService} from '@nestjs/config';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Hotel.name, schema: HotelSchema},
            {name: HotelRoom.name, schema: HotelRoomSchema}
        ]),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: {expiresIn: '30d'},
            }),
            inject: [ConfigService]
        })
    ],
    providers: [HotelRoomsService],
    controllers: [HotelsRoomController]
})
export class HotelRoomsModule {
}
