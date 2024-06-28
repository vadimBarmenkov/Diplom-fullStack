import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';
import {IHotel} from "../hotel.interface";


export type HotelDocument = HydratedDocument<Hotel>;

@Schema()
export class Hotel implements IHotel {

    @Prop({required: true})
    title: string;

    @Prop()
    description: string;

    @Prop()
    images: string[];

    @Prop({required: true})
    createdAt: Date;

    @Prop({required: true})
    updatedAt: Date;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);