export class CreateHomewareDto {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly imageUrl: string;
    readonly category: string;
    readonly dimensions: string;  // Specific field for Homeware
}
