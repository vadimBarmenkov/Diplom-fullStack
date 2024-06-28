import {ObjectId} from "mongoose";
import {SendMessageDto} from "./dto/send-message.dto";
import {Message} from "./schemas/message.schema";
import {SupportRequest} from "./schemas/support-request.shemas";
import {GetChatListParams} from "./dto/get-chatList-params.dto";

export interface ISupportRequestService {
    findSupportRequests(params: GetChatListParams): Promise<SupportRequest[]>;

    sendMessage(data: SendMessageDto): Promise<Message>;

    getMessages(supportRequest: ObjectId): Promise<Message[]>;

    subscribe(
        handler: (supportRequest: SupportRequest, message: Message) => void
    ): () => void;
}