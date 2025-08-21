export default () => ({
    http: { port: parseInt(process.env.PORT ?? '3000', 10) },
    aurora: {
        url: process.env.AURORA_DATABASE_URL!,
    },
    aws: {
        region: process.env.AWS_REGION || 'us-east-1',
        dynamoTableSessions: process.env.DDB_SESSIONS_TABLE!,
    },
});
