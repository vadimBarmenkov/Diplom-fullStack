import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Schema as MongooseSchema, Types} from 'mongoose';
import {Message} from './message.schema';

export type SupportRequestDocument = HydratedDocument<SupportRequest>;

@Schema()
export class SupportRequest {

    @Prop({required: true, type: MongooseSchema.Types.ObjectId, ref: 'User'})
    user: Types.ObjectId;

    @Prop({required: true})
    createdAt: Date;

    @Prop({required: true})
    messages: Message[];

    @Prop()
    isActive: boolean;
}

export const SupportRequestSchema = SchemaFactory.createForClass(SupportRequest);