import {BadRequestException, Injectable} from '@nestjs/common';
import {UsersServiceInterface} from './interfeces/usersService.interface';
import {User, UserDocument} from "./interfeces/schemas/user.schema";
import {Model, ObjectId} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {CreateUserDto} from './interfeces/dto/create-user.dto';
import * as argon2 from "argon2";
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class UsersService implements UsersServiceInterface {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
                private readonly jwtService: JwtService) {
    }

    async getAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    //create user by email
    async create(data: CreateUserDto): Promise<User> {
        await this.userModel.findOne({email: data.email}).then((docs) => {
            if (docs) {
                throw new Error();
            }
        }).catch(() => {
            throw new BadRequestException('Такой email уже зарегистрирован')
        });

        const token = this.jwtService.sign({email: data.email});

        //return token also
        return await new this.userModel({
            ...data,
            passwordHash: await argon2.hash(data.passwordHash), token: token
        }).save();
    }

    async findAll(params: SearchUserDto): Promise<User[]> {

        return this.userModel.find({
            email: {"$regex": params.email},
            name: {"$regex": params.name},
            contactPhone: {"$regex": params.contactPhone}
        }).exec();
    }

    async findByEmail(email: string): Promise<User> {
        return await this.userModel.findOne({email: email});
    }

    async findById(id: ObjectId): Promise<User> {
        return this.userModel.findById(id);
    }

    async update(id: ObjectId, data: UpdateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, data);
    }
}
