import {ObjectId} from "mongoose";
import {Reservation} from "./schemas/reservation.schema";

export interface ReservationDto {
    userId: ObjectId;
    hotelId: ObjectId;
    roomId: ObjectId;
    startDate: number;
    endDate: number;
}

export interface ReservationSearchOptions {
    userId: ObjectId;
    dateStart: Date;
    dateEnd: Date;
}

export interface IReservationService {
    addReservation(data: ReservationDto, userId: ObjectId): Promise<Reservation>;

    removeReservation(id: ObjectId, userId: ObjectId): Promise<void>;

    getReservations(filter: ReservationSearchOptions): Promise<Array<Reservation>>;
}