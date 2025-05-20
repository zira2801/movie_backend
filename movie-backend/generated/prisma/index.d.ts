
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model Episode
 * 
 */
export type Episode = $Result.DefaultSelection<Prisma.$EpisodePayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Actor
 * 
 */
export type Actor = $Result.DefaultSelection<Prisma.$ActorPayload>
/**
 * Model Director
 * 
 */
export type Director = $Result.DefaultSelection<Prisma.$DirectorPayload>
/**
 * Model MovieGenre
 * 
 */
export type MovieGenre = $Result.DefaultSelection<Prisma.$MovieGenrePayload>
/**
 * Model MovieActor
 * 
 */
export type MovieActor = $Result.DefaultSelection<Prisma.$MovieActorPayload>
/**
 * Model MovieDirector
 * 
 */
export type MovieDirector = $Result.DefaultSelection<Prisma.$MovieDirectorPayload>
/**
 * Model WatchHistory
 * 
 */
export type WatchHistory = $Result.DefaultSelection<Prisma.$WatchHistoryPayload>
/**
 * Model WatchList
 * 
 */
export type WatchList = $Result.DefaultSelection<Prisma.$WatchListPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **Episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.EpisodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actor`: Exposes CRUD operations for the **Actor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actors
    * const actors = await prisma.actor.findMany()
    * ```
    */
  get actor(): Prisma.ActorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.director`: Exposes CRUD operations for the **Director** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Directors
    * const directors = await prisma.director.findMany()
    * ```
    */
  get director(): Prisma.DirectorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movieGenre`: Exposes CRUD operations for the **MovieGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieGenres
    * const movieGenres = await prisma.movieGenre.findMany()
    * ```
    */
  get movieGenre(): Prisma.MovieGenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movieActor`: Exposes CRUD operations for the **MovieActor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieActors
    * const movieActors = await prisma.movieActor.findMany()
    * ```
    */
  get movieActor(): Prisma.MovieActorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movieDirector`: Exposes CRUD operations for the **MovieDirector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieDirectors
    * const movieDirectors = await prisma.movieDirector.findMany()
    * ```
    */
  get movieDirector(): Prisma.MovieDirectorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchHistory`: Exposes CRUD operations for the **WatchHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WatchHistories
    * const watchHistories = await prisma.watchHistory.findMany()
    * ```
    */
  get watchHistory(): Prisma.WatchHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchList`: Exposes CRUD operations for the **WatchList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WatchLists
    * const watchLists = await prisma.watchList.findMany()
    * ```
    */
  get watchList(): Prisma.WatchListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Movie: 'Movie',
    Episode: 'Episode',
    Genre: 'Genre',
    Actor: 'Actor',
    Director: 'Director',
    MovieGenre: 'MovieGenre',
    MovieActor: 'MovieActor',
    MovieDirector: 'MovieDirector',
    WatchHistory: 'WatchHistory',
    WatchList: 'WatchList',
    Rating: 'Rating',
    Comment: 'Comment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "movie" | "episode" | "genre" | "actor" | "director" | "movieGenre" | "movieActor" | "movieDirector" | "watchHistory" | "watchList" | "rating" | "comment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      Episode: {
        payload: Prisma.$EpisodePayload<ExtArgs>
        fields: Prisma.EpisodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findFirst: {
            args: Prisma.EpisodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findMany: {
            args: Prisma.EpisodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          create: {
            args: Prisma.EpisodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          createMany: {
            args: Prisma.EpisodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpisodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          delete: {
            args: Prisma.EpisodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          update: {
            args: Prisma.EpisodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          deleteMany: {
            args: Prisma.EpisodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EpisodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          upsert: {
            args: Prisma.EpisodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          aggregate: {
            args: Prisma.EpisodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisode>
          }
          groupBy: {
            args: Prisma.EpisodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodeCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodeCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Actor: {
        payload: Prisma.$ActorPayload<ExtArgs>
        fields: Prisma.ActorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          findFirst: {
            args: Prisma.ActorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          findMany: {
            args: Prisma.ActorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>[]
          }
          create: {
            args: Prisma.ActorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          createMany: {
            args: Prisma.ActorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>[]
          }
          delete: {
            args: Prisma.ActorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          update: {
            args: Prisma.ActorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          deleteMany: {
            args: Prisma.ActorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>[]
          }
          upsert: {
            args: Prisma.ActorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          aggregate: {
            args: Prisma.ActorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActor>
          }
          groupBy: {
            args: Prisma.ActorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActorCountArgs<ExtArgs>
            result: $Utils.Optional<ActorCountAggregateOutputType> | number
          }
        }
      }
      Director: {
        payload: Prisma.$DirectorPayload<ExtArgs>
        fields: Prisma.DirectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>
          }
          findFirst: {
            args: Prisma.DirectorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>
          }
          findMany: {
            args: Prisma.DirectorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>[]
          }
          create: {
            args: Prisma.DirectorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>
          }
          createMany: {
            args: Prisma.DirectorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DirectorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>[]
          }
          delete: {
            args: Prisma.DirectorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>
          }
          update: {
            args: Prisma.DirectorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>
          }
          deleteMany: {
            args: Prisma.DirectorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DirectorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DirectorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>[]
          }
          upsert: {
            args: Prisma.DirectorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>
          }
          aggregate: {
            args: Prisma.DirectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirector>
          }
          groupBy: {
            args: Prisma.DirectorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectorCountArgs<ExtArgs>
            result: $Utils.Optional<DirectorCountAggregateOutputType> | number
          }
        }
      }
      MovieGenre: {
        payload: Prisma.$MovieGenrePayload<ExtArgs>
        fields: Prisma.MovieGenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieGenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieGenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>
          }
          findFirst: {
            args: Prisma.MovieGenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieGenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>
          }
          findMany: {
            args: Prisma.MovieGenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>[]
          }
          create: {
            args: Prisma.MovieGenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>
          }
          createMany: {
            args: Prisma.MovieGenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieGenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>[]
          }
          delete: {
            args: Prisma.MovieGenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>
          }
          update: {
            args: Prisma.MovieGenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>
          }
          deleteMany: {
            args: Prisma.MovieGenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieGenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovieGenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>[]
          }
          upsert: {
            args: Prisma.MovieGenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>
          }
          aggregate: {
            args: Prisma.MovieGenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovieGenre>
          }
          groupBy: {
            args: Prisma.MovieGenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieGenreCountArgs<ExtArgs>
            result: $Utils.Optional<MovieGenreCountAggregateOutputType> | number
          }
        }
      }
      MovieActor: {
        payload: Prisma.$MovieActorPayload<ExtArgs>
        fields: Prisma.MovieActorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieActorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieActorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieActorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieActorPayload>
          }
          findFirst: {
            args: Prisma.MovieActorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieActorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieActorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieActorPayload>
          }
          findMany: {
            args: Prisma.MovieActorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieActorPayload>[]
          }
          create: {
            args: Prisma.MovieActorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieActorPayload>
          }
          createMany: {
            args: Prisma.MovieActorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieActorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieActorPayload>[]
          }
          delete: {
            args: Prisma.MovieActorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieActorPayload>
          }
          update: {
            args: Prisma.MovieActorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieActorPayload>
          }
          deleteMany: {
            args: Prisma.MovieActorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieActorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovieActorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieActorPayload>[]
          }
          upsert: {
            args: Prisma.MovieActorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieActorPayload>
          }
          aggregate: {
            args: Prisma.MovieActorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovieActor>
          }
          groupBy: {
            args: Prisma.MovieActorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieActorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieActorCountArgs<ExtArgs>
            result: $Utils.Optional<MovieActorCountAggregateOutputType> | number
          }
        }
      }
      MovieDirector: {
        payload: Prisma.$MovieDirectorPayload<ExtArgs>
        fields: Prisma.MovieDirectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieDirectorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDirectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieDirectorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDirectorPayload>
          }
          findFirst: {
            args: Prisma.MovieDirectorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDirectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieDirectorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDirectorPayload>
          }
          findMany: {
            args: Prisma.MovieDirectorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDirectorPayload>[]
          }
          create: {
            args: Prisma.MovieDirectorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDirectorPayload>
          }
          createMany: {
            args: Prisma.MovieDirectorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieDirectorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDirectorPayload>[]
          }
          delete: {
            args: Prisma.MovieDirectorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDirectorPayload>
          }
          update: {
            args: Prisma.MovieDirectorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDirectorPayload>
          }
          deleteMany: {
            args: Prisma.MovieDirectorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieDirectorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovieDirectorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDirectorPayload>[]
          }
          upsert: {
            args: Prisma.MovieDirectorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDirectorPayload>
          }
          aggregate: {
            args: Prisma.MovieDirectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovieDirector>
          }
          groupBy: {
            args: Prisma.MovieDirectorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieDirectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieDirectorCountArgs<ExtArgs>
            result: $Utils.Optional<MovieDirectorCountAggregateOutputType> | number
          }
        }
      }
      WatchHistory: {
        payload: Prisma.$WatchHistoryPayload<ExtArgs>
        fields: Prisma.WatchHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>
          }
          findFirst: {
            args: Prisma.WatchHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>
          }
          findMany: {
            args: Prisma.WatchHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>[]
          }
          create: {
            args: Prisma.WatchHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>
          }
          createMany: {
            args: Prisma.WatchHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>[]
          }
          delete: {
            args: Prisma.WatchHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>
          }
          update: {
            args: Prisma.WatchHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>
          }
          deleteMany: {
            args: Prisma.WatchHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>[]
          }
          upsert: {
            args: Prisma.WatchHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>
          }
          aggregate: {
            args: Prisma.WatchHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchHistory>
          }
          groupBy: {
            args: Prisma.WatchHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<WatchHistoryCountAggregateOutputType> | number
          }
        }
      }
      WatchList: {
        payload: Prisma.$WatchListPayload<ExtArgs>
        fields: Prisma.WatchListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          findFirst: {
            args: Prisma.WatchListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          findMany: {
            args: Prisma.WatchListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>[]
          }
          create: {
            args: Prisma.WatchListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          createMany: {
            args: Prisma.WatchListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>[]
          }
          delete: {
            args: Prisma.WatchListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          update: {
            args: Prisma.WatchListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          deleteMany: {
            args: Prisma.WatchListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>[]
          }
          upsert: {
            args: Prisma.WatchListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          aggregate: {
            args: Prisma.WatchListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchList>
          }
          groupBy: {
            args: Prisma.WatchListGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchListGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchListCountArgs<ExtArgs>
            result: $Utils.Optional<WatchListCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    movie?: MovieOmit
    episode?: EpisodeOmit
    genre?: GenreOmit
    actor?: ActorOmit
    director?: DirectorOmit
    movieGenre?: MovieGenreOmit
    movieActor?: MovieActorOmit
    movieDirector?: MovieDirectorOmit
    watchHistory?: WatchHistoryOmit
    watchList?: WatchListOmit
    rating?: RatingOmit
    comment?: CommentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    watchHistory: number
    watchLists: number
    ratings: number
    comments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchHistory?: boolean | UserCountOutputTypeCountWatchHistoryArgs
    watchLists?: boolean | UserCountOutputTypeCountWatchListsArgs
    ratings?: boolean | UserCountOutputTypeCountRatingsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    episodes: number
    ratings: number
    comments: number
    watchHistory: number
    watchLists: number
    movieGenres: number
    movieActors: number
    movieDirectors: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | MovieCountOutputTypeCountEpisodesArgs
    ratings?: boolean | MovieCountOutputTypeCountRatingsArgs
    comments?: boolean | MovieCountOutputTypeCountCommentsArgs
    watchHistory?: boolean | MovieCountOutputTypeCountWatchHistoryArgs
    watchLists?: boolean | MovieCountOutputTypeCountWatchListsArgs
    movieGenres?: boolean | MovieCountOutputTypeCountMovieGenresArgs
    movieActors?: boolean | MovieCountOutputTypeCountMovieActorsArgs
    movieDirectors?: boolean | MovieCountOutputTypeCountMovieDirectorsArgs
  }

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountWatchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchHistoryWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountWatchListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchListWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountMovieGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieGenreWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountMovieActorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieActorWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountMovieDirectorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieDirectorWhereInput
  }


  /**
   * Count Type EpisodeCountOutputType
   */

  export type EpisodeCountOutputType = {
    watchHistory: number
  }

  export type EpisodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchHistory?: boolean | EpisodeCountOutputTypeCountWatchHistoryArgs
  }

  // Custom InputTypes
  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodeCountOutputType
     */
    select?: EpisodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeCountWatchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchHistoryWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    movieGenres: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieGenres?: boolean | GenreCountOutputTypeCountMovieGenresArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountMovieGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieGenreWhereInput
  }


  /**
   * Count Type ActorCountOutputType
   */

  export type ActorCountOutputType = {
    movieActors: number
  }

  export type ActorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieActors?: boolean | ActorCountOutputTypeCountMovieActorsArgs
  }

  // Custom InputTypes
  /**
   * ActorCountOutputType without action
   */
  export type ActorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorCountOutputType
     */
    select?: ActorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActorCountOutputType without action
   */
  export type ActorCountOutputTypeCountMovieActorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieActorWhereInput
  }


  /**
   * Count Type DirectorCountOutputType
   */

  export type DirectorCountOutputType = {
    movieDirectors: number
  }

  export type DirectorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieDirectors?: boolean | DirectorCountOutputTypeCountMovieDirectorsArgs
  }

  // Custom InputTypes
  /**
   * DirectorCountOutputType without action
   */
  export type DirectorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectorCountOutputType
     */
    select?: DirectorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DirectorCountOutputType without action
   */
  export type DirectorCountOutputTypeCountMovieDirectorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieDirectorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    fullName: string | null
    avatar: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    fullName: string | null
    avatar: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    fullName: number
    avatar: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    fullName?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    fullName?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    fullName?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    password: string
    fullName: string | null
    avatar: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    watchHistory?: boolean | User$watchHistoryArgs<ExtArgs>
    watchLists?: boolean | User$watchListsArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "fullName" | "avatar" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchHistory?: boolean | User$watchHistoryArgs<ExtArgs>
    watchLists?: boolean | User$watchListsArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      watchHistory: Prisma.$WatchHistoryPayload<ExtArgs>[]
      watchLists: Prisma.$WatchListPayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      password: string
      fullName: string | null
      avatar: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    watchHistory<T extends User$watchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$watchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchLists<T extends User$watchListsArgs<ExtArgs> = {}>(args?: Subset<T, User$watchListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends User$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.watchHistory
   */
  export type User$watchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    where?: WatchHistoryWhereInput
    orderBy?: WatchHistoryOrderByWithRelationInput | WatchHistoryOrderByWithRelationInput[]
    cursor?: WatchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchHistoryScalarFieldEnum | WatchHistoryScalarFieldEnum[]
  }

  /**
   * User.watchLists
   */
  export type User$watchListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    where?: WatchListWhereInput
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    cursor?: WatchListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchListScalarFieldEnum | WatchListScalarFieldEnum[]
  }

  /**
   * User.ratings
   */
  export type User$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    id: number | null
    duration: number | null
  }

  export type MovieSumAggregateOutputType = {
    id: number | null
    duration: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    poster: string | null
    trailer: string | null
    releaseDate: Date | null
    duration: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    poster: string | null
    trailer: string | null
    releaseDate: Date | null
    duration: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    title: number
    description: number
    poster: number
    trailer: number
    releaseDate: number
    duration: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    id?: true
    duration?: true
  }

  export type MovieSumAggregateInputType = {
    id?: true
    duration?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    poster?: true
    trailer?: true
    releaseDate?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    poster?: true
    trailer?: true
    releaseDate?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    poster?: true
    trailer?: true
    releaseDate?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: number
    title: string
    description: string | null
    poster: string | null
    trailer: string | null
    releaseDate: Date | null
    duration: number | null
    createdAt: Date
    updatedAt: Date
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    poster?: boolean
    trailer?: boolean
    releaseDate?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    episodes?: boolean | Movie$episodesArgs<ExtArgs>
    ratings?: boolean | Movie$ratingsArgs<ExtArgs>
    comments?: boolean | Movie$commentsArgs<ExtArgs>
    watchHistory?: boolean | Movie$watchHistoryArgs<ExtArgs>
    watchLists?: boolean | Movie$watchListsArgs<ExtArgs>
    movieGenres?: boolean | Movie$movieGenresArgs<ExtArgs>
    movieActors?: boolean | Movie$movieActorsArgs<ExtArgs>
    movieDirectors?: boolean | Movie$movieDirectorsArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    poster?: boolean
    trailer?: boolean
    releaseDate?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    poster?: boolean
    trailer?: boolean
    releaseDate?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    poster?: boolean
    trailer?: boolean
    releaseDate?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "poster" | "trailer" | "releaseDate" | "duration" | "createdAt" | "updatedAt", ExtArgs["result"]["movie"]>
  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | Movie$episodesArgs<ExtArgs>
    ratings?: boolean | Movie$ratingsArgs<ExtArgs>
    comments?: boolean | Movie$commentsArgs<ExtArgs>
    watchHistory?: boolean | Movie$watchHistoryArgs<ExtArgs>
    watchLists?: boolean | Movie$watchListsArgs<ExtArgs>
    movieGenres?: boolean | Movie$movieGenresArgs<ExtArgs>
    movieActors?: boolean | Movie$movieActorsArgs<ExtArgs>
    movieDirectors?: boolean | Movie$movieDirectorsArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MovieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MovieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      episodes: Prisma.$EpisodePayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      watchHistory: Prisma.$WatchHistoryPayload<ExtArgs>[]
      watchLists: Prisma.$WatchListPayload<ExtArgs>[]
      movieGenres: Prisma.$MovieGenrePayload<ExtArgs>[]
      movieActors: Prisma.$MovieActorPayload<ExtArgs>[]
      movieDirectors: Prisma.$MovieDirectorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      poster: string | null
      trailer: string | null
      releaseDate: Date | null
      duration: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieFindManyArgs>(args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends MovieCreateArgs>(args: SelectSubset<T, MovieCreateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCreateManyArgs>(args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {MovieCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends MovieDeleteArgs>(args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieUpdateArgs>(args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDeleteManyArgs>(args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieUpdateManyArgs>(args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies and returns the data updated in the database.
     * @param {MovieUpdateManyAndReturnArgs} args - Arguments to update many Movies.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovieUpdateManyAndReturnArgs>(args: SelectSubset<T, MovieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    episodes<T extends Movie$episodesArgs<ExtArgs> = {}>(args?: Subset<T, Movie$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Movie$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Movie$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchHistory<T extends Movie$watchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Movie$watchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchLists<T extends Movie$watchListsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$watchListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movieGenres<T extends Movie$movieGenresArgs<ExtArgs> = {}>(args?: Subset<T, Movie$movieGenresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movieActors<T extends Movie$movieActorsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$movieActorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieActorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movieDirectors<T extends Movie$movieDirectorsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$movieDirectorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieDirectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'Int'>
    readonly title: FieldRef<"Movie", 'String'>
    readonly description: FieldRef<"Movie", 'String'>
    readonly poster: FieldRef<"Movie", 'String'>
    readonly trailer: FieldRef<"Movie", 'String'>
    readonly releaseDate: FieldRef<"Movie", 'DateTime'>
    readonly duration: FieldRef<"Movie", 'Int'>
    readonly createdAt: FieldRef<"Movie", 'DateTime'>
    readonly updatedAt: FieldRef<"Movie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie createManyAndReturn
   */
  export type MovieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie updateManyAndReturn
   */
  export type MovieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movie.episodes
   */
  export type Movie$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Movie.ratings
   */
  export type Movie$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Movie.comments
   */
  export type Movie$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Movie.watchHistory
   */
  export type Movie$watchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    where?: WatchHistoryWhereInput
    orderBy?: WatchHistoryOrderByWithRelationInput | WatchHistoryOrderByWithRelationInput[]
    cursor?: WatchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchHistoryScalarFieldEnum | WatchHistoryScalarFieldEnum[]
  }

  /**
   * Movie.watchLists
   */
  export type Movie$watchListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    where?: WatchListWhereInput
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    cursor?: WatchListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchListScalarFieldEnum | WatchListScalarFieldEnum[]
  }

  /**
   * Movie.movieGenres
   */
  export type Movie$movieGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenre
     */
    omit?: MovieGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    where?: MovieGenreWhereInput
    orderBy?: MovieGenreOrderByWithRelationInput | MovieGenreOrderByWithRelationInput[]
    cursor?: MovieGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieGenreScalarFieldEnum | MovieGenreScalarFieldEnum[]
  }

  /**
   * Movie.movieActors
   */
  export type Movie$movieActorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieActor
     */
    select?: MovieActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieActor
     */
    omit?: MovieActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieActorInclude<ExtArgs> | null
    where?: MovieActorWhereInput
    orderBy?: MovieActorOrderByWithRelationInput | MovieActorOrderByWithRelationInput[]
    cursor?: MovieActorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieActorScalarFieldEnum | MovieActorScalarFieldEnum[]
  }

  /**
   * Movie.movieDirectors
   */
  export type Movie$movieDirectorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDirector
     */
    select?: MovieDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDirector
     */
    omit?: MovieDirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDirectorInclude<ExtArgs> | null
    where?: MovieDirectorWhereInput
    orderBy?: MovieDirectorOrderByWithRelationInput | MovieDirectorOrderByWithRelationInput[]
    cursor?: MovieDirectorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieDirectorScalarFieldEnum | MovieDirectorScalarFieldEnum[]
  }

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
  }


  /**
   * Model Episode
   */

  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    id: number | null
    movieId: number | null
    episodeNumber: number | null
    duration: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    id: number | null
    movieId: number | null
    episodeNumber: number | null
    duration: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: number | null
    movieId: number | null
    episodeNumber: number | null
    title: string | null
    description: string | null
    videoUrl: string | null
    duration: number | null
    releaseDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: number | null
    movieId: number | null
    episodeNumber: number | null
    title: string | null
    description: string | null
    videoUrl: string | null
    duration: number | null
    releaseDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    movieId: number
    episodeNumber: number
    title: number
    description: number
    videoUrl: number
    duration: number
    releaseDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    id?: true
    movieId?: true
    episodeNumber?: true
    duration?: true
  }

  export type EpisodeSumAggregateInputType = {
    id?: true
    movieId?: true
    episodeNumber?: true
    duration?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    movieId?: true
    episodeNumber?: true
    title?: true
    description?: true
    videoUrl?: true
    duration?: true
    releaseDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    movieId?: true
    episodeNumber?: true
    title?: true
    description?: true
    videoUrl?: true
    duration?: true
    releaseDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    movieId?: true
    episodeNumber?: true
    title?: true
    description?: true
    videoUrl?: true
    duration?: true
    releaseDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episode to aggregate.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type EpisodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithAggregationInput | EpisodeOrderByWithAggregationInput[]
    by: EpisodeScalarFieldEnum[] | EpisodeScalarFieldEnum
    having?: EpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }

  export type EpisodeGroupByOutputType = {
    id: number
    movieId: number
    episodeNumber: number
    title: string | null
    description: string | null
    videoUrl: string
    duration: number | null
    releaseDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type EpisodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    episodeNumber?: boolean
    title?: boolean
    description?: boolean
    videoUrl?: boolean
    duration?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    watchHistory?: boolean | Episode$watchHistoryArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    episodeNumber?: boolean
    title?: boolean
    description?: boolean
    videoUrl?: boolean
    duration?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    episodeNumber?: boolean
    title?: boolean
    description?: boolean
    videoUrl?: boolean
    duration?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectScalar = {
    id?: boolean
    movieId?: boolean
    episodeNumber?: boolean
    title?: boolean
    description?: boolean
    videoUrl?: boolean
    duration?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EpisodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "movieId" | "episodeNumber" | "title" | "description" | "videoUrl" | "duration" | "releaseDate" | "createdAt" | "updatedAt", ExtArgs["result"]["episode"]>
  export type EpisodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    watchHistory?: boolean | Episode$watchHistoryArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $EpisodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Episode"
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs>
      watchHistory: Prisma.$WatchHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      movieId: number
      episodeNumber: number
      title: string | null
      description: string | null
      videoUrl: string
      duration: number | null
      releaseDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["episode"]>
    composites: {}
  }

  type EpisodeGetPayload<S extends boolean | null | undefined | EpisodeDefaultArgs> = $Result.GetResult<Prisma.$EpisodePayload, S>

  type EpisodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpisodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface EpisodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Episode'], meta: { name: 'Episode' } }
    /**
     * Find zero or one Episode that matches the filter.
     * @param {EpisodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpisodeFindUniqueArgs>(args: SelectSubset<T, EpisodeFindUniqueArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Episode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpisodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs>(args: SelectSubset<T, EpisodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpisodeFindFirstArgs>(args?: SelectSubset<T, EpisodeFindFirstArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs>(args?: SelectSubset<T, EpisodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpisodeFindManyArgs>(args?: SelectSubset<T, EpisodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Episode.
     * @param {EpisodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
     */
    create<T extends EpisodeCreateArgs>(args: SelectSubset<T, EpisodeCreateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Episodes.
     * @param {EpisodeCreateManyArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpisodeCreateManyArgs>(args?: SelectSubset<T, EpisodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Episodes and returns the data saved in the database.
     * @param {EpisodeCreateManyAndReturnArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpisodeCreateManyAndReturnArgs>(args?: SelectSubset<T, EpisodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Episode.
     * @param {EpisodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
     */
    delete<T extends EpisodeDeleteArgs>(args: SelectSubset<T, EpisodeDeleteArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Episode.
     * @param {EpisodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpisodeUpdateArgs>(args: SelectSubset<T, EpisodeUpdateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpisodeDeleteManyArgs>(args?: SelectSubset<T, EpisodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpisodeUpdateManyArgs>(args: SelectSubset<T, EpisodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes and returns the data updated in the database.
     * @param {EpisodeUpdateManyAndReturnArgs} args - Arguments to update many Episodes.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EpisodeUpdateManyAndReturnArgs>(args: SelectSubset<T, EpisodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Episode.
     * @param {EpisodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
     */
    upsert<T extends EpisodeUpsertArgs>(args: SelectSubset<T, EpisodeUpsertArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodeCountArgs>(
      args?: Subset<T, EpisodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodeGroupByArgs['orderBy'] }
        : { orderBy?: EpisodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Episode model
   */
  readonly fields: EpisodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    watchHistory<T extends Episode$watchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Episode$watchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Episode model
   */
  interface EpisodeFieldRefs {
    readonly id: FieldRef<"Episode", 'Int'>
    readonly movieId: FieldRef<"Episode", 'Int'>
    readonly episodeNumber: FieldRef<"Episode", 'Int'>
    readonly title: FieldRef<"Episode", 'String'>
    readonly description: FieldRef<"Episode", 'String'>
    readonly videoUrl: FieldRef<"Episode", 'String'>
    readonly duration: FieldRef<"Episode", 'Int'>
    readonly releaseDate: FieldRef<"Episode", 'DateTime'>
    readonly createdAt: FieldRef<"Episode", 'DateTime'>
    readonly updatedAt: FieldRef<"Episode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Episode findUnique
   */
  export type EpisodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findUniqueOrThrow
   */
  export type EpisodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findFirst
   */
  export type EpisodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findFirstOrThrow
   */
  export type EpisodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findMany
   */
  export type EpisodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode create
   */
  export type EpisodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Episode.
     */
    data: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
  }

  /**
   * Episode createMany
   */
  export type EpisodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Episode createManyAndReturn
   */
  export type EpisodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode update
   */
  export type EpisodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Episode.
     */
    data: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
    /**
     * Choose, which Episode to update.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode updateMany
   */
  export type EpisodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
  }

  /**
   * Episode updateManyAndReturn
   */
  export type EpisodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode upsert
   */
  export type EpisodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Episode to update in case it exists.
     */
    where: EpisodeWhereUniqueInput
    /**
     * In case the Episode found by the `where` argument doesn't exist, create a new Episode with this data.
     */
    create: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
    /**
     * In case the Episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
  }

  /**
   * Episode delete
   */
  export type EpisodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter which Episode to delete.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode deleteMany
   */
  export type EpisodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to delete.
     */
    limit?: number
  }

  /**
   * Episode.watchHistory
   */
  export type Episode$watchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    where?: WatchHistoryWhereInput
    orderBy?: WatchHistoryOrderByWithRelationInput | WatchHistoryOrderByWithRelationInput[]
    cursor?: WatchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchHistoryScalarFieldEnum | WatchHistoryScalarFieldEnum[]
  }

  /**
   * Episode without action
   */
  export type EpisodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movieGenres?: boolean | Genre$movieGenresArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieGenres?: boolean | Genre$movieGenresArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      movieGenres: Prisma.$MovieGenrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movieGenres<T extends Genre$movieGenresArgs<ExtArgs> = {}>(args?: Subset<T, Genre$movieGenresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'Int'>
    readonly name: FieldRef<"Genre", 'String'>
    readonly description: FieldRef<"Genre", 'String'>
    readonly createdAt: FieldRef<"Genre", 'DateTime'>
    readonly updatedAt: FieldRef<"Genre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.movieGenres
   */
  export type Genre$movieGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenre
     */
    omit?: MovieGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    where?: MovieGenreWhereInput
    orderBy?: MovieGenreOrderByWithRelationInput | MovieGenreOrderByWithRelationInput[]
    cursor?: MovieGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieGenreScalarFieldEnum | MovieGenreScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model Actor
   */

  export type AggregateActor = {
    _count: ActorCountAggregateOutputType | null
    _avg: ActorAvgAggregateOutputType | null
    _sum: ActorSumAggregateOutputType | null
    _min: ActorMinAggregateOutputType | null
    _max: ActorMaxAggregateOutputType | null
  }

  export type ActorAvgAggregateOutputType = {
    id: number | null
  }

  export type ActorSumAggregateOutputType = {
    id: number | null
  }

  export type ActorMinAggregateOutputType = {
    id: number | null
    name: string | null
    bio: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    bio: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActorCountAggregateOutputType = {
    id: number
    name: number
    bio: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActorAvgAggregateInputType = {
    id?: true
  }

  export type ActorSumAggregateInputType = {
    id?: true
  }

  export type ActorMinAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActorMaxAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActorCountAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actor to aggregate.
     */
    where?: ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actors
    **/
    _count?: true | ActorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActorMaxAggregateInputType
  }

  export type GetActorAggregateType<T extends ActorAggregateArgs> = {
        [P in keyof T & keyof AggregateActor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActor[P]>
      : GetScalarType<T[P], AggregateActor[P]>
  }




  export type ActorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActorWhereInput
    orderBy?: ActorOrderByWithAggregationInput | ActorOrderByWithAggregationInput[]
    by: ActorScalarFieldEnum[] | ActorScalarFieldEnum
    having?: ActorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActorCountAggregateInputType | true
    _avg?: ActorAvgAggregateInputType
    _sum?: ActorSumAggregateInputType
    _min?: ActorMinAggregateInputType
    _max?: ActorMaxAggregateInputType
  }

  export type ActorGroupByOutputType = {
    id: number
    name: string
    bio: string | null
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: ActorCountAggregateOutputType | null
    _avg: ActorAvgAggregateOutputType | null
    _sum: ActorSumAggregateOutputType | null
    _min: ActorMinAggregateOutputType | null
    _max: ActorMaxAggregateOutputType | null
  }

  type GetActorGroupByPayload<T extends ActorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActorGroupByOutputType[P]>
            : GetScalarType<T[P], ActorGroupByOutputType[P]>
        }
      >
    >


  export type ActorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movieActors?: boolean | Actor$movieActorsArgs<ExtArgs>
    _count?: boolean | ActorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actor"]>

  export type ActorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["actor"]>

  export type ActorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["actor"]>

  export type ActorSelectScalar = {
    id?: boolean
    name?: boolean
    bio?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ActorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "bio" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["actor"]>
  export type ActorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieActors?: boolean | Actor$movieActorsArgs<ExtArgs>
    _count?: boolean | ActorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ActorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ActorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actor"
    objects: {
      movieActors: Prisma.$MovieActorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      bio: string | null
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["actor"]>
    composites: {}
  }

  type ActorGetPayload<S extends boolean | null | undefined | ActorDefaultArgs> = $Result.GetResult<Prisma.$ActorPayload, S>

  type ActorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActorCountAggregateInputType | true
    }

  export interface ActorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actor'], meta: { name: 'Actor' } }
    /**
     * Find zero or one Actor that matches the filter.
     * @param {ActorFindUniqueArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActorFindUniqueArgs>(args: SelectSubset<T, ActorFindUniqueArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActorFindUniqueOrThrowArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActorFindUniqueOrThrowArgs>(args: SelectSubset<T, ActorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorFindFirstArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActorFindFirstArgs>(args?: SelectSubset<T, ActorFindFirstArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorFindFirstOrThrowArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActorFindFirstOrThrowArgs>(args?: SelectSubset<T, ActorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actors
     * const actors = await prisma.actor.findMany()
     * 
     * // Get first 10 Actors
     * const actors = await prisma.actor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actorWithIdOnly = await prisma.actor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActorFindManyArgs>(args?: SelectSubset<T, ActorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actor.
     * @param {ActorCreateArgs} args - Arguments to create a Actor.
     * @example
     * // Create one Actor
     * const Actor = await prisma.actor.create({
     *   data: {
     *     // ... data to create a Actor
     *   }
     * })
     * 
     */
    create<T extends ActorCreateArgs>(args: SelectSubset<T, ActorCreateArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actors.
     * @param {ActorCreateManyArgs} args - Arguments to create many Actors.
     * @example
     * // Create many Actors
     * const actor = await prisma.actor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActorCreateManyArgs>(args?: SelectSubset<T, ActorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actors and returns the data saved in the database.
     * @param {ActorCreateManyAndReturnArgs} args - Arguments to create many Actors.
     * @example
     * // Create many Actors
     * const actor = await prisma.actor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actors and only return the `id`
     * const actorWithIdOnly = await prisma.actor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActorCreateManyAndReturnArgs>(args?: SelectSubset<T, ActorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Actor.
     * @param {ActorDeleteArgs} args - Arguments to delete one Actor.
     * @example
     * // Delete one Actor
     * const Actor = await prisma.actor.delete({
     *   where: {
     *     // ... filter to delete one Actor
     *   }
     * })
     * 
     */
    delete<T extends ActorDeleteArgs>(args: SelectSubset<T, ActorDeleteArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actor.
     * @param {ActorUpdateArgs} args - Arguments to update one Actor.
     * @example
     * // Update one Actor
     * const actor = await prisma.actor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActorUpdateArgs>(args: SelectSubset<T, ActorUpdateArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actors.
     * @param {ActorDeleteManyArgs} args - Arguments to filter Actors to delete.
     * @example
     * // Delete a few Actors
     * const { count } = await prisma.actor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActorDeleteManyArgs>(args?: SelectSubset<T, ActorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actors
     * const actor = await prisma.actor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActorUpdateManyArgs>(args: SelectSubset<T, ActorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actors and returns the data updated in the database.
     * @param {ActorUpdateManyAndReturnArgs} args - Arguments to update many Actors.
     * @example
     * // Update many Actors
     * const actor = await prisma.actor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actors and only return the `id`
     * const actorWithIdOnly = await prisma.actor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActorUpdateManyAndReturnArgs>(args: SelectSubset<T, ActorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Actor.
     * @param {ActorUpsertArgs} args - Arguments to update or create a Actor.
     * @example
     * // Update or create a Actor
     * const actor = await prisma.actor.upsert({
     *   create: {
     *     // ... data to create a Actor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actor we want to update
     *   }
     * })
     */
    upsert<T extends ActorUpsertArgs>(args: SelectSubset<T, ActorUpsertArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorCountArgs} args - Arguments to filter Actors to count.
     * @example
     * // Count the number of Actors
     * const count = await prisma.actor.count({
     *   where: {
     *     // ... the filter for the Actors we want to count
     *   }
     * })
    **/
    count<T extends ActorCountArgs>(
      args?: Subset<T, ActorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActorAggregateArgs>(args: Subset<T, ActorAggregateArgs>): Prisma.PrismaPromise<GetActorAggregateType<T>>

    /**
     * Group by Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActorGroupByArgs['orderBy'] }
        : { orderBy?: ActorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actor model
   */
  readonly fields: ActorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movieActors<T extends Actor$movieActorsArgs<ExtArgs> = {}>(args?: Subset<T, Actor$movieActorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieActorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Actor model
   */
  interface ActorFieldRefs {
    readonly id: FieldRef<"Actor", 'Int'>
    readonly name: FieldRef<"Actor", 'String'>
    readonly bio: FieldRef<"Actor", 'String'>
    readonly avatar: FieldRef<"Actor", 'String'>
    readonly createdAt: FieldRef<"Actor", 'DateTime'>
    readonly updatedAt: FieldRef<"Actor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Actor findUnique
   */
  export type ActorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter, which Actor to fetch.
     */
    where: ActorWhereUniqueInput
  }

  /**
   * Actor findUniqueOrThrow
   */
  export type ActorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter, which Actor to fetch.
     */
    where: ActorWhereUniqueInput
  }

  /**
   * Actor findFirst
   */
  export type ActorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter, which Actor to fetch.
     */
    where?: ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actors.
     */
    cursor?: ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actors.
     */
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[]
  }

  /**
   * Actor findFirstOrThrow
   */
  export type ActorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter, which Actor to fetch.
     */
    where?: ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actors.
     */
    cursor?: ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actors.
     */
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[]
  }

  /**
   * Actor findMany
   */
  export type ActorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter, which Actors to fetch.
     */
    where?: ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actors.
     */
    cursor?: ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[]
  }

  /**
   * Actor create
   */
  export type ActorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * The data needed to create a Actor.
     */
    data: XOR<ActorCreateInput, ActorUncheckedCreateInput>
  }

  /**
   * Actor createMany
   */
  export type ActorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actors.
     */
    data: ActorCreateManyInput | ActorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actor createManyAndReturn
   */
  export type ActorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * The data used to create many Actors.
     */
    data: ActorCreateManyInput | ActorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actor update
   */
  export type ActorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * The data needed to update a Actor.
     */
    data: XOR<ActorUpdateInput, ActorUncheckedUpdateInput>
    /**
     * Choose, which Actor to update.
     */
    where: ActorWhereUniqueInput
  }

  /**
   * Actor updateMany
   */
  export type ActorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actors.
     */
    data: XOR<ActorUpdateManyMutationInput, ActorUncheckedUpdateManyInput>
    /**
     * Filter which Actors to update
     */
    where?: ActorWhereInput
    /**
     * Limit how many Actors to update.
     */
    limit?: number
  }

  /**
   * Actor updateManyAndReturn
   */
  export type ActorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * The data used to update Actors.
     */
    data: XOR<ActorUpdateManyMutationInput, ActorUncheckedUpdateManyInput>
    /**
     * Filter which Actors to update
     */
    where?: ActorWhereInput
    /**
     * Limit how many Actors to update.
     */
    limit?: number
  }

  /**
   * Actor upsert
   */
  export type ActorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * The filter to search for the Actor to update in case it exists.
     */
    where: ActorWhereUniqueInput
    /**
     * In case the Actor found by the `where` argument doesn't exist, create a new Actor with this data.
     */
    create: XOR<ActorCreateInput, ActorUncheckedCreateInput>
    /**
     * In case the Actor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActorUpdateInput, ActorUncheckedUpdateInput>
  }

  /**
   * Actor delete
   */
  export type ActorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter which Actor to delete.
     */
    where: ActorWhereUniqueInput
  }

  /**
   * Actor deleteMany
   */
  export type ActorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actors to delete
     */
    where?: ActorWhereInput
    /**
     * Limit how many Actors to delete.
     */
    limit?: number
  }

  /**
   * Actor.movieActors
   */
  export type Actor$movieActorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieActor
     */
    select?: MovieActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieActor
     */
    omit?: MovieActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieActorInclude<ExtArgs> | null
    where?: MovieActorWhereInput
    orderBy?: MovieActorOrderByWithRelationInput | MovieActorOrderByWithRelationInput[]
    cursor?: MovieActorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieActorScalarFieldEnum | MovieActorScalarFieldEnum[]
  }

  /**
   * Actor without action
   */
  export type ActorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
  }


  /**
   * Model Director
   */

  export type AggregateDirector = {
    _count: DirectorCountAggregateOutputType | null
    _avg: DirectorAvgAggregateOutputType | null
    _sum: DirectorSumAggregateOutputType | null
    _min: DirectorMinAggregateOutputType | null
    _max: DirectorMaxAggregateOutputType | null
  }

  export type DirectorAvgAggregateOutputType = {
    id: number | null
  }

  export type DirectorSumAggregateOutputType = {
    id: number | null
  }

  export type DirectorMinAggregateOutputType = {
    id: number | null
    name: string | null
    bio: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    bio: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectorCountAggregateOutputType = {
    id: number
    name: number
    bio: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DirectorAvgAggregateInputType = {
    id?: true
  }

  export type DirectorSumAggregateInputType = {
    id?: true
  }

  export type DirectorMinAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectorMaxAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectorCountAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DirectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Director to aggregate.
     */
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     */
    orderBy?: DirectorOrderByWithRelationInput | DirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Directors
    **/
    _count?: true | DirectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirectorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirectorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectorMaxAggregateInputType
  }

  export type GetDirectorAggregateType<T extends DirectorAggregateArgs> = {
        [P in keyof T & keyof AggregateDirector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirector[P]>
      : GetScalarType<T[P], AggregateDirector[P]>
  }




  export type DirectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectorWhereInput
    orderBy?: DirectorOrderByWithAggregationInput | DirectorOrderByWithAggregationInput[]
    by: DirectorScalarFieldEnum[] | DirectorScalarFieldEnum
    having?: DirectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectorCountAggregateInputType | true
    _avg?: DirectorAvgAggregateInputType
    _sum?: DirectorSumAggregateInputType
    _min?: DirectorMinAggregateInputType
    _max?: DirectorMaxAggregateInputType
  }

  export type DirectorGroupByOutputType = {
    id: number
    name: string
    bio: string | null
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: DirectorCountAggregateOutputType | null
    _avg: DirectorAvgAggregateOutputType | null
    _sum: DirectorSumAggregateOutputType | null
    _min: DirectorMinAggregateOutputType | null
    _max: DirectorMaxAggregateOutputType | null
  }

  type GetDirectorGroupByPayload<T extends DirectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectorGroupByOutputType[P]>
            : GetScalarType<T[P], DirectorGroupByOutputType[P]>
        }
      >
    >


  export type DirectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movieDirectors?: boolean | Director$movieDirectorsArgs<ExtArgs>
    _count?: boolean | DirectorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["director"]>

  export type DirectorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["director"]>

  export type DirectorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["director"]>

  export type DirectorSelectScalar = {
    id?: boolean
    name?: boolean
    bio?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DirectorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "bio" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["director"]>
  export type DirectorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieDirectors?: boolean | Director$movieDirectorsArgs<ExtArgs>
    _count?: boolean | DirectorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DirectorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DirectorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DirectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Director"
    objects: {
      movieDirectors: Prisma.$MovieDirectorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      bio: string | null
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["director"]>
    composites: {}
  }

  type DirectorGetPayload<S extends boolean | null | undefined | DirectorDefaultArgs> = $Result.GetResult<Prisma.$DirectorPayload, S>

  type DirectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DirectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DirectorCountAggregateInputType | true
    }

  export interface DirectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Director'], meta: { name: 'Director' } }
    /**
     * Find zero or one Director that matches the filter.
     * @param {DirectorFindUniqueArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectorFindUniqueArgs>(args: SelectSubset<T, DirectorFindUniqueArgs<ExtArgs>>): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Director that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DirectorFindUniqueOrThrowArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectorFindUniqueOrThrowArgs>(args: SelectSubset<T, DirectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Director that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorFindFirstArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectorFindFirstArgs>(args?: SelectSubset<T, DirectorFindFirstArgs<ExtArgs>>): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Director that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorFindFirstOrThrowArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectorFindFirstOrThrowArgs>(args?: SelectSubset<T, DirectorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Directors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Directors
     * const directors = await prisma.director.findMany()
     * 
     * // Get first 10 Directors
     * const directors = await prisma.director.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directorWithIdOnly = await prisma.director.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DirectorFindManyArgs>(args?: SelectSubset<T, DirectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Director.
     * @param {DirectorCreateArgs} args - Arguments to create a Director.
     * @example
     * // Create one Director
     * const Director = await prisma.director.create({
     *   data: {
     *     // ... data to create a Director
     *   }
     * })
     * 
     */
    create<T extends DirectorCreateArgs>(args: SelectSubset<T, DirectorCreateArgs<ExtArgs>>): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Directors.
     * @param {DirectorCreateManyArgs} args - Arguments to create many Directors.
     * @example
     * // Create many Directors
     * const director = await prisma.director.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DirectorCreateManyArgs>(args?: SelectSubset<T, DirectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Directors and returns the data saved in the database.
     * @param {DirectorCreateManyAndReturnArgs} args - Arguments to create many Directors.
     * @example
     * // Create many Directors
     * const director = await prisma.director.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Directors and only return the `id`
     * const directorWithIdOnly = await prisma.director.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DirectorCreateManyAndReturnArgs>(args?: SelectSubset<T, DirectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Director.
     * @param {DirectorDeleteArgs} args - Arguments to delete one Director.
     * @example
     * // Delete one Director
     * const Director = await prisma.director.delete({
     *   where: {
     *     // ... filter to delete one Director
     *   }
     * })
     * 
     */
    delete<T extends DirectorDeleteArgs>(args: SelectSubset<T, DirectorDeleteArgs<ExtArgs>>): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Director.
     * @param {DirectorUpdateArgs} args - Arguments to update one Director.
     * @example
     * // Update one Director
     * const director = await prisma.director.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DirectorUpdateArgs>(args: SelectSubset<T, DirectorUpdateArgs<ExtArgs>>): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Directors.
     * @param {DirectorDeleteManyArgs} args - Arguments to filter Directors to delete.
     * @example
     * // Delete a few Directors
     * const { count } = await prisma.director.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DirectorDeleteManyArgs>(args?: SelectSubset<T, DirectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Directors
     * const director = await prisma.director.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DirectorUpdateManyArgs>(args: SelectSubset<T, DirectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directors and returns the data updated in the database.
     * @param {DirectorUpdateManyAndReturnArgs} args - Arguments to update many Directors.
     * @example
     * // Update many Directors
     * const director = await prisma.director.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Directors and only return the `id`
     * const directorWithIdOnly = await prisma.director.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DirectorUpdateManyAndReturnArgs>(args: SelectSubset<T, DirectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Director.
     * @param {DirectorUpsertArgs} args - Arguments to update or create a Director.
     * @example
     * // Update or create a Director
     * const director = await prisma.director.upsert({
     *   create: {
     *     // ... data to create a Director
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Director we want to update
     *   }
     * })
     */
    upsert<T extends DirectorUpsertArgs>(args: SelectSubset<T, DirectorUpsertArgs<ExtArgs>>): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorCountArgs} args - Arguments to filter Directors to count.
     * @example
     * // Count the number of Directors
     * const count = await prisma.director.count({
     *   where: {
     *     // ... the filter for the Directors we want to count
     *   }
     * })
    **/
    count<T extends DirectorCountArgs>(
      args?: Subset<T, DirectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Director.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DirectorAggregateArgs>(args: Subset<T, DirectorAggregateArgs>): Prisma.PrismaPromise<GetDirectorAggregateType<T>>

    /**
     * Group by Director.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DirectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectorGroupByArgs['orderBy'] }
        : { orderBy?: DirectorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DirectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Director model
   */
  readonly fields: DirectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Director.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movieDirectors<T extends Director$movieDirectorsArgs<ExtArgs> = {}>(args?: Subset<T, Director$movieDirectorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieDirectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Director model
   */
  interface DirectorFieldRefs {
    readonly id: FieldRef<"Director", 'Int'>
    readonly name: FieldRef<"Director", 'String'>
    readonly bio: FieldRef<"Director", 'String'>
    readonly avatar: FieldRef<"Director", 'String'>
    readonly createdAt: FieldRef<"Director", 'DateTime'>
    readonly updatedAt: FieldRef<"Director", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Director findUnique
   */
  export type DirectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Director
     */
    omit?: DirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter, which Director to fetch.
     */
    where: DirectorWhereUniqueInput
  }

  /**
   * Director findUniqueOrThrow
   */
  export type DirectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Director
     */
    omit?: DirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter, which Director to fetch.
     */
    where: DirectorWhereUniqueInput
  }

  /**
   * Director findFirst
   */
  export type DirectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Director
     */
    omit?: DirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter, which Director to fetch.
     */
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     */
    orderBy?: DirectorOrderByWithRelationInput | DirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directors.
     */
    cursor?: DirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directors.
     */
    distinct?: DirectorScalarFieldEnum | DirectorScalarFieldEnum[]
  }

  /**
   * Director findFirstOrThrow
   */
  export type DirectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Director
     */
    omit?: DirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter, which Director to fetch.
     */
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     */
    orderBy?: DirectorOrderByWithRelationInput | DirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directors.
     */
    cursor?: DirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directors.
     */
    distinct?: DirectorScalarFieldEnum | DirectorScalarFieldEnum[]
  }

  /**
   * Director findMany
   */
  export type DirectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Director
     */
    omit?: DirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter, which Directors to fetch.
     */
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     */
    orderBy?: DirectorOrderByWithRelationInput | DirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Directors.
     */
    cursor?: DirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directors.
     */
    skip?: number
    distinct?: DirectorScalarFieldEnum | DirectorScalarFieldEnum[]
  }

  /**
   * Director create
   */
  export type DirectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Director
     */
    omit?: DirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * The data needed to create a Director.
     */
    data: XOR<DirectorCreateInput, DirectorUncheckedCreateInput>
  }

  /**
   * Director createMany
   */
  export type DirectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Directors.
     */
    data: DirectorCreateManyInput | DirectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Director createManyAndReturn
   */
  export type DirectorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Director
     */
    omit?: DirectorOmit<ExtArgs> | null
    /**
     * The data used to create many Directors.
     */
    data: DirectorCreateManyInput | DirectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Director update
   */
  export type DirectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Director
     */
    omit?: DirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * The data needed to update a Director.
     */
    data: XOR<DirectorUpdateInput, DirectorUncheckedUpdateInput>
    /**
     * Choose, which Director to update.
     */
    where: DirectorWhereUniqueInput
  }

  /**
   * Director updateMany
   */
  export type DirectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Directors.
     */
    data: XOR<DirectorUpdateManyMutationInput, DirectorUncheckedUpdateManyInput>
    /**
     * Filter which Directors to update
     */
    where?: DirectorWhereInput
    /**
     * Limit how many Directors to update.
     */
    limit?: number
  }

  /**
   * Director updateManyAndReturn
   */
  export type DirectorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Director
     */
    omit?: DirectorOmit<ExtArgs> | null
    /**
     * The data used to update Directors.
     */
    data: XOR<DirectorUpdateManyMutationInput, DirectorUncheckedUpdateManyInput>
    /**
     * Filter which Directors to update
     */
    where?: DirectorWhereInput
    /**
     * Limit how many Directors to update.
     */
    limit?: number
  }

  /**
   * Director upsert
   */
  export type DirectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Director
     */
    omit?: DirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * The filter to search for the Director to update in case it exists.
     */
    where: DirectorWhereUniqueInput
    /**
     * In case the Director found by the `where` argument doesn't exist, create a new Director with this data.
     */
    create: XOR<DirectorCreateInput, DirectorUncheckedCreateInput>
    /**
     * In case the Director was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectorUpdateInput, DirectorUncheckedUpdateInput>
  }

  /**
   * Director delete
   */
  export type DirectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Director
     */
    omit?: DirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter which Director to delete.
     */
    where: DirectorWhereUniqueInput
  }

  /**
   * Director deleteMany
   */
  export type DirectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Directors to delete
     */
    where?: DirectorWhereInput
    /**
     * Limit how many Directors to delete.
     */
    limit?: number
  }

  /**
   * Director.movieDirectors
   */
  export type Director$movieDirectorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDirector
     */
    select?: MovieDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDirector
     */
    omit?: MovieDirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDirectorInclude<ExtArgs> | null
    where?: MovieDirectorWhereInput
    orderBy?: MovieDirectorOrderByWithRelationInput | MovieDirectorOrderByWithRelationInput[]
    cursor?: MovieDirectorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieDirectorScalarFieldEnum | MovieDirectorScalarFieldEnum[]
  }

  /**
   * Director without action
   */
  export type DirectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Director
     */
    omit?: DirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectorInclude<ExtArgs> | null
  }


  /**
   * Model MovieGenre
   */

  export type AggregateMovieGenre = {
    _count: MovieGenreCountAggregateOutputType | null
    _avg: MovieGenreAvgAggregateOutputType | null
    _sum: MovieGenreSumAggregateOutputType | null
    _min: MovieGenreMinAggregateOutputType | null
    _max: MovieGenreMaxAggregateOutputType | null
  }

  export type MovieGenreAvgAggregateOutputType = {
    movieId: number | null
    genreId: number | null
  }

  export type MovieGenreSumAggregateOutputType = {
    movieId: number | null
    genreId: number | null
  }

  export type MovieGenreMinAggregateOutputType = {
    movieId: number | null
    genreId: number | null
    createdAt: Date | null
  }

  export type MovieGenreMaxAggregateOutputType = {
    movieId: number | null
    genreId: number | null
    createdAt: Date | null
  }

  export type MovieGenreCountAggregateOutputType = {
    movieId: number
    genreId: number
    createdAt: number
    _all: number
  }


  export type MovieGenreAvgAggregateInputType = {
    movieId?: true
    genreId?: true
  }

  export type MovieGenreSumAggregateInputType = {
    movieId?: true
    genreId?: true
  }

  export type MovieGenreMinAggregateInputType = {
    movieId?: true
    genreId?: true
    createdAt?: true
  }

  export type MovieGenreMaxAggregateInputType = {
    movieId?: true
    genreId?: true
    createdAt?: true
  }

  export type MovieGenreCountAggregateInputType = {
    movieId?: true
    genreId?: true
    createdAt?: true
    _all?: true
  }

  export type MovieGenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieGenre to aggregate.
     */
    where?: MovieGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenres to fetch.
     */
    orderBy?: MovieGenreOrderByWithRelationInput | MovieGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieGenres
    **/
    _count?: true | MovieGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieGenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieGenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieGenreMaxAggregateInputType
  }

  export type GetMovieGenreAggregateType<T extends MovieGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieGenre[P]>
      : GetScalarType<T[P], AggregateMovieGenre[P]>
  }




  export type MovieGenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieGenreWhereInput
    orderBy?: MovieGenreOrderByWithAggregationInput | MovieGenreOrderByWithAggregationInput[]
    by: MovieGenreScalarFieldEnum[] | MovieGenreScalarFieldEnum
    having?: MovieGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieGenreCountAggregateInputType | true
    _avg?: MovieGenreAvgAggregateInputType
    _sum?: MovieGenreSumAggregateInputType
    _min?: MovieGenreMinAggregateInputType
    _max?: MovieGenreMaxAggregateInputType
  }

  export type MovieGenreGroupByOutputType = {
    movieId: number
    genreId: number
    createdAt: Date
    _count: MovieGenreCountAggregateOutputType | null
    _avg: MovieGenreAvgAggregateOutputType | null
    _sum: MovieGenreSumAggregateOutputType | null
    _min: MovieGenreMinAggregateOutputType | null
    _max: MovieGenreMaxAggregateOutputType | null
  }

  type GetMovieGenreGroupByPayload<T extends MovieGenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGenreGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGenreGroupByOutputType[P]>
        }
      >
    >


  export type MovieGenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    genreId?: boolean
    createdAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieGenre"]>

  export type MovieGenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    genreId?: boolean
    createdAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieGenre"]>

  export type MovieGenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    genreId?: boolean
    createdAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieGenre"]>

  export type MovieGenreSelectScalar = {
    movieId?: boolean
    genreId?: boolean
    createdAt?: boolean
  }

  export type MovieGenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"movieId" | "genreId" | "createdAt", ExtArgs["result"]["movieGenre"]>
  export type MovieGenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }
  export type MovieGenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }
  export type MovieGenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }

  export type $MovieGenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieGenre"
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs>
      genre: Prisma.$GenrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      movieId: number
      genreId: number
      createdAt: Date
    }, ExtArgs["result"]["movieGenre"]>
    composites: {}
  }

  type MovieGenreGetPayload<S extends boolean | null | undefined | MovieGenreDefaultArgs> = $Result.GetResult<Prisma.$MovieGenrePayload, S>

  type MovieGenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieGenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieGenreCountAggregateInputType | true
    }

  export interface MovieGenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieGenre'], meta: { name: 'MovieGenre' } }
    /**
     * Find zero or one MovieGenre that matches the filter.
     * @param {MovieGenreFindUniqueArgs} args - Arguments to find a MovieGenre
     * @example
     * // Get one MovieGenre
     * const movieGenre = await prisma.movieGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieGenreFindUniqueArgs>(args: SelectSubset<T, MovieGenreFindUniqueArgs<ExtArgs>>): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovieGenre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieGenreFindUniqueOrThrowArgs} args - Arguments to find a MovieGenre
     * @example
     * // Get one MovieGenre
     * const movieGenre = await prisma.movieGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieGenreFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieGenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenreFindFirstArgs} args - Arguments to find a MovieGenre
     * @example
     * // Get one MovieGenre
     * const movieGenre = await prisma.movieGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieGenreFindFirstArgs>(args?: SelectSubset<T, MovieGenreFindFirstArgs<ExtArgs>>): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieGenre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenreFindFirstOrThrowArgs} args - Arguments to find a MovieGenre
     * @example
     * // Get one MovieGenre
     * const movieGenre = await prisma.movieGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieGenreFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieGenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovieGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieGenres
     * const movieGenres = await prisma.movieGenre.findMany()
     * 
     * // Get first 10 MovieGenres
     * const movieGenres = await prisma.movieGenre.findMany({ take: 10 })
     * 
     * // Only select the `movieId`
     * const movieGenreWithMovieIdOnly = await prisma.movieGenre.findMany({ select: { movieId: true } })
     * 
     */
    findMany<T extends MovieGenreFindManyArgs>(args?: SelectSubset<T, MovieGenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovieGenre.
     * @param {MovieGenreCreateArgs} args - Arguments to create a MovieGenre.
     * @example
     * // Create one MovieGenre
     * const MovieGenre = await prisma.movieGenre.create({
     *   data: {
     *     // ... data to create a MovieGenre
     *   }
     * })
     * 
     */
    create<T extends MovieGenreCreateArgs>(args: SelectSubset<T, MovieGenreCreateArgs<ExtArgs>>): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovieGenres.
     * @param {MovieGenreCreateManyArgs} args - Arguments to create many MovieGenres.
     * @example
     * // Create many MovieGenres
     * const movieGenre = await prisma.movieGenre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieGenreCreateManyArgs>(args?: SelectSubset<T, MovieGenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovieGenres and returns the data saved in the database.
     * @param {MovieGenreCreateManyAndReturnArgs} args - Arguments to create many MovieGenres.
     * @example
     * // Create many MovieGenres
     * const movieGenre = await prisma.movieGenre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovieGenres and only return the `movieId`
     * const movieGenreWithMovieIdOnly = await prisma.movieGenre.createManyAndReturn({
     *   select: { movieId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieGenreCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieGenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovieGenre.
     * @param {MovieGenreDeleteArgs} args - Arguments to delete one MovieGenre.
     * @example
     * // Delete one MovieGenre
     * const MovieGenre = await prisma.movieGenre.delete({
     *   where: {
     *     // ... filter to delete one MovieGenre
     *   }
     * })
     * 
     */
    delete<T extends MovieGenreDeleteArgs>(args: SelectSubset<T, MovieGenreDeleteArgs<ExtArgs>>): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovieGenre.
     * @param {MovieGenreUpdateArgs} args - Arguments to update one MovieGenre.
     * @example
     * // Update one MovieGenre
     * const movieGenre = await prisma.movieGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieGenreUpdateArgs>(args: SelectSubset<T, MovieGenreUpdateArgs<ExtArgs>>): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovieGenres.
     * @param {MovieGenreDeleteManyArgs} args - Arguments to filter MovieGenres to delete.
     * @example
     * // Delete a few MovieGenres
     * const { count } = await prisma.movieGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieGenreDeleteManyArgs>(args?: SelectSubset<T, MovieGenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieGenres
     * const movieGenre = await prisma.movieGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieGenreUpdateManyArgs>(args: SelectSubset<T, MovieGenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieGenres and returns the data updated in the database.
     * @param {MovieGenreUpdateManyAndReturnArgs} args - Arguments to update many MovieGenres.
     * @example
     * // Update many MovieGenres
     * const movieGenre = await prisma.movieGenre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovieGenres and only return the `movieId`
     * const movieGenreWithMovieIdOnly = await prisma.movieGenre.updateManyAndReturn({
     *   select: { movieId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovieGenreUpdateManyAndReturnArgs>(args: SelectSubset<T, MovieGenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovieGenre.
     * @param {MovieGenreUpsertArgs} args - Arguments to update or create a MovieGenre.
     * @example
     * // Update or create a MovieGenre
     * const movieGenre = await prisma.movieGenre.upsert({
     *   create: {
     *     // ... data to create a MovieGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieGenre we want to update
     *   }
     * })
     */
    upsert<T extends MovieGenreUpsertArgs>(args: SelectSubset<T, MovieGenreUpsertArgs<ExtArgs>>): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovieGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenreCountArgs} args - Arguments to filter MovieGenres to count.
     * @example
     * // Count the number of MovieGenres
     * const count = await prisma.movieGenre.count({
     *   where: {
     *     // ... the filter for the MovieGenres we want to count
     *   }
     * })
    **/
    count<T extends MovieGenreCountArgs>(
      args?: Subset<T, MovieGenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieGenreAggregateArgs>(args: Subset<T, MovieGenreAggregateArgs>): Prisma.PrismaPromise<GetMovieGenreAggregateType<T>>

    /**
     * Group by MovieGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGenreGroupByArgs['orderBy'] }
        : { orderBy?: MovieGenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieGenre model
   */
  readonly fields: MovieGenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieGenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovieGenre model
   */
  interface MovieGenreFieldRefs {
    readonly movieId: FieldRef<"MovieGenre", 'Int'>
    readonly genreId: FieldRef<"MovieGenre", 'Int'>
    readonly createdAt: FieldRef<"MovieGenre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MovieGenre findUnique
   */
  export type MovieGenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenre
     */
    omit?: MovieGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenre to fetch.
     */
    where: MovieGenreWhereUniqueInput
  }

  /**
   * MovieGenre findUniqueOrThrow
   */
  export type MovieGenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenre
     */
    omit?: MovieGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenre to fetch.
     */
    where: MovieGenreWhereUniqueInput
  }

  /**
   * MovieGenre findFirst
   */
  export type MovieGenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenre
     */
    omit?: MovieGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenre to fetch.
     */
    where?: MovieGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenres to fetch.
     */
    orderBy?: MovieGenreOrderByWithRelationInput | MovieGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieGenres.
     */
    cursor?: MovieGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieGenres.
     */
    distinct?: MovieGenreScalarFieldEnum | MovieGenreScalarFieldEnum[]
  }

  /**
   * MovieGenre findFirstOrThrow
   */
  export type MovieGenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenre
     */
    omit?: MovieGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenre to fetch.
     */
    where?: MovieGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenres to fetch.
     */
    orderBy?: MovieGenreOrderByWithRelationInput | MovieGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieGenres.
     */
    cursor?: MovieGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieGenres.
     */
    distinct?: MovieGenreScalarFieldEnum | MovieGenreScalarFieldEnum[]
  }

  /**
   * MovieGenre findMany
   */
  export type MovieGenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenre
     */
    omit?: MovieGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenres to fetch.
     */
    where?: MovieGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenres to fetch.
     */
    orderBy?: MovieGenreOrderByWithRelationInput | MovieGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieGenres.
     */
    cursor?: MovieGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenres.
     */
    skip?: number
    distinct?: MovieGenreScalarFieldEnum | MovieGenreScalarFieldEnum[]
  }

  /**
   * MovieGenre create
   */
  export type MovieGenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenre
     */
    omit?: MovieGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieGenre.
     */
    data: XOR<MovieGenreCreateInput, MovieGenreUncheckedCreateInput>
  }

  /**
   * MovieGenre createMany
   */
  export type MovieGenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieGenres.
     */
    data: MovieGenreCreateManyInput | MovieGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieGenre createManyAndReturn
   */
  export type MovieGenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenre
     */
    omit?: MovieGenreOmit<ExtArgs> | null
    /**
     * The data used to create many MovieGenres.
     */
    data: MovieGenreCreateManyInput | MovieGenreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovieGenre update
   */
  export type MovieGenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenre
     */
    omit?: MovieGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieGenre.
     */
    data: XOR<MovieGenreUpdateInput, MovieGenreUncheckedUpdateInput>
    /**
     * Choose, which MovieGenre to update.
     */
    where: MovieGenreWhereUniqueInput
  }

  /**
   * MovieGenre updateMany
   */
  export type MovieGenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieGenres.
     */
    data: XOR<MovieGenreUpdateManyMutationInput, MovieGenreUncheckedUpdateManyInput>
    /**
     * Filter which MovieGenres to update
     */
    where?: MovieGenreWhereInput
    /**
     * Limit how many MovieGenres to update.
     */
    limit?: number
  }

  /**
   * MovieGenre updateManyAndReturn
   */
  export type MovieGenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenre
     */
    omit?: MovieGenreOmit<ExtArgs> | null
    /**
     * The data used to update MovieGenres.
     */
    data: XOR<MovieGenreUpdateManyMutationInput, MovieGenreUncheckedUpdateManyInput>
    /**
     * Filter which MovieGenres to update
     */
    where?: MovieGenreWhereInput
    /**
     * Limit how many MovieGenres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovieGenre upsert
   */
  export type MovieGenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenre
     */
    omit?: MovieGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieGenre to update in case it exists.
     */
    where: MovieGenreWhereUniqueInput
    /**
     * In case the MovieGenre found by the `where` argument doesn't exist, create a new MovieGenre with this data.
     */
    create: XOR<MovieGenreCreateInput, MovieGenreUncheckedCreateInput>
    /**
     * In case the MovieGenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieGenreUpdateInput, MovieGenreUncheckedUpdateInput>
  }

  /**
   * MovieGenre delete
   */
  export type MovieGenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenre
     */
    omit?: MovieGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * Filter which MovieGenre to delete.
     */
    where: MovieGenreWhereUniqueInput
  }

  /**
   * MovieGenre deleteMany
   */
  export type MovieGenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieGenres to delete
     */
    where?: MovieGenreWhereInput
    /**
     * Limit how many MovieGenres to delete.
     */
    limit?: number
  }

  /**
   * MovieGenre without action
   */
  export type MovieGenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieGenre
     */
    omit?: MovieGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
  }


  /**
   * Model MovieActor
   */

  export type AggregateMovieActor = {
    _count: MovieActorCountAggregateOutputType | null
    _avg: MovieActorAvgAggregateOutputType | null
    _sum: MovieActorSumAggregateOutputType | null
    _min: MovieActorMinAggregateOutputType | null
    _max: MovieActorMaxAggregateOutputType | null
  }

  export type MovieActorAvgAggregateOutputType = {
    movieId: number | null
    actorId: number | null
  }

  export type MovieActorSumAggregateOutputType = {
    movieId: number | null
    actorId: number | null
  }

  export type MovieActorMinAggregateOutputType = {
    movieId: number | null
    actorId: number | null
    createdAt: Date | null
  }

  export type MovieActorMaxAggregateOutputType = {
    movieId: number | null
    actorId: number | null
    createdAt: Date | null
  }

  export type MovieActorCountAggregateOutputType = {
    movieId: number
    actorId: number
    createdAt: number
    _all: number
  }


  export type MovieActorAvgAggregateInputType = {
    movieId?: true
    actorId?: true
  }

  export type MovieActorSumAggregateInputType = {
    movieId?: true
    actorId?: true
  }

  export type MovieActorMinAggregateInputType = {
    movieId?: true
    actorId?: true
    createdAt?: true
  }

  export type MovieActorMaxAggregateInputType = {
    movieId?: true
    actorId?: true
    createdAt?: true
  }

  export type MovieActorCountAggregateInputType = {
    movieId?: true
    actorId?: true
    createdAt?: true
    _all?: true
  }

  export type MovieActorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieActor to aggregate.
     */
    where?: MovieActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieActors to fetch.
     */
    orderBy?: MovieActorOrderByWithRelationInput | MovieActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieActors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieActors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieActors
    **/
    _count?: true | MovieActorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieActorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieActorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieActorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieActorMaxAggregateInputType
  }

  export type GetMovieActorAggregateType<T extends MovieActorAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieActor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieActor[P]>
      : GetScalarType<T[P], AggregateMovieActor[P]>
  }




  export type MovieActorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieActorWhereInput
    orderBy?: MovieActorOrderByWithAggregationInput | MovieActorOrderByWithAggregationInput[]
    by: MovieActorScalarFieldEnum[] | MovieActorScalarFieldEnum
    having?: MovieActorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieActorCountAggregateInputType | true
    _avg?: MovieActorAvgAggregateInputType
    _sum?: MovieActorSumAggregateInputType
    _min?: MovieActorMinAggregateInputType
    _max?: MovieActorMaxAggregateInputType
  }

  export type MovieActorGroupByOutputType = {
    movieId: number
    actorId: number
    createdAt: Date
    _count: MovieActorCountAggregateOutputType | null
    _avg: MovieActorAvgAggregateOutputType | null
    _sum: MovieActorSumAggregateOutputType | null
    _min: MovieActorMinAggregateOutputType | null
    _max: MovieActorMaxAggregateOutputType | null
  }

  type GetMovieActorGroupByPayload<T extends MovieActorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieActorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieActorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieActorGroupByOutputType[P]>
            : GetScalarType<T[P], MovieActorGroupByOutputType[P]>
        }
      >
    >


  export type MovieActorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    actorId?: boolean
    createdAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    actor?: boolean | ActorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieActor"]>

  export type MovieActorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    actorId?: boolean
    createdAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    actor?: boolean | ActorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieActor"]>

  export type MovieActorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    actorId?: boolean
    createdAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    actor?: boolean | ActorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieActor"]>

  export type MovieActorSelectScalar = {
    movieId?: boolean
    actorId?: boolean
    createdAt?: boolean
  }

  export type MovieActorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"movieId" | "actorId" | "createdAt", ExtArgs["result"]["movieActor"]>
  export type MovieActorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    actor?: boolean | ActorDefaultArgs<ExtArgs>
  }
  export type MovieActorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    actor?: boolean | ActorDefaultArgs<ExtArgs>
  }
  export type MovieActorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    actor?: boolean | ActorDefaultArgs<ExtArgs>
  }

  export type $MovieActorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieActor"
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs>
      actor: Prisma.$ActorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      movieId: number
      actorId: number
      createdAt: Date
    }, ExtArgs["result"]["movieActor"]>
    composites: {}
  }

  type MovieActorGetPayload<S extends boolean | null | undefined | MovieActorDefaultArgs> = $Result.GetResult<Prisma.$MovieActorPayload, S>

  type MovieActorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieActorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieActorCountAggregateInputType | true
    }

  export interface MovieActorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieActor'], meta: { name: 'MovieActor' } }
    /**
     * Find zero or one MovieActor that matches the filter.
     * @param {MovieActorFindUniqueArgs} args - Arguments to find a MovieActor
     * @example
     * // Get one MovieActor
     * const movieActor = await prisma.movieActor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieActorFindUniqueArgs>(args: SelectSubset<T, MovieActorFindUniqueArgs<ExtArgs>>): Prisma__MovieActorClient<$Result.GetResult<Prisma.$MovieActorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovieActor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieActorFindUniqueOrThrowArgs} args - Arguments to find a MovieActor
     * @example
     * // Get one MovieActor
     * const movieActor = await prisma.movieActor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieActorFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieActorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieActorClient<$Result.GetResult<Prisma.$MovieActorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieActor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieActorFindFirstArgs} args - Arguments to find a MovieActor
     * @example
     * // Get one MovieActor
     * const movieActor = await prisma.movieActor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieActorFindFirstArgs>(args?: SelectSubset<T, MovieActorFindFirstArgs<ExtArgs>>): Prisma__MovieActorClient<$Result.GetResult<Prisma.$MovieActorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieActor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieActorFindFirstOrThrowArgs} args - Arguments to find a MovieActor
     * @example
     * // Get one MovieActor
     * const movieActor = await prisma.movieActor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieActorFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieActorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieActorClient<$Result.GetResult<Prisma.$MovieActorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovieActors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieActorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieActors
     * const movieActors = await prisma.movieActor.findMany()
     * 
     * // Get first 10 MovieActors
     * const movieActors = await prisma.movieActor.findMany({ take: 10 })
     * 
     * // Only select the `movieId`
     * const movieActorWithMovieIdOnly = await prisma.movieActor.findMany({ select: { movieId: true } })
     * 
     */
    findMany<T extends MovieActorFindManyArgs>(args?: SelectSubset<T, MovieActorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieActorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovieActor.
     * @param {MovieActorCreateArgs} args - Arguments to create a MovieActor.
     * @example
     * // Create one MovieActor
     * const MovieActor = await prisma.movieActor.create({
     *   data: {
     *     // ... data to create a MovieActor
     *   }
     * })
     * 
     */
    create<T extends MovieActorCreateArgs>(args: SelectSubset<T, MovieActorCreateArgs<ExtArgs>>): Prisma__MovieActorClient<$Result.GetResult<Prisma.$MovieActorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovieActors.
     * @param {MovieActorCreateManyArgs} args - Arguments to create many MovieActors.
     * @example
     * // Create many MovieActors
     * const movieActor = await prisma.movieActor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieActorCreateManyArgs>(args?: SelectSubset<T, MovieActorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovieActors and returns the data saved in the database.
     * @param {MovieActorCreateManyAndReturnArgs} args - Arguments to create many MovieActors.
     * @example
     * // Create many MovieActors
     * const movieActor = await prisma.movieActor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovieActors and only return the `movieId`
     * const movieActorWithMovieIdOnly = await prisma.movieActor.createManyAndReturn({
     *   select: { movieId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieActorCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieActorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieActorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovieActor.
     * @param {MovieActorDeleteArgs} args - Arguments to delete one MovieActor.
     * @example
     * // Delete one MovieActor
     * const MovieActor = await prisma.movieActor.delete({
     *   where: {
     *     // ... filter to delete one MovieActor
     *   }
     * })
     * 
     */
    delete<T extends MovieActorDeleteArgs>(args: SelectSubset<T, MovieActorDeleteArgs<ExtArgs>>): Prisma__MovieActorClient<$Result.GetResult<Prisma.$MovieActorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovieActor.
     * @param {MovieActorUpdateArgs} args - Arguments to update one MovieActor.
     * @example
     * // Update one MovieActor
     * const movieActor = await prisma.movieActor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieActorUpdateArgs>(args: SelectSubset<T, MovieActorUpdateArgs<ExtArgs>>): Prisma__MovieActorClient<$Result.GetResult<Prisma.$MovieActorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovieActors.
     * @param {MovieActorDeleteManyArgs} args - Arguments to filter MovieActors to delete.
     * @example
     * // Delete a few MovieActors
     * const { count } = await prisma.movieActor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieActorDeleteManyArgs>(args?: SelectSubset<T, MovieActorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieActors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieActorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieActors
     * const movieActor = await prisma.movieActor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieActorUpdateManyArgs>(args: SelectSubset<T, MovieActorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieActors and returns the data updated in the database.
     * @param {MovieActorUpdateManyAndReturnArgs} args - Arguments to update many MovieActors.
     * @example
     * // Update many MovieActors
     * const movieActor = await prisma.movieActor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovieActors and only return the `movieId`
     * const movieActorWithMovieIdOnly = await prisma.movieActor.updateManyAndReturn({
     *   select: { movieId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovieActorUpdateManyAndReturnArgs>(args: SelectSubset<T, MovieActorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieActorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovieActor.
     * @param {MovieActorUpsertArgs} args - Arguments to update or create a MovieActor.
     * @example
     * // Update or create a MovieActor
     * const movieActor = await prisma.movieActor.upsert({
     *   create: {
     *     // ... data to create a MovieActor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieActor we want to update
     *   }
     * })
     */
    upsert<T extends MovieActorUpsertArgs>(args: SelectSubset<T, MovieActorUpsertArgs<ExtArgs>>): Prisma__MovieActorClient<$Result.GetResult<Prisma.$MovieActorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovieActors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieActorCountArgs} args - Arguments to filter MovieActors to count.
     * @example
     * // Count the number of MovieActors
     * const count = await prisma.movieActor.count({
     *   where: {
     *     // ... the filter for the MovieActors we want to count
     *   }
     * })
    **/
    count<T extends MovieActorCountArgs>(
      args?: Subset<T, MovieActorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieActorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieActor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieActorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieActorAggregateArgs>(args: Subset<T, MovieActorAggregateArgs>): Prisma.PrismaPromise<GetMovieActorAggregateType<T>>

    /**
     * Group by MovieActor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieActorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieActorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieActorGroupByArgs['orderBy'] }
        : { orderBy?: MovieActorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieActorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieActorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieActor model
   */
  readonly fields: MovieActorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieActor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieActorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actor<T extends ActorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActorDefaultArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovieActor model
   */
  interface MovieActorFieldRefs {
    readonly movieId: FieldRef<"MovieActor", 'Int'>
    readonly actorId: FieldRef<"MovieActor", 'Int'>
    readonly createdAt: FieldRef<"MovieActor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MovieActor findUnique
   */
  export type MovieActorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieActor
     */
    select?: MovieActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieActor
     */
    omit?: MovieActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieActorInclude<ExtArgs> | null
    /**
     * Filter, which MovieActor to fetch.
     */
    where: MovieActorWhereUniqueInput
  }

  /**
   * MovieActor findUniqueOrThrow
   */
  export type MovieActorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieActor
     */
    select?: MovieActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieActor
     */
    omit?: MovieActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieActorInclude<ExtArgs> | null
    /**
     * Filter, which MovieActor to fetch.
     */
    where: MovieActorWhereUniqueInput
  }

  /**
   * MovieActor findFirst
   */
  export type MovieActorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieActor
     */
    select?: MovieActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieActor
     */
    omit?: MovieActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieActorInclude<ExtArgs> | null
    /**
     * Filter, which MovieActor to fetch.
     */
    where?: MovieActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieActors to fetch.
     */
    orderBy?: MovieActorOrderByWithRelationInput | MovieActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieActors.
     */
    cursor?: MovieActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieActors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieActors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieActors.
     */
    distinct?: MovieActorScalarFieldEnum | MovieActorScalarFieldEnum[]
  }

  /**
   * MovieActor findFirstOrThrow
   */
  export type MovieActorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieActor
     */
    select?: MovieActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieActor
     */
    omit?: MovieActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieActorInclude<ExtArgs> | null
    /**
     * Filter, which MovieActor to fetch.
     */
    where?: MovieActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieActors to fetch.
     */
    orderBy?: MovieActorOrderByWithRelationInput | MovieActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieActors.
     */
    cursor?: MovieActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieActors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieActors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieActors.
     */
    distinct?: MovieActorScalarFieldEnum | MovieActorScalarFieldEnum[]
  }

  /**
   * MovieActor findMany
   */
  export type MovieActorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieActor
     */
    select?: MovieActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieActor
     */
    omit?: MovieActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieActorInclude<ExtArgs> | null
    /**
     * Filter, which MovieActors to fetch.
     */
    where?: MovieActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieActors to fetch.
     */
    orderBy?: MovieActorOrderByWithRelationInput | MovieActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieActors.
     */
    cursor?: MovieActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieActors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieActors.
     */
    skip?: number
    distinct?: MovieActorScalarFieldEnum | MovieActorScalarFieldEnum[]
  }

  /**
   * MovieActor create
   */
  export type MovieActorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieActor
     */
    select?: MovieActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieActor
     */
    omit?: MovieActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieActorInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieActor.
     */
    data: XOR<MovieActorCreateInput, MovieActorUncheckedCreateInput>
  }

  /**
   * MovieActor createMany
   */
  export type MovieActorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieActors.
     */
    data: MovieActorCreateManyInput | MovieActorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieActor createManyAndReturn
   */
  export type MovieActorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieActor
     */
    select?: MovieActorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieActor
     */
    omit?: MovieActorOmit<ExtArgs> | null
    /**
     * The data used to create many MovieActors.
     */
    data: MovieActorCreateManyInput | MovieActorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieActorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovieActor update
   */
  export type MovieActorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieActor
     */
    select?: MovieActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieActor
     */
    omit?: MovieActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieActorInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieActor.
     */
    data: XOR<MovieActorUpdateInput, MovieActorUncheckedUpdateInput>
    /**
     * Choose, which MovieActor to update.
     */
    where: MovieActorWhereUniqueInput
  }

  /**
   * MovieActor updateMany
   */
  export type MovieActorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieActors.
     */
    data: XOR<MovieActorUpdateManyMutationInput, MovieActorUncheckedUpdateManyInput>
    /**
     * Filter which MovieActors to update
     */
    where?: MovieActorWhereInput
    /**
     * Limit how many MovieActors to update.
     */
    limit?: number
  }

  /**
   * MovieActor updateManyAndReturn
   */
  export type MovieActorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieActor
     */
    select?: MovieActorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieActor
     */
    omit?: MovieActorOmit<ExtArgs> | null
    /**
     * The data used to update MovieActors.
     */
    data: XOR<MovieActorUpdateManyMutationInput, MovieActorUncheckedUpdateManyInput>
    /**
     * Filter which MovieActors to update
     */
    where?: MovieActorWhereInput
    /**
     * Limit how many MovieActors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieActorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovieActor upsert
   */
  export type MovieActorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieActor
     */
    select?: MovieActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieActor
     */
    omit?: MovieActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieActorInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieActor to update in case it exists.
     */
    where: MovieActorWhereUniqueInput
    /**
     * In case the MovieActor found by the `where` argument doesn't exist, create a new MovieActor with this data.
     */
    create: XOR<MovieActorCreateInput, MovieActorUncheckedCreateInput>
    /**
     * In case the MovieActor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieActorUpdateInput, MovieActorUncheckedUpdateInput>
  }

  /**
   * MovieActor delete
   */
  export type MovieActorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieActor
     */
    select?: MovieActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieActor
     */
    omit?: MovieActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieActorInclude<ExtArgs> | null
    /**
     * Filter which MovieActor to delete.
     */
    where: MovieActorWhereUniqueInput
  }

  /**
   * MovieActor deleteMany
   */
  export type MovieActorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieActors to delete
     */
    where?: MovieActorWhereInput
    /**
     * Limit how many MovieActors to delete.
     */
    limit?: number
  }

  /**
   * MovieActor without action
   */
  export type MovieActorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieActor
     */
    select?: MovieActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieActor
     */
    omit?: MovieActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieActorInclude<ExtArgs> | null
  }


  /**
   * Model MovieDirector
   */

  export type AggregateMovieDirector = {
    _count: MovieDirectorCountAggregateOutputType | null
    _avg: MovieDirectorAvgAggregateOutputType | null
    _sum: MovieDirectorSumAggregateOutputType | null
    _min: MovieDirectorMinAggregateOutputType | null
    _max: MovieDirectorMaxAggregateOutputType | null
  }

  export type MovieDirectorAvgAggregateOutputType = {
    movieId: number | null
    directorId: number | null
  }

  export type MovieDirectorSumAggregateOutputType = {
    movieId: number | null
    directorId: number | null
  }

  export type MovieDirectorMinAggregateOutputType = {
    movieId: number | null
    directorId: number | null
    createdAt: Date | null
  }

  export type MovieDirectorMaxAggregateOutputType = {
    movieId: number | null
    directorId: number | null
    createdAt: Date | null
  }

  export type MovieDirectorCountAggregateOutputType = {
    movieId: number
    directorId: number
    createdAt: number
    _all: number
  }


  export type MovieDirectorAvgAggregateInputType = {
    movieId?: true
    directorId?: true
  }

  export type MovieDirectorSumAggregateInputType = {
    movieId?: true
    directorId?: true
  }

  export type MovieDirectorMinAggregateInputType = {
    movieId?: true
    directorId?: true
    createdAt?: true
  }

  export type MovieDirectorMaxAggregateInputType = {
    movieId?: true
    directorId?: true
    createdAt?: true
  }

  export type MovieDirectorCountAggregateInputType = {
    movieId?: true
    directorId?: true
    createdAt?: true
    _all?: true
  }

  export type MovieDirectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieDirector to aggregate.
     */
    where?: MovieDirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieDirectors to fetch.
     */
    orderBy?: MovieDirectorOrderByWithRelationInput | MovieDirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieDirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieDirectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieDirectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieDirectors
    **/
    _count?: true | MovieDirectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieDirectorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieDirectorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieDirectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieDirectorMaxAggregateInputType
  }

  export type GetMovieDirectorAggregateType<T extends MovieDirectorAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieDirector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieDirector[P]>
      : GetScalarType<T[P], AggregateMovieDirector[P]>
  }




  export type MovieDirectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieDirectorWhereInput
    orderBy?: MovieDirectorOrderByWithAggregationInput | MovieDirectorOrderByWithAggregationInput[]
    by: MovieDirectorScalarFieldEnum[] | MovieDirectorScalarFieldEnum
    having?: MovieDirectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieDirectorCountAggregateInputType | true
    _avg?: MovieDirectorAvgAggregateInputType
    _sum?: MovieDirectorSumAggregateInputType
    _min?: MovieDirectorMinAggregateInputType
    _max?: MovieDirectorMaxAggregateInputType
  }

  export type MovieDirectorGroupByOutputType = {
    movieId: number
    directorId: number
    createdAt: Date
    _count: MovieDirectorCountAggregateOutputType | null
    _avg: MovieDirectorAvgAggregateOutputType | null
    _sum: MovieDirectorSumAggregateOutputType | null
    _min: MovieDirectorMinAggregateOutputType | null
    _max: MovieDirectorMaxAggregateOutputType | null
  }

  type GetMovieDirectorGroupByPayload<T extends MovieDirectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieDirectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieDirectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieDirectorGroupByOutputType[P]>
            : GetScalarType<T[P], MovieDirectorGroupByOutputType[P]>
        }
      >
    >


  export type MovieDirectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    directorId?: boolean
    createdAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    director?: boolean | DirectorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieDirector"]>

  export type MovieDirectorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    directorId?: boolean
    createdAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    director?: boolean | DirectorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieDirector"]>

  export type MovieDirectorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    directorId?: boolean
    createdAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    director?: boolean | DirectorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieDirector"]>

  export type MovieDirectorSelectScalar = {
    movieId?: boolean
    directorId?: boolean
    createdAt?: boolean
  }

  export type MovieDirectorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"movieId" | "directorId" | "createdAt", ExtArgs["result"]["movieDirector"]>
  export type MovieDirectorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    director?: boolean | DirectorDefaultArgs<ExtArgs>
  }
  export type MovieDirectorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    director?: boolean | DirectorDefaultArgs<ExtArgs>
  }
  export type MovieDirectorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    director?: boolean | DirectorDefaultArgs<ExtArgs>
  }

  export type $MovieDirectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieDirector"
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs>
      director: Prisma.$DirectorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      movieId: number
      directorId: number
      createdAt: Date
    }, ExtArgs["result"]["movieDirector"]>
    composites: {}
  }

  type MovieDirectorGetPayload<S extends boolean | null | undefined | MovieDirectorDefaultArgs> = $Result.GetResult<Prisma.$MovieDirectorPayload, S>

  type MovieDirectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieDirectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieDirectorCountAggregateInputType | true
    }

  export interface MovieDirectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieDirector'], meta: { name: 'MovieDirector' } }
    /**
     * Find zero or one MovieDirector that matches the filter.
     * @param {MovieDirectorFindUniqueArgs} args - Arguments to find a MovieDirector
     * @example
     * // Get one MovieDirector
     * const movieDirector = await prisma.movieDirector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieDirectorFindUniqueArgs>(args: SelectSubset<T, MovieDirectorFindUniqueArgs<ExtArgs>>): Prisma__MovieDirectorClient<$Result.GetResult<Prisma.$MovieDirectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovieDirector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieDirectorFindUniqueOrThrowArgs} args - Arguments to find a MovieDirector
     * @example
     * // Get one MovieDirector
     * const movieDirector = await prisma.movieDirector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieDirectorFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieDirectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieDirectorClient<$Result.GetResult<Prisma.$MovieDirectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieDirector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDirectorFindFirstArgs} args - Arguments to find a MovieDirector
     * @example
     * // Get one MovieDirector
     * const movieDirector = await prisma.movieDirector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieDirectorFindFirstArgs>(args?: SelectSubset<T, MovieDirectorFindFirstArgs<ExtArgs>>): Prisma__MovieDirectorClient<$Result.GetResult<Prisma.$MovieDirectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieDirector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDirectorFindFirstOrThrowArgs} args - Arguments to find a MovieDirector
     * @example
     * // Get one MovieDirector
     * const movieDirector = await prisma.movieDirector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieDirectorFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieDirectorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieDirectorClient<$Result.GetResult<Prisma.$MovieDirectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovieDirectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDirectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieDirectors
     * const movieDirectors = await prisma.movieDirector.findMany()
     * 
     * // Get first 10 MovieDirectors
     * const movieDirectors = await prisma.movieDirector.findMany({ take: 10 })
     * 
     * // Only select the `movieId`
     * const movieDirectorWithMovieIdOnly = await prisma.movieDirector.findMany({ select: { movieId: true } })
     * 
     */
    findMany<T extends MovieDirectorFindManyArgs>(args?: SelectSubset<T, MovieDirectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieDirectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovieDirector.
     * @param {MovieDirectorCreateArgs} args - Arguments to create a MovieDirector.
     * @example
     * // Create one MovieDirector
     * const MovieDirector = await prisma.movieDirector.create({
     *   data: {
     *     // ... data to create a MovieDirector
     *   }
     * })
     * 
     */
    create<T extends MovieDirectorCreateArgs>(args: SelectSubset<T, MovieDirectorCreateArgs<ExtArgs>>): Prisma__MovieDirectorClient<$Result.GetResult<Prisma.$MovieDirectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovieDirectors.
     * @param {MovieDirectorCreateManyArgs} args - Arguments to create many MovieDirectors.
     * @example
     * // Create many MovieDirectors
     * const movieDirector = await prisma.movieDirector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieDirectorCreateManyArgs>(args?: SelectSubset<T, MovieDirectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovieDirectors and returns the data saved in the database.
     * @param {MovieDirectorCreateManyAndReturnArgs} args - Arguments to create many MovieDirectors.
     * @example
     * // Create many MovieDirectors
     * const movieDirector = await prisma.movieDirector.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovieDirectors and only return the `movieId`
     * const movieDirectorWithMovieIdOnly = await prisma.movieDirector.createManyAndReturn({
     *   select: { movieId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieDirectorCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieDirectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieDirectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovieDirector.
     * @param {MovieDirectorDeleteArgs} args - Arguments to delete one MovieDirector.
     * @example
     * // Delete one MovieDirector
     * const MovieDirector = await prisma.movieDirector.delete({
     *   where: {
     *     // ... filter to delete one MovieDirector
     *   }
     * })
     * 
     */
    delete<T extends MovieDirectorDeleteArgs>(args: SelectSubset<T, MovieDirectorDeleteArgs<ExtArgs>>): Prisma__MovieDirectorClient<$Result.GetResult<Prisma.$MovieDirectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovieDirector.
     * @param {MovieDirectorUpdateArgs} args - Arguments to update one MovieDirector.
     * @example
     * // Update one MovieDirector
     * const movieDirector = await prisma.movieDirector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieDirectorUpdateArgs>(args: SelectSubset<T, MovieDirectorUpdateArgs<ExtArgs>>): Prisma__MovieDirectorClient<$Result.GetResult<Prisma.$MovieDirectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovieDirectors.
     * @param {MovieDirectorDeleteManyArgs} args - Arguments to filter MovieDirectors to delete.
     * @example
     * // Delete a few MovieDirectors
     * const { count } = await prisma.movieDirector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDirectorDeleteManyArgs>(args?: SelectSubset<T, MovieDirectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieDirectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDirectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieDirectors
     * const movieDirector = await prisma.movieDirector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieDirectorUpdateManyArgs>(args: SelectSubset<T, MovieDirectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieDirectors and returns the data updated in the database.
     * @param {MovieDirectorUpdateManyAndReturnArgs} args - Arguments to update many MovieDirectors.
     * @example
     * // Update many MovieDirectors
     * const movieDirector = await prisma.movieDirector.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovieDirectors and only return the `movieId`
     * const movieDirectorWithMovieIdOnly = await prisma.movieDirector.updateManyAndReturn({
     *   select: { movieId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovieDirectorUpdateManyAndReturnArgs>(args: SelectSubset<T, MovieDirectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieDirectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovieDirector.
     * @param {MovieDirectorUpsertArgs} args - Arguments to update or create a MovieDirector.
     * @example
     * // Update or create a MovieDirector
     * const movieDirector = await prisma.movieDirector.upsert({
     *   create: {
     *     // ... data to create a MovieDirector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieDirector we want to update
     *   }
     * })
     */
    upsert<T extends MovieDirectorUpsertArgs>(args: SelectSubset<T, MovieDirectorUpsertArgs<ExtArgs>>): Prisma__MovieDirectorClient<$Result.GetResult<Prisma.$MovieDirectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovieDirectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDirectorCountArgs} args - Arguments to filter MovieDirectors to count.
     * @example
     * // Count the number of MovieDirectors
     * const count = await prisma.movieDirector.count({
     *   where: {
     *     // ... the filter for the MovieDirectors we want to count
     *   }
     * })
    **/
    count<T extends MovieDirectorCountArgs>(
      args?: Subset<T, MovieDirectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieDirectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieDirector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDirectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieDirectorAggregateArgs>(args: Subset<T, MovieDirectorAggregateArgs>): Prisma.PrismaPromise<GetMovieDirectorAggregateType<T>>

    /**
     * Group by MovieDirector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDirectorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieDirectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieDirectorGroupByArgs['orderBy'] }
        : { orderBy?: MovieDirectorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieDirectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieDirectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieDirector model
   */
  readonly fields: MovieDirectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieDirector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieDirectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    director<T extends DirectorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectorDefaultArgs<ExtArgs>>): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovieDirector model
   */
  interface MovieDirectorFieldRefs {
    readonly movieId: FieldRef<"MovieDirector", 'Int'>
    readonly directorId: FieldRef<"MovieDirector", 'Int'>
    readonly createdAt: FieldRef<"MovieDirector", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MovieDirector findUnique
   */
  export type MovieDirectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDirector
     */
    select?: MovieDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDirector
     */
    omit?: MovieDirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDirectorInclude<ExtArgs> | null
    /**
     * Filter, which MovieDirector to fetch.
     */
    where: MovieDirectorWhereUniqueInput
  }

  /**
   * MovieDirector findUniqueOrThrow
   */
  export type MovieDirectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDirector
     */
    select?: MovieDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDirector
     */
    omit?: MovieDirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDirectorInclude<ExtArgs> | null
    /**
     * Filter, which MovieDirector to fetch.
     */
    where: MovieDirectorWhereUniqueInput
  }

  /**
   * MovieDirector findFirst
   */
  export type MovieDirectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDirector
     */
    select?: MovieDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDirector
     */
    omit?: MovieDirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDirectorInclude<ExtArgs> | null
    /**
     * Filter, which MovieDirector to fetch.
     */
    where?: MovieDirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieDirectors to fetch.
     */
    orderBy?: MovieDirectorOrderByWithRelationInput | MovieDirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieDirectors.
     */
    cursor?: MovieDirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieDirectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieDirectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieDirectors.
     */
    distinct?: MovieDirectorScalarFieldEnum | MovieDirectorScalarFieldEnum[]
  }

  /**
   * MovieDirector findFirstOrThrow
   */
  export type MovieDirectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDirector
     */
    select?: MovieDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDirector
     */
    omit?: MovieDirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDirectorInclude<ExtArgs> | null
    /**
     * Filter, which MovieDirector to fetch.
     */
    where?: MovieDirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieDirectors to fetch.
     */
    orderBy?: MovieDirectorOrderByWithRelationInput | MovieDirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieDirectors.
     */
    cursor?: MovieDirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieDirectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieDirectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieDirectors.
     */
    distinct?: MovieDirectorScalarFieldEnum | MovieDirectorScalarFieldEnum[]
  }

  /**
   * MovieDirector findMany
   */
  export type MovieDirectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDirector
     */
    select?: MovieDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDirector
     */
    omit?: MovieDirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDirectorInclude<ExtArgs> | null
    /**
     * Filter, which MovieDirectors to fetch.
     */
    where?: MovieDirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieDirectors to fetch.
     */
    orderBy?: MovieDirectorOrderByWithRelationInput | MovieDirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieDirectors.
     */
    cursor?: MovieDirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieDirectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieDirectors.
     */
    skip?: number
    distinct?: MovieDirectorScalarFieldEnum | MovieDirectorScalarFieldEnum[]
  }

  /**
   * MovieDirector create
   */
  export type MovieDirectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDirector
     */
    select?: MovieDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDirector
     */
    omit?: MovieDirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDirectorInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieDirector.
     */
    data: XOR<MovieDirectorCreateInput, MovieDirectorUncheckedCreateInput>
  }

  /**
   * MovieDirector createMany
   */
  export type MovieDirectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieDirectors.
     */
    data: MovieDirectorCreateManyInput | MovieDirectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieDirector createManyAndReturn
   */
  export type MovieDirectorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDirector
     */
    select?: MovieDirectorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDirector
     */
    omit?: MovieDirectorOmit<ExtArgs> | null
    /**
     * The data used to create many MovieDirectors.
     */
    data: MovieDirectorCreateManyInput | MovieDirectorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDirectorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovieDirector update
   */
  export type MovieDirectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDirector
     */
    select?: MovieDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDirector
     */
    omit?: MovieDirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDirectorInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieDirector.
     */
    data: XOR<MovieDirectorUpdateInput, MovieDirectorUncheckedUpdateInput>
    /**
     * Choose, which MovieDirector to update.
     */
    where: MovieDirectorWhereUniqueInput
  }

  /**
   * MovieDirector updateMany
   */
  export type MovieDirectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieDirectors.
     */
    data: XOR<MovieDirectorUpdateManyMutationInput, MovieDirectorUncheckedUpdateManyInput>
    /**
     * Filter which MovieDirectors to update
     */
    where?: MovieDirectorWhereInput
    /**
     * Limit how many MovieDirectors to update.
     */
    limit?: number
  }

  /**
   * MovieDirector updateManyAndReturn
   */
  export type MovieDirectorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDirector
     */
    select?: MovieDirectorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDirector
     */
    omit?: MovieDirectorOmit<ExtArgs> | null
    /**
     * The data used to update MovieDirectors.
     */
    data: XOR<MovieDirectorUpdateManyMutationInput, MovieDirectorUncheckedUpdateManyInput>
    /**
     * Filter which MovieDirectors to update
     */
    where?: MovieDirectorWhereInput
    /**
     * Limit how many MovieDirectors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDirectorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovieDirector upsert
   */
  export type MovieDirectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDirector
     */
    select?: MovieDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDirector
     */
    omit?: MovieDirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDirectorInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieDirector to update in case it exists.
     */
    where: MovieDirectorWhereUniqueInput
    /**
     * In case the MovieDirector found by the `where` argument doesn't exist, create a new MovieDirector with this data.
     */
    create: XOR<MovieDirectorCreateInput, MovieDirectorUncheckedCreateInput>
    /**
     * In case the MovieDirector was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieDirectorUpdateInput, MovieDirectorUncheckedUpdateInput>
  }

  /**
   * MovieDirector delete
   */
  export type MovieDirectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDirector
     */
    select?: MovieDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDirector
     */
    omit?: MovieDirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDirectorInclude<ExtArgs> | null
    /**
     * Filter which MovieDirector to delete.
     */
    where: MovieDirectorWhereUniqueInput
  }

  /**
   * MovieDirector deleteMany
   */
  export type MovieDirectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieDirectors to delete
     */
    where?: MovieDirectorWhereInput
    /**
     * Limit how many MovieDirectors to delete.
     */
    limit?: number
  }

  /**
   * MovieDirector without action
   */
  export type MovieDirectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDirector
     */
    select?: MovieDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDirector
     */
    omit?: MovieDirectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDirectorInclude<ExtArgs> | null
  }


  /**
   * Model WatchHistory
   */

  export type AggregateWatchHistory = {
    _count: WatchHistoryCountAggregateOutputType | null
    _avg: WatchHistoryAvgAggregateOutputType | null
    _sum: WatchHistorySumAggregateOutputType | null
    _min: WatchHistoryMinAggregateOutputType | null
    _max: WatchHistoryMaxAggregateOutputType | null
  }

  export type WatchHistoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
    episodeId: number | null
    progress: number | null
  }

  export type WatchHistorySumAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
    episodeId: number | null
    progress: number | null
  }

  export type WatchHistoryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
    episodeId: number | null
    watchedAt: Date | null
    progress: number | null
  }

  export type WatchHistoryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
    episodeId: number | null
    watchedAt: Date | null
    progress: number | null
  }

  export type WatchHistoryCountAggregateOutputType = {
    id: number
    userId: number
    movieId: number
    episodeId: number
    watchedAt: number
    progress: number
    _all: number
  }


  export type WatchHistoryAvgAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    episodeId?: true
    progress?: true
  }

  export type WatchHistorySumAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    episodeId?: true
    progress?: true
  }

  export type WatchHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    episodeId?: true
    watchedAt?: true
    progress?: true
  }

  export type WatchHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    episodeId?: true
    watchedAt?: true
    progress?: true
  }

  export type WatchHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    episodeId?: true
    watchedAt?: true
    progress?: true
    _all?: true
  }

  export type WatchHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchHistory to aggregate.
     */
    where?: WatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchHistories to fetch.
     */
    orderBy?: WatchHistoryOrderByWithRelationInput | WatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WatchHistories
    **/
    _count?: true | WatchHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatchHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatchHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchHistoryMaxAggregateInputType
  }

  export type GetWatchHistoryAggregateType<T extends WatchHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchHistory[P]>
      : GetScalarType<T[P], AggregateWatchHistory[P]>
  }




  export type WatchHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchHistoryWhereInput
    orderBy?: WatchHistoryOrderByWithAggregationInput | WatchHistoryOrderByWithAggregationInput[]
    by: WatchHistoryScalarFieldEnum[] | WatchHistoryScalarFieldEnum
    having?: WatchHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchHistoryCountAggregateInputType | true
    _avg?: WatchHistoryAvgAggregateInputType
    _sum?: WatchHistorySumAggregateInputType
    _min?: WatchHistoryMinAggregateInputType
    _max?: WatchHistoryMaxAggregateInputType
  }

  export type WatchHistoryGroupByOutputType = {
    id: number
    userId: number
    movieId: number
    episodeId: number | null
    watchedAt: Date
    progress: number | null
    _count: WatchHistoryCountAggregateOutputType | null
    _avg: WatchHistoryAvgAggregateOutputType | null
    _sum: WatchHistorySumAggregateOutputType | null
    _min: WatchHistoryMinAggregateOutputType | null
    _max: WatchHistoryMaxAggregateOutputType | null
  }

  type GetWatchHistoryGroupByPayload<T extends WatchHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], WatchHistoryGroupByOutputType[P]>
        }
      >
    >


  export type WatchHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    episodeId?: boolean
    watchedAt?: boolean
    progress?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    episode?: boolean | WatchHistory$episodeArgs<ExtArgs>
  }, ExtArgs["result"]["watchHistory"]>

  export type WatchHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    episodeId?: boolean
    watchedAt?: boolean
    progress?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    episode?: boolean | WatchHistory$episodeArgs<ExtArgs>
  }, ExtArgs["result"]["watchHistory"]>

  export type WatchHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    episodeId?: boolean
    watchedAt?: boolean
    progress?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    episode?: boolean | WatchHistory$episodeArgs<ExtArgs>
  }, ExtArgs["result"]["watchHistory"]>

  export type WatchHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    movieId?: boolean
    episodeId?: boolean
    watchedAt?: boolean
    progress?: boolean
  }

  export type WatchHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "movieId" | "episodeId" | "watchedAt" | "progress", ExtArgs["result"]["watchHistory"]>
  export type WatchHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    episode?: boolean | WatchHistory$episodeArgs<ExtArgs>
  }
  export type WatchHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    episode?: boolean | WatchHistory$episodeArgs<ExtArgs>
  }
  export type WatchHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    episode?: boolean | WatchHistory$episodeArgs<ExtArgs>
  }

  export type $WatchHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WatchHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      movie: Prisma.$MoviePayload<ExtArgs>
      episode: Prisma.$EpisodePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      movieId: number
      episodeId: number | null
      watchedAt: Date
      progress: number | null
    }, ExtArgs["result"]["watchHistory"]>
    composites: {}
  }

  type WatchHistoryGetPayload<S extends boolean | null | undefined | WatchHistoryDefaultArgs> = $Result.GetResult<Prisma.$WatchHistoryPayload, S>

  type WatchHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchHistoryCountAggregateInputType | true
    }

  export interface WatchHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WatchHistory'], meta: { name: 'WatchHistory' } }
    /**
     * Find zero or one WatchHistory that matches the filter.
     * @param {WatchHistoryFindUniqueArgs} args - Arguments to find a WatchHistory
     * @example
     * // Get one WatchHistory
     * const watchHistory = await prisma.watchHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchHistoryFindUniqueArgs>(args: SelectSubset<T, WatchHistoryFindUniqueArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WatchHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchHistoryFindUniqueOrThrowArgs} args - Arguments to find a WatchHistory
     * @example
     * // Get one WatchHistory
     * const watchHistory = await prisma.watchHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchHistoryFindFirstArgs} args - Arguments to find a WatchHistory
     * @example
     * // Get one WatchHistory
     * const watchHistory = await prisma.watchHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchHistoryFindFirstArgs>(args?: SelectSubset<T, WatchHistoryFindFirstArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchHistoryFindFirstOrThrowArgs} args - Arguments to find a WatchHistory
     * @example
     * // Get one WatchHistory
     * const watchHistory = await prisma.watchHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WatchHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchHistories
     * const watchHistories = await prisma.watchHistory.findMany()
     * 
     * // Get first 10 WatchHistories
     * const watchHistories = await prisma.watchHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchHistoryWithIdOnly = await prisma.watchHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchHistoryFindManyArgs>(args?: SelectSubset<T, WatchHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WatchHistory.
     * @param {WatchHistoryCreateArgs} args - Arguments to create a WatchHistory.
     * @example
     * // Create one WatchHistory
     * const WatchHistory = await prisma.watchHistory.create({
     *   data: {
     *     // ... data to create a WatchHistory
     *   }
     * })
     * 
     */
    create<T extends WatchHistoryCreateArgs>(args: SelectSubset<T, WatchHistoryCreateArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WatchHistories.
     * @param {WatchHistoryCreateManyArgs} args - Arguments to create many WatchHistories.
     * @example
     * // Create many WatchHistories
     * const watchHistory = await prisma.watchHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchHistoryCreateManyArgs>(args?: SelectSubset<T, WatchHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WatchHistories and returns the data saved in the database.
     * @param {WatchHistoryCreateManyAndReturnArgs} args - Arguments to create many WatchHistories.
     * @example
     * // Create many WatchHistories
     * const watchHistory = await prisma.watchHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WatchHistories and only return the `id`
     * const watchHistoryWithIdOnly = await prisma.watchHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WatchHistory.
     * @param {WatchHistoryDeleteArgs} args - Arguments to delete one WatchHistory.
     * @example
     * // Delete one WatchHistory
     * const WatchHistory = await prisma.watchHistory.delete({
     *   where: {
     *     // ... filter to delete one WatchHistory
     *   }
     * })
     * 
     */
    delete<T extends WatchHistoryDeleteArgs>(args: SelectSubset<T, WatchHistoryDeleteArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WatchHistory.
     * @param {WatchHistoryUpdateArgs} args - Arguments to update one WatchHistory.
     * @example
     * // Update one WatchHistory
     * const watchHistory = await prisma.watchHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchHistoryUpdateArgs>(args: SelectSubset<T, WatchHistoryUpdateArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WatchHistories.
     * @param {WatchHistoryDeleteManyArgs} args - Arguments to filter WatchHistories to delete.
     * @example
     * // Delete a few WatchHistories
     * const { count } = await prisma.watchHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchHistoryDeleteManyArgs>(args?: SelectSubset<T, WatchHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchHistories
     * const watchHistory = await prisma.watchHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchHistoryUpdateManyArgs>(args: SelectSubset<T, WatchHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchHistories and returns the data updated in the database.
     * @param {WatchHistoryUpdateManyAndReturnArgs} args - Arguments to update many WatchHistories.
     * @example
     * // Update many WatchHistories
     * const watchHistory = await prisma.watchHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WatchHistories and only return the `id`
     * const watchHistoryWithIdOnly = await prisma.watchHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WatchHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WatchHistory.
     * @param {WatchHistoryUpsertArgs} args - Arguments to update or create a WatchHistory.
     * @example
     * // Update or create a WatchHistory
     * const watchHistory = await prisma.watchHistory.upsert({
     *   create: {
     *     // ... data to create a WatchHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchHistory we want to update
     *   }
     * })
     */
    upsert<T extends WatchHistoryUpsertArgs>(args: SelectSubset<T, WatchHistoryUpsertArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WatchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchHistoryCountArgs} args - Arguments to filter WatchHistories to count.
     * @example
     * // Count the number of WatchHistories
     * const count = await prisma.watchHistory.count({
     *   where: {
     *     // ... the filter for the WatchHistories we want to count
     *   }
     * })
    **/
    count<T extends WatchHistoryCountArgs>(
      args?: Subset<T, WatchHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WatchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WatchHistoryAggregateArgs>(args: Subset<T, WatchHistoryAggregateArgs>): Prisma.PrismaPromise<GetWatchHistoryAggregateType<T>>

    /**
     * Group by WatchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WatchHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchHistoryGroupByArgs['orderBy'] }
        : { orderBy?: WatchHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WatchHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WatchHistory model
   */
  readonly fields: WatchHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WatchHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    episode<T extends WatchHistory$episodeArgs<ExtArgs> = {}>(args?: Subset<T, WatchHistory$episodeArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WatchHistory model
   */
  interface WatchHistoryFieldRefs {
    readonly id: FieldRef<"WatchHistory", 'Int'>
    readonly userId: FieldRef<"WatchHistory", 'Int'>
    readonly movieId: FieldRef<"WatchHistory", 'Int'>
    readonly episodeId: FieldRef<"WatchHistory", 'Int'>
    readonly watchedAt: FieldRef<"WatchHistory", 'DateTime'>
    readonly progress: FieldRef<"WatchHistory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WatchHistory findUnique
   */
  export type WatchHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WatchHistory to fetch.
     */
    where: WatchHistoryWhereUniqueInput
  }

  /**
   * WatchHistory findUniqueOrThrow
   */
  export type WatchHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WatchHistory to fetch.
     */
    where: WatchHistoryWhereUniqueInput
  }

  /**
   * WatchHistory findFirst
   */
  export type WatchHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WatchHistory to fetch.
     */
    where?: WatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchHistories to fetch.
     */
    orderBy?: WatchHistoryOrderByWithRelationInput | WatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchHistories.
     */
    cursor?: WatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchHistories.
     */
    distinct?: WatchHistoryScalarFieldEnum | WatchHistoryScalarFieldEnum[]
  }

  /**
   * WatchHistory findFirstOrThrow
   */
  export type WatchHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WatchHistory to fetch.
     */
    where?: WatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchHistories to fetch.
     */
    orderBy?: WatchHistoryOrderByWithRelationInput | WatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchHistories.
     */
    cursor?: WatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchHistories.
     */
    distinct?: WatchHistoryScalarFieldEnum | WatchHistoryScalarFieldEnum[]
  }

  /**
   * WatchHistory findMany
   */
  export type WatchHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WatchHistories to fetch.
     */
    where?: WatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchHistories to fetch.
     */
    orderBy?: WatchHistoryOrderByWithRelationInput | WatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WatchHistories.
     */
    cursor?: WatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchHistories.
     */
    skip?: number
    distinct?: WatchHistoryScalarFieldEnum | WatchHistoryScalarFieldEnum[]
  }

  /**
   * WatchHistory create
   */
  export type WatchHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a WatchHistory.
     */
    data: XOR<WatchHistoryCreateInput, WatchHistoryUncheckedCreateInput>
  }

  /**
   * WatchHistory createMany
   */
  export type WatchHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchHistories.
     */
    data: WatchHistoryCreateManyInput | WatchHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchHistory createManyAndReturn
   */
  export type WatchHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many WatchHistories.
     */
    data: WatchHistoryCreateManyInput | WatchHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchHistory update
   */
  export type WatchHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a WatchHistory.
     */
    data: XOR<WatchHistoryUpdateInput, WatchHistoryUncheckedUpdateInput>
    /**
     * Choose, which WatchHistory to update.
     */
    where: WatchHistoryWhereUniqueInput
  }

  /**
   * WatchHistory updateMany
   */
  export type WatchHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchHistories.
     */
    data: XOR<WatchHistoryUpdateManyMutationInput, WatchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which WatchHistories to update
     */
    where?: WatchHistoryWhereInput
    /**
     * Limit how many WatchHistories to update.
     */
    limit?: number
  }

  /**
   * WatchHistory updateManyAndReturn
   */
  export type WatchHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * The data used to update WatchHistories.
     */
    data: XOR<WatchHistoryUpdateManyMutationInput, WatchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which WatchHistories to update
     */
    where?: WatchHistoryWhereInput
    /**
     * Limit how many WatchHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchHistory upsert
   */
  export type WatchHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the WatchHistory to update in case it exists.
     */
    where: WatchHistoryWhereUniqueInput
    /**
     * In case the WatchHistory found by the `where` argument doesn't exist, create a new WatchHistory with this data.
     */
    create: XOR<WatchHistoryCreateInput, WatchHistoryUncheckedCreateInput>
    /**
     * In case the WatchHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchHistoryUpdateInput, WatchHistoryUncheckedUpdateInput>
  }

  /**
   * WatchHistory delete
   */
  export type WatchHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * Filter which WatchHistory to delete.
     */
    where: WatchHistoryWhereUniqueInput
  }

  /**
   * WatchHistory deleteMany
   */
  export type WatchHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchHistories to delete
     */
    where?: WatchHistoryWhereInput
    /**
     * Limit how many WatchHistories to delete.
     */
    limit?: number
  }

  /**
   * WatchHistory.episode
   */
  export type WatchHistory$episodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
  }

  /**
   * WatchHistory without action
   */
  export type WatchHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
  }


  /**
   * Model WatchList
   */

  export type AggregateWatchList = {
    _count: WatchListCountAggregateOutputType | null
    _avg: WatchListAvgAggregateOutputType | null
    _sum: WatchListSumAggregateOutputType | null
    _min: WatchListMinAggregateOutputType | null
    _max: WatchListMaxAggregateOutputType | null
  }

  export type WatchListAvgAggregateOutputType = {
    userId: number | null
    movieId: number | null
  }

  export type WatchListSumAggregateOutputType = {
    userId: number | null
    movieId: number | null
  }

  export type WatchListMinAggregateOutputType = {
    userId: number | null
    movieId: number | null
    addedAt: Date | null
  }

  export type WatchListMaxAggregateOutputType = {
    userId: number | null
    movieId: number | null
    addedAt: Date | null
  }

  export type WatchListCountAggregateOutputType = {
    userId: number
    movieId: number
    addedAt: number
    _all: number
  }


  export type WatchListAvgAggregateInputType = {
    userId?: true
    movieId?: true
  }

  export type WatchListSumAggregateInputType = {
    userId?: true
    movieId?: true
  }

  export type WatchListMinAggregateInputType = {
    userId?: true
    movieId?: true
    addedAt?: true
  }

  export type WatchListMaxAggregateInputType = {
    userId?: true
    movieId?: true
    addedAt?: true
  }

  export type WatchListCountAggregateInputType = {
    userId?: true
    movieId?: true
    addedAt?: true
    _all?: true
  }

  export type WatchListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchList to aggregate.
     */
    where?: WatchListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchLists to fetch.
     */
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WatchLists
    **/
    _count?: true | WatchListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatchListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatchListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchListMaxAggregateInputType
  }

  export type GetWatchListAggregateType<T extends WatchListAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchList[P]>
      : GetScalarType<T[P], AggregateWatchList[P]>
  }




  export type WatchListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchListWhereInput
    orderBy?: WatchListOrderByWithAggregationInput | WatchListOrderByWithAggregationInput[]
    by: WatchListScalarFieldEnum[] | WatchListScalarFieldEnum
    having?: WatchListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchListCountAggregateInputType | true
    _avg?: WatchListAvgAggregateInputType
    _sum?: WatchListSumAggregateInputType
    _min?: WatchListMinAggregateInputType
    _max?: WatchListMaxAggregateInputType
  }

  export type WatchListGroupByOutputType = {
    userId: number
    movieId: number
    addedAt: Date
    _count: WatchListCountAggregateOutputType | null
    _avg: WatchListAvgAggregateOutputType | null
    _sum: WatchListSumAggregateOutputType | null
    _min: WatchListMinAggregateOutputType | null
    _max: WatchListMaxAggregateOutputType | null
  }

  type GetWatchListGroupByPayload<T extends WatchListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchListGroupByOutputType[P]>
            : GetScalarType<T[P], WatchListGroupByOutputType[P]>
        }
      >
    >


  export type WatchListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    movieId?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchList"]>

  export type WatchListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    movieId?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchList"]>

  export type WatchListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    movieId?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchList"]>

  export type WatchListSelectScalar = {
    userId?: boolean
    movieId?: boolean
    addedAt?: boolean
  }

  export type WatchListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "movieId" | "addedAt", ExtArgs["result"]["watchList"]>
  export type WatchListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type WatchListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type WatchListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $WatchListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WatchList"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      movieId: number
      addedAt: Date
    }, ExtArgs["result"]["watchList"]>
    composites: {}
  }

  type WatchListGetPayload<S extends boolean | null | undefined | WatchListDefaultArgs> = $Result.GetResult<Prisma.$WatchListPayload, S>

  type WatchListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchListCountAggregateInputType | true
    }

  export interface WatchListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WatchList'], meta: { name: 'WatchList' } }
    /**
     * Find zero or one WatchList that matches the filter.
     * @param {WatchListFindUniqueArgs} args - Arguments to find a WatchList
     * @example
     * // Get one WatchList
     * const watchList = await prisma.watchList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchListFindUniqueArgs>(args: SelectSubset<T, WatchListFindUniqueArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WatchList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchListFindUniqueOrThrowArgs} args - Arguments to find a WatchList
     * @example
     * // Get one WatchList
     * const watchList = await prisma.watchList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchListFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListFindFirstArgs} args - Arguments to find a WatchList
     * @example
     * // Get one WatchList
     * const watchList = await prisma.watchList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchListFindFirstArgs>(args?: SelectSubset<T, WatchListFindFirstArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListFindFirstOrThrowArgs} args - Arguments to find a WatchList
     * @example
     * // Get one WatchList
     * const watchList = await prisma.watchList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchListFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchListFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WatchLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchLists
     * const watchLists = await prisma.watchList.findMany()
     * 
     * // Get first 10 WatchLists
     * const watchLists = await prisma.watchList.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const watchListWithUserIdOnly = await prisma.watchList.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends WatchListFindManyArgs>(args?: SelectSubset<T, WatchListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WatchList.
     * @param {WatchListCreateArgs} args - Arguments to create a WatchList.
     * @example
     * // Create one WatchList
     * const WatchList = await prisma.watchList.create({
     *   data: {
     *     // ... data to create a WatchList
     *   }
     * })
     * 
     */
    create<T extends WatchListCreateArgs>(args: SelectSubset<T, WatchListCreateArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WatchLists.
     * @param {WatchListCreateManyArgs} args - Arguments to create many WatchLists.
     * @example
     * // Create many WatchLists
     * const watchList = await prisma.watchList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchListCreateManyArgs>(args?: SelectSubset<T, WatchListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WatchLists and returns the data saved in the database.
     * @param {WatchListCreateManyAndReturnArgs} args - Arguments to create many WatchLists.
     * @example
     * // Create many WatchLists
     * const watchList = await prisma.watchList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WatchLists and only return the `userId`
     * const watchListWithUserIdOnly = await prisma.watchList.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchListCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WatchList.
     * @param {WatchListDeleteArgs} args - Arguments to delete one WatchList.
     * @example
     * // Delete one WatchList
     * const WatchList = await prisma.watchList.delete({
     *   where: {
     *     // ... filter to delete one WatchList
     *   }
     * })
     * 
     */
    delete<T extends WatchListDeleteArgs>(args: SelectSubset<T, WatchListDeleteArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WatchList.
     * @param {WatchListUpdateArgs} args - Arguments to update one WatchList.
     * @example
     * // Update one WatchList
     * const watchList = await prisma.watchList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchListUpdateArgs>(args: SelectSubset<T, WatchListUpdateArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WatchLists.
     * @param {WatchListDeleteManyArgs} args - Arguments to filter WatchLists to delete.
     * @example
     * // Delete a few WatchLists
     * const { count } = await prisma.watchList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchListDeleteManyArgs>(args?: SelectSubset<T, WatchListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchLists
     * const watchList = await prisma.watchList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchListUpdateManyArgs>(args: SelectSubset<T, WatchListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchLists and returns the data updated in the database.
     * @param {WatchListUpdateManyAndReturnArgs} args - Arguments to update many WatchLists.
     * @example
     * // Update many WatchLists
     * const watchList = await prisma.watchList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WatchLists and only return the `userId`
     * const watchListWithUserIdOnly = await prisma.watchList.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WatchListUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WatchList.
     * @param {WatchListUpsertArgs} args - Arguments to update or create a WatchList.
     * @example
     * // Update or create a WatchList
     * const watchList = await prisma.watchList.upsert({
     *   create: {
     *     // ... data to create a WatchList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchList we want to update
     *   }
     * })
     */
    upsert<T extends WatchListUpsertArgs>(args: SelectSubset<T, WatchListUpsertArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WatchLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListCountArgs} args - Arguments to filter WatchLists to count.
     * @example
     * // Count the number of WatchLists
     * const count = await prisma.watchList.count({
     *   where: {
     *     // ... the filter for the WatchLists we want to count
     *   }
     * })
    **/
    count<T extends WatchListCountArgs>(
      args?: Subset<T, WatchListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WatchList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WatchListAggregateArgs>(args: Subset<T, WatchListAggregateArgs>): Prisma.PrismaPromise<GetWatchListAggregateType<T>>

    /**
     * Group by WatchList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WatchListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchListGroupByArgs['orderBy'] }
        : { orderBy?: WatchListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WatchListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WatchList model
   */
  readonly fields: WatchListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WatchList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WatchList model
   */
  interface WatchListFieldRefs {
    readonly userId: FieldRef<"WatchList", 'Int'>
    readonly movieId: FieldRef<"WatchList", 'Int'>
    readonly addedAt: FieldRef<"WatchList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WatchList findUnique
   */
  export type WatchListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter, which WatchList to fetch.
     */
    where: WatchListWhereUniqueInput
  }

  /**
   * WatchList findUniqueOrThrow
   */
  export type WatchListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter, which WatchList to fetch.
     */
    where: WatchListWhereUniqueInput
  }

  /**
   * WatchList findFirst
   */
  export type WatchListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter, which WatchList to fetch.
     */
    where?: WatchListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchLists to fetch.
     */
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchLists.
     */
    cursor?: WatchListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchLists.
     */
    distinct?: WatchListScalarFieldEnum | WatchListScalarFieldEnum[]
  }

  /**
   * WatchList findFirstOrThrow
   */
  export type WatchListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter, which WatchList to fetch.
     */
    where?: WatchListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchLists to fetch.
     */
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchLists.
     */
    cursor?: WatchListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchLists.
     */
    distinct?: WatchListScalarFieldEnum | WatchListScalarFieldEnum[]
  }

  /**
   * WatchList findMany
   */
  export type WatchListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter, which WatchLists to fetch.
     */
    where?: WatchListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchLists to fetch.
     */
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WatchLists.
     */
    cursor?: WatchListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchLists.
     */
    skip?: number
    distinct?: WatchListScalarFieldEnum | WatchListScalarFieldEnum[]
  }

  /**
   * WatchList create
   */
  export type WatchListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * The data needed to create a WatchList.
     */
    data: XOR<WatchListCreateInput, WatchListUncheckedCreateInput>
  }

  /**
   * WatchList createMany
   */
  export type WatchListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchLists.
     */
    data: WatchListCreateManyInput | WatchListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchList createManyAndReturn
   */
  export type WatchListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * The data used to create many WatchLists.
     */
    data: WatchListCreateManyInput | WatchListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchList update
   */
  export type WatchListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * The data needed to update a WatchList.
     */
    data: XOR<WatchListUpdateInput, WatchListUncheckedUpdateInput>
    /**
     * Choose, which WatchList to update.
     */
    where: WatchListWhereUniqueInput
  }

  /**
   * WatchList updateMany
   */
  export type WatchListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchLists.
     */
    data: XOR<WatchListUpdateManyMutationInput, WatchListUncheckedUpdateManyInput>
    /**
     * Filter which WatchLists to update
     */
    where?: WatchListWhereInput
    /**
     * Limit how many WatchLists to update.
     */
    limit?: number
  }

  /**
   * WatchList updateManyAndReturn
   */
  export type WatchListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * The data used to update WatchLists.
     */
    data: XOR<WatchListUpdateManyMutationInput, WatchListUncheckedUpdateManyInput>
    /**
     * Filter which WatchLists to update
     */
    where?: WatchListWhereInput
    /**
     * Limit how many WatchLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchList upsert
   */
  export type WatchListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * The filter to search for the WatchList to update in case it exists.
     */
    where: WatchListWhereUniqueInput
    /**
     * In case the WatchList found by the `where` argument doesn't exist, create a new WatchList with this data.
     */
    create: XOR<WatchListCreateInput, WatchListUncheckedCreateInput>
    /**
     * In case the WatchList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchListUpdateInput, WatchListUncheckedUpdateInput>
  }

  /**
   * WatchList delete
   */
  export type WatchListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter which WatchList to delete.
     */
    where: WatchListWhereUniqueInput
  }

  /**
   * WatchList deleteMany
   */
  export type WatchListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchLists to delete
     */
    where?: WatchListWhereInput
    /**
     * Limit how many WatchLists to delete.
     */
    limit?: number
  }

  /**
   * WatchList without action
   */
  export type WatchListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    userId: number | null
    movieId: number | null
    score: number | null
  }

  export type RatingSumAggregateOutputType = {
    userId: number | null
    movieId: number | null
    score: number | null
  }

  export type RatingMinAggregateOutputType = {
    userId: number | null
    movieId: number | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatingMaxAggregateOutputType = {
    userId: number | null
    movieId: number | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatingCountAggregateOutputType = {
    userId: number
    movieId: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    userId?: true
    movieId?: true
    score?: true
  }

  export type RatingSumAggregateInputType = {
    userId?: true
    movieId?: true
    score?: true
  }

  export type RatingMinAggregateInputType = {
    userId?: true
    movieId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatingMaxAggregateInputType = {
    userId?: true
    movieId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatingCountAggregateInputType = {
    userId?: true
    movieId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    userId: number
    movieId: number
    score: number
    createdAt: Date
    updatedAt: Date
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    movieId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    movieId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    movieId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    userId?: boolean
    movieId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "movieId" | "score" | "createdAt" | "updatedAt", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      movieId: number
      score: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const ratingWithUserIdOnly = await prisma.rating.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `userId`
     * const ratingWithUserIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `userId`
     * const ratingWithUserIdOnly = await prisma.rating.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly userId: FieldRef<"Rating", 'Int'>
    readonly movieId: FieldRef<"Rating", 'Int'>
    readonly score: FieldRef<"Rating", 'Int'>
    readonly createdAt: FieldRef<"Rating", 'DateTime'>
    readonly updatedAt: FieldRef<"Rating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    userId: number
    movieId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    userId: number
    movieId: number
    content: string
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    userId?: boolean
    movieId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "movieId" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      movieId: number
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly userId: FieldRef<"Comment", 'Int'>
    readonly movieId: FieldRef<"Comment", 'Int'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    fullName: 'fullName',
    avatar: 'avatar',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    poster: 'poster',
    trailer: 'trailer',
    releaseDate: 'releaseDate',
    duration: 'duration',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
    id: 'id',
    movieId: 'movieId',
    episodeNumber: 'episodeNumber',
    title: 'title',
    description: 'description',
    videoUrl: 'videoUrl',
    duration: 'duration',
    releaseDate: 'releaseDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const ActorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    bio: 'bio',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActorScalarFieldEnum = (typeof ActorScalarFieldEnum)[keyof typeof ActorScalarFieldEnum]


  export const DirectorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    bio: 'bio',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DirectorScalarFieldEnum = (typeof DirectorScalarFieldEnum)[keyof typeof DirectorScalarFieldEnum]


  export const MovieGenreScalarFieldEnum: {
    movieId: 'movieId',
    genreId: 'genreId',
    createdAt: 'createdAt'
  };

  export type MovieGenreScalarFieldEnum = (typeof MovieGenreScalarFieldEnum)[keyof typeof MovieGenreScalarFieldEnum]


  export const MovieActorScalarFieldEnum: {
    movieId: 'movieId',
    actorId: 'actorId',
    createdAt: 'createdAt'
  };

  export type MovieActorScalarFieldEnum = (typeof MovieActorScalarFieldEnum)[keyof typeof MovieActorScalarFieldEnum]


  export const MovieDirectorScalarFieldEnum: {
    movieId: 'movieId',
    directorId: 'directorId',
    createdAt: 'createdAt'
  };

  export type MovieDirectorScalarFieldEnum = (typeof MovieDirectorScalarFieldEnum)[keyof typeof MovieDirectorScalarFieldEnum]


  export const WatchHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieId: 'movieId',
    episodeId: 'episodeId',
    watchedAt: 'watchedAt',
    progress: 'progress'
  };

  export type WatchHistoryScalarFieldEnum = (typeof WatchHistoryScalarFieldEnum)[keyof typeof WatchHistoryScalarFieldEnum]


  export const WatchListScalarFieldEnum: {
    userId: 'userId',
    movieId: 'movieId',
    addedAt: 'addedAt'
  };

  export type WatchListScalarFieldEnum = (typeof WatchListScalarFieldEnum)[keyof typeof WatchListScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    userId: 'userId',
    movieId: 'movieId',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieId: 'movieId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fullName?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    watchHistory?: WatchHistoryListRelationFilter
    watchLists?: WatchListListRelationFilter
    ratings?: RatingListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    watchHistory?: WatchHistoryOrderByRelationAggregateInput
    watchLists?: WatchListOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    fullName?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    watchHistory?: WatchHistoryListRelationFilter
    watchLists?: WatchListListRelationFilter
    ratings?: RatingListRelationFilter
    comments?: CommentListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: IntFilter<"Movie"> | number
    title?: StringFilter<"Movie"> | string
    description?: StringNullableFilter<"Movie"> | string | null
    poster?: StringNullableFilter<"Movie"> | string | null
    trailer?: StringNullableFilter<"Movie"> | string | null
    releaseDate?: DateTimeNullableFilter<"Movie"> | Date | string | null
    duration?: IntNullableFilter<"Movie"> | number | null
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    updatedAt?: DateTimeFilter<"Movie"> | Date | string
    episodes?: EpisodeListRelationFilter
    ratings?: RatingListRelationFilter
    comments?: CommentListRelationFilter
    watchHistory?: WatchHistoryListRelationFilter
    watchLists?: WatchListListRelationFilter
    movieGenres?: MovieGenreListRelationFilter
    movieActors?: MovieActorListRelationFilter
    movieDirectors?: MovieDirectorListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    poster?: SortOrderInput | SortOrder
    trailer?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    episodes?: EpisodeOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    watchHistory?: WatchHistoryOrderByRelationAggregateInput
    watchLists?: WatchListOrderByRelationAggregateInput
    movieGenres?: MovieGenreOrderByRelationAggregateInput
    movieActors?: MovieActorOrderByRelationAggregateInput
    movieDirectors?: MovieDirectorOrderByRelationAggregateInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    title?: StringFilter<"Movie"> | string
    description?: StringNullableFilter<"Movie"> | string | null
    poster?: StringNullableFilter<"Movie"> | string | null
    trailer?: StringNullableFilter<"Movie"> | string | null
    releaseDate?: DateTimeNullableFilter<"Movie"> | Date | string | null
    duration?: IntNullableFilter<"Movie"> | number | null
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    updatedAt?: DateTimeFilter<"Movie"> | Date | string
    episodes?: EpisodeListRelationFilter
    ratings?: RatingListRelationFilter
    comments?: CommentListRelationFilter
    watchHistory?: WatchHistoryListRelationFilter
    watchLists?: WatchListListRelationFilter
    movieGenres?: MovieGenreListRelationFilter
    movieActors?: MovieActorListRelationFilter
    movieDirectors?: MovieDirectorListRelationFilter
  }, "id">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    poster?: SortOrderInput | SortOrder
    trailer?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movie"> | number
    title?: StringWithAggregatesFilter<"Movie"> | string
    description?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    poster?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    trailer?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Movie"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"Movie"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
  }

  export type EpisodeWhereInput = {
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    id?: IntFilter<"Episode"> | number
    movieId?: IntFilter<"Episode"> | number
    episodeNumber?: IntFilter<"Episode"> | number
    title?: StringNullableFilter<"Episode"> | string | null
    description?: StringNullableFilter<"Episode"> | string | null
    videoUrl?: StringFilter<"Episode"> | string
    duration?: IntNullableFilter<"Episode"> | number | null
    releaseDate?: DateTimeNullableFilter<"Episode"> | Date | string | null
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    watchHistory?: WatchHistoryListRelationFilter
  }

  export type EpisodeOrderByWithRelationInput = {
    id?: SortOrder
    movieId?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    videoUrl?: SortOrder
    duration?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movie?: MovieOrderByWithRelationInput
    watchHistory?: WatchHistoryOrderByRelationAggregateInput
  }

  export type EpisodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    movieId?: IntFilter<"Episode"> | number
    episodeNumber?: IntFilter<"Episode"> | number
    title?: StringNullableFilter<"Episode"> | string | null
    description?: StringNullableFilter<"Episode"> | string | null
    videoUrl?: StringFilter<"Episode"> | string
    duration?: IntNullableFilter<"Episode"> | number | null
    releaseDate?: DateTimeNullableFilter<"Episode"> | Date | string | null
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    watchHistory?: WatchHistoryListRelationFilter
  }, "id">

  export type EpisodeOrderByWithAggregationInput = {
    id?: SortOrder
    movieId?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    videoUrl?: SortOrder
    duration?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EpisodeCountOrderByAggregateInput
    _avg?: EpisodeAvgOrderByAggregateInput
    _max?: EpisodeMaxOrderByAggregateInput
    _min?: EpisodeMinOrderByAggregateInput
    _sum?: EpisodeSumOrderByAggregateInput
  }

  export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    OR?: EpisodeScalarWhereWithAggregatesInput[]
    NOT?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Episode"> | number
    movieId?: IntWithAggregatesFilter<"Episode"> | number
    episodeNumber?: IntWithAggregatesFilter<"Episode"> | number
    title?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    description?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    videoUrl?: StringWithAggregatesFilter<"Episode"> | string
    duration?: IntNullableWithAggregatesFilter<"Episode"> | number | null
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Episode"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: IntFilter<"Genre"> | number
    name?: StringFilter<"Genre"> | string
    description?: StringNullableFilter<"Genre"> | string | null
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    updatedAt?: DateTimeFilter<"Genre"> | Date | string
    movieGenres?: MovieGenreListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieGenres?: MovieGenreOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    description?: StringNullableFilter<"Genre"> | string | null
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    updatedAt?: DateTimeFilter<"Genre"> | Date | string
    movieGenres?: MovieGenreListRelationFilter
  }, "id" | "name">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genre"> | number
    name?: StringWithAggregatesFilter<"Genre"> | string
    description?: StringNullableWithAggregatesFilter<"Genre"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
  }

  export type ActorWhereInput = {
    AND?: ActorWhereInput | ActorWhereInput[]
    OR?: ActorWhereInput[]
    NOT?: ActorWhereInput | ActorWhereInput[]
    id?: IntFilter<"Actor"> | number
    name?: StringFilter<"Actor"> | string
    bio?: StringNullableFilter<"Actor"> | string | null
    avatar?: StringNullableFilter<"Actor"> | string | null
    createdAt?: DateTimeFilter<"Actor"> | Date | string
    updatedAt?: DateTimeFilter<"Actor"> | Date | string
    movieActors?: MovieActorListRelationFilter
  }

  export type ActorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieActors?: MovieActorOrderByRelationAggregateInput
  }

  export type ActorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActorWhereInput | ActorWhereInput[]
    OR?: ActorWhereInput[]
    NOT?: ActorWhereInput | ActorWhereInput[]
    name?: StringFilter<"Actor"> | string
    bio?: StringNullableFilter<"Actor"> | string | null
    avatar?: StringNullableFilter<"Actor"> | string | null
    createdAt?: DateTimeFilter<"Actor"> | Date | string
    updatedAt?: DateTimeFilter<"Actor"> | Date | string
    movieActors?: MovieActorListRelationFilter
  }, "id">

  export type ActorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActorCountOrderByAggregateInput
    _avg?: ActorAvgOrderByAggregateInput
    _max?: ActorMaxOrderByAggregateInput
    _min?: ActorMinOrderByAggregateInput
    _sum?: ActorSumOrderByAggregateInput
  }

  export type ActorScalarWhereWithAggregatesInput = {
    AND?: ActorScalarWhereWithAggregatesInput | ActorScalarWhereWithAggregatesInput[]
    OR?: ActorScalarWhereWithAggregatesInput[]
    NOT?: ActorScalarWhereWithAggregatesInput | ActorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Actor"> | number
    name?: StringWithAggregatesFilter<"Actor"> | string
    bio?: StringNullableWithAggregatesFilter<"Actor"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Actor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Actor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Actor"> | Date | string
  }

  export type DirectorWhereInput = {
    AND?: DirectorWhereInput | DirectorWhereInput[]
    OR?: DirectorWhereInput[]
    NOT?: DirectorWhereInput | DirectorWhereInput[]
    id?: IntFilter<"Director"> | number
    name?: StringFilter<"Director"> | string
    bio?: StringNullableFilter<"Director"> | string | null
    avatar?: StringNullableFilter<"Director"> | string | null
    createdAt?: DateTimeFilter<"Director"> | Date | string
    updatedAt?: DateTimeFilter<"Director"> | Date | string
    movieDirectors?: MovieDirectorListRelationFilter
  }

  export type DirectorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieDirectors?: MovieDirectorOrderByRelationAggregateInput
  }

  export type DirectorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DirectorWhereInput | DirectorWhereInput[]
    OR?: DirectorWhereInput[]
    NOT?: DirectorWhereInput | DirectorWhereInput[]
    name?: StringFilter<"Director"> | string
    bio?: StringNullableFilter<"Director"> | string | null
    avatar?: StringNullableFilter<"Director"> | string | null
    createdAt?: DateTimeFilter<"Director"> | Date | string
    updatedAt?: DateTimeFilter<"Director"> | Date | string
    movieDirectors?: MovieDirectorListRelationFilter
  }, "id">

  export type DirectorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DirectorCountOrderByAggregateInput
    _avg?: DirectorAvgOrderByAggregateInput
    _max?: DirectorMaxOrderByAggregateInput
    _min?: DirectorMinOrderByAggregateInput
    _sum?: DirectorSumOrderByAggregateInput
  }

  export type DirectorScalarWhereWithAggregatesInput = {
    AND?: DirectorScalarWhereWithAggregatesInput | DirectorScalarWhereWithAggregatesInput[]
    OR?: DirectorScalarWhereWithAggregatesInput[]
    NOT?: DirectorScalarWhereWithAggregatesInput | DirectorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Director"> | number
    name?: StringWithAggregatesFilter<"Director"> | string
    bio?: StringNullableWithAggregatesFilter<"Director"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Director"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Director"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Director"> | Date | string
  }

  export type MovieGenreWhereInput = {
    AND?: MovieGenreWhereInput | MovieGenreWhereInput[]
    OR?: MovieGenreWhereInput[]
    NOT?: MovieGenreWhereInput | MovieGenreWhereInput[]
    movieId?: IntFilter<"MovieGenre"> | number
    genreId?: IntFilter<"MovieGenre"> | number
    createdAt?: DateTimeFilter<"MovieGenre"> | Date | string
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
  }

  export type MovieGenreOrderByWithRelationInput = {
    movieId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
    movie?: MovieOrderByWithRelationInput
    genre?: GenreOrderByWithRelationInput
  }

  export type MovieGenreWhereUniqueInput = Prisma.AtLeast<{
    movieId_genreId?: MovieGenreMovieIdGenreIdCompoundUniqueInput
    AND?: MovieGenreWhereInput | MovieGenreWhereInput[]
    OR?: MovieGenreWhereInput[]
    NOT?: MovieGenreWhereInput | MovieGenreWhereInput[]
    movieId?: IntFilter<"MovieGenre"> | number
    genreId?: IntFilter<"MovieGenre"> | number
    createdAt?: DateTimeFilter<"MovieGenre"> | Date | string
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
  }, "movieId_genreId">

  export type MovieGenreOrderByWithAggregationInput = {
    movieId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
    _count?: MovieGenreCountOrderByAggregateInput
    _avg?: MovieGenreAvgOrderByAggregateInput
    _max?: MovieGenreMaxOrderByAggregateInput
    _min?: MovieGenreMinOrderByAggregateInput
    _sum?: MovieGenreSumOrderByAggregateInput
  }

  export type MovieGenreScalarWhereWithAggregatesInput = {
    AND?: MovieGenreScalarWhereWithAggregatesInput | MovieGenreScalarWhereWithAggregatesInput[]
    OR?: MovieGenreScalarWhereWithAggregatesInput[]
    NOT?: MovieGenreScalarWhereWithAggregatesInput | MovieGenreScalarWhereWithAggregatesInput[]
    movieId?: IntWithAggregatesFilter<"MovieGenre"> | number
    genreId?: IntWithAggregatesFilter<"MovieGenre"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MovieGenre"> | Date | string
  }

  export type MovieActorWhereInput = {
    AND?: MovieActorWhereInput | MovieActorWhereInput[]
    OR?: MovieActorWhereInput[]
    NOT?: MovieActorWhereInput | MovieActorWhereInput[]
    movieId?: IntFilter<"MovieActor"> | number
    actorId?: IntFilter<"MovieActor"> | number
    createdAt?: DateTimeFilter<"MovieActor"> | Date | string
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    actor?: XOR<ActorScalarRelationFilter, ActorWhereInput>
  }

  export type MovieActorOrderByWithRelationInput = {
    movieId?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
    movie?: MovieOrderByWithRelationInput
    actor?: ActorOrderByWithRelationInput
  }

  export type MovieActorWhereUniqueInput = Prisma.AtLeast<{
    movieId_actorId?: MovieActorMovieIdActorIdCompoundUniqueInput
    AND?: MovieActorWhereInput | MovieActorWhereInput[]
    OR?: MovieActorWhereInput[]
    NOT?: MovieActorWhereInput | MovieActorWhereInput[]
    movieId?: IntFilter<"MovieActor"> | number
    actorId?: IntFilter<"MovieActor"> | number
    createdAt?: DateTimeFilter<"MovieActor"> | Date | string
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    actor?: XOR<ActorScalarRelationFilter, ActorWhereInput>
  }, "movieId_actorId">

  export type MovieActorOrderByWithAggregationInput = {
    movieId?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
    _count?: MovieActorCountOrderByAggregateInput
    _avg?: MovieActorAvgOrderByAggregateInput
    _max?: MovieActorMaxOrderByAggregateInput
    _min?: MovieActorMinOrderByAggregateInput
    _sum?: MovieActorSumOrderByAggregateInput
  }

  export type MovieActorScalarWhereWithAggregatesInput = {
    AND?: MovieActorScalarWhereWithAggregatesInput | MovieActorScalarWhereWithAggregatesInput[]
    OR?: MovieActorScalarWhereWithAggregatesInput[]
    NOT?: MovieActorScalarWhereWithAggregatesInput | MovieActorScalarWhereWithAggregatesInput[]
    movieId?: IntWithAggregatesFilter<"MovieActor"> | number
    actorId?: IntWithAggregatesFilter<"MovieActor"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MovieActor"> | Date | string
  }

  export type MovieDirectorWhereInput = {
    AND?: MovieDirectorWhereInput | MovieDirectorWhereInput[]
    OR?: MovieDirectorWhereInput[]
    NOT?: MovieDirectorWhereInput | MovieDirectorWhereInput[]
    movieId?: IntFilter<"MovieDirector"> | number
    directorId?: IntFilter<"MovieDirector"> | number
    createdAt?: DateTimeFilter<"MovieDirector"> | Date | string
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    director?: XOR<DirectorScalarRelationFilter, DirectorWhereInput>
  }

  export type MovieDirectorOrderByWithRelationInput = {
    movieId?: SortOrder
    directorId?: SortOrder
    createdAt?: SortOrder
    movie?: MovieOrderByWithRelationInput
    director?: DirectorOrderByWithRelationInput
  }

  export type MovieDirectorWhereUniqueInput = Prisma.AtLeast<{
    movieId_directorId?: MovieDirectorMovieIdDirectorIdCompoundUniqueInput
    AND?: MovieDirectorWhereInput | MovieDirectorWhereInput[]
    OR?: MovieDirectorWhereInput[]
    NOT?: MovieDirectorWhereInput | MovieDirectorWhereInput[]
    movieId?: IntFilter<"MovieDirector"> | number
    directorId?: IntFilter<"MovieDirector"> | number
    createdAt?: DateTimeFilter<"MovieDirector"> | Date | string
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    director?: XOR<DirectorScalarRelationFilter, DirectorWhereInput>
  }, "movieId_directorId">

  export type MovieDirectorOrderByWithAggregationInput = {
    movieId?: SortOrder
    directorId?: SortOrder
    createdAt?: SortOrder
    _count?: MovieDirectorCountOrderByAggregateInput
    _avg?: MovieDirectorAvgOrderByAggregateInput
    _max?: MovieDirectorMaxOrderByAggregateInput
    _min?: MovieDirectorMinOrderByAggregateInput
    _sum?: MovieDirectorSumOrderByAggregateInput
  }

  export type MovieDirectorScalarWhereWithAggregatesInput = {
    AND?: MovieDirectorScalarWhereWithAggregatesInput | MovieDirectorScalarWhereWithAggregatesInput[]
    OR?: MovieDirectorScalarWhereWithAggregatesInput[]
    NOT?: MovieDirectorScalarWhereWithAggregatesInput | MovieDirectorScalarWhereWithAggregatesInput[]
    movieId?: IntWithAggregatesFilter<"MovieDirector"> | number
    directorId?: IntWithAggregatesFilter<"MovieDirector"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MovieDirector"> | Date | string
  }

  export type WatchHistoryWhereInput = {
    AND?: WatchHistoryWhereInput | WatchHistoryWhereInput[]
    OR?: WatchHistoryWhereInput[]
    NOT?: WatchHistoryWhereInput | WatchHistoryWhereInput[]
    id?: IntFilter<"WatchHistory"> | number
    userId?: IntFilter<"WatchHistory"> | number
    movieId?: IntFilter<"WatchHistory"> | number
    episodeId?: IntNullableFilter<"WatchHistory"> | number | null
    watchedAt?: DateTimeFilter<"WatchHistory"> | Date | string
    progress?: IntNullableFilter<"WatchHistory"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    episode?: XOR<EpisodeNullableScalarRelationFilter, EpisodeWhereInput> | null
  }

  export type WatchHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    episodeId?: SortOrderInput | SortOrder
    watchedAt?: SortOrder
    progress?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    movie?: MovieOrderByWithRelationInput
    episode?: EpisodeOrderByWithRelationInput
  }

  export type WatchHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WatchHistoryWhereInput | WatchHistoryWhereInput[]
    OR?: WatchHistoryWhereInput[]
    NOT?: WatchHistoryWhereInput | WatchHistoryWhereInput[]
    userId?: IntFilter<"WatchHistory"> | number
    movieId?: IntFilter<"WatchHistory"> | number
    episodeId?: IntNullableFilter<"WatchHistory"> | number | null
    watchedAt?: DateTimeFilter<"WatchHistory"> | Date | string
    progress?: IntNullableFilter<"WatchHistory"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    episode?: XOR<EpisodeNullableScalarRelationFilter, EpisodeWhereInput> | null
  }, "id">

  export type WatchHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    episodeId?: SortOrderInput | SortOrder
    watchedAt?: SortOrder
    progress?: SortOrderInput | SortOrder
    _count?: WatchHistoryCountOrderByAggregateInput
    _avg?: WatchHistoryAvgOrderByAggregateInput
    _max?: WatchHistoryMaxOrderByAggregateInput
    _min?: WatchHistoryMinOrderByAggregateInput
    _sum?: WatchHistorySumOrderByAggregateInput
  }

  export type WatchHistoryScalarWhereWithAggregatesInput = {
    AND?: WatchHistoryScalarWhereWithAggregatesInput | WatchHistoryScalarWhereWithAggregatesInput[]
    OR?: WatchHistoryScalarWhereWithAggregatesInput[]
    NOT?: WatchHistoryScalarWhereWithAggregatesInput | WatchHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WatchHistory"> | number
    userId?: IntWithAggregatesFilter<"WatchHistory"> | number
    movieId?: IntWithAggregatesFilter<"WatchHistory"> | number
    episodeId?: IntNullableWithAggregatesFilter<"WatchHistory"> | number | null
    watchedAt?: DateTimeWithAggregatesFilter<"WatchHistory"> | Date | string
    progress?: IntNullableWithAggregatesFilter<"WatchHistory"> | number | null
  }

  export type WatchListWhereInput = {
    AND?: WatchListWhereInput | WatchListWhereInput[]
    OR?: WatchListWhereInput[]
    NOT?: WatchListWhereInput | WatchListWhereInput[]
    userId?: IntFilter<"WatchList"> | number
    movieId?: IntFilter<"WatchList"> | number
    addedAt?: DateTimeFilter<"WatchList"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }

  export type WatchListOrderByWithRelationInput = {
    userId?: SortOrder
    movieId?: SortOrder
    addedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    movie?: MovieOrderByWithRelationInput
  }

  export type WatchListWhereUniqueInput = Prisma.AtLeast<{
    userId_movieId?: WatchListUserIdMovieIdCompoundUniqueInput
    AND?: WatchListWhereInput | WatchListWhereInput[]
    OR?: WatchListWhereInput[]
    NOT?: WatchListWhereInput | WatchListWhereInput[]
    userId?: IntFilter<"WatchList"> | number
    movieId?: IntFilter<"WatchList"> | number
    addedAt?: DateTimeFilter<"WatchList"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }, "userId_movieId">

  export type WatchListOrderByWithAggregationInput = {
    userId?: SortOrder
    movieId?: SortOrder
    addedAt?: SortOrder
    _count?: WatchListCountOrderByAggregateInput
    _avg?: WatchListAvgOrderByAggregateInput
    _max?: WatchListMaxOrderByAggregateInput
    _min?: WatchListMinOrderByAggregateInput
    _sum?: WatchListSumOrderByAggregateInput
  }

  export type WatchListScalarWhereWithAggregatesInput = {
    AND?: WatchListScalarWhereWithAggregatesInput | WatchListScalarWhereWithAggregatesInput[]
    OR?: WatchListScalarWhereWithAggregatesInput[]
    NOT?: WatchListScalarWhereWithAggregatesInput | WatchListScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"WatchList"> | number
    movieId?: IntWithAggregatesFilter<"WatchList"> | number
    addedAt?: DateTimeWithAggregatesFilter<"WatchList"> | Date | string
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    userId?: IntFilter<"Rating"> | number
    movieId?: IntFilter<"Rating"> | number
    score?: IntFilter<"Rating"> | number
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    userId?: SortOrder
    movieId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    movie?: MovieOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    userId_movieId?: RatingUserIdMovieIdCompoundUniqueInput
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    userId?: IntFilter<"Rating"> | number
    movieId?: IntFilter<"Rating"> | number
    score?: IntFilter<"Rating"> | number
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }, "userId_movieId">

  export type RatingOrderByWithAggregationInput = {
    userId?: SortOrder
    movieId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Rating"> | number
    movieId?: IntWithAggregatesFilter<"Rating"> | number
    score?: IntWithAggregatesFilter<"Rating"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    movieId?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    movie?: MovieOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    userId?: IntFilter<"Comment"> | number
    movieId?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    userId?: IntWithAggregatesFilter<"Comment"> | number
    movieId?: IntWithAggregatesFilter<"Comment"> | number
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    username: string
    password: string
    fullName?: string | null
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    watchHistory?: WatchHistoryCreateNestedManyWithoutUserInput
    watchLists?: WatchListCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    password: string
    fullName?: string | null
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutUserInput
    watchLists?: WatchListUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchHistory?: WatchHistoryUpdateManyWithoutUserNestedInput
    watchLists?: WatchListUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutUserNestedInput
    watchLists?: WatchListUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    password: string
    fullName?: string | null
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCreateInput = {
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutMovieInput
    ratings?: RatingCreateNestedManyWithoutMovieInput
    comments?: CommentCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutMovieInput
    watchLists?: WatchListCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutMovieInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutMovieInput
    watchLists?: WatchListUncheckedCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreUncheckedCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorUncheckedCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutMovieNestedInput
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    comments?: CommentUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutMovieNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUncheckedUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUncheckedUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUncheckedUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeCreateInput = {
    episodeNumber: number
    title?: string | null
    description?: string | null
    videoUrl: string
    duration?: number | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutEpisodesInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateInput = {
    id?: number
    movieId: number
    episodeNumber: number
    title?: string | null
    description?: string | null
    videoUrl: string
    duration?: number | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUpdateInput = {
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutEpisodesNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeCreateManyInput = {
    id?: number
    movieId: number
    episodeNumber: number
    title?: string | null
    description?: string | null
    videoUrl: string
    duration?: number | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeUpdateManyMutationInput = {
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movieGenres?: MovieGenreCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movieGenres?: MovieGenreUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieGenres?: MovieGenreUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieGenres?: MovieGenreUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActorCreateInput = {
    name: string
    bio?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movieActors?: MovieActorCreateNestedManyWithoutActorInput
  }

  export type ActorUncheckedCreateInput = {
    id?: number
    name: string
    bio?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movieActors?: MovieActorUncheckedCreateNestedManyWithoutActorInput
  }

  export type ActorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieActors?: MovieActorUpdateManyWithoutActorNestedInput
  }

  export type ActorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieActors?: MovieActorUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ActorCreateManyInput = {
    id?: number
    name: string
    bio?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectorCreateInput = {
    name: string
    bio?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movieDirectors?: MovieDirectorCreateNestedManyWithoutDirectorInput
  }

  export type DirectorUncheckedCreateInput = {
    id?: number
    name: string
    bio?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movieDirectors?: MovieDirectorUncheckedCreateNestedManyWithoutDirectorInput
  }

  export type DirectorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieDirectors?: MovieDirectorUpdateManyWithoutDirectorNestedInput
  }

  export type DirectorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieDirectors?: MovieDirectorUncheckedUpdateManyWithoutDirectorNestedInput
  }

  export type DirectorCreateManyInput = {
    id?: number
    name: string
    bio?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieGenreCreateInput = {
    createdAt?: Date | string
    movie: MovieCreateNestedOneWithoutMovieGenresInput
    genre: GenreCreateNestedOneWithoutMovieGenresInput
  }

  export type MovieGenreUncheckedCreateInput = {
    movieId: number
    genreId: number
    createdAt?: Date | string
  }

  export type MovieGenreUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutMovieGenresNestedInput
    genre?: GenreUpdateOneRequiredWithoutMovieGenresNestedInput
  }

  export type MovieGenreUncheckedUpdateInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    genreId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieGenreCreateManyInput = {
    movieId: number
    genreId: number
    createdAt?: Date | string
  }

  export type MovieGenreUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieGenreUncheckedUpdateManyInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    genreId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieActorCreateInput = {
    createdAt?: Date | string
    movie: MovieCreateNestedOneWithoutMovieActorsInput
    actor: ActorCreateNestedOneWithoutMovieActorsInput
  }

  export type MovieActorUncheckedCreateInput = {
    movieId: number
    actorId: number
    createdAt?: Date | string
  }

  export type MovieActorUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutMovieActorsNestedInput
    actor?: ActorUpdateOneRequiredWithoutMovieActorsNestedInput
  }

  export type MovieActorUncheckedUpdateInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    actorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieActorCreateManyInput = {
    movieId: number
    actorId: number
    createdAt?: Date | string
  }

  export type MovieActorUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieActorUncheckedUpdateManyInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    actorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieDirectorCreateInput = {
    createdAt?: Date | string
    movie: MovieCreateNestedOneWithoutMovieDirectorsInput
    director: DirectorCreateNestedOneWithoutMovieDirectorsInput
  }

  export type MovieDirectorUncheckedCreateInput = {
    movieId: number
    directorId: number
    createdAt?: Date | string
  }

  export type MovieDirectorUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutMovieDirectorsNestedInput
    director?: DirectorUpdateOneRequiredWithoutMovieDirectorsNestedInput
  }

  export type MovieDirectorUncheckedUpdateInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    directorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieDirectorCreateManyInput = {
    movieId: number
    directorId: number
    createdAt?: Date | string
  }

  export type MovieDirectorUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieDirectorUncheckedUpdateManyInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    directorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchHistoryCreateInput = {
    watchedAt?: Date | string
    progress?: number | null
    user: UserCreateNestedOneWithoutWatchHistoryInput
    movie: MovieCreateNestedOneWithoutWatchHistoryInput
    episode?: EpisodeCreateNestedOneWithoutWatchHistoryInput
  }

  export type WatchHistoryUncheckedCreateInput = {
    id?: number
    userId: number
    movieId: number
    episodeId?: number | null
    watchedAt?: Date | string
    progress?: number | null
  }

  export type WatchHistoryUpdateInput = {
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutWatchHistoryNestedInput
    movie?: MovieUpdateOneRequiredWithoutWatchHistoryNestedInput
    episode?: EpisodeUpdateOneWithoutWatchHistoryNestedInput
  }

  export type WatchHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    episodeId?: NullableIntFieldUpdateOperationsInput | number | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WatchHistoryCreateManyInput = {
    id?: number
    userId: number
    movieId: number
    episodeId?: number | null
    watchedAt?: Date | string
    progress?: number | null
  }

  export type WatchHistoryUpdateManyMutationInput = {
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WatchHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    episodeId?: NullableIntFieldUpdateOperationsInput | number | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WatchListCreateInput = {
    addedAt?: Date | string
    user: UserCreateNestedOneWithoutWatchListsInput
    movie: MovieCreateNestedOneWithoutWatchListsInput
  }

  export type WatchListUncheckedCreateInput = {
    userId: number
    movieId: number
    addedAt?: Date | string
  }

  export type WatchListUpdateInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchListsNestedInput
    movie?: MovieUpdateOneRequiredWithoutWatchListsNestedInput
  }

  export type WatchListUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListCreateManyInput = {
    userId: number
    movieId: number
    addedAt?: Date | string
  }

  export type WatchListUpdateManyMutationInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateInput = {
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRatingsInput
    movie: MovieCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateInput = {
    userId: number
    movieId: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
    movie?: MovieUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateManyInput = {
    userId: number
    movieId: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    movie: MovieCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    userId: number
    movieId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    movie?: MovieUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    userId: number
    movieId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WatchHistoryListRelationFilter = {
    every?: WatchHistoryWhereInput
    some?: WatchHistoryWhereInput
    none?: WatchHistoryWhereInput
  }

  export type WatchListListRelationFilter = {
    every?: WatchListWhereInput
    some?: WatchListWhereInput
    none?: WatchListWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WatchHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EpisodeListRelationFilter = {
    every?: EpisodeWhereInput
    some?: EpisodeWhereInput
    none?: EpisodeWhereInput
  }

  export type MovieGenreListRelationFilter = {
    every?: MovieGenreWhereInput
    some?: MovieGenreWhereInput
    none?: MovieGenreWhereInput
  }

  export type MovieActorListRelationFilter = {
    every?: MovieActorWhereInput
    some?: MovieActorWhereInput
    none?: MovieActorWhereInput
  }

  export type MovieDirectorListRelationFilter = {
    every?: MovieDirectorWhereInput
    some?: MovieDirectorWhereInput
    none?: MovieDirectorWhereInput
  }

  export type EpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieGenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieActorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieDirectorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    poster?: SortOrder
    trailer?: SortOrder
    releaseDate?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    poster?: SortOrder
    trailer?: SortOrder
    releaseDate?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    poster?: SortOrder
    trailer?: SortOrder
    releaseDate?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MovieScalarRelationFilter = {
    is?: MovieWhereInput
    isNot?: MovieWhereInput
  }

  export type EpisodeCountOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    videoUrl?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeAvgOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    episodeNumber?: SortOrder
    duration?: SortOrder
  }

  export type EpisodeMaxOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    videoUrl?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeMinOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    videoUrl?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeSumOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    episodeNumber?: SortOrder
    duration?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DirectorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DirectorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreScalarRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type MovieGenreMovieIdGenreIdCompoundUniqueInput = {
    movieId: number
    genreId: number
  }

  export type MovieGenreCountOrderByAggregateInput = {
    movieId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieGenreAvgOrderByAggregateInput = {
    movieId?: SortOrder
    genreId?: SortOrder
  }

  export type MovieGenreMaxOrderByAggregateInput = {
    movieId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieGenreMinOrderByAggregateInput = {
    movieId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieGenreSumOrderByAggregateInput = {
    movieId?: SortOrder
    genreId?: SortOrder
  }

  export type ActorScalarRelationFilter = {
    is?: ActorWhereInput
    isNot?: ActorWhereInput
  }

  export type MovieActorMovieIdActorIdCompoundUniqueInput = {
    movieId: number
    actorId: number
  }

  export type MovieActorCountOrderByAggregateInput = {
    movieId?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieActorAvgOrderByAggregateInput = {
    movieId?: SortOrder
    actorId?: SortOrder
  }

  export type MovieActorMaxOrderByAggregateInput = {
    movieId?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieActorMinOrderByAggregateInput = {
    movieId?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieActorSumOrderByAggregateInput = {
    movieId?: SortOrder
    actorId?: SortOrder
  }

  export type DirectorScalarRelationFilter = {
    is?: DirectorWhereInput
    isNot?: DirectorWhereInput
  }

  export type MovieDirectorMovieIdDirectorIdCompoundUniqueInput = {
    movieId: number
    directorId: number
  }

  export type MovieDirectorCountOrderByAggregateInput = {
    movieId?: SortOrder
    directorId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieDirectorAvgOrderByAggregateInput = {
    movieId?: SortOrder
    directorId?: SortOrder
  }

  export type MovieDirectorMaxOrderByAggregateInput = {
    movieId?: SortOrder
    directorId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieDirectorMinOrderByAggregateInput = {
    movieId?: SortOrder
    directorId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieDirectorSumOrderByAggregateInput = {
    movieId?: SortOrder
    directorId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EpisodeNullableScalarRelationFilter = {
    is?: EpisodeWhereInput | null
    isNot?: EpisodeWhereInput | null
  }

  export type WatchHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    episodeId?: SortOrder
    watchedAt?: SortOrder
    progress?: SortOrder
  }

  export type WatchHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    episodeId?: SortOrder
    progress?: SortOrder
  }

  export type WatchHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    episodeId?: SortOrder
    watchedAt?: SortOrder
    progress?: SortOrder
  }

  export type WatchHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    episodeId?: SortOrder
    watchedAt?: SortOrder
    progress?: SortOrder
  }

  export type WatchHistorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    episodeId?: SortOrder
    progress?: SortOrder
  }

  export type WatchListUserIdMovieIdCompoundUniqueInput = {
    userId: number
    movieId: number
  }

  export type WatchListCountOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
    addedAt?: SortOrder
  }

  export type WatchListAvgOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type WatchListMaxOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
    addedAt?: SortOrder
  }

  export type WatchListMinOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
    addedAt?: SortOrder
  }

  export type WatchListSumOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type RatingUserIdMovieIdCompoundUniqueInput = {
    userId: number
    movieId: number
  }

  export type RatingCountOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
    score?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
    score?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type WatchHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchHistoryCreateWithoutUserInput, WatchHistoryUncheckedCreateWithoutUserInput> | WatchHistoryCreateWithoutUserInput[] | WatchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutUserInput | WatchHistoryCreateOrConnectWithoutUserInput[]
    createMany?: WatchHistoryCreateManyUserInputEnvelope
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
  }

  export type WatchListCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput> | WatchListCreateWithoutUserInput[] | WatchListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutUserInput | WatchListCreateOrConnectWithoutUserInput[]
    createMany?: WatchListCreateManyUserInputEnvelope
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type WatchHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchHistoryCreateWithoutUserInput, WatchHistoryUncheckedCreateWithoutUserInput> | WatchHistoryCreateWithoutUserInput[] | WatchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutUserInput | WatchHistoryCreateOrConnectWithoutUserInput[]
    createMany?: WatchHistoryCreateManyUserInputEnvelope
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
  }

  export type WatchListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput> | WatchListCreateWithoutUserInput[] | WatchListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutUserInput | WatchListCreateOrConnectWithoutUserInput[]
    createMany?: WatchListCreateManyUserInputEnvelope
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WatchHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchHistoryCreateWithoutUserInput, WatchHistoryUncheckedCreateWithoutUserInput> | WatchHistoryCreateWithoutUserInput[] | WatchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutUserInput | WatchHistoryCreateOrConnectWithoutUserInput[]
    upsert?: WatchHistoryUpsertWithWhereUniqueWithoutUserInput | WatchHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchHistoryCreateManyUserInputEnvelope
    set?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    disconnect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    delete?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    update?: WatchHistoryUpdateWithWhereUniqueWithoutUserInput | WatchHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchHistoryUpdateManyWithWhereWithoutUserInput | WatchHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
  }

  export type WatchListUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput> | WatchListCreateWithoutUserInput[] | WatchListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutUserInput | WatchListCreateOrConnectWithoutUserInput[]
    upsert?: WatchListUpsertWithWhereUniqueWithoutUserInput | WatchListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchListCreateManyUserInputEnvelope
    set?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    disconnect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    delete?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    update?: WatchListUpdateWithWhereUniqueWithoutUserInput | WatchListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchListUpdateManyWithWhereWithoutUserInput | WatchListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WatchHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchHistoryCreateWithoutUserInput, WatchHistoryUncheckedCreateWithoutUserInput> | WatchHistoryCreateWithoutUserInput[] | WatchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutUserInput | WatchHistoryCreateOrConnectWithoutUserInput[]
    upsert?: WatchHistoryUpsertWithWhereUniqueWithoutUserInput | WatchHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchHistoryCreateManyUserInputEnvelope
    set?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    disconnect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    delete?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    update?: WatchHistoryUpdateWithWhereUniqueWithoutUserInput | WatchHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchHistoryUpdateManyWithWhereWithoutUserInput | WatchHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
  }

  export type WatchListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput> | WatchListCreateWithoutUserInput[] | WatchListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutUserInput | WatchListCreateOrConnectWithoutUserInput[]
    upsert?: WatchListUpsertWithWhereUniqueWithoutUserInput | WatchListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchListCreateManyUserInputEnvelope
    set?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    disconnect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    delete?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    update?: WatchListUpdateWithWhereUniqueWithoutUserInput | WatchListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchListUpdateManyWithWhereWithoutUserInput | WatchListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type EpisodeCreateNestedManyWithoutMovieInput = {
    create?: XOR<EpisodeCreateWithoutMovieInput, EpisodeUncheckedCreateWithoutMovieInput> | EpisodeCreateWithoutMovieInput[] | EpisodeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutMovieInput | EpisodeCreateOrConnectWithoutMovieInput[]
    createMany?: EpisodeCreateManyMovieInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutMovieInput = {
    create?: XOR<RatingCreateWithoutMovieInput, RatingUncheckedCreateWithoutMovieInput> | RatingCreateWithoutMovieInput[] | RatingUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMovieInput | RatingCreateOrConnectWithoutMovieInput[]
    createMany?: RatingCreateManyMovieInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutMovieInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type WatchHistoryCreateNestedManyWithoutMovieInput = {
    create?: XOR<WatchHistoryCreateWithoutMovieInput, WatchHistoryUncheckedCreateWithoutMovieInput> | WatchHistoryCreateWithoutMovieInput[] | WatchHistoryUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutMovieInput | WatchHistoryCreateOrConnectWithoutMovieInput[]
    createMany?: WatchHistoryCreateManyMovieInputEnvelope
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
  }

  export type WatchListCreateNestedManyWithoutMovieInput = {
    create?: XOR<WatchListCreateWithoutMovieInput, WatchListUncheckedCreateWithoutMovieInput> | WatchListCreateWithoutMovieInput[] | WatchListUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutMovieInput | WatchListCreateOrConnectWithoutMovieInput[]
    createMany?: WatchListCreateManyMovieInputEnvelope
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
  }

  export type MovieGenreCreateNestedManyWithoutMovieInput = {
    create?: XOR<MovieGenreCreateWithoutMovieInput, MovieGenreUncheckedCreateWithoutMovieInput> | MovieGenreCreateWithoutMovieInput[] | MovieGenreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutMovieInput | MovieGenreCreateOrConnectWithoutMovieInput[]
    createMany?: MovieGenreCreateManyMovieInputEnvelope
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
  }

  export type MovieActorCreateNestedManyWithoutMovieInput = {
    create?: XOR<MovieActorCreateWithoutMovieInput, MovieActorUncheckedCreateWithoutMovieInput> | MovieActorCreateWithoutMovieInput[] | MovieActorUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieActorCreateOrConnectWithoutMovieInput | MovieActorCreateOrConnectWithoutMovieInput[]
    createMany?: MovieActorCreateManyMovieInputEnvelope
    connect?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
  }

  export type MovieDirectorCreateNestedManyWithoutMovieInput = {
    create?: XOR<MovieDirectorCreateWithoutMovieInput, MovieDirectorUncheckedCreateWithoutMovieInput> | MovieDirectorCreateWithoutMovieInput[] | MovieDirectorUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieDirectorCreateOrConnectWithoutMovieInput | MovieDirectorCreateOrConnectWithoutMovieInput[]
    createMany?: MovieDirectorCreateManyMovieInputEnvelope
    connect?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
  }

  export type EpisodeUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<EpisodeCreateWithoutMovieInput, EpisodeUncheckedCreateWithoutMovieInput> | EpisodeCreateWithoutMovieInput[] | EpisodeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutMovieInput | EpisodeCreateOrConnectWithoutMovieInput[]
    createMany?: EpisodeCreateManyMovieInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<RatingCreateWithoutMovieInput, RatingUncheckedCreateWithoutMovieInput> | RatingCreateWithoutMovieInput[] | RatingUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMovieInput | RatingCreateOrConnectWithoutMovieInput[]
    createMany?: RatingCreateManyMovieInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type WatchHistoryUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<WatchHistoryCreateWithoutMovieInput, WatchHistoryUncheckedCreateWithoutMovieInput> | WatchHistoryCreateWithoutMovieInput[] | WatchHistoryUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutMovieInput | WatchHistoryCreateOrConnectWithoutMovieInput[]
    createMany?: WatchHistoryCreateManyMovieInputEnvelope
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
  }

  export type WatchListUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<WatchListCreateWithoutMovieInput, WatchListUncheckedCreateWithoutMovieInput> | WatchListCreateWithoutMovieInput[] | WatchListUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutMovieInput | WatchListCreateOrConnectWithoutMovieInput[]
    createMany?: WatchListCreateManyMovieInputEnvelope
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
  }

  export type MovieGenreUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<MovieGenreCreateWithoutMovieInput, MovieGenreUncheckedCreateWithoutMovieInput> | MovieGenreCreateWithoutMovieInput[] | MovieGenreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutMovieInput | MovieGenreCreateOrConnectWithoutMovieInput[]
    createMany?: MovieGenreCreateManyMovieInputEnvelope
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
  }

  export type MovieActorUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<MovieActorCreateWithoutMovieInput, MovieActorUncheckedCreateWithoutMovieInput> | MovieActorCreateWithoutMovieInput[] | MovieActorUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieActorCreateOrConnectWithoutMovieInput | MovieActorCreateOrConnectWithoutMovieInput[]
    createMany?: MovieActorCreateManyMovieInputEnvelope
    connect?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
  }

  export type MovieDirectorUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<MovieDirectorCreateWithoutMovieInput, MovieDirectorUncheckedCreateWithoutMovieInput> | MovieDirectorCreateWithoutMovieInput[] | MovieDirectorUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieDirectorCreateOrConnectWithoutMovieInput | MovieDirectorCreateOrConnectWithoutMovieInput[]
    createMany?: MovieDirectorCreateManyMovieInputEnvelope
    connect?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EpisodeUpdateManyWithoutMovieNestedInput = {
    create?: XOR<EpisodeCreateWithoutMovieInput, EpisodeUncheckedCreateWithoutMovieInput> | EpisodeCreateWithoutMovieInput[] | EpisodeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutMovieInput | EpisodeCreateOrConnectWithoutMovieInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutMovieInput | EpisodeUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: EpisodeCreateManyMovieInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutMovieInput | EpisodeUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutMovieInput | EpisodeUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutMovieNestedInput = {
    create?: XOR<RatingCreateWithoutMovieInput, RatingUncheckedCreateWithoutMovieInput> | RatingCreateWithoutMovieInput[] | RatingUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMovieInput | RatingCreateOrConnectWithoutMovieInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutMovieInput | RatingUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: RatingCreateManyMovieInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutMovieInput | RatingUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutMovieInput | RatingUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutMovieNestedInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutMovieInput | CommentUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutMovieInput | CommentUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutMovieInput | CommentUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type WatchHistoryUpdateManyWithoutMovieNestedInput = {
    create?: XOR<WatchHistoryCreateWithoutMovieInput, WatchHistoryUncheckedCreateWithoutMovieInput> | WatchHistoryCreateWithoutMovieInput[] | WatchHistoryUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutMovieInput | WatchHistoryCreateOrConnectWithoutMovieInput[]
    upsert?: WatchHistoryUpsertWithWhereUniqueWithoutMovieInput | WatchHistoryUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: WatchHistoryCreateManyMovieInputEnvelope
    set?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    disconnect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    delete?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    update?: WatchHistoryUpdateWithWhereUniqueWithoutMovieInput | WatchHistoryUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: WatchHistoryUpdateManyWithWhereWithoutMovieInput | WatchHistoryUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
  }

  export type WatchListUpdateManyWithoutMovieNestedInput = {
    create?: XOR<WatchListCreateWithoutMovieInput, WatchListUncheckedCreateWithoutMovieInput> | WatchListCreateWithoutMovieInput[] | WatchListUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutMovieInput | WatchListCreateOrConnectWithoutMovieInput[]
    upsert?: WatchListUpsertWithWhereUniqueWithoutMovieInput | WatchListUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: WatchListCreateManyMovieInputEnvelope
    set?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    disconnect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    delete?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    update?: WatchListUpdateWithWhereUniqueWithoutMovieInput | WatchListUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: WatchListUpdateManyWithWhereWithoutMovieInput | WatchListUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
  }

  export type MovieGenreUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MovieGenreCreateWithoutMovieInput, MovieGenreUncheckedCreateWithoutMovieInput> | MovieGenreCreateWithoutMovieInput[] | MovieGenreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutMovieInput | MovieGenreCreateOrConnectWithoutMovieInput[]
    upsert?: MovieGenreUpsertWithWhereUniqueWithoutMovieInput | MovieGenreUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MovieGenreCreateManyMovieInputEnvelope
    set?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    disconnect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    delete?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    update?: MovieGenreUpdateWithWhereUniqueWithoutMovieInput | MovieGenreUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MovieGenreUpdateManyWithWhereWithoutMovieInput | MovieGenreUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MovieGenreScalarWhereInput | MovieGenreScalarWhereInput[]
  }

  export type MovieActorUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MovieActorCreateWithoutMovieInput, MovieActorUncheckedCreateWithoutMovieInput> | MovieActorCreateWithoutMovieInput[] | MovieActorUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieActorCreateOrConnectWithoutMovieInput | MovieActorCreateOrConnectWithoutMovieInput[]
    upsert?: MovieActorUpsertWithWhereUniqueWithoutMovieInput | MovieActorUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MovieActorCreateManyMovieInputEnvelope
    set?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    disconnect?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    delete?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    connect?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    update?: MovieActorUpdateWithWhereUniqueWithoutMovieInput | MovieActorUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MovieActorUpdateManyWithWhereWithoutMovieInput | MovieActorUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MovieActorScalarWhereInput | MovieActorScalarWhereInput[]
  }

  export type MovieDirectorUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MovieDirectorCreateWithoutMovieInput, MovieDirectorUncheckedCreateWithoutMovieInput> | MovieDirectorCreateWithoutMovieInput[] | MovieDirectorUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieDirectorCreateOrConnectWithoutMovieInput | MovieDirectorCreateOrConnectWithoutMovieInput[]
    upsert?: MovieDirectorUpsertWithWhereUniqueWithoutMovieInput | MovieDirectorUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MovieDirectorCreateManyMovieInputEnvelope
    set?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    disconnect?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    delete?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    connect?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    update?: MovieDirectorUpdateWithWhereUniqueWithoutMovieInput | MovieDirectorUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MovieDirectorUpdateManyWithWhereWithoutMovieInput | MovieDirectorUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MovieDirectorScalarWhereInput | MovieDirectorScalarWhereInput[]
  }

  export type EpisodeUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<EpisodeCreateWithoutMovieInput, EpisodeUncheckedCreateWithoutMovieInput> | EpisodeCreateWithoutMovieInput[] | EpisodeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutMovieInput | EpisodeCreateOrConnectWithoutMovieInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutMovieInput | EpisodeUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: EpisodeCreateManyMovieInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutMovieInput | EpisodeUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutMovieInput | EpisodeUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<RatingCreateWithoutMovieInput, RatingUncheckedCreateWithoutMovieInput> | RatingCreateWithoutMovieInput[] | RatingUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMovieInput | RatingCreateOrConnectWithoutMovieInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutMovieInput | RatingUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: RatingCreateManyMovieInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutMovieInput | RatingUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutMovieInput | RatingUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutMovieInput | CommentUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutMovieInput | CommentUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutMovieInput | CommentUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type WatchHistoryUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<WatchHistoryCreateWithoutMovieInput, WatchHistoryUncheckedCreateWithoutMovieInput> | WatchHistoryCreateWithoutMovieInput[] | WatchHistoryUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutMovieInput | WatchHistoryCreateOrConnectWithoutMovieInput[]
    upsert?: WatchHistoryUpsertWithWhereUniqueWithoutMovieInput | WatchHistoryUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: WatchHistoryCreateManyMovieInputEnvelope
    set?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    disconnect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    delete?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    update?: WatchHistoryUpdateWithWhereUniqueWithoutMovieInput | WatchHistoryUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: WatchHistoryUpdateManyWithWhereWithoutMovieInput | WatchHistoryUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
  }

  export type WatchListUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<WatchListCreateWithoutMovieInput, WatchListUncheckedCreateWithoutMovieInput> | WatchListCreateWithoutMovieInput[] | WatchListUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutMovieInput | WatchListCreateOrConnectWithoutMovieInput[]
    upsert?: WatchListUpsertWithWhereUniqueWithoutMovieInput | WatchListUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: WatchListCreateManyMovieInputEnvelope
    set?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    disconnect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    delete?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    update?: WatchListUpdateWithWhereUniqueWithoutMovieInput | WatchListUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: WatchListUpdateManyWithWhereWithoutMovieInput | WatchListUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
  }

  export type MovieGenreUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MovieGenreCreateWithoutMovieInput, MovieGenreUncheckedCreateWithoutMovieInput> | MovieGenreCreateWithoutMovieInput[] | MovieGenreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutMovieInput | MovieGenreCreateOrConnectWithoutMovieInput[]
    upsert?: MovieGenreUpsertWithWhereUniqueWithoutMovieInput | MovieGenreUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MovieGenreCreateManyMovieInputEnvelope
    set?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    disconnect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    delete?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    update?: MovieGenreUpdateWithWhereUniqueWithoutMovieInput | MovieGenreUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MovieGenreUpdateManyWithWhereWithoutMovieInput | MovieGenreUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MovieGenreScalarWhereInput | MovieGenreScalarWhereInput[]
  }

  export type MovieActorUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MovieActorCreateWithoutMovieInput, MovieActorUncheckedCreateWithoutMovieInput> | MovieActorCreateWithoutMovieInput[] | MovieActorUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieActorCreateOrConnectWithoutMovieInput | MovieActorCreateOrConnectWithoutMovieInput[]
    upsert?: MovieActorUpsertWithWhereUniqueWithoutMovieInput | MovieActorUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MovieActorCreateManyMovieInputEnvelope
    set?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    disconnect?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    delete?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    connect?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    update?: MovieActorUpdateWithWhereUniqueWithoutMovieInput | MovieActorUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MovieActorUpdateManyWithWhereWithoutMovieInput | MovieActorUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MovieActorScalarWhereInput | MovieActorScalarWhereInput[]
  }

  export type MovieDirectorUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MovieDirectorCreateWithoutMovieInput, MovieDirectorUncheckedCreateWithoutMovieInput> | MovieDirectorCreateWithoutMovieInput[] | MovieDirectorUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieDirectorCreateOrConnectWithoutMovieInput | MovieDirectorCreateOrConnectWithoutMovieInput[]
    upsert?: MovieDirectorUpsertWithWhereUniqueWithoutMovieInput | MovieDirectorUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MovieDirectorCreateManyMovieInputEnvelope
    set?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    disconnect?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    delete?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    connect?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    update?: MovieDirectorUpdateWithWhereUniqueWithoutMovieInput | MovieDirectorUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MovieDirectorUpdateManyWithWhereWithoutMovieInput | MovieDirectorUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MovieDirectorScalarWhereInput | MovieDirectorScalarWhereInput[]
  }

  export type MovieCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<MovieCreateWithoutEpisodesInput, MovieUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutEpisodesInput
    connect?: MovieWhereUniqueInput
  }

  export type WatchHistoryCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<WatchHistoryCreateWithoutEpisodeInput, WatchHistoryUncheckedCreateWithoutEpisodeInput> | WatchHistoryCreateWithoutEpisodeInput[] | WatchHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutEpisodeInput | WatchHistoryCreateOrConnectWithoutEpisodeInput[]
    createMany?: WatchHistoryCreateManyEpisodeInputEnvelope
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
  }

  export type WatchHistoryUncheckedCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<WatchHistoryCreateWithoutEpisodeInput, WatchHistoryUncheckedCreateWithoutEpisodeInput> | WatchHistoryCreateWithoutEpisodeInput[] | WatchHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutEpisodeInput | WatchHistoryCreateOrConnectWithoutEpisodeInput[]
    createMany?: WatchHistoryCreateManyEpisodeInputEnvelope
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
  }

  export type MovieUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: XOR<MovieCreateWithoutEpisodesInput, MovieUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutEpisodesInput
    upsert?: MovieUpsertWithoutEpisodesInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutEpisodesInput, MovieUpdateWithoutEpisodesInput>, MovieUncheckedUpdateWithoutEpisodesInput>
  }

  export type WatchHistoryUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<WatchHistoryCreateWithoutEpisodeInput, WatchHistoryUncheckedCreateWithoutEpisodeInput> | WatchHistoryCreateWithoutEpisodeInput[] | WatchHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutEpisodeInput | WatchHistoryCreateOrConnectWithoutEpisodeInput[]
    upsert?: WatchHistoryUpsertWithWhereUniqueWithoutEpisodeInput | WatchHistoryUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: WatchHistoryCreateManyEpisodeInputEnvelope
    set?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    disconnect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    delete?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    update?: WatchHistoryUpdateWithWhereUniqueWithoutEpisodeInput | WatchHistoryUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: WatchHistoryUpdateManyWithWhereWithoutEpisodeInput | WatchHistoryUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
  }

  export type WatchHistoryUncheckedUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<WatchHistoryCreateWithoutEpisodeInput, WatchHistoryUncheckedCreateWithoutEpisodeInput> | WatchHistoryCreateWithoutEpisodeInput[] | WatchHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutEpisodeInput | WatchHistoryCreateOrConnectWithoutEpisodeInput[]
    upsert?: WatchHistoryUpsertWithWhereUniqueWithoutEpisodeInput | WatchHistoryUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: WatchHistoryCreateManyEpisodeInputEnvelope
    set?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    disconnect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    delete?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    update?: WatchHistoryUpdateWithWhereUniqueWithoutEpisodeInput | WatchHistoryUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: WatchHistoryUpdateManyWithWhereWithoutEpisodeInput | WatchHistoryUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
  }

  export type MovieGenreCreateNestedManyWithoutGenreInput = {
    create?: XOR<MovieGenreCreateWithoutGenreInput, MovieGenreUncheckedCreateWithoutGenreInput> | MovieGenreCreateWithoutGenreInput[] | MovieGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutGenreInput | MovieGenreCreateOrConnectWithoutGenreInput[]
    createMany?: MovieGenreCreateManyGenreInputEnvelope
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
  }

  export type MovieGenreUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<MovieGenreCreateWithoutGenreInput, MovieGenreUncheckedCreateWithoutGenreInput> | MovieGenreCreateWithoutGenreInput[] | MovieGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutGenreInput | MovieGenreCreateOrConnectWithoutGenreInput[]
    createMany?: MovieGenreCreateManyGenreInputEnvelope
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
  }

  export type MovieGenreUpdateManyWithoutGenreNestedInput = {
    create?: XOR<MovieGenreCreateWithoutGenreInput, MovieGenreUncheckedCreateWithoutGenreInput> | MovieGenreCreateWithoutGenreInput[] | MovieGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutGenreInput | MovieGenreCreateOrConnectWithoutGenreInput[]
    upsert?: MovieGenreUpsertWithWhereUniqueWithoutGenreInput | MovieGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: MovieGenreCreateManyGenreInputEnvelope
    set?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    disconnect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    delete?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    update?: MovieGenreUpdateWithWhereUniqueWithoutGenreInput | MovieGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: MovieGenreUpdateManyWithWhereWithoutGenreInput | MovieGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: MovieGenreScalarWhereInput | MovieGenreScalarWhereInput[]
  }

  export type MovieGenreUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<MovieGenreCreateWithoutGenreInput, MovieGenreUncheckedCreateWithoutGenreInput> | MovieGenreCreateWithoutGenreInput[] | MovieGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutGenreInput | MovieGenreCreateOrConnectWithoutGenreInput[]
    upsert?: MovieGenreUpsertWithWhereUniqueWithoutGenreInput | MovieGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: MovieGenreCreateManyGenreInputEnvelope
    set?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    disconnect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    delete?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    update?: MovieGenreUpdateWithWhereUniqueWithoutGenreInput | MovieGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: MovieGenreUpdateManyWithWhereWithoutGenreInput | MovieGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: MovieGenreScalarWhereInput | MovieGenreScalarWhereInput[]
  }

  export type MovieActorCreateNestedManyWithoutActorInput = {
    create?: XOR<MovieActorCreateWithoutActorInput, MovieActorUncheckedCreateWithoutActorInput> | MovieActorCreateWithoutActorInput[] | MovieActorUncheckedCreateWithoutActorInput[]
    connectOrCreate?: MovieActorCreateOrConnectWithoutActorInput | MovieActorCreateOrConnectWithoutActorInput[]
    createMany?: MovieActorCreateManyActorInputEnvelope
    connect?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
  }

  export type MovieActorUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<MovieActorCreateWithoutActorInput, MovieActorUncheckedCreateWithoutActorInput> | MovieActorCreateWithoutActorInput[] | MovieActorUncheckedCreateWithoutActorInput[]
    connectOrCreate?: MovieActorCreateOrConnectWithoutActorInput | MovieActorCreateOrConnectWithoutActorInput[]
    createMany?: MovieActorCreateManyActorInputEnvelope
    connect?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
  }

  export type MovieActorUpdateManyWithoutActorNestedInput = {
    create?: XOR<MovieActorCreateWithoutActorInput, MovieActorUncheckedCreateWithoutActorInput> | MovieActorCreateWithoutActorInput[] | MovieActorUncheckedCreateWithoutActorInput[]
    connectOrCreate?: MovieActorCreateOrConnectWithoutActorInput | MovieActorCreateOrConnectWithoutActorInput[]
    upsert?: MovieActorUpsertWithWhereUniqueWithoutActorInput | MovieActorUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: MovieActorCreateManyActorInputEnvelope
    set?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    disconnect?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    delete?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    connect?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    update?: MovieActorUpdateWithWhereUniqueWithoutActorInput | MovieActorUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: MovieActorUpdateManyWithWhereWithoutActorInput | MovieActorUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: MovieActorScalarWhereInput | MovieActorScalarWhereInput[]
  }

  export type MovieActorUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<MovieActorCreateWithoutActorInput, MovieActorUncheckedCreateWithoutActorInput> | MovieActorCreateWithoutActorInput[] | MovieActorUncheckedCreateWithoutActorInput[]
    connectOrCreate?: MovieActorCreateOrConnectWithoutActorInput | MovieActorCreateOrConnectWithoutActorInput[]
    upsert?: MovieActorUpsertWithWhereUniqueWithoutActorInput | MovieActorUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: MovieActorCreateManyActorInputEnvelope
    set?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    disconnect?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    delete?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    connect?: MovieActorWhereUniqueInput | MovieActorWhereUniqueInput[]
    update?: MovieActorUpdateWithWhereUniqueWithoutActorInput | MovieActorUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: MovieActorUpdateManyWithWhereWithoutActorInput | MovieActorUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: MovieActorScalarWhereInput | MovieActorScalarWhereInput[]
  }

  export type MovieDirectorCreateNestedManyWithoutDirectorInput = {
    create?: XOR<MovieDirectorCreateWithoutDirectorInput, MovieDirectorUncheckedCreateWithoutDirectorInput> | MovieDirectorCreateWithoutDirectorInput[] | MovieDirectorUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: MovieDirectorCreateOrConnectWithoutDirectorInput | MovieDirectorCreateOrConnectWithoutDirectorInput[]
    createMany?: MovieDirectorCreateManyDirectorInputEnvelope
    connect?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
  }

  export type MovieDirectorUncheckedCreateNestedManyWithoutDirectorInput = {
    create?: XOR<MovieDirectorCreateWithoutDirectorInput, MovieDirectorUncheckedCreateWithoutDirectorInput> | MovieDirectorCreateWithoutDirectorInput[] | MovieDirectorUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: MovieDirectorCreateOrConnectWithoutDirectorInput | MovieDirectorCreateOrConnectWithoutDirectorInput[]
    createMany?: MovieDirectorCreateManyDirectorInputEnvelope
    connect?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
  }

  export type MovieDirectorUpdateManyWithoutDirectorNestedInput = {
    create?: XOR<MovieDirectorCreateWithoutDirectorInput, MovieDirectorUncheckedCreateWithoutDirectorInput> | MovieDirectorCreateWithoutDirectorInput[] | MovieDirectorUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: MovieDirectorCreateOrConnectWithoutDirectorInput | MovieDirectorCreateOrConnectWithoutDirectorInput[]
    upsert?: MovieDirectorUpsertWithWhereUniqueWithoutDirectorInput | MovieDirectorUpsertWithWhereUniqueWithoutDirectorInput[]
    createMany?: MovieDirectorCreateManyDirectorInputEnvelope
    set?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    disconnect?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    delete?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    connect?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    update?: MovieDirectorUpdateWithWhereUniqueWithoutDirectorInput | MovieDirectorUpdateWithWhereUniqueWithoutDirectorInput[]
    updateMany?: MovieDirectorUpdateManyWithWhereWithoutDirectorInput | MovieDirectorUpdateManyWithWhereWithoutDirectorInput[]
    deleteMany?: MovieDirectorScalarWhereInput | MovieDirectorScalarWhereInput[]
  }

  export type MovieDirectorUncheckedUpdateManyWithoutDirectorNestedInput = {
    create?: XOR<MovieDirectorCreateWithoutDirectorInput, MovieDirectorUncheckedCreateWithoutDirectorInput> | MovieDirectorCreateWithoutDirectorInput[] | MovieDirectorUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: MovieDirectorCreateOrConnectWithoutDirectorInput | MovieDirectorCreateOrConnectWithoutDirectorInput[]
    upsert?: MovieDirectorUpsertWithWhereUniqueWithoutDirectorInput | MovieDirectorUpsertWithWhereUniqueWithoutDirectorInput[]
    createMany?: MovieDirectorCreateManyDirectorInputEnvelope
    set?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    disconnect?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    delete?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    connect?: MovieDirectorWhereUniqueInput | MovieDirectorWhereUniqueInput[]
    update?: MovieDirectorUpdateWithWhereUniqueWithoutDirectorInput | MovieDirectorUpdateWithWhereUniqueWithoutDirectorInput[]
    updateMany?: MovieDirectorUpdateManyWithWhereWithoutDirectorInput | MovieDirectorUpdateManyWithWhereWithoutDirectorInput[]
    deleteMany?: MovieDirectorScalarWhereInput | MovieDirectorScalarWhereInput[]
  }

  export type MovieCreateNestedOneWithoutMovieGenresInput = {
    create?: XOR<MovieCreateWithoutMovieGenresInput, MovieUncheckedCreateWithoutMovieGenresInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieGenresInput
    connect?: MovieWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutMovieGenresInput = {
    create?: XOR<GenreCreateWithoutMovieGenresInput, GenreUncheckedCreateWithoutMovieGenresInput>
    connectOrCreate?: GenreCreateOrConnectWithoutMovieGenresInput
    connect?: GenreWhereUniqueInput
  }

  export type MovieUpdateOneRequiredWithoutMovieGenresNestedInput = {
    create?: XOR<MovieCreateWithoutMovieGenresInput, MovieUncheckedCreateWithoutMovieGenresInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieGenresInput
    upsert?: MovieUpsertWithoutMovieGenresInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutMovieGenresInput, MovieUpdateWithoutMovieGenresInput>, MovieUncheckedUpdateWithoutMovieGenresInput>
  }

  export type GenreUpdateOneRequiredWithoutMovieGenresNestedInput = {
    create?: XOR<GenreCreateWithoutMovieGenresInput, GenreUncheckedCreateWithoutMovieGenresInput>
    connectOrCreate?: GenreCreateOrConnectWithoutMovieGenresInput
    upsert?: GenreUpsertWithoutMovieGenresInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutMovieGenresInput, GenreUpdateWithoutMovieGenresInput>, GenreUncheckedUpdateWithoutMovieGenresInput>
  }

  export type MovieCreateNestedOneWithoutMovieActorsInput = {
    create?: XOR<MovieCreateWithoutMovieActorsInput, MovieUncheckedCreateWithoutMovieActorsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieActorsInput
    connect?: MovieWhereUniqueInput
  }

  export type ActorCreateNestedOneWithoutMovieActorsInput = {
    create?: XOR<ActorCreateWithoutMovieActorsInput, ActorUncheckedCreateWithoutMovieActorsInput>
    connectOrCreate?: ActorCreateOrConnectWithoutMovieActorsInput
    connect?: ActorWhereUniqueInput
  }

  export type MovieUpdateOneRequiredWithoutMovieActorsNestedInput = {
    create?: XOR<MovieCreateWithoutMovieActorsInput, MovieUncheckedCreateWithoutMovieActorsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieActorsInput
    upsert?: MovieUpsertWithoutMovieActorsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutMovieActorsInput, MovieUpdateWithoutMovieActorsInput>, MovieUncheckedUpdateWithoutMovieActorsInput>
  }

  export type ActorUpdateOneRequiredWithoutMovieActorsNestedInput = {
    create?: XOR<ActorCreateWithoutMovieActorsInput, ActorUncheckedCreateWithoutMovieActorsInput>
    connectOrCreate?: ActorCreateOrConnectWithoutMovieActorsInput
    upsert?: ActorUpsertWithoutMovieActorsInput
    connect?: ActorWhereUniqueInput
    update?: XOR<XOR<ActorUpdateToOneWithWhereWithoutMovieActorsInput, ActorUpdateWithoutMovieActorsInput>, ActorUncheckedUpdateWithoutMovieActorsInput>
  }

  export type MovieCreateNestedOneWithoutMovieDirectorsInput = {
    create?: XOR<MovieCreateWithoutMovieDirectorsInput, MovieUncheckedCreateWithoutMovieDirectorsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieDirectorsInput
    connect?: MovieWhereUniqueInput
  }

  export type DirectorCreateNestedOneWithoutMovieDirectorsInput = {
    create?: XOR<DirectorCreateWithoutMovieDirectorsInput, DirectorUncheckedCreateWithoutMovieDirectorsInput>
    connectOrCreate?: DirectorCreateOrConnectWithoutMovieDirectorsInput
    connect?: DirectorWhereUniqueInput
  }

  export type MovieUpdateOneRequiredWithoutMovieDirectorsNestedInput = {
    create?: XOR<MovieCreateWithoutMovieDirectorsInput, MovieUncheckedCreateWithoutMovieDirectorsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieDirectorsInput
    upsert?: MovieUpsertWithoutMovieDirectorsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutMovieDirectorsInput, MovieUpdateWithoutMovieDirectorsInput>, MovieUncheckedUpdateWithoutMovieDirectorsInput>
  }

  export type DirectorUpdateOneRequiredWithoutMovieDirectorsNestedInput = {
    create?: XOR<DirectorCreateWithoutMovieDirectorsInput, DirectorUncheckedCreateWithoutMovieDirectorsInput>
    connectOrCreate?: DirectorCreateOrConnectWithoutMovieDirectorsInput
    upsert?: DirectorUpsertWithoutMovieDirectorsInput
    connect?: DirectorWhereUniqueInput
    update?: XOR<XOR<DirectorUpdateToOneWithWhereWithoutMovieDirectorsInput, DirectorUpdateWithoutMovieDirectorsInput>, DirectorUncheckedUpdateWithoutMovieDirectorsInput>
  }

  export type UserCreateNestedOneWithoutWatchHistoryInput = {
    create?: XOR<UserCreateWithoutWatchHistoryInput, UserUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutWatchHistoryInput = {
    create?: XOR<MovieCreateWithoutWatchHistoryInput, MovieUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: MovieCreateOrConnectWithoutWatchHistoryInput
    connect?: MovieWhereUniqueInput
  }

  export type EpisodeCreateNestedOneWithoutWatchHistoryInput = {
    create?: XOR<EpisodeCreateWithoutWatchHistoryInput, EpisodeUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutWatchHistoryInput
    connect?: EpisodeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWatchHistoryNestedInput = {
    create?: XOR<UserCreateWithoutWatchHistoryInput, UserUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchHistoryInput
    upsert?: UserUpsertWithoutWatchHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchHistoryInput, UserUpdateWithoutWatchHistoryInput>, UserUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type MovieUpdateOneRequiredWithoutWatchHistoryNestedInput = {
    create?: XOR<MovieCreateWithoutWatchHistoryInput, MovieUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: MovieCreateOrConnectWithoutWatchHistoryInput
    upsert?: MovieUpsertWithoutWatchHistoryInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutWatchHistoryInput, MovieUpdateWithoutWatchHistoryInput>, MovieUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type EpisodeUpdateOneWithoutWatchHistoryNestedInput = {
    create?: XOR<EpisodeCreateWithoutWatchHistoryInput, EpisodeUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutWatchHistoryInput
    upsert?: EpisodeUpsertWithoutWatchHistoryInput
    disconnect?: EpisodeWhereInput | boolean
    delete?: EpisodeWhereInput | boolean
    connect?: EpisodeWhereUniqueInput
    update?: XOR<XOR<EpisodeUpdateToOneWithWhereWithoutWatchHistoryInput, EpisodeUpdateWithoutWatchHistoryInput>, EpisodeUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type UserCreateNestedOneWithoutWatchListsInput = {
    create?: XOR<UserCreateWithoutWatchListsInput, UserUncheckedCreateWithoutWatchListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchListsInput
    connect?: UserWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutWatchListsInput = {
    create?: XOR<MovieCreateWithoutWatchListsInput, MovieUncheckedCreateWithoutWatchListsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutWatchListsInput
    connect?: MovieWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWatchListsNestedInput = {
    create?: XOR<UserCreateWithoutWatchListsInput, UserUncheckedCreateWithoutWatchListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchListsInput
    upsert?: UserUpsertWithoutWatchListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchListsInput, UserUpdateWithoutWatchListsInput>, UserUncheckedUpdateWithoutWatchListsInput>
  }

  export type MovieUpdateOneRequiredWithoutWatchListsNestedInput = {
    create?: XOR<MovieCreateWithoutWatchListsInput, MovieUncheckedCreateWithoutWatchListsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutWatchListsInput
    upsert?: MovieUpsertWithoutWatchListsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutWatchListsInput, MovieUpdateWithoutWatchListsInput>, MovieUncheckedUpdateWithoutWatchListsInput>
  }

  export type UserCreateNestedOneWithoutRatingsInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutRatingsInput = {
    create?: XOR<MovieCreateWithoutRatingsInput, MovieUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutRatingsInput
    connect?: MovieWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    upsert?: UserUpsertWithoutRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsInput, UserUpdateWithoutRatingsInput>, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type MovieUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<MovieCreateWithoutRatingsInput, MovieUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutRatingsInput
    upsert?: MovieUpsertWithoutRatingsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutRatingsInput, MovieUpdateWithoutRatingsInput>, MovieUncheckedUpdateWithoutRatingsInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutCommentsInput = {
    create?: XOR<MovieCreateWithoutCommentsInput, MovieUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutCommentsInput
    connect?: MovieWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type MovieUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<MovieCreateWithoutCommentsInput, MovieUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutCommentsInput
    upsert?: MovieUpsertWithoutCommentsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutCommentsInput, MovieUpdateWithoutCommentsInput>, MovieUncheckedUpdateWithoutCommentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type WatchHistoryCreateWithoutUserInput = {
    watchedAt?: Date | string
    progress?: number | null
    movie: MovieCreateNestedOneWithoutWatchHistoryInput
    episode?: EpisodeCreateNestedOneWithoutWatchHistoryInput
  }

  export type WatchHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    movieId: number
    episodeId?: number | null
    watchedAt?: Date | string
    progress?: number | null
  }

  export type WatchHistoryCreateOrConnectWithoutUserInput = {
    where: WatchHistoryWhereUniqueInput
    create: XOR<WatchHistoryCreateWithoutUserInput, WatchHistoryUncheckedCreateWithoutUserInput>
  }

  export type WatchHistoryCreateManyUserInputEnvelope = {
    data: WatchHistoryCreateManyUserInput | WatchHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchListCreateWithoutUserInput = {
    addedAt?: Date | string
    movie: MovieCreateNestedOneWithoutWatchListsInput
  }

  export type WatchListUncheckedCreateWithoutUserInput = {
    movieId: number
    addedAt?: Date | string
  }

  export type WatchListCreateOrConnectWithoutUserInput = {
    where: WatchListWhereUniqueInput
    create: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput>
  }

  export type WatchListCreateManyUserInputEnvelope = {
    data: WatchListCreateManyUserInput | WatchListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutUserInput = {
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutUserInput = {
    movieId: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutUserInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingCreateManyUserInputEnvelope = {
    data: RatingCreateManyUserInput | RatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    movieId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchHistoryWhereUniqueInput
    update: XOR<WatchHistoryUpdateWithoutUserInput, WatchHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<WatchHistoryCreateWithoutUserInput, WatchHistoryUncheckedCreateWithoutUserInput>
  }

  export type WatchHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchHistoryWhereUniqueInput
    data: XOR<WatchHistoryUpdateWithoutUserInput, WatchHistoryUncheckedUpdateWithoutUserInput>
  }

  export type WatchHistoryUpdateManyWithWhereWithoutUserInput = {
    where: WatchHistoryScalarWhereInput
    data: XOR<WatchHistoryUpdateManyMutationInput, WatchHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchHistoryScalarWhereInput = {
    AND?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
    OR?: WatchHistoryScalarWhereInput[]
    NOT?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
    id?: IntFilter<"WatchHistory"> | number
    userId?: IntFilter<"WatchHistory"> | number
    movieId?: IntFilter<"WatchHistory"> | number
    episodeId?: IntNullableFilter<"WatchHistory"> | number | null
    watchedAt?: DateTimeFilter<"WatchHistory"> | Date | string
    progress?: IntNullableFilter<"WatchHistory"> | number | null
  }

  export type WatchListUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchListWhereUniqueInput
    update: XOR<WatchListUpdateWithoutUserInput, WatchListUncheckedUpdateWithoutUserInput>
    create: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput>
  }

  export type WatchListUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchListWhereUniqueInput
    data: XOR<WatchListUpdateWithoutUserInput, WatchListUncheckedUpdateWithoutUserInput>
  }

  export type WatchListUpdateManyWithWhereWithoutUserInput = {
    where: WatchListScalarWhereInput
    data: XOR<WatchListUpdateManyMutationInput, WatchListUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchListScalarWhereInput = {
    AND?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
    OR?: WatchListScalarWhereInput[]
    NOT?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
    userId?: IntFilter<"WatchList"> | number
    movieId?: IntFilter<"WatchList"> | number
    addedAt?: DateTimeFilter<"WatchList"> | Date | string
  }

  export type RatingUpsertWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
  }

  export type RatingUpdateManyWithWhereWithoutUserInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutUserInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    userId?: IntFilter<"Rating"> | number
    movieId?: IntFilter<"Rating"> | number
    score?: IntFilter<"Rating"> | number
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    movieId?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type EpisodeCreateWithoutMovieInput = {
    episodeNumber: number
    title?: string | null
    description?: string | null
    videoUrl: string
    duration?: number | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    watchHistory?: WatchHistoryCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateWithoutMovieInput = {
    id?: number
    episodeNumber: number
    title?: string | null
    description?: string | null
    videoUrl: string
    duration?: number | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeCreateOrConnectWithoutMovieInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutMovieInput, EpisodeUncheckedCreateWithoutMovieInput>
  }

  export type EpisodeCreateManyMovieInputEnvelope = {
    data: EpisodeCreateManyMovieInput | EpisodeCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutMovieInput = {
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutMovieInput = {
    userId: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutMovieInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutMovieInput, RatingUncheckedCreateWithoutMovieInput>
  }

  export type RatingCreateManyMovieInputEnvelope = {
    data: RatingCreateManyMovieInput | RatingCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutMovieInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutMovieInput = {
    id?: number
    userId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutMovieInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput>
  }

  export type CommentCreateManyMovieInputEnvelope = {
    data: CommentCreateManyMovieInput | CommentCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type WatchHistoryCreateWithoutMovieInput = {
    watchedAt?: Date | string
    progress?: number | null
    user: UserCreateNestedOneWithoutWatchHistoryInput
    episode?: EpisodeCreateNestedOneWithoutWatchHistoryInput
  }

  export type WatchHistoryUncheckedCreateWithoutMovieInput = {
    id?: number
    userId: number
    episodeId?: number | null
    watchedAt?: Date | string
    progress?: number | null
  }

  export type WatchHistoryCreateOrConnectWithoutMovieInput = {
    where: WatchHistoryWhereUniqueInput
    create: XOR<WatchHistoryCreateWithoutMovieInput, WatchHistoryUncheckedCreateWithoutMovieInput>
  }

  export type WatchHistoryCreateManyMovieInputEnvelope = {
    data: WatchHistoryCreateManyMovieInput | WatchHistoryCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type WatchListCreateWithoutMovieInput = {
    addedAt?: Date | string
    user: UserCreateNestedOneWithoutWatchListsInput
  }

  export type WatchListUncheckedCreateWithoutMovieInput = {
    userId: number
    addedAt?: Date | string
  }

  export type WatchListCreateOrConnectWithoutMovieInput = {
    where: WatchListWhereUniqueInput
    create: XOR<WatchListCreateWithoutMovieInput, WatchListUncheckedCreateWithoutMovieInput>
  }

  export type WatchListCreateManyMovieInputEnvelope = {
    data: WatchListCreateManyMovieInput | WatchListCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type MovieGenreCreateWithoutMovieInput = {
    createdAt?: Date | string
    genre: GenreCreateNestedOneWithoutMovieGenresInput
  }

  export type MovieGenreUncheckedCreateWithoutMovieInput = {
    genreId: number
    createdAt?: Date | string
  }

  export type MovieGenreCreateOrConnectWithoutMovieInput = {
    where: MovieGenreWhereUniqueInput
    create: XOR<MovieGenreCreateWithoutMovieInput, MovieGenreUncheckedCreateWithoutMovieInput>
  }

  export type MovieGenreCreateManyMovieInputEnvelope = {
    data: MovieGenreCreateManyMovieInput | MovieGenreCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type MovieActorCreateWithoutMovieInput = {
    createdAt?: Date | string
    actor: ActorCreateNestedOneWithoutMovieActorsInput
  }

  export type MovieActorUncheckedCreateWithoutMovieInput = {
    actorId: number
    createdAt?: Date | string
  }

  export type MovieActorCreateOrConnectWithoutMovieInput = {
    where: MovieActorWhereUniqueInput
    create: XOR<MovieActorCreateWithoutMovieInput, MovieActorUncheckedCreateWithoutMovieInput>
  }

  export type MovieActorCreateManyMovieInputEnvelope = {
    data: MovieActorCreateManyMovieInput | MovieActorCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type MovieDirectorCreateWithoutMovieInput = {
    createdAt?: Date | string
    director: DirectorCreateNestedOneWithoutMovieDirectorsInput
  }

  export type MovieDirectorUncheckedCreateWithoutMovieInput = {
    directorId: number
    createdAt?: Date | string
  }

  export type MovieDirectorCreateOrConnectWithoutMovieInput = {
    where: MovieDirectorWhereUniqueInput
    create: XOR<MovieDirectorCreateWithoutMovieInput, MovieDirectorUncheckedCreateWithoutMovieInput>
  }

  export type MovieDirectorCreateManyMovieInputEnvelope = {
    data: MovieDirectorCreateManyMovieInput | MovieDirectorCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type EpisodeUpsertWithWhereUniqueWithoutMovieInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutMovieInput, EpisodeUncheckedUpdateWithoutMovieInput>
    create: XOR<EpisodeCreateWithoutMovieInput, EpisodeUncheckedCreateWithoutMovieInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutMovieInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutMovieInput, EpisodeUncheckedUpdateWithoutMovieInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutMovieInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutMovieInput>
  }

  export type EpisodeScalarWhereInput = {
    AND?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    OR?: EpisodeScalarWhereInput[]
    NOT?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    id?: IntFilter<"Episode"> | number
    movieId?: IntFilter<"Episode"> | number
    episodeNumber?: IntFilter<"Episode"> | number
    title?: StringNullableFilter<"Episode"> | string | null
    description?: StringNullableFilter<"Episode"> | string | null
    videoUrl?: StringFilter<"Episode"> | string
    duration?: IntNullableFilter<"Episode"> | number | null
    releaseDate?: DateTimeNullableFilter<"Episode"> | Date | string | null
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
  }

  export type RatingUpsertWithWhereUniqueWithoutMovieInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutMovieInput, RatingUncheckedUpdateWithoutMovieInput>
    create: XOR<RatingCreateWithoutMovieInput, RatingUncheckedCreateWithoutMovieInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutMovieInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutMovieInput, RatingUncheckedUpdateWithoutMovieInput>
  }

  export type RatingUpdateManyWithWhereWithoutMovieInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutMovieInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutMovieInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutMovieInput, CommentUncheckedUpdateWithoutMovieInput>
    create: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutMovieInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutMovieInput, CommentUncheckedUpdateWithoutMovieInput>
  }

  export type CommentUpdateManyWithWhereWithoutMovieInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutMovieInput>
  }

  export type WatchHistoryUpsertWithWhereUniqueWithoutMovieInput = {
    where: WatchHistoryWhereUniqueInput
    update: XOR<WatchHistoryUpdateWithoutMovieInput, WatchHistoryUncheckedUpdateWithoutMovieInput>
    create: XOR<WatchHistoryCreateWithoutMovieInput, WatchHistoryUncheckedCreateWithoutMovieInput>
  }

  export type WatchHistoryUpdateWithWhereUniqueWithoutMovieInput = {
    where: WatchHistoryWhereUniqueInput
    data: XOR<WatchHistoryUpdateWithoutMovieInput, WatchHistoryUncheckedUpdateWithoutMovieInput>
  }

  export type WatchHistoryUpdateManyWithWhereWithoutMovieInput = {
    where: WatchHistoryScalarWhereInput
    data: XOR<WatchHistoryUpdateManyMutationInput, WatchHistoryUncheckedUpdateManyWithoutMovieInput>
  }

  export type WatchListUpsertWithWhereUniqueWithoutMovieInput = {
    where: WatchListWhereUniqueInput
    update: XOR<WatchListUpdateWithoutMovieInput, WatchListUncheckedUpdateWithoutMovieInput>
    create: XOR<WatchListCreateWithoutMovieInput, WatchListUncheckedCreateWithoutMovieInput>
  }

  export type WatchListUpdateWithWhereUniqueWithoutMovieInput = {
    where: WatchListWhereUniqueInput
    data: XOR<WatchListUpdateWithoutMovieInput, WatchListUncheckedUpdateWithoutMovieInput>
  }

  export type WatchListUpdateManyWithWhereWithoutMovieInput = {
    where: WatchListScalarWhereInput
    data: XOR<WatchListUpdateManyMutationInput, WatchListUncheckedUpdateManyWithoutMovieInput>
  }

  export type MovieGenreUpsertWithWhereUniqueWithoutMovieInput = {
    where: MovieGenreWhereUniqueInput
    update: XOR<MovieGenreUpdateWithoutMovieInput, MovieGenreUncheckedUpdateWithoutMovieInput>
    create: XOR<MovieGenreCreateWithoutMovieInput, MovieGenreUncheckedCreateWithoutMovieInput>
  }

  export type MovieGenreUpdateWithWhereUniqueWithoutMovieInput = {
    where: MovieGenreWhereUniqueInput
    data: XOR<MovieGenreUpdateWithoutMovieInput, MovieGenreUncheckedUpdateWithoutMovieInput>
  }

  export type MovieGenreUpdateManyWithWhereWithoutMovieInput = {
    where: MovieGenreScalarWhereInput
    data: XOR<MovieGenreUpdateManyMutationInput, MovieGenreUncheckedUpdateManyWithoutMovieInput>
  }

  export type MovieGenreScalarWhereInput = {
    AND?: MovieGenreScalarWhereInput | MovieGenreScalarWhereInput[]
    OR?: MovieGenreScalarWhereInput[]
    NOT?: MovieGenreScalarWhereInput | MovieGenreScalarWhereInput[]
    movieId?: IntFilter<"MovieGenre"> | number
    genreId?: IntFilter<"MovieGenre"> | number
    createdAt?: DateTimeFilter<"MovieGenre"> | Date | string
  }

  export type MovieActorUpsertWithWhereUniqueWithoutMovieInput = {
    where: MovieActorWhereUniqueInput
    update: XOR<MovieActorUpdateWithoutMovieInput, MovieActorUncheckedUpdateWithoutMovieInput>
    create: XOR<MovieActorCreateWithoutMovieInput, MovieActorUncheckedCreateWithoutMovieInput>
  }

  export type MovieActorUpdateWithWhereUniqueWithoutMovieInput = {
    where: MovieActorWhereUniqueInput
    data: XOR<MovieActorUpdateWithoutMovieInput, MovieActorUncheckedUpdateWithoutMovieInput>
  }

  export type MovieActorUpdateManyWithWhereWithoutMovieInput = {
    where: MovieActorScalarWhereInput
    data: XOR<MovieActorUpdateManyMutationInput, MovieActorUncheckedUpdateManyWithoutMovieInput>
  }

  export type MovieActorScalarWhereInput = {
    AND?: MovieActorScalarWhereInput | MovieActorScalarWhereInput[]
    OR?: MovieActorScalarWhereInput[]
    NOT?: MovieActorScalarWhereInput | MovieActorScalarWhereInput[]
    movieId?: IntFilter<"MovieActor"> | number
    actorId?: IntFilter<"MovieActor"> | number
    createdAt?: DateTimeFilter<"MovieActor"> | Date | string
  }

  export type MovieDirectorUpsertWithWhereUniqueWithoutMovieInput = {
    where: MovieDirectorWhereUniqueInput
    update: XOR<MovieDirectorUpdateWithoutMovieInput, MovieDirectorUncheckedUpdateWithoutMovieInput>
    create: XOR<MovieDirectorCreateWithoutMovieInput, MovieDirectorUncheckedCreateWithoutMovieInput>
  }

  export type MovieDirectorUpdateWithWhereUniqueWithoutMovieInput = {
    where: MovieDirectorWhereUniqueInput
    data: XOR<MovieDirectorUpdateWithoutMovieInput, MovieDirectorUncheckedUpdateWithoutMovieInput>
  }

  export type MovieDirectorUpdateManyWithWhereWithoutMovieInput = {
    where: MovieDirectorScalarWhereInput
    data: XOR<MovieDirectorUpdateManyMutationInput, MovieDirectorUncheckedUpdateManyWithoutMovieInput>
  }

  export type MovieDirectorScalarWhereInput = {
    AND?: MovieDirectorScalarWhereInput | MovieDirectorScalarWhereInput[]
    OR?: MovieDirectorScalarWhereInput[]
    NOT?: MovieDirectorScalarWhereInput | MovieDirectorScalarWhereInput[]
    movieId?: IntFilter<"MovieDirector"> | number
    directorId?: IntFilter<"MovieDirector"> | number
    createdAt?: DateTimeFilter<"MovieDirector"> | Date | string
  }

  export type MovieCreateWithoutEpisodesInput = {
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ratings?: RatingCreateNestedManyWithoutMovieInput
    comments?: CommentCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutMovieInput
    watchLists?: WatchListCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutEpisodesInput = {
    id?: number
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutMovieInput
    watchLists?: WatchListUncheckedCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreUncheckedCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorUncheckedCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutEpisodesInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutEpisodesInput, MovieUncheckedCreateWithoutEpisodesInput>
  }

  export type WatchHistoryCreateWithoutEpisodeInput = {
    watchedAt?: Date | string
    progress?: number | null
    user: UserCreateNestedOneWithoutWatchHistoryInput
    movie: MovieCreateNestedOneWithoutWatchHistoryInput
  }

  export type WatchHistoryUncheckedCreateWithoutEpisodeInput = {
    id?: number
    userId: number
    movieId: number
    watchedAt?: Date | string
    progress?: number | null
  }

  export type WatchHistoryCreateOrConnectWithoutEpisodeInput = {
    where: WatchHistoryWhereUniqueInput
    create: XOR<WatchHistoryCreateWithoutEpisodeInput, WatchHistoryUncheckedCreateWithoutEpisodeInput>
  }

  export type WatchHistoryCreateManyEpisodeInputEnvelope = {
    data: WatchHistoryCreateManyEpisodeInput | WatchHistoryCreateManyEpisodeInput[]
    skipDuplicates?: boolean
  }

  export type MovieUpsertWithoutEpisodesInput = {
    update: XOR<MovieUpdateWithoutEpisodesInput, MovieUncheckedUpdateWithoutEpisodesInput>
    create: XOR<MovieCreateWithoutEpisodesInput, MovieUncheckedCreateWithoutEpisodesInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutEpisodesInput, MovieUncheckedUpdateWithoutEpisodesInput>
  }

  export type MovieUpdateWithoutEpisodesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    comments?: CommentUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUncheckedUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUncheckedUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUncheckedUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type WatchHistoryUpsertWithWhereUniqueWithoutEpisodeInput = {
    where: WatchHistoryWhereUniqueInput
    update: XOR<WatchHistoryUpdateWithoutEpisodeInput, WatchHistoryUncheckedUpdateWithoutEpisodeInput>
    create: XOR<WatchHistoryCreateWithoutEpisodeInput, WatchHistoryUncheckedCreateWithoutEpisodeInput>
  }

  export type WatchHistoryUpdateWithWhereUniqueWithoutEpisodeInput = {
    where: WatchHistoryWhereUniqueInput
    data: XOR<WatchHistoryUpdateWithoutEpisodeInput, WatchHistoryUncheckedUpdateWithoutEpisodeInput>
  }

  export type WatchHistoryUpdateManyWithWhereWithoutEpisodeInput = {
    where: WatchHistoryScalarWhereInput
    data: XOR<WatchHistoryUpdateManyMutationInput, WatchHistoryUncheckedUpdateManyWithoutEpisodeInput>
  }

  export type MovieGenreCreateWithoutGenreInput = {
    createdAt?: Date | string
    movie: MovieCreateNestedOneWithoutMovieGenresInput
  }

  export type MovieGenreUncheckedCreateWithoutGenreInput = {
    movieId: number
    createdAt?: Date | string
  }

  export type MovieGenreCreateOrConnectWithoutGenreInput = {
    where: MovieGenreWhereUniqueInput
    create: XOR<MovieGenreCreateWithoutGenreInput, MovieGenreUncheckedCreateWithoutGenreInput>
  }

  export type MovieGenreCreateManyGenreInputEnvelope = {
    data: MovieGenreCreateManyGenreInput | MovieGenreCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type MovieGenreUpsertWithWhereUniqueWithoutGenreInput = {
    where: MovieGenreWhereUniqueInput
    update: XOR<MovieGenreUpdateWithoutGenreInput, MovieGenreUncheckedUpdateWithoutGenreInput>
    create: XOR<MovieGenreCreateWithoutGenreInput, MovieGenreUncheckedCreateWithoutGenreInput>
  }

  export type MovieGenreUpdateWithWhereUniqueWithoutGenreInput = {
    where: MovieGenreWhereUniqueInput
    data: XOR<MovieGenreUpdateWithoutGenreInput, MovieGenreUncheckedUpdateWithoutGenreInput>
  }

  export type MovieGenreUpdateManyWithWhereWithoutGenreInput = {
    where: MovieGenreScalarWhereInput
    data: XOR<MovieGenreUpdateManyMutationInput, MovieGenreUncheckedUpdateManyWithoutGenreInput>
  }

  export type MovieActorCreateWithoutActorInput = {
    createdAt?: Date | string
    movie: MovieCreateNestedOneWithoutMovieActorsInput
  }

  export type MovieActorUncheckedCreateWithoutActorInput = {
    movieId: number
    createdAt?: Date | string
  }

  export type MovieActorCreateOrConnectWithoutActorInput = {
    where: MovieActorWhereUniqueInput
    create: XOR<MovieActorCreateWithoutActorInput, MovieActorUncheckedCreateWithoutActorInput>
  }

  export type MovieActorCreateManyActorInputEnvelope = {
    data: MovieActorCreateManyActorInput | MovieActorCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type MovieActorUpsertWithWhereUniqueWithoutActorInput = {
    where: MovieActorWhereUniqueInput
    update: XOR<MovieActorUpdateWithoutActorInput, MovieActorUncheckedUpdateWithoutActorInput>
    create: XOR<MovieActorCreateWithoutActorInput, MovieActorUncheckedCreateWithoutActorInput>
  }

  export type MovieActorUpdateWithWhereUniqueWithoutActorInput = {
    where: MovieActorWhereUniqueInput
    data: XOR<MovieActorUpdateWithoutActorInput, MovieActorUncheckedUpdateWithoutActorInput>
  }

  export type MovieActorUpdateManyWithWhereWithoutActorInput = {
    where: MovieActorScalarWhereInput
    data: XOR<MovieActorUpdateManyMutationInput, MovieActorUncheckedUpdateManyWithoutActorInput>
  }

  export type MovieDirectorCreateWithoutDirectorInput = {
    createdAt?: Date | string
    movie: MovieCreateNestedOneWithoutMovieDirectorsInput
  }

  export type MovieDirectorUncheckedCreateWithoutDirectorInput = {
    movieId: number
    createdAt?: Date | string
  }

  export type MovieDirectorCreateOrConnectWithoutDirectorInput = {
    where: MovieDirectorWhereUniqueInput
    create: XOR<MovieDirectorCreateWithoutDirectorInput, MovieDirectorUncheckedCreateWithoutDirectorInput>
  }

  export type MovieDirectorCreateManyDirectorInputEnvelope = {
    data: MovieDirectorCreateManyDirectorInput | MovieDirectorCreateManyDirectorInput[]
    skipDuplicates?: boolean
  }

  export type MovieDirectorUpsertWithWhereUniqueWithoutDirectorInput = {
    where: MovieDirectorWhereUniqueInput
    update: XOR<MovieDirectorUpdateWithoutDirectorInput, MovieDirectorUncheckedUpdateWithoutDirectorInput>
    create: XOR<MovieDirectorCreateWithoutDirectorInput, MovieDirectorUncheckedCreateWithoutDirectorInput>
  }

  export type MovieDirectorUpdateWithWhereUniqueWithoutDirectorInput = {
    where: MovieDirectorWhereUniqueInput
    data: XOR<MovieDirectorUpdateWithoutDirectorInput, MovieDirectorUncheckedUpdateWithoutDirectorInput>
  }

  export type MovieDirectorUpdateManyWithWhereWithoutDirectorInput = {
    where: MovieDirectorScalarWhereInput
    data: XOR<MovieDirectorUpdateManyMutationInput, MovieDirectorUncheckedUpdateManyWithoutDirectorInput>
  }

  export type MovieCreateWithoutMovieGenresInput = {
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutMovieInput
    ratings?: RatingCreateNestedManyWithoutMovieInput
    comments?: CommentCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutMovieInput
    watchLists?: WatchListCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutMovieGenresInput = {
    id?: number
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutMovieInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutMovieInput
    watchLists?: WatchListUncheckedCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorUncheckedCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutMovieGenresInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutMovieGenresInput, MovieUncheckedCreateWithoutMovieGenresInput>
  }

  export type GenreCreateWithoutMovieGenresInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreUncheckedCreateWithoutMovieGenresInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreCreateOrConnectWithoutMovieGenresInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutMovieGenresInput, GenreUncheckedCreateWithoutMovieGenresInput>
  }

  export type MovieUpsertWithoutMovieGenresInput = {
    update: XOR<MovieUpdateWithoutMovieGenresInput, MovieUncheckedUpdateWithoutMovieGenresInput>
    create: XOR<MovieCreateWithoutMovieGenresInput, MovieUncheckedCreateWithoutMovieGenresInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutMovieGenresInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutMovieGenresInput, MovieUncheckedUpdateWithoutMovieGenresInput>
  }

  export type MovieUpdateWithoutMovieGenresInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutMovieNestedInput
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    comments?: CommentUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutMovieGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutMovieNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUncheckedUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUncheckedUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type GenreUpsertWithoutMovieGenresInput = {
    update: XOR<GenreUpdateWithoutMovieGenresInput, GenreUncheckedUpdateWithoutMovieGenresInput>
    create: XOR<GenreCreateWithoutMovieGenresInput, GenreUncheckedCreateWithoutMovieGenresInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutMovieGenresInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutMovieGenresInput, GenreUncheckedUpdateWithoutMovieGenresInput>
  }

  export type GenreUpdateWithoutMovieGenresInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateWithoutMovieGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCreateWithoutMovieActorsInput = {
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutMovieInput
    ratings?: RatingCreateNestedManyWithoutMovieInput
    comments?: CommentCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutMovieInput
    watchLists?: WatchListCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutMovieActorsInput = {
    id?: number
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutMovieInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutMovieInput
    watchLists?: WatchListUncheckedCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreUncheckedCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutMovieActorsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutMovieActorsInput, MovieUncheckedCreateWithoutMovieActorsInput>
  }

  export type ActorCreateWithoutMovieActorsInput = {
    name: string
    bio?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActorUncheckedCreateWithoutMovieActorsInput = {
    id?: number
    name: string
    bio?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActorCreateOrConnectWithoutMovieActorsInput = {
    where: ActorWhereUniqueInput
    create: XOR<ActorCreateWithoutMovieActorsInput, ActorUncheckedCreateWithoutMovieActorsInput>
  }

  export type MovieUpsertWithoutMovieActorsInput = {
    update: XOR<MovieUpdateWithoutMovieActorsInput, MovieUncheckedUpdateWithoutMovieActorsInput>
    create: XOR<MovieCreateWithoutMovieActorsInput, MovieUncheckedCreateWithoutMovieActorsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutMovieActorsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutMovieActorsInput, MovieUncheckedUpdateWithoutMovieActorsInput>
  }

  export type MovieUpdateWithoutMovieActorsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutMovieNestedInput
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    comments?: CommentUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutMovieActorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutMovieNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUncheckedUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUncheckedUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type ActorUpsertWithoutMovieActorsInput = {
    update: XOR<ActorUpdateWithoutMovieActorsInput, ActorUncheckedUpdateWithoutMovieActorsInput>
    create: XOR<ActorCreateWithoutMovieActorsInput, ActorUncheckedCreateWithoutMovieActorsInput>
    where?: ActorWhereInput
  }

  export type ActorUpdateToOneWithWhereWithoutMovieActorsInput = {
    where?: ActorWhereInput
    data: XOR<ActorUpdateWithoutMovieActorsInput, ActorUncheckedUpdateWithoutMovieActorsInput>
  }

  export type ActorUpdateWithoutMovieActorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActorUncheckedUpdateWithoutMovieActorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCreateWithoutMovieDirectorsInput = {
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutMovieInput
    ratings?: RatingCreateNestedManyWithoutMovieInput
    comments?: CommentCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutMovieInput
    watchLists?: WatchListCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutMovieDirectorsInput = {
    id?: number
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutMovieInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutMovieInput
    watchLists?: WatchListUncheckedCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreUncheckedCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutMovieDirectorsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutMovieDirectorsInput, MovieUncheckedCreateWithoutMovieDirectorsInput>
  }

  export type DirectorCreateWithoutMovieDirectorsInput = {
    name: string
    bio?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectorUncheckedCreateWithoutMovieDirectorsInput = {
    id?: number
    name: string
    bio?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectorCreateOrConnectWithoutMovieDirectorsInput = {
    where: DirectorWhereUniqueInput
    create: XOR<DirectorCreateWithoutMovieDirectorsInput, DirectorUncheckedCreateWithoutMovieDirectorsInput>
  }

  export type MovieUpsertWithoutMovieDirectorsInput = {
    update: XOR<MovieUpdateWithoutMovieDirectorsInput, MovieUncheckedUpdateWithoutMovieDirectorsInput>
    create: XOR<MovieCreateWithoutMovieDirectorsInput, MovieUncheckedCreateWithoutMovieDirectorsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutMovieDirectorsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutMovieDirectorsInput, MovieUncheckedUpdateWithoutMovieDirectorsInput>
  }

  export type MovieUpdateWithoutMovieDirectorsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutMovieNestedInput
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    comments?: CommentUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutMovieDirectorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutMovieNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUncheckedUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUncheckedUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type DirectorUpsertWithoutMovieDirectorsInput = {
    update: XOR<DirectorUpdateWithoutMovieDirectorsInput, DirectorUncheckedUpdateWithoutMovieDirectorsInput>
    create: XOR<DirectorCreateWithoutMovieDirectorsInput, DirectorUncheckedCreateWithoutMovieDirectorsInput>
    where?: DirectorWhereInput
  }

  export type DirectorUpdateToOneWithWhereWithoutMovieDirectorsInput = {
    where?: DirectorWhereInput
    data: XOR<DirectorUpdateWithoutMovieDirectorsInput, DirectorUncheckedUpdateWithoutMovieDirectorsInput>
  }

  export type DirectorUpdateWithoutMovieDirectorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectorUncheckedUpdateWithoutMovieDirectorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutWatchHistoryInput = {
    email: string
    username: string
    password: string
    fullName?: string | null
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    watchLists?: WatchListCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchHistoryInput = {
    id?: number
    email: string
    username: string
    password: string
    fullName?: string | null
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    watchLists?: WatchListUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchHistoryInput, UserUncheckedCreateWithoutWatchHistoryInput>
  }

  export type MovieCreateWithoutWatchHistoryInput = {
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutMovieInput
    ratings?: RatingCreateNestedManyWithoutMovieInput
    comments?: CommentCreateNestedManyWithoutMovieInput
    watchLists?: WatchListCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutWatchHistoryInput = {
    id?: number
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutMovieInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    watchLists?: WatchListUncheckedCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreUncheckedCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorUncheckedCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutWatchHistoryInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutWatchHistoryInput, MovieUncheckedCreateWithoutWatchHistoryInput>
  }

  export type EpisodeCreateWithoutWatchHistoryInput = {
    episodeNumber: number
    title?: string | null
    description?: string | null
    videoUrl: string
    duration?: number | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutEpisodesInput
  }

  export type EpisodeUncheckedCreateWithoutWatchHistoryInput = {
    id?: number
    movieId: number
    episodeNumber: number
    title?: string | null
    description?: string | null
    videoUrl: string
    duration?: number | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeCreateOrConnectWithoutWatchHistoryInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutWatchHistoryInput, EpisodeUncheckedCreateWithoutWatchHistoryInput>
  }

  export type UserUpsertWithoutWatchHistoryInput = {
    update: XOR<UserUpdateWithoutWatchHistoryInput, UserUncheckedUpdateWithoutWatchHistoryInput>
    create: XOR<UserCreateWithoutWatchHistoryInput, UserUncheckedCreateWithoutWatchHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchHistoryInput, UserUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type UserUpdateWithoutWatchHistoryInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchLists?: WatchListUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchLists?: WatchListUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MovieUpsertWithoutWatchHistoryInput = {
    update: XOR<MovieUpdateWithoutWatchHistoryInput, MovieUncheckedUpdateWithoutWatchHistoryInput>
    create: XOR<MovieCreateWithoutWatchHistoryInput, MovieUncheckedCreateWithoutWatchHistoryInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutWatchHistoryInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutWatchHistoryInput, MovieUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type MovieUpdateWithoutWatchHistoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutMovieNestedInput
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    comments?: CommentUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutWatchHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutMovieNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUncheckedUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUncheckedUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUncheckedUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type EpisodeUpsertWithoutWatchHistoryInput = {
    update: XOR<EpisodeUpdateWithoutWatchHistoryInput, EpisodeUncheckedUpdateWithoutWatchHistoryInput>
    create: XOR<EpisodeCreateWithoutWatchHistoryInput, EpisodeUncheckedCreateWithoutWatchHistoryInput>
    where?: EpisodeWhereInput
  }

  export type EpisodeUpdateToOneWithWhereWithoutWatchHistoryInput = {
    where?: EpisodeWhereInput
    data: XOR<EpisodeUpdateWithoutWatchHistoryInput, EpisodeUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type EpisodeUpdateWithoutWatchHistoryInput = {
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutEpisodesNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutWatchHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutWatchListsInput = {
    email: string
    username: string
    password: string
    fullName?: string | null
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    watchHistory?: WatchHistoryCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchListsInput = {
    id?: number
    email: string
    username: string
    password: string
    fullName?: string | null
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchListsInput, UserUncheckedCreateWithoutWatchListsInput>
  }

  export type MovieCreateWithoutWatchListsInput = {
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutMovieInput
    ratings?: RatingCreateNestedManyWithoutMovieInput
    comments?: CommentCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutWatchListsInput = {
    id?: number
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutMovieInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreUncheckedCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorUncheckedCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutWatchListsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutWatchListsInput, MovieUncheckedCreateWithoutWatchListsInput>
  }

  export type UserUpsertWithoutWatchListsInput = {
    update: XOR<UserUpdateWithoutWatchListsInput, UserUncheckedUpdateWithoutWatchListsInput>
    create: XOR<UserCreateWithoutWatchListsInput, UserUncheckedCreateWithoutWatchListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchListsInput, UserUncheckedUpdateWithoutWatchListsInput>
  }

  export type UserUpdateWithoutWatchListsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchHistory?: WatchHistoryUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchListsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MovieUpsertWithoutWatchListsInput = {
    update: XOR<MovieUpdateWithoutWatchListsInput, MovieUncheckedUpdateWithoutWatchListsInput>
    create: XOR<MovieCreateWithoutWatchListsInput, MovieUncheckedCreateWithoutWatchListsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutWatchListsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutWatchListsInput, MovieUncheckedUpdateWithoutWatchListsInput>
  }

  export type MovieUpdateWithoutWatchListsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutMovieNestedInput
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    comments?: CommentUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutWatchListsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutMovieNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUncheckedUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUncheckedUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type UserCreateWithoutRatingsInput = {
    email: string
    username: string
    password: string
    fullName?: string | null
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    watchHistory?: WatchHistoryCreateNestedManyWithoutUserInput
    watchLists?: WatchListCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRatingsInput = {
    id?: number
    email: string
    username: string
    password: string
    fullName?: string | null
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutUserInput
    watchLists?: WatchListUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
  }

  export type MovieCreateWithoutRatingsInput = {
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutMovieInput
    comments?: CommentCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutMovieInput
    watchLists?: WatchListCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutRatingsInput = {
    id?: number
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutMovieInput
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutMovieInput
    watchLists?: WatchListUncheckedCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreUncheckedCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorUncheckedCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutRatingsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutRatingsInput, MovieUncheckedCreateWithoutRatingsInput>
  }

  export type UserUpsertWithoutRatingsInput = {
    update: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateWithoutRatingsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchHistory?: WatchHistoryUpdateManyWithoutUserNestedInput
    watchLists?: WatchListUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutUserNestedInput
    watchLists?: WatchListUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MovieUpsertWithoutRatingsInput = {
    update: XOR<MovieUpdateWithoutRatingsInput, MovieUncheckedUpdateWithoutRatingsInput>
    create: XOR<MovieCreateWithoutRatingsInput, MovieUncheckedCreateWithoutRatingsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutRatingsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutRatingsInput, MovieUncheckedUpdateWithoutRatingsInput>
  }

  export type MovieUpdateWithoutRatingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutMovieNestedInput
    comments?: CommentUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutMovieNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUncheckedUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUncheckedUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUncheckedUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type UserCreateWithoutCommentsInput = {
    email: string
    username: string
    password: string
    fullName?: string | null
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    watchHistory?: WatchHistoryCreateNestedManyWithoutUserInput
    watchLists?: WatchListCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    email: string
    username: string
    password: string
    fullName?: string | null
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutUserInput
    watchLists?: WatchListUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type MovieCreateWithoutCommentsInput = {
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutMovieInput
    ratings?: RatingCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutMovieInput
    watchLists?: WatchListCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    description?: string | null
    poster?: string | null
    trailer?: string | null
    releaseDate?: Date | string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutMovieInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutMovieInput
    watchLists?: WatchListUncheckedCreateNestedManyWithoutMovieInput
    movieGenres?: MovieGenreUncheckedCreateNestedManyWithoutMovieInput
    movieActors?: MovieActorUncheckedCreateNestedManyWithoutMovieInput
    movieDirectors?: MovieDirectorUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutCommentsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutCommentsInput, MovieUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchHistory?: WatchHistoryUpdateManyWithoutUserNestedInput
    watchLists?: WatchListUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutUserNestedInput
    watchLists?: WatchListUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MovieUpsertWithoutCommentsInput = {
    update: XOR<MovieUpdateWithoutCommentsInput, MovieUncheckedUpdateWithoutCommentsInput>
    create: XOR<MovieCreateWithoutCommentsInput, MovieUncheckedCreateWithoutCommentsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutCommentsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutCommentsInput, MovieUncheckedUpdateWithoutCommentsInput>
  }

  export type MovieUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutMovieNestedInput
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutMovieNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutMovieNestedInput
    watchLists?: WatchListUncheckedUpdateManyWithoutMovieNestedInput
    movieGenres?: MovieGenreUncheckedUpdateManyWithoutMovieNestedInput
    movieActors?: MovieActorUncheckedUpdateManyWithoutMovieNestedInput
    movieDirectors?: MovieDirectorUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type WatchHistoryCreateManyUserInput = {
    id?: number
    movieId: number
    episodeId?: number | null
    watchedAt?: Date | string
    progress?: number | null
  }

  export type WatchListCreateManyUserInput = {
    movieId: number
    addedAt?: Date | string
  }

  export type RatingCreateManyUserInput = {
    movieId: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: number
    movieId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchHistoryUpdateWithoutUserInput = {
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    movie?: MovieUpdateOneRequiredWithoutWatchHistoryNestedInput
    episode?: EpisodeUpdateOneWithoutWatchHistoryNestedInput
  }

  export type WatchHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    episodeId?: NullableIntFieldUpdateOperationsInput | number | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WatchHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    episodeId?: NullableIntFieldUpdateOperationsInput | number | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WatchListUpdateWithoutUserInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutWatchListsNestedInput
  }

  export type WatchListUncheckedUpdateWithoutUserInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListUncheckedUpdateManyWithoutUserInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutUserInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutUserInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutUserInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeCreateManyMovieInput = {
    id?: number
    episodeNumber: number
    title?: string | null
    description?: string | null
    videoUrl: string
    duration?: number | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingCreateManyMovieInput = {
    userId: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyMovieInput = {
    id?: number
    userId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchHistoryCreateManyMovieInput = {
    id?: number
    userId: number
    episodeId?: number | null
    watchedAt?: Date | string
    progress?: number | null
  }

  export type WatchListCreateManyMovieInput = {
    userId: number
    addedAt?: Date | string
  }

  export type MovieGenreCreateManyMovieInput = {
    genreId: number
    createdAt?: Date | string
  }

  export type MovieActorCreateManyMovieInput = {
    actorId: number
    createdAt?: Date | string
  }

  export type MovieDirectorCreateManyMovieInput = {
    directorId: number
    createdAt?: Date | string
  }

  export type EpisodeUpdateWithoutMovieInput = {
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchHistory?: WatchHistoryUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutMovieInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutMovieInput = {
    userId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutMovieInput = {
    userId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutMovieInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchHistoryUpdateWithoutMovieInput = {
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutWatchHistoryNestedInput
    episode?: EpisodeUpdateOneWithoutWatchHistoryNestedInput
  }

  export type WatchHistoryUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    episodeId?: NullableIntFieldUpdateOperationsInput | number | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WatchHistoryUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    episodeId?: NullableIntFieldUpdateOperationsInput | number | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WatchListUpdateWithoutMovieInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchListsNestedInput
  }

  export type WatchListUncheckedUpdateWithoutMovieInput = {
    userId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListUncheckedUpdateManyWithoutMovieInput = {
    userId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieGenreUpdateWithoutMovieInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUpdateOneRequiredWithoutMovieGenresNestedInput
  }

  export type MovieGenreUncheckedUpdateWithoutMovieInput = {
    genreId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieGenreUncheckedUpdateManyWithoutMovieInput = {
    genreId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieActorUpdateWithoutMovieInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: ActorUpdateOneRequiredWithoutMovieActorsNestedInput
  }

  export type MovieActorUncheckedUpdateWithoutMovieInput = {
    actorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieActorUncheckedUpdateManyWithoutMovieInput = {
    actorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieDirectorUpdateWithoutMovieInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    director?: DirectorUpdateOneRequiredWithoutMovieDirectorsNestedInput
  }

  export type MovieDirectorUncheckedUpdateWithoutMovieInput = {
    directorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieDirectorUncheckedUpdateManyWithoutMovieInput = {
    directorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchHistoryCreateManyEpisodeInput = {
    id?: number
    userId: number
    movieId: number
    watchedAt?: Date | string
    progress?: number | null
  }

  export type WatchHistoryUpdateWithoutEpisodeInput = {
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutWatchHistoryNestedInput
    movie?: MovieUpdateOneRequiredWithoutWatchHistoryNestedInput
  }

  export type WatchHistoryUncheckedUpdateWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WatchHistoryUncheckedUpdateManyWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MovieGenreCreateManyGenreInput = {
    movieId: number
    createdAt?: Date | string
  }

  export type MovieGenreUpdateWithoutGenreInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutMovieGenresNestedInput
  }

  export type MovieGenreUncheckedUpdateWithoutGenreInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieGenreUncheckedUpdateManyWithoutGenreInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieActorCreateManyActorInput = {
    movieId: number
    createdAt?: Date | string
  }

  export type MovieActorUpdateWithoutActorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutMovieActorsNestedInput
  }

  export type MovieActorUncheckedUpdateWithoutActorInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieActorUncheckedUpdateManyWithoutActorInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieDirectorCreateManyDirectorInput = {
    movieId: number
    createdAt?: Date | string
  }

  export type MovieDirectorUpdateWithoutDirectorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutMovieDirectorsNestedInput
  }

  export type MovieDirectorUncheckedUpdateWithoutDirectorInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieDirectorUncheckedUpdateManyWithoutDirectorInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}