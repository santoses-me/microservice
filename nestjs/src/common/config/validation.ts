import * as Joi from 'joi';

export const envSchema = Joi.object({
    PORT: Joi.number().default(3000),
    AURORA_DATABASE_URL: Joi.string().required(),
    AWS_REGION: Joi.string().default('us-east-1'),
    DDB_SESSIONS_TABLE: Joi.string().required(),
});
