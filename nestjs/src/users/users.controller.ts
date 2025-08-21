import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private svc: UsersService) {}
    @Get() list() {
        return this.svc.list();
    }
    @Get(':id') get(@Param('id') id: string) {
        return this.svc.get(id);
    }
    @Post() create(@Body() dto: CreateUserDto) {
        return this.svc.create(dto);
    }
}
