import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { PrismaService } from '../aws/prisma.service';

@Module({
    controllers: [UsersController],
    providers: [UsersService, UsersRepository, PrismaService],
    exports: [UsersService],
})
export class UsersModule {}
