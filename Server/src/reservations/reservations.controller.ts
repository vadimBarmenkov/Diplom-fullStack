import {Body, Controller, Delete, Get, Param, Post, Request, UseGuards} from '@nestjs/common';
import {ReservationDto} from './interfaces/reservationService.interface';
import {Schema} from 'mongoose';
import {Reservation} from './interfaces/schemas/reservation.schema';
import {ReservationsService} from './reservations.service';
import {JwtAuthGuard} from 'src/auth/guards/jwt-auth.guard';

@Controller('reservations')
export class ReservationsController {
    constructor(private readonly reservationService: ReservationsService) {
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    addReservation(@Request() req, @Body() data: ReservationDto): Promise<Reservation> {
        return this.reservationService.addReservation(data, req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    removeReservation(@Param('id') id: Schema.Types.ObjectId, @Request() req) {
        this.reservationService.removeReservation(id, req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getReservations(@Request() req): Promise<Reservation[]> {
        return this.reservationService.getUserReservation(req.user.id);
    }


}
