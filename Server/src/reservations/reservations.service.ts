import {Injectable} from '@nestjs/common';
import {IReservationService, ReservationDto, ReservationSearchOptions} from './interfaces/reservationService.interface';
import {Model, ObjectId} from 'mongoose';
import {Reservation, ReservationDocument} from './interfaces/schemas/reservation.schema';
import {InjectModel} from '@nestjs/mongoose';
import {HotelRoom, HotelRoomDocument} from 'src/hotel_rooms/interfaces/schemas/hotelRoom.schema';

@Injectable()
export class ReservationsService implements IReservationService {
    constructor(@InjectModel(Reservation.name) private reservationModel: Model<ReservationDocument>,
                @InjectModel(HotelRoom.name) private hotelRoomModel: Model<HotelRoomDocument>) {
    }

    addReservation(data: ReservationDto, userId: ObjectId): Promise<Reservation> {

        const reservation = new this.reservationModel({
            ...data,
            dateStart: new Date(data.startDate),
            dateEnd: new Date(data.endDate),
            userId: userId
        });
        return reservation.save();
    }

    async removeReservation(id: ObjectId, userId: ObjectId): Promise<void> {
        console.log({_id: id, userId: userId});
        await this.reservationModel.findOneAndDelete({_id: id, userId: userId});
        return;
    }

    getReservations(filter: ReservationSearchOptions): Promise<Reservation[]> {
        throw new Error('Method not implemented.');
    }

    getUserReservation(userId: ObjectId): Promise<Reservation[]> {

        return this.reservationModel.find({userId: userId}).exec();
    }
}
