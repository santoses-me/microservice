import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
    @IsEmail() email!: string;
    @IsNotEmpty() @MaxLength(60) name!: string;
}
