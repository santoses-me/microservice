import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './common/config/configuration';
import { envSchema } from './common/config/validation';
import { UsersModule } from './users/users.module';
import { SessionsModule } from './sessions/sessions.module';
import { HealthModule } from './health/health.module';
import { AwsModule } from './aws/aws.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
            validationSchema: envSchema,
        }),
        AwsModule,
        UsersModule,
        SessionsModule,
        HealthModule,
    ],
})
export class AppModule {}
