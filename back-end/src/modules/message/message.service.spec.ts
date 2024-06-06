import { Test, TestingModule } from '@nestjs/testing';
import { MessageService } from './message.service';
import { MessageRepository } from './message.repository';
import { User } from '../../models/user.model';
import { Conversation } from '../../models/conversation.model';
import { Message } from '../../models/message.model';

describe('MessageService', () => {
  let service: MessageService;
  let messageRepository: jest.Mocked<MessageRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MessageService,
        {
          provide: MessageRepository,
          useValue: {
            createMessage: jest.fn(),
            findMessageById: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<MessageService>(MessageService);
    messageRepository = module.get(MessageRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a message', async () => {
    const content = 'Hello World';
    const sender: User = { id: '1', username: 'John', email: 'john@example.com', createdAt: new Date() };
    const conversation: Conversation = { id: '1', participants: [sender], createdAt: new Date() };
    const message: Message = { id: '1', content, sender, conversation, createdAt: new Date() };

    messageRepository.createMessage.mockResolvedValue(message);

    const result = await service.createMessage(content, sender, conversation);
    expect(result).toEqual(message);
    expect(messageRepository.createMessage).toHaveBeenCalledWith(content, sender, conversation);
  });

  it('should find message by id', async () => {
    const message: Message = { id: '1', content: 'Hello', sender: null, conversation: null, createdAt: new Date() };

    messageRepository.findMessageById.mockResolvedValue(message);

    const result = await service.findMessageById('1');
    expect(result).toEqual(message);
    expect(messageRepository.findMessageById).toHaveBeenCalledWith('1');
  });
});
