import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {UsersModule} from "../users/users.module";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "./jwt.strategy";
import {ConfigModule, ConfigService} from '@nestjs/config';
import {RolesGuard} from './guards/roles.guard';
import {APP_GUARD} from '@nestjs/core';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: {expiresIn: '30d'},
            }),
            inject: [ConfigService]
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy, {
        provide: APP_GUARD,
        useClass: RolesGuard,
    },],
    exports: [AuthService]
})
export class AuthModule {
}
