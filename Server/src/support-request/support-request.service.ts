import {Injectable} from '@nestjs/common';
import {ISupportRequestService} from './interfaces/support-request-service.interface';
import {Model, Schema} from 'mongoose';
import {GetChatListParams} from './interfaces/dto/get-chatList-params.dto';
import {SendMessageDto} from './interfaces/dto/send-message.dto';
import {Message, MessageDocument} from './interfaces/schemas/message.schema';
import {SupportRequest, SupportRequestDocument} from './interfaces/schemas/support-request.shemas';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class SupportRequestService implements ISupportRequestService {

    constructor(@InjectModel(SupportRequest.name) private supportRequestModel: Model<SupportRequestDocument>,
                @InjectModel(Message.name) private messageModel: Model<MessageDocument>) {
    }


    findSupportRequests(params: GetChatListParams): Promise<SupportRequest[]> {
        throw new Error('Method not implemented.');
    }

    sendMessage(data: SendMessageDto): Promise<Message> {
        throw new Error('Method not implemented.');
    }

    getMessages(supportRequest: Schema.Types.ObjectId): Promise<Message[]> {
        throw new Error('Method not implemented.');
    }

    subscribe(handler: (supportRequest: SupportRequest, message: Message) => void): () => void {
        throw new Error('Method not implemented.');
    }
}
