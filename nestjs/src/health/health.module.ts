import { Controller, Get, Module } from '@nestjs/common';

@Controller('health')
class HealthController {
    @Get('live') live() {
        return { ok: true };
    }
    @Get('ready') ready() {
        return { ok: true };
    }
}

@Module({ controllers: [HealthController] })
export class HealthModule {}
