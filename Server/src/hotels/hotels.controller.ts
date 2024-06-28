import {Body, Controller, Get, Param, Post, Put, Query, Res, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {Response} from 'express';
import {HotelsService} from "./hotels.service";
import {CreateHotelDto} from "./interfaces/dto/create-hotel.dto";
import {ObjectId} from "mongoose";
import {Hotel} from "./interfaces/schemas/hotel.schema";
import {UpdateHotelDto} from "./interfaces/dto/update-hotel.dto";
import {SearchHotelDto} from "./interfaces/dto/search-hotel.dto";
import {JwtAuthGuard} from 'src/auth/guards/jwt-auth.guard';

let test = 'test';

@Controller('hotels')
export class HotelsController {

    constructor(private readonly hotelsService: HotelsService) {
    }


    @Get()
    async getAll(@Query('limit') limit: number, @Query('offset') offset: number, @Res({passthrough: true}) res: Response): Promise<Hotel[]> {
        const totalCount = await this.hotelsService.getTotalCount();
        res.set({
            'X-Total-Count': totalCount,
            'Access-Control-Expose-Headers': 'X-Total-Count'
        });
        return await this.hotelsService.getAll(limit, offset);
    }

    @Get(':id')
    getById(@Param('id') id: ObjectId): Promise<Hotel> {
        return this.hotelsService.findById(id);
    }

    @Post('create')
    @UseGuards(JwtAuthGuard)
    create(@Body() data: CreateHotelDto): Promise<Hotel> {
        return this.hotelsService.create(data);
    }

    @Post()
    search(@Body() data: SearchHotelDto): Promise<Hotel[]> {
        return this.hotelsService.search(data);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe)
    @UseGuards(JwtAuthGuard)
    update(@Body() data: UpdateHotelDto, @Param('id') id: ObjectId) {
        this.hotelsService.update(id, data);
    }

}
