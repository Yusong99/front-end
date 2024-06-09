import { Controller, Get } from '@nestjs/common';

@Controller('name')
export class NameController {
  @Get()
  findAll(): string {
    return 'this is a test';
  }
}
