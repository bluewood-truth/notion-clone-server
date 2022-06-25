import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { NotionsModule } from './notions/notions.module';
import { PagesModule } from './pages/pages.module';
import { BlocksModule } from './blocks/blocks.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    NotionsModule,
    PagesModule,
    BlocksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
