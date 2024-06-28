import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Schema as MongooseSchema, Types} from 'mongoose';


export type ReservationDocument = HydratedDocument<Reservation>;

@Schema()
export class Reservation {

    @Prop({required: true, type: MongooseSchema.Types.ObjectId, ref: 'User'})
    userId: Types.ObjectId;

    @Prop({required: true, type: MongooseSchema.Types.ObjectId, ref: 'Hotel'})
    hotelId: Types.ObjectId;

    @Prop({required: true, type: MongooseSchema.Types.ObjectId, ref: 'Room'})
    roomId: Types.ObjectId;

    @Prop({required: true})
    dateStart: Date;

    @Prop({required: true})
    dateEnd: Date;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);