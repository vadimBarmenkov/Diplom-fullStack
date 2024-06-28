import {Body, Controller, Get, Param, Post, Put, UseGuards} from "@nestjs/common";
import {ObjectId} from "mongoose";
import {HotelRoomsService} from "./hotel-rooms.service";
import {SearchHotelRoomsDto} from "./interfaces/dto/search-hotel-rooms.dto";
import {CreateHotelRoomDto} from "./interfaces/dto/create-hotel-room.dto";
import {UpdateHotelRoomDto} from "./interfaces/dto/update-hotel-room.dto";
import {HotelRoom} from "./interfaces/schemas/hotelRoom.schema";
import {JwtAuthGuard} from "src/auth/guards/jwt-auth.guard";
import {RolesGuard} from "src/auth/guards/roles.guard";
import {Roles} from "src/decorators/roles.decorator";
import {Role} from "src/enums/role.enum";


@Controller('hotel-rooms')
export class HotelsRoomController {

    constructor(private readonly hotelRoomsService: HotelRoomsService) {
    }

    @Get()
    getAll(): Promise<HotelRoom[]> {
        return this.hotelRoomsService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: ObjectId): Promise<HotelRoom> {
        return this.hotelRoomsService.findById(id);
    }

    @Get('hotels/:id')
    getByHotelId(@Param('id') id: ObjectId): Promise<HotelRoom[]> {
        return this.hotelRoomsService.findByHotelId(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Post('create')
    create(@Body() data: CreateHotelRoomDto): Promise<HotelRoom> {
        return this.hotelRoomsService.create(data);
    }

    @Post()
    search(@Body() data: SearchHotelRoomsDto): Promise<HotelRoom[]> {
        return this.hotelRoomsService.search(data);
    }

    @Put(':id')
    update(@Body() data: UpdateHotelRoomDto, @Param('id') id: ObjectId) {
        this.hotelRoomsService.update(id, data);
    }

}