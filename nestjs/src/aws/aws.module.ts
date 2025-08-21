import { Module, Global } from '@nestjs/common';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

export const DDB = 'DDB';
export const DDBDOC = 'DDBDOC';

@Global()
@Module({
    providers: [
        {
            provide: DDB,
            useFactory: () => new DynamoDBClient({}),
        },
        {
            provide: DDBDOC,
            useFactory: (ddb: DynamoDBClient) =>
                DynamoDBDocumentClient.from(ddb, {
                    marshallOptions: { removeUndefinedValues: true },
                }),
            inject: [DDB],
        },
    ],
    exports: [DDB, DDBDOC],
})
export class AwsModule {}
