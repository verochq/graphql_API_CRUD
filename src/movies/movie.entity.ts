import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class Movie {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  title: string;

  @Field(() => Int)
  @Column()
  year: number;

  @Field(() => Int)
  @Column()
  rating: number;
}
//ENFOQUE CODE FIRST
//
//
// query {
//   movies {
//     id
//     title
//     year
//     rating
//   }
// }

// # query{
// #   movie(id: 1) {
// #     id
// #     title
// #     year
// #   }
// # }

// # mutation {
// #   addMovie(title: "Aloha", year: 1947, rating: 3) {
// #     id
// #     title
// #     year
// #     rating
// #   }
// # }

// # mutation {
// #   addMovie(title: "Matrix", year: 1999, rating: 5) {
// #     id
// #     title
// #     year
// #     rating
// #   }
// # }

// # mutation {
// #   updateMovie(id: 1, title: "El Padrino: Edición Especial",year: 2005, rating: 5) {
// #     id
// #     title
// #     year
// #     rating
// #   }
// # }

// # mutation {
// #   deleteMovie(id: 2)
// # }

// .env
// PORT=3000

// DB_HOST=localhost
// DB_PORT=5432
// DB_USERNAME=postgres
// DB_PASSWORD=postgres
// DB_DATABASE=movies_db
// DB_SYNC=true
