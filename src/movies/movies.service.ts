import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
  // private movies: Movie[] = [
  //   { id: 1, title: 'The departed', year: 2006, rating: 5 },
  // ];

  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  findAll(): Promise<Movie[]> {
    return this.moviesRepository.find();
  }

  findById(id: number): Promise<Movie | null> {
    return this.moviesRepository.findOneBy({ id });
  }

  create(title: string, year: number, rating: number): Promise<Movie> {
    const newMovie = this.moviesRepository.create({ title, year, rating });
    //this.movies.push(newMovie);
    return this.moviesRepository.save(newMovie);
  }

  async update(
    id: number,
    title?: string,
    year?: number,
    rating?: number,
  ): Promise<Movie | null> {
    const movie = await this.moviesRepository.findOneBy({ id });
    if (!movie) return null;
    if (title) movie.title = title;
    if (year) movie.year = year;
    if (rating) movie.rating = rating;
    return this.moviesRepository.save(movie);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.moviesRepository.delete({ id });
    return result.affected === 1;
  }
}
