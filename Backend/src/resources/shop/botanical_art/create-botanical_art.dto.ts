import { ApiProperty } from "@nestjs/swagger";

export class CreateBotanicalArtDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly price: number;

    @ApiProperty()
    readonly imageUrl: string;
}
