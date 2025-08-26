import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MoviesModule } from './movies/movies.module';
import { DatabaseModule } from './db/database.module';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';

@Module({
  imports: [
    //ORM POSTGRES
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,

    MoviesModule,

    //GRAPHQL
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      graphiql: true,
      //installSubscriptionHandlers: true,
      // subscriptions: {
      //   'graphql-ws': true,
      // }
    }),
  ],
  //controllers: [AppController],
})
export class AppModule {}
