import {Controller, Delete, Get, Param, Post, Res, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express/multer';
import {diskStorage} from 'multer';
import * as fs from "fs"
import {JwtAuthGuard} from 'src/auth/guards/jwt-auth.guard';
import {RolesGuard} from 'src/auth/guards/roles.guard';
import {Role} from 'src/enums/role.enum';
import {Roles} from 'src/decorators/roles.decorator';


@Controller('file')
export class FileController {
    constructor() {
    }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @UseInterceptors(FileInterceptor('img', {
        storage: diskStorage({
            destination: "./public/images",
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const nameTab = file.originalname.split(".")
                const subArray = nameTab.slice(0, -1);
                const originalName = subArray.join("")
                const ext = `.${nameTab[nameTab.length - 1]}`;
                const filename = `${originalName}-${uniqueSuffix}${ext}`
                cb(null, filename)
            }
        })
    }))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        return {src: file.filename};
    }

    @Get("/:filename")
    async getFile(@Param("filename") filename: string, @Res() res: any) {
        res.sendFile(filename, {root: 'public/images'});
    }

    @Delete(':filename')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    removeFile(@Param('filename') filename: string) {
        fs.unlink(`public/images/${filename}`, (err) => {
        });
        return "successfully";
    }

}
