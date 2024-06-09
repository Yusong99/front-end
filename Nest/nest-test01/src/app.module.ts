import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cat.controller';
import { AppService } from './app.service';
import { NameController } from './name/name.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, NameController],
  providers: [AppService],
})
export class AppModule {}
