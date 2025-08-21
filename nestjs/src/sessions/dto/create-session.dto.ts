import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';

export class CreateSessionDto {
    @IsString() @IsNotEmpty() userId!: string;
    @IsInt() @Min(60) ttlSeconds!: number;
}
