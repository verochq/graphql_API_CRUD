import {
  Resolver,
  Query,
  Mutation,
  //Subscription
  Args,
} from '@nestjs/graphql';
import { Movie } from './movie.entity';
import { MoviesService } from './movies.service';
//import { SimplePubSubService } from '../subscriptions/pubsub.services';

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(
    private moviesService: MoviesService,
    //private pubSub: SimplePubSubService,
  ) {}

  @Query(() => [Movie])
  async movies(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Query(() => Movie)
  async movie(@Args('id') id: number): Promise<Movie | null> {
    return this.moviesService.findById(id);
  }

  @Mutation(() => Movie)
  async addMovie(
    @Args('title') title: string,
    @Args('year') year: number,
    @Args('rating') rating: number,
  ): Promise<Movie> {
    const movie = this.moviesService.create(title, year, rating);
    //this.pubSub.publish('movieAdded', movie);
    return movie;
  }

  @Mutation(() => Movie)
  async updateMovie(
    @Args('id') id: number,
    @Args('title') title: string,
    @Args('year') year: number,
    @Args('rating') rating: number,
  ): Promise<Movie | null> {
    const movie = this.moviesService.update(id, title, year, rating);
    return movie;
  }

  @Mutation(() => Boolean)
  async deleteMovie(@Args('id') id: number): Promise<boolean> {
    return this.moviesService.delete(id);
  }

  // @Subscription(() => Movie, {
  //   name: 'movieAdded',
  // })
  // movieAdded() {
  //   return this.pubSub.asyncIterator<Movie>('movieAdded');
  // }
}
