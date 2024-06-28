import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";
import {IUser} from '../user.interfaces'
import {Role} from "src/enums/role.enum";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User implements IUser {

    @Prop()
    contactPhone: string;

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    passwordHash: string;

    @Prop({required: true, default: Role.Clien})
    role: Role;

}

export const UserSchema = SchemaFactory.createForClass(User);