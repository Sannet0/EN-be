import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HelloModule } from './hello/hello.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env']
    }),
    HelloModule
  ]
})
export class AppModule {}
