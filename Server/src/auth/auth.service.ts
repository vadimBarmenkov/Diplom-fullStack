import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as argon2 from "argon2";
import {IAuthDto} from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {
    }

    async validateUser(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        const passwordIsMAtch = await argon2.verify(user.passwordHash, password);

        if (user && passwordIsMAtch) {
            return user
        }
        throw new UnauthorizedException('пароль или email некорректны.');
    }

    async login(user: IAuthDto) {
        const {id, email, role} = user;
        console.log('new user role: ' + role);
        return {
            id,
            email,
            role,
            token: this.jwtService.sign({id: id, email: email, role: role}),
        };
    }
}
