import {IsEmail, MinLength} from "class-validator";
import {Role} from "src/enums/role.enum";

export class CreateUserDto {

    @IsEmail()
    email: string;

    @MinLength(6, {message: "Пароль слишком короткий"})
    passwordHash: string;

    name: string;

    contactPhone: string;

    role: Role;
}