import { Injectable } from '@nestjs/common';
import { PrismaService } from '../aws/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersRepository {
    constructor(private prisma: PrismaService) {}
    create(data: Pick<User, 'email' | 'name'>) {
        return this.prisma.user.create({ data });
    }
    findById(id: string) {
        return this.prisma.user.findUnique({ where: { id } });
    }
    list(limit = 50) {
        return this.prisma.user.findMany({ take: limit, orderBy: { createdAt: 'desc' } });
    }
}
