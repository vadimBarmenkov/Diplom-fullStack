import {Module} from '@nestjs/common';
import {SupportRequestService} from './support-request.service';
import {SupportRequestController} from './support-request.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {SupportRequest, SupportRequestSchema} from './interfaces/schemas/support-request.shemas';
import {Message, MessageSchema} from './interfaces/schemas/message.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: SupportRequest.name, schema: SupportRequestSchema},
            {name: Message.name, schema: MessageSchema}
        ]),
    ],
    controllers: [SupportRequestController],
    providers: [SupportRequestService]
})
export class SupportRequestModule {
}
