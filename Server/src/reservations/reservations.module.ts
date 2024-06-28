import {Module} from '@nestjs/common';
import {ReservationsController} from './reservations.controller';
import {ReservationsService} from './reservations.service';
import {MongooseModule} from '@nestjs/mongoose';
import {Reservation, ReservationSchema} from './interfaces/schemas/reservation.schema';
import {HotelRoom, HotelRoomSchema} from 'src/hotel_rooms/interfaces/schemas/hotelRoom.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Reservation.name, schema: ReservationSchema},
            {name: HotelRoom.name, schema: HotelRoomSchema}
        ]),
        // JwtModule.registerAsync({
        //     imports: [ConfigModule],
        //     useFactory: (configService: ConfigService) => ({
        //       secret: configService.get('JWT_SECRET'),
        //       signOptions: {expiresIn: '30d'},
        //     }),
        //     inject: [ConfigService]
        //   })
    ],
    controllers: [ReservationsController],
    providers: [ReservationsService]
})
export class ReservationsModule {

}
