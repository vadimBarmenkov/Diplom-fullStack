import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Schema as MongooseSchema, Types} from 'mongoose';
import {HotelRoomInterface} from "../hotel-room.interface";

export type HotelRoomDocument = HydratedDocument<HotelRoom>;

@Schema()
export class HotelRoom implements HotelRoomInterface {

    @Prop({required: true, type: MongooseSchema.Types.ObjectId, ref: 'Hotel'})
    hotel: Types.ObjectId;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop({default: []})
    images: string[];

    @Prop({required: true})
    createdAt: Date;

    @Prop({required: true})
    updatedAt: Date;

    @Prop({required: true, default: true})
    isEnabled: boolean;
}

export const HotelRoomSchema = SchemaFactory.createForClass(HotelRoom);