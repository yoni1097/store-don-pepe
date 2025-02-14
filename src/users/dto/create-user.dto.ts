import { IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {


 @IsNotEmpty()
     @IsString()
     name: string;

     @IsNotEmpty()
     @IsString()
     last_name: string;


     @IsNotEmpty()
    
     telephone: string;
     
     @IsNotEmpty()
     @IsString()
     noDocument: string;

     

     @IsNotEmpty()
     @IsString()
     rol: string;

  @IsNotEmpty()
     @IsString()
     email: string;
     
     @IsNotEmpty()
     @IsString()
     password: string;


     avalable: boolean;


}
