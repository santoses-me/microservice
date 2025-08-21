import { Injectable, Inject } from '@nestjs/common';
import { DDBDOC } from '../aws/aws.module';
import {
    DynamoDBDocumentClient,
    GetCommand,
    PutCommand,
    DeleteCommand,
} from '@aws-sdk/lib-dynamodb';
import { ConfigService } from '@nestjs/config';

export interface Session {
    id: string; // PK
    userId: string;
    ttl: number; // epoch seconds for TTL
    createdAt: string; // ISO
}

@Injectable()
export class SessionsRepository {
    private table: string;
    constructor(
        @Inject(DDBDOC) private doc: DynamoDBDocumentClient,
        private cfg: ConfigService,
    ) {
        this.table = this.cfg.get<string>('aws.dynamoTableSessions')!;
    }

    async put(session: Session) {
        await this.doc.send(new PutCommand({ TableName: this.table, Item: session }));
        return session;
    }
    async get(id: string) {
        const res = await this.doc.send(new GetCommand({ TableName: this.table, Key: { id } }));
        return res.Item as Session | undefined;
    }
    async delete(id: string) {
        await this.doc.send(new DeleteCommand({ TableName: this.table, Key: { id } }));
    }
}
