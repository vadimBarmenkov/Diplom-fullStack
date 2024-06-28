import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {SupportRequestService} from './support-request.service';
import {SupportRequest} from './interfaces/schemas/support-request.shemas';
import {Message} from './interfaces/schemas/message.schema';
import {ObjectId} from 'mongoose';
import {SendMessageDto} from './interfaces/dto/send-message.dto';
import {GetChatListParams} from './interfaces/dto/get-chatList-params.dto';
import {JwtAuthGuard} from 'src/auth/guards/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('support-request')
export class SupportRequestController {
    constructor(private readonly supportRequestService: SupportRequestService) {
    }

    @Post()
    findSupportRequests(@Body() params: GetChatListParams): Promise<SupportRequest[]> {
        return this.supportRequestService.findSupportRequests(params);
    }

    @Get(':id')
    getMessages(@Param('id') id: ObjectId): Promise<Message[]> {
        return this.supportRequestService.getMessages(id);
    }

    @Post(':id')
    sendMessage(@Body() data: SendMessageDto, @Param('id') id: ObjectId,): Promise<Message> {
        return this.supportRequestService.sendMessage(data);
    }
}

function Params(arg0: string): (target: SupportRequestController, propertyKey: "getMessages", parameterIndex: 0) => void {
    throw new Error('Function not implemented.');
}

