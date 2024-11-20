export class UpdateVasesDto {
    readonly name?: string;
    readonly description?: string;
    readonly price?: number;
    readonly imageUrl?: string;
    readonly sizing?: string;  // Specific field for Vases
}
