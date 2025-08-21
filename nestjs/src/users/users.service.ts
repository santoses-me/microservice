import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(private repo: UsersRepository) {}
    create(dto: CreateUserDto) {
        return this.repo.create(dto);
    }
    get(id: string) {
        return this.repo.findById(id);
    }
    list() {
        return this.repo.list();
    }
}
