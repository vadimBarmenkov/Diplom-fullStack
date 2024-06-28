import {CanActivate, ExecutionContext, ForbiddenException, Injectable} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {JwtService} from '@nestjs/jwt';
import {ROLES_KEY} from 'src/decorators/roles.decorator';
import {Role} from 'src/enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector, private jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredRoles) {
            return true;
        }

        try {
            const req = context.switchToHttp().getRequest();
            const authHeader = req.headers.authorization;
            const token = authHeader.split(' ')[1];
            const user = this.jwtService.verify(token);

            return requiredRoles.some((role) => user.role?.includes(role))
        } catch (e) {
            throw new ForbiddenException(e);
        }
    }
}