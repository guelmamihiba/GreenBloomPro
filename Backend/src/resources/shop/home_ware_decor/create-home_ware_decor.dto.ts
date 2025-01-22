import { ApiProperty } from "@nestjs/swagger";

export class CreateHomewareDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly price: number;

    @ApiProperty()
    readonly imageUrl: string;

    @ApiProperty()
    readonly category: string;

    @ApiProperty()
    readonly dimensions: string;  
}
