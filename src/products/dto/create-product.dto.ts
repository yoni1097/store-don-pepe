import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    name: string;


    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNumber({
        maxDecimalPlaces: 4,
    })
    @Min(0)
    public price: number;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    stock: number;

    @IsNotEmpty()
    @IsString()
    image: string;
}





