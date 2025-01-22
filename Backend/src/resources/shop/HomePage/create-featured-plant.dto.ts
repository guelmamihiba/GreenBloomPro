import { ApiProperty } from '@nestjs/swagger';

export class CreateFeaturedPlantDto {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly imageUrl: string;
}
