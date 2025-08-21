import { Injectable } from '@nestjs/common';
import { SessionsRepository, Session } from './sessions.repository';
import { randomUUID } from 'crypto';

@Injectable()
export class SessionsService {
    constructor(private repo: SessionsRepository) {}
    async create(userId: string, ttlSeconds: number) {
        const now = new Date();
        const s: Session = {
            id: randomUUID(),
            userId,
            createdAt: now.toISOString(),
            ttl: Math.floor(now.getTime() / 1000) + ttlSeconds,
        };
        return this.repo.put(s);
    }
    get(id: string) {
        return this.repo.get(id);
    }
    delete(id: string) {
        return this.repo.delete(id);
    }
}
