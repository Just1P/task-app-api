import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({
        default: 'Task title'
    })
    title: string;
    @ApiPropertyOptional({
        default: 'Task description'
    })
    description?: string;
    @ApiPropertyOptional({
        default: 'Task completed or not'
    })
    completed?: boolean
}
