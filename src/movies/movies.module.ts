import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesService } from './movies.service';
import { MoviesResolver } from './movies.resolver';
import { Movie } from './movie.entity';
// import { SimplePubSubService } from '../subscriptions/pubsub.services';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MoviesService, MoviesResolver],
})
export class MoviesModule {}
