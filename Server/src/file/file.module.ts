import {Module} from '@nestjs/common';
import {FileController} from './file.controller';
import {MulterModule} from '@nestjs/platform-express/multer';
import {JwtModule} from '@nestjs/jwt';
import {ConfigModule, ConfigService} from '@nestjs/config';

@Module({
    imports: [MulterModule.register({dest: './public/images'}),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: {expiresIn: '30d'},
            }),
            inject: [ConfigService]
        }),],
    controllers: [FileController],
})
export class FileModule {
}
