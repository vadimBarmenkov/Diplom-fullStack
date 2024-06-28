import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LocalAuthGuard} from './guards/local-auth.guard';
import {JwtAuthGuard} from './guards/jwt-auth.guard';
import {Role} from 'src/enums/role.enum';
import {Roles} from 'src/decorators/roles.decorator';
import {RolesGuard} from './guards/roles.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get('checkRole')
    checkRole(@Request() req) {
        return req.user.role;
    }

}
