import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';

@Controller('sessions')
export class SessionsController {
    constructor(private svc: SessionsService) {}
    @Post() create(@Body() dto: CreateSessionDto) {
        return this.svc.create(dto.userId, dto.ttlSeconds);
    }
    @Get(':id') get(@Param('id') id: string) {
        return this.svc.get(id);
    }
    @Delete(':id') del(@Param('id') id: string) {
        return this.svc.delete(id);
    }
}
