import {Body, Controller, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {UsersService} from "./users.service";
import {User} from "./interfeces/schemas/user.schema";
import {ObjectId} from "mongoose";
import {CreateUserDto} from './interfeces/dto/create-user.dto';
import {RolesGuard} from 'src/auth/guards/roles.guard';
import {Roles} from 'src/decorators/roles.decorator';
import {Role} from 'src/enums/role.enum';
import {JwtAuthGuard} from 'src/auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get()
    getAll(): Promise<User[]> {
        return this.usersService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: ObjectId): Promise<User> {
        return this.usersService.findById(id);
    }

    @Post('create')
    @UsePipes(new ValidationPipe)
    create(@Body() data: CreateUserDto): Promise<User> {
        return this.usersService.create(data);
    }

    @Post('search-by-email')
    getByEmail(@Body() email: string): Promise<User> {
        return this.usersService.findByEmail(email);
    }

    @Post('search')
    search(@Body() data: SearchUserDto): Promise<User[]> {
        return this.usersService.findAll(data);
    }

    @Put('id')
    update(@Body() data: UpdateUserDto, @Param('id') id: ObjectId): Promise<User> {
        return this.usersService.update(id, data);
    }

}
