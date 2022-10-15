import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({type: String, description: "email", default:"buithanhtho14ig@gmail.com"})

    email: string;

    @ApiProperty({type: String, description: "password",default:"2021996"})
    password: string
}







