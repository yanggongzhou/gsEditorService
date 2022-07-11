import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './Books/books.module';
import { ChapterModule } from '@/Chapters/chapter.module';
import { CharacterModule } from '@/Character/character.module';
import { MaterialModule } from '@/Material/material.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017' + '/' + 'database1'),
    BooksModule,
    ChapterModule,
    CharacterModule,
    MaterialModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
