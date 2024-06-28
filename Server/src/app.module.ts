import {Module} from "@nestjs/common";
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule} from "@nestjs/config";
import {UsersModule} from './users/users.module';
import {HotelsModule} from './hotels/hotels.module';
import {ReservationsModule} from './reservations/reservations.module';
import {AuthModule} from './auth/auth.module';
import {FileModule} from './file/file.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from 'path';
import {HotelRoomsModule} from './hotel_rooms/hotel-rooms.module';
import {SupportRequestModule} from './support-request/support-request.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGO_CONNECTION),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
        }),
        HotelsModule,
        UsersModule,
        ReservationsModule,
        AuthModule,
        SupportRequestModule,
        FileModule,
        HotelRoomsModule,
    ],

})
export class AppModule {
}