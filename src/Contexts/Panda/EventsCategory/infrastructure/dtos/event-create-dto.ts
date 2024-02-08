import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class EventCreateDTO {
  @IsEmail()
  @IsNotEmpty()
  public id!: string;

  @IsString()
  @IsNotEmpty()
  public name!: string;

  @IsString()
  @IsNotEmpty()
  public description!: string;
}
