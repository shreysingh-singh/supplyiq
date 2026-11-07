
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Workspace
 * 
 */
export type Workspace = $Result.DefaultSelection<Prisma.$WorkspacePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model SupplierPerformance
 * 
 */
export type SupplierPerformance = $Result.DefaultSelection<Prisma.$SupplierPerformancePayload>
/**
 * Model Quotation
 * 
 */
export type Quotation = $Result.DefaultSelection<Prisma.$QuotationPayload>
/**
 * Model QuotationItem
 * 
 */
export type QuotationItem = $Result.DefaultSelection<Prisma.$QuotationItemPayload>
/**
 * Model SupplierProduct
 * 
 */
export type SupplierProduct = $Result.DefaultSelection<Prisma.$SupplierProductPayload>
/**
 * Model SupplierReview
 * 
 */
export type SupplierReview = $Result.DefaultSelection<Prisma.$SupplierReviewPayload>
/**
 * Model ProcurementOrder
 * 
 */
export type ProcurementOrder = $Result.DefaultSelection<Prisma.$ProcurementOrderPayload>
/**
 * Model ProcurementOrderItem
 * 
 */
export type ProcurementOrderItem = $Result.DefaultSelection<Prisma.$ProcurementOrderItemPayload>
/**
 * Model CostBreakdown
 * 
 */
export type CostBreakdown = $Result.DefaultSelection<Prisma.$CostBreakdownPayload>
/**
 * Model AIRecommendation
 * 
 */
export type AIRecommendation = $Result.DefaultSelection<Prisma.$AIRecommendationPayload>
/**
 * Model RiskAssessment
 * 
 */
export type RiskAssessment = $Result.DefaultSelection<Prisma.$RiskAssessmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  ANALYST: 'ANALYST'
};

export type Role = (typeof Role)[keyof typeof Role]


export const RiskLevel: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel]


export const QuotationStatus: {
  PENDING: 'PENDING',
  REVIEWED: 'REVIEWED',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type QuotationStatus = (typeof QuotationStatus)[keyof typeof QuotationStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type RiskLevel = $Enums.RiskLevel

export const RiskLevel: typeof $Enums.RiskLevel

export type QuotationStatus = $Enums.QuotationStatus

export const QuotationStatus: typeof $Enums.QuotationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Workspaces
 * const workspaces = await prisma.workspace.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Workspaces
   * const workspaces = await prisma.workspace.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplierPerformance`: Exposes CRUD operations for the **SupplierPerformance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierPerformances
    * const supplierPerformances = await prisma.supplierPerformance.findMany()
    * ```
    */
  get supplierPerformance(): Prisma.SupplierPerformanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quotation`: Exposes CRUD operations for the **Quotation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quotations
    * const quotations = await prisma.quotation.findMany()
    * ```
    */
  get quotation(): Prisma.QuotationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quotationItem`: Exposes CRUD operations for the **QuotationItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuotationItems
    * const quotationItems = await prisma.quotationItem.findMany()
    * ```
    */
  get quotationItem(): Prisma.QuotationItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplierProduct`: Exposes CRUD operations for the **SupplierProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierProducts
    * const supplierProducts = await prisma.supplierProduct.findMany()
    * ```
    */
  get supplierProduct(): Prisma.SupplierProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplierReview`: Exposes CRUD operations for the **SupplierReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierReviews
    * const supplierReviews = await prisma.supplierReview.findMany()
    * ```
    */
  get supplierReview(): Prisma.SupplierReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.procurementOrder`: Exposes CRUD operations for the **ProcurementOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcurementOrders
    * const procurementOrders = await prisma.procurementOrder.findMany()
    * ```
    */
  get procurementOrder(): Prisma.ProcurementOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.procurementOrderItem`: Exposes CRUD operations for the **ProcurementOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcurementOrderItems
    * const procurementOrderItems = await prisma.procurementOrderItem.findMany()
    * ```
    */
  get procurementOrderItem(): Prisma.ProcurementOrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.costBreakdown`: Exposes CRUD operations for the **CostBreakdown** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CostBreakdowns
    * const costBreakdowns = await prisma.costBreakdown.findMany()
    * ```
    */
  get costBreakdown(): Prisma.CostBreakdownDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIRecommendation`: Exposes CRUD operations for the **AIRecommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIRecommendations
    * const aIRecommendations = await prisma.aIRecommendation.findMany()
    * ```
    */
  get aIRecommendation(): Prisma.AIRecommendationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.riskAssessment`: Exposes CRUD operations for the **RiskAssessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RiskAssessments
    * const riskAssessments = await prisma.riskAssessment.findMany()
    * ```
    */
  get riskAssessment(): Prisma.RiskAssessmentDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Workspace: 'Workspace',
    User: 'User',
    Supplier: 'Supplier',
    SupplierPerformance: 'SupplierPerformance',
    Quotation: 'Quotation',
    QuotationItem: 'QuotationItem',
    SupplierProduct: 'SupplierProduct',
    SupplierReview: 'SupplierReview',
    ProcurementOrder: 'ProcurementOrder',
    ProcurementOrderItem: 'ProcurementOrderItem',
    CostBreakdown: 'CostBreakdown',
    AIRecommendation: 'AIRecommendation',
    RiskAssessment: 'RiskAssessment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "workspace" | "user" | "supplier" | "supplierPerformance" | "quotation" | "quotationItem" | "supplierProduct" | "supplierReview" | "procurementOrder" | "procurementOrderItem" | "costBreakdown" | "aIRecommendation" | "riskAssessment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Workspace: {
        payload: Prisma.$WorkspacePayload<ExtArgs>
        fields: Prisma.WorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findFirst: {
            args: Prisma.WorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findMany: {
            args: Prisma.WorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          create: {
            args: Prisma.WorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          createMany: {
            args: Prisma.WorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          delete: {
            args: Prisma.WorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          update: {
            args: Prisma.WorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.WorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
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
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      SupplierPerformance: {
        payload: Prisma.$SupplierPerformancePayload<ExtArgs>
        fields: Prisma.SupplierPerformanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierPerformanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPerformancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierPerformanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPerformancePayload>
          }
          findFirst: {
            args: Prisma.SupplierPerformanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPerformancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierPerformanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPerformancePayload>
          }
          findMany: {
            args: Prisma.SupplierPerformanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPerformancePayload>[]
          }
          create: {
            args: Prisma.SupplierPerformanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPerformancePayload>
          }
          createMany: {
            args: Prisma.SupplierPerformanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierPerformanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPerformancePayload>[]
          }
          delete: {
            args: Prisma.SupplierPerformanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPerformancePayload>
          }
          update: {
            args: Prisma.SupplierPerformanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPerformancePayload>
          }
          deleteMany: {
            args: Prisma.SupplierPerformanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierPerformanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierPerformanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPerformancePayload>[]
          }
          upsert: {
            args: Prisma.SupplierPerformanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPerformancePayload>
          }
          aggregate: {
            args: Prisma.SupplierPerformanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierPerformance>
          }
          groupBy: {
            args: Prisma.SupplierPerformanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierPerformanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierPerformanceCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierPerformanceCountAggregateOutputType> | number
          }
        }
      }
      Quotation: {
        payload: Prisma.$QuotationPayload<ExtArgs>
        fields: Prisma.QuotationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuotationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuotationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          findFirst: {
            args: Prisma.QuotationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuotationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          findMany: {
            args: Prisma.QuotationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>[]
          }
          create: {
            args: Prisma.QuotationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          createMany: {
            args: Prisma.QuotationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuotationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>[]
          }
          delete: {
            args: Prisma.QuotationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          update: {
            args: Prisma.QuotationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          deleteMany: {
            args: Prisma.QuotationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuotationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuotationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>[]
          }
          upsert: {
            args: Prisma.QuotationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          aggregate: {
            args: Prisma.QuotationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuotation>
          }
          groupBy: {
            args: Prisma.QuotationGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuotationGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuotationCountArgs<ExtArgs>
            result: $Utils.Optional<QuotationCountAggregateOutputType> | number
          }
        }
      }
      QuotationItem: {
        payload: Prisma.$QuotationItemPayload<ExtArgs>
        fields: Prisma.QuotationItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuotationItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuotationItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          findFirst: {
            args: Prisma.QuotationItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuotationItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          findMany: {
            args: Prisma.QuotationItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>[]
          }
          create: {
            args: Prisma.QuotationItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          createMany: {
            args: Prisma.QuotationItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuotationItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>[]
          }
          delete: {
            args: Prisma.QuotationItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          update: {
            args: Prisma.QuotationItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          deleteMany: {
            args: Prisma.QuotationItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuotationItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuotationItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>[]
          }
          upsert: {
            args: Prisma.QuotationItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          aggregate: {
            args: Prisma.QuotationItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuotationItem>
          }
          groupBy: {
            args: Prisma.QuotationItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuotationItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuotationItemCountArgs<ExtArgs>
            result: $Utils.Optional<QuotationItemCountAggregateOutputType> | number
          }
        }
      }
      SupplierProduct: {
        payload: Prisma.$SupplierProductPayload<ExtArgs>
        fields: Prisma.SupplierProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>
          }
          findFirst: {
            args: Prisma.SupplierProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>
          }
          findMany: {
            args: Prisma.SupplierProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>[]
          }
          create: {
            args: Prisma.SupplierProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>
          }
          createMany: {
            args: Prisma.SupplierProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>[]
          }
          delete: {
            args: Prisma.SupplierProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>
          }
          update: {
            args: Prisma.SupplierProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>
          }
          deleteMany: {
            args: Prisma.SupplierProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>[]
          }
          upsert: {
            args: Prisma.SupplierProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>
          }
          aggregate: {
            args: Prisma.SupplierProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierProduct>
          }
          groupBy: {
            args: Prisma.SupplierProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierProductCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierProductCountAggregateOutputType> | number
          }
        }
      }
      SupplierReview: {
        payload: Prisma.$SupplierReviewPayload<ExtArgs>
        fields: Prisma.SupplierReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierReviewPayload>
          }
          findFirst: {
            args: Prisma.SupplierReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierReviewPayload>
          }
          findMany: {
            args: Prisma.SupplierReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierReviewPayload>[]
          }
          create: {
            args: Prisma.SupplierReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierReviewPayload>
          }
          createMany: {
            args: Prisma.SupplierReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierReviewPayload>[]
          }
          delete: {
            args: Prisma.SupplierReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierReviewPayload>
          }
          update: {
            args: Prisma.SupplierReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierReviewPayload>
          }
          deleteMany: {
            args: Prisma.SupplierReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierReviewPayload>[]
          }
          upsert: {
            args: Prisma.SupplierReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierReviewPayload>
          }
          aggregate: {
            args: Prisma.SupplierReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierReview>
          }
          groupBy: {
            args: Prisma.SupplierReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierReviewCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierReviewCountAggregateOutputType> | number
          }
        }
      }
      ProcurementOrder: {
        payload: Prisma.$ProcurementOrderPayload<ExtArgs>
        fields: Prisma.ProcurementOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcurementOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcurementOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderPayload>
          }
          findFirst: {
            args: Prisma.ProcurementOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcurementOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderPayload>
          }
          findMany: {
            args: Prisma.ProcurementOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderPayload>[]
          }
          create: {
            args: Prisma.ProcurementOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderPayload>
          }
          createMany: {
            args: Prisma.ProcurementOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcurementOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderPayload>[]
          }
          delete: {
            args: Prisma.ProcurementOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderPayload>
          }
          update: {
            args: Prisma.ProcurementOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderPayload>
          }
          deleteMany: {
            args: Prisma.ProcurementOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcurementOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcurementOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderPayload>[]
          }
          upsert: {
            args: Prisma.ProcurementOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderPayload>
          }
          aggregate: {
            args: Prisma.ProcurementOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcurementOrder>
          }
          groupBy: {
            args: Prisma.ProcurementOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcurementOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcurementOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ProcurementOrderCountAggregateOutputType> | number
          }
        }
      }
      ProcurementOrderItem: {
        payload: Prisma.$ProcurementOrderItemPayload<ExtArgs>
        fields: Prisma.ProcurementOrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcurementOrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcurementOrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderItemPayload>
          }
          findFirst: {
            args: Prisma.ProcurementOrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcurementOrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderItemPayload>
          }
          findMany: {
            args: Prisma.ProcurementOrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderItemPayload>[]
          }
          create: {
            args: Prisma.ProcurementOrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderItemPayload>
          }
          createMany: {
            args: Prisma.ProcurementOrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcurementOrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderItemPayload>[]
          }
          delete: {
            args: Prisma.ProcurementOrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderItemPayload>
          }
          update: {
            args: Prisma.ProcurementOrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderItemPayload>
          }
          deleteMany: {
            args: Prisma.ProcurementOrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcurementOrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcurementOrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderItemPayload>[]
          }
          upsert: {
            args: Prisma.ProcurementOrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcurementOrderItemPayload>
          }
          aggregate: {
            args: Prisma.ProcurementOrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcurementOrderItem>
          }
          groupBy: {
            args: Prisma.ProcurementOrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcurementOrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcurementOrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<ProcurementOrderItemCountAggregateOutputType> | number
          }
        }
      }
      CostBreakdown: {
        payload: Prisma.$CostBreakdownPayload<ExtArgs>
        fields: Prisma.CostBreakdownFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CostBreakdownFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostBreakdownPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CostBreakdownFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostBreakdownPayload>
          }
          findFirst: {
            args: Prisma.CostBreakdownFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostBreakdownPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CostBreakdownFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostBreakdownPayload>
          }
          findMany: {
            args: Prisma.CostBreakdownFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostBreakdownPayload>[]
          }
          create: {
            args: Prisma.CostBreakdownCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostBreakdownPayload>
          }
          createMany: {
            args: Prisma.CostBreakdownCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CostBreakdownCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostBreakdownPayload>[]
          }
          delete: {
            args: Prisma.CostBreakdownDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostBreakdownPayload>
          }
          update: {
            args: Prisma.CostBreakdownUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostBreakdownPayload>
          }
          deleteMany: {
            args: Prisma.CostBreakdownDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CostBreakdownUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CostBreakdownUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostBreakdownPayload>[]
          }
          upsert: {
            args: Prisma.CostBreakdownUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostBreakdownPayload>
          }
          aggregate: {
            args: Prisma.CostBreakdownAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCostBreakdown>
          }
          groupBy: {
            args: Prisma.CostBreakdownGroupByArgs<ExtArgs>
            result: $Utils.Optional<CostBreakdownGroupByOutputType>[]
          }
          count: {
            args: Prisma.CostBreakdownCountArgs<ExtArgs>
            result: $Utils.Optional<CostBreakdownCountAggregateOutputType> | number
          }
        }
      }
      AIRecommendation: {
        payload: Prisma.$AIRecommendationPayload<ExtArgs>
        fields: Prisma.AIRecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIRecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIRecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRecommendationPayload>
          }
          findFirst: {
            args: Prisma.AIRecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIRecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRecommendationPayload>
          }
          findMany: {
            args: Prisma.AIRecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRecommendationPayload>[]
          }
          create: {
            args: Prisma.AIRecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRecommendationPayload>
          }
          createMany: {
            args: Prisma.AIRecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIRecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRecommendationPayload>[]
          }
          delete: {
            args: Prisma.AIRecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRecommendationPayload>
          }
          update: {
            args: Prisma.AIRecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRecommendationPayload>
          }
          deleteMany: {
            args: Prisma.AIRecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIRecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIRecommendationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRecommendationPayload>[]
          }
          upsert: {
            args: Prisma.AIRecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRecommendationPayload>
          }
          aggregate: {
            args: Prisma.AIRecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIRecommendation>
          }
          groupBy: {
            args: Prisma.AIRecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIRecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIRecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<AIRecommendationCountAggregateOutputType> | number
          }
        }
      }
      RiskAssessment: {
        payload: Prisma.$RiskAssessmentPayload<ExtArgs>
        fields: Prisma.RiskAssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiskAssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiskAssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>
          }
          findFirst: {
            args: Prisma.RiskAssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiskAssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>
          }
          findMany: {
            args: Prisma.RiskAssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>[]
          }
          create: {
            args: Prisma.RiskAssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>
          }
          createMany: {
            args: Prisma.RiskAssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiskAssessmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>[]
          }
          delete: {
            args: Prisma.RiskAssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>
          }
          update: {
            args: Prisma.RiskAssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>
          }
          deleteMany: {
            args: Prisma.RiskAssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiskAssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RiskAssessmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>[]
          }
          upsert: {
            args: Prisma.RiskAssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>
          }
          aggregate: {
            args: Prisma.RiskAssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRiskAssessment>
          }
          groupBy: {
            args: Prisma.RiskAssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiskAssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiskAssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<RiskAssessmentCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    workspace?: WorkspaceOmit
    user?: UserOmit
    supplier?: SupplierOmit
    supplierPerformance?: SupplierPerformanceOmit
    quotation?: QuotationOmit
    quotationItem?: QuotationItemOmit
    supplierProduct?: SupplierProductOmit
    supplierReview?: SupplierReviewOmit
    procurementOrder?: ProcurementOrderOmit
    procurementOrderItem?: ProcurementOrderItemOmit
    costBreakdown?: CostBreakdownOmit
    aIRecommendation?: AIRecommendationOmit
    riskAssessment?: RiskAssessmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    users: number
    suppliers: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | WorkspaceCountOutputTypeCountUsersArgs
    suppliers?: boolean | WorkspaceCountOutputTypeCountSuppliersArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountSuppliersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    suppliers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suppliers?: boolean | UserCountOutputTypeCountSuppliersArgs
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
  export type UserCountOutputTypeCountSuppliersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    performances: number
    quotations: number
    assessments: number
    products: number
    reviews: number
    orders: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performances?: boolean | SupplierCountOutputTypeCountPerformancesArgs
    quotations?: boolean | SupplierCountOutputTypeCountQuotationsArgs
    assessments?: boolean | SupplierCountOutputTypeCountAssessmentsArgs
    products?: boolean | SupplierCountOutputTypeCountProductsArgs
    reviews?: boolean | SupplierCountOutputTypeCountReviewsArgs
    orders?: boolean | SupplierCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountPerformancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierPerformanceWhereInput
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountQuotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationWhereInput
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountAssessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskAssessmentWhereInput
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierProductWhereInput
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierReviewWhereInput
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcurementOrderWhereInput
  }


  /**
   * Count Type QuotationCountOutputType
   */

  export type QuotationCountOutputType = {
    items: number
  }

  export type QuotationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | QuotationCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * QuotationCountOutputType without action
   */
  export type QuotationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCountOutputType
     */
    select?: QuotationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuotationCountOutputType without action
   */
  export type QuotationCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationItemWhereInput
  }


  /**
   * Count Type ProcurementOrderCountOutputType
   */

  export type ProcurementOrderCountOutputType = {
    items: number
  }

  export type ProcurementOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ProcurementOrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ProcurementOrderCountOutputType without action
   */
  export type ProcurementOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrderCountOutputType
     */
    select?: ProcurementOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProcurementOrderCountOutputType without action
   */
  export type ProcurementOrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcurementOrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkspaceMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithAggregationInput | WorkspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Workspace$usersArgs<ExtArgs>
    suppliers?: boolean | Workspace$suppliersArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["workspace"]>
  export type WorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Workspace$usersArgs<ExtArgs>
    suppliers?: boolean | Workspace$suppliersArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkspaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workspace"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      suppliers: Prisma.$SupplierPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }

  type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceDefaultArgs> = $Result.GetResult<Prisma.$WorkspacePayload, S>

  type WorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workspace'], meta: { name: 'Workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceFindUniqueArgs>(args: SelectSubset<T, WorkspaceFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceFindFirstArgs>(args?: SelectSubset<T, WorkspaceFindFirstArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceFindManyArgs>(args?: SelectSubset<T, WorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
     */
    create<T extends WorkspaceCreateArgs>(args: SelectSubset<T, WorkspaceCreateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceCreateManyArgs>(args?: SelectSubset<T, WorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {WorkspaceCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceDeleteArgs>(args: SelectSubset<T, WorkspaceDeleteArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUpdateArgs>(args: SelectSubset<T, WorkspaceUpdateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceDeleteManyArgs>(args?: SelectSubset<T, WorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUpdateManyArgs>(args: SelectSubset<T, WorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {WorkspaceUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkspaceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUpsertArgs>(args: SelectSubset<T, WorkspaceUpsertArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
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
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workspace model
   */
  readonly fields: WorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Workspace$usersArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    suppliers<T extends Workspace$suppliersArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$suppliersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workspace model
   */
  interface WorkspaceFieldRefs {
    readonly id: FieldRef<"Workspace", 'String'>
    readonly name: FieldRef<"Workspace", 'String'>
    readonly createdAt: FieldRef<"Workspace", 'DateTime'>
    readonly updatedAt: FieldRef<"Workspace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workspace findUnique
   */
  export type WorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findFirst
   */
  export type WorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }

  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workspace createManyAndReturn
   */
  export type WorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
  }

  /**
   * Workspace updateManyAndReturn
   */
  export type WorkspaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
  }

  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }

  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to delete.
     */
    limit?: number
  }

  /**
   * Workspace.users
   */
  export type Workspace$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Workspace.suppliers
   */
  export type Workspace$suppliersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    cursor?: SupplierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Workspace without action
   */
  export type WorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    workspaceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    workspaceId?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    workspaceId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    suppliers?: boolean | User$suppliersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "workspaceId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    suppliers?: boolean | User$suppliersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      suppliers: Prisma.$SupplierPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      workspaceId: string
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
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    suppliers<T extends User$suppliersArgs<ExtArgs> = {}>(args?: Subset<T, User$suppliersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly workspaceId: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.suppliers
   */
  export type User$suppliersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    cursor?: SupplierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
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
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    averageDeliveryDays: number | null
    onTimeRate: number | null
    qualityRating: number | null
    priceConsistency: number | null
    riskScore: number | null
  }

  export type SupplierSumAggregateOutputType = {
    averageDeliveryDays: number | null
    onTimeRate: number | null
    qualityRating: number | null
    priceConsistency: number | null
    riskScore: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    name: string | null
    companyName: string | null
    email: string | null
    phone: string | null
    location: string | null
    industry: string | null
    categories: string | null
    averageDeliveryDays: number | null
    onTimeRate: number | null
    qualityRating: number | null
    priceConsistency: number | null
    riskScore: number | null
    riskLevel: $Enums.RiskLevel | null
    certifications: string | null
    ownerId: string | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    companyName: string | null
    email: string | null
    phone: string | null
    location: string | null
    industry: string | null
    categories: string | null
    averageDeliveryDays: number | null
    onTimeRate: number | null
    qualityRating: number | null
    priceConsistency: number | null
    riskScore: number | null
    riskLevel: $Enums.RiskLevel | null
    certifications: string | null
    ownerId: string | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    companyName: number
    email: number
    phone: number
    location: number
    industry: number
    categories: number
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore: number
    riskLevel: number
    certifications: number
    ownerId: number
    workspaceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    averageDeliveryDays?: true
    onTimeRate?: true
    qualityRating?: true
    priceConsistency?: true
    riskScore?: true
  }

  export type SupplierSumAggregateInputType = {
    averageDeliveryDays?: true
    onTimeRate?: true
    qualityRating?: true
    priceConsistency?: true
    riskScore?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    companyName?: true
    email?: true
    phone?: true
    location?: true
    industry?: true
    categories?: true
    averageDeliveryDays?: true
    onTimeRate?: true
    qualityRating?: true
    priceConsistency?: true
    riskScore?: true
    riskLevel?: true
    certifications?: true
    ownerId?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    companyName?: true
    email?: true
    phone?: true
    location?: true
    industry?: true
    categories?: true
    averageDeliveryDays?: true
    onTimeRate?: true
    qualityRating?: true
    priceConsistency?: true
    riskScore?: true
    riskLevel?: true
    certifications?: true
    ownerId?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    companyName?: true
    email?: true
    phone?: true
    location?: true
    industry?: true
    categories?: true
    averageDeliveryDays?: true
    onTimeRate?: true
    qualityRating?: true
    priceConsistency?: true
    riskScore?: true
    riskLevel?: true
    certifications?: true
    ownerId?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    name: string
    companyName: string
    email: string
    phone: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore: number
    riskLevel: $Enums.RiskLevel
    certifications: string | null
    ownerId: string
    workspaceId: string
    createdAt: Date
    updatedAt: Date
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyName?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    industry?: boolean
    categories?: boolean
    averageDeliveryDays?: boolean
    onTimeRate?: boolean
    qualityRating?: boolean
    priceConsistency?: boolean
    riskScore?: boolean
    riskLevel?: boolean
    certifications?: boolean
    ownerId?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    performances?: boolean | Supplier$performancesArgs<ExtArgs>
    quotations?: boolean | Supplier$quotationsArgs<ExtArgs>
    assessments?: boolean | Supplier$assessmentsArgs<ExtArgs>
    products?: boolean | Supplier$productsArgs<ExtArgs>
    reviews?: boolean | Supplier$reviewsArgs<ExtArgs>
    orders?: boolean | Supplier$ordersArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyName?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    industry?: boolean
    categories?: boolean
    averageDeliveryDays?: boolean
    onTimeRate?: boolean
    qualityRating?: boolean
    priceConsistency?: boolean
    riskScore?: boolean
    riskLevel?: boolean
    certifications?: boolean
    ownerId?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyName?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    industry?: boolean
    categories?: boolean
    averageDeliveryDays?: boolean
    onTimeRate?: boolean
    qualityRating?: boolean
    priceConsistency?: boolean
    riskScore?: boolean
    riskLevel?: boolean
    certifications?: boolean
    ownerId?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    companyName?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    industry?: boolean
    categories?: boolean
    averageDeliveryDays?: boolean
    onTimeRate?: boolean
    qualityRating?: boolean
    priceConsistency?: boolean
    riskScore?: boolean
    riskLevel?: boolean
    certifications?: boolean
    ownerId?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "companyName" | "email" | "phone" | "location" | "industry" | "categories" | "averageDeliveryDays" | "onTimeRate" | "qualityRating" | "priceConsistency" | "riskScore" | "riskLevel" | "certifications" | "ownerId" | "workspaceId" | "createdAt" | "updatedAt", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    performances?: boolean | Supplier$performancesArgs<ExtArgs>
    quotations?: boolean | Supplier$quotationsArgs<ExtArgs>
    assessments?: boolean | Supplier$assessmentsArgs<ExtArgs>
    products?: boolean | Supplier$productsArgs<ExtArgs>
    reviews?: boolean | Supplier$reviewsArgs<ExtArgs>
    orders?: boolean | Supplier$ordersArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      performances: Prisma.$SupplierPerformancePayload<ExtArgs>[]
      quotations: Prisma.$QuotationPayload<ExtArgs>[]
      assessments: Prisma.$RiskAssessmentPayload<ExtArgs>[]
      products: Prisma.$SupplierProductPayload<ExtArgs>[]
      reviews: Prisma.$SupplierReviewPayload<ExtArgs>[]
      orders: Prisma.$ProcurementOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      companyName: string
      email: string
      phone: string | null
      location: string
      industry: string
      categories: string
      averageDeliveryDays: number
      onTimeRate: number
      qualityRating: number
      priceConsistency: number
      riskScore: number
      riskLevel: $Enums.RiskLevel
      certifications: string | null
      ownerId: string
      workspaceId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    performances<T extends Supplier$performancesArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$performancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPerformancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quotations<T extends Supplier$quotationsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$quotationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assessments<T extends Supplier$assessmentsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$assessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Supplier$productsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Supplier$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Supplier$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcurementOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly companyName: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
    readonly location: FieldRef<"Supplier", 'String'>
    readonly industry: FieldRef<"Supplier", 'String'>
    readonly categories: FieldRef<"Supplier", 'String'>
    readonly averageDeliveryDays: FieldRef<"Supplier", 'Float'>
    readonly onTimeRate: FieldRef<"Supplier", 'Float'>
    readonly qualityRating: FieldRef<"Supplier", 'Float'>
    readonly priceConsistency: FieldRef<"Supplier", 'Float'>
    readonly riskScore: FieldRef<"Supplier", 'Int'>
    readonly riskLevel: FieldRef<"Supplier", 'RiskLevel'>
    readonly certifications: FieldRef<"Supplier", 'String'>
    readonly ownerId: FieldRef<"Supplier", 'String'>
    readonly workspaceId: FieldRef<"Supplier", 'String'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
    readonly updatedAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.performances
   */
  export type Supplier$performancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPerformance
     */
    select?: SupplierPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPerformance
     */
    omit?: SupplierPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPerformanceInclude<ExtArgs> | null
    where?: SupplierPerformanceWhereInput
    orderBy?: SupplierPerformanceOrderByWithRelationInput | SupplierPerformanceOrderByWithRelationInput[]
    cursor?: SupplierPerformanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierPerformanceScalarFieldEnum | SupplierPerformanceScalarFieldEnum[]
  }

  /**
   * Supplier.quotations
   */
  export type Supplier$quotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    where?: QuotationWhereInput
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    cursor?: QuotationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Supplier.assessments
   */
  export type Supplier$assessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    where?: RiskAssessmentWhereInput
    orderBy?: RiskAssessmentOrderByWithRelationInput | RiskAssessmentOrderByWithRelationInput[]
    cursor?: RiskAssessmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RiskAssessmentScalarFieldEnum | RiskAssessmentScalarFieldEnum[]
  }

  /**
   * Supplier.products
   */
  export type Supplier$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierProduct
     */
    omit?: SupplierProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    where?: SupplierProductWhereInput
    orderBy?: SupplierProductOrderByWithRelationInput | SupplierProductOrderByWithRelationInput[]
    cursor?: SupplierProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierProductScalarFieldEnum | SupplierProductScalarFieldEnum[]
  }

  /**
   * Supplier.reviews
   */
  export type Supplier$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierReview
     */
    select?: SupplierReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierReview
     */
    omit?: SupplierReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierReviewInclude<ExtArgs> | null
    where?: SupplierReviewWhereInput
    orderBy?: SupplierReviewOrderByWithRelationInput | SupplierReviewOrderByWithRelationInput[]
    cursor?: SupplierReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierReviewScalarFieldEnum | SupplierReviewScalarFieldEnum[]
  }

  /**
   * Supplier.orders
   */
  export type Supplier$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrder
     */
    select?: ProcurementOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrder
     */
    omit?: ProcurementOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderInclude<ExtArgs> | null
    where?: ProcurementOrderWhereInput
    orderBy?: ProcurementOrderOrderByWithRelationInput | ProcurementOrderOrderByWithRelationInput[]
    cursor?: ProcurementOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcurementOrderScalarFieldEnum | ProcurementOrderScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model SupplierPerformance
   */

  export type AggregateSupplierPerformance = {
    _count: SupplierPerformanceCountAggregateOutputType | null
    _avg: SupplierPerformanceAvgAggregateOutputType | null
    _sum: SupplierPerformanceSumAggregateOutputType | null
    _min: SupplierPerformanceMinAggregateOutputType | null
    _max: SupplierPerformanceMaxAggregateOutputType | null
  }

  export type SupplierPerformanceAvgAggregateOutputType = {
    onTimeRate: number | null
    defectRate: number | null
    averageDelivery: number | null
    orderCompletion: number | null
    priceConsistency: number | null
  }

  export type SupplierPerformanceSumAggregateOutputType = {
    onTimeRate: number | null
    defectRate: number | null
    averageDelivery: number | null
    orderCompletion: number | null
    priceConsistency: number | null
  }

  export type SupplierPerformanceMinAggregateOutputType = {
    id: string | null
    supplierId: string | null
    period: string | null
    onTimeRate: number | null
    defectRate: number | null
    averageDelivery: number | null
    orderCompletion: number | null
    priceConsistency: number | null
    createdAt: Date | null
  }

  export type SupplierPerformanceMaxAggregateOutputType = {
    id: string | null
    supplierId: string | null
    period: string | null
    onTimeRate: number | null
    defectRate: number | null
    averageDelivery: number | null
    orderCompletion: number | null
    priceConsistency: number | null
    createdAt: Date | null
  }

  export type SupplierPerformanceCountAggregateOutputType = {
    id: number
    supplierId: number
    period: number
    onTimeRate: number
    defectRate: number
    averageDelivery: number
    orderCompletion: number
    priceConsistency: number
    createdAt: number
    _all: number
  }


  export type SupplierPerformanceAvgAggregateInputType = {
    onTimeRate?: true
    defectRate?: true
    averageDelivery?: true
    orderCompletion?: true
    priceConsistency?: true
  }

  export type SupplierPerformanceSumAggregateInputType = {
    onTimeRate?: true
    defectRate?: true
    averageDelivery?: true
    orderCompletion?: true
    priceConsistency?: true
  }

  export type SupplierPerformanceMinAggregateInputType = {
    id?: true
    supplierId?: true
    period?: true
    onTimeRate?: true
    defectRate?: true
    averageDelivery?: true
    orderCompletion?: true
    priceConsistency?: true
    createdAt?: true
  }

  export type SupplierPerformanceMaxAggregateInputType = {
    id?: true
    supplierId?: true
    period?: true
    onTimeRate?: true
    defectRate?: true
    averageDelivery?: true
    orderCompletion?: true
    priceConsistency?: true
    createdAt?: true
  }

  export type SupplierPerformanceCountAggregateInputType = {
    id?: true
    supplierId?: true
    period?: true
    onTimeRate?: true
    defectRate?: true
    averageDelivery?: true
    orderCompletion?: true
    priceConsistency?: true
    createdAt?: true
    _all?: true
  }

  export type SupplierPerformanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierPerformance to aggregate.
     */
    where?: SupplierPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPerformances to fetch.
     */
    orderBy?: SupplierPerformanceOrderByWithRelationInput | SupplierPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierPerformances
    **/
    _count?: true | SupplierPerformanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierPerformanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierPerformanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierPerformanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierPerformanceMaxAggregateInputType
  }

  export type GetSupplierPerformanceAggregateType<T extends SupplierPerformanceAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierPerformance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierPerformance[P]>
      : GetScalarType<T[P], AggregateSupplierPerformance[P]>
  }




  export type SupplierPerformanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierPerformanceWhereInput
    orderBy?: SupplierPerformanceOrderByWithAggregationInput | SupplierPerformanceOrderByWithAggregationInput[]
    by: SupplierPerformanceScalarFieldEnum[] | SupplierPerformanceScalarFieldEnum
    having?: SupplierPerformanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierPerformanceCountAggregateInputType | true
    _avg?: SupplierPerformanceAvgAggregateInputType
    _sum?: SupplierPerformanceSumAggregateInputType
    _min?: SupplierPerformanceMinAggregateInputType
    _max?: SupplierPerformanceMaxAggregateInputType
  }

  export type SupplierPerformanceGroupByOutputType = {
    id: string
    supplierId: string
    period: string
    onTimeRate: number
    defectRate: number
    averageDelivery: number
    orderCompletion: number
    priceConsistency: number
    createdAt: Date
    _count: SupplierPerformanceCountAggregateOutputType | null
    _avg: SupplierPerformanceAvgAggregateOutputType | null
    _sum: SupplierPerformanceSumAggregateOutputType | null
    _min: SupplierPerformanceMinAggregateOutputType | null
    _max: SupplierPerformanceMaxAggregateOutputType | null
  }

  type GetSupplierPerformanceGroupByPayload<T extends SupplierPerformanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierPerformanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierPerformanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierPerformanceGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierPerformanceGroupByOutputType[P]>
        }
      >
    >


  export type SupplierPerformanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    period?: boolean
    onTimeRate?: boolean
    defectRate?: boolean
    averageDelivery?: boolean
    orderCompletion?: boolean
    priceConsistency?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierPerformance"]>

  export type SupplierPerformanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    period?: boolean
    onTimeRate?: boolean
    defectRate?: boolean
    averageDelivery?: boolean
    orderCompletion?: boolean
    priceConsistency?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierPerformance"]>

  export type SupplierPerformanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    period?: boolean
    onTimeRate?: boolean
    defectRate?: boolean
    averageDelivery?: boolean
    orderCompletion?: boolean
    priceConsistency?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierPerformance"]>

  export type SupplierPerformanceSelectScalar = {
    id?: boolean
    supplierId?: boolean
    period?: boolean
    onTimeRate?: boolean
    defectRate?: boolean
    averageDelivery?: boolean
    orderCompletion?: boolean
    priceConsistency?: boolean
    createdAt?: boolean
  }

  export type SupplierPerformanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplierId" | "period" | "onTimeRate" | "defectRate" | "averageDelivery" | "orderCompletion" | "priceConsistency" | "createdAt", ExtArgs["result"]["supplierPerformance"]>
  export type SupplierPerformanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type SupplierPerformanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type SupplierPerformanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $SupplierPerformancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierPerformance"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supplierId: string
      period: string
      onTimeRate: number
      defectRate: number
      averageDelivery: number
      orderCompletion: number
      priceConsistency: number
      createdAt: Date
    }, ExtArgs["result"]["supplierPerformance"]>
    composites: {}
  }

  type SupplierPerformanceGetPayload<S extends boolean | null | undefined | SupplierPerformanceDefaultArgs> = $Result.GetResult<Prisma.$SupplierPerformancePayload, S>

  type SupplierPerformanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierPerformanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierPerformanceCountAggregateInputType | true
    }

  export interface SupplierPerformanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierPerformance'], meta: { name: 'SupplierPerformance' } }
    /**
     * Find zero or one SupplierPerformance that matches the filter.
     * @param {SupplierPerformanceFindUniqueArgs} args - Arguments to find a SupplierPerformance
     * @example
     * // Get one SupplierPerformance
     * const supplierPerformance = await prisma.supplierPerformance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierPerformanceFindUniqueArgs>(args: SelectSubset<T, SupplierPerformanceFindUniqueArgs<ExtArgs>>): Prisma__SupplierPerformanceClient<$Result.GetResult<Prisma.$SupplierPerformancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupplierPerformance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierPerformanceFindUniqueOrThrowArgs} args - Arguments to find a SupplierPerformance
     * @example
     * // Get one SupplierPerformance
     * const supplierPerformance = await prisma.supplierPerformance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierPerformanceFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierPerformanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierPerformanceClient<$Result.GetResult<Prisma.$SupplierPerformancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupplierPerformance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPerformanceFindFirstArgs} args - Arguments to find a SupplierPerformance
     * @example
     * // Get one SupplierPerformance
     * const supplierPerformance = await prisma.supplierPerformance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierPerformanceFindFirstArgs>(args?: SelectSubset<T, SupplierPerformanceFindFirstArgs<ExtArgs>>): Prisma__SupplierPerformanceClient<$Result.GetResult<Prisma.$SupplierPerformancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupplierPerformance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPerformanceFindFirstOrThrowArgs} args - Arguments to find a SupplierPerformance
     * @example
     * // Get one SupplierPerformance
     * const supplierPerformance = await prisma.supplierPerformance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierPerformanceFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierPerformanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierPerformanceClient<$Result.GetResult<Prisma.$SupplierPerformancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupplierPerformances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPerformanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierPerformances
     * const supplierPerformances = await prisma.supplierPerformance.findMany()
     * 
     * // Get first 10 SupplierPerformances
     * const supplierPerformances = await prisma.supplierPerformance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierPerformanceWithIdOnly = await prisma.supplierPerformance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierPerformanceFindManyArgs>(args?: SelectSubset<T, SupplierPerformanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPerformancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupplierPerformance.
     * @param {SupplierPerformanceCreateArgs} args - Arguments to create a SupplierPerformance.
     * @example
     * // Create one SupplierPerformance
     * const SupplierPerformance = await prisma.supplierPerformance.create({
     *   data: {
     *     // ... data to create a SupplierPerformance
     *   }
     * })
     * 
     */
    create<T extends SupplierPerformanceCreateArgs>(args: SelectSubset<T, SupplierPerformanceCreateArgs<ExtArgs>>): Prisma__SupplierPerformanceClient<$Result.GetResult<Prisma.$SupplierPerformancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupplierPerformances.
     * @param {SupplierPerformanceCreateManyArgs} args - Arguments to create many SupplierPerformances.
     * @example
     * // Create many SupplierPerformances
     * const supplierPerformance = await prisma.supplierPerformance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierPerformanceCreateManyArgs>(args?: SelectSubset<T, SupplierPerformanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierPerformances and returns the data saved in the database.
     * @param {SupplierPerformanceCreateManyAndReturnArgs} args - Arguments to create many SupplierPerformances.
     * @example
     * // Create many SupplierPerformances
     * const supplierPerformance = await prisma.supplierPerformance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierPerformances and only return the `id`
     * const supplierPerformanceWithIdOnly = await prisma.supplierPerformance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierPerformanceCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierPerformanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPerformancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupplierPerformance.
     * @param {SupplierPerformanceDeleteArgs} args - Arguments to delete one SupplierPerformance.
     * @example
     * // Delete one SupplierPerformance
     * const SupplierPerformance = await prisma.supplierPerformance.delete({
     *   where: {
     *     // ... filter to delete one SupplierPerformance
     *   }
     * })
     * 
     */
    delete<T extends SupplierPerformanceDeleteArgs>(args: SelectSubset<T, SupplierPerformanceDeleteArgs<ExtArgs>>): Prisma__SupplierPerformanceClient<$Result.GetResult<Prisma.$SupplierPerformancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupplierPerformance.
     * @param {SupplierPerformanceUpdateArgs} args - Arguments to update one SupplierPerformance.
     * @example
     * // Update one SupplierPerformance
     * const supplierPerformance = await prisma.supplierPerformance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierPerformanceUpdateArgs>(args: SelectSubset<T, SupplierPerformanceUpdateArgs<ExtArgs>>): Prisma__SupplierPerformanceClient<$Result.GetResult<Prisma.$SupplierPerformancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupplierPerformances.
     * @param {SupplierPerformanceDeleteManyArgs} args - Arguments to filter SupplierPerformances to delete.
     * @example
     * // Delete a few SupplierPerformances
     * const { count } = await prisma.supplierPerformance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierPerformanceDeleteManyArgs>(args?: SelectSubset<T, SupplierPerformanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierPerformances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPerformanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierPerformances
     * const supplierPerformance = await prisma.supplierPerformance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierPerformanceUpdateManyArgs>(args: SelectSubset<T, SupplierPerformanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierPerformances and returns the data updated in the database.
     * @param {SupplierPerformanceUpdateManyAndReturnArgs} args - Arguments to update many SupplierPerformances.
     * @example
     * // Update many SupplierPerformances
     * const supplierPerformance = await prisma.supplierPerformance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupplierPerformances and only return the `id`
     * const supplierPerformanceWithIdOnly = await prisma.supplierPerformance.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierPerformanceUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierPerformanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPerformancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupplierPerformance.
     * @param {SupplierPerformanceUpsertArgs} args - Arguments to update or create a SupplierPerformance.
     * @example
     * // Update or create a SupplierPerformance
     * const supplierPerformance = await prisma.supplierPerformance.upsert({
     *   create: {
     *     // ... data to create a SupplierPerformance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierPerformance we want to update
     *   }
     * })
     */
    upsert<T extends SupplierPerformanceUpsertArgs>(args: SelectSubset<T, SupplierPerformanceUpsertArgs<ExtArgs>>): Prisma__SupplierPerformanceClient<$Result.GetResult<Prisma.$SupplierPerformancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupplierPerformances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPerformanceCountArgs} args - Arguments to filter SupplierPerformances to count.
     * @example
     * // Count the number of SupplierPerformances
     * const count = await prisma.supplierPerformance.count({
     *   where: {
     *     // ... the filter for the SupplierPerformances we want to count
     *   }
     * })
    **/
    count<T extends SupplierPerformanceCountArgs>(
      args?: Subset<T, SupplierPerformanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierPerformanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierPerformance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPerformanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierPerformanceAggregateArgs>(args: Subset<T, SupplierPerformanceAggregateArgs>): Prisma.PrismaPromise<GetSupplierPerformanceAggregateType<T>>

    /**
     * Group by SupplierPerformance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPerformanceGroupByArgs} args - Group by arguments.
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
      T extends SupplierPerformanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierPerformanceGroupByArgs['orderBy'] }
        : { orderBy?: SupplierPerformanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierPerformanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierPerformanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierPerformance model
   */
  readonly fields: SupplierPerformanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierPerformance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierPerformanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SupplierPerformance model
   */
  interface SupplierPerformanceFieldRefs {
    readonly id: FieldRef<"SupplierPerformance", 'String'>
    readonly supplierId: FieldRef<"SupplierPerformance", 'String'>
    readonly period: FieldRef<"SupplierPerformance", 'String'>
    readonly onTimeRate: FieldRef<"SupplierPerformance", 'Float'>
    readonly defectRate: FieldRef<"SupplierPerformance", 'Float'>
    readonly averageDelivery: FieldRef<"SupplierPerformance", 'Float'>
    readonly orderCompletion: FieldRef<"SupplierPerformance", 'Float'>
    readonly priceConsistency: FieldRef<"SupplierPerformance", 'Float'>
    readonly createdAt: FieldRef<"SupplierPerformance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupplierPerformance findUnique
   */
  export type SupplierPerformanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPerformance
     */
    select?: SupplierPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPerformance
     */
    omit?: SupplierPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPerformanceInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPerformance to fetch.
     */
    where: SupplierPerformanceWhereUniqueInput
  }

  /**
   * SupplierPerformance findUniqueOrThrow
   */
  export type SupplierPerformanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPerformance
     */
    select?: SupplierPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPerformance
     */
    omit?: SupplierPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPerformanceInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPerformance to fetch.
     */
    where: SupplierPerformanceWhereUniqueInput
  }

  /**
   * SupplierPerformance findFirst
   */
  export type SupplierPerformanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPerformance
     */
    select?: SupplierPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPerformance
     */
    omit?: SupplierPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPerformanceInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPerformance to fetch.
     */
    where?: SupplierPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPerformances to fetch.
     */
    orderBy?: SupplierPerformanceOrderByWithRelationInput | SupplierPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierPerformances.
     */
    cursor?: SupplierPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierPerformances.
     */
    distinct?: SupplierPerformanceScalarFieldEnum | SupplierPerformanceScalarFieldEnum[]
  }

  /**
   * SupplierPerformance findFirstOrThrow
   */
  export type SupplierPerformanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPerformance
     */
    select?: SupplierPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPerformance
     */
    omit?: SupplierPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPerformanceInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPerformance to fetch.
     */
    where?: SupplierPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPerformances to fetch.
     */
    orderBy?: SupplierPerformanceOrderByWithRelationInput | SupplierPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierPerformances.
     */
    cursor?: SupplierPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierPerformances.
     */
    distinct?: SupplierPerformanceScalarFieldEnum | SupplierPerformanceScalarFieldEnum[]
  }

  /**
   * SupplierPerformance findMany
   */
  export type SupplierPerformanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPerformance
     */
    select?: SupplierPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPerformance
     */
    omit?: SupplierPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPerformanceInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPerformances to fetch.
     */
    where?: SupplierPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPerformances to fetch.
     */
    orderBy?: SupplierPerformanceOrderByWithRelationInput | SupplierPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierPerformances.
     */
    cursor?: SupplierPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierPerformances.
     */
    distinct?: SupplierPerformanceScalarFieldEnum | SupplierPerformanceScalarFieldEnum[]
  }

  /**
   * SupplierPerformance create
   */
  export type SupplierPerformanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPerformance
     */
    select?: SupplierPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPerformance
     */
    omit?: SupplierPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPerformanceInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierPerformance.
     */
    data: XOR<SupplierPerformanceCreateInput, SupplierPerformanceUncheckedCreateInput>
  }

  /**
   * SupplierPerformance createMany
   */
  export type SupplierPerformanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierPerformances.
     */
    data: SupplierPerformanceCreateManyInput | SupplierPerformanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierPerformance createManyAndReturn
   */
  export type SupplierPerformanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPerformance
     */
    select?: SupplierPerformanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPerformance
     */
    omit?: SupplierPerformanceOmit<ExtArgs> | null
    /**
     * The data used to create many SupplierPerformances.
     */
    data: SupplierPerformanceCreateManyInput | SupplierPerformanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPerformanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierPerformance update
   */
  export type SupplierPerformanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPerformance
     */
    select?: SupplierPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPerformance
     */
    omit?: SupplierPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPerformanceInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierPerformance.
     */
    data: XOR<SupplierPerformanceUpdateInput, SupplierPerformanceUncheckedUpdateInput>
    /**
     * Choose, which SupplierPerformance to update.
     */
    where: SupplierPerformanceWhereUniqueInput
  }

  /**
   * SupplierPerformance updateMany
   */
  export type SupplierPerformanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierPerformances.
     */
    data: XOR<SupplierPerformanceUpdateManyMutationInput, SupplierPerformanceUncheckedUpdateManyInput>
    /**
     * Filter which SupplierPerformances to update
     */
    where?: SupplierPerformanceWhereInput
    /**
     * Limit how many SupplierPerformances to update.
     */
    limit?: number
  }

  /**
   * SupplierPerformance updateManyAndReturn
   */
  export type SupplierPerformanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPerformance
     */
    select?: SupplierPerformanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPerformance
     */
    omit?: SupplierPerformanceOmit<ExtArgs> | null
    /**
     * The data used to update SupplierPerformances.
     */
    data: XOR<SupplierPerformanceUpdateManyMutationInput, SupplierPerformanceUncheckedUpdateManyInput>
    /**
     * Filter which SupplierPerformances to update
     */
    where?: SupplierPerformanceWhereInput
    /**
     * Limit how many SupplierPerformances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPerformanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierPerformance upsert
   */
  export type SupplierPerformanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPerformance
     */
    select?: SupplierPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPerformance
     */
    omit?: SupplierPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPerformanceInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierPerformance to update in case it exists.
     */
    where: SupplierPerformanceWhereUniqueInput
    /**
     * In case the SupplierPerformance found by the `where` argument doesn't exist, create a new SupplierPerformance with this data.
     */
    create: XOR<SupplierPerformanceCreateInput, SupplierPerformanceUncheckedCreateInput>
    /**
     * In case the SupplierPerformance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierPerformanceUpdateInput, SupplierPerformanceUncheckedUpdateInput>
  }

  /**
   * SupplierPerformance delete
   */
  export type SupplierPerformanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPerformance
     */
    select?: SupplierPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPerformance
     */
    omit?: SupplierPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPerformanceInclude<ExtArgs> | null
    /**
     * Filter which SupplierPerformance to delete.
     */
    where: SupplierPerformanceWhereUniqueInput
  }

  /**
   * SupplierPerformance deleteMany
   */
  export type SupplierPerformanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierPerformances to delete
     */
    where?: SupplierPerformanceWhereInput
    /**
     * Limit how many SupplierPerformances to delete.
     */
    limit?: number
  }

  /**
   * SupplierPerformance without action
   */
  export type SupplierPerformanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPerformance
     */
    select?: SupplierPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPerformance
     */
    omit?: SupplierPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPerformanceInclude<ExtArgs> | null
  }


  /**
   * Model Quotation
   */

  export type AggregateQuotation = {
    _count: QuotationCountAggregateOutputType | null
    _avg: QuotationAvgAggregateOutputType | null
    _sum: QuotationSumAggregateOutputType | null
    _min: QuotationMinAggregateOutputType | null
    _max: QuotationMaxAggregateOutputType | null
  }

  export type QuotationAvgAggregateOutputType = {
    deliveryDays: number | null
    taxes: number | null
    shipping: number | null
  }

  export type QuotationSumAggregateOutputType = {
    deliveryDays: number | null
    taxes: number | null
    shipping: number | null
  }

  export type QuotationMinAggregateOutputType = {
    id: string | null
    supplierId: string | null
    reference: string | null
    status: $Enums.QuotationStatus | null
    deliveryDays: number | null
    taxes: number | null
    shipping: number | null
    paymentTerms: string | null
    createdAt: Date | null
  }

  export type QuotationMaxAggregateOutputType = {
    id: string | null
    supplierId: string | null
    reference: string | null
    status: $Enums.QuotationStatus | null
    deliveryDays: number | null
    taxes: number | null
    shipping: number | null
    paymentTerms: string | null
    createdAt: Date | null
  }

  export type QuotationCountAggregateOutputType = {
    id: number
    supplierId: number
    reference: number
    status: number
    deliveryDays: number
    taxes: number
    shipping: number
    paymentTerms: number
    createdAt: number
    _all: number
  }


  export type QuotationAvgAggregateInputType = {
    deliveryDays?: true
    taxes?: true
    shipping?: true
  }

  export type QuotationSumAggregateInputType = {
    deliveryDays?: true
    taxes?: true
    shipping?: true
  }

  export type QuotationMinAggregateInputType = {
    id?: true
    supplierId?: true
    reference?: true
    status?: true
    deliveryDays?: true
    taxes?: true
    shipping?: true
    paymentTerms?: true
    createdAt?: true
  }

  export type QuotationMaxAggregateInputType = {
    id?: true
    supplierId?: true
    reference?: true
    status?: true
    deliveryDays?: true
    taxes?: true
    shipping?: true
    paymentTerms?: true
    createdAt?: true
  }

  export type QuotationCountAggregateInputType = {
    id?: true
    supplierId?: true
    reference?: true
    status?: true
    deliveryDays?: true
    taxes?: true
    shipping?: true
    paymentTerms?: true
    createdAt?: true
    _all?: true
  }

  export type QuotationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotation to aggregate.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quotations
    **/
    _count?: true | QuotationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuotationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuotationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuotationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuotationMaxAggregateInputType
  }

  export type GetQuotationAggregateType<T extends QuotationAggregateArgs> = {
        [P in keyof T & keyof AggregateQuotation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuotation[P]>
      : GetScalarType<T[P], AggregateQuotation[P]>
  }




  export type QuotationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationWhereInput
    orderBy?: QuotationOrderByWithAggregationInput | QuotationOrderByWithAggregationInput[]
    by: QuotationScalarFieldEnum[] | QuotationScalarFieldEnum
    having?: QuotationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuotationCountAggregateInputType | true
    _avg?: QuotationAvgAggregateInputType
    _sum?: QuotationSumAggregateInputType
    _min?: QuotationMinAggregateInputType
    _max?: QuotationMaxAggregateInputType
  }

  export type QuotationGroupByOutputType = {
    id: string
    supplierId: string
    reference: string
    status: $Enums.QuotationStatus
    deliveryDays: number | null
    taxes: number
    shipping: number
    paymentTerms: string | null
    createdAt: Date
    _count: QuotationCountAggregateOutputType | null
    _avg: QuotationAvgAggregateOutputType | null
    _sum: QuotationSumAggregateOutputType | null
    _min: QuotationMinAggregateOutputType | null
    _max: QuotationMaxAggregateOutputType | null
  }

  type GetQuotationGroupByPayload<T extends QuotationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuotationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuotationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuotationGroupByOutputType[P]>
            : GetScalarType<T[P], QuotationGroupByOutputType[P]>
        }
      >
    >


  export type QuotationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    reference?: boolean
    status?: boolean
    deliveryDays?: boolean
    taxes?: boolean
    shipping?: boolean
    paymentTerms?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    items?: boolean | Quotation$itemsArgs<ExtArgs>
    _count?: boolean | QuotationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotation"]>

  export type QuotationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    reference?: boolean
    status?: boolean
    deliveryDays?: boolean
    taxes?: boolean
    shipping?: boolean
    paymentTerms?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotation"]>

  export type QuotationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    reference?: boolean
    status?: boolean
    deliveryDays?: boolean
    taxes?: boolean
    shipping?: boolean
    paymentTerms?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotation"]>

  export type QuotationSelectScalar = {
    id?: boolean
    supplierId?: boolean
    reference?: boolean
    status?: boolean
    deliveryDays?: boolean
    taxes?: boolean
    shipping?: boolean
    paymentTerms?: boolean
    createdAt?: boolean
  }

  export type QuotationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplierId" | "reference" | "status" | "deliveryDays" | "taxes" | "shipping" | "paymentTerms" | "createdAt", ExtArgs["result"]["quotation"]>
  export type QuotationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    items?: boolean | Quotation$itemsArgs<ExtArgs>
    _count?: boolean | QuotationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuotationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type QuotationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $QuotationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quotation"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
      items: Prisma.$QuotationItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supplierId: string
      reference: string
      status: $Enums.QuotationStatus
      deliveryDays: number | null
      taxes: number
      shipping: number
      paymentTerms: string | null
      createdAt: Date
    }, ExtArgs["result"]["quotation"]>
    composites: {}
  }

  type QuotationGetPayload<S extends boolean | null | undefined | QuotationDefaultArgs> = $Result.GetResult<Prisma.$QuotationPayload, S>

  type QuotationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuotationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuotationCountAggregateInputType | true
    }

  export interface QuotationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quotation'], meta: { name: 'Quotation' } }
    /**
     * Find zero or one Quotation that matches the filter.
     * @param {QuotationFindUniqueArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuotationFindUniqueArgs>(args: SelectSubset<T, QuotationFindUniqueArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quotation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuotationFindUniqueOrThrowArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuotationFindUniqueOrThrowArgs>(args: SelectSubset<T, QuotationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quotation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindFirstArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuotationFindFirstArgs>(args?: SelectSubset<T, QuotationFindFirstArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quotation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindFirstOrThrowArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuotationFindFirstOrThrowArgs>(args?: SelectSubset<T, QuotationFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quotations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quotations
     * const quotations = await prisma.quotation.findMany()
     * 
     * // Get first 10 Quotations
     * const quotations = await prisma.quotation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quotationWithIdOnly = await prisma.quotation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuotationFindManyArgs>(args?: SelectSubset<T, QuotationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quotation.
     * @param {QuotationCreateArgs} args - Arguments to create a Quotation.
     * @example
     * // Create one Quotation
     * const Quotation = await prisma.quotation.create({
     *   data: {
     *     // ... data to create a Quotation
     *   }
     * })
     * 
     */
    create<T extends QuotationCreateArgs>(args: SelectSubset<T, QuotationCreateArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quotations.
     * @param {QuotationCreateManyArgs} args - Arguments to create many Quotations.
     * @example
     * // Create many Quotations
     * const quotation = await prisma.quotation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuotationCreateManyArgs>(args?: SelectSubset<T, QuotationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quotations and returns the data saved in the database.
     * @param {QuotationCreateManyAndReturnArgs} args - Arguments to create many Quotations.
     * @example
     * // Create many Quotations
     * const quotation = await prisma.quotation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quotations and only return the `id`
     * const quotationWithIdOnly = await prisma.quotation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuotationCreateManyAndReturnArgs>(args?: SelectSubset<T, QuotationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quotation.
     * @param {QuotationDeleteArgs} args - Arguments to delete one Quotation.
     * @example
     * // Delete one Quotation
     * const Quotation = await prisma.quotation.delete({
     *   where: {
     *     // ... filter to delete one Quotation
     *   }
     * })
     * 
     */
    delete<T extends QuotationDeleteArgs>(args: SelectSubset<T, QuotationDeleteArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quotation.
     * @param {QuotationUpdateArgs} args - Arguments to update one Quotation.
     * @example
     * // Update one Quotation
     * const quotation = await prisma.quotation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuotationUpdateArgs>(args: SelectSubset<T, QuotationUpdateArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quotations.
     * @param {QuotationDeleteManyArgs} args - Arguments to filter Quotations to delete.
     * @example
     * // Delete a few Quotations
     * const { count } = await prisma.quotation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuotationDeleteManyArgs>(args?: SelectSubset<T, QuotationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quotations
     * const quotation = await prisma.quotation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuotationUpdateManyArgs>(args: SelectSubset<T, QuotationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotations and returns the data updated in the database.
     * @param {QuotationUpdateManyAndReturnArgs} args - Arguments to update many Quotations.
     * @example
     * // Update many Quotations
     * const quotation = await prisma.quotation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quotations and only return the `id`
     * const quotationWithIdOnly = await prisma.quotation.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuotationUpdateManyAndReturnArgs>(args: SelectSubset<T, QuotationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quotation.
     * @param {QuotationUpsertArgs} args - Arguments to update or create a Quotation.
     * @example
     * // Update or create a Quotation
     * const quotation = await prisma.quotation.upsert({
     *   create: {
     *     // ... data to create a Quotation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quotation we want to update
     *   }
     * })
     */
    upsert<T extends QuotationUpsertArgs>(args: SelectSubset<T, QuotationUpsertArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationCountArgs} args - Arguments to filter Quotations to count.
     * @example
     * // Count the number of Quotations
     * const count = await prisma.quotation.count({
     *   where: {
     *     // ... the filter for the Quotations we want to count
     *   }
     * })
    **/
    count<T extends QuotationCountArgs>(
      args?: Subset<T, QuotationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuotationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuotationAggregateArgs>(args: Subset<T, QuotationAggregateArgs>): Prisma.PrismaPromise<GetQuotationAggregateType<T>>

    /**
     * Group by Quotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationGroupByArgs} args - Group by arguments.
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
      T extends QuotationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuotationGroupByArgs['orderBy'] }
        : { orderBy?: QuotationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuotationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quotation model
   */
  readonly fields: QuotationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quotation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuotationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Quotation$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Quotation$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quotation model
   */
  interface QuotationFieldRefs {
    readonly id: FieldRef<"Quotation", 'String'>
    readonly supplierId: FieldRef<"Quotation", 'String'>
    readonly reference: FieldRef<"Quotation", 'String'>
    readonly status: FieldRef<"Quotation", 'QuotationStatus'>
    readonly deliveryDays: FieldRef<"Quotation", 'Float'>
    readonly taxes: FieldRef<"Quotation", 'Float'>
    readonly shipping: FieldRef<"Quotation", 'Float'>
    readonly paymentTerms: FieldRef<"Quotation", 'String'>
    readonly createdAt: FieldRef<"Quotation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quotation findUnique
   */
  export type QuotationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation findUniqueOrThrow
   */
  export type QuotationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation findFirst
   */
  export type QuotationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotations.
     */
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Quotation findFirstOrThrow
   */
  export type QuotationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotations.
     */
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Quotation findMany
   */
  export type QuotationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotations to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotations.
     */
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Quotation create
   */
  export type QuotationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * The data needed to create a Quotation.
     */
    data: XOR<QuotationCreateInput, QuotationUncheckedCreateInput>
  }

  /**
   * Quotation createMany
   */
  export type QuotationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quotations.
     */
    data: QuotationCreateManyInput | QuotationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quotation createManyAndReturn
   */
  export type QuotationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * The data used to create many Quotations.
     */
    data: QuotationCreateManyInput | QuotationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quotation update
   */
  export type QuotationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * The data needed to update a Quotation.
     */
    data: XOR<QuotationUpdateInput, QuotationUncheckedUpdateInput>
    /**
     * Choose, which Quotation to update.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation updateMany
   */
  export type QuotationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quotations.
     */
    data: XOR<QuotationUpdateManyMutationInput, QuotationUncheckedUpdateManyInput>
    /**
     * Filter which Quotations to update
     */
    where?: QuotationWhereInput
    /**
     * Limit how many Quotations to update.
     */
    limit?: number
  }

  /**
   * Quotation updateManyAndReturn
   */
  export type QuotationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * The data used to update Quotations.
     */
    data: XOR<QuotationUpdateManyMutationInput, QuotationUncheckedUpdateManyInput>
    /**
     * Filter which Quotations to update
     */
    where?: QuotationWhereInput
    /**
     * Limit how many Quotations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quotation upsert
   */
  export type QuotationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * The filter to search for the Quotation to update in case it exists.
     */
    where: QuotationWhereUniqueInput
    /**
     * In case the Quotation found by the `where` argument doesn't exist, create a new Quotation with this data.
     */
    create: XOR<QuotationCreateInput, QuotationUncheckedCreateInput>
    /**
     * In case the Quotation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuotationUpdateInput, QuotationUncheckedUpdateInput>
  }

  /**
   * Quotation delete
   */
  export type QuotationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter which Quotation to delete.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation deleteMany
   */
  export type QuotationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotations to delete
     */
    where?: QuotationWhereInput
    /**
     * Limit how many Quotations to delete.
     */
    limit?: number
  }

  /**
   * Quotation.items
   */
  export type Quotation$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationItem
     */
    omit?: QuotationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    where?: QuotationItemWhereInput
    orderBy?: QuotationItemOrderByWithRelationInput | QuotationItemOrderByWithRelationInput[]
    cursor?: QuotationItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuotationItemScalarFieldEnum | QuotationItemScalarFieldEnum[]
  }

  /**
   * Quotation without action
   */
  export type QuotationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
  }


  /**
   * Model QuotationItem
   */

  export type AggregateQuotationItem = {
    _count: QuotationItemCountAggregateOutputType | null
    _avg: QuotationItemAvgAggregateOutputType | null
    _sum: QuotationItemSumAggregateOutputType | null
    _min: QuotationItemMinAggregateOutputType | null
    _max: QuotationItemMaxAggregateOutputType | null
  }

  export type QuotationItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type QuotationItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type QuotationItemMinAggregateOutputType = {
    id: string | null
    quotationId: string | null
    product: string | null
    quantity: number | null
    unitPrice: number | null
    warranty: string | null
  }

  export type QuotationItemMaxAggregateOutputType = {
    id: string | null
    quotationId: string | null
    product: string | null
    quantity: number | null
    unitPrice: number | null
    warranty: string | null
  }

  export type QuotationItemCountAggregateOutputType = {
    id: number
    quotationId: number
    product: number
    quantity: number
    unitPrice: number
    warranty: number
    _all: number
  }


  export type QuotationItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type QuotationItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type QuotationItemMinAggregateInputType = {
    id?: true
    quotationId?: true
    product?: true
    quantity?: true
    unitPrice?: true
    warranty?: true
  }

  export type QuotationItemMaxAggregateInputType = {
    id?: true
    quotationId?: true
    product?: true
    quantity?: true
    unitPrice?: true
    warranty?: true
  }

  export type QuotationItemCountAggregateInputType = {
    id?: true
    quotationId?: true
    product?: true
    quantity?: true
    unitPrice?: true
    warranty?: true
    _all?: true
  }

  export type QuotationItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotationItem to aggregate.
     */
    where?: QuotationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationItems to fetch.
     */
    orderBy?: QuotationItemOrderByWithRelationInput | QuotationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuotationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuotationItems
    **/
    _count?: true | QuotationItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuotationItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuotationItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuotationItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuotationItemMaxAggregateInputType
  }

  export type GetQuotationItemAggregateType<T extends QuotationItemAggregateArgs> = {
        [P in keyof T & keyof AggregateQuotationItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuotationItem[P]>
      : GetScalarType<T[P], AggregateQuotationItem[P]>
  }




  export type QuotationItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationItemWhereInput
    orderBy?: QuotationItemOrderByWithAggregationInput | QuotationItemOrderByWithAggregationInput[]
    by: QuotationItemScalarFieldEnum[] | QuotationItemScalarFieldEnum
    having?: QuotationItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuotationItemCountAggregateInputType | true
    _avg?: QuotationItemAvgAggregateInputType
    _sum?: QuotationItemSumAggregateInputType
    _min?: QuotationItemMinAggregateInputType
    _max?: QuotationItemMaxAggregateInputType
  }

  export type QuotationItemGroupByOutputType = {
    id: string
    quotationId: string
    product: string
    quantity: number
    unitPrice: number
    warranty: string | null
    _count: QuotationItemCountAggregateOutputType | null
    _avg: QuotationItemAvgAggregateOutputType | null
    _sum: QuotationItemSumAggregateOutputType | null
    _min: QuotationItemMinAggregateOutputType | null
    _max: QuotationItemMaxAggregateOutputType | null
  }

  type GetQuotationItemGroupByPayload<T extends QuotationItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuotationItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuotationItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuotationItemGroupByOutputType[P]>
            : GetScalarType<T[P], QuotationItemGroupByOutputType[P]>
        }
      >
    >


  export type QuotationItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quotationId?: boolean
    product?: boolean
    quantity?: boolean
    unitPrice?: boolean
    warranty?: boolean
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotationItem"]>

  export type QuotationItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quotationId?: boolean
    product?: boolean
    quantity?: boolean
    unitPrice?: boolean
    warranty?: boolean
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotationItem"]>

  export type QuotationItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quotationId?: boolean
    product?: boolean
    quantity?: boolean
    unitPrice?: boolean
    warranty?: boolean
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotationItem"]>

  export type QuotationItemSelectScalar = {
    id?: boolean
    quotationId?: boolean
    product?: boolean
    quantity?: boolean
    unitPrice?: boolean
    warranty?: boolean
  }

  export type QuotationItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quotationId" | "product" | "quantity" | "unitPrice" | "warranty", ExtArgs["result"]["quotationItem"]>
  export type QuotationItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }
  export type QuotationItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }
  export type QuotationItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }

  export type $QuotationItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuotationItem"
    objects: {
      quotation: Prisma.$QuotationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quotationId: string
      product: string
      quantity: number
      unitPrice: number
      warranty: string | null
    }, ExtArgs["result"]["quotationItem"]>
    composites: {}
  }

  type QuotationItemGetPayload<S extends boolean | null | undefined | QuotationItemDefaultArgs> = $Result.GetResult<Prisma.$QuotationItemPayload, S>

  type QuotationItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuotationItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuotationItemCountAggregateInputType | true
    }

  export interface QuotationItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuotationItem'], meta: { name: 'QuotationItem' } }
    /**
     * Find zero or one QuotationItem that matches the filter.
     * @param {QuotationItemFindUniqueArgs} args - Arguments to find a QuotationItem
     * @example
     * // Get one QuotationItem
     * const quotationItem = await prisma.quotationItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuotationItemFindUniqueArgs>(args: SelectSubset<T, QuotationItemFindUniqueArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuotationItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuotationItemFindUniqueOrThrowArgs} args - Arguments to find a QuotationItem
     * @example
     * // Get one QuotationItem
     * const quotationItem = await prisma.quotationItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuotationItemFindUniqueOrThrowArgs>(args: SelectSubset<T, QuotationItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuotationItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemFindFirstArgs} args - Arguments to find a QuotationItem
     * @example
     * // Get one QuotationItem
     * const quotationItem = await prisma.quotationItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuotationItemFindFirstArgs>(args?: SelectSubset<T, QuotationItemFindFirstArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuotationItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemFindFirstOrThrowArgs} args - Arguments to find a QuotationItem
     * @example
     * // Get one QuotationItem
     * const quotationItem = await prisma.quotationItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuotationItemFindFirstOrThrowArgs>(args?: SelectSubset<T, QuotationItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuotationItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuotationItems
     * const quotationItems = await prisma.quotationItem.findMany()
     * 
     * // Get first 10 QuotationItems
     * const quotationItems = await prisma.quotationItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quotationItemWithIdOnly = await prisma.quotationItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuotationItemFindManyArgs>(args?: SelectSubset<T, QuotationItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuotationItem.
     * @param {QuotationItemCreateArgs} args - Arguments to create a QuotationItem.
     * @example
     * // Create one QuotationItem
     * const QuotationItem = await prisma.quotationItem.create({
     *   data: {
     *     // ... data to create a QuotationItem
     *   }
     * })
     * 
     */
    create<T extends QuotationItemCreateArgs>(args: SelectSubset<T, QuotationItemCreateArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuotationItems.
     * @param {QuotationItemCreateManyArgs} args - Arguments to create many QuotationItems.
     * @example
     * // Create many QuotationItems
     * const quotationItem = await prisma.quotationItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuotationItemCreateManyArgs>(args?: SelectSubset<T, QuotationItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuotationItems and returns the data saved in the database.
     * @param {QuotationItemCreateManyAndReturnArgs} args - Arguments to create many QuotationItems.
     * @example
     * // Create many QuotationItems
     * const quotationItem = await prisma.quotationItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuotationItems and only return the `id`
     * const quotationItemWithIdOnly = await prisma.quotationItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuotationItemCreateManyAndReturnArgs>(args?: SelectSubset<T, QuotationItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuotationItem.
     * @param {QuotationItemDeleteArgs} args - Arguments to delete one QuotationItem.
     * @example
     * // Delete one QuotationItem
     * const QuotationItem = await prisma.quotationItem.delete({
     *   where: {
     *     // ... filter to delete one QuotationItem
     *   }
     * })
     * 
     */
    delete<T extends QuotationItemDeleteArgs>(args: SelectSubset<T, QuotationItemDeleteArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuotationItem.
     * @param {QuotationItemUpdateArgs} args - Arguments to update one QuotationItem.
     * @example
     * // Update one QuotationItem
     * const quotationItem = await prisma.quotationItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuotationItemUpdateArgs>(args: SelectSubset<T, QuotationItemUpdateArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuotationItems.
     * @param {QuotationItemDeleteManyArgs} args - Arguments to filter QuotationItems to delete.
     * @example
     * // Delete a few QuotationItems
     * const { count } = await prisma.quotationItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuotationItemDeleteManyArgs>(args?: SelectSubset<T, QuotationItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuotationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuotationItems
     * const quotationItem = await prisma.quotationItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuotationItemUpdateManyArgs>(args: SelectSubset<T, QuotationItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuotationItems and returns the data updated in the database.
     * @param {QuotationItemUpdateManyAndReturnArgs} args - Arguments to update many QuotationItems.
     * @example
     * // Update many QuotationItems
     * const quotationItem = await prisma.quotationItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuotationItems and only return the `id`
     * const quotationItemWithIdOnly = await prisma.quotationItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuotationItemUpdateManyAndReturnArgs>(args: SelectSubset<T, QuotationItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuotationItem.
     * @param {QuotationItemUpsertArgs} args - Arguments to update or create a QuotationItem.
     * @example
     * // Update or create a QuotationItem
     * const quotationItem = await prisma.quotationItem.upsert({
     *   create: {
     *     // ... data to create a QuotationItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuotationItem we want to update
     *   }
     * })
     */
    upsert<T extends QuotationItemUpsertArgs>(args: SelectSubset<T, QuotationItemUpsertArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuotationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemCountArgs} args - Arguments to filter QuotationItems to count.
     * @example
     * // Count the number of QuotationItems
     * const count = await prisma.quotationItem.count({
     *   where: {
     *     // ... the filter for the QuotationItems we want to count
     *   }
     * })
    **/
    count<T extends QuotationItemCountArgs>(
      args?: Subset<T, QuotationItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuotationItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuotationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuotationItemAggregateArgs>(args: Subset<T, QuotationItemAggregateArgs>): Prisma.PrismaPromise<GetQuotationItemAggregateType<T>>

    /**
     * Group by QuotationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemGroupByArgs} args - Group by arguments.
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
      T extends QuotationItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuotationItemGroupByArgs['orderBy'] }
        : { orderBy?: QuotationItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuotationItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotationItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuotationItem model
   */
  readonly fields: QuotationItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuotationItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuotationItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quotation<T extends QuotationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuotationDefaultArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuotationItem model
   */
  interface QuotationItemFieldRefs {
    readonly id: FieldRef<"QuotationItem", 'String'>
    readonly quotationId: FieldRef<"QuotationItem", 'String'>
    readonly product: FieldRef<"QuotationItem", 'String'>
    readonly quantity: FieldRef<"QuotationItem", 'Int'>
    readonly unitPrice: FieldRef<"QuotationItem", 'Float'>
    readonly warranty: FieldRef<"QuotationItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuotationItem findUnique
   */
  export type QuotationItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationItem
     */
    omit?: QuotationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter, which QuotationItem to fetch.
     */
    where: QuotationItemWhereUniqueInput
  }

  /**
   * QuotationItem findUniqueOrThrow
   */
  export type QuotationItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationItem
     */
    omit?: QuotationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter, which QuotationItem to fetch.
     */
    where: QuotationItemWhereUniqueInput
  }

  /**
   * QuotationItem findFirst
   */
  export type QuotationItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationItem
     */
    omit?: QuotationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter, which QuotationItem to fetch.
     */
    where?: QuotationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationItems to fetch.
     */
    orderBy?: QuotationItemOrderByWithRelationInput | QuotationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotationItems.
     */
    cursor?: QuotationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotationItems.
     */
    distinct?: QuotationItemScalarFieldEnum | QuotationItemScalarFieldEnum[]
  }

  /**
   * QuotationItem findFirstOrThrow
   */
  export type QuotationItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationItem
     */
    omit?: QuotationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter, which QuotationItem to fetch.
     */
    where?: QuotationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationItems to fetch.
     */
    orderBy?: QuotationItemOrderByWithRelationInput | QuotationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotationItems.
     */
    cursor?: QuotationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotationItems.
     */
    distinct?: QuotationItemScalarFieldEnum | QuotationItemScalarFieldEnum[]
  }

  /**
   * QuotationItem findMany
   */
  export type QuotationItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationItem
     */
    omit?: QuotationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter, which QuotationItems to fetch.
     */
    where?: QuotationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationItems to fetch.
     */
    orderBy?: QuotationItemOrderByWithRelationInput | QuotationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuotationItems.
     */
    cursor?: QuotationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotationItems.
     */
    distinct?: QuotationItemScalarFieldEnum | QuotationItemScalarFieldEnum[]
  }

  /**
   * QuotationItem create
   */
  export type QuotationItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationItem
     */
    omit?: QuotationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * The data needed to create a QuotationItem.
     */
    data: XOR<QuotationItemCreateInput, QuotationItemUncheckedCreateInput>
  }

  /**
   * QuotationItem createMany
   */
  export type QuotationItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuotationItems.
     */
    data: QuotationItemCreateManyInput | QuotationItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuotationItem createManyAndReturn
   */
  export type QuotationItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationItem
     */
    omit?: QuotationItemOmit<ExtArgs> | null
    /**
     * The data used to create many QuotationItems.
     */
    data: QuotationItemCreateManyInput | QuotationItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuotationItem update
   */
  export type QuotationItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationItem
     */
    omit?: QuotationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * The data needed to update a QuotationItem.
     */
    data: XOR<QuotationItemUpdateInput, QuotationItemUncheckedUpdateInput>
    /**
     * Choose, which QuotationItem to update.
     */
    where: QuotationItemWhereUniqueInput
  }

  /**
   * QuotationItem updateMany
   */
  export type QuotationItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuotationItems.
     */
    data: XOR<QuotationItemUpdateManyMutationInput, QuotationItemUncheckedUpdateManyInput>
    /**
     * Filter which QuotationItems to update
     */
    where?: QuotationItemWhereInput
    /**
     * Limit how many QuotationItems to update.
     */
    limit?: number
  }

  /**
   * QuotationItem updateManyAndReturn
   */
  export type QuotationItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationItem
     */
    omit?: QuotationItemOmit<ExtArgs> | null
    /**
     * The data used to update QuotationItems.
     */
    data: XOR<QuotationItemUpdateManyMutationInput, QuotationItemUncheckedUpdateManyInput>
    /**
     * Filter which QuotationItems to update
     */
    where?: QuotationItemWhereInput
    /**
     * Limit how many QuotationItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuotationItem upsert
   */
  export type QuotationItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationItem
     */
    omit?: QuotationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * The filter to search for the QuotationItem to update in case it exists.
     */
    where: QuotationItemWhereUniqueInput
    /**
     * In case the QuotationItem found by the `where` argument doesn't exist, create a new QuotationItem with this data.
     */
    create: XOR<QuotationItemCreateInput, QuotationItemUncheckedCreateInput>
    /**
     * In case the QuotationItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuotationItemUpdateInput, QuotationItemUncheckedUpdateInput>
  }

  /**
   * QuotationItem delete
   */
  export type QuotationItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationItem
     */
    omit?: QuotationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter which QuotationItem to delete.
     */
    where: QuotationItemWhereUniqueInput
  }

  /**
   * QuotationItem deleteMany
   */
  export type QuotationItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotationItems to delete
     */
    where?: QuotationItemWhereInput
    /**
     * Limit how many QuotationItems to delete.
     */
    limit?: number
  }

  /**
   * QuotationItem without action
   */
  export type QuotationItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationItem
     */
    omit?: QuotationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
  }


  /**
   * Model SupplierProduct
   */

  export type AggregateSupplierProduct = {
    _count: SupplierProductCountAggregateOutputType | null
    _avg: SupplierProductAvgAggregateOutputType | null
    _sum: SupplierProductSumAggregateOutputType | null
    _min: SupplierProductMinAggregateOutputType | null
    _max: SupplierProductMaxAggregateOutputType | null
  }

  export type SupplierProductAvgAggregateOutputType = {
    unitPrice: number | null
  }

  export type SupplierProductSumAggregateOutputType = {
    unitPrice: number | null
  }

  export type SupplierProductMinAggregateOutputType = {
    id: string | null
    supplierId: string | null
    name: string | null
    category: string | null
    unitPrice: number | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierProductMaxAggregateOutputType = {
    id: string | null
    supplierId: string | null
    name: string | null
    category: string | null
    unitPrice: number | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierProductCountAggregateOutputType = {
    id: number
    supplierId: number
    name: number
    category: number
    unitPrice: number
    currency: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierProductAvgAggregateInputType = {
    unitPrice?: true
  }

  export type SupplierProductSumAggregateInputType = {
    unitPrice?: true
  }

  export type SupplierProductMinAggregateInputType = {
    id?: true
    supplierId?: true
    name?: true
    category?: true
    unitPrice?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierProductMaxAggregateInputType = {
    id?: true
    supplierId?: true
    name?: true
    category?: true
    unitPrice?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierProductCountAggregateInputType = {
    id?: true
    supplierId?: true
    name?: true
    category?: true
    unitPrice?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierProduct to aggregate.
     */
    where?: SupplierProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierProducts to fetch.
     */
    orderBy?: SupplierProductOrderByWithRelationInput | SupplierProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierProducts
    **/
    _count?: true | SupplierProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierProductMaxAggregateInputType
  }

  export type GetSupplierProductAggregateType<T extends SupplierProductAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierProduct[P]>
      : GetScalarType<T[P], AggregateSupplierProduct[P]>
  }




  export type SupplierProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierProductWhereInput
    orderBy?: SupplierProductOrderByWithAggregationInput | SupplierProductOrderByWithAggregationInput[]
    by: SupplierProductScalarFieldEnum[] | SupplierProductScalarFieldEnum
    having?: SupplierProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierProductCountAggregateInputType | true
    _avg?: SupplierProductAvgAggregateInputType
    _sum?: SupplierProductSumAggregateInputType
    _min?: SupplierProductMinAggregateInputType
    _max?: SupplierProductMaxAggregateInputType
  }

  export type SupplierProductGroupByOutputType = {
    id: string
    supplierId: string
    name: string
    category: string
    unitPrice: number
    currency: string
    createdAt: Date
    updatedAt: Date
    _count: SupplierProductCountAggregateOutputType | null
    _avg: SupplierProductAvgAggregateOutputType | null
    _sum: SupplierProductSumAggregateOutputType | null
    _min: SupplierProductMinAggregateOutputType | null
    _max: SupplierProductMaxAggregateOutputType | null
  }

  type GetSupplierProductGroupByPayload<T extends SupplierProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierProductGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierProductGroupByOutputType[P]>
        }
      >
    >


  export type SupplierProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    name?: boolean
    category?: boolean
    unitPrice?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierProduct"]>

  export type SupplierProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    name?: boolean
    category?: boolean
    unitPrice?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierProduct"]>

  export type SupplierProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    name?: boolean
    category?: boolean
    unitPrice?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierProduct"]>

  export type SupplierProductSelectScalar = {
    id?: boolean
    supplierId?: boolean
    name?: boolean
    category?: boolean
    unitPrice?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplierId" | "name" | "category" | "unitPrice" | "currency" | "createdAt" | "updatedAt", ExtArgs["result"]["supplierProduct"]>
  export type SupplierProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type SupplierProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type SupplierProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $SupplierProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierProduct"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supplierId: string
      name: string
      category: string
      unitPrice: number
      currency: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplierProduct"]>
    composites: {}
  }

  type SupplierProductGetPayload<S extends boolean | null | undefined | SupplierProductDefaultArgs> = $Result.GetResult<Prisma.$SupplierProductPayload, S>

  type SupplierProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierProductCountAggregateInputType | true
    }

  export interface SupplierProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierProduct'], meta: { name: 'SupplierProduct' } }
    /**
     * Find zero or one SupplierProduct that matches the filter.
     * @param {SupplierProductFindUniqueArgs} args - Arguments to find a SupplierProduct
     * @example
     * // Get one SupplierProduct
     * const supplierProduct = await prisma.supplierProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierProductFindUniqueArgs>(args: SelectSubset<T, SupplierProductFindUniqueArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupplierProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierProductFindUniqueOrThrowArgs} args - Arguments to find a SupplierProduct
     * @example
     * // Get one SupplierProduct
     * const supplierProduct = await prisma.supplierProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierProductFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupplierProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierProductFindFirstArgs} args - Arguments to find a SupplierProduct
     * @example
     * // Get one SupplierProduct
     * const supplierProduct = await prisma.supplierProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierProductFindFirstArgs>(args?: SelectSubset<T, SupplierProductFindFirstArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupplierProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierProductFindFirstOrThrowArgs} args - Arguments to find a SupplierProduct
     * @example
     * // Get one SupplierProduct
     * const supplierProduct = await prisma.supplierProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierProductFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupplierProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierProducts
     * const supplierProducts = await prisma.supplierProduct.findMany()
     * 
     * // Get first 10 SupplierProducts
     * const supplierProducts = await prisma.supplierProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierProductWithIdOnly = await prisma.supplierProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierProductFindManyArgs>(args?: SelectSubset<T, SupplierProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupplierProduct.
     * @param {SupplierProductCreateArgs} args - Arguments to create a SupplierProduct.
     * @example
     * // Create one SupplierProduct
     * const SupplierProduct = await prisma.supplierProduct.create({
     *   data: {
     *     // ... data to create a SupplierProduct
     *   }
     * })
     * 
     */
    create<T extends SupplierProductCreateArgs>(args: SelectSubset<T, SupplierProductCreateArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupplierProducts.
     * @param {SupplierProductCreateManyArgs} args - Arguments to create many SupplierProducts.
     * @example
     * // Create many SupplierProducts
     * const supplierProduct = await prisma.supplierProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierProductCreateManyArgs>(args?: SelectSubset<T, SupplierProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierProducts and returns the data saved in the database.
     * @param {SupplierProductCreateManyAndReturnArgs} args - Arguments to create many SupplierProducts.
     * @example
     * // Create many SupplierProducts
     * const supplierProduct = await prisma.supplierProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierProducts and only return the `id`
     * const supplierProductWithIdOnly = await prisma.supplierProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierProductCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupplierProduct.
     * @param {SupplierProductDeleteArgs} args - Arguments to delete one SupplierProduct.
     * @example
     * // Delete one SupplierProduct
     * const SupplierProduct = await prisma.supplierProduct.delete({
     *   where: {
     *     // ... filter to delete one SupplierProduct
     *   }
     * })
     * 
     */
    delete<T extends SupplierProductDeleteArgs>(args: SelectSubset<T, SupplierProductDeleteArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupplierProduct.
     * @param {SupplierProductUpdateArgs} args - Arguments to update one SupplierProduct.
     * @example
     * // Update one SupplierProduct
     * const supplierProduct = await prisma.supplierProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierProductUpdateArgs>(args: SelectSubset<T, SupplierProductUpdateArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupplierProducts.
     * @param {SupplierProductDeleteManyArgs} args - Arguments to filter SupplierProducts to delete.
     * @example
     * // Delete a few SupplierProducts
     * const { count } = await prisma.supplierProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierProductDeleteManyArgs>(args?: SelectSubset<T, SupplierProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierProducts
     * const supplierProduct = await prisma.supplierProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierProductUpdateManyArgs>(args: SelectSubset<T, SupplierProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierProducts and returns the data updated in the database.
     * @param {SupplierProductUpdateManyAndReturnArgs} args - Arguments to update many SupplierProducts.
     * @example
     * // Update many SupplierProducts
     * const supplierProduct = await prisma.supplierProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupplierProducts and only return the `id`
     * const supplierProductWithIdOnly = await prisma.supplierProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierProductUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupplierProduct.
     * @param {SupplierProductUpsertArgs} args - Arguments to update or create a SupplierProduct.
     * @example
     * // Update or create a SupplierProduct
     * const supplierProduct = await prisma.supplierProduct.upsert({
     *   create: {
     *     // ... data to create a SupplierProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierProduct we want to update
     *   }
     * })
     */
    upsert<T extends SupplierProductUpsertArgs>(args: SelectSubset<T, SupplierProductUpsertArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupplierProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierProductCountArgs} args - Arguments to filter SupplierProducts to count.
     * @example
     * // Count the number of SupplierProducts
     * const count = await prisma.supplierProduct.count({
     *   where: {
     *     // ... the filter for the SupplierProducts we want to count
     *   }
     * })
    **/
    count<T extends SupplierProductCountArgs>(
      args?: Subset<T, SupplierProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierProductAggregateArgs>(args: Subset<T, SupplierProductAggregateArgs>): Prisma.PrismaPromise<GetSupplierProductAggregateType<T>>

    /**
     * Group by SupplierProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierProductGroupByArgs} args - Group by arguments.
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
      T extends SupplierProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierProductGroupByArgs['orderBy'] }
        : { orderBy?: SupplierProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierProduct model
   */
  readonly fields: SupplierProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SupplierProduct model
   */
  interface SupplierProductFieldRefs {
    readonly id: FieldRef<"SupplierProduct", 'String'>
    readonly supplierId: FieldRef<"SupplierProduct", 'String'>
    readonly name: FieldRef<"SupplierProduct", 'String'>
    readonly category: FieldRef<"SupplierProduct", 'String'>
    readonly unitPrice: FieldRef<"SupplierProduct", 'Float'>
    readonly currency: FieldRef<"SupplierProduct", 'String'>
    readonly createdAt: FieldRef<"SupplierProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"SupplierProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupplierProduct findUnique
   */
  export type SupplierProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierProduct
     */
    omit?: SupplierProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * Filter, which SupplierProduct to fetch.
     */
    where: SupplierProductWhereUniqueInput
  }

  /**
   * SupplierProduct findUniqueOrThrow
   */
  export type SupplierProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierProduct
     */
    omit?: SupplierProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * Filter, which SupplierProduct to fetch.
     */
    where: SupplierProductWhereUniqueInput
  }

  /**
   * SupplierProduct findFirst
   */
  export type SupplierProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierProduct
     */
    omit?: SupplierProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * Filter, which SupplierProduct to fetch.
     */
    where?: SupplierProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierProducts to fetch.
     */
    orderBy?: SupplierProductOrderByWithRelationInput | SupplierProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierProducts.
     */
    cursor?: SupplierProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierProducts.
     */
    distinct?: SupplierProductScalarFieldEnum | SupplierProductScalarFieldEnum[]
  }

  /**
   * SupplierProduct findFirstOrThrow
   */
  export type SupplierProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierProduct
     */
    omit?: SupplierProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * Filter, which SupplierProduct to fetch.
     */
    where?: SupplierProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierProducts to fetch.
     */
    orderBy?: SupplierProductOrderByWithRelationInput | SupplierProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierProducts.
     */
    cursor?: SupplierProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierProducts.
     */
    distinct?: SupplierProductScalarFieldEnum | SupplierProductScalarFieldEnum[]
  }

  /**
   * SupplierProduct findMany
   */
  export type SupplierProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierProduct
     */
    omit?: SupplierProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * Filter, which SupplierProducts to fetch.
     */
    where?: SupplierProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierProducts to fetch.
     */
    orderBy?: SupplierProductOrderByWithRelationInput | SupplierProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierProducts.
     */
    cursor?: SupplierProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierProducts.
     */
    distinct?: SupplierProductScalarFieldEnum | SupplierProductScalarFieldEnum[]
  }

  /**
   * SupplierProduct create
   */
  export type SupplierProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierProduct
     */
    omit?: SupplierProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierProduct.
     */
    data: XOR<SupplierProductCreateInput, SupplierProductUncheckedCreateInput>
  }

  /**
   * SupplierProduct createMany
   */
  export type SupplierProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierProducts.
     */
    data: SupplierProductCreateManyInput | SupplierProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierProduct createManyAndReturn
   */
  export type SupplierProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierProduct
     */
    omit?: SupplierProductOmit<ExtArgs> | null
    /**
     * The data used to create many SupplierProducts.
     */
    data: SupplierProductCreateManyInput | SupplierProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierProduct update
   */
  export type SupplierProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierProduct
     */
    omit?: SupplierProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierProduct.
     */
    data: XOR<SupplierProductUpdateInput, SupplierProductUncheckedUpdateInput>
    /**
     * Choose, which SupplierProduct to update.
     */
    where: SupplierProductWhereUniqueInput
  }

  /**
   * SupplierProduct updateMany
   */
  export type SupplierProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierProducts.
     */
    data: XOR<SupplierProductUpdateManyMutationInput, SupplierProductUncheckedUpdateManyInput>
    /**
     * Filter which SupplierProducts to update
     */
    where?: SupplierProductWhereInput
    /**
     * Limit how many SupplierProducts to update.
     */
    limit?: number
  }

  /**
   * SupplierProduct updateManyAndReturn
   */
  export type SupplierProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierProduct
     */
    omit?: SupplierProductOmit<ExtArgs> | null
    /**
     * The data used to update SupplierProducts.
     */
    data: XOR<SupplierProductUpdateManyMutationInput, SupplierProductUncheckedUpdateManyInput>
    /**
     * Filter which SupplierProducts to update
     */
    where?: SupplierProductWhereInput
    /**
     * Limit how many SupplierProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierProduct upsert
   */
  export type SupplierProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierProduct
     */
    omit?: SupplierProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierProduct to update in case it exists.
     */
    where: SupplierProductWhereUniqueInput
    /**
     * In case the SupplierProduct found by the `where` argument doesn't exist, create a new SupplierProduct with this data.
     */
    create: XOR<SupplierProductCreateInput, SupplierProductUncheckedCreateInput>
    /**
     * In case the SupplierProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierProductUpdateInput, SupplierProductUncheckedUpdateInput>
  }

  /**
   * SupplierProduct delete
   */
  export type SupplierProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierProduct
     */
    omit?: SupplierProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * Filter which SupplierProduct to delete.
     */
    where: SupplierProductWhereUniqueInput
  }

  /**
   * SupplierProduct deleteMany
   */
  export type SupplierProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierProducts to delete
     */
    where?: SupplierProductWhereInput
    /**
     * Limit how many SupplierProducts to delete.
     */
    limit?: number
  }

  /**
   * SupplierProduct without action
   */
  export type SupplierProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierProduct
     */
    omit?: SupplierProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
  }


  /**
   * Model SupplierReview
   */

  export type AggregateSupplierReview = {
    _count: SupplierReviewCountAggregateOutputType | null
    _avg: SupplierReviewAvgAggregateOutputType | null
    _sum: SupplierReviewSumAggregateOutputType | null
    _min: SupplierReviewMinAggregateOutputType | null
    _max: SupplierReviewMaxAggregateOutputType | null
  }

  export type SupplierReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type SupplierReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type SupplierReviewMinAggregateOutputType = {
    id: string | null
    supplierId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type SupplierReviewMaxAggregateOutputType = {
    id: string | null
    supplierId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type SupplierReviewCountAggregateOutputType = {
    id: number
    supplierId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type SupplierReviewAvgAggregateInputType = {
    rating?: true
  }

  export type SupplierReviewSumAggregateInputType = {
    rating?: true
  }

  export type SupplierReviewMinAggregateInputType = {
    id?: true
    supplierId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type SupplierReviewMaxAggregateInputType = {
    id?: true
    supplierId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type SupplierReviewCountAggregateInputType = {
    id?: true
    supplierId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type SupplierReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierReview to aggregate.
     */
    where?: SupplierReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierReviews to fetch.
     */
    orderBy?: SupplierReviewOrderByWithRelationInput | SupplierReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierReviews
    **/
    _count?: true | SupplierReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierReviewMaxAggregateInputType
  }

  export type GetSupplierReviewAggregateType<T extends SupplierReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierReview[P]>
      : GetScalarType<T[P], AggregateSupplierReview[P]>
  }




  export type SupplierReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierReviewWhereInput
    orderBy?: SupplierReviewOrderByWithAggregationInput | SupplierReviewOrderByWithAggregationInput[]
    by: SupplierReviewScalarFieldEnum[] | SupplierReviewScalarFieldEnum
    having?: SupplierReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierReviewCountAggregateInputType | true
    _avg?: SupplierReviewAvgAggregateInputType
    _sum?: SupplierReviewSumAggregateInputType
    _min?: SupplierReviewMinAggregateInputType
    _max?: SupplierReviewMaxAggregateInputType
  }

  export type SupplierReviewGroupByOutputType = {
    id: string
    supplierId: string
    rating: number
    comment: string | null
    createdAt: Date
    _count: SupplierReviewCountAggregateOutputType | null
    _avg: SupplierReviewAvgAggregateOutputType | null
    _sum: SupplierReviewSumAggregateOutputType | null
    _min: SupplierReviewMinAggregateOutputType | null
    _max: SupplierReviewMaxAggregateOutputType | null
  }

  type GetSupplierReviewGroupByPayload<T extends SupplierReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierReviewGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierReviewGroupByOutputType[P]>
        }
      >
    >


  export type SupplierReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierReview"]>

  export type SupplierReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierReview"]>

  export type SupplierReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierReview"]>

  export type SupplierReviewSelectScalar = {
    id?: boolean
    supplierId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type SupplierReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplierId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["supplierReview"]>
  export type SupplierReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type SupplierReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type SupplierReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $SupplierReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierReview"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supplierId: string
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["supplierReview"]>
    composites: {}
  }

  type SupplierReviewGetPayload<S extends boolean | null | undefined | SupplierReviewDefaultArgs> = $Result.GetResult<Prisma.$SupplierReviewPayload, S>

  type SupplierReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierReviewCountAggregateInputType | true
    }

  export interface SupplierReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierReview'], meta: { name: 'SupplierReview' } }
    /**
     * Find zero or one SupplierReview that matches the filter.
     * @param {SupplierReviewFindUniqueArgs} args - Arguments to find a SupplierReview
     * @example
     * // Get one SupplierReview
     * const supplierReview = await prisma.supplierReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierReviewFindUniqueArgs>(args: SelectSubset<T, SupplierReviewFindUniqueArgs<ExtArgs>>): Prisma__SupplierReviewClient<$Result.GetResult<Prisma.$SupplierReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupplierReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierReviewFindUniqueOrThrowArgs} args - Arguments to find a SupplierReview
     * @example
     * // Get one SupplierReview
     * const supplierReview = await prisma.supplierReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierReviewClient<$Result.GetResult<Prisma.$SupplierReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupplierReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierReviewFindFirstArgs} args - Arguments to find a SupplierReview
     * @example
     * // Get one SupplierReview
     * const supplierReview = await prisma.supplierReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierReviewFindFirstArgs>(args?: SelectSubset<T, SupplierReviewFindFirstArgs<ExtArgs>>): Prisma__SupplierReviewClient<$Result.GetResult<Prisma.$SupplierReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupplierReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierReviewFindFirstOrThrowArgs} args - Arguments to find a SupplierReview
     * @example
     * // Get one SupplierReview
     * const supplierReview = await prisma.supplierReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierReviewClient<$Result.GetResult<Prisma.$SupplierReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupplierReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierReviews
     * const supplierReviews = await prisma.supplierReview.findMany()
     * 
     * // Get first 10 SupplierReviews
     * const supplierReviews = await prisma.supplierReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierReviewWithIdOnly = await prisma.supplierReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierReviewFindManyArgs>(args?: SelectSubset<T, SupplierReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupplierReview.
     * @param {SupplierReviewCreateArgs} args - Arguments to create a SupplierReview.
     * @example
     * // Create one SupplierReview
     * const SupplierReview = await prisma.supplierReview.create({
     *   data: {
     *     // ... data to create a SupplierReview
     *   }
     * })
     * 
     */
    create<T extends SupplierReviewCreateArgs>(args: SelectSubset<T, SupplierReviewCreateArgs<ExtArgs>>): Prisma__SupplierReviewClient<$Result.GetResult<Prisma.$SupplierReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupplierReviews.
     * @param {SupplierReviewCreateManyArgs} args - Arguments to create many SupplierReviews.
     * @example
     * // Create many SupplierReviews
     * const supplierReview = await prisma.supplierReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierReviewCreateManyArgs>(args?: SelectSubset<T, SupplierReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierReviews and returns the data saved in the database.
     * @param {SupplierReviewCreateManyAndReturnArgs} args - Arguments to create many SupplierReviews.
     * @example
     * // Create many SupplierReviews
     * const supplierReview = await prisma.supplierReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierReviews and only return the `id`
     * const supplierReviewWithIdOnly = await prisma.supplierReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupplierReview.
     * @param {SupplierReviewDeleteArgs} args - Arguments to delete one SupplierReview.
     * @example
     * // Delete one SupplierReview
     * const SupplierReview = await prisma.supplierReview.delete({
     *   where: {
     *     // ... filter to delete one SupplierReview
     *   }
     * })
     * 
     */
    delete<T extends SupplierReviewDeleteArgs>(args: SelectSubset<T, SupplierReviewDeleteArgs<ExtArgs>>): Prisma__SupplierReviewClient<$Result.GetResult<Prisma.$SupplierReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupplierReview.
     * @param {SupplierReviewUpdateArgs} args - Arguments to update one SupplierReview.
     * @example
     * // Update one SupplierReview
     * const supplierReview = await prisma.supplierReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierReviewUpdateArgs>(args: SelectSubset<T, SupplierReviewUpdateArgs<ExtArgs>>): Prisma__SupplierReviewClient<$Result.GetResult<Prisma.$SupplierReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupplierReviews.
     * @param {SupplierReviewDeleteManyArgs} args - Arguments to filter SupplierReviews to delete.
     * @example
     * // Delete a few SupplierReviews
     * const { count } = await prisma.supplierReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierReviewDeleteManyArgs>(args?: SelectSubset<T, SupplierReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierReviews
     * const supplierReview = await prisma.supplierReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierReviewUpdateManyArgs>(args: SelectSubset<T, SupplierReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierReviews and returns the data updated in the database.
     * @param {SupplierReviewUpdateManyAndReturnArgs} args - Arguments to update many SupplierReviews.
     * @example
     * // Update many SupplierReviews
     * const supplierReview = await prisma.supplierReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupplierReviews and only return the `id`
     * const supplierReviewWithIdOnly = await prisma.supplierReview.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupplierReview.
     * @param {SupplierReviewUpsertArgs} args - Arguments to update or create a SupplierReview.
     * @example
     * // Update or create a SupplierReview
     * const supplierReview = await prisma.supplierReview.upsert({
     *   create: {
     *     // ... data to create a SupplierReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierReview we want to update
     *   }
     * })
     */
    upsert<T extends SupplierReviewUpsertArgs>(args: SelectSubset<T, SupplierReviewUpsertArgs<ExtArgs>>): Prisma__SupplierReviewClient<$Result.GetResult<Prisma.$SupplierReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupplierReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierReviewCountArgs} args - Arguments to filter SupplierReviews to count.
     * @example
     * // Count the number of SupplierReviews
     * const count = await prisma.supplierReview.count({
     *   where: {
     *     // ... the filter for the SupplierReviews we want to count
     *   }
     * })
    **/
    count<T extends SupplierReviewCountArgs>(
      args?: Subset<T, SupplierReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierReviewAggregateArgs>(args: Subset<T, SupplierReviewAggregateArgs>): Prisma.PrismaPromise<GetSupplierReviewAggregateType<T>>

    /**
     * Group by SupplierReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierReviewGroupByArgs} args - Group by arguments.
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
      T extends SupplierReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierReviewGroupByArgs['orderBy'] }
        : { orderBy?: SupplierReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierReview model
   */
  readonly fields: SupplierReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SupplierReview model
   */
  interface SupplierReviewFieldRefs {
    readonly id: FieldRef<"SupplierReview", 'String'>
    readonly supplierId: FieldRef<"SupplierReview", 'String'>
    readonly rating: FieldRef<"SupplierReview", 'Float'>
    readonly comment: FieldRef<"SupplierReview", 'String'>
    readonly createdAt: FieldRef<"SupplierReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupplierReview findUnique
   */
  export type SupplierReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierReview
     */
    select?: SupplierReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierReview
     */
    omit?: SupplierReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierReviewInclude<ExtArgs> | null
    /**
     * Filter, which SupplierReview to fetch.
     */
    where: SupplierReviewWhereUniqueInput
  }

  /**
   * SupplierReview findUniqueOrThrow
   */
  export type SupplierReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierReview
     */
    select?: SupplierReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierReview
     */
    omit?: SupplierReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierReviewInclude<ExtArgs> | null
    /**
     * Filter, which SupplierReview to fetch.
     */
    where: SupplierReviewWhereUniqueInput
  }

  /**
   * SupplierReview findFirst
   */
  export type SupplierReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierReview
     */
    select?: SupplierReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierReview
     */
    omit?: SupplierReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierReviewInclude<ExtArgs> | null
    /**
     * Filter, which SupplierReview to fetch.
     */
    where?: SupplierReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierReviews to fetch.
     */
    orderBy?: SupplierReviewOrderByWithRelationInput | SupplierReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierReviews.
     */
    cursor?: SupplierReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierReviews.
     */
    distinct?: SupplierReviewScalarFieldEnum | SupplierReviewScalarFieldEnum[]
  }

  /**
   * SupplierReview findFirstOrThrow
   */
  export type SupplierReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierReview
     */
    select?: SupplierReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierReview
     */
    omit?: SupplierReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierReviewInclude<ExtArgs> | null
    /**
     * Filter, which SupplierReview to fetch.
     */
    where?: SupplierReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierReviews to fetch.
     */
    orderBy?: SupplierReviewOrderByWithRelationInput | SupplierReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierReviews.
     */
    cursor?: SupplierReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierReviews.
     */
    distinct?: SupplierReviewScalarFieldEnum | SupplierReviewScalarFieldEnum[]
  }

  /**
   * SupplierReview findMany
   */
  export type SupplierReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierReview
     */
    select?: SupplierReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierReview
     */
    omit?: SupplierReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierReviewInclude<ExtArgs> | null
    /**
     * Filter, which SupplierReviews to fetch.
     */
    where?: SupplierReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierReviews to fetch.
     */
    orderBy?: SupplierReviewOrderByWithRelationInput | SupplierReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierReviews.
     */
    cursor?: SupplierReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierReviews.
     */
    distinct?: SupplierReviewScalarFieldEnum | SupplierReviewScalarFieldEnum[]
  }

  /**
   * SupplierReview create
   */
  export type SupplierReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierReview
     */
    select?: SupplierReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierReview
     */
    omit?: SupplierReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierReview.
     */
    data: XOR<SupplierReviewCreateInput, SupplierReviewUncheckedCreateInput>
  }

  /**
   * SupplierReview createMany
   */
  export type SupplierReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierReviews.
     */
    data: SupplierReviewCreateManyInput | SupplierReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierReview createManyAndReturn
   */
  export type SupplierReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierReview
     */
    select?: SupplierReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierReview
     */
    omit?: SupplierReviewOmit<ExtArgs> | null
    /**
     * The data used to create many SupplierReviews.
     */
    data: SupplierReviewCreateManyInput | SupplierReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierReview update
   */
  export type SupplierReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierReview
     */
    select?: SupplierReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierReview
     */
    omit?: SupplierReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierReview.
     */
    data: XOR<SupplierReviewUpdateInput, SupplierReviewUncheckedUpdateInput>
    /**
     * Choose, which SupplierReview to update.
     */
    where: SupplierReviewWhereUniqueInput
  }

  /**
   * SupplierReview updateMany
   */
  export type SupplierReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierReviews.
     */
    data: XOR<SupplierReviewUpdateManyMutationInput, SupplierReviewUncheckedUpdateManyInput>
    /**
     * Filter which SupplierReviews to update
     */
    where?: SupplierReviewWhereInput
    /**
     * Limit how many SupplierReviews to update.
     */
    limit?: number
  }

  /**
   * SupplierReview updateManyAndReturn
   */
  export type SupplierReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierReview
     */
    select?: SupplierReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierReview
     */
    omit?: SupplierReviewOmit<ExtArgs> | null
    /**
     * The data used to update SupplierReviews.
     */
    data: XOR<SupplierReviewUpdateManyMutationInput, SupplierReviewUncheckedUpdateManyInput>
    /**
     * Filter which SupplierReviews to update
     */
    where?: SupplierReviewWhereInput
    /**
     * Limit how many SupplierReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierReview upsert
   */
  export type SupplierReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierReview
     */
    select?: SupplierReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierReview
     */
    omit?: SupplierReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierReview to update in case it exists.
     */
    where: SupplierReviewWhereUniqueInput
    /**
     * In case the SupplierReview found by the `where` argument doesn't exist, create a new SupplierReview with this data.
     */
    create: XOR<SupplierReviewCreateInput, SupplierReviewUncheckedCreateInput>
    /**
     * In case the SupplierReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierReviewUpdateInput, SupplierReviewUncheckedUpdateInput>
  }

  /**
   * SupplierReview delete
   */
  export type SupplierReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierReview
     */
    select?: SupplierReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierReview
     */
    omit?: SupplierReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierReviewInclude<ExtArgs> | null
    /**
     * Filter which SupplierReview to delete.
     */
    where: SupplierReviewWhereUniqueInput
  }

  /**
   * SupplierReview deleteMany
   */
  export type SupplierReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierReviews to delete
     */
    where?: SupplierReviewWhereInput
    /**
     * Limit how many SupplierReviews to delete.
     */
    limit?: number
  }

  /**
   * SupplierReview without action
   */
  export type SupplierReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierReview
     */
    select?: SupplierReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierReview
     */
    omit?: SupplierReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierReviewInclude<ExtArgs> | null
  }


  /**
   * Model ProcurementOrder
   */

  export type AggregateProcurementOrder = {
    _count: ProcurementOrderCountAggregateOutputType | null
    _avg: ProcurementOrderAvgAggregateOutputType | null
    _sum: ProcurementOrderSumAggregateOutputType | null
    _min: ProcurementOrderMinAggregateOutputType | null
    _max: ProcurementOrderMaxAggregateOutputType | null
  }

  export type ProcurementOrderAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type ProcurementOrderSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type ProcurementOrderMinAggregateOutputType = {
    id: string | null
    supplierId: string | null
    reference: string | null
    totalAmount: number | null
    status: string | null
    orderedAt: Date | null
  }

  export type ProcurementOrderMaxAggregateOutputType = {
    id: string | null
    supplierId: string | null
    reference: string | null
    totalAmount: number | null
    status: string | null
    orderedAt: Date | null
  }

  export type ProcurementOrderCountAggregateOutputType = {
    id: number
    supplierId: number
    reference: number
    totalAmount: number
    status: number
    orderedAt: number
    _all: number
  }


  export type ProcurementOrderAvgAggregateInputType = {
    totalAmount?: true
  }

  export type ProcurementOrderSumAggregateInputType = {
    totalAmount?: true
  }

  export type ProcurementOrderMinAggregateInputType = {
    id?: true
    supplierId?: true
    reference?: true
    totalAmount?: true
    status?: true
    orderedAt?: true
  }

  export type ProcurementOrderMaxAggregateInputType = {
    id?: true
    supplierId?: true
    reference?: true
    totalAmount?: true
    status?: true
    orderedAt?: true
  }

  export type ProcurementOrderCountAggregateInputType = {
    id?: true
    supplierId?: true
    reference?: true
    totalAmount?: true
    status?: true
    orderedAt?: true
    _all?: true
  }

  export type ProcurementOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcurementOrder to aggregate.
     */
    where?: ProcurementOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcurementOrders to fetch.
     */
    orderBy?: ProcurementOrderOrderByWithRelationInput | ProcurementOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcurementOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcurementOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcurementOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcurementOrders
    **/
    _count?: true | ProcurementOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcurementOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcurementOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcurementOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcurementOrderMaxAggregateInputType
  }

  export type GetProcurementOrderAggregateType<T extends ProcurementOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateProcurementOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcurementOrder[P]>
      : GetScalarType<T[P], AggregateProcurementOrder[P]>
  }




  export type ProcurementOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcurementOrderWhereInput
    orderBy?: ProcurementOrderOrderByWithAggregationInput | ProcurementOrderOrderByWithAggregationInput[]
    by: ProcurementOrderScalarFieldEnum[] | ProcurementOrderScalarFieldEnum
    having?: ProcurementOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcurementOrderCountAggregateInputType | true
    _avg?: ProcurementOrderAvgAggregateInputType
    _sum?: ProcurementOrderSumAggregateInputType
    _min?: ProcurementOrderMinAggregateInputType
    _max?: ProcurementOrderMaxAggregateInputType
  }

  export type ProcurementOrderGroupByOutputType = {
    id: string
    supplierId: string
    reference: string
    totalAmount: number
    status: string
    orderedAt: Date
    _count: ProcurementOrderCountAggregateOutputType | null
    _avg: ProcurementOrderAvgAggregateOutputType | null
    _sum: ProcurementOrderSumAggregateOutputType | null
    _min: ProcurementOrderMinAggregateOutputType | null
    _max: ProcurementOrderMaxAggregateOutputType | null
  }

  type GetProcurementOrderGroupByPayload<T extends ProcurementOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcurementOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcurementOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcurementOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ProcurementOrderGroupByOutputType[P]>
        }
      >
    >


  export type ProcurementOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    reference?: boolean
    totalAmount?: boolean
    status?: boolean
    orderedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    costBreakdown?: boolean | ProcurementOrder$costBreakdownArgs<ExtArgs>
    items?: boolean | ProcurementOrder$itemsArgs<ExtArgs>
    _count?: boolean | ProcurementOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procurementOrder"]>

  export type ProcurementOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    reference?: boolean
    totalAmount?: boolean
    status?: boolean
    orderedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procurementOrder"]>

  export type ProcurementOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    reference?: boolean
    totalAmount?: boolean
    status?: boolean
    orderedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procurementOrder"]>

  export type ProcurementOrderSelectScalar = {
    id?: boolean
    supplierId?: boolean
    reference?: boolean
    totalAmount?: boolean
    status?: boolean
    orderedAt?: boolean
  }

  export type ProcurementOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplierId" | "reference" | "totalAmount" | "status" | "orderedAt", ExtArgs["result"]["procurementOrder"]>
  export type ProcurementOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    costBreakdown?: boolean | ProcurementOrder$costBreakdownArgs<ExtArgs>
    items?: boolean | ProcurementOrder$itemsArgs<ExtArgs>
    _count?: boolean | ProcurementOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProcurementOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type ProcurementOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $ProcurementOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcurementOrder"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
      costBreakdown: Prisma.$CostBreakdownPayload<ExtArgs> | null
      items: Prisma.$ProcurementOrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supplierId: string
      reference: string
      totalAmount: number
      status: string
      orderedAt: Date
    }, ExtArgs["result"]["procurementOrder"]>
    composites: {}
  }

  type ProcurementOrderGetPayload<S extends boolean | null | undefined | ProcurementOrderDefaultArgs> = $Result.GetResult<Prisma.$ProcurementOrderPayload, S>

  type ProcurementOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcurementOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcurementOrderCountAggregateInputType | true
    }

  export interface ProcurementOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcurementOrder'], meta: { name: 'ProcurementOrder' } }
    /**
     * Find zero or one ProcurementOrder that matches the filter.
     * @param {ProcurementOrderFindUniqueArgs} args - Arguments to find a ProcurementOrder
     * @example
     * // Get one ProcurementOrder
     * const procurementOrder = await prisma.procurementOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcurementOrderFindUniqueArgs>(args: SelectSubset<T, ProcurementOrderFindUniqueArgs<ExtArgs>>): Prisma__ProcurementOrderClient<$Result.GetResult<Prisma.$ProcurementOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcurementOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcurementOrderFindUniqueOrThrowArgs} args - Arguments to find a ProcurementOrder
     * @example
     * // Get one ProcurementOrder
     * const procurementOrder = await prisma.procurementOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcurementOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcurementOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcurementOrderClient<$Result.GetResult<Prisma.$ProcurementOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcurementOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementOrderFindFirstArgs} args - Arguments to find a ProcurementOrder
     * @example
     * // Get one ProcurementOrder
     * const procurementOrder = await prisma.procurementOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcurementOrderFindFirstArgs>(args?: SelectSubset<T, ProcurementOrderFindFirstArgs<ExtArgs>>): Prisma__ProcurementOrderClient<$Result.GetResult<Prisma.$ProcurementOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcurementOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementOrderFindFirstOrThrowArgs} args - Arguments to find a ProcurementOrder
     * @example
     * // Get one ProcurementOrder
     * const procurementOrder = await prisma.procurementOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcurementOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcurementOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcurementOrderClient<$Result.GetResult<Prisma.$ProcurementOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcurementOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcurementOrders
     * const procurementOrders = await prisma.procurementOrder.findMany()
     * 
     * // Get first 10 ProcurementOrders
     * const procurementOrders = await prisma.procurementOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const procurementOrderWithIdOnly = await prisma.procurementOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcurementOrderFindManyArgs>(args?: SelectSubset<T, ProcurementOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcurementOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcurementOrder.
     * @param {ProcurementOrderCreateArgs} args - Arguments to create a ProcurementOrder.
     * @example
     * // Create one ProcurementOrder
     * const ProcurementOrder = await prisma.procurementOrder.create({
     *   data: {
     *     // ... data to create a ProcurementOrder
     *   }
     * })
     * 
     */
    create<T extends ProcurementOrderCreateArgs>(args: SelectSubset<T, ProcurementOrderCreateArgs<ExtArgs>>): Prisma__ProcurementOrderClient<$Result.GetResult<Prisma.$ProcurementOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcurementOrders.
     * @param {ProcurementOrderCreateManyArgs} args - Arguments to create many ProcurementOrders.
     * @example
     * // Create many ProcurementOrders
     * const procurementOrder = await prisma.procurementOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcurementOrderCreateManyArgs>(args?: SelectSubset<T, ProcurementOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProcurementOrders and returns the data saved in the database.
     * @param {ProcurementOrderCreateManyAndReturnArgs} args - Arguments to create many ProcurementOrders.
     * @example
     * // Create many ProcurementOrders
     * const procurementOrder = await prisma.procurementOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProcurementOrders and only return the `id`
     * const procurementOrderWithIdOnly = await prisma.procurementOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcurementOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcurementOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcurementOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProcurementOrder.
     * @param {ProcurementOrderDeleteArgs} args - Arguments to delete one ProcurementOrder.
     * @example
     * // Delete one ProcurementOrder
     * const ProcurementOrder = await prisma.procurementOrder.delete({
     *   where: {
     *     // ... filter to delete one ProcurementOrder
     *   }
     * })
     * 
     */
    delete<T extends ProcurementOrderDeleteArgs>(args: SelectSubset<T, ProcurementOrderDeleteArgs<ExtArgs>>): Prisma__ProcurementOrderClient<$Result.GetResult<Prisma.$ProcurementOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcurementOrder.
     * @param {ProcurementOrderUpdateArgs} args - Arguments to update one ProcurementOrder.
     * @example
     * // Update one ProcurementOrder
     * const procurementOrder = await prisma.procurementOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcurementOrderUpdateArgs>(args: SelectSubset<T, ProcurementOrderUpdateArgs<ExtArgs>>): Prisma__ProcurementOrderClient<$Result.GetResult<Prisma.$ProcurementOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcurementOrders.
     * @param {ProcurementOrderDeleteManyArgs} args - Arguments to filter ProcurementOrders to delete.
     * @example
     * // Delete a few ProcurementOrders
     * const { count } = await prisma.procurementOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcurementOrderDeleteManyArgs>(args?: SelectSubset<T, ProcurementOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcurementOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcurementOrders
     * const procurementOrder = await prisma.procurementOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcurementOrderUpdateManyArgs>(args: SelectSubset<T, ProcurementOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcurementOrders and returns the data updated in the database.
     * @param {ProcurementOrderUpdateManyAndReturnArgs} args - Arguments to update many ProcurementOrders.
     * @example
     * // Update many ProcurementOrders
     * const procurementOrder = await prisma.procurementOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProcurementOrders and only return the `id`
     * const procurementOrderWithIdOnly = await prisma.procurementOrder.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcurementOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcurementOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcurementOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProcurementOrder.
     * @param {ProcurementOrderUpsertArgs} args - Arguments to update or create a ProcurementOrder.
     * @example
     * // Update or create a ProcurementOrder
     * const procurementOrder = await prisma.procurementOrder.upsert({
     *   create: {
     *     // ... data to create a ProcurementOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcurementOrder we want to update
     *   }
     * })
     */
    upsert<T extends ProcurementOrderUpsertArgs>(args: SelectSubset<T, ProcurementOrderUpsertArgs<ExtArgs>>): Prisma__ProcurementOrderClient<$Result.GetResult<Prisma.$ProcurementOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcurementOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementOrderCountArgs} args - Arguments to filter ProcurementOrders to count.
     * @example
     * // Count the number of ProcurementOrders
     * const count = await prisma.procurementOrder.count({
     *   where: {
     *     // ... the filter for the ProcurementOrders we want to count
     *   }
     * })
    **/
    count<T extends ProcurementOrderCountArgs>(
      args?: Subset<T, ProcurementOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcurementOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcurementOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcurementOrderAggregateArgs>(args: Subset<T, ProcurementOrderAggregateArgs>): Prisma.PrismaPromise<GetProcurementOrderAggregateType<T>>

    /**
     * Group by ProcurementOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementOrderGroupByArgs} args - Group by arguments.
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
      T extends ProcurementOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcurementOrderGroupByArgs['orderBy'] }
        : { orderBy?: ProcurementOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProcurementOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcurementOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcurementOrder model
   */
  readonly fields: ProcurementOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcurementOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcurementOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    costBreakdown<T extends ProcurementOrder$costBreakdownArgs<ExtArgs> = {}>(args?: Subset<T, ProcurementOrder$costBreakdownArgs<ExtArgs>>): Prisma__CostBreakdownClient<$Result.GetResult<Prisma.$CostBreakdownPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends ProcurementOrder$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ProcurementOrder$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcurementOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProcurementOrder model
   */
  interface ProcurementOrderFieldRefs {
    readonly id: FieldRef<"ProcurementOrder", 'String'>
    readonly supplierId: FieldRef<"ProcurementOrder", 'String'>
    readonly reference: FieldRef<"ProcurementOrder", 'String'>
    readonly totalAmount: FieldRef<"ProcurementOrder", 'Float'>
    readonly status: FieldRef<"ProcurementOrder", 'String'>
    readonly orderedAt: FieldRef<"ProcurementOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProcurementOrder findUnique
   */
  export type ProcurementOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrder
     */
    select?: ProcurementOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrder
     */
    omit?: ProcurementOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProcurementOrder to fetch.
     */
    where: ProcurementOrderWhereUniqueInput
  }

  /**
   * ProcurementOrder findUniqueOrThrow
   */
  export type ProcurementOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrder
     */
    select?: ProcurementOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrder
     */
    omit?: ProcurementOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProcurementOrder to fetch.
     */
    where: ProcurementOrderWhereUniqueInput
  }

  /**
   * ProcurementOrder findFirst
   */
  export type ProcurementOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrder
     */
    select?: ProcurementOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrder
     */
    omit?: ProcurementOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProcurementOrder to fetch.
     */
    where?: ProcurementOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcurementOrders to fetch.
     */
    orderBy?: ProcurementOrderOrderByWithRelationInput | ProcurementOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcurementOrders.
     */
    cursor?: ProcurementOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcurementOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcurementOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcurementOrders.
     */
    distinct?: ProcurementOrderScalarFieldEnum | ProcurementOrderScalarFieldEnum[]
  }

  /**
   * ProcurementOrder findFirstOrThrow
   */
  export type ProcurementOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrder
     */
    select?: ProcurementOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrder
     */
    omit?: ProcurementOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProcurementOrder to fetch.
     */
    where?: ProcurementOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcurementOrders to fetch.
     */
    orderBy?: ProcurementOrderOrderByWithRelationInput | ProcurementOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcurementOrders.
     */
    cursor?: ProcurementOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcurementOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcurementOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcurementOrders.
     */
    distinct?: ProcurementOrderScalarFieldEnum | ProcurementOrderScalarFieldEnum[]
  }

  /**
   * ProcurementOrder findMany
   */
  export type ProcurementOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrder
     */
    select?: ProcurementOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrder
     */
    omit?: ProcurementOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProcurementOrders to fetch.
     */
    where?: ProcurementOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcurementOrders to fetch.
     */
    orderBy?: ProcurementOrderOrderByWithRelationInput | ProcurementOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcurementOrders.
     */
    cursor?: ProcurementOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcurementOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcurementOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcurementOrders.
     */
    distinct?: ProcurementOrderScalarFieldEnum | ProcurementOrderScalarFieldEnum[]
  }

  /**
   * ProcurementOrder create
   */
  export type ProcurementOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrder
     */
    select?: ProcurementOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrder
     */
    omit?: ProcurementOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ProcurementOrder.
     */
    data: XOR<ProcurementOrderCreateInput, ProcurementOrderUncheckedCreateInput>
  }

  /**
   * ProcurementOrder createMany
   */
  export type ProcurementOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcurementOrders.
     */
    data: ProcurementOrderCreateManyInput | ProcurementOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProcurementOrder createManyAndReturn
   */
  export type ProcurementOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrder
     */
    select?: ProcurementOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrder
     */
    omit?: ProcurementOrderOmit<ExtArgs> | null
    /**
     * The data used to create many ProcurementOrders.
     */
    data: ProcurementOrderCreateManyInput | ProcurementOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcurementOrder update
   */
  export type ProcurementOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrder
     */
    select?: ProcurementOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrder
     */
    omit?: ProcurementOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ProcurementOrder.
     */
    data: XOR<ProcurementOrderUpdateInput, ProcurementOrderUncheckedUpdateInput>
    /**
     * Choose, which ProcurementOrder to update.
     */
    where: ProcurementOrderWhereUniqueInput
  }

  /**
   * ProcurementOrder updateMany
   */
  export type ProcurementOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcurementOrders.
     */
    data: XOR<ProcurementOrderUpdateManyMutationInput, ProcurementOrderUncheckedUpdateManyInput>
    /**
     * Filter which ProcurementOrders to update
     */
    where?: ProcurementOrderWhereInput
    /**
     * Limit how many ProcurementOrders to update.
     */
    limit?: number
  }

  /**
   * ProcurementOrder updateManyAndReturn
   */
  export type ProcurementOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrder
     */
    select?: ProcurementOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrder
     */
    omit?: ProcurementOrderOmit<ExtArgs> | null
    /**
     * The data used to update ProcurementOrders.
     */
    data: XOR<ProcurementOrderUpdateManyMutationInput, ProcurementOrderUncheckedUpdateManyInput>
    /**
     * Filter which ProcurementOrders to update
     */
    where?: ProcurementOrderWhereInput
    /**
     * Limit how many ProcurementOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcurementOrder upsert
   */
  export type ProcurementOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrder
     */
    select?: ProcurementOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrder
     */
    omit?: ProcurementOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ProcurementOrder to update in case it exists.
     */
    where: ProcurementOrderWhereUniqueInput
    /**
     * In case the ProcurementOrder found by the `where` argument doesn't exist, create a new ProcurementOrder with this data.
     */
    create: XOR<ProcurementOrderCreateInput, ProcurementOrderUncheckedCreateInput>
    /**
     * In case the ProcurementOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcurementOrderUpdateInput, ProcurementOrderUncheckedUpdateInput>
  }

  /**
   * ProcurementOrder delete
   */
  export type ProcurementOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrder
     */
    select?: ProcurementOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrder
     */
    omit?: ProcurementOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderInclude<ExtArgs> | null
    /**
     * Filter which ProcurementOrder to delete.
     */
    where: ProcurementOrderWhereUniqueInput
  }

  /**
   * ProcurementOrder deleteMany
   */
  export type ProcurementOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcurementOrders to delete
     */
    where?: ProcurementOrderWhereInput
    /**
     * Limit how many ProcurementOrders to delete.
     */
    limit?: number
  }

  /**
   * ProcurementOrder.costBreakdown
   */
  export type ProcurementOrder$costBreakdownArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostBreakdown
     */
    select?: CostBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostBreakdown
     */
    omit?: CostBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostBreakdownInclude<ExtArgs> | null
    where?: CostBreakdownWhereInput
  }

  /**
   * ProcurementOrder.items
   */
  export type ProcurementOrder$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrderItem
     */
    select?: ProcurementOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrderItem
     */
    omit?: ProcurementOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderItemInclude<ExtArgs> | null
    where?: ProcurementOrderItemWhereInput
    orderBy?: ProcurementOrderItemOrderByWithRelationInput | ProcurementOrderItemOrderByWithRelationInput[]
    cursor?: ProcurementOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcurementOrderItemScalarFieldEnum | ProcurementOrderItemScalarFieldEnum[]
  }

  /**
   * ProcurementOrder without action
   */
  export type ProcurementOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrder
     */
    select?: ProcurementOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrder
     */
    omit?: ProcurementOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderInclude<ExtArgs> | null
  }


  /**
   * Model ProcurementOrderItem
   */

  export type AggregateProcurementOrderItem = {
    _count: ProcurementOrderItemCountAggregateOutputType | null
    _avg: ProcurementOrderItemAvgAggregateOutputType | null
    _sum: ProcurementOrderItemSumAggregateOutputType | null
    _min: ProcurementOrderItemMinAggregateOutputType | null
    _max: ProcurementOrderItemMaxAggregateOutputType | null
  }

  export type ProcurementOrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
  }

  export type ProcurementOrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
  }

  export type ProcurementOrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    product: string | null
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
  }

  export type ProcurementOrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    product: string | null
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
  }

  export type ProcurementOrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    product: number
    quantity: number
    unitPrice: number
    subtotal: number
    _all: number
  }


  export type ProcurementOrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type ProcurementOrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type ProcurementOrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    product?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type ProcurementOrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    product?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type ProcurementOrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    product?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    _all?: true
  }

  export type ProcurementOrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcurementOrderItem to aggregate.
     */
    where?: ProcurementOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcurementOrderItems to fetch.
     */
    orderBy?: ProcurementOrderItemOrderByWithRelationInput | ProcurementOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcurementOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcurementOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcurementOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcurementOrderItems
    **/
    _count?: true | ProcurementOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcurementOrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcurementOrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcurementOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcurementOrderItemMaxAggregateInputType
  }

  export type GetProcurementOrderItemAggregateType<T extends ProcurementOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateProcurementOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcurementOrderItem[P]>
      : GetScalarType<T[P], AggregateProcurementOrderItem[P]>
  }




  export type ProcurementOrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcurementOrderItemWhereInput
    orderBy?: ProcurementOrderItemOrderByWithAggregationInput | ProcurementOrderItemOrderByWithAggregationInput[]
    by: ProcurementOrderItemScalarFieldEnum[] | ProcurementOrderItemScalarFieldEnum
    having?: ProcurementOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcurementOrderItemCountAggregateInputType | true
    _avg?: ProcurementOrderItemAvgAggregateInputType
    _sum?: ProcurementOrderItemSumAggregateInputType
    _min?: ProcurementOrderItemMinAggregateInputType
    _max?: ProcurementOrderItemMaxAggregateInputType
  }

  export type ProcurementOrderItemGroupByOutputType = {
    id: string
    orderId: string
    product: string
    quantity: number
    unitPrice: number
    subtotal: number
    _count: ProcurementOrderItemCountAggregateOutputType | null
    _avg: ProcurementOrderItemAvgAggregateOutputType | null
    _sum: ProcurementOrderItemSumAggregateOutputType | null
    _min: ProcurementOrderItemMinAggregateOutputType | null
    _max: ProcurementOrderItemMaxAggregateOutputType | null
  }

  type GetProcurementOrderItemGroupByPayload<T extends ProcurementOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcurementOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcurementOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcurementOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], ProcurementOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type ProcurementOrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    product?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    order?: boolean | ProcurementOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procurementOrderItem"]>

  export type ProcurementOrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    product?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    order?: boolean | ProcurementOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procurementOrderItem"]>

  export type ProcurementOrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    product?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    order?: boolean | ProcurementOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procurementOrderItem"]>

  export type ProcurementOrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    product?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
  }

  export type ProcurementOrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "product" | "quantity" | "unitPrice" | "subtotal", ExtArgs["result"]["procurementOrderItem"]>
  export type ProcurementOrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ProcurementOrderDefaultArgs<ExtArgs>
  }
  export type ProcurementOrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ProcurementOrderDefaultArgs<ExtArgs>
  }
  export type ProcurementOrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ProcurementOrderDefaultArgs<ExtArgs>
  }

  export type $ProcurementOrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcurementOrderItem"
    objects: {
      order: Prisma.$ProcurementOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      product: string
      quantity: number
      unitPrice: number
      subtotal: number
    }, ExtArgs["result"]["procurementOrderItem"]>
    composites: {}
  }

  type ProcurementOrderItemGetPayload<S extends boolean | null | undefined | ProcurementOrderItemDefaultArgs> = $Result.GetResult<Prisma.$ProcurementOrderItemPayload, S>

  type ProcurementOrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcurementOrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcurementOrderItemCountAggregateInputType | true
    }

  export interface ProcurementOrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcurementOrderItem'], meta: { name: 'ProcurementOrderItem' } }
    /**
     * Find zero or one ProcurementOrderItem that matches the filter.
     * @param {ProcurementOrderItemFindUniqueArgs} args - Arguments to find a ProcurementOrderItem
     * @example
     * // Get one ProcurementOrderItem
     * const procurementOrderItem = await prisma.procurementOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcurementOrderItemFindUniqueArgs>(args: SelectSubset<T, ProcurementOrderItemFindUniqueArgs<ExtArgs>>): Prisma__ProcurementOrderItemClient<$Result.GetResult<Prisma.$ProcurementOrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcurementOrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcurementOrderItemFindUniqueOrThrowArgs} args - Arguments to find a ProcurementOrderItem
     * @example
     * // Get one ProcurementOrderItem
     * const procurementOrderItem = await prisma.procurementOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcurementOrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcurementOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcurementOrderItemClient<$Result.GetResult<Prisma.$ProcurementOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcurementOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementOrderItemFindFirstArgs} args - Arguments to find a ProcurementOrderItem
     * @example
     * // Get one ProcurementOrderItem
     * const procurementOrderItem = await prisma.procurementOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcurementOrderItemFindFirstArgs>(args?: SelectSubset<T, ProcurementOrderItemFindFirstArgs<ExtArgs>>): Prisma__ProcurementOrderItemClient<$Result.GetResult<Prisma.$ProcurementOrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcurementOrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementOrderItemFindFirstOrThrowArgs} args - Arguments to find a ProcurementOrderItem
     * @example
     * // Get one ProcurementOrderItem
     * const procurementOrderItem = await prisma.procurementOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcurementOrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcurementOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcurementOrderItemClient<$Result.GetResult<Prisma.$ProcurementOrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcurementOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementOrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcurementOrderItems
     * const procurementOrderItems = await prisma.procurementOrderItem.findMany()
     * 
     * // Get first 10 ProcurementOrderItems
     * const procurementOrderItems = await prisma.procurementOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const procurementOrderItemWithIdOnly = await prisma.procurementOrderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcurementOrderItemFindManyArgs>(args?: SelectSubset<T, ProcurementOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcurementOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcurementOrderItem.
     * @param {ProcurementOrderItemCreateArgs} args - Arguments to create a ProcurementOrderItem.
     * @example
     * // Create one ProcurementOrderItem
     * const ProcurementOrderItem = await prisma.procurementOrderItem.create({
     *   data: {
     *     // ... data to create a ProcurementOrderItem
     *   }
     * })
     * 
     */
    create<T extends ProcurementOrderItemCreateArgs>(args: SelectSubset<T, ProcurementOrderItemCreateArgs<ExtArgs>>): Prisma__ProcurementOrderItemClient<$Result.GetResult<Prisma.$ProcurementOrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcurementOrderItems.
     * @param {ProcurementOrderItemCreateManyArgs} args - Arguments to create many ProcurementOrderItems.
     * @example
     * // Create many ProcurementOrderItems
     * const procurementOrderItem = await prisma.procurementOrderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcurementOrderItemCreateManyArgs>(args?: SelectSubset<T, ProcurementOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProcurementOrderItems and returns the data saved in the database.
     * @param {ProcurementOrderItemCreateManyAndReturnArgs} args - Arguments to create many ProcurementOrderItems.
     * @example
     * // Create many ProcurementOrderItems
     * const procurementOrderItem = await prisma.procurementOrderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProcurementOrderItems and only return the `id`
     * const procurementOrderItemWithIdOnly = await prisma.procurementOrderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcurementOrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcurementOrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcurementOrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProcurementOrderItem.
     * @param {ProcurementOrderItemDeleteArgs} args - Arguments to delete one ProcurementOrderItem.
     * @example
     * // Delete one ProcurementOrderItem
     * const ProcurementOrderItem = await prisma.procurementOrderItem.delete({
     *   where: {
     *     // ... filter to delete one ProcurementOrderItem
     *   }
     * })
     * 
     */
    delete<T extends ProcurementOrderItemDeleteArgs>(args: SelectSubset<T, ProcurementOrderItemDeleteArgs<ExtArgs>>): Prisma__ProcurementOrderItemClient<$Result.GetResult<Prisma.$ProcurementOrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcurementOrderItem.
     * @param {ProcurementOrderItemUpdateArgs} args - Arguments to update one ProcurementOrderItem.
     * @example
     * // Update one ProcurementOrderItem
     * const procurementOrderItem = await prisma.procurementOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcurementOrderItemUpdateArgs>(args: SelectSubset<T, ProcurementOrderItemUpdateArgs<ExtArgs>>): Prisma__ProcurementOrderItemClient<$Result.GetResult<Prisma.$ProcurementOrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcurementOrderItems.
     * @param {ProcurementOrderItemDeleteManyArgs} args - Arguments to filter ProcurementOrderItems to delete.
     * @example
     * // Delete a few ProcurementOrderItems
     * const { count } = await prisma.procurementOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcurementOrderItemDeleteManyArgs>(args?: SelectSubset<T, ProcurementOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcurementOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcurementOrderItems
     * const procurementOrderItem = await prisma.procurementOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcurementOrderItemUpdateManyArgs>(args: SelectSubset<T, ProcurementOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcurementOrderItems and returns the data updated in the database.
     * @param {ProcurementOrderItemUpdateManyAndReturnArgs} args - Arguments to update many ProcurementOrderItems.
     * @example
     * // Update many ProcurementOrderItems
     * const procurementOrderItem = await prisma.procurementOrderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProcurementOrderItems and only return the `id`
     * const procurementOrderItemWithIdOnly = await prisma.procurementOrderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcurementOrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcurementOrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcurementOrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProcurementOrderItem.
     * @param {ProcurementOrderItemUpsertArgs} args - Arguments to update or create a ProcurementOrderItem.
     * @example
     * // Update or create a ProcurementOrderItem
     * const procurementOrderItem = await prisma.procurementOrderItem.upsert({
     *   create: {
     *     // ... data to create a ProcurementOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcurementOrderItem we want to update
     *   }
     * })
     */
    upsert<T extends ProcurementOrderItemUpsertArgs>(args: SelectSubset<T, ProcurementOrderItemUpsertArgs<ExtArgs>>): Prisma__ProcurementOrderItemClient<$Result.GetResult<Prisma.$ProcurementOrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcurementOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementOrderItemCountArgs} args - Arguments to filter ProcurementOrderItems to count.
     * @example
     * // Count the number of ProcurementOrderItems
     * const count = await prisma.procurementOrderItem.count({
     *   where: {
     *     // ... the filter for the ProcurementOrderItems we want to count
     *   }
     * })
    **/
    count<T extends ProcurementOrderItemCountArgs>(
      args?: Subset<T, ProcurementOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcurementOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcurementOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcurementOrderItemAggregateArgs>(args: Subset<T, ProcurementOrderItemAggregateArgs>): Prisma.PrismaPromise<GetProcurementOrderItemAggregateType<T>>

    /**
     * Group by ProcurementOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementOrderItemGroupByArgs} args - Group by arguments.
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
      T extends ProcurementOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcurementOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: ProcurementOrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProcurementOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcurementOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcurementOrderItem model
   */
  readonly fields: ProcurementOrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcurementOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcurementOrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends ProcurementOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcurementOrderDefaultArgs<ExtArgs>>): Prisma__ProcurementOrderClient<$Result.GetResult<Prisma.$ProcurementOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProcurementOrderItem model
   */
  interface ProcurementOrderItemFieldRefs {
    readonly id: FieldRef<"ProcurementOrderItem", 'String'>
    readonly orderId: FieldRef<"ProcurementOrderItem", 'String'>
    readonly product: FieldRef<"ProcurementOrderItem", 'String'>
    readonly quantity: FieldRef<"ProcurementOrderItem", 'Int'>
    readonly unitPrice: FieldRef<"ProcurementOrderItem", 'Float'>
    readonly subtotal: FieldRef<"ProcurementOrderItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ProcurementOrderItem findUnique
   */
  export type ProcurementOrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrderItem
     */
    select?: ProcurementOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrderItem
     */
    omit?: ProcurementOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which ProcurementOrderItem to fetch.
     */
    where: ProcurementOrderItemWhereUniqueInput
  }

  /**
   * ProcurementOrderItem findUniqueOrThrow
   */
  export type ProcurementOrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrderItem
     */
    select?: ProcurementOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrderItem
     */
    omit?: ProcurementOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which ProcurementOrderItem to fetch.
     */
    where: ProcurementOrderItemWhereUniqueInput
  }

  /**
   * ProcurementOrderItem findFirst
   */
  export type ProcurementOrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrderItem
     */
    select?: ProcurementOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrderItem
     */
    omit?: ProcurementOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which ProcurementOrderItem to fetch.
     */
    where?: ProcurementOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcurementOrderItems to fetch.
     */
    orderBy?: ProcurementOrderItemOrderByWithRelationInput | ProcurementOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcurementOrderItems.
     */
    cursor?: ProcurementOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcurementOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcurementOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcurementOrderItems.
     */
    distinct?: ProcurementOrderItemScalarFieldEnum | ProcurementOrderItemScalarFieldEnum[]
  }

  /**
   * ProcurementOrderItem findFirstOrThrow
   */
  export type ProcurementOrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrderItem
     */
    select?: ProcurementOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrderItem
     */
    omit?: ProcurementOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which ProcurementOrderItem to fetch.
     */
    where?: ProcurementOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcurementOrderItems to fetch.
     */
    orderBy?: ProcurementOrderItemOrderByWithRelationInput | ProcurementOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcurementOrderItems.
     */
    cursor?: ProcurementOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcurementOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcurementOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcurementOrderItems.
     */
    distinct?: ProcurementOrderItemScalarFieldEnum | ProcurementOrderItemScalarFieldEnum[]
  }

  /**
   * ProcurementOrderItem findMany
   */
  export type ProcurementOrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrderItem
     */
    select?: ProcurementOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrderItem
     */
    omit?: ProcurementOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which ProcurementOrderItems to fetch.
     */
    where?: ProcurementOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcurementOrderItems to fetch.
     */
    orderBy?: ProcurementOrderItemOrderByWithRelationInput | ProcurementOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcurementOrderItems.
     */
    cursor?: ProcurementOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcurementOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcurementOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcurementOrderItems.
     */
    distinct?: ProcurementOrderItemScalarFieldEnum | ProcurementOrderItemScalarFieldEnum[]
  }

  /**
   * ProcurementOrderItem create
   */
  export type ProcurementOrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrderItem
     */
    select?: ProcurementOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrderItem
     */
    omit?: ProcurementOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ProcurementOrderItem.
     */
    data: XOR<ProcurementOrderItemCreateInput, ProcurementOrderItemUncheckedCreateInput>
  }

  /**
   * ProcurementOrderItem createMany
   */
  export type ProcurementOrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcurementOrderItems.
     */
    data: ProcurementOrderItemCreateManyInput | ProcurementOrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProcurementOrderItem createManyAndReturn
   */
  export type ProcurementOrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrderItem
     */
    select?: ProcurementOrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrderItem
     */
    omit?: ProcurementOrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many ProcurementOrderItems.
     */
    data: ProcurementOrderItemCreateManyInput | ProcurementOrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcurementOrderItem update
   */
  export type ProcurementOrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrderItem
     */
    select?: ProcurementOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrderItem
     */
    omit?: ProcurementOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ProcurementOrderItem.
     */
    data: XOR<ProcurementOrderItemUpdateInput, ProcurementOrderItemUncheckedUpdateInput>
    /**
     * Choose, which ProcurementOrderItem to update.
     */
    where: ProcurementOrderItemWhereUniqueInput
  }

  /**
   * ProcurementOrderItem updateMany
   */
  export type ProcurementOrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcurementOrderItems.
     */
    data: XOR<ProcurementOrderItemUpdateManyMutationInput, ProcurementOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which ProcurementOrderItems to update
     */
    where?: ProcurementOrderItemWhereInput
    /**
     * Limit how many ProcurementOrderItems to update.
     */
    limit?: number
  }

  /**
   * ProcurementOrderItem updateManyAndReturn
   */
  export type ProcurementOrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrderItem
     */
    select?: ProcurementOrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrderItem
     */
    omit?: ProcurementOrderItemOmit<ExtArgs> | null
    /**
     * The data used to update ProcurementOrderItems.
     */
    data: XOR<ProcurementOrderItemUpdateManyMutationInput, ProcurementOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which ProcurementOrderItems to update
     */
    where?: ProcurementOrderItemWhereInput
    /**
     * Limit how many ProcurementOrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcurementOrderItem upsert
   */
  export type ProcurementOrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrderItem
     */
    select?: ProcurementOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrderItem
     */
    omit?: ProcurementOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ProcurementOrderItem to update in case it exists.
     */
    where: ProcurementOrderItemWhereUniqueInput
    /**
     * In case the ProcurementOrderItem found by the `where` argument doesn't exist, create a new ProcurementOrderItem with this data.
     */
    create: XOR<ProcurementOrderItemCreateInput, ProcurementOrderItemUncheckedCreateInput>
    /**
     * In case the ProcurementOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcurementOrderItemUpdateInput, ProcurementOrderItemUncheckedUpdateInput>
  }

  /**
   * ProcurementOrderItem delete
   */
  export type ProcurementOrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrderItem
     */
    select?: ProcurementOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrderItem
     */
    omit?: ProcurementOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderItemInclude<ExtArgs> | null
    /**
     * Filter which ProcurementOrderItem to delete.
     */
    where: ProcurementOrderItemWhereUniqueInput
  }

  /**
   * ProcurementOrderItem deleteMany
   */
  export type ProcurementOrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcurementOrderItems to delete
     */
    where?: ProcurementOrderItemWhereInput
    /**
     * Limit how many ProcurementOrderItems to delete.
     */
    limit?: number
  }

  /**
   * ProcurementOrderItem without action
   */
  export type ProcurementOrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrderItem
     */
    select?: ProcurementOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrderItem
     */
    omit?: ProcurementOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderItemInclude<ExtArgs> | null
  }


  /**
   * Model CostBreakdown
   */

  export type AggregateCostBreakdown = {
    _count: CostBreakdownCountAggregateOutputType | null
    _avg: CostBreakdownAvgAggregateOutputType | null
    _sum: CostBreakdownSumAggregateOutputType | null
    _min: CostBreakdownMinAggregateOutputType | null
    _max: CostBreakdownMaxAggregateOutputType | null
  }

  export type CostBreakdownAvgAggregateOutputType = {
    productCost: number | null
    transportation: number | null
    taxes: number | null
    storage: number | null
    inspection: number | null
    expectedDefect: number | null
    delay: number | null
    other: number | null
    total: number | null
  }

  export type CostBreakdownSumAggregateOutputType = {
    productCost: number | null
    transportation: number | null
    taxes: number | null
    storage: number | null
    inspection: number | null
    expectedDefect: number | null
    delay: number | null
    other: number | null
    total: number | null
  }

  export type CostBreakdownMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    workspaceId: string | null
    supplierId: string | null
    product: string | null
    productCost: number | null
    transportation: number | null
    taxes: number | null
    storage: number | null
    inspection: number | null
    expectedDefect: number | null
    delay: number | null
    other: number | null
    total: number | null
    createdAt: Date | null
  }

  export type CostBreakdownMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    workspaceId: string | null
    supplierId: string | null
    product: string | null
    productCost: number | null
    transportation: number | null
    taxes: number | null
    storage: number | null
    inspection: number | null
    expectedDefect: number | null
    delay: number | null
    other: number | null
    total: number | null
    createdAt: Date | null
  }

  export type CostBreakdownCountAggregateOutputType = {
    id: number
    orderId: number
    workspaceId: number
    supplierId: number
    product: number
    productCost: number
    transportation: number
    taxes: number
    storage: number
    inspection: number
    expectedDefect: number
    delay: number
    other: number
    total: number
    createdAt: number
    _all: number
  }


  export type CostBreakdownAvgAggregateInputType = {
    productCost?: true
    transportation?: true
    taxes?: true
    storage?: true
    inspection?: true
    expectedDefect?: true
    delay?: true
    other?: true
    total?: true
  }

  export type CostBreakdownSumAggregateInputType = {
    productCost?: true
    transportation?: true
    taxes?: true
    storage?: true
    inspection?: true
    expectedDefect?: true
    delay?: true
    other?: true
    total?: true
  }

  export type CostBreakdownMinAggregateInputType = {
    id?: true
    orderId?: true
    workspaceId?: true
    supplierId?: true
    product?: true
    productCost?: true
    transportation?: true
    taxes?: true
    storage?: true
    inspection?: true
    expectedDefect?: true
    delay?: true
    other?: true
    total?: true
    createdAt?: true
  }

  export type CostBreakdownMaxAggregateInputType = {
    id?: true
    orderId?: true
    workspaceId?: true
    supplierId?: true
    product?: true
    productCost?: true
    transportation?: true
    taxes?: true
    storage?: true
    inspection?: true
    expectedDefect?: true
    delay?: true
    other?: true
    total?: true
    createdAt?: true
  }

  export type CostBreakdownCountAggregateInputType = {
    id?: true
    orderId?: true
    workspaceId?: true
    supplierId?: true
    product?: true
    productCost?: true
    transportation?: true
    taxes?: true
    storage?: true
    inspection?: true
    expectedDefect?: true
    delay?: true
    other?: true
    total?: true
    createdAt?: true
    _all?: true
  }

  export type CostBreakdownAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CostBreakdown to aggregate.
     */
    where?: CostBreakdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CostBreakdowns to fetch.
     */
    orderBy?: CostBreakdownOrderByWithRelationInput | CostBreakdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CostBreakdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CostBreakdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CostBreakdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CostBreakdowns
    **/
    _count?: true | CostBreakdownCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CostBreakdownAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CostBreakdownSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CostBreakdownMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CostBreakdownMaxAggregateInputType
  }

  export type GetCostBreakdownAggregateType<T extends CostBreakdownAggregateArgs> = {
        [P in keyof T & keyof AggregateCostBreakdown]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCostBreakdown[P]>
      : GetScalarType<T[P], AggregateCostBreakdown[P]>
  }




  export type CostBreakdownGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CostBreakdownWhereInput
    orderBy?: CostBreakdownOrderByWithAggregationInput | CostBreakdownOrderByWithAggregationInput[]
    by: CostBreakdownScalarFieldEnum[] | CostBreakdownScalarFieldEnum
    having?: CostBreakdownScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CostBreakdownCountAggregateInputType | true
    _avg?: CostBreakdownAvgAggregateInputType
    _sum?: CostBreakdownSumAggregateInputType
    _min?: CostBreakdownMinAggregateInputType
    _max?: CostBreakdownMaxAggregateInputType
  }

  export type CostBreakdownGroupByOutputType = {
    id: string
    orderId: string | null
    workspaceId: string
    supplierId: string | null
    product: string | null
    productCost: number
    transportation: number
    taxes: number
    storage: number
    inspection: number
    expectedDefect: number
    delay: number
    other: number
    total: number
    createdAt: Date
    _count: CostBreakdownCountAggregateOutputType | null
    _avg: CostBreakdownAvgAggregateOutputType | null
    _sum: CostBreakdownSumAggregateOutputType | null
    _min: CostBreakdownMinAggregateOutputType | null
    _max: CostBreakdownMaxAggregateOutputType | null
  }

  type GetCostBreakdownGroupByPayload<T extends CostBreakdownGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CostBreakdownGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CostBreakdownGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CostBreakdownGroupByOutputType[P]>
            : GetScalarType<T[P], CostBreakdownGroupByOutputType[P]>
        }
      >
    >


  export type CostBreakdownSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    workspaceId?: boolean
    supplierId?: boolean
    product?: boolean
    productCost?: boolean
    transportation?: boolean
    taxes?: boolean
    storage?: boolean
    inspection?: boolean
    expectedDefect?: boolean
    delay?: boolean
    other?: boolean
    total?: boolean
    createdAt?: boolean
    order?: boolean | CostBreakdown$orderArgs<ExtArgs>
  }, ExtArgs["result"]["costBreakdown"]>

  export type CostBreakdownSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    workspaceId?: boolean
    supplierId?: boolean
    product?: boolean
    productCost?: boolean
    transportation?: boolean
    taxes?: boolean
    storage?: boolean
    inspection?: boolean
    expectedDefect?: boolean
    delay?: boolean
    other?: boolean
    total?: boolean
    createdAt?: boolean
    order?: boolean | CostBreakdown$orderArgs<ExtArgs>
  }, ExtArgs["result"]["costBreakdown"]>

  export type CostBreakdownSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    workspaceId?: boolean
    supplierId?: boolean
    product?: boolean
    productCost?: boolean
    transportation?: boolean
    taxes?: boolean
    storage?: boolean
    inspection?: boolean
    expectedDefect?: boolean
    delay?: boolean
    other?: boolean
    total?: boolean
    createdAt?: boolean
    order?: boolean | CostBreakdown$orderArgs<ExtArgs>
  }, ExtArgs["result"]["costBreakdown"]>

  export type CostBreakdownSelectScalar = {
    id?: boolean
    orderId?: boolean
    workspaceId?: boolean
    supplierId?: boolean
    product?: boolean
    productCost?: boolean
    transportation?: boolean
    taxes?: boolean
    storage?: boolean
    inspection?: boolean
    expectedDefect?: boolean
    delay?: boolean
    other?: boolean
    total?: boolean
    createdAt?: boolean
  }

  export type CostBreakdownOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "workspaceId" | "supplierId" | "product" | "productCost" | "transportation" | "taxes" | "storage" | "inspection" | "expectedDefect" | "delay" | "other" | "total" | "createdAt", ExtArgs["result"]["costBreakdown"]>
  export type CostBreakdownInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | CostBreakdown$orderArgs<ExtArgs>
  }
  export type CostBreakdownIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | CostBreakdown$orderArgs<ExtArgs>
  }
  export type CostBreakdownIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | CostBreakdown$orderArgs<ExtArgs>
  }

  export type $CostBreakdownPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CostBreakdown"
    objects: {
      order: Prisma.$ProcurementOrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string | null
      workspaceId: string
      supplierId: string | null
      product: string | null
      productCost: number
      transportation: number
      taxes: number
      storage: number
      inspection: number
      expectedDefect: number
      delay: number
      other: number
      total: number
      createdAt: Date
    }, ExtArgs["result"]["costBreakdown"]>
    composites: {}
  }

  type CostBreakdownGetPayload<S extends boolean | null | undefined | CostBreakdownDefaultArgs> = $Result.GetResult<Prisma.$CostBreakdownPayload, S>

  type CostBreakdownCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CostBreakdownFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CostBreakdownCountAggregateInputType | true
    }

  export interface CostBreakdownDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CostBreakdown'], meta: { name: 'CostBreakdown' } }
    /**
     * Find zero or one CostBreakdown that matches the filter.
     * @param {CostBreakdownFindUniqueArgs} args - Arguments to find a CostBreakdown
     * @example
     * // Get one CostBreakdown
     * const costBreakdown = await prisma.costBreakdown.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CostBreakdownFindUniqueArgs>(args: SelectSubset<T, CostBreakdownFindUniqueArgs<ExtArgs>>): Prisma__CostBreakdownClient<$Result.GetResult<Prisma.$CostBreakdownPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CostBreakdown that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CostBreakdownFindUniqueOrThrowArgs} args - Arguments to find a CostBreakdown
     * @example
     * // Get one CostBreakdown
     * const costBreakdown = await prisma.costBreakdown.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CostBreakdownFindUniqueOrThrowArgs>(args: SelectSubset<T, CostBreakdownFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CostBreakdownClient<$Result.GetResult<Prisma.$CostBreakdownPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CostBreakdown that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostBreakdownFindFirstArgs} args - Arguments to find a CostBreakdown
     * @example
     * // Get one CostBreakdown
     * const costBreakdown = await prisma.costBreakdown.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CostBreakdownFindFirstArgs>(args?: SelectSubset<T, CostBreakdownFindFirstArgs<ExtArgs>>): Prisma__CostBreakdownClient<$Result.GetResult<Prisma.$CostBreakdownPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CostBreakdown that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostBreakdownFindFirstOrThrowArgs} args - Arguments to find a CostBreakdown
     * @example
     * // Get one CostBreakdown
     * const costBreakdown = await prisma.costBreakdown.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CostBreakdownFindFirstOrThrowArgs>(args?: SelectSubset<T, CostBreakdownFindFirstOrThrowArgs<ExtArgs>>): Prisma__CostBreakdownClient<$Result.GetResult<Prisma.$CostBreakdownPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CostBreakdowns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostBreakdownFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CostBreakdowns
     * const costBreakdowns = await prisma.costBreakdown.findMany()
     * 
     * // Get first 10 CostBreakdowns
     * const costBreakdowns = await prisma.costBreakdown.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const costBreakdownWithIdOnly = await prisma.costBreakdown.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CostBreakdownFindManyArgs>(args?: SelectSubset<T, CostBreakdownFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostBreakdownPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CostBreakdown.
     * @param {CostBreakdownCreateArgs} args - Arguments to create a CostBreakdown.
     * @example
     * // Create one CostBreakdown
     * const CostBreakdown = await prisma.costBreakdown.create({
     *   data: {
     *     // ... data to create a CostBreakdown
     *   }
     * })
     * 
     */
    create<T extends CostBreakdownCreateArgs>(args: SelectSubset<T, CostBreakdownCreateArgs<ExtArgs>>): Prisma__CostBreakdownClient<$Result.GetResult<Prisma.$CostBreakdownPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CostBreakdowns.
     * @param {CostBreakdownCreateManyArgs} args - Arguments to create many CostBreakdowns.
     * @example
     * // Create many CostBreakdowns
     * const costBreakdown = await prisma.costBreakdown.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CostBreakdownCreateManyArgs>(args?: SelectSubset<T, CostBreakdownCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CostBreakdowns and returns the data saved in the database.
     * @param {CostBreakdownCreateManyAndReturnArgs} args - Arguments to create many CostBreakdowns.
     * @example
     * // Create many CostBreakdowns
     * const costBreakdown = await prisma.costBreakdown.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CostBreakdowns and only return the `id`
     * const costBreakdownWithIdOnly = await prisma.costBreakdown.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CostBreakdownCreateManyAndReturnArgs>(args?: SelectSubset<T, CostBreakdownCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostBreakdownPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CostBreakdown.
     * @param {CostBreakdownDeleteArgs} args - Arguments to delete one CostBreakdown.
     * @example
     * // Delete one CostBreakdown
     * const CostBreakdown = await prisma.costBreakdown.delete({
     *   where: {
     *     // ... filter to delete one CostBreakdown
     *   }
     * })
     * 
     */
    delete<T extends CostBreakdownDeleteArgs>(args: SelectSubset<T, CostBreakdownDeleteArgs<ExtArgs>>): Prisma__CostBreakdownClient<$Result.GetResult<Prisma.$CostBreakdownPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CostBreakdown.
     * @param {CostBreakdownUpdateArgs} args - Arguments to update one CostBreakdown.
     * @example
     * // Update one CostBreakdown
     * const costBreakdown = await prisma.costBreakdown.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CostBreakdownUpdateArgs>(args: SelectSubset<T, CostBreakdownUpdateArgs<ExtArgs>>): Prisma__CostBreakdownClient<$Result.GetResult<Prisma.$CostBreakdownPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CostBreakdowns.
     * @param {CostBreakdownDeleteManyArgs} args - Arguments to filter CostBreakdowns to delete.
     * @example
     * // Delete a few CostBreakdowns
     * const { count } = await prisma.costBreakdown.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CostBreakdownDeleteManyArgs>(args?: SelectSubset<T, CostBreakdownDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CostBreakdowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostBreakdownUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CostBreakdowns
     * const costBreakdown = await prisma.costBreakdown.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CostBreakdownUpdateManyArgs>(args: SelectSubset<T, CostBreakdownUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CostBreakdowns and returns the data updated in the database.
     * @param {CostBreakdownUpdateManyAndReturnArgs} args - Arguments to update many CostBreakdowns.
     * @example
     * // Update many CostBreakdowns
     * const costBreakdown = await prisma.costBreakdown.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CostBreakdowns and only return the `id`
     * const costBreakdownWithIdOnly = await prisma.costBreakdown.updateManyAndReturn({
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
    updateManyAndReturn<T extends CostBreakdownUpdateManyAndReturnArgs>(args: SelectSubset<T, CostBreakdownUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostBreakdownPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CostBreakdown.
     * @param {CostBreakdownUpsertArgs} args - Arguments to update or create a CostBreakdown.
     * @example
     * // Update or create a CostBreakdown
     * const costBreakdown = await prisma.costBreakdown.upsert({
     *   create: {
     *     // ... data to create a CostBreakdown
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CostBreakdown we want to update
     *   }
     * })
     */
    upsert<T extends CostBreakdownUpsertArgs>(args: SelectSubset<T, CostBreakdownUpsertArgs<ExtArgs>>): Prisma__CostBreakdownClient<$Result.GetResult<Prisma.$CostBreakdownPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CostBreakdowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostBreakdownCountArgs} args - Arguments to filter CostBreakdowns to count.
     * @example
     * // Count the number of CostBreakdowns
     * const count = await prisma.costBreakdown.count({
     *   where: {
     *     // ... the filter for the CostBreakdowns we want to count
     *   }
     * })
    **/
    count<T extends CostBreakdownCountArgs>(
      args?: Subset<T, CostBreakdownCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CostBreakdownCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CostBreakdown.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostBreakdownAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CostBreakdownAggregateArgs>(args: Subset<T, CostBreakdownAggregateArgs>): Prisma.PrismaPromise<GetCostBreakdownAggregateType<T>>

    /**
     * Group by CostBreakdown.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostBreakdownGroupByArgs} args - Group by arguments.
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
      T extends CostBreakdownGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CostBreakdownGroupByArgs['orderBy'] }
        : { orderBy?: CostBreakdownGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CostBreakdownGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCostBreakdownGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CostBreakdown model
   */
  readonly fields: CostBreakdownFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CostBreakdown.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CostBreakdownClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends CostBreakdown$orderArgs<ExtArgs> = {}>(args?: Subset<T, CostBreakdown$orderArgs<ExtArgs>>): Prisma__ProcurementOrderClient<$Result.GetResult<Prisma.$ProcurementOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CostBreakdown model
   */
  interface CostBreakdownFieldRefs {
    readonly id: FieldRef<"CostBreakdown", 'String'>
    readonly orderId: FieldRef<"CostBreakdown", 'String'>
    readonly workspaceId: FieldRef<"CostBreakdown", 'String'>
    readonly supplierId: FieldRef<"CostBreakdown", 'String'>
    readonly product: FieldRef<"CostBreakdown", 'String'>
    readonly productCost: FieldRef<"CostBreakdown", 'Float'>
    readonly transportation: FieldRef<"CostBreakdown", 'Float'>
    readonly taxes: FieldRef<"CostBreakdown", 'Float'>
    readonly storage: FieldRef<"CostBreakdown", 'Float'>
    readonly inspection: FieldRef<"CostBreakdown", 'Float'>
    readonly expectedDefect: FieldRef<"CostBreakdown", 'Float'>
    readonly delay: FieldRef<"CostBreakdown", 'Float'>
    readonly other: FieldRef<"CostBreakdown", 'Float'>
    readonly total: FieldRef<"CostBreakdown", 'Float'>
    readonly createdAt: FieldRef<"CostBreakdown", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CostBreakdown findUnique
   */
  export type CostBreakdownFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostBreakdown
     */
    select?: CostBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostBreakdown
     */
    omit?: CostBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostBreakdownInclude<ExtArgs> | null
    /**
     * Filter, which CostBreakdown to fetch.
     */
    where: CostBreakdownWhereUniqueInput
  }

  /**
   * CostBreakdown findUniqueOrThrow
   */
  export type CostBreakdownFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostBreakdown
     */
    select?: CostBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostBreakdown
     */
    omit?: CostBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostBreakdownInclude<ExtArgs> | null
    /**
     * Filter, which CostBreakdown to fetch.
     */
    where: CostBreakdownWhereUniqueInput
  }

  /**
   * CostBreakdown findFirst
   */
  export type CostBreakdownFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostBreakdown
     */
    select?: CostBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostBreakdown
     */
    omit?: CostBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostBreakdownInclude<ExtArgs> | null
    /**
     * Filter, which CostBreakdown to fetch.
     */
    where?: CostBreakdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CostBreakdowns to fetch.
     */
    orderBy?: CostBreakdownOrderByWithRelationInput | CostBreakdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CostBreakdowns.
     */
    cursor?: CostBreakdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CostBreakdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CostBreakdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CostBreakdowns.
     */
    distinct?: CostBreakdownScalarFieldEnum | CostBreakdownScalarFieldEnum[]
  }

  /**
   * CostBreakdown findFirstOrThrow
   */
  export type CostBreakdownFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostBreakdown
     */
    select?: CostBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostBreakdown
     */
    omit?: CostBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostBreakdownInclude<ExtArgs> | null
    /**
     * Filter, which CostBreakdown to fetch.
     */
    where?: CostBreakdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CostBreakdowns to fetch.
     */
    orderBy?: CostBreakdownOrderByWithRelationInput | CostBreakdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CostBreakdowns.
     */
    cursor?: CostBreakdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CostBreakdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CostBreakdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CostBreakdowns.
     */
    distinct?: CostBreakdownScalarFieldEnum | CostBreakdownScalarFieldEnum[]
  }

  /**
   * CostBreakdown findMany
   */
  export type CostBreakdownFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostBreakdown
     */
    select?: CostBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostBreakdown
     */
    omit?: CostBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostBreakdownInclude<ExtArgs> | null
    /**
     * Filter, which CostBreakdowns to fetch.
     */
    where?: CostBreakdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CostBreakdowns to fetch.
     */
    orderBy?: CostBreakdownOrderByWithRelationInput | CostBreakdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CostBreakdowns.
     */
    cursor?: CostBreakdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CostBreakdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CostBreakdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CostBreakdowns.
     */
    distinct?: CostBreakdownScalarFieldEnum | CostBreakdownScalarFieldEnum[]
  }

  /**
   * CostBreakdown create
   */
  export type CostBreakdownCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostBreakdown
     */
    select?: CostBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostBreakdown
     */
    omit?: CostBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostBreakdownInclude<ExtArgs> | null
    /**
     * The data needed to create a CostBreakdown.
     */
    data: XOR<CostBreakdownCreateInput, CostBreakdownUncheckedCreateInput>
  }

  /**
   * CostBreakdown createMany
   */
  export type CostBreakdownCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CostBreakdowns.
     */
    data: CostBreakdownCreateManyInput | CostBreakdownCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CostBreakdown createManyAndReturn
   */
  export type CostBreakdownCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostBreakdown
     */
    select?: CostBreakdownSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CostBreakdown
     */
    omit?: CostBreakdownOmit<ExtArgs> | null
    /**
     * The data used to create many CostBreakdowns.
     */
    data: CostBreakdownCreateManyInput | CostBreakdownCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostBreakdownIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CostBreakdown update
   */
  export type CostBreakdownUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostBreakdown
     */
    select?: CostBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostBreakdown
     */
    omit?: CostBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostBreakdownInclude<ExtArgs> | null
    /**
     * The data needed to update a CostBreakdown.
     */
    data: XOR<CostBreakdownUpdateInput, CostBreakdownUncheckedUpdateInput>
    /**
     * Choose, which CostBreakdown to update.
     */
    where: CostBreakdownWhereUniqueInput
  }

  /**
   * CostBreakdown updateMany
   */
  export type CostBreakdownUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CostBreakdowns.
     */
    data: XOR<CostBreakdownUpdateManyMutationInput, CostBreakdownUncheckedUpdateManyInput>
    /**
     * Filter which CostBreakdowns to update
     */
    where?: CostBreakdownWhereInput
    /**
     * Limit how many CostBreakdowns to update.
     */
    limit?: number
  }

  /**
   * CostBreakdown updateManyAndReturn
   */
  export type CostBreakdownUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostBreakdown
     */
    select?: CostBreakdownSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CostBreakdown
     */
    omit?: CostBreakdownOmit<ExtArgs> | null
    /**
     * The data used to update CostBreakdowns.
     */
    data: XOR<CostBreakdownUpdateManyMutationInput, CostBreakdownUncheckedUpdateManyInput>
    /**
     * Filter which CostBreakdowns to update
     */
    where?: CostBreakdownWhereInput
    /**
     * Limit how many CostBreakdowns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostBreakdownIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CostBreakdown upsert
   */
  export type CostBreakdownUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostBreakdown
     */
    select?: CostBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostBreakdown
     */
    omit?: CostBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostBreakdownInclude<ExtArgs> | null
    /**
     * The filter to search for the CostBreakdown to update in case it exists.
     */
    where: CostBreakdownWhereUniqueInput
    /**
     * In case the CostBreakdown found by the `where` argument doesn't exist, create a new CostBreakdown with this data.
     */
    create: XOR<CostBreakdownCreateInput, CostBreakdownUncheckedCreateInput>
    /**
     * In case the CostBreakdown was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CostBreakdownUpdateInput, CostBreakdownUncheckedUpdateInput>
  }

  /**
   * CostBreakdown delete
   */
  export type CostBreakdownDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostBreakdown
     */
    select?: CostBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostBreakdown
     */
    omit?: CostBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostBreakdownInclude<ExtArgs> | null
    /**
     * Filter which CostBreakdown to delete.
     */
    where: CostBreakdownWhereUniqueInput
  }

  /**
   * CostBreakdown deleteMany
   */
  export type CostBreakdownDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CostBreakdowns to delete
     */
    where?: CostBreakdownWhereInput
    /**
     * Limit how many CostBreakdowns to delete.
     */
    limit?: number
  }

  /**
   * CostBreakdown.order
   */
  export type CostBreakdown$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementOrder
     */
    select?: ProcurementOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcurementOrder
     */
    omit?: ProcurementOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementOrderInclude<ExtArgs> | null
    where?: ProcurementOrderWhereInput
  }

  /**
   * CostBreakdown without action
   */
  export type CostBreakdownDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostBreakdown
     */
    select?: CostBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostBreakdown
     */
    omit?: CostBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostBreakdownInclude<ExtArgs> | null
  }


  /**
   * Model AIRecommendation
   */

  export type AggregateAIRecommendation = {
    _count: AIRecommendationCountAggregateOutputType | null
    _min: AIRecommendationMinAggregateOutputType | null
    _max: AIRecommendationMaxAggregateOutputType | null
  }

  export type AIRecommendationMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    supplierId: string | null
    prompt: string | null
    response: string | null
    createdAt: Date | null
  }

  export type AIRecommendationMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    supplierId: string | null
    prompt: string | null
    response: string | null
    createdAt: Date | null
  }

  export type AIRecommendationCountAggregateOutputType = {
    id: number
    workspaceId: number
    supplierId: number
    prompt: number
    response: number
    createdAt: number
    _all: number
  }


  export type AIRecommendationMinAggregateInputType = {
    id?: true
    workspaceId?: true
    supplierId?: true
    prompt?: true
    response?: true
    createdAt?: true
  }

  export type AIRecommendationMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    supplierId?: true
    prompt?: true
    response?: true
    createdAt?: true
  }

  export type AIRecommendationCountAggregateInputType = {
    id?: true
    workspaceId?: true
    supplierId?: true
    prompt?: true
    response?: true
    createdAt?: true
    _all?: true
  }

  export type AIRecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIRecommendation to aggregate.
     */
    where?: AIRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIRecommendations to fetch.
     */
    orderBy?: AIRecommendationOrderByWithRelationInput | AIRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIRecommendations
    **/
    _count?: true | AIRecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIRecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIRecommendationMaxAggregateInputType
  }

  export type GetAIRecommendationAggregateType<T extends AIRecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateAIRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIRecommendation[P]>
      : GetScalarType<T[P], AggregateAIRecommendation[P]>
  }




  export type AIRecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIRecommendationWhereInput
    orderBy?: AIRecommendationOrderByWithAggregationInput | AIRecommendationOrderByWithAggregationInput[]
    by: AIRecommendationScalarFieldEnum[] | AIRecommendationScalarFieldEnum
    having?: AIRecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIRecommendationCountAggregateInputType | true
    _min?: AIRecommendationMinAggregateInputType
    _max?: AIRecommendationMaxAggregateInputType
  }

  export type AIRecommendationGroupByOutputType = {
    id: string
    workspaceId: string
    supplierId: string | null
    prompt: string
    response: string
    createdAt: Date
    _count: AIRecommendationCountAggregateOutputType | null
    _min: AIRecommendationMinAggregateOutputType | null
    _max: AIRecommendationMaxAggregateOutputType | null
  }

  type GetAIRecommendationGroupByPayload<T extends AIRecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIRecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIRecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIRecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], AIRecommendationGroupByOutputType[P]>
        }
      >
    >


  export type AIRecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    supplierId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aIRecommendation"]>

  export type AIRecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    supplierId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aIRecommendation"]>

  export type AIRecommendationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    supplierId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aIRecommendation"]>

  export type AIRecommendationSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    supplierId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
  }

  export type AIRecommendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "supplierId" | "prompt" | "response" | "createdAt", ExtArgs["result"]["aIRecommendation"]>

  export type $AIRecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIRecommendation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      supplierId: string | null
      prompt: string
      response: string
      createdAt: Date
    }, ExtArgs["result"]["aIRecommendation"]>
    composites: {}
  }

  type AIRecommendationGetPayload<S extends boolean | null | undefined | AIRecommendationDefaultArgs> = $Result.GetResult<Prisma.$AIRecommendationPayload, S>

  type AIRecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIRecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIRecommendationCountAggregateInputType | true
    }

  export interface AIRecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIRecommendation'], meta: { name: 'AIRecommendation' } }
    /**
     * Find zero or one AIRecommendation that matches the filter.
     * @param {AIRecommendationFindUniqueArgs} args - Arguments to find a AIRecommendation
     * @example
     * // Get one AIRecommendation
     * const aIRecommendation = await prisma.aIRecommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIRecommendationFindUniqueArgs>(args: SelectSubset<T, AIRecommendationFindUniqueArgs<ExtArgs>>): Prisma__AIRecommendationClient<$Result.GetResult<Prisma.$AIRecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIRecommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIRecommendationFindUniqueOrThrowArgs} args - Arguments to find a AIRecommendation
     * @example
     * // Get one AIRecommendation
     * const aIRecommendation = await prisma.aIRecommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIRecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, AIRecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIRecommendationClient<$Result.GetResult<Prisma.$AIRecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIRecommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRecommendationFindFirstArgs} args - Arguments to find a AIRecommendation
     * @example
     * // Get one AIRecommendation
     * const aIRecommendation = await prisma.aIRecommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIRecommendationFindFirstArgs>(args?: SelectSubset<T, AIRecommendationFindFirstArgs<ExtArgs>>): Prisma__AIRecommendationClient<$Result.GetResult<Prisma.$AIRecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIRecommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRecommendationFindFirstOrThrowArgs} args - Arguments to find a AIRecommendation
     * @example
     * // Get one AIRecommendation
     * const aIRecommendation = await prisma.aIRecommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIRecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, AIRecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIRecommendationClient<$Result.GetResult<Prisma.$AIRecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIRecommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIRecommendations
     * const aIRecommendations = await prisma.aIRecommendation.findMany()
     * 
     * // Get first 10 AIRecommendations
     * const aIRecommendations = await prisma.aIRecommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIRecommendationWithIdOnly = await prisma.aIRecommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIRecommendationFindManyArgs>(args?: SelectSubset<T, AIRecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIRecommendation.
     * @param {AIRecommendationCreateArgs} args - Arguments to create a AIRecommendation.
     * @example
     * // Create one AIRecommendation
     * const AIRecommendation = await prisma.aIRecommendation.create({
     *   data: {
     *     // ... data to create a AIRecommendation
     *   }
     * })
     * 
     */
    create<T extends AIRecommendationCreateArgs>(args: SelectSubset<T, AIRecommendationCreateArgs<ExtArgs>>): Prisma__AIRecommendationClient<$Result.GetResult<Prisma.$AIRecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIRecommendations.
     * @param {AIRecommendationCreateManyArgs} args - Arguments to create many AIRecommendations.
     * @example
     * // Create many AIRecommendations
     * const aIRecommendation = await prisma.aIRecommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIRecommendationCreateManyArgs>(args?: SelectSubset<T, AIRecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIRecommendations and returns the data saved in the database.
     * @param {AIRecommendationCreateManyAndReturnArgs} args - Arguments to create many AIRecommendations.
     * @example
     * // Create many AIRecommendations
     * const aIRecommendation = await prisma.aIRecommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIRecommendations and only return the `id`
     * const aIRecommendationWithIdOnly = await prisma.aIRecommendation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIRecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, AIRecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIRecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIRecommendation.
     * @param {AIRecommendationDeleteArgs} args - Arguments to delete one AIRecommendation.
     * @example
     * // Delete one AIRecommendation
     * const AIRecommendation = await prisma.aIRecommendation.delete({
     *   where: {
     *     // ... filter to delete one AIRecommendation
     *   }
     * })
     * 
     */
    delete<T extends AIRecommendationDeleteArgs>(args: SelectSubset<T, AIRecommendationDeleteArgs<ExtArgs>>): Prisma__AIRecommendationClient<$Result.GetResult<Prisma.$AIRecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIRecommendation.
     * @param {AIRecommendationUpdateArgs} args - Arguments to update one AIRecommendation.
     * @example
     * // Update one AIRecommendation
     * const aIRecommendation = await prisma.aIRecommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIRecommendationUpdateArgs>(args: SelectSubset<T, AIRecommendationUpdateArgs<ExtArgs>>): Prisma__AIRecommendationClient<$Result.GetResult<Prisma.$AIRecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIRecommendations.
     * @param {AIRecommendationDeleteManyArgs} args - Arguments to filter AIRecommendations to delete.
     * @example
     * // Delete a few AIRecommendations
     * const { count } = await prisma.aIRecommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIRecommendationDeleteManyArgs>(args?: SelectSubset<T, AIRecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIRecommendations
     * const aIRecommendation = await prisma.aIRecommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIRecommendationUpdateManyArgs>(args: SelectSubset<T, AIRecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIRecommendations and returns the data updated in the database.
     * @param {AIRecommendationUpdateManyAndReturnArgs} args - Arguments to update many AIRecommendations.
     * @example
     * // Update many AIRecommendations
     * const aIRecommendation = await prisma.aIRecommendation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIRecommendations and only return the `id`
     * const aIRecommendationWithIdOnly = await prisma.aIRecommendation.updateManyAndReturn({
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
    updateManyAndReturn<T extends AIRecommendationUpdateManyAndReturnArgs>(args: SelectSubset<T, AIRecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIRecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIRecommendation.
     * @param {AIRecommendationUpsertArgs} args - Arguments to update or create a AIRecommendation.
     * @example
     * // Update or create a AIRecommendation
     * const aIRecommendation = await prisma.aIRecommendation.upsert({
     *   create: {
     *     // ... data to create a AIRecommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIRecommendation we want to update
     *   }
     * })
     */
    upsert<T extends AIRecommendationUpsertArgs>(args: SelectSubset<T, AIRecommendationUpsertArgs<ExtArgs>>): Prisma__AIRecommendationClient<$Result.GetResult<Prisma.$AIRecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRecommendationCountArgs} args - Arguments to filter AIRecommendations to count.
     * @example
     * // Count the number of AIRecommendations
     * const count = await prisma.aIRecommendation.count({
     *   where: {
     *     // ... the filter for the AIRecommendations we want to count
     *   }
     * })
    **/
    count<T extends AIRecommendationCountArgs>(
      args?: Subset<T, AIRecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIRecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIRecommendationAggregateArgs>(args: Subset<T, AIRecommendationAggregateArgs>): Prisma.PrismaPromise<GetAIRecommendationAggregateType<T>>

    /**
     * Group by AIRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRecommendationGroupByArgs} args - Group by arguments.
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
      T extends AIRecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIRecommendationGroupByArgs['orderBy'] }
        : { orderBy?: AIRecommendationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AIRecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIRecommendation model
   */
  readonly fields: AIRecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIRecommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIRecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AIRecommendation model
   */
  interface AIRecommendationFieldRefs {
    readonly id: FieldRef<"AIRecommendation", 'String'>
    readonly workspaceId: FieldRef<"AIRecommendation", 'String'>
    readonly supplierId: FieldRef<"AIRecommendation", 'String'>
    readonly prompt: FieldRef<"AIRecommendation", 'String'>
    readonly response: FieldRef<"AIRecommendation", 'String'>
    readonly createdAt: FieldRef<"AIRecommendation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIRecommendation findUnique
   */
  export type AIRecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRecommendation
     */
    select?: AIRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRecommendation
     */
    omit?: AIRecommendationOmit<ExtArgs> | null
    /**
     * Filter, which AIRecommendation to fetch.
     */
    where: AIRecommendationWhereUniqueInput
  }

  /**
   * AIRecommendation findUniqueOrThrow
   */
  export type AIRecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRecommendation
     */
    select?: AIRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRecommendation
     */
    omit?: AIRecommendationOmit<ExtArgs> | null
    /**
     * Filter, which AIRecommendation to fetch.
     */
    where: AIRecommendationWhereUniqueInput
  }

  /**
   * AIRecommendation findFirst
   */
  export type AIRecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRecommendation
     */
    select?: AIRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRecommendation
     */
    omit?: AIRecommendationOmit<ExtArgs> | null
    /**
     * Filter, which AIRecommendation to fetch.
     */
    where?: AIRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIRecommendations to fetch.
     */
    orderBy?: AIRecommendationOrderByWithRelationInput | AIRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIRecommendations.
     */
    cursor?: AIRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIRecommendations.
     */
    distinct?: AIRecommendationScalarFieldEnum | AIRecommendationScalarFieldEnum[]
  }

  /**
   * AIRecommendation findFirstOrThrow
   */
  export type AIRecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRecommendation
     */
    select?: AIRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRecommendation
     */
    omit?: AIRecommendationOmit<ExtArgs> | null
    /**
     * Filter, which AIRecommendation to fetch.
     */
    where?: AIRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIRecommendations to fetch.
     */
    orderBy?: AIRecommendationOrderByWithRelationInput | AIRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIRecommendations.
     */
    cursor?: AIRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIRecommendations.
     */
    distinct?: AIRecommendationScalarFieldEnum | AIRecommendationScalarFieldEnum[]
  }

  /**
   * AIRecommendation findMany
   */
  export type AIRecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRecommendation
     */
    select?: AIRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRecommendation
     */
    omit?: AIRecommendationOmit<ExtArgs> | null
    /**
     * Filter, which AIRecommendations to fetch.
     */
    where?: AIRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIRecommendations to fetch.
     */
    orderBy?: AIRecommendationOrderByWithRelationInput | AIRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIRecommendations.
     */
    cursor?: AIRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIRecommendations.
     */
    distinct?: AIRecommendationScalarFieldEnum | AIRecommendationScalarFieldEnum[]
  }

  /**
   * AIRecommendation create
   */
  export type AIRecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRecommendation
     */
    select?: AIRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRecommendation
     */
    omit?: AIRecommendationOmit<ExtArgs> | null
    /**
     * The data needed to create a AIRecommendation.
     */
    data: XOR<AIRecommendationCreateInput, AIRecommendationUncheckedCreateInput>
  }

  /**
   * AIRecommendation createMany
   */
  export type AIRecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIRecommendations.
     */
    data: AIRecommendationCreateManyInput | AIRecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIRecommendation createManyAndReturn
   */
  export type AIRecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRecommendation
     */
    select?: AIRecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIRecommendation
     */
    omit?: AIRecommendationOmit<ExtArgs> | null
    /**
     * The data used to create many AIRecommendations.
     */
    data: AIRecommendationCreateManyInput | AIRecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIRecommendation update
   */
  export type AIRecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRecommendation
     */
    select?: AIRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRecommendation
     */
    omit?: AIRecommendationOmit<ExtArgs> | null
    /**
     * The data needed to update a AIRecommendation.
     */
    data: XOR<AIRecommendationUpdateInput, AIRecommendationUncheckedUpdateInput>
    /**
     * Choose, which AIRecommendation to update.
     */
    where: AIRecommendationWhereUniqueInput
  }

  /**
   * AIRecommendation updateMany
   */
  export type AIRecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIRecommendations.
     */
    data: XOR<AIRecommendationUpdateManyMutationInput, AIRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which AIRecommendations to update
     */
    where?: AIRecommendationWhereInput
    /**
     * Limit how many AIRecommendations to update.
     */
    limit?: number
  }

  /**
   * AIRecommendation updateManyAndReturn
   */
  export type AIRecommendationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRecommendation
     */
    select?: AIRecommendationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIRecommendation
     */
    omit?: AIRecommendationOmit<ExtArgs> | null
    /**
     * The data used to update AIRecommendations.
     */
    data: XOR<AIRecommendationUpdateManyMutationInput, AIRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which AIRecommendations to update
     */
    where?: AIRecommendationWhereInput
    /**
     * Limit how many AIRecommendations to update.
     */
    limit?: number
  }

  /**
   * AIRecommendation upsert
   */
  export type AIRecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRecommendation
     */
    select?: AIRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRecommendation
     */
    omit?: AIRecommendationOmit<ExtArgs> | null
    /**
     * The filter to search for the AIRecommendation to update in case it exists.
     */
    where: AIRecommendationWhereUniqueInput
    /**
     * In case the AIRecommendation found by the `where` argument doesn't exist, create a new AIRecommendation with this data.
     */
    create: XOR<AIRecommendationCreateInput, AIRecommendationUncheckedCreateInput>
    /**
     * In case the AIRecommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIRecommendationUpdateInput, AIRecommendationUncheckedUpdateInput>
  }

  /**
   * AIRecommendation delete
   */
  export type AIRecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRecommendation
     */
    select?: AIRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRecommendation
     */
    omit?: AIRecommendationOmit<ExtArgs> | null
    /**
     * Filter which AIRecommendation to delete.
     */
    where: AIRecommendationWhereUniqueInput
  }

  /**
   * AIRecommendation deleteMany
   */
  export type AIRecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIRecommendations to delete
     */
    where?: AIRecommendationWhereInput
    /**
     * Limit how many AIRecommendations to delete.
     */
    limit?: number
  }

  /**
   * AIRecommendation without action
   */
  export type AIRecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRecommendation
     */
    select?: AIRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRecommendation
     */
    omit?: AIRecommendationOmit<ExtArgs> | null
  }


  /**
   * Model RiskAssessment
   */

  export type AggregateRiskAssessment = {
    _count: RiskAssessmentCountAggregateOutputType | null
    _avg: RiskAssessmentAvgAggregateOutputType | null
    _sum: RiskAssessmentSumAggregateOutputType | null
    _min: RiskAssessmentMinAggregateOutputType | null
    _max: RiskAssessmentMaxAggregateOutputType | null
  }

  export type RiskAssessmentAvgAggregateOutputType = {
    score: number | null
  }

  export type RiskAssessmentSumAggregateOutputType = {
    score: number | null
  }

  export type RiskAssessmentMinAggregateOutputType = {
    id: string | null
    supplierId: string | null
    score: number | null
    classification: $Enums.RiskLevel | null
    explanation: string | null
    indicators: string | null
    simulated: boolean | null
    createdAt: Date | null
  }

  export type RiskAssessmentMaxAggregateOutputType = {
    id: string | null
    supplierId: string | null
    score: number | null
    classification: $Enums.RiskLevel | null
    explanation: string | null
    indicators: string | null
    simulated: boolean | null
    createdAt: Date | null
  }

  export type RiskAssessmentCountAggregateOutputType = {
    id: number
    supplierId: number
    score: number
    classification: number
    explanation: number
    indicators: number
    simulated: number
    createdAt: number
    _all: number
  }


  export type RiskAssessmentAvgAggregateInputType = {
    score?: true
  }

  export type RiskAssessmentSumAggregateInputType = {
    score?: true
  }

  export type RiskAssessmentMinAggregateInputType = {
    id?: true
    supplierId?: true
    score?: true
    classification?: true
    explanation?: true
    indicators?: true
    simulated?: true
    createdAt?: true
  }

  export type RiskAssessmentMaxAggregateInputType = {
    id?: true
    supplierId?: true
    score?: true
    classification?: true
    explanation?: true
    indicators?: true
    simulated?: true
    createdAt?: true
  }

  export type RiskAssessmentCountAggregateInputType = {
    id?: true
    supplierId?: true
    score?: true
    classification?: true
    explanation?: true
    indicators?: true
    simulated?: true
    createdAt?: true
    _all?: true
  }

  export type RiskAssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskAssessment to aggregate.
     */
    where?: RiskAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAssessments to fetch.
     */
    orderBy?: RiskAssessmentOrderByWithRelationInput | RiskAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiskAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RiskAssessments
    **/
    _count?: true | RiskAssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiskAssessmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiskAssessmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiskAssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiskAssessmentMaxAggregateInputType
  }

  export type GetRiskAssessmentAggregateType<T extends RiskAssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateRiskAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiskAssessment[P]>
      : GetScalarType<T[P], AggregateRiskAssessment[P]>
  }




  export type RiskAssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskAssessmentWhereInput
    orderBy?: RiskAssessmentOrderByWithAggregationInput | RiskAssessmentOrderByWithAggregationInput[]
    by: RiskAssessmentScalarFieldEnum[] | RiskAssessmentScalarFieldEnum
    having?: RiskAssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiskAssessmentCountAggregateInputType | true
    _avg?: RiskAssessmentAvgAggregateInputType
    _sum?: RiskAssessmentSumAggregateInputType
    _min?: RiskAssessmentMinAggregateInputType
    _max?: RiskAssessmentMaxAggregateInputType
  }

  export type RiskAssessmentGroupByOutputType = {
    id: string
    supplierId: string
    score: number
    classification: $Enums.RiskLevel
    explanation: string
    indicators: string
    simulated: boolean
    createdAt: Date
    _count: RiskAssessmentCountAggregateOutputType | null
    _avg: RiskAssessmentAvgAggregateOutputType | null
    _sum: RiskAssessmentSumAggregateOutputType | null
    _min: RiskAssessmentMinAggregateOutputType | null
    _max: RiskAssessmentMaxAggregateOutputType | null
  }

  type GetRiskAssessmentGroupByPayload<T extends RiskAssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiskAssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiskAssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiskAssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], RiskAssessmentGroupByOutputType[P]>
        }
      >
    >


  export type RiskAssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    score?: boolean
    classification?: boolean
    explanation?: boolean
    indicators?: boolean
    simulated?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskAssessment"]>

  export type RiskAssessmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    score?: boolean
    classification?: boolean
    explanation?: boolean
    indicators?: boolean
    simulated?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskAssessment"]>

  export type RiskAssessmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    score?: boolean
    classification?: boolean
    explanation?: boolean
    indicators?: boolean
    simulated?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskAssessment"]>

  export type RiskAssessmentSelectScalar = {
    id?: boolean
    supplierId?: boolean
    score?: boolean
    classification?: boolean
    explanation?: boolean
    indicators?: boolean
    simulated?: boolean
    createdAt?: boolean
  }

  export type RiskAssessmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplierId" | "score" | "classification" | "explanation" | "indicators" | "simulated" | "createdAt", ExtArgs["result"]["riskAssessment"]>
  export type RiskAssessmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type RiskAssessmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type RiskAssessmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $RiskAssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RiskAssessment"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supplierId: string
      score: number
      classification: $Enums.RiskLevel
      explanation: string
      indicators: string
      simulated: boolean
      createdAt: Date
    }, ExtArgs["result"]["riskAssessment"]>
    composites: {}
  }

  type RiskAssessmentGetPayload<S extends boolean | null | undefined | RiskAssessmentDefaultArgs> = $Result.GetResult<Prisma.$RiskAssessmentPayload, S>

  type RiskAssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiskAssessmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiskAssessmentCountAggregateInputType | true
    }

  export interface RiskAssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RiskAssessment'], meta: { name: 'RiskAssessment' } }
    /**
     * Find zero or one RiskAssessment that matches the filter.
     * @param {RiskAssessmentFindUniqueArgs} args - Arguments to find a RiskAssessment
     * @example
     * // Get one RiskAssessment
     * const riskAssessment = await prisma.riskAssessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiskAssessmentFindUniqueArgs>(args: SelectSubset<T, RiskAssessmentFindUniqueArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RiskAssessment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiskAssessmentFindUniqueOrThrowArgs} args - Arguments to find a RiskAssessment
     * @example
     * // Get one RiskAssessment
     * const riskAssessment = await prisma.riskAssessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiskAssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, RiskAssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskAssessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAssessmentFindFirstArgs} args - Arguments to find a RiskAssessment
     * @example
     * // Get one RiskAssessment
     * const riskAssessment = await prisma.riskAssessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiskAssessmentFindFirstArgs>(args?: SelectSubset<T, RiskAssessmentFindFirstArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskAssessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAssessmentFindFirstOrThrowArgs} args - Arguments to find a RiskAssessment
     * @example
     * // Get one RiskAssessment
     * const riskAssessment = await prisma.riskAssessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiskAssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, RiskAssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RiskAssessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RiskAssessments
     * const riskAssessments = await prisma.riskAssessment.findMany()
     * 
     * // Get first 10 RiskAssessments
     * const riskAssessments = await prisma.riskAssessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riskAssessmentWithIdOnly = await prisma.riskAssessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiskAssessmentFindManyArgs>(args?: SelectSubset<T, RiskAssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RiskAssessment.
     * @param {RiskAssessmentCreateArgs} args - Arguments to create a RiskAssessment.
     * @example
     * // Create one RiskAssessment
     * const RiskAssessment = await prisma.riskAssessment.create({
     *   data: {
     *     // ... data to create a RiskAssessment
     *   }
     * })
     * 
     */
    create<T extends RiskAssessmentCreateArgs>(args: SelectSubset<T, RiskAssessmentCreateArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RiskAssessments.
     * @param {RiskAssessmentCreateManyArgs} args - Arguments to create many RiskAssessments.
     * @example
     * // Create many RiskAssessments
     * const riskAssessment = await prisma.riskAssessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiskAssessmentCreateManyArgs>(args?: SelectSubset<T, RiskAssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RiskAssessments and returns the data saved in the database.
     * @param {RiskAssessmentCreateManyAndReturnArgs} args - Arguments to create many RiskAssessments.
     * @example
     * // Create many RiskAssessments
     * const riskAssessment = await prisma.riskAssessment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RiskAssessments and only return the `id`
     * const riskAssessmentWithIdOnly = await prisma.riskAssessment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiskAssessmentCreateManyAndReturnArgs>(args?: SelectSubset<T, RiskAssessmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RiskAssessment.
     * @param {RiskAssessmentDeleteArgs} args - Arguments to delete one RiskAssessment.
     * @example
     * // Delete one RiskAssessment
     * const RiskAssessment = await prisma.riskAssessment.delete({
     *   where: {
     *     // ... filter to delete one RiskAssessment
     *   }
     * })
     * 
     */
    delete<T extends RiskAssessmentDeleteArgs>(args: SelectSubset<T, RiskAssessmentDeleteArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RiskAssessment.
     * @param {RiskAssessmentUpdateArgs} args - Arguments to update one RiskAssessment.
     * @example
     * // Update one RiskAssessment
     * const riskAssessment = await prisma.riskAssessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiskAssessmentUpdateArgs>(args: SelectSubset<T, RiskAssessmentUpdateArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RiskAssessments.
     * @param {RiskAssessmentDeleteManyArgs} args - Arguments to filter RiskAssessments to delete.
     * @example
     * // Delete a few RiskAssessments
     * const { count } = await prisma.riskAssessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiskAssessmentDeleteManyArgs>(args?: SelectSubset<T, RiskAssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskAssessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RiskAssessments
     * const riskAssessment = await prisma.riskAssessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiskAssessmentUpdateManyArgs>(args: SelectSubset<T, RiskAssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskAssessments and returns the data updated in the database.
     * @param {RiskAssessmentUpdateManyAndReturnArgs} args - Arguments to update many RiskAssessments.
     * @example
     * // Update many RiskAssessments
     * const riskAssessment = await prisma.riskAssessment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RiskAssessments and only return the `id`
     * const riskAssessmentWithIdOnly = await prisma.riskAssessment.updateManyAndReturn({
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
    updateManyAndReturn<T extends RiskAssessmentUpdateManyAndReturnArgs>(args: SelectSubset<T, RiskAssessmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RiskAssessment.
     * @param {RiskAssessmentUpsertArgs} args - Arguments to update or create a RiskAssessment.
     * @example
     * // Update or create a RiskAssessment
     * const riskAssessment = await prisma.riskAssessment.upsert({
     *   create: {
     *     // ... data to create a RiskAssessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RiskAssessment we want to update
     *   }
     * })
     */
    upsert<T extends RiskAssessmentUpsertArgs>(args: SelectSubset<T, RiskAssessmentUpsertArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RiskAssessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAssessmentCountArgs} args - Arguments to filter RiskAssessments to count.
     * @example
     * // Count the number of RiskAssessments
     * const count = await prisma.riskAssessment.count({
     *   where: {
     *     // ... the filter for the RiskAssessments we want to count
     *   }
     * })
    **/
    count<T extends RiskAssessmentCountArgs>(
      args?: Subset<T, RiskAssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiskAssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RiskAssessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RiskAssessmentAggregateArgs>(args: Subset<T, RiskAssessmentAggregateArgs>): Prisma.PrismaPromise<GetRiskAssessmentAggregateType<T>>

    /**
     * Group by RiskAssessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAssessmentGroupByArgs} args - Group by arguments.
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
      T extends RiskAssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiskAssessmentGroupByArgs['orderBy'] }
        : { orderBy?: RiskAssessmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RiskAssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RiskAssessment model
   */
  readonly fields: RiskAssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RiskAssessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiskAssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RiskAssessment model
   */
  interface RiskAssessmentFieldRefs {
    readonly id: FieldRef<"RiskAssessment", 'String'>
    readonly supplierId: FieldRef<"RiskAssessment", 'String'>
    readonly score: FieldRef<"RiskAssessment", 'Int'>
    readonly classification: FieldRef<"RiskAssessment", 'RiskLevel'>
    readonly explanation: FieldRef<"RiskAssessment", 'String'>
    readonly indicators: FieldRef<"RiskAssessment", 'String'>
    readonly simulated: FieldRef<"RiskAssessment", 'Boolean'>
    readonly createdAt: FieldRef<"RiskAssessment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RiskAssessment findUnique
   */
  export type RiskAssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which RiskAssessment to fetch.
     */
    where: RiskAssessmentWhereUniqueInput
  }

  /**
   * RiskAssessment findUniqueOrThrow
   */
  export type RiskAssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which RiskAssessment to fetch.
     */
    where: RiskAssessmentWhereUniqueInput
  }

  /**
   * RiskAssessment findFirst
   */
  export type RiskAssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which RiskAssessment to fetch.
     */
    where?: RiskAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAssessments to fetch.
     */
    orderBy?: RiskAssessmentOrderByWithRelationInput | RiskAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskAssessments.
     */
    cursor?: RiskAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskAssessments.
     */
    distinct?: RiskAssessmentScalarFieldEnum | RiskAssessmentScalarFieldEnum[]
  }

  /**
   * RiskAssessment findFirstOrThrow
   */
  export type RiskAssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which RiskAssessment to fetch.
     */
    where?: RiskAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAssessments to fetch.
     */
    orderBy?: RiskAssessmentOrderByWithRelationInput | RiskAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskAssessments.
     */
    cursor?: RiskAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskAssessments.
     */
    distinct?: RiskAssessmentScalarFieldEnum | RiskAssessmentScalarFieldEnum[]
  }

  /**
   * RiskAssessment findMany
   */
  export type RiskAssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which RiskAssessments to fetch.
     */
    where?: RiskAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAssessments to fetch.
     */
    orderBy?: RiskAssessmentOrderByWithRelationInput | RiskAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RiskAssessments.
     */
    cursor?: RiskAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskAssessments.
     */
    distinct?: RiskAssessmentScalarFieldEnum | RiskAssessmentScalarFieldEnum[]
  }

  /**
   * RiskAssessment create
   */
  export type RiskAssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * The data needed to create a RiskAssessment.
     */
    data: XOR<RiskAssessmentCreateInput, RiskAssessmentUncheckedCreateInput>
  }

  /**
   * RiskAssessment createMany
   */
  export type RiskAssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RiskAssessments.
     */
    data: RiskAssessmentCreateManyInput | RiskAssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RiskAssessment createManyAndReturn
   */
  export type RiskAssessmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * The data used to create many RiskAssessments.
     */
    data: RiskAssessmentCreateManyInput | RiskAssessmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskAssessment update
   */
  export type RiskAssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * The data needed to update a RiskAssessment.
     */
    data: XOR<RiskAssessmentUpdateInput, RiskAssessmentUncheckedUpdateInput>
    /**
     * Choose, which RiskAssessment to update.
     */
    where: RiskAssessmentWhereUniqueInput
  }

  /**
   * RiskAssessment updateMany
   */
  export type RiskAssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RiskAssessments.
     */
    data: XOR<RiskAssessmentUpdateManyMutationInput, RiskAssessmentUncheckedUpdateManyInput>
    /**
     * Filter which RiskAssessments to update
     */
    where?: RiskAssessmentWhereInput
    /**
     * Limit how many RiskAssessments to update.
     */
    limit?: number
  }

  /**
   * RiskAssessment updateManyAndReturn
   */
  export type RiskAssessmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * The data used to update RiskAssessments.
     */
    data: XOR<RiskAssessmentUpdateManyMutationInput, RiskAssessmentUncheckedUpdateManyInput>
    /**
     * Filter which RiskAssessments to update
     */
    where?: RiskAssessmentWhereInput
    /**
     * Limit how many RiskAssessments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskAssessment upsert
   */
  export type RiskAssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * The filter to search for the RiskAssessment to update in case it exists.
     */
    where: RiskAssessmentWhereUniqueInput
    /**
     * In case the RiskAssessment found by the `where` argument doesn't exist, create a new RiskAssessment with this data.
     */
    create: XOR<RiskAssessmentCreateInput, RiskAssessmentUncheckedCreateInput>
    /**
     * In case the RiskAssessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiskAssessmentUpdateInput, RiskAssessmentUncheckedUpdateInput>
  }

  /**
   * RiskAssessment delete
   */
  export type RiskAssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * Filter which RiskAssessment to delete.
     */
    where: RiskAssessmentWhereUniqueInput
  }

  /**
   * RiskAssessment deleteMany
   */
  export type RiskAssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskAssessments to delete
     */
    where?: RiskAssessmentWhereInput
    /**
     * Limit how many RiskAssessments to delete.
     */
    limit?: number
  }

  /**
   * RiskAssessment without action
   */
  export type RiskAssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
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


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    workspaceId: 'workspaceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    companyName: 'companyName',
    email: 'email',
    phone: 'phone',
    location: 'location',
    industry: 'industry',
    categories: 'categories',
    averageDeliveryDays: 'averageDeliveryDays',
    onTimeRate: 'onTimeRate',
    qualityRating: 'qualityRating',
    priceConsistency: 'priceConsistency',
    riskScore: 'riskScore',
    riskLevel: 'riskLevel',
    certifications: 'certifications',
    ownerId: 'ownerId',
    workspaceId: 'workspaceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const SupplierPerformanceScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    period: 'period',
    onTimeRate: 'onTimeRate',
    defectRate: 'defectRate',
    averageDelivery: 'averageDelivery',
    orderCompletion: 'orderCompletion',
    priceConsistency: 'priceConsistency',
    createdAt: 'createdAt'
  };

  export type SupplierPerformanceScalarFieldEnum = (typeof SupplierPerformanceScalarFieldEnum)[keyof typeof SupplierPerformanceScalarFieldEnum]


  export const QuotationScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    reference: 'reference',
    status: 'status',
    deliveryDays: 'deliveryDays',
    taxes: 'taxes',
    shipping: 'shipping',
    paymentTerms: 'paymentTerms',
    createdAt: 'createdAt'
  };

  export type QuotationScalarFieldEnum = (typeof QuotationScalarFieldEnum)[keyof typeof QuotationScalarFieldEnum]


  export const QuotationItemScalarFieldEnum: {
    id: 'id',
    quotationId: 'quotationId',
    product: 'product',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    warranty: 'warranty'
  };

  export type QuotationItemScalarFieldEnum = (typeof QuotationItemScalarFieldEnum)[keyof typeof QuotationItemScalarFieldEnum]


  export const SupplierProductScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    name: 'name',
    category: 'category',
    unitPrice: 'unitPrice',
    currency: 'currency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierProductScalarFieldEnum = (typeof SupplierProductScalarFieldEnum)[keyof typeof SupplierProductScalarFieldEnum]


  export const SupplierReviewScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type SupplierReviewScalarFieldEnum = (typeof SupplierReviewScalarFieldEnum)[keyof typeof SupplierReviewScalarFieldEnum]


  export const ProcurementOrderScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    reference: 'reference',
    totalAmount: 'totalAmount',
    status: 'status',
    orderedAt: 'orderedAt'
  };

  export type ProcurementOrderScalarFieldEnum = (typeof ProcurementOrderScalarFieldEnum)[keyof typeof ProcurementOrderScalarFieldEnum]


  export const ProcurementOrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    product: 'product',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    subtotal: 'subtotal'
  };

  export type ProcurementOrderItemScalarFieldEnum = (typeof ProcurementOrderItemScalarFieldEnum)[keyof typeof ProcurementOrderItemScalarFieldEnum]


  export const CostBreakdownScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    workspaceId: 'workspaceId',
    supplierId: 'supplierId',
    product: 'product',
    productCost: 'productCost',
    transportation: 'transportation',
    taxes: 'taxes',
    storage: 'storage',
    inspection: 'inspection',
    expectedDefect: 'expectedDefect',
    delay: 'delay',
    other: 'other',
    total: 'total',
    createdAt: 'createdAt'
  };

  export type CostBreakdownScalarFieldEnum = (typeof CostBreakdownScalarFieldEnum)[keyof typeof CostBreakdownScalarFieldEnum]


  export const AIRecommendationScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    supplierId: 'supplierId',
    prompt: 'prompt',
    response: 'response',
    createdAt: 'createdAt'
  };

  export type AIRecommendationScalarFieldEnum = (typeof AIRecommendationScalarFieldEnum)[keyof typeof AIRecommendationScalarFieldEnum]


  export const RiskAssessmentScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    score: 'score',
    classification: 'classification',
    explanation: 'explanation',
    indicators: 'indicators',
    simulated: 'simulated',
    createdAt: 'createdAt'
  };

  export type RiskAssessmentScalarFieldEnum = (typeof RiskAssessmentScalarFieldEnum)[keyof typeof RiskAssessmentScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RiskLevel'
   */
  export type EnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel'>
    


  /**
   * Reference to a field of type 'RiskLevel[]'
   */
  export type ListEnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel[]'>
    


  /**
   * Reference to a field of type 'QuotationStatus'
   */
  export type EnumQuotationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuotationStatus'>
    


  /**
   * Reference to a field of type 'QuotationStatus[]'
   */
  export type ListEnumQuotationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuotationStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type WorkspaceWhereInput = {
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    users?: UserListRelationFilter
    suppliers?: SupplierListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    suppliers?: SupplierOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    name?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    users?: UserListRelationFilter
    suppliers?: SupplierListRelationFilter
  }, "id">

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    OR?: WorkspaceScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workspace"> | string
    name?: StringWithAggregatesFilter<"Workspace"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    workspaceId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    suppliers?: SupplierListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    suppliers?: SupplierOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    workspaceId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    suppliers?: SupplierListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    workspaceId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    name?: StringFilter<"Supplier"> | string
    companyName?: StringFilter<"Supplier"> | string
    email?: StringFilter<"Supplier"> | string
    phone?: StringNullableFilter<"Supplier"> | string | null
    location?: StringFilter<"Supplier"> | string
    industry?: StringFilter<"Supplier"> | string
    categories?: StringFilter<"Supplier"> | string
    averageDeliveryDays?: FloatFilter<"Supplier"> | number
    onTimeRate?: FloatFilter<"Supplier"> | number
    qualityRating?: FloatFilter<"Supplier"> | number
    priceConsistency?: FloatFilter<"Supplier"> | number
    riskScore?: IntFilter<"Supplier"> | number
    riskLevel?: EnumRiskLevelFilter<"Supplier"> | $Enums.RiskLevel
    certifications?: StringNullableFilter<"Supplier"> | string | null
    ownerId?: StringFilter<"Supplier"> | string
    workspaceId?: StringFilter<"Supplier"> | string
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    performances?: SupplierPerformanceListRelationFilter
    quotations?: QuotationListRelationFilter
    assessments?: RiskAssessmentListRelationFilter
    products?: SupplierProductListRelationFilter
    reviews?: SupplierReviewListRelationFilter
    orders?: ProcurementOrderListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrder
    industry?: SortOrder
    categories?: SortOrder
    averageDeliveryDays?: SortOrder
    onTimeRate?: SortOrder
    qualityRating?: SortOrder
    priceConsistency?: SortOrder
    riskScore?: SortOrder
    riskLevel?: SortOrder
    certifications?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    workspace?: WorkspaceOrderByWithRelationInput
    performances?: SupplierPerformanceOrderByRelationAggregateInput
    quotations?: QuotationOrderByRelationAggregateInput
    assessments?: RiskAssessmentOrderByRelationAggregateInput
    products?: SupplierProductOrderByRelationAggregateInput
    reviews?: SupplierReviewOrderByRelationAggregateInput
    orders?: ProcurementOrderOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    name?: StringFilter<"Supplier"> | string
    companyName?: StringFilter<"Supplier"> | string
    email?: StringFilter<"Supplier"> | string
    phone?: StringNullableFilter<"Supplier"> | string | null
    location?: StringFilter<"Supplier"> | string
    industry?: StringFilter<"Supplier"> | string
    categories?: StringFilter<"Supplier"> | string
    averageDeliveryDays?: FloatFilter<"Supplier"> | number
    onTimeRate?: FloatFilter<"Supplier"> | number
    qualityRating?: FloatFilter<"Supplier"> | number
    priceConsistency?: FloatFilter<"Supplier"> | number
    riskScore?: IntFilter<"Supplier"> | number
    riskLevel?: EnumRiskLevelFilter<"Supplier"> | $Enums.RiskLevel
    certifications?: StringNullableFilter<"Supplier"> | string | null
    ownerId?: StringFilter<"Supplier"> | string
    workspaceId?: StringFilter<"Supplier"> | string
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    performances?: SupplierPerformanceListRelationFilter
    quotations?: QuotationListRelationFilter
    assessments?: RiskAssessmentListRelationFilter
    products?: SupplierProductListRelationFilter
    reviews?: SupplierReviewListRelationFilter
    orders?: ProcurementOrderListRelationFilter
  }, "id">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrder
    industry?: SortOrder
    categories?: SortOrder
    averageDeliveryDays?: SortOrder
    onTimeRate?: SortOrder
    qualityRating?: SortOrder
    priceConsistency?: SortOrder
    riskScore?: SortOrder
    riskLevel?: SortOrder
    certifications?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    name?: StringWithAggregatesFilter<"Supplier"> | string
    companyName?: StringWithAggregatesFilter<"Supplier"> | string
    email?: StringWithAggregatesFilter<"Supplier"> | string
    phone?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    location?: StringWithAggregatesFilter<"Supplier"> | string
    industry?: StringWithAggregatesFilter<"Supplier"> | string
    categories?: StringWithAggregatesFilter<"Supplier"> | string
    averageDeliveryDays?: FloatWithAggregatesFilter<"Supplier"> | number
    onTimeRate?: FloatWithAggregatesFilter<"Supplier"> | number
    qualityRating?: FloatWithAggregatesFilter<"Supplier"> | number
    priceConsistency?: FloatWithAggregatesFilter<"Supplier"> | number
    riskScore?: IntWithAggregatesFilter<"Supplier"> | number
    riskLevel?: EnumRiskLevelWithAggregatesFilter<"Supplier"> | $Enums.RiskLevel
    certifications?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    ownerId?: StringWithAggregatesFilter<"Supplier"> | string
    workspaceId?: StringWithAggregatesFilter<"Supplier"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type SupplierPerformanceWhereInput = {
    AND?: SupplierPerformanceWhereInput | SupplierPerformanceWhereInput[]
    OR?: SupplierPerformanceWhereInput[]
    NOT?: SupplierPerformanceWhereInput | SupplierPerformanceWhereInput[]
    id?: StringFilter<"SupplierPerformance"> | string
    supplierId?: StringFilter<"SupplierPerformance"> | string
    period?: StringFilter<"SupplierPerformance"> | string
    onTimeRate?: FloatFilter<"SupplierPerformance"> | number
    defectRate?: FloatFilter<"SupplierPerformance"> | number
    averageDelivery?: FloatFilter<"SupplierPerformance"> | number
    orderCompletion?: FloatFilter<"SupplierPerformance"> | number
    priceConsistency?: FloatFilter<"SupplierPerformance"> | number
    createdAt?: DateTimeFilter<"SupplierPerformance"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }

  export type SupplierPerformanceOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    period?: SortOrder
    onTimeRate?: SortOrder
    defectRate?: SortOrder
    averageDelivery?: SortOrder
    orderCompletion?: SortOrder
    priceConsistency?: SortOrder
    createdAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
  }

  export type SupplierPerformanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierPerformanceWhereInput | SupplierPerformanceWhereInput[]
    OR?: SupplierPerformanceWhereInput[]
    NOT?: SupplierPerformanceWhereInput | SupplierPerformanceWhereInput[]
    supplierId?: StringFilter<"SupplierPerformance"> | string
    period?: StringFilter<"SupplierPerformance"> | string
    onTimeRate?: FloatFilter<"SupplierPerformance"> | number
    defectRate?: FloatFilter<"SupplierPerformance"> | number
    averageDelivery?: FloatFilter<"SupplierPerformance"> | number
    orderCompletion?: FloatFilter<"SupplierPerformance"> | number
    priceConsistency?: FloatFilter<"SupplierPerformance"> | number
    createdAt?: DateTimeFilter<"SupplierPerformance"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }, "id">

  export type SupplierPerformanceOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    period?: SortOrder
    onTimeRate?: SortOrder
    defectRate?: SortOrder
    averageDelivery?: SortOrder
    orderCompletion?: SortOrder
    priceConsistency?: SortOrder
    createdAt?: SortOrder
    _count?: SupplierPerformanceCountOrderByAggregateInput
    _avg?: SupplierPerformanceAvgOrderByAggregateInput
    _max?: SupplierPerformanceMaxOrderByAggregateInput
    _min?: SupplierPerformanceMinOrderByAggregateInput
    _sum?: SupplierPerformanceSumOrderByAggregateInput
  }

  export type SupplierPerformanceScalarWhereWithAggregatesInput = {
    AND?: SupplierPerformanceScalarWhereWithAggregatesInput | SupplierPerformanceScalarWhereWithAggregatesInput[]
    OR?: SupplierPerformanceScalarWhereWithAggregatesInput[]
    NOT?: SupplierPerformanceScalarWhereWithAggregatesInput | SupplierPerformanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupplierPerformance"> | string
    supplierId?: StringWithAggregatesFilter<"SupplierPerformance"> | string
    period?: StringWithAggregatesFilter<"SupplierPerformance"> | string
    onTimeRate?: FloatWithAggregatesFilter<"SupplierPerformance"> | number
    defectRate?: FloatWithAggregatesFilter<"SupplierPerformance"> | number
    averageDelivery?: FloatWithAggregatesFilter<"SupplierPerformance"> | number
    orderCompletion?: FloatWithAggregatesFilter<"SupplierPerformance"> | number
    priceConsistency?: FloatWithAggregatesFilter<"SupplierPerformance"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SupplierPerformance"> | Date | string
  }

  export type QuotationWhereInput = {
    AND?: QuotationWhereInput | QuotationWhereInput[]
    OR?: QuotationWhereInput[]
    NOT?: QuotationWhereInput | QuotationWhereInput[]
    id?: StringFilter<"Quotation"> | string
    supplierId?: StringFilter<"Quotation"> | string
    reference?: StringFilter<"Quotation"> | string
    status?: EnumQuotationStatusFilter<"Quotation"> | $Enums.QuotationStatus
    deliveryDays?: FloatNullableFilter<"Quotation"> | number | null
    taxes?: FloatFilter<"Quotation"> | number
    shipping?: FloatFilter<"Quotation"> | number
    paymentTerms?: StringNullableFilter<"Quotation"> | string | null
    createdAt?: DateTimeFilter<"Quotation"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    items?: QuotationItemListRelationFilter
  }

  export type QuotationOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    deliveryDays?: SortOrderInput | SortOrder
    taxes?: SortOrder
    shipping?: SortOrder
    paymentTerms?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
    items?: QuotationItemOrderByRelationAggregateInput
  }

  export type QuotationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuotationWhereInput | QuotationWhereInput[]
    OR?: QuotationWhereInput[]
    NOT?: QuotationWhereInput | QuotationWhereInput[]
    supplierId?: StringFilter<"Quotation"> | string
    reference?: StringFilter<"Quotation"> | string
    status?: EnumQuotationStatusFilter<"Quotation"> | $Enums.QuotationStatus
    deliveryDays?: FloatNullableFilter<"Quotation"> | number | null
    taxes?: FloatFilter<"Quotation"> | number
    shipping?: FloatFilter<"Quotation"> | number
    paymentTerms?: StringNullableFilter<"Quotation"> | string | null
    createdAt?: DateTimeFilter<"Quotation"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    items?: QuotationItemListRelationFilter
  }, "id">

  export type QuotationOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    deliveryDays?: SortOrderInput | SortOrder
    taxes?: SortOrder
    shipping?: SortOrder
    paymentTerms?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: QuotationCountOrderByAggregateInput
    _avg?: QuotationAvgOrderByAggregateInput
    _max?: QuotationMaxOrderByAggregateInput
    _min?: QuotationMinOrderByAggregateInput
    _sum?: QuotationSumOrderByAggregateInput
  }

  export type QuotationScalarWhereWithAggregatesInput = {
    AND?: QuotationScalarWhereWithAggregatesInput | QuotationScalarWhereWithAggregatesInput[]
    OR?: QuotationScalarWhereWithAggregatesInput[]
    NOT?: QuotationScalarWhereWithAggregatesInput | QuotationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quotation"> | string
    supplierId?: StringWithAggregatesFilter<"Quotation"> | string
    reference?: StringWithAggregatesFilter<"Quotation"> | string
    status?: EnumQuotationStatusWithAggregatesFilter<"Quotation"> | $Enums.QuotationStatus
    deliveryDays?: FloatNullableWithAggregatesFilter<"Quotation"> | number | null
    taxes?: FloatWithAggregatesFilter<"Quotation"> | number
    shipping?: FloatWithAggregatesFilter<"Quotation"> | number
    paymentTerms?: StringNullableWithAggregatesFilter<"Quotation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Quotation"> | Date | string
  }

  export type QuotationItemWhereInput = {
    AND?: QuotationItemWhereInput | QuotationItemWhereInput[]
    OR?: QuotationItemWhereInput[]
    NOT?: QuotationItemWhereInput | QuotationItemWhereInput[]
    id?: StringFilter<"QuotationItem"> | string
    quotationId?: StringFilter<"QuotationItem"> | string
    product?: StringFilter<"QuotationItem"> | string
    quantity?: IntFilter<"QuotationItem"> | number
    unitPrice?: FloatFilter<"QuotationItem"> | number
    warranty?: StringNullableFilter<"QuotationItem"> | string | null
    quotation?: XOR<QuotationScalarRelationFilter, QuotationWhereInput>
  }

  export type QuotationItemOrderByWithRelationInput = {
    id?: SortOrder
    quotationId?: SortOrder
    product?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    warranty?: SortOrderInput | SortOrder
    quotation?: QuotationOrderByWithRelationInput
  }

  export type QuotationItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuotationItemWhereInput | QuotationItemWhereInput[]
    OR?: QuotationItemWhereInput[]
    NOT?: QuotationItemWhereInput | QuotationItemWhereInput[]
    quotationId?: StringFilter<"QuotationItem"> | string
    product?: StringFilter<"QuotationItem"> | string
    quantity?: IntFilter<"QuotationItem"> | number
    unitPrice?: FloatFilter<"QuotationItem"> | number
    warranty?: StringNullableFilter<"QuotationItem"> | string | null
    quotation?: XOR<QuotationScalarRelationFilter, QuotationWhereInput>
  }, "id">

  export type QuotationItemOrderByWithAggregationInput = {
    id?: SortOrder
    quotationId?: SortOrder
    product?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    warranty?: SortOrderInput | SortOrder
    _count?: QuotationItemCountOrderByAggregateInput
    _avg?: QuotationItemAvgOrderByAggregateInput
    _max?: QuotationItemMaxOrderByAggregateInput
    _min?: QuotationItemMinOrderByAggregateInput
    _sum?: QuotationItemSumOrderByAggregateInput
  }

  export type QuotationItemScalarWhereWithAggregatesInput = {
    AND?: QuotationItemScalarWhereWithAggregatesInput | QuotationItemScalarWhereWithAggregatesInput[]
    OR?: QuotationItemScalarWhereWithAggregatesInput[]
    NOT?: QuotationItemScalarWhereWithAggregatesInput | QuotationItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuotationItem"> | string
    quotationId?: StringWithAggregatesFilter<"QuotationItem"> | string
    product?: StringWithAggregatesFilter<"QuotationItem"> | string
    quantity?: IntWithAggregatesFilter<"QuotationItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"QuotationItem"> | number
    warranty?: StringNullableWithAggregatesFilter<"QuotationItem"> | string | null
  }

  export type SupplierProductWhereInput = {
    AND?: SupplierProductWhereInput | SupplierProductWhereInput[]
    OR?: SupplierProductWhereInput[]
    NOT?: SupplierProductWhereInput | SupplierProductWhereInput[]
    id?: StringFilter<"SupplierProduct"> | string
    supplierId?: StringFilter<"SupplierProduct"> | string
    name?: StringFilter<"SupplierProduct"> | string
    category?: StringFilter<"SupplierProduct"> | string
    unitPrice?: FloatFilter<"SupplierProduct"> | number
    currency?: StringFilter<"SupplierProduct"> | string
    createdAt?: DateTimeFilter<"SupplierProduct"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierProduct"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }

  export type SupplierProductOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    unitPrice?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
  }

  export type SupplierProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierProductWhereInput | SupplierProductWhereInput[]
    OR?: SupplierProductWhereInput[]
    NOT?: SupplierProductWhereInput | SupplierProductWhereInput[]
    supplierId?: StringFilter<"SupplierProduct"> | string
    name?: StringFilter<"SupplierProduct"> | string
    category?: StringFilter<"SupplierProduct"> | string
    unitPrice?: FloatFilter<"SupplierProduct"> | number
    currency?: StringFilter<"SupplierProduct"> | string
    createdAt?: DateTimeFilter<"SupplierProduct"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierProduct"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }, "id">

  export type SupplierProductOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    unitPrice?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierProductCountOrderByAggregateInput
    _avg?: SupplierProductAvgOrderByAggregateInput
    _max?: SupplierProductMaxOrderByAggregateInput
    _min?: SupplierProductMinOrderByAggregateInput
    _sum?: SupplierProductSumOrderByAggregateInput
  }

  export type SupplierProductScalarWhereWithAggregatesInput = {
    AND?: SupplierProductScalarWhereWithAggregatesInput | SupplierProductScalarWhereWithAggregatesInput[]
    OR?: SupplierProductScalarWhereWithAggregatesInput[]
    NOT?: SupplierProductScalarWhereWithAggregatesInput | SupplierProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupplierProduct"> | string
    supplierId?: StringWithAggregatesFilter<"SupplierProduct"> | string
    name?: StringWithAggregatesFilter<"SupplierProduct"> | string
    category?: StringWithAggregatesFilter<"SupplierProduct"> | string
    unitPrice?: FloatWithAggregatesFilter<"SupplierProduct"> | number
    currency?: StringWithAggregatesFilter<"SupplierProduct"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SupplierProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupplierProduct"> | Date | string
  }

  export type SupplierReviewWhereInput = {
    AND?: SupplierReviewWhereInput | SupplierReviewWhereInput[]
    OR?: SupplierReviewWhereInput[]
    NOT?: SupplierReviewWhereInput | SupplierReviewWhereInput[]
    id?: StringFilter<"SupplierReview"> | string
    supplierId?: StringFilter<"SupplierReview"> | string
    rating?: FloatFilter<"SupplierReview"> | number
    comment?: StringNullableFilter<"SupplierReview"> | string | null
    createdAt?: DateTimeFilter<"SupplierReview"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }

  export type SupplierReviewOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
  }

  export type SupplierReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierReviewWhereInput | SupplierReviewWhereInput[]
    OR?: SupplierReviewWhereInput[]
    NOT?: SupplierReviewWhereInput | SupplierReviewWhereInput[]
    supplierId?: StringFilter<"SupplierReview"> | string
    rating?: FloatFilter<"SupplierReview"> | number
    comment?: StringNullableFilter<"SupplierReview"> | string | null
    createdAt?: DateTimeFilter<"SupplierReview"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }, "id">

  export type SupplierReviewOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SupplierReviewCountOrderByAggregateInput
    _avg?: SupplierReviewAvgOrderByAggregateInput
    _max?: SupplierReviewMaxOrderByAggregateInput
    _min?: SupplierReviewMinOrderByAggregateInput
    _sum?: SupplierReviewSumOrderByAggregateInput
  }

  export type SupplierReviewScalarWhereWithAggregatesInput = {
    AND?: SupplierReviewScalarWhereWithAggregatesInput | SupplierReviewScalarWhereWithAggregatesInput[]
    OR?: SupplierReviewScalarWhereWithAggregatesInput[]
    NOT?: SupplierReviewScalarWhereWithAggregatesInput | SupplierReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupplierReview"> | string
    supplierId?: StringWithAggregatesFilter<"SupplierReview"> | string
    rating?: FloatWithAggregatesFilter<"SupplierReview"> | number
    comment?: StringNullableWithAggregatesFilter<"SupplierReview"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SupplierReview"> | Date | string
  }

  export type ProcurementOrderWhereInput = {
    AND?: ProcurementOrderWhereInput | ProcurementOrderWhereInput[]
    OR?: ProcurementOrderWhereInput[]
    NOT?: ProcurementOrderWhereInput | ProcurementOrderWhereInput[]
    id?: StringFilter<"ProcurementOrder"> | string
    supplierId?: StringFilter<"ProcurementOrder"> | string
    reference?: StringFilter<"ProcurementOrder"> | string
    totalAmount?: FloatFilter<"ProcurementOrder"> | number
    status?: StringFilter<"ProcurementOrder"> | string
    orderedAt?: DateTimeFilter<"ProcurementOrder"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    costBreakdown?: XOR<CostBreakdownNullableScalarRelationFilter, CostBreakdownWhereInput> | null
    items?: ProcurementOrderItemListRelationFilter
  }

  export type ProcurementOrderOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    reference?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    orderedAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
    costBreakdown?: CostBreakdownOrderByWithRelationInput
    items?: ProcurementOrderItemOrderByRelationAggregateInput
  }

  export type ProcurementOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: ProcurementOrderWhereInput | ProcurementOrderWhereInput[]
    OR?: ProcurementOrderWhereInput[]
    NOT?: ProcurementOrderWhereInput | ProcurementOrderWhereInput[]
    supplierId?: StringFilter<"ProcurementOrder"> | string
    totalAmount?: FloatFilter<"ProcurementOrder"> | number
    status?: StringFilter<"ProcurementOrder"> | string
    orderedAt?: DateTimeFilter<"ProcurementOrder"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    costBreakdown?: XOR<CostBreakdownNullableScalarRelationFilter, CostBreakdownWhereInput> | null
    items?: ProcurementOrderItemListRelationFilter
  }, "id" | "reference">

  export type ProcurementOrderOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    reference?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    orderedAt?: SortOrder
    _count?: ProcurementOrderCountOrderByAggregateInput
    _avg?: ProcurementOrderAvgOrderByAggregateInput
    _max?: ProcurementOrderMaxOrderByAggregateInput
    _min?: ProcurementOrderMinOrderByAggregateInput
    _sum?: ProcurementOrderSumOrderByAggregateInput
  }

  export type ProcurementOrderScalarWhereWithAggregatesInput = {
    AND?: ProcurementOrderScalarWhereWithAggregatesInput | ProcurementOrderScalarWhereWithAggregatesInput[]
    OR?: ProcurementOrderScalarWhereWithAggregatesInput[]
    NOT?: ProcurementOrderScalarWhereWithAggregatesInput | ProcurementOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProcurementOrder"> | string
    supplierId?: StringWithAggregatesFilter<"ProcurementOrder"> | string
    reference?: StringWithAggregatesFilter<"ProcurementOrder"> | string
    totalAmount?: FloatWithAggregatesFilter<"ProcurementOrder"> | number
    status?: StringWithAggregatesFilter<"ProcurementOrder"> | string
    orderedAt?: DateTimeWithAggregatesFilter<"ProcurementOrder"> | Date | string
  }

  export type ProcurementOrderItemWhereInput = {
    AND?: ProcurementOrderItemWhereInput | ProcurementOrderItemWhereInput[]
    OR?: ProcurementOrderItemWhereInput[]
    NOT?: ProcurementOrderItemWhereInput | ProcurementOrderItemWhereInput[]
    id?: StringFilter<"ProcurementOrderItem"> | string
    orderId?: StringFilter<"ProcurementOrderItem"> | string
    product?: StringFilter<"ProcurementOrderItem"> | string
    quantity?: IntFilter<"ProcurementOrderItem"> | number
    unitPrice?: FloatFilter<"ProcurementOrderItem"> | number
    subtotal?: FloatFilter<"ProcurementOrderItem"> | number
    order?: XOR<ProcurementOrderScalarRelationFilter, ProcurementOrderWhereInput>
  }

  export type ProcurementOrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    product?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    order?: ProcurementOrderOrderByWithRelationInput
  }

  export type ProcurementOrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProcurementOrderItemWhereInput | ProcurementOrderItemWhereInput[]
    OR?: ProcurementOrderItemWhereInput[]
    NOT?: ProcurementOrderItemWhereInput | ProcurementOrderItemWhereInput[]
    orderId?: StringFilter<"ProcurementOrderItem"> | string
    product?: StringFilter<"ProcurementOrderItem"> | string
    quantity?: IntFilter<"ProcurementOrderItem"> | number
    unitPrice?: FloatFilter<"ProcurementOrderItem"> | number
    subtotal?: FloatFilter<"ProcurementOrderItem"> | number
    order?: XOR<ProcurementOrderScalarRelationFilter, ProcurementOrderWhereInput>
  }, "id">

  export type ProcurementOrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    product?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    _count?: ProcurementOrderItemCountOrderByAggregateInput
    _avg?: ProcurementOrderItemAvgOrderByAggregateInput
    _max?: ProcurementOrderItemMaxOrderByAggregateInput
    _min?: ProcurementOrderItemMinOrderByAggregateInput
    _sum?: ProcurementOrderItemSumOrderByAggregateInput
  }

  export type ProcurementOrderItemScalarWhereWithAggregatesInput = {
    AND?: ProcurementOrderItemScalarWhereWithAggregatesInput | ProcurementOrderItemScalarWhereWithAggregatesInput[]
    OR?: ProcurementOrderItemScalarWhereWithAggregatesInput[]
    NOT?: ProcurementOrderItemScalarWhereWithAggregatesInput | ProcurementOrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProcurementOrderItem"> | string
    orderId?: StringWithAggregatesFilter<"ProcurementOrderItem"> | string
    product?: StringWithAggregatesFilter<"ProcurementOrderItem"> | string
    quantity?: IntWithAggregatesFilter<"ProcurementOrderItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"ProcurementOrderItem"> | number
    subtotal?: FloatWithAggregatesFilter<"ProcurementOrderItem"> | number
  }

  export type CostBreakdownWhereInput = {
    AND?: CostBreakdownWhereInput | CostBreakdownWhereInput[]
    OR?: CostBreakdownWhereInput[]
    NOT?: CostBreakdownWhereInput | CostBreakdownWhereInput[]
    id?: StringFilter<"CostBreakdown"> | string
    orderId?: StringNullableFilter<"CostBreakdown"> | string | null
    workspaceId?: StringFilter<"CostBreakdown"> | string
    supplierId?: StringNullableFilter<"CostBreakdown"> | string | null
    product?: StringNullableFilter<"CostBreakdown"> | string | null
    productCost?: FloatFilter<"CostBreakdown"> | number
    transportation?: FloatFilter<"CostBreakdown"> | number
    taxes?: FloatFilter<"CostBreakdown"> | number
    storage?: FloatFilter<"CostBreakdown"> | number
    inspection?: FloatFilter<"CostBreakdown"> | number
    expectedDefect?: FloatFilter<"CostBreakdown"> | number
    delay?: FloatFilter<"CostBreakdown"> | number
    other?: FloatFilter<"CostBreakdown"> | number
    total?: FloatFilter<"CostBreakdown"> | number
    createdAt?: DateTimeFilter<"CostBreakdown"> | Date | string
    order?: XOR<ProcurementOrderNullableScalarRelationFilter, ProcurementOrderWhereInput> | null
  }

  export type CostBreakdownOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrderInput | SortOrder
    workspaceId?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    product?: SortOrderInput | SortOrder
    productCost?: SortOrder
    transportation?: SortOrder
    taxes?: SortOrder
    storage?: SortOrder
    inspection?: SortOrder
    expectedDefect?: SortOrder
    delay?: SortOrder
    other?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    order?: ProcurementOrderOrderByWithRelationInput
  }

  export type CostBreakdownWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: CostBreakdownWhereInput | CostBreakdownWhereInput[]
    OR?: CostBreakdownWhereInput[]
    NOT?: CostBreakdownWhereInput | CostBreakdownWhereInput[]
    workspaceId?: StringFilter<"CostBreakdown"> | string
    supplierId?: StringNullableFilter<"CostBreakdown"> | string | null
    product?: StringNullableFilter<"CostBreakdown"> | string | null
    productCost?: FloatFilter<"CostBreakdown"> | number
    transportation?: FloatFilter<"CostBreakdown"> | number
    taxes?: FloatFilter<"CostBreakdown"> | number
    storage?: FloatFilter<"CostBreakdown"> | number
    inspection?: FloatFilter<"CostBreakdown"> | number
    expectedDefect?: FloatFilter<"CostBreakdown"> | number
    delay?: FloatFilter<"CostBreakdown"> | number
    other?: FloatFilter<"CostBreakdown"> | number
    total?: FloatFilter<"CostBreakdown"> | number
    createdAt?: DateTimeFilter<"CostBreakdown"> | Date | string
    order?: XOR<ProcurementOrderNullableScalarRelationFilter, ProcurementOrderWhereInput> | null
  }, "id" | "orderId">

  export type CostBreakdownOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrderInput | SortOrder
    workspaceId?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    product?: SortOrderInput | SortOrder
    productCost?: SortOrder
    transportation?: SortOrder
    taxes?: SortOrder
    storage?: SortOrder
    inspection?: SortOrder
    expectedDefect?: SortOrder
    delay?: SortOrder
    other?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    _count?: CostBreakdownCountOrderByAggregateInput
    _avg?: CostBreakdownAvgOrderByAggregateInput
    _max?: CostBreakdownMaxOrderByAggregateInput
    _min?: CostBreakdownMinOrderByAggregateInput
    _sum?: CostBreakdownSumOrderByAggregateInput
  }

  export type CostBreakdownScalarWhereWithAggregatesInput = {
    AND?: CostBreakdownScalarWhereWithAggregatesInput | CostBreakdownScalarWhereWithAggregatesInput[]
    OR?: CostBreakdownScalarWhereWithAggregatesInput[]
    NOT?: CostBreakdownScalarWhereWithAggregatesInput | CostBreakdownScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CostBreakdown"> | string
    orderId?: StringNullableWithAggregatesFilter<"CostBreakdown"> | string | null
    workspaceId?: StringWithAggregatesFilter<"CostBreakdown"> | string
    supplierId?: StringNullableWithAggregatesFilter<"CostBreakdown"> | string | null
    product?: StringNullableWithAggregatesFilter<"CostBreakdown"> | string | null
    productCost?: FloatWithAggregatesFilter<"CostBreakdown"> | number
    transportation?: FloatWithAggregatesFilter<"CostBreakdown"> | number
    taxes?: FloatWithAggregatesFilter<"CostBreakdown"> | number
    storage?: FloatWithAggregatesFilter<"CostBreakdown"> | number
    inspection?: FloatWithAggregatesFilter<"CostBreakdown"> | number
    expectedDefect?: FloatWithAggregatesFilter<"CostBreakdown"> | number
    delay?: FloatWithAggregatesFilter<"CostBreakdown"> | number
    other?: FloatWithAggregatesFilter<"CostBreakdown"> | number
    total?: FloatWithAggregatesFilter<"CostBreakdown"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CostBreakdown"> | Date | string
  }

  export type AIRecommendationWhereInput = {
    AND?: AIRecommendationWhereInput | AIRecommendationWhereInput[]
    OR?: AIRecommendationWhereInput[]
    NOT?: AIRecommendationWhereInput | AIRecommendationWhereInput[]
    id?: StringFilter<"AIRecommendation"> | string
    workspaceId?: StringFilter<"AIRecommendation"> | string
    supplierId?: StringNullableFilter<"AIRecommendation"> | string | null
    prompt?: StringFilter<"AIRecommendation"> | string
    response?: StringFilter<"AIRecommendation"> | string
    createdAt?: DateTimeFilter<"AIRecommendation"> | Date | string
  }

  export type AIRecommendationOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type AIRecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIRecommendationWhereInput | AIRecommendationWhereInput[]
    OR?: AIRecommendationWhereInput[]
    NOT?: AIRecommendationWhereInput | AIRecommendationWhereInput[]
    workspaceId?: StringFilter<"AIRecommendation"> | string
    supplierId?: StringNullableFilter<"AIRecommendation"> | string | null
    prompt?: StringFilter<"AIRecommendation"> | string
    response?: StringFilter<"AIRecommendation"> | string
    createdAt?: DateTimeFilter<"AIRecommendation"> | Date | string
  }, "id">

  export type AIRecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    _count?: AIRecommendationCountOrderByAggregateInput
    _max?: AIRecommendationMaxOrderByAggregateInput
    _min?: AIRecommendationMinOrderByAggregateInput
  }

  export type AIRecommendationScalarWhereWithAggregatesInput = {
    AND?: AIRecommendationScalarWhereWithAggregatesInput | AIRecommendationScalarWhereWithAggregatesInput[]
    OR?: AIRecommendationScalarWhereWithAggregatesInput[]
    NOT?: AIRecommendationScalarWhereWithAggregatesInput | AIRecommendationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIRecommendation"> | string
    workspaceId?: StringWithAggregatesFilter<"AIRecommendation"> | string
    supplierId?: StringNullableWithAggregatesFilter<"AIRecommendation"> | string | null
    prompt?: StringWithAggregatesFilter<"AIRecommendation"> | string
    response?: StringWithAggregatesFilter<"AIRecommendation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AIRecommendation"> | Date | string
  }

  export type RiskAssessmentWhereInput = {
    AND?: RiskAssessmentWhereInput | RiskAssessmentWhereInput[]
    OR?: RiskAssessmentWhereInput[]
    NOT?: RiskAssessmentWhereInput | RiskAssessmentWhereInput[]
    id?: StringFilter<"RiskAssessment"> | string
    supplierId?: StringFilter<"RiskAssessment"> | string
    score?: IntFilter<"RiskAssessment"> | number
    classification?: EnumRiskLevelFilter<"RiskAssessment"> | $Enums.RiskLevel
    explanation?: StringFilter<"RiskAssessment"> | string
    indicators?: StringFilter<"RiskAssessment"> | string
    simulated?: BoolFilter<"RiskAssessment"> | boolean
    createdAt?: DateTimeFilter<"RiskAssessment"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }

  export type RiskAssessmentOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    score?: SortOrder
    classification?: SortOrder
    explanation?: SortOrder
    indicators?: SortOrder
    simulated?: SortOrder
    createdAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
  }

  export type RiskAssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RiskAssessmentWhereInput | RiskAssessmentWhereInput[]
    OR?: RiskAssessmentWhereInput[]
    NOT?: RiskAssessmentWhereInput | RiskAssessmentWhereInput[]
    supplierId?: StringFilter<"RiskAssessment"> | string
    score?: IntFilter<"RiskAssessment"> | number
    classification?: EnumRiskLevelFilter<"RiskAssessment"> | $Enums.RiskLevel
    explanation?: StringFilter<"RiskAssessment"> | string
    indicators?: StringFilter<"RiskAssessment"> | string
    simulated?: BoolFilter<"RiskAssessment"> | boolean
    createdAt?: DateTimeFilter<"RiskAssessment"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }, "id">

  export type RiskAssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    score?: SortOrder
    classification?: SortOrder
    explanation?: SortOrder
    indicators?: SortOrder
    simulated?: SortOrder
    createdAt?: SortOrder
    _count?: RiskAssessmentCountOrderByAggregateInput
    _avg?: RiskAssessmentAvgOrderByAggregateInput
    _max?: RiskAssessmentMaxOrderByAggregateInput
    _min?: RiskAssessmentMinOrderByAggregateInput
    _sum?: RiskAssessmentSumOrderByAggregateInput
  }

  export type RiskAssessmentScalarWhereWithAggregatesInput = {
    AND?: RiskAssessmentScalarWhereWithAggregatesInput | RiskAssessmentScalarWhereWithAggregatesInput[]
    OR?: RiskAssessmentScalarWhereWithAggregatesInput[]
    NOT?: RiskAssessmentScalarWhereWithAggregatesInput | RiskAssessmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RiskAssessment"> | string
    supplierId?: StringWithAggregatesFilter<"RiskAssessment"> | string
    score?: IntWithAggregatesFilter<"RiskAssessment"> | number
    classification?: EnumRiskLevelWithAggregatesFilter<"RiskAssessment"> | $Enums.RiskLevel
    explanation?: StringWithAggregatesFilter<"RiskAssessment"> | string
    indicators?: StringWithAggregatesFilter<"RiskAssessment"> | string
    simulated?: BoolWithAggregatesFilter<"RiskAssessment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RiskAssessment"> | Date | string
  }

  export type WorkspaceCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutWorkspaceInput
    suppliers?: SupplierCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutWorkspaceInput
    suppliers?: SupplierUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutWorkspaceNestedInput
    suppliers?: SupplierUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutWorkspaceNestedInput
    suppliers?: SupplierUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutUsersInput
    suppliers?: SupplierCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suppliers?: SupplierUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutUsersNestedInput
    suppliers?: SupplierUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suppliers?: SupplierUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutSuppliersInput
    workspace: WorkspaceCreateNestedOneWithoutSuppliersInput
    performances?: SupplierPerformanceCreateNestedManyWithoutSupplierInput
    quotations?: QuotationCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentCreateNestedManyWithoutSupplierInput
    products?: SupplierProductCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    ownerId: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    performances?: SupplierPerformanceUncheckedCreateNestedManyWithoutSupplierInput
    quotations?: QuotationUncheckedCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentUncheckedCreateNestedManyWithoutSupplierInput
    products?: SupplierProductUncheckedCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewUncheckedCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutSuppliersNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutSuppliersNestedInput
    performances?: SupplierPerformanceUpdateManyWithoutSupplierNestedInput
    quotations?: QuotationUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performances?: SupplierPerformanceUncheckedUpdateManyWithoutSupplierNestedInput
    quotations?: QuotationUncheckedUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUncheckedUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUncheckedUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUncheckedUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    ownerId: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPerformanceCreateInput = {
    id?: string
    period: string
    onTimeRate: number
    defectRate: number
    averageDelivery: number
    orderCompletion: number
    priceConsistency: number
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutPerformancesInput
  }

  export type SupplierPerformanceUncheckedCreateInput = {
    id?: string
    supplierId: string
    period: string
    onTimeRate: number
    defectRate: number
    averageDelivery: number
    orderCompletion: number
    priceConsistency: number
    createdAt?: Date | string
  }

  export type SupplierPerformanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    defectRate?: FloatFieldUpdateOperationsInput | number
    averageDelivery?: FloatFieldUpdateOperationsInput | number
    orderCompletion?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutPerformancesNestedInput
  }

  export type SupplierPerformanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    defectRate?: FloatFieldUpdateOperationsInput | number
    averageDelivery?: FloatFieldUpdateOperationsInput | number
    orderCompletion?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPerformanceCreateManyInput = {
    id?: string
    supplierId: string
    period: string
    onTimeRate: number
    defectRate: number
    averageDelivery: number
    orderCompletion: number
    priceConsistency: number
    createdAt?: Date | string
  }

  export type SupplierPerformanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    defectRate?: FloatFieldUpdateOperationsInput | number
    averageDelivery?: FloatFieldUpdateOperationsInput | number
    orderCompletion?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPerformanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    defectRate?: FloatFieldUpdateOperationsInput | number
    averageDelivery?: FloatFieldUpdateOperationsInput | number
    orderCompletion?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationCreateInput = {
    id?: string
    reference: string
    status?: $Enums.QuotationStatus
    deliveryDays?: number | null
    taxes?: number
    shipping?: number
    paymentTerms?: string | null
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutQuotationsInput
    items?: QuotationItemCreateNestedManyWithoutQuotationInput
  }

  export type QuotationUncheckedCreateInput = {
    id?: string
    supplierId: string
    reference: string
    status?: $Enums.QuotationStatus
    deliveryDays?: number | null
    taxes?: number
    shipping?: number
    paymentTerms?: string | null
    createdAt?: Date | string
    items?: QuotationItemUncheckedCreateNestedManyWithoutQuotationInput
  }

  export type QuotationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    deliveryDays?: NullableFloatFieldUpdateOperationsInput | number | null
    taxes?: FloatFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutQuotationsNestedInput
    items?: QuotationItemUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    deliveryDays?: NullableFloatFieldUpdateOperationsInput | number | null
    taxes?: FloatFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuotationItemUncheckedUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationCreateManyInput = {
    id?: string
    supplierId: string
    reference: string
    status?: $Enums.QuotationStatus
    deliveryDays?: number | null
    taxes?: number
    shipping?: number
    paymentTerms?: string | null
    createdAt?: Date | string
  }

  export type QuotationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    deliveryDays?: NullableFloatFieldUpdateOperationsInput | number | null
    taxes?: FloatFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    deliveryDays?: NullableFloatFieldUpdateOperationsInput | number | null
    taxes?: FloatFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationItemCreateInput = {
    id?: string
    product: string
    quantity: number
    unitPrice: number
    warranty?: string | null
    quotation: QuotationCreateNestedOneWithoutItemsInput
  }

  export type QuotationItemUncheckedCreateInput = {
    id?: string
    quotationId: string
    product: string
    quantity: number
    unitPrice: number
    warranty?: string | null
  }

  export type QuotationItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    quotation?: QuotationUpdateOneRequiredWithoutItemsNestedInput
  }

  export type QuotationItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quotationId?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuotationItemCreateManyInput = {
    id?: string
    quotationId: string
    product: string
    quantity: number
    unitPrice: number
    warranty?: string | null
  }

  export type QuotationItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuotationItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quotationId?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupplierProductCreateInput = {
    id?: string
    name: string
    category: string
    unitPrice: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutProductsInput
  }

  export type SupplierProductUncheckedCreateInput = {
    id?: string
    supplierId: string
    name: string
    category: string
    unitPrice: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutProductsNestedInput
  }

  export type SupplierProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierProductCreateManyInput = {
    id?: string
    supplierId: string
    name: string
    category: string
    unitPrice: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutReviewsInput
  }

  export type SupplierReviewUncheckedCreateInput = {
    id?: string
    supplierId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type SupplierReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type SupplierReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierReviewCreateManyInput = {
    id?: string
    supplierId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type SupplierReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcurementOrderCreateInput = {
    id?: string
    reference: string
    totalAmount: number
    status?: string
    orderedAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutOrdersInput
    costBreakdown?: CostBreakdownCreateNestedOneWithoutOrderInput
    items?: ProcurementOrderItemCreateNestedManyWithoutOrderInput
  }

  export type ProcurementOrderUncheckedCreateInput = {
    id?: string
    supplierId: string
    reference: string
    totalAmount: number
    status?: string
    orderedAt?: Date | string
    costBreakdown?: CostBreakdownUncheckedCreateNestedOneWithoutOrderInput
    items?: ProcurementOrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ProcurementOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutOrdersNestedInput
    costBreakdown?: CostBreakdownUpdateOneWithoutOrderNestedInput
    items?: ProcurementOrderItemUpdateManyWithoutOrderNestedInput
  }

  export type ProcurementOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    costBreakdown?: CostBreakdownUncheckedUpdateOneWithoutOrderNestedInput
    items?: ProcurementOrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ProcurementOrderCreateManyInput = {
    id?: string
    supplierId: string
    reference: string
    totalAmount: number
    status?: string
    orderedAt?: Date | string
  }

  export type ProcurementOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcurementOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcurementOrderItemCreateInput = {
    id?: string
    product: string
    quantity: number
    unitPrice: number
    subtotal: number
    order: ProcurementOrderCreateNestedOneWithoutItemsInput
  }

  export type ProcurementOrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    product: string
    quantity: number
    unitPrice: number
    subtotal: number
  }

  export type ProcurementOrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    order?: ProcurementOrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ProcurementOrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type ProcurementOrderItemCreateManyInput = {
    id?: string
    orderId: string
    product: string
    quantity: number
    unitPrice: number
    subtotal: number
  }

  export type ProcurementOrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type ProcurementOrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type CostBreakdownCreateInput = {
    id?: string
    workspaceId: string
    supplierId?: string | null
    product?: string | null
    productCost: number
    transportation?: number
    taxes?: number
    storage?: number
    inspection?: number
    expectedDefect?: number
    delay?: number
    other?: number
    total: number
    createdAt?: Date | string
    order?: ProcurementOrderCreateNestedOneWithoutCostBreakdownInput
  }

  export type CostBreakdownUncheckedCreateInput = {
    id?: string
    orderId?: string | null
    workspaceId: string
    supplierId?: string | null
    product?: string | null
    productCost: number
    transportation?: number
    taxes?: number
    storage?: number
    inspection?: number
    expectedDefect?: number
    delay?: number
    other?: number
    total: number
    createdAt?: Date | string
  }

  export type CostBreakdownUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    productCost?: FloatFieldUpdateOperationsInput | number
    transportation?: FloatFieldUpdateOperationsInput | number
    taxes?: FloatFieldUpdateOperationsInput | number
    storage?: FloatFieldUpdateOperationsInput | number
    inspection?: FloatFieldUpdateOperationsInput | number
    expectedDefect?: FloatFieldUpdateOperationsInput | number
    delay?: FloatFieldUpdateOperationsInput | number
    other?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: ProcurementOrderUpdateOneWithoutCostBreakdownNestedInput
  }

  export type CostBreakdownUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    productCost?: FloatFieldUpdateOperationsInput | number
    transportation?: FloatFieldUpdateOperationsInput | number
    taxes?: FloatFieldUpdateOperationsInput | number
    storage?: FloatFieldUpdateOperationsInput | number
    inspection?: FloatFieldUpdateOperationsInput | number
    expectedDefect?: FloatFieldUpdateOperationsInput | number
    delay?: FloatFieldUpdateOperationsInput | number
    other?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostBreakdownCreateManyInput = {
    id?: string
    orderId?: string | null
    workspaceId: string
    supplierId?: string | null
    product?: string | null
    productCost: number
    transportation?: number
    taxes?: number
    storage?: number
    inspection?: number
    expectedDefect?: number
    delay?: number
    other?: number
    total: number
    createdAt?: Date | string
  }

  export type CostBreakdownUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    productCost?: FloatFieldUpdateOperationsInput | number
    transportation?: FloatFieldUpdateOperationsInput | number
    taxes?: FloatFieldUpdateOperationsInput | number
    storage?: FloatFieldUpdateOperationsInput | number
    inspection?: FloatFieldUpdateOperationsInput | number
    expectedDefect?: FloatFieldUpdateOperationsInput | number
    delay?: FloatFieldUpdateOperationsInput | number
    other?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostBreakdownUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    productCost?: FloatFieldUpdateOperationsInput | number
    transportation?: FloatFieldUpdateOperationsInput | number
    taxes?: FloatFieldUpdateOperationsInput | number
    storage?: FloatFieldUpdateOperationsInput | number
    inspection?: FloatFieldUpdateOperationsInput | number
    expectedDefect?: FloatFieldUpdateOperationsInput | number
    delay?: FloatFieldUpdateOperationsInput | number
    other?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIRecommendationCreateInput = {
    id?: string
    workspaceId: string
    supplierId?: string | null
    prompt: string
    response: string
    createdAt?: Date | string
  }

  export type AIRecommendationUncheckedCreateInput = {
    id?: string
    workspaceId: string
    supplierId?: string | null
    prompt: string
    response: string
    createdAt?: Date | string
  }

  export type AIRecommendationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIRecommendationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIRecommendationCreateManyInput = {
    id?: string
    workspaceId: string
    supplierId?: string | null
    prompt: string
    response: string
    createdAt?: Date | string
  }

  export type AIRecommendationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIRecommendationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAssessmentCreateInput = {
    id?: string
    score: number
    classification: $Enums.RiskLevel
    explanation: string
    indicators: string
    simulated?: boolean
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutAssessmentsInput
  }

  export type RiskAssessmentUncheckedCreateInput = {
    id?: string
    supplierId: string
    score: number
    classification: $Enums.RiskLevel
    explanation: string
    indicators: string
    simulated?: boolean
    createdAt?: Date | string
  }

  export type RiskAssessmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    classification?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    explanation?: StringFieldUpdateOperationsInput | string
    indicators?: StringFieldUpdateOperationsInput | string
    simulated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutAssessmentsNestedInput
  }

  export type RiskAssessmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    classification?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    explanation?: StringFieldUpdateOperationsInput | string
    indicators?: StringFieldUpdateOperationsInput | string
    simulated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAssessmentCreateManyInput = {
    id?: string
    supplierId: string
    score: number
    classification: $Enums.RiskLevel
    explanation: string
    indicators: string
    simulated?: boolean
    createdAt?: Date | string
  }

  export type RiskAssessmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    classification?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    explanation?: StringFieldUpdateOperationsInput | string
    indicators?: StringFieldUpdateOperationsInput | string
    simulated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAssessmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    classification?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    explanation?: StringFieldUpdateOperationsInput | string
    indicators?: StringFieldUpdateOperationsInput | string
    simulated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SupplierListRelationFilter = {
    every?: SupplierWhereInput
    some?: SupplierWhereInput
    none?: SupplierWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type WorkspaceScalarRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type EnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SupplierPerformanceListRelationFilter = {
    every?: SupplierPerformanceWhereInput
    some?: SupplierPerformanceWhereInput
    none?: SupplierPerformanceWhereInput
  }

  export type QuotationListRelationFilter = {
    every?: QuotationWhereInput
    some?: QuotationWhereInput
    none?: QuotationWhereInput
  }

  export type RiskAssessmentListRelationFilter = {
    every?: RiskAssessmentWhereInput
    some?: RiskAssessmentWhereInput
    none?: RiskAssessmentWhereInput
  }

  export type SupplierProductListRelationFilter = {
    every?: SupplierProductWhereInput
    some?: SupplierProductWhereInput
    none?: SupplierProductWhereInput
  }

  export type SupplierReviewListRelationFilter = {
    every?: SupplierReviewWhereInput
    some?: SupplierReviewWhereInput
    none?: SupplierReviewWhereInput
  }

  export type ProcurementOrderListRelationFilter = {
    every?: ProcurementOrderWhereInput
    some?: ProcurementOrderWhereInput
    none?: ProcurementOrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SupplierPerformanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuotationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RiskAssessmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcurementOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    industry?: SortOrder
    categories?: SortOrder
    averageDeliveryDays?: SortOrder
    onTimeRate?: SortOrder
    qualityRating?: SortOrder
    priceConsistency?: SortOrder
    riskScore?: SortOrder
    riskLevel?: SortOrder
    certifications?: SortOrder
    ownerId?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    averageDeliveryDays?: SortOrder
    onTimeRate?: SortOrder
    qualityRating?: SortOrder
    priceConsistency?: SortOrder
    riskScore?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    industry?: SortOrder
    categories?: SortOrder
    averageDeliveryDays?: SortOrder
    onTimeRate?: SortOrder
    qualityRating?: SortOrder
    priceConsistency?: SortOrder
    riskScore?: SortOrder
    riskLevel?: SortOrder
    certifications?: SortOrder
    ownerId?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    industry?: SortOrder
    categories?: SortOrder
    averageDeliveryDays?: SortOrder
    onTimeRate?: SortOrder
    qualityRating?: SortOrder
    priceConsistency?: SortOrder
    riskScore?: SortOrder
    riskLevel?: SortOrder
    certifications?: SortOrder
    ownerId?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    averageDeliveryDays?: SortOrder
    onTimeRate?: SortOrder
    qualityRating?: SortOrder
    priceConsistency?: SortOrder
    riskScore?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type EnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type SupplierPerformanceCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    period?: SortOrder
    onTimeRate?: SortOrder
    defectRate?: SortOrder
    averageDelivery?: SortOrder
    orderCompletion?: SortOrder
    priceConsistency?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierPerformanceAvgOrderByAggregateInput = {
    onTimeRate?: SortOrder
    defectRate?: SortOrder
    averageDelivery?: SortOrder
    orderCompletion?: SortOrder
    priceConsistency?: SortOrder
  }

  export type SupplierPerformanceMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    period?: SortOrder
    onTimeRate?: SortOrder
    defectRate?: SortOrder
    averageDelivery?: SortOrder
    orderCompletion?: SortOrder
    priceConsistency?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierPerformanceMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    period?: SortOrder
    onTimeRate?: SortOrder
    defectRate?: SortOrder
    averageDelivery?: SortOrder
    orderCompletion?: SortOrder
    priceConsistency?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierPerformanceSumOrderByAggregateInput = {
    onTimeRate?: SortOrder
    defectRate?: SortOrder
    averageDelivery?: SortOrder
    orderCompletion?: SortOrder
    priceConsistency?: SortOrder
  }

  export type EnumQuotationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuotationStatus | EnumQuotationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuotationStatusFilter<$PrismaModel> | $Enums.QuotationStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type QuotationItemListRelationFilter = {
    every?: QuotationItemWhereInput
    some?: QuotationItemWhereInput
    none?: QuotationItemWhereInput
  }

  export type QuotationItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuotationCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    deliveryDays?: SortOrder
    taxes?: SortOrder
    shipping?: SortOrder
    paymentTerms?: SortOrder
    createdAt?: SortOrder
  }

  export type QuotationAvgOrderByAggregateInput = {
    deliveryDays?: SortOrder
    taxes?: SortOrder
    shipping?: SortOrder
  }

  export type QuotationMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    deliveryDays?: SortOrder
    taxes?: SortOrder
    shipping?: SortOrder
    paymentTerms?: SortOrder
    createdAt?: SortOrder
  }

  export type QuotationMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    deliveryDays?: SortOrder
    taxes?: SortOrder
    shipping?: SortOrder
    paymentTerms?: SortOrder
    createdAt?: SortOrder
  }

  export type QuotationSumOrderByAggregateInput = {
    deliveryDays?: SortOrder
    taxes?: SortOrder
    shipping?: SortOrder
  }

  export type EnumQuotationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuotationStatus | EnumQuotationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuotationStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuotationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuotationStatusFilter<$PrismaModel>
    _max?: NestedEnumQuotationStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type QuotationScalarRelationFilter = {
    is?: QuotationWhereInput
    isNot?: QuotationWhereInput
  }

  export type QuotationItemCountOrderByAggregateInput = {
    id?: SortOrder
    quotationId?: SortOrder
    product?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    warranty?: SortOrder
  }

  export type QuotationItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type QuotationItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quotationId?: SortOrder
    product?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    warranty?: SortOrder
  }

  export type QuotationItemMinOrderByAggregateInput = {
    id?: SortOrder
    quotationId?: SortOrder
    product?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    warranty?: SortOrder
  }

  export type QuotationItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type SupplierProductCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    unitPrice?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierProductAvgOrderByAggregateInput = {
    unitPrice?: SortOrder
  }

  export type SupplierProductMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    unitPrice?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierProductMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    unitPrice?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierProductSumOrderByAggregateInput = {
    unitPrice?: SortOrder
  }

  export type SupplierReviewCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type SupplierReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierReviewMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type CostBreakdownNullableScalarRelationFilter = {
    is?: CostBreakdownWhereInput | null
    isNot?: CostBreakdownWhereInput | null
  }

  export type ProcurementOrderItemListRelationFilter = {
    every?: ProcurementOrderItemWhereInput
    some?: ProcurementOrderItemWhereInput
    none?: ProcurementOrderItemWhereInput
  }

  export type ProcurementOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcurementOrderCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    reference?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    orderedAt?: SortOrder
  }

  export type ProcurementOrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type ProcurementOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    reference?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    orderedAt?: SortOrder
  }

  export type ProcurementOrderMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    reference?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    orderedAt?: SortOrder
  }

  export type ProcurementOrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type ProcurementOrderScalarRelationFilter = {
    is?: ProcurementOrderWhereInput
    isNot?: ProcurementOrderWhereInput
  }

  export type ProcurementOrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    product?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type ProcurementOrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type ProcurementOrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    product?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type ProcurementOrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    product?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type ProcurementOrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type ProcurementOrderNullableScalarRelationFilter = {
    is?: ProcurementOrderWhereInput | null
    isNot?: ProcurementOrderWhereInput | null
  }

  export type CostBreakdownCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    workspaceId?: SortOrder
    supplierId?: SortOrder
    product?: SortOrder
    productCost?: SortOrder
    transportation?: SortOrder
    taxes?: SortOrder
    storage?: SortOrder
    inspection?: SortOrder
    expectedDefect?: SortOrder
    delay?: SortOrder
    other?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type CostBreakdownAvgOrderByAggregateInput = {
    productCost?: SortOrder
    transportation?: SortOrder
    taxes?: SortOrder
    storage?: SortOrder
    inspection?: SortOrder
    expectedDefect?: SortOrder
    delay?: SortOrder
    other?: SortOrder
    total?: SortOrder
  }

  export type CostBreakdownMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    workspaceId?: SortOrder
    supplierId?: SortOrder
    product?: SortOrder
    productCost?: SortOrder
    transportation?: SortOrder
    taxes?: SortOrder
    storage?: SortOrder
    inspection?: SortOrder
    expectedDefect?: SortOrder
    delay?: SortOrder
    other?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type CostBreakdownMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    workspaceId?: SortOrder
    supplierId?: SortOrder
    product?: SortOrder
    productCost?: SortOrder
    transportation?: SortOrder
    taxes?: SortOrder
    storage?: SortOrder
    inspection?: SortOrder
    expectedDefect?: SortOrder
    delay?: SortOrder
    other?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type CostBreakdownSumOrderByAggregateInput = {
    productCost?: SortOrder
    transportation?: SortOrder
    taxes?: SortOrder
    storage?: SortOrder
    inspection?: SortOrder
    expectedDefect?: SortOrder
    delay?: SortOrder
    other?: SortOrder
    total?: SortOrder
  }

  export type AIRecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    supplierId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type AIRecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    supplierId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type AIRecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    supplierId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RiskAssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    score?: SortOrder
    classification?: SortOrder
    explanation?: SortOrder
    indicators?: SortOrder
    simulated?: SortOrder
    createdAt?: SortOrder
  }

  export type RiskAssessmentAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type RiskAssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    score?: SortOrder
    classification?: SortOrder
    explanation?: SortOrder
    indicators?: SortOrder
    simulated?: SortOrder
    createdAt?: SortOrder
  }

  export type RiskAssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    score?: SortOrder
    classification?: SortOrder
    explanation?: SortOrder
    indicators?: SortOrder
    simulated?: SortOrder
    createdAt?: SortOrder
  }

  export type RiskAssessmentSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput> | UserCreateWithoutWorkspaceInput[] | UserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput | UserCreateOrConnectWithoutWorkspaceInput[]
    createMany?: UserCreateManyWorkspaceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SupplierCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<SupplierCreateWithoutWorkspaceInput, SupplierUncheckedCreateWithoutWorkspaceInput> | SupplierCreateWithoutWorkspaceInput[] | SupplierUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: SupplierCreateOrConnectWithoutWorkspaceInput | SupplierCreateOrConnectWithoutWorkspaceInput[]
    createMany?: SupplierCreateManyWorkspaceInputEnvelope
    connect?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput> | UserCreateWithoutWorkspaceInput[] | UserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput | UserCreateOrConnectWithoutWorkspaceInput[]
    createMany?: UserCreateManyWorkspaceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SupplierUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<SupplierCreateWithoutWorkspaceInput, SupplierUncheckedCreateWithoutWorkspaceInput> | SupplierCreateWithoutWorkspaceInput[] | SupplierUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: SupplierCreateOrConnectWithoutWorkspaceInput | SupplierCreateOrConnectWithoutWorkspaceInput[]
    createMany?: SupplierCreateManyWorkspaceInputEnvelope
    connect?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput> | UserCreateWithoutWorkspaceInput[] | UserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput | UserCreateOrConnectWithoutWorkspaceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWorkspaceInput | UserUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: UserCreateManyWorkspaceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWorkspaceInput | UserUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWorkspaceInput | UserUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SupplierUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<SupplierCreateWithoutWorkspaceInput, SupplierUncheckedCreateWithoutWorkspaceInput> | SupplierCreateWithoutWorkspaceInput[] | SupplierUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: SupplierCreateOrConnectWithoutWorkspaceInput | SupplierCreateOrConnectWithoutWorkspaceInput[]
    upsert?: SupplierUpsertWithWhereUniqueWithoutWorkspaceInput | SupplierUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: SupplierCreateManyWorkspaceInputEnvelope
    set?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    disconnect?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    delete?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    connect?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    update?: SupplierUpdateWithWhereUniqueWithoutWorkspaceInput | SupplierUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: SupplierUpdateManyWithWhereWithoutWorkspaceInput | SupplierUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: SupplierScalarWhereInput | SupplierScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput> | UserCreateWithoutWorkspaceInput[] | UserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput | UserCreateOrConnectWithoutWorkspaceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWorkspaceInput | UserUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: UserCreateManyWorkspaceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWorkspaceInput | UserUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWorkspaceInput | UserUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SupplierUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<SupplierCreateWithoutWorkspaceInput, SupplierUncheckedCreateWithoutWorkspaceInput> | SupplierCreateWithoutWorkspaceInput[] | SupplierUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: SupplierCreateOrConnectWithoutWorkspaceInput | SupplierCreateOrConnectWithoutWorkspaceInput[]
    upsert?: SupplierUpsertWithWhereUniqueWithoutWorkspaceInput | SupplierUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: SupplierCreateManyWorkspaceInputEnvelope
    set?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    disconnect?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    delete?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    connect?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    update?: SupplierUpdateWithWhereUniqueWithoutWorkspaceInput | SupplierUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: SupplierUpdateManyWithWhereWithoutWorkspaceInput | SupplierUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: SupplierScalarWhereInput | SupplierScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutUsersInput = {
    create?: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUsersInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type SupplierCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SupplierCreateWithoutOwnerInput, SupplierUncheckedCreateWithoutOwnerInput> | SupplierCreateWithoutOwnerInput[] | SupplierUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SupplierCreateOrConnectWithoutOwnerInput | SupplierCreateOrConnectWithoutOwnerInput[]
    createMany?: SupplierCreateManyOwnerInputEnvelope
    connect?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
  }

  export type SupplierUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SupplierCreateWithoutOwnerInput, SupplierUncheckedCreateWithoutOwnerInput> | SupplierCreateWithoutOwnerInput[] | SupplierUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SupplierCreateOrConnectWithoutOwnerInput | SupplierCreateOrConnectWithoutOwnerInput[]
    createMany?: SupplierCreateManyOwnerInputEnvelope
    connect?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type WorkspaceUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUsersInput
    upsert?: WorkspaceUpsertWithoutUsersInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutUsersInput, WorkspaceUpdateWithoutUsersInput>, WorkspaceUncheckedUpdateWithoutUsersInput>
  }

  export type SupplierUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SupplierCreateWithoutOwnerInput, SupplierUncheckedCreateWithoutOwnerInput> | SupplierCreateWithoutOwnerInput[] | SupplierUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SupplierCreateOrConnectWithoutOwnerInput | SupplierCreateOrConnectWithoutOwnerInput[]
    upsert?: SupplierUpsertWithWhereUniqueWithoutOwnerInput | SupplierUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SupplierCreateManyOwnerInputEnvelope
    set?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    disconnect?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    delete?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    connect?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    update?: SupplierUpdateWithWhereUniqueWithoutOwnerInput | SupplierUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SupplierUpdateManyWithWhereWithoutOwnerInput | SupplierUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SupplierScalarWhereInput | SupplierScalarWhereInput[]
  }

  export type SupplierUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SupplierCreateWithoutOwnerInput, SupplierUncheckedCreateWithoutOwnerInput> | SupplierCreateWithoutOwnerInput[] | SupplierUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SupplierCreateOrConnectWithoutOwnerInput | SupplierCreateOrConnectWithoutOwnerInput[]
    upsert?: SupplierUpsertWithWhereUniqueWithoutOwnerInput | SupplierUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SupplierCreateManyOwnerInputEnvelope
    set?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    disconnect?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    delete?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    connect?: SupplierWhereUniqueInput | SupplierWhereUniqueInput[]
    update?: SupplierUpdateWithWhereUniqueWithoutOwnerInput | SupplierUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SupplierUpdateManyWithWhereWithoutOwnerInput | SupplierUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SupplierScalarWhereInput | SupplierScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSuppliersInput = {
    create?: XOR<UserCreateWithoutSuppliersInput, UserUncheckedCreateWithoutSuppliersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuppliersInput
    connect?: UserWhereUniqueInput
  }

  export type WorkspaceCreateNestedOneWithoutSuppliersInput = {
    create?: XOR<WorkspaceCreateWithoutSuppliersInput, WorkspaceUncheckedCreateWithoutSuppliersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSuppliersInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type SupplierPerformanceCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierPerformanceCreateWithoutSupplierInput, SupplierPerformanceUncheckedCreateWithoutSupplierInput> | SupplierPerformanceCreateWithoutSupplierInput[] | SupplierPerformanceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierPerformanceCreateOrConnectWithoutSupplierInput | SupplierPerformanceCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierPerformanceCreateManySupplierInputEnvelope
    connect?: SupplierPerformanceWhereUniqueInput | SupplierPerformanceWhereUniqueInput[]
  }

  export type QuotationCreateNestedManyWithoutSupplierInput = {
    create?: XOR<QuotationCreateWithoutSupplierInput, QuotationUncheckedCreateWithoutSupplierInput> | QuotationCreateWithoutSupplierInput[] | QuotationUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: QuotationCreateOrConnectWithoutSupplierInput | QuotationCreateOrConnectWithoutSupplierInput[]
    createMany?: QuotationCreateManySupplierInputEnvelope
    connect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
  }

  export type RiskAssessmentCreateNestedManyWithoutSupplierInput = {
    create?: XOR<RiskAssessmentCreateWithoutSupplierInput, RiskAssessmentUncheckedCreateWithoutSupplierInput> | RiskAssessmentCreateWithoutSupplierInput[] | RiskAssessmentUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: RiskAssessmentCreateOrConnectWithoutSupplierInput | RiskAssessmentCreateOrConnectWithoutSupplierInput[]
    createMany?: RiskAssessmentCreateManySupplierInputEnvelope
    connect?: RiskAssessmentWhereUniqueInput | RiskAssessmentWhereUniqueInput[]
  }

  export type SupplierProductCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierProductCreateWithoutSupplierInput, SupplierProductUncheckedCreateWithoutSupplierInput> | SupplierProductCreateWithoutSupplierInput[] | SupplierProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierProductCreateOrConnectWithoutSupplierInput | SupplierProductCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierProductCreateManySupplierInputEnvelope
    connect?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
  }

  export type SupplierReviewCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierReviewCreateWithoutSupplierInput, SupplierReviewUncheckedCreateWithoutSupplierInput> | SupplierReviewCreateWithoutSupplierInput[] | SupplierReviewUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierReviewCreateOrConnectWithoutSupplierInput | SupplierReviewCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierReviewCreateManySupplierInputEnvelope
    connect?: SupplierReviewWhereUniqueInput | SupplierReviewWhereUniqueInput[]
  }

  export type ProcurementOrderCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ProcurementOrderCreateWithoutSupplierInput, ProcurementOrderUncheckedCreateWithoutSupplierInput> | ProcurementOrderCreateWithoutSupplierInput[] | ProcurementOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProcurementOrderCreateOrConnectWithoutSupplierInput | ProcurementOrderCreateOrConnectWithoutSupplierInput[]
    createMany?: ProcurementOrderCreateManySupplierInputEnvelope
    connect?: ProcurementOrderWhereUniqueInput | ProcurementOrderWhereUniqueInput[]
  }

  export type SupplierPerformanceUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierPerformanceCreateWithoutSupplierInput, SupplierPerformanceUncheckedCreateWithoutSupplierInput> | SupplierPerformanceCreateWithoutSupplierInput[] | SupplierPerformanceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierPerformanceCreateOrConnectWithoutSupplierInput | SupplierPerformanceCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierPerformanceCreateManySupplierInputEnvelope
    connect?: SupplierPerformanceWhereUniqueInput | SupplierPerformanceWhereUniqueInput[]
  }

  export type QuotationUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<QuotationCreateWithoutSupplierInput, QuotationUncheckedCreateWithoutSupplierInput> | QuotationCreateWithoutSupplierInput[] | QuotationUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: QuotationCreateOrConnectWithoutSupplierInput | QuotationCreateOrConnectWithoutSupplierInput[]
    createMany?: QuotationCreateManySupplierInputEnvelope
    connect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
  }

  export type RiskAssessmentUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<RiskAssessmentCreateWithoutSupplierInput, RiskAssessmentUncheckedCreateWithoutSupplierInput> | RiskAssessmentCreateWithoutSupplierInput[] | RiskAssessmentUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: RiskAssessmentCreateOrConnectWithoutSupplierInput | RiskAssessmentCreateOrConnectWithoutSupplierInput[]
    createMany?: RiskAssessmentCreateManySupplierInputEnvelope
    connect?: RiskAssessmentWhereUniqueInput | RiskAssessmentWhereUniqueInput[]
  }

  export type SupplierProductUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierProductCreateWithoutSupplierInput, SupplierProductUncheckedCreateWithoutSupplierInput> | SupplierProductCreateWithoutSupplierInput[] | SupplierProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierProductCreateOrConnectWithoutSupplierInput | SupplierProductCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierProductCreateManySupplierInputEnvelope
    connect?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
  }

  export type SupplierReviewUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierReviewCreateWithoutSupplierInput, SupplierReviewUncheckedCreateWithoutSupplierInput> | SupplierReviewCreateWithoutSupplierInput[] | SupplierReviewUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierReviewCreateOrConnectWithoutSupplierInput | SupplierReviewCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierReviewCreateManySupplierInputEnvelope
    connect?: SupplierReviewWhereUniqueInput | SupplierReviewWhereUniqueInput[]
  }

  export type ProcurementOrderUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ProcurementOrderCreateWithoutSupplierInput, ProcurementOrderUncheckedCreateWithoutSupplierInput> | ProcurementOrderCreateWithoutSupplierInput[] | ProcurementOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProcurementOrderCreateOrConnectWithoutSupplierInput | ProcurementOrderCreateOrConnectWithoutSupplierInput[]
    createMany?: ProcurementOrderCreateManySupplierInputEnvelope
    connect?: ProcurementOrderWhereUniqueInput | ProcurementOrderWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRiskLevelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLevel
  }

  export type UserUpdateOneRequiredWithoutSuppliersNestedInput = {
    create?: XOR<UserCreateWithoutSuppliersInput, UserUncheckedCreateWithoutSuppliersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuppliersInput
    upsert?: UserUpsertWithoutSuppliersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSuppliersInput, UserUpdateWithoutSuppliersInput>, UserUncheckedUpdateWithoutSuppliersInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutSuppliersNestedInput = {
    create?: XOR<WorkspaceCreateWithoutSuppliersInput, WorkspaceUncheckedCreateWithoutSuppliersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSuppliersInput
    upsert?: WorkspaceUpsertWithoutSuppliersInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutSuppliersInput, WorkspaceUpdateWithoutSuppliersInput>, WorkspaceUncheckedUpdateWithoutSuppliersInput>
  }

  export type SupplierPerformanceUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierPerformanceCreateWithoutSupplierInput, SupplierPerformanceUncheckedCreateWithoutSupplierInput> | SupplierPerformanceCreateWithoutSupplierInput[] | SupplierPerformanceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierPerformanceCreateOrConnectWithoutSupplierInput | SupplierPerformanceCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierPerformanceUpsertWithWhereUniqueWithoutSupplierInput | SupplierPerformanceUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierPerformanceCreateManySupplierInputEnvelope
    set?: SupplierPerformanceWhereUniqueInput | SupplierPerformanceWhereUniqueInput[]
    disconnect?: SupplierPerformanceWhereUniqueInput | SupplierPerformanceWhereUniqueInput[]
    delete?: SupplierPerformanceWhereUniqueInput | SupplierPerformanceWhereUniqueInput[]
    connect?: SupplierPerformanceWhereUniqueInput | SupplierPerformanceWhereUniqueInput[]
    update?: SupplierPerformanceUpdateWithWhereUniqueWithoutSupplierInput | SupplierPerformanceUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierPerformanceUpdateManyWithWhereWithoutSupplierInput | SupplierPerformanceUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierPerformanceScalarWhereInput | SupplierPerformanceScalarWhereInput[]
  }

  export type QuotationUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<QuotationCreateWithoutSupplierInput, QuotationUncheckedCreateWithoutSupplierInput> | QuotationCreateWithoutSupplierInput[] | QuotationUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: QuotationCreateOrConnectWithoutSupplierInput | QuotationCreateOrConnectWithoutSupplierInput[]
    upsert?: QuotationUpsertWithWhereUniqueWithoutSupplierInput | QuotationUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: QuotationCreateManySupplierInputEnvelope
    set?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    disconnect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    delete?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    connect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    update?: QuotationUpdateWithWhereUniqueWithoutSupplierInput | QuotationUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: QuotationUpdateManyWithWhereWithoutSupplierInput | QuotationUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: QuotationScalarWhereInput | QuotationScalarWhereInput[]
  }

  export type RiskAssessmentUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<RiskAssessmentCreateWithoutSupplierInput, RiskAssessmentUncheckedCreateWithoutSupplierInput> | RiskAssessmentCreateWithoutSupplierInput[] | RiskAssessmentUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: RiskAssessmentCreateOrConnectWithoutSupplierInput | RiskAssessmentCreateOrConnectWithoutSupplierInput[]
    upsert?: RiskAssessmentUpsertWithWhereUniqueWithoutSupplierInput | RiskAssessmentUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: RiskAssessmentCreateManySupplierInputEnvelope
    set?: RiskAssessmentWhereUniqueInput | RiskAssessmentWhereUniqueInput[]
    disconnect?: RiskAssessmentWhereUniqueInput | RiskAssessmentWhereUniqueInput[]
    delete?: RiskAssessmentWhereUniqueInput | RiskAssessmentWhereUniqueInput[]
    connect?: RiskAssessmentWhereUniqueInput | RiskAssessmentWhereUniqueInput[]
    update?: RiskAssessmentUpdateWithWhereUniqueWithoutSupplierInput | RiskAssessmentUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: RiskAssessmentUpdateManyWithWhereWithoutSupplierInput | RiskAssessmentUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: RiskAssessmentScalarWhereInput | RiskAssessmentScalarWhereInput[]
  }

  export type SupplierProductUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierProductCreateWithoutSupplierInput, SupplierProductUncheckedCreateWithoutSupplierInput> | SupplierProductCreateWithoutSupplierInput[] | SupplierProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierProductCreateOrConnectWithoutSupplierInput | SupplierProductCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierProductUpsertWithWhereUniqueWithoutSupplierInput | SupplierProductUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierProductCreateManySupplierInputEnvelope
    set?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    disconnect?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    delete?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    connect?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    update?: SupplierProductUpdateWithWhereUniqueWithoutSupplierInput | SupplierProductUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierProductUpdateManyWithWhereWithoutSupplierInput | SupplierProductUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierProductScalarWhereInput | SupplierProductScalarWhereInput[]
  }

  export type SupplierReviewUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierReviewCreateWithoutSupplierInput, SupplierReviewUncheckedCreateWithoutSupplierInput> | SupplierReviewCreateWithoutSupplierInput[] | SupplierReviewUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierReviewCreateOrConnectWithoutSupplierInput | SupplierReviewCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierReviewUpsertWithWhereUniqueWithoutSupplierInput | SupplierReviewUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierReviewCreateManySupplierInputEnvelope
    set?: SupplierReviewWhereUniqueInput | SupplierReviewWhereUniqueInput[]
    disconnect?: SupplierReviewWhereUniqueInput | SupplierReviewWhereUniqueInput[]
    delete?: SupplierReviewWhereUniqueInput | SupplierReviewWhereUniqueInput[]
    connect?: SupplierReviewWhereUniqueInput | SupplierReviewWhereUniqueInput[]
    update?: SupplierReviewUpdateWithWhereUniqueWithoutSupplierInput | SupplierReviewUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierReviewUpdateManyWithWhereWithoutSupplierInput | SupplierReviewUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierReviewScalarWhereInput | SupplierReviewScalarWhereInput[]
  }

  export type ProcurementOrderUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ProcurementOrderCreateWithoutSupplierInput, ProcurementOrderUncheckedCreateWithoutSupplierInput> | ProcurementOrderCreateWithoutSupplierInput[] | ProcurementOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProcurementOrderCreateOrConnectWithoutSupplierInput | ProcurementOrderCreateOrConnectWithoutSupplierInput[]
    upsert?: ProcurementOrderUpsertWithWhereUniqueWithoutSupplierInput | ProcurementOrderUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ProcurementOrderCreateManySupplierInputEnvelope
    set?: ProcurementOrderWhereUniqueInput | ProcurementOrderWhereUniqueInput[]
    disconnect?: ProcurementOrderWhereUniqueInput | ProcurementOrderWhereUniqueInput[]
    delete?: ProcurementOrderWhereUniqueInput | ProcurementOrderWhereUniqueInput[]
    connect?: ProcurementOrderWhereUniqueInput | ProcurementOrderWhereUniqueInput[]
    update?: ProcurementOrderUpdateWithWhereUniqueWithoutSupplierInput | ProcurementOrderUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ProcurementOrderUpdateManyWithWhereWithoutSupplierInput | ProcurementOrderUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ProcurementOrderScalarWhereInput | ProcurementOrderScalarWhereInput[]
  }

  export type SupplierPerformanceUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierPerformanceCreateWithoutSupplierInput, SupplierPerformanceUncheckedCreateWithoutSupplierInput> | SupplierPerformanceCreateWithoutSupplierInput[] | SupplierPerformanceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierPerformanceCreateOrConnectWithoutSupplierInput | SupplierPerformanceCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierPerformanceUpsertWithWhereUniqueWithoutSupplierInput | SupplierPerformanceUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierPerformanceCreateManySupplierInputEnvelope
    set?: SupplierPerformanceWhereUniqueInput | SupplierPerformanceWhereUniqueInput[]
    disconnect?: SupplierPerformanceWhereUniqueInput | SupplierPerformanceWhereUniqueInput[]
    delete?: SupplierPerformanceWhereUniqueInput | SupplierPerformanceWhereUniqueInput[]
    connect?: SupplierPerformanceWhereUniqueInput | SupplierPerformanceWhereUniqueInput[]
    update?: SupplierPerformanceUpdateWithWhereUniqueWithoutSupplierInput | SupplierPerformanceUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierPerformanceUpdateManyWithWhereWithoutSupplierInput | SupplierPerformanceUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierPerformanceScalarWhereInput | SupplierPerformanceScalarWhereInput[]
  }

  export type QuotationUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<QuotationCreateWithoutSupplierInput, QuotationUncheckedCreateWithoutSupplierInput> | QuotationCreateWithoutSupplierInput[] | QuotationUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: QuotationCreateOrConnectWithoutSupplierInput | QuotationCreateOrConnectWithoutSupplierInput[]
    upsert?: QuotationUpsertWithWhereUniqueWithoutSupplierInput | QuotationUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: QuotationCreateManySupplierInputEnvelope
    set?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    disconnect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    delete?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    connect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    update?: QuotationUpdateWithWhereUniqueWithoutSupplierInput | QuotationUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: QuotationUpdateManyWithWhereWithoutSupplierInput | QuotationUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: QuotationScalarWhereInput | QuotationScalarWhereInput[]
  }

  export type RiskAssessmentUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<RiskAssessmentCreateWithoutSupplierInput, RiskAssessmentUncheckedCreateWithoutSupplierInput> | RiskAssessmentCreateWithoutSupplierInput[] | RiskAssessmentUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: RiskAssessmentCreateOrConnectWithoutSupplierInput | RiskAssessmentCreateOrConnectWithoutSupplierInput[]
    upsert?: RiskAssessmentUpsertWithWhereUniqueWithoutSupplierInput | RiskAssessmentUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: RiskAssessmentCreateManySupplierInputEnvelope
    set?: RiskAssessmentWhereUniqueInput | RiskAssessmentWhereUniqueInput[]
    disconnect?: RiskAssessmentWhereUniqueInput | RiskAssessmentWhereUniqueInput[]
    delete?: RiskAssessmentWhereUniqueInput | RiskAssessmentWhereUniqueInput[]
    connect?: RiskAssessmentWhereUniqueInput | RiskAssessmentWhereUniqueInput[]
    update?: RiskAssessmentUpdateWithWhereUniqueWithoutSupplierInput | RiskAssessmentUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: RiskAssessmentUpdateManyWithWhereWithoutSupplierInput | RiskAssessmentUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: RiskAssessmentScalarWhereInput | RiskAssessmentScalarWhereInput[]
  }

  export type SupplierProductUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierProductCreateWithoutSupplierInput, SupplierProductUncheckedCreateWithoutSupplierInput> | SupplierProductCreateWithoutSupplierInput[] | SupplierProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierProductCreateOrConnectWithoutSupplierInput | SupplierProductCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierProductUpsertWithWhereUniqueWithoutSupplierInput | SupplierProductUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierProductCreateManySupplierInputEnvelope
    set?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    disconnect?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    delete?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    connect?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    update?: SupplierProductUpdateWithWhereUniqueWithoutSupplierInput | SupplierProductUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierProductUpdateManyWithWhereWithoutSupplierInput | SupplierProductUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierProductScalarWhereInput | SupplierProductScalarWhereInput[]
  }

  export type SupplierReviewUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierReviewCreateWithoutSupplierInput, SupplierReviewUncheckedCreateWithoutSupplierInput> | SupplierReviewCreateWithoutSupplierInput[] | SupplierReviewUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierReviewCreateOrConnectWithoutSupplierInput | SupplierReviewCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierReviewUpsertWithWhereUniqueWithoutSupplierInput | SupplierReviewUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierReviewCreateManySupplierInputEnvelope
    set?: SupplierReviewWhereUniqueInput | SupplierReviewWhereUniqueInput[]
    disconnect?: SupplierReviewWhereUniqueInput | SupplierReviewWhereUniqueInput[]
    delete?: SupplierReviewWhereUniqueInput | SupplierReviewWhereUniqueInput[]
    connect?: SupplierReviewWhereUniqueInput | SupplierReviewWhereUniqueInput[]
    update?: SupplierReviewUpdateWithWhereUniqueWithoutSupplierInput | SupplierReviewUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierReviewUpdateManyWithWhereWithoutSupplierInput | SupplierReviewUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierReviewScalarWhereInput | SupplierReviewScalarWhereInput[]
  }

  export type ProcurementOrderUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ProcurementOrderCreateWithoutSupplierInput, ProcurementOrderUncheckedCreateWithoutSupplierInput> | ProcurementOrderCreateWithoutSupplierInput[] | ProcurementOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProcurementOrderCreateOrConnectWithoutSupplierInput | ProcurementOrderCreateOrConnectWithoutSupplierInput[]
    upsert?: ProcurementOrderUpsertWithWhereUniqueWithoutSupplierInput | ProcurementOrderUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ProcurementOrderCreateManySupplierInputEnvelope
    set?: ProcurementOrderWhereUniqueInput | ProcurementOrderWhereUniqueInput[]
    disconnect?: ProcurementOrderWhereUniqueInput | ProcurementOrderWhereUniqueInput[]
    delete?: ProcurementOrderWhereUniqueInput | ProcurementOrderWhereUniqueInput[]
    connect?: ProcurementOrderWhereUniqueInput | ProcurementOrderWhereUniqueInput[]
    update?: ProcurementOrderUpdateWithWhereUniqueWithoutSupplierInput | ProcurementOrderUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ProcurementOrderUpdateManyWithWhereWithoutSupplierInput | ProcurementOrderUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ProcurementOrderScalarWhereInput | ProcurementOrderScalarWhereInput[]
  }

  export type SupplierCreateNestedOneWithoutPerformancesInput = {
    create?: XOR<SupplierCreateWithoutPerformancesInput, SupplierUncheckedCreateWithoutPerformancesInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPerformancesInput
    connect?: SupplierWhereUniqueInput
  }

  export type SupplierUpdateOneRequiredWithoutPerformancesNestedInput = {
    create?: XOR<SupplierCreateWithoutPerformancesInput, SupplierUncheckedCreateWithoutPerformancesInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPerformancesInput
    upsert?: SupplierUpsertWithoutPerformancesInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutPerformancesInput, SupplierUpdateWithoutPerformancesInput>, SupplierUncheckedUpdateWithoutPerformancesInput>
  }

  export type SupplierCreateNestedOneWithoutQuotationsInput = {
    create?: XOR<SupplierCreateWithoutQuotationsInput, SupplierUncheckedCreateWithoutQuotationsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutQuotationsInput
    connect?: SupplierWhereUniqueInput
  }

  export type QuotationItemCreateNestedManyWithoutQuotationInput = {
    create?: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput> | QuotationItemCreateWithoutQuotationInput[] | QuotationItemUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: QuotationItemCreateOrConnectWithoutQuotationInput | QuotationItemCreateOrConnectWithoutQuotationInput[]
    createMany?: QuotationItemCreateManyQuotationInputEnvelope
    connect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
  }

  export type QuotationItemUncheckedCreateNestedManyWithoutQuotationInput = {
    create?: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput> | QuotationItemCreateWithoutQuotationInput[] | QuotationItemUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: QuotationItemCreateOrConnectWithoutQuotationInput | QuotationItemCreateOrConnectWithoutQuotationInput[]
    createMany?: QuotationItemCreateManyQuotationInputEnvelope
    connect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
  }

  export type EnumQuotationStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuotationStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SupplierUpdateOneRequiredWithoutQuotationsNestedInput = {
    create?: XOR<SupplierCreateWithoutQuotationsInput, SupplierUncheckedCreateWithoutQuotationsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutQuotationsInput
    upsert?: SupplierUpsertWithoutQuotationsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutQuotationsInput, SupplierUpdateWithoutQuotationsInput>, SupplierUncheckedUpdateWithoutQuotationsInput>
  }

  export type QuotationItemUpdateManyWithoutQuotationNestedInput = {
    create?: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput> | QuotationItemCreateWithoutQuotationInput[] | QuotationItemUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: QuotationItemCreateOrConnectWithoutQuotationInput | QuotationItemCreateOrConnectWithoutQuotationInput[]
    upsert?: QuotationItemUpsertWithWhereUniqueWithoutQuotationInput | QuotationItemUpsertWithWhereUniqueWithoutQuotationInput[]
    createMany?: QuotationItemCreateManyQuotationInputEnvelope
    set?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    disconnect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    delete?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    connect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    update?: QuotationItemUpdateWithWhereUniqueWithoutQuotationInput | QuotationItemUpdateWithWhereUniqueWithoutQuotationInput[]
    updateMany?: QuotationItemUpdateManyWithWhereWithoutQuotationInput | QuotationItemUpdateManyWithWhereWithoutQuotationInput[]
    deleteMany?: QuotationItemScalarWhereInput | QuotationItemScalarWhereInput[]
  }

  export type QuotationItemUncheckedUpdateManyWithoutQuotationNestedInput = {
    create?: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput> | QuotationItemCreateWithoutQuotationInput[] | QuotationItemUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: QuotationItemCreateOrConnectWithoutQuotationInput | QuotationItemCreateOrConnectWithoutQuotationInput[]
    upsert?: QuotationItemUpsertWithWhereUniqueWithoutQuotationInput | QuotationItemUpsertWithWhereUniqueWithoutQuotationInput[]
    createMany?: QuotationItemCreateManyQuotationInputEnvelope
    set?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    disconnect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    delete?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    connect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    update?: QuotationItemUpdateWithWhereUniqueWithoutQuotationInput | QuotationItemUpdateWithWhereUniqueWithoutQuotationInput[]
    updateMany?: QuotationItemUpdateManyWithWhereWithoutQuotationInput | QuotationItemUpdateManyWithWhereWithoutQuotationInput[]
    deleteMany?: QuotationItemScalarWhereInput | QuotationItemScalarWhereInput[]
  }

  export type QuotationCreateNestedOneWithoutItemsInput = {
    create?: XOR<QuotationCreateWithoutItemsInput, QuotationUncheckedCreateWithoutItemsInput>
    connectOrCreate?: QuotationCreateOrConnectWithoutItemsInput
    connect?: QuotationWhereUniqueInput
  }

  export type QuotationUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<QuotationCreateWithoutItemsInput, QuotationUncheckedCreateWithoutItemsInput>
    connectOrCreate?: QuotationCreateOrConnectWithoutItemsInput
    upsert?: QuotationUpsertWithoutItemsInput
    connect?: QuotationWhereUniqueInput
    update?: XOR<XOR<QuotationUpdateToOneWithWhereWithoutItemsInput, QuotationUpdateWithoutItemsInput>, QuotationUncheckedUpdateWithoutItemsInput>
  }

  export type SupplierCreateNestedOneWithoutProductsInput = {
    create?: XOR<SupplierCreateWithoutProductsInput, SupplierUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutProductsInput
    connect?: SupplierWhereUniqueInput
  }

  export type SupplierUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<SupplierCreateWithoutProductsInput, SupplierUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutProductsInput
    upsert?: SupplierUpsertWithoutProductsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutProductsInput, SupplierUpdateWithoutProductsInput>, SupplierUncheckedUpdateWithoutProductsInput>
  }

  export type SupplierCreateNestedOneWithoutReviewsInput = {
    create?: XOR<SupplierCreateWithoutReviewsInput, SupplierUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutReviewsInput
    connect?: SupplierWhereUniqueInput
  }

  export type SupplierUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<SupplierCreateWithoutReviewsInput, SupplierUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutReviewsInput
    upsert?: SupplierUpsertWithoutReviewsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutReviewsInput, SupplierUpdateWithoutReviewsInput>, SupplierUncheckedUpdateWithoutReviewsInput>
  }

  export type SupplierCreateNestedOneWithoutOrdersInput = {
    create?: XOR<SupplierCreateWithoutOrdersInput, SupplierUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutOrdersInput
    connect?: SupplierWhereUniqueInput
  }

  export type CostBreakdownCreateNestedOneWithoutOrderInput = {
    create?: XOR<CostBreakdownCreateWithoutOrderInput, CostBreakdownUncheckedCreateWithoutOrderInput>
    connectOrCreate?: CostBreakdownCreateOrConnectWithoutOrderInput
    connect?: CostBreakdownWhereUniqueInput
  }

  export type ProcurementOrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProcurementOrderItemCreateWithoutOrderInput, ProcurementOrderItemUncheckedCreateWithoutOrderInput> | ProcurementOrderItemCreateWithoutOrderInput[] | ProcurementOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProcurementOrderItemCreateOrConnectWithoutOrderInput | ProcurementOrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: ProcurementOrderItemCreateManyOrderInputEnvelope
    connect?: ProcurementOrderItemWhereUniqueInput | ProcurementOrderItemWhereUniqueInput[]
  }

  export type CostBreakdownUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<CostBreakdownCreateWithoutOrderInput, CostBreakdownUncheckedCreateWithoutOrderInput>
    connectOrCreate?: CostBreakdownCreateOrConnectWithoutOrderInput
    connect?: CostBreakdownWhereUniqueInput
  }

  export type ProcurementOrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProcurementOrderItemCreateWithoutOrderInput, ProcurementOrderItemUncheckedCreateWithoutOrderInput> | ProcurementOrderItemCreateWithoutOrderInput[] | ProcurementOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProcurementOrderItemCreateOrConnectWithoutOrderInput | ProcurementOrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: ProcurementOrderItemCreateManyOrderInputEnvelope
    connect?: ProcurementOrderItemWhereUniqueInput | ProcurementOrderItemWhereUniqueInput[]
  }

  export type SupplierUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<SupplierCreateWithoutOrdersInput, SupplierUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutOrdersInput
    upsert?: SupplierUpsertWithoutOrdersInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutOrdersInput, SupplierUpdateWithoutOrdersInput>, SupplierUncheckedUpdateWithoutOrdersInput>
  }

  export type CostBreakdownUpdateOneWithoutOrderNestedInput = {
    create?: XOR<CostBreakdownCreateWithoutOrderInput, CostBreakdownUncheckedCreateWithoutOrderInput>
    connectOrCreate?: CostBreakdownCreateOrConnectWithoutOrderInput
    upsert?: CostBreakdownUpsertWithoutOrderInput
    disconnect?: CostBreakdownWhereInput | boolean
    delete?: CostBreakdownWhereInput | boolean
    connect?: CostBreakdownWhereUniqueInput
    update?: XOR<XOR<CostBreakdownUpdateToOneWithWhereWithoutOrderInput, CostBreakdownUpdateWithoutOrderInput>, CostBreakdownUncheckedUpdateWithoutOrderInput>
  }

  export type ProcurementOrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProcurementOrderItemCreateWithoutOrderInput, ProcurementOrderItemUncheckedCreateWithoutOrderInput> | ProcurementOrderItemCreateWithoutOrderInput[] | ProcurementOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProcurementOrderItemCreateOrConnectWithoutOrderInput | ProcurementOrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: ProcurementOrderItemUpsertWithWhereUniqueWithoutOrderInput | ProcurementOrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProcurementOrderItemCreateManyOrderInputEnvelope
    set?: ProcurementOrderItemWhereUniqueInput | ProcurementOrderItemWhereUniqueInput[]
    disconnect?: ProcurementOrderItemWhereUniqueInput | ProcurementOrderItemWhereUniqueInput[]
    delete?: ProcurementOrderItemWhereUniqueInput | ProcurementOrderItemWhereUniqueInput[]
    connect?: ProcurementOrderItemWhereUniqueInput | ProcurementOrderItemWhereUniqueInput[]
    update?: ProcurementOrderItemUpdateWithWhereUniqueWithoutOrderInput | ProcurementOrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProcurementOrderItemUpdateManyWithWhereWithoutOrderInput | ProcurementOrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProcurementOrderItemScalarWhereInput | ProcurementOrderItemScalarWhereInput[]
  }

  export type CostBreakdownUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<CostBreakdownCreateWithoutOrderInput, CostBreakdownUncheckedCreateWithoutOrderInput>
    connectOrCreate?: CostBreakdownCreateOrConnectWithoutOrderInput
    upsert?: CostBreakdownUpsertWithoutOrderInput
    disconnect?: CostBreakdownWhereInput | boolean
    delete?: CostBreakdownWhereInput | boolean
    connect?: CostBreakdownWhereUniqueInput
    update?: XOR<XOR<CostBreakdownUpdateToOneWithWhereWithoutOrderInput, CostBreakdownUpdateWithoutOrderInput>, CostBreakdownUncheckedUpdateWithoutOrderInput>
  }

  export type ProcurementOrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProcurementOrderItemCreateWithoutOrderInput, ProcurementOrderItemUncheckedCreateWithoutOrderInput> | ProcurementOrderItemCreateWithoutOrderInput[] | ProcurementOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProcurementOrderItemCreateOrConnectWithoutOrderInput | ProcurementOrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: ProcurementOrderItemUpsertWithWhereUniqueWithoutOrderInput | ProcurementOrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProcurementOrderItemCreateManyOrderInputEnvelope
    set?: ProcurementOrderItemWhereUniqueInput | ProcurementOrderItemWhereUniqueInput[]
    disconnect?: ProcurementOrderItemWhereUniqueInput | ProcurementOrderItemWhereUniqueInput[]
    delete?: ProcurementOrderItemWhereUniqueInput | ProcurementOrderItemWhereUniqueInput[]
    connect?: ProcurementOrderItemWhereUniqueInput | ProcurementOrderItemWhereUniqueInput[]
    update?: ProcurementOrderItemUpdateWithWhereUniqueWithoutOrderInput | ProcurementOrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProcurementOrderItemUpdateManyWithWhereWithoutOrderInput | ProcurementOrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProcurementOrderItemScalarWhereInput | ProcurementOrderItemScalarWhereInput[]
  }

  export type ProcurementOrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<ProcurementOrderCreateWithoutItemsInput, ProcurementOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProcurementOrderCreateOrConnectWithoutItemsInput
    connect?: ProcurementOrderWhereUniqueInput
  }

  export type ProcurementOrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ProcurementOrderCreateWithoutItemsInput, ProcurementOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProcurementOrderCreateOrConnectWithoutItemsInput
    upsert?: ProcurementOrderUpsertWithoutItemsInput
    connect?: ProcurementOrderWhereUniqueInput
    update?: XOR<XOR<ProcurementOrderUpdateToOneWithWhereWithoutItemsInput, ProcurementOrderUpdateWithoutItemsInput>, ProcurementOrderUncheckedUpdateWithoutItemsInput>
  }

  export type ProcurementOrderCreateNestedOneWithoutCostBreakdownInput = {
    create?: XOR<ProcurementOrderCreateWithoutCostBreakdownInput, ProcurementOrderUncheckedCreateWithoutCostBreakdownInput>
    connectOrCreate?: ProcurementOrderCreateOrConnectWithoutCostBreakdownInput
    connect?: ProcurementOrderWhereUniqueInput
  }

  export type ProcurementOrderUpdateOneWithoutCostBreakdownNestedInput = {
    create?: XOR<ProcurementOrderCreateWithoutCostBreakdownInput, ProcurementOrderUncheckedCreateWithoutCostBreakdownInput>
    connectOrCreate?: ProcurementOrderCreateOrConnectWithoutCostBreakdownInput
    upsert?: ProcurementOrderUpsertWithoutCostBreakdownInput
    disconnect?: ProcurementOrderWhereInput | boolean
    delete?: ProcurementOrderWhereInput | boolean
    connect?: ProcurementOrderWhereUniqueInput
    update?: XOR<XOR<ProcurementOrderUpdateToOneWithWhereWithoutCostBreakdownInput, ProcurementOrderUpdateWithoutCostBreakdownInput>, ProcurementOrderUncheckedUpdateWithoutCostBreakdownInput>
  }

  export type SupplierCreateNestedOneWithoutAssessmentsInput = {
    create?: XOR<SupplierCreateWithoutAssessmentsInput, SupplierUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutAssessmentsInput
    connect?: SupplierWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SupplierUpdateOneRequiredWithoutAssessmentsNestedInput = {
    create?: XOR<SupplierCreateWithoutAssessmentsInput, SupplierUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutAssessmentsInput
    upsert?: SupplierUpsertWithoutAssessmentsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutAssessmentsInput, SupplierUpdateWithoutAssessmentsInput>, SupplierUncheckedUpdateWithoutAssessmentsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type NestedEnumQuotationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuotationStatus | EnumQuotationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuotationStatusFilter<$PrismaModel> | $Enums.QuotationStatus
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

  export type NestedEnumQuotationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuotationStatus | EnumQuotationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuotationStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuotationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuotationStatusFilter<$PrismaModel>
    _max?: NestedEnumQuotationStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    suppliers?: SupplierCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    suppliers?: SupplierUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutWorkspaceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput>
  }

  export type UserCreateManyWorkspaceInputEnvelope = {
    data: UserCreateManyWorkspaceInput | UserCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type SupplierCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutSuppliersInput
    performances?: SupplierPerformanceCreateNestedManyWithoutSupplierInput
    quotations?: QuotationCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentCreateNestedManyWithoutSupplierInput
    products?: SupplierProductCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    performances?: SupplierPerformanceUncheckedCreateNestedManyWithoutSupplierInput
    quotations?: QuotationUncheckedCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentUncheckedCreateNestedManyWithoutSupplierInput
    products?: SupplierProductUncheckedCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewUncheckedCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutWorkspaceInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutWorkspaceInput, SupplierUncheckedCreateWithoutWorkspaceInput>
  }

  export type SupplierCreateManyWorkspaceInputEnvelope = {
    data: SupplierCreateManyWorkspaceInput | SupplierCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutWorkspaceInput, UserUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput>
  }

  export type UserUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutWorkspaceInput, UserUncheckedUpdateWithoutWorkspaceInput>
  }

  export type UserUpdateManyWithWhereWithoutWorkspaceInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    workspaceId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type SupplierUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: SupplierWhereUniqueInput
    update: XOR<SupplierUpdateWithoutWorkspaceInput, SupplierUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<SupplierCreateWithoutWorkspaceInput, SupplierUncheckedCreateWithoutWorkspaceInput>
  }

  export type SupplierUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: SupplierWhereUniqueInput
    data: XOR<SupplierUpdateWithoutWorkspaceInput, SupplierUncheckedUpdateWithoutWorkspaceInput>
  }

  export type SupplierUpdateManyWithWhereWithoutWorkspaceInput = {
    where: SupplierScalarWhereInput
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type SupplierScalarWhereInput = {
    AND?: SupplierScalarWhereInput | SupplierScalarWhereInput[]
    OR?: SupplierScalarWhereInput[]
    NOT?: SupplierScalarWhereInput | SupplierScalarWhereInput[]
    id?: StringFilter<"Supplier"> | string
    name?: StringFilter<"Supplier"> | string
    companyName?: StringFilter<"Supplier"> | string
    email?: StringFilter<"Supplier"> | string
    phone?: StringNullableFilter<"Supplier"> | string | null
    location?: StringFilter<"Supplier"> | string
    industry?: StringFilter<"Supplier"> | string
    categories?: StringFilter<"Supplier"> | string
    averageDeliveryDays?: FloatFilter<"Supplier"> | number
    onTimeRate?: FloatFilter<"Supplier"> | number
    qualityRating?: FloatFilter<"Supplier"> | number
    priceConsistency?: FloatFilter<"Supplier"> | number
    riskScore?: IntFilter<"Supplier"> | number
    riskLevel?: EnumRiskLevelFilter<"Supplier"> | $Enums.RiskLevel
    certifications?: StringNullableFilter<"Supplier"> | string | null
    ownerId?: StringFilter<"Supplier"> | string
    workspaceId?: StringFilter<"Supplier"> | string
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
  }

  export type WorkspaceCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suppliers?: SupplierCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suppliers?: SupplierUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutUsersInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
  }

  export type SupplierCreateWithoutOwnerInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutSuppliersInput
    performances?: SupplierPerformanceCreateNestedManyWithoutSupplierInput
    quotations?: QuotationCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentCreateNestedManyWithoutSupplierInput
    products?: SupplierProductCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    performances?: SupplierPerformanceUncheckedCreateNestedManyWithoutSupplierInput
    quotations?: QuotationUncheckedCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentUncheckedCreateNestedManyWithoutSupplierInput
    products?: SupplierProductUncheckedCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewUncheckedCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutOwnerInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutOwnerInput, SupplierUncheckedCreateWithoutOwnerInput>
  }

  export type SupplierCreateManyOwnerInputEnvelope = {
    data: SupplierCreateManyOwnerInput | SupplierCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutUsersInput = {
    update: XOR<WorkspaceUpdateWithoutUsersInput, WorkspaceUncheckedUpdateWithoutUsersInput>
    create: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutUsersInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutUsersInput, WorkspaceUncheckedUpdateWithoutUsersInput>
  }

  export type WorkspaceUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suppliers?: SupplierUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suppliers?: SupplierUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type SupplierUpsertWithWhereUniqueWithoutOwnerInput = {
    where: SupplierWhereUniqueInput
    update: XOR<SupplierUpdateWithoutOwnerInput, SupplierUncheckedUpdateWithoutOwnerInput>
    create: XOR<SupplierCreateWithoutOwnerInput, SupplierUncheckedCreateWithoutOwnerInput>
  }

  export type SupplierUpdateWithWhereUniqueWithoutOwnerInput = {
    where: SupplierWhereUniqueInput
    data: XOR<SupplierUpdateWithoutOwnerInput, SupplierUncheckedUpdateWithoutOwnerInput>
  }

  export type SupplierUpdateManyWithWhereWithoutOwnerInput = {
    where: SupplierScalarWhereInput
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyWithoutOwnerInput>
  }

  export type UserCreateWithoutSuppliersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSuppliersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSuppliersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSuppliersInput, UserUncheckedCreateWithoutSuppliersInput>
  }

  export type WorkspaceCreateWithoutSuppliersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutSuppliersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutSuppliersInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutSuppliersInput, WorkspaceUncheckedCreateWithoutSuppliersInput>
  }

  export type SupplierPerformanceCreateWithoutSupplierInput = {
    id?: string
    period: string
    onTimeRate: number
    defectRate: number
    averageDelivery: number
    orderCompletion: number
    priceConsistency: number
    createdAt?: Date | string
  }

  export type SupplierPerformanceUncheckedCreateWithoutSupplierInput = {
    id?: string
    period: string
    onTimeRate: number
    defectRate: number
    averageDelivery: number
    orderCompletion: number
    priceConsistency: number
    createdAt?: Date | string
  }

  export type SupplierPerformanceCreateOrConnectWithoutSupplierInput = {
    where: SupplierPerformanceWhereUniqueInput
    create: XOR<SupplierPerformanceCreateWithoutSupplierInput, SupplierPerformanceUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierPerformanceCreateManySupplierInputEnvelope = {
    data: SupplierPerformanceCreateManySupplierInput | SupplierPerformanceCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type QuotationCreateWithoutSupplierInput = {
    id?: string
    reference: string
    status?: $Enums.QuotationStatus
    deliveryDays?: number | null
    taxes?: number
    shipping?: number
    paymentTerms?: string | null
    createdAt?: Date | string
    items?: QuotationItemCreateNestedManyWithoutQuotationInput
  }

  export type QuotationUncheckedCreateWithoutSupplierInput = {
    id?: string
    reference: string
    status?: $Enums.QuotationStatus
    deliveryDays?: number | null
    taxes?: number
    shipping?: number
    paymentTerms?: string | null
    createdAt?: Date | string
    items?: QuotationItemUncheckedCreateNestedManyWithoutQuotationInput
  }

  export type QuotationCreateOrConnectWithoutSupplierInput = {
    where: QuotationWhereUniqueInput
    create: XOR<QuotationCreateWithoutSupplierInput, QuotationUncheckedCreateWithoutSupplierInput>
  }

  export type QuotationCreateManySupplierInputEnvelope = {
    data: QuotationCreateManySupplierInput | QuotationCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type RiskAssessmentCreateWithoutSupplierInput = {
    id?: string
    score: number
    classification: $Enums.RiskLevel
    explanation: string
    indicators: string
    simulated?: boolean
    createdAt?: Date | string
  }

  export type RiskAssessmentUncheckedCreateWithoutSupplierInput = {
    id?: string
    score: number
    classification: $Enums.RiskLevel
    explanation: string
    indicators: string
    simulated?: boolean
    createdAt?: Date | string
  }

  export type RiskAssessmentCreateOrConnectWithoutSupplierInput = {
    where: RiskAssessmentWhereUniqueInput
    create: XOR<RiskAssessmentCreateWithoutSupplierInput, RiskAssessmentUncheckedCreateWithoutSupplierInput>
  }

  export type RiskAssessmentCreateManySupplierInputEnvelope = {
    data: RiskAssessmentCreateManySupplierInput | RiskAssessmentCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type SupplierProductCreateWithoutSupplierInput = {
    id?: string
    name: string
    category: string
    unitPrice: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierProductUncheckedCreateWithoutSupplierInput = {
    id?: string
    name: string
    category: string
    unitPrice: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierProductCreateOrConnectWithoutSupplierInput = {
    where: SupplierProductWhereUniqueInput
    create: XOR<SupplierProductCreateWithoutSupplierInput, SupplierProductUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierProductCreateManySupplierInputEnvelope = {
    data: SupplierProductCreateManySupplierInput | SupplierProductCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type SupplierReviewCreateWithoutSupplierInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type SupplierReviewUncheckedCreateWithoutSupplierInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type SupplierReviewCreateOrConnectWithoutSupplierInput = {
    where: SupplierReviewWhereUniqueInput
    create: XOR<SupplierReviewCreateWithoutSupplierInput, SupplierReviewUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierReviewCreateManySupplierInputEnvelope = {
    data: SupplierReviewCreateManySupplierInput | SupplierReviewCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type ProcurementOrderCreateWithoutSupplierInput = {
    id?: string
    reference: string
    totalAmount: number
    status?: string
    orderedAt?: Date | string
    costBreakdown?: CostBreakdownCreateNestedOneWithoutOrderInput
    items?: ProcurementOrderItemCreateNestedManyWithoutOrderInput
  }

  export type ProcurementOrderUncheckedCreateWithoutSupplierInput = {
    id?: string
    reference: string
    totalAmount: number
    status?: string
    orderedAt?: Date | string
    costBreakdown?: CostBreakdownUncheckedCreateNestedOneWithoutOrderInput
    items?: ProcurementOrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ProcurementOrderCreateOrConnectWithoutSupplierInput = {
    where: ProcurementOrderWhereUniqueInput
    create: XOR<ProcurementOrderCreateWithoutSupplierInput, ProcurementOrderUncheckedCreateWithoutSupplierInput>
  }

  export type ProcurementOrderCreateManySupplierInputEnvelope = {
    data: ProcurementOrderCreateManySupplierInput | ProcurementOrderCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSuppliersInput = {
    update: XOR<UserUpdateWithoutSuppliersInput, UserUncheckedUpdateWithoutSuppliersInput>
    create: XOR<UserCreateWithoutSuppliersInput, UserUncheckedCreateWithoutSuppliersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSuppliersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSuppliersInput, UserUncheckedUpdateWithoutSuppliersInput>
  }

  export type UserUpdateWithoutSuppliersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSuppliersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUpsertWithoutSuppliersInput = {
    update: XOR<WorkspaceUpdateWithoutSuppliersInput, WorkspaceUncheckedUpdateWithoutSuppliersInput>
    create: XOR<WorkspaceCreateWithoutSuppliersInput, WorkspaceUncheckedCreateWithoutSuppliersInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutSuppliersInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutSuppliersInput, WorkspaceUncheckedUpdateWithoutSuppliersInput>
  }

  export type WorkspaceUpdateWithoutSuppliersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutSuppliersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type SupplierPerformanceUpsertWithWhereUniqueWithoutSupplierInput = {
    where: SupplierPerformanceWhereUniqueInput
    update: XOR<SupplierPerformanceUpdateWithoutSupplierInput, SupplierPerformanceUncheckedUpdateWithoutSupplierInput>
    create: XOR<SupplierPerformanceCreateWithoutSupplierInput, SupplierPerformanceUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierPerformanceUpdateWithWhereUniqueWithoutSupplierInput = {
    where: SupplierPerformanceWhereUniqueInput
    data: XOR<SupplierPerformanceUpdateWithoutSupplierInput, SupplierPerformanceUncheckedUpdateWithoutSupplierInput>
  }

  export type SupplierPerformanceUpdateManyWithWhereWithoutSupplierInput = {
    where: SupplierPerformanceScalarWhereInput
    data: XOR<SupplierPerformanceUpdateManyMutationInput, SupplierPerformanceUncheckedUpdateManyWithoutSupplierInput>
  }

  export type SupplierPerformanceScalarWhereInput = {
    AND?: SupplierPerformanceScalarWhereInput | SupplierPerformanceScalarWhereInput[]
    OR?: SupplierPerformanceScalarWhereInput[]
    NOT?: SupplierPerformanceScalarWhereInput | SupplierPerformanceScalarWhereInput[]
    id?: StringFilter<"SupplierPerformance"> | string
    supplierId?: StringFilter<"SupplierPerformance"> | string
    period?: StringFilter<"SupplierPerformance"> | string
    onTimeRate?: FloatFilter<"SupplierPerformance"> | number
    defectRate?: FloatFilter<"SupplierPerformance"> | number
    averageDelivery?: FloatFilter<"SupplierPerformance"> | number
    orderCompletion?: FloatFilter<"SupplierPerformance"> | number
    priceConsistency?: FloatFilter<"SupplierPerformance"> | number
    createdAt?: DateTimeFilter<"SupplierPerformance"> | Date | string
  }

  export type QuotationUpsertWithWhereUniqueWithoutSupplierInput = {
    where: QuotationWhereUniqueInput
    update: XOR<QuotationUpdateWithoutSupplierInput, QuotationUncheckedUpdateWithoutSupplierInput>
    create: XOR<QuotationCreateWithoutSupplierInput, QuotationUncheckedCreateWithoutSupplierInput>
  }

  export type QuotationUpdateWithWhereUniqueWithoutSupplierInput = {
    where: QuotationWhereUniqueInput
    data: XOR<QuotationUpdateWithoutSupplierInput, QuotationUncheckedUpdateWithoutSupplierInput>
  }

  export type QuotationUpdateManyWithWhereWithoutSupplierInput = {
    where: QuotationScalarWhereInput
    data: XOR<QuotationUpdateManyMutationInput, QuotationUncheckedUpdateManyWithoutSupplierInput>
  }

  export type QuotationScalarWhereInput = {
    AND?: QuotationScalarWhereInput | QuotationScalarWhereInput[]
    OR?: QuotationScalarWhereInput[]
    NOT?: QuotationScalarWhereInput | QuotationScalarWhereInput[]
    id?: StringFilter<"Quotation"> | string
    supplierId?: StringFilter<"Quotation"> | string
    reference?: StringFilter<"Quotation"> | string
    status?: EnumQuotationStatusFilter<"Quotation"> | $Enums.QuotationStatus
    deliveryDays?: FloatNullableFilter<"Quotation"> | number | null
    taxes?: FloatFilter<"Quotation"> | number
    shipping?: FloatFilter<"Quotation"> | number
    paymentTerms?: StringNullableFilter<"Quotation"> | string | null
    createdAt?: DateTimeFilter<"Quotation"> | Date | string
  }

  export type RiskAssessmentUpsertWithWhereUniqueWithoutSupplierInput = {
    where: RiskAssessmentWhereUniqueInput
    update: XOR<RiskAssessmentUpdateWithoutSupplierInput, RiskAssessmentUncheckedUpdateWithoutSupplierInput>
    create: XOR<RiskAssessmentCreateWithoutSupplierInput, RiskAssessmentUncheckedCreateWithoutSupplierInput>
  }

  export type RiskAssessmentUpdateWithWhereUniqueWithoutSupplierInput = {
    where: RiskAssessmentWhereUniqueInput
    data: XOR<RiskAssessmentUpdateWithoutSupplierInput, RiskAssessmentUncheckedUpdateWithoutSupplierInput>
  }

  export type RiskAssessmentUpdateManyWithWhereWithoutSupplierInput = {
    where: RiskAssessmentScalarWhereInput
    data: XOR<RiskAssessmentUpdateManyMutationInput, RiskAssessmentUncheckedUpdateManyWithoutSupplierInput>
  }

  export type RiskAssessmentScalarWhereInput = {
    AND?: RiskAssessmentScalarWhereInput | RiskAssessmentScalarWhereInput[]
    OR?: RiskAssessmentScalarWhereInput[]
    NOT?: RiskAssessmentScalarWhereInput | RiskAssessmentScalarWhereInput[]
    id?: StringFilter<"RiskAssessment"> | string
    supplierId?: StringFilter<"RiskAssessment"> | string
    score?: IntFilter<"RiskAssessment"> | number
    classification?: EnumRiskLevelFilter<"RiskAssessment"> | $Enums.RiskLevel
    explanation?: StringFilter<"RiskAssessment"> | string
    indicators?: StringFilter<"RiskAssessment"> | string
    simulated?: BoolFilter<"RiskAssessment"> | boolean
    createdAt?: DateTimeFilter<"RiskAssessment"> | Date | string
  }

  export type SupplierProductUpsertWithWhereUniqueWithoutSupplierInput = {
    where: SupplierProductWhereUniqueInput
    update: XOR<SupplierProductUpdateWithoutSupplierInput, SupplierProductUncheckedUpdateWithoutSupplierInput>
    create: XOR<SupplierProductCreateWithoutSupplierInput, SupplierProductUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierProductUpdateWithWhereUniqueWithoutSupplierInput = {
    where: SupplierProductWhereUniqueInput
    data: XOR<SupplierProductUpdateWithoutSupplierInput, SupplierProductUncheckedUpdateWithoutSupplierInput>
  }

  export type SupplierProductUpdateManyWithWhereWithoutSupplierInput = {
    where: SupplierProductScalarWhereInput
    data: XOR<SupplierProductUpdateManyMutationInput, SupplierProductUncheckedUpdateManyWithoutSupplierInput>
  }

  export type SupplierProductScalarWhereInput = {
    AND?: SupplierProductScalarWhereInput | SupplierProductScalarWhereInput[]
    OR?: SupplierProductScalarWhereInput[]
    NOT?: SupplierProductScalarWhereInput | SupplierProductScalarWhereInput[]
    id?: StringFilter<"SupplierProduct"> | string
    supplierId?: StringFilter<"SupplierProduct"> | string
    name?: StringFilter<"SupplierProduct"> | string
    category?: StringFilter<"SupplierProduct"> | string
    unitPrice?: FloatFilter<"SupplierProduct"> | number
    currency?: StringFilter<"SupplierProduct"> | string
    createdAt?: DateTimeFilter<"SupplierProduct"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierProduct"> | Date | string
  }

  export type SupplierReviewUpsertWithWhereUniqueWithoutSupplierInput = {
    where: SupplierReviewWhereUniqueInput
    update: XOR<SupplierReviewUpdateWithoutSupplierInput, SupplierReviewUncheckedUpdateWithoutSupplierInput>
    create: XOR<SupplierReviewCreateWithoutSupplierInput, SupplierReviewUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierReviewUpdateWithWhereUniqueWithoutSupplierInput = {
    where: SupplierReviewWhereUniqueInput
    data: XOR<SupplierReviewUpdateWithoutSupplierInput, SupplierReviewUncheckedUpdateWithoutSupplierInput>
  }

  export type SupplierReviewUpdateManyWithWhereWithoutSupplierInput = {
    where: SupplierReviewScalarWhereInput
    data: XOR<SupplierReviewUpdateManyMutationInput, SupplierReviewUncheckedUpdateManyWithoutSupplierInput>
  }

  export type SupplierReviewScalarWhereInput = {
    AND?: SupplierReviewScalarWhereInput | SupplierReviewScalarWhereInput[]
    OR?: SupplierReviewScalarWhereInput[]
    NOT?: SupplierReviewScalarWhereInput | SupplierReviewScalarWhereInput[]
    id?: StringFilter<"SupplierReview"> | string
    supplierId?: StringFilter<"SupplierReview"> | string
    rating?: FloatFilter<"SupplierReview"> | number
    comment?: StringNullableFilter<"SupplierReview"> | string | null
    createdAt?: DateTimeFilter<"SupplierReview"> | Date | string
  }

  export type ProcurementOrderUpsertWithWhereUniqueWithoutSupplierInput = {
    where: ProcurementOrderWhereUniqueInput
    update: XOR<ProcurementOrderUpdateWithoutSupplierInput, ProcurementOrderUncheckedUpdateWithoutSupplierInput>
    create: XOR<ProcurementOrderCreateWithoutSupplierInput, ProcurementOrderUncheckedCreateWithoutSupplierInput>
  }

  export type ProcurementOrderUpdateWithWhereUniqueWithoutSupplierInput = {
    where: ProcurementOrderWhereUniqueInput
    data: XOR<ProcurementOrderUpdateWithoutSupplierInput, ProcurementOrderUncheckedUpdateWithoutSupplierInput>
  }

  export type ProcurementOrderUpdateManyWithWhereWithoutSupplierInput = {
    where: ProcurementOrderScalarWhereInput
    data: XOR<ProcurementOrderUpdateManyMutationInput, ProcurementOrderUncheckedUpdateManyWithoutSupplierInput>
  }

  export type ProcurementOrderScalarWhereInput = {
    AND?: ProcurementOrderScalarWhereInput | ProcurementOrderScalarWhereInput[]
    OR?: ProcurementOrderScalarWhereInput[]
    NOT?: ProcurementOrderScalarWhereInput | ProcurementOrderScalarWhereInput[]
    id?: StringFilter<"ProcurementOrder"> | string
    supplierId?: StringFilter<"ProcurementOrder"> | string
    reference?: StringFilter<"ProcurementOrder"> | string
    totalAmount?: FloatFilter<"ProcurementOrder"> | number
    status?: StringFilter<"ProcurementOrder"> | string
    orderedAt?: DateTimeFilter<"ProcurementOrder"> | Date | string
  }

  export type SupplierCreateWithoutPerformancesInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutSuppliersInput
    workspace: WorkspaceCreateNestedOneWithoutSuppliersInput
    quotations?: QuotationCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentCreateNestedManyWithoutSupplierInput
    products?: SupplierProductCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutPerformancesInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    ownerId: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quotations?: QuotationUncheckedCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentUncheckedCreateNestedManyWithoutSupplierInput
    products?: SupplierProductUncheckedCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewUncheckedCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutPerformancesInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutPerformancesInput, SupplierUncheckedCreateWithoutPerformancesInput>
  }

  export type SupplierUpsertWithoutPerformancesInput = {
    update: XOR<SupplierUpdateWithoutPerformancesInput, SupplierUncheckedUpdateWithoutPerformancesInput>
    create: XOR<SupplierCreateWithoutPerformancesInput, SupplierUncheckedCreateWithoutPerformancesInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutPerformancesInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutPerformancesInput, SupplierUncheckedUpdateWithoutPerformancesInput>
  }

  export type SupplierUpdateWithoutPerformancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutSuppliersNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutSuppliersNestedInput
    quotations?: QuotationUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutPerformancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotations?: QuotationUncheckedUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUncheckedUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUncheckedUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUncheckedUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateWithoutQuotationsInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutSuppliersInput
    workspace: WorkspaceCreateNestedOneWithoutSuppliersInput
    performances?: SupplierPerformanceCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentCreateNestedManyWithoutSupplierInput
    products?: SupplierProductCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutQuotationsInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    ownerId: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    performances?: SupplierPerformanceUncheckedCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentUncheckedCreateNestedManyWithoutSupplierInput
    products?: SupplierProductUncheckedCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewUncheckedCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutQuotationsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutQuotationsInput, SupplierUncheckedCreateWithoutQuotationsInput>
  }

  export type QuotationItemCreateWithoutQuotationInput = {
    id?: string
    product: string
    quantity: number
    unitPrice: number
    warranty?: string | null
  }

  export type QuotationItemUncheckedCreateWithoutQuotationInput = {
    id?: string
    product: string
    quantity: number
    unitPrice: number
    warranty?: string | null
  }

  export type QuotationItemCreateOrConnectWithoutQuotationInput = {
    where: QuotationItemWhereUniqueInput
    create: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput>
  }

  export type QuotationItemCreateManyQuotationInputEnvelope = {
    data: QuotationItemCreateManyQuotationInput | QuotationItemCreateManyQuotationInput[]
    skipDuplicates?: boolean
  }

  export type SupplierUpsertWithoutQuotationsInput = {
    update: XOR<SupplierUpdateWithoutQuotationsInput, SupplierUncheckedUpdateWithoutQuotationsInput>
    create: XOR<SupplierCreateWithoutQuotationsInput, SupplierUncheckedCreateWithoutQuotationsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutQuotationsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutQuotationsInput, SupplierUncheckedUpdateWithoutQuotationsInput>
  }

  export type SupplierUpdateWithoutQuotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutSuppliersNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutSuppliersNestedInput
    performances?: SupplierPerformanceUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutQuotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performances?: SupplierPerformanceUncheckedUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUncheckedUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUncheckedUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUncheckedUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type QuotationItemUpsertWithWhereUniqueWithoutQuotationInput = {
    where: QuotationItemWhereUniqueInput
    update: XOR<QuotationItemUpdateWithoutQuotationInput, QuotationItemUncheckedUpdateWithoutQuotationInput>
    create: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput>
  }

  export type QuotationItemUpdateWithWhereUniqueWithoutQuotationInput = {
    where: QuotationItemWhereUniqueInput
    data: XOR<QuotationItemUpdateWithoutQuotationInput, QuotationItemUncheckedUpdateWithoutQuotationInput>
  }

  export type QuotationItemUpdateManyWithWhereWithoutQuotationInput = {
    where: QuotationItemScalarWhereInput
    data: XOR<QuotationItemUpdateManyMutationInput, QuotationItemUncheckedUpdateManyWithoutQuotationInput>
  }

  export type QuotationItemScalarWhereInput = {
    AND?: QuotationItemScalarWhereInput | QuotationItemScalarWhereInput[]
    OR?: QuotationItemScalarWhereInput[]
    NOT?: QuotationItemScalarWhereInput | QuotationItemScalarWhereInput[]
    id?: StringFilter<"QuotationItem"> | string
    quotationId?: StringFilter<"QuotationItem"> | string
    product?: StringFilter<"QuotationItem"> | string
    quantity?: IntFilter<"QuotationItem"> | number
    unitPrice?: FloatFilter<"QuotationItem"> | number
    warranty?: StringNullableFilter<"QuotationItem"> | string | null
  }

  export type QuotationCreateWithoutItemsInput = {
    id?: string
    reference: string
    status?: $Enums.QuotationStatus
    deliveryDays?: number | null
    taxes?: number
    shipping?: number
    paymentTerms?: string | null
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutQuotationsInput
  }

  export type QuotationUncheckedCreateWithoutItemsInput = {
    id?: string
    supplierId: string
    reference: string
    status?: $Enums.QuotationStatus
    deliveryDays?: number | null
    taxes?: number
    shipping?: number
    paymentTerms?: string | null
    createdAt?: Date | string
  }

  export type QuotationCreateOrConnectWithoutItemsInput = {
    where: QuotationWhereUniqueInput
    create: XOR<QuotationCreateWithoutItemsInput, QuotationUncheckedCreateWithoutItemsInput>
  }

  export type QuotationUpsertWithoutItemsInput = {
    update: XOR<QuotationUpdateWithoutItemsInput, QuotationUncheckedUpdateWithoutItemsInput>
    create: XOR<QuotationCreateWithoutItemsInput, QuotationUncheckedCreateWithoutItemsInput>
    where?: QuotationWhereInput
  }

  export type QuotationUpdateToOneWithWhereWithoutItemsInput = {
    where?: QuotationWhereInput
    data: XOR<QuotationUpdateWithoutItemsInput, QuotationUncheckedUpdateWithoutItemsInput>
  }

  export type QuotationUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    deliveryDays?: NullableFloatFieldUpdateOperationsInput | number | null
    taxes?: FloatFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutQuotationsNestedInput
  }

  export type QuotationUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    deliveryDays?: NullableFloatFieldUpdateOperationsInput | number | null
    taxes?: FloatFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateWithoutProductsInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutSuppliersInput
    workspace: WorkspaceCreateNestedOneWithoutSuppliersInput
    performances?: SupplierPerformanceCreateNestedManyWithoutSupplierInput
    quotations?: QuotationCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    ownerId: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    performances?: SupplierPerformanceUncheckedCreateNestedManyWithoutSupplierInput
    quotations?: QuotationUncheckedCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentUncheckedCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewUncheckedCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutProductsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutProductsInput, SupplierUncheckedCreateWithoutProductsInput>
  }

  export type SupplierUpsertWithoutProductsInput = {
    update: XOR<SupplierUpdateWithoutProductsInput, SupplierUncheckedUpdateWithoutProductsInput>
    create: XOR<SupplierCreateWithoutProductsInput, SupplierUncheckedCreateWithoutProductsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutProductsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutProductsInput, SupplierUncheckedUpdateWithoutProductsInput>
  }

  export type SupplierUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutSuppliersNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutSuppliersNestedInput
    performances?: SupplierPerformanceUpdateManyWithoutSupplierNestedInput
    quotations?: QuotationUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performances?: SupplierPerformanceUncheckedUpdateManyWithoutSupplierNestedInput
    quotations?: QuotationUncheckedUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUncheckedUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUncheckedUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateWithoutReviewsInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutSuppliersInput
    workspace: WorkspaceCreateNestedOneWithoutSuppliersInput
    performances?: SupplierPerformanceCreateNestedManyWithoutSupplierInput
    quotations?: QuotationCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentCreateNestedManyWithoutSupplierInput
    products?: SupplierProductCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    ownerId: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    performances?: SupplierPerformanceUncheckedCreateNestedManyWithoutSupplierInput
    quotations?: QuotationUncheckedCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentUncheckedCreateNestedManyWithoutSupplierInput
    products?: SupplierProductUncheckedCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutReviewsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutReviewsInput, SupplierUncheckedCreateWithoutReviewsInput>
  }

  export type SupplierUpsertWithoutReviewsInput = {
    update: XOR<SupplierUpdateWithoutReviewsInput, SupplierUncheckedUpdateWithoutReviewsInput>
    create: XOR<SupplierCreateWithoutReviewsInput, SupplierUncheckedCreateWithoutReviewsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutReviewsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutReviewsInput, SupplierUncheckedUpdateWithoutReviewsInput>
  }

  export type SupplierUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutSuppliersNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutSuppliersNestedInput
    performances?: SupplierPerformanceUpdateManyWithoutSupplierNestedInput
    quotations?: QuotationUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performances?: SupplierPerformanceUncheckedUpdateManyWithoutSupplierNestedInput
    quotations?: QuotationUncheckedUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUncheckedUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUncheckedUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateWithoutOrdersInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutSuppliersInput
    workspace: WorkspaceCreateNestedOneWithoutSuppliersInput
    performances?: SupplierPerformanceCreateNestedManyWithoutSupplierInput
    quotations?: QuotationCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentCreateNestedManyWithoutSupplierInput
    products?: SupplierProductCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    ownerId: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    performances?: SupplierPerformanceUncheckedCreateNestedManyWithoutSupplierInput
    quotations?: QuotationUncheckedCreateNestedManyWithoutSupplierInput
    assessments?: RiskAssessmentUncheckedCreateNestedManyWithoutSupplierInput
    products?: SupplierProductUncheckedCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutOrdersInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutOrdersInput, SupplierUncheckedCreateWithoutOrdersInput>
  }

  export type CostBreakdownCreateWithoutOrderInput = {
    id?: string
    workspaceId: string
    supplierId?: string | null
    product?: string | null
    productCost: number
    transportation?: number
    taxes?: number
    storage?: number
    inspection?: number
    expectedDefect?: number
    delay?: number
    other?: number
    total: number
    createdAt?: Date | string
  }

  export type CostBreakdownUncheckedCreateWithoutOrderInput = {
    id?: string
    workspaceId: string
    supplierId?: string | null
    product?: string | null
    productCost: number
    transportation?: number
    taxes?: number
    storage?: number
    inspection?: number
    expectedDefect?: number
    delay?: number
    other?: number
    total: number
    createdAt?: Date | string
  }

  export type CostBreakdownCreateOrConnectWithoutOrderInput = {
    where: CostBreakdownWhereUniqueInput
    create: XOR<CostBreakdownCreateWithoutOrderInput, CostBreakdownUncheckedCreateWithoutOrderInput>
  }

  export type ProcurementOrderItemCreateWithoutOrderInput = {
    id?: string
    product: string
    quantity: number
    unitPrice: number
    subtotal: number
  }

  export type ProcurementOrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    product: string
    quantity: number
    unitPrice: number
    subtotal: number
  }

  export type ProcurementOrderItemCreateOrConnectWithoutOrderInput = {
    where: ProcurementOrderItemWhereUniqueInput
    create: XOR<ProcurementOrderItemCreateWithoutOrderInput, ProcurementOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type ProcurementOrderItemCreateManyOrderInputEnvelope = {
    data: ProcurementOrderItemCreateManyOrderInput | ProcurementOrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type SupplierUpsertWithoutOrdersInput = {
    update: XOR<SupplierUpdateWithoutOrdersInput, SupplierUncheckedUpdateWithoutOrdersInput>
    create: XOR<SupplierCreateWithoutOrdersInput, SupplierUncheckedCreateWithoutOrdersInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutOrdersInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutOrdersInput, SupplierUncheckedUpdateWithoutOrdersInput>
  }

  export type SupplierUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutSuppliersNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutSuppliersNestedInput
    performances?: SupplierPerformanceUpdateManyWithoutSupplierNestedInput
    quotations?: QuotationUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performances?: SupplierPerformanceUncheckedUpdateManyWithoutSupplierNestedInput
    quotations?: QuotationUncheckedUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUncheckedUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUncheckedUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type CostBreakdownUpsertWithoutOrderInput = {
    update: XOR<CostBreakdownUpdateWithoutOrderInput, CostBreakdownUncheckedUpdateWithoutOrderInput>
    create: XOR<CostBreakdownCreateWithoutOrderInput, CostBreakdownUncheckedCreateWithoutOrderInput>
    where?: CostBreakdownWhereInput
  }

  export type CostBreakdownUpdateToOneWithWhereWithoutOrderInput = {
    where?: CostBreakdownWhereInput
    data: XOR<CostBreakdownUpdateWithoutOrderInput, CostBreakdownUncheckedUpdateWithoutOrderInput>
  }

  export type CostBreakdownUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    productCost?: FloatFieldUpdateOperationsInput | number
    transportation?: FloatFieldUpdateOperationsInput | number
    taxes?: FloatFieldUpdateOperationsInput | number
    storage?: FloatFieldUpdateOperationsInput | number
    inspection?: FloatFieldUpdateOperationsInput | number
    expectedDefect?: FloatFieldUpdateOperationsInput | number
    delay?: FloatFieldUpdateOperationsInput | number
    other?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostBreakdownUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    productCost?: FloatFieldUpdateOperationsInput | number
    transportation?: FloatFieldUpdateOperationsInput | number
    taxes?: FloatFieldUpdateOperationsInput | number
    storage?: FloatFieldUpdateOperationsInput | number
    inspection?: FloatFieldUpdateOperationsInput | number
    expectedDefect?: FloatFieldUpdateOperationsInput | number
    delay?: FloatFieldUpdateOperationsInput | number
    other?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcurementOrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: ProcurementOrderItemWhereUniqueInput
    update: XOR<ProcurementOrderItemUpdateWithoutOrderInput, ProcurementOrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<ProcurementOrderItemCreateWithoutOrderInput, ProcurementOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type ProcurementOrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: ProcurementOrderItemWhereUniqueInput
    data: XOR<ProcurementOrderItemUpdateWithoutOrderInput, ProcurementOrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type ProcurementOrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: ProcurementOrderItemScalarWhereInput
    data: XOR<ProcurementOrderItemUpdateManyMutationInput, ProcurementOrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type ProcurementOrderItemScalarWhereInput = {
    AND?: ProcurementOrderItemScalarWhereInput | ProcurementOrderItemScalarWhereInput[]
    OR?: ProcurementOrderItemScalarWhereInput[]
    NOT?: ProcurementOrderItemScalarWhereInput | ProcurementOrderItemScalarWhereInput[]
    id?: StringFilter<"ProcurementOrderItem"> | string
    orderId?: StringFilter<"ProcurementOrderItem"> | string
    product?: StringFilter<"ProcurementOrderItem"> | string
    quantity?: IntFilter<"ProcurementOrderItem"> | number
    unitPrice?: FloatFilter<"ProcurementOrderItem"> | number
    subtotal?: FloatFilter<"ProcurementOrderItem"> | number
  }

  export type ProcurementOrderCreateWithoutItemsInput = {
    id?: string
    reference: string
    totalAmount: number
    status?: string
    orderedAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutOrdersInput
    costBreakdown?: CostBreakdownCreateNestedOneWithoutOrderInput
  }

  export type ProcurementOrderUncheckedCreateWithoutItemsInput = {
    id?: string
    supplierId: string
    reference: string
    totalAmount: number
    status?: string
    orderedAt?: Date | string
    costBreakdown?: CostBreakdownUncheckedCreateNestedOneWithoutOrderInput
  }

  export type ProcurementOrderCreateOrConnectWithoutItemsInput = {
    where: ProcurementOrderWhereUniqueInput
    create: XOR<ProcurementOrderCreateWithoutItemsInput, ProcurementOrderUncheckedCreateWithoutItemsInput>
  }

  export type ProcurementOrderUpsertWithoutItemsInput = {
    update: XOR<ProcurementOrderUpdateWithoutItemsInput, ProcurementOrderUncheckedUpdateWithoutItemsInput>
    create: XOR<ProcurementOrderCreateWithoutItemsInput, ProcurementOrderUncheckedCreateWithoutItemsInput>
    where?: ProcurementOrderWhereInput
  }

  export type ProcurementOrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: ProcurementOrderWhereInput
    data: XOR<ProcurementOrderUpdateWithoutItemsInput, ProcurementOrderUncheckedUpdateWithoutItemsInput>
  }

  export type ProcurementOrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutOrdersNestedInput
    costBreakdown?: CostBreakdownUpdateOneWithoutOrderNestedInput
  }

  export type ProcurementOrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    costBreakdown?: CostBreakdownUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type ProcurementOrderCreateWithoutCostBreakdownInput = {
    id?: string
    reference: string
    totalAmount: number
    status?: string
    orderedAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutOrdersInput
    items?: ProcurementOrderItemCreateNestedManyWithoutOrderInput
  }

  export type ProcurementOrderUncheckedCreateWithoutCostBreakdownInput = {
    id?: string
    supplierId: string
    reference: string
    totalAmount: number
    status?: string
    orderedAt?: Date | string
    items?: ProcurementOrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ProcurementOrderCreateOrConnectWithoutCostBreakdownInput = {
    where: ProcurementOrderWhereUniqueInput
    create: XOR<ProcurementOrderCreateWithoutCostBreakdownInput, ProcurementOrderUncheckedCreateWithoutCostBreakdownInput>
  }

  export type ProcurementOrderUpsertWithoutCostBreakdownInput = {
    update: XOR<ProcurementOrderUpdateWithoutCostBreakdownInput, ProcurementOrderUncheckedUpdateWithoutCostBreakdownInput>
    create: XOR<ProcurementOrderCreateWithoutCostBreakdownInput, ProcurementOrderUncheckedCreateWithoutCostBreakdownInput>
    where?: ProcurementOrderWhereInput
  }

  export type ProcurementOrderUpdateToOneWithWhereWithoutCostBreakdownInput = {
    where?: ProcurementOrderWhereInput
    data: XOR<ProcurementOrderUpdateWithoutCostBreakdownInput, ProcurementOrderUncheckedUpdateWithoutCostBreakdownInput>
  }

  export type ProcurementOrderUpdateWithoutCostBreakdownInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutOrdersNestedInput
    items?: ProcurementOrderItemUpdateManyWithoutOrderNestedInput
  }

  export type ProcurementOrderUncheckedUpdateWithoutCostBreakdownInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProcurementOrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type SupplierCreateWithoutAssessmentsInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutSuppliersInput
    workspace: WorkspaceCreateNestedOneWithoutSuppliersInput
    performances?: SupplierPerformanceCreateNestedManyWithoutSupplierInput
    quotations?: QuotationCreateNestedManyWithoutSupplierInput
    products?: SupplierProductCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutAssessmentsInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    ownerId: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    performances?: SupplierPerformanceUncheckedCreateNestedManyWithoutSupplierInput
    quotations?: QuotationUncheckedCreateNestedManyWithoutSupplierInput
    products?: SupplierProductUncheckedCreateNestedManyWithoutSupplierInput
    reviews?: SupplierReviewUncheckedCreateNestedManyWithoutSupplierInput
    orders?: ProcurementOrderUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutAssessmentsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutAssessmentsInput, SupplierUncheckedCreateWithoutAssessmentsInput>
  }

  export type SupplierUpsertWithoutAssessmentsInput = {
    update: XOR<SupplierUpdateWithoutAssessmentsInput, SupplierUncheckedUpdateWithoutAssessmentsInput>
    create: XOR<SupplierCreateWithoutAssessmentsInput, SupplierUncheckedCreateWithoutAssessmentsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutAssessmentsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutAssessmentsInput, SupplierUncheckedUpdateWithoutAssessmentsInput>
  }

  export type SupplierUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutSuppliersNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutSuppliersNestedInput
    performances?: SupplierPerformanceUpdateManyWithoutSupplierNestedInput
    quotations?: QuotationUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performances?: SupplierPerformanceUncheckedUpdateManyWithoutSupplierNestedInput
    quotations?: QuotationUncheckedUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUncheckedUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUncheckedUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type UserCreateManyWorkspaceInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierCreateManyWorkspaceInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suppliers?: SupplierUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suppliers?: SupplierUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutSuppliersNestedInput
    performances?: SupplierPerformanceUpdateManyWithoutSupplierNestedInput
    quotations?: QuotationUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performances?: SupplierPerformanceUncheckedUpdateManyWithoutSupplierNestedInput
    quotations?: QuotationUncheckedUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUncheckedUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUncheckedUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUncheckedUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateManyOwnerInput = {
    id?: string
    name: string
    companyName: string
    email: string
    phone?: string | null
    location: string
    industry: string
    categories: string
    averageDeliveryDays: number
    onTimeRate: number
    qualityRating: number
    priceConsistency: number
    riskScore?: number
    riskLevel?: $Enums.RiskLevel
    certifications?: string | null
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutSuppliersNestedInput
    performances?: SupplierPerformanceUpdateManyWithoutSupplierNestedInput
    quotations?: QuotationUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performances?: SupplierPerformanceUncheckedUpdateManyWithoutSupplierNestedInput
    quotations?: QuotationUncheckedUpdateManyWithoutSupplierNestedInput
    assessments?: RiskAssessmentUncheckedUpdateManyWithoutSupplierNestedInput
    products?: SupplierProductUncheckedUpdateManyWithoutSupplierNestedInput
    reviews?: SupplierReviewUncheckedUpdateManyWithoutSupplierNestedInput
    orders?: ProcurementOrderUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    averageDeliveryDays?: FloatFieldUpdateOperationsInput | number
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    qualityRating?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    riskScore?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPerformanceCreateManySupplierInput = {
    id?: string
    period: string
    onTimeRate: number
    defectRate: number
    averageDelivery: number
    orderCompletion: number
    priceConsistency: number
    createdAt?: Date | string
  }

  export type QuotationCreateManySupplierInput = {
    id?: string
    reference: string
    status?: $Enums.QuotationStatus
    deliveryDays?: number | null
    taxes?: number
    shipping?: number
    paymentTerms?: string | null
    createdAt?: Date | string
  }

  export type RiskAssessmentCreateManySupplierInput = {
    id?: string
    score: number
    classification: $Enums.RiskLevel
    explanation: string
    indicators: string
    simulated?: boolean
    createdAt?: Date | string
  }

  export type SupplierProductCreateManySupplierInput = {
    id?: string
    name: string
    category: string
    unitPrice: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierReviewCreateManySupplierInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ProcurementOrderCreateManySupplierInput = {
    id?: string
    reference: string
    totalAmount: number
    status?: string
    orderedAt?: Date | string
  }

  export type SupplierPerformanceUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    defectRate?: FloatFieldUpdateOperationsInput | number
    averageDelivery?: FloatFieldUpdateOperationsInput | number
    orderCompletion?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPerformanceUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    defectRate?: FloatFieldUpdateOperationsInput | number
    averageDelivery?: FloatFieldUpdateOperationsInput | number
    orderCompletion?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPerformanceUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    onTimeRate?: FloatFieldUpdateOperationsInput | number
    defectRate?: FloatFieldUpdateOperationsInput | number
    averageDelivery?: FloatFieldUpdateOperationsInput | number
    orderCompletion?: FloatFieldUpdateOperationsInput | number
    priceConsistency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    deliveryDays?: NullableFloatFieldUpdateOperationsInput | number | null
    taxes?: FloatFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuotationItemUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    deliveryDays?: NullableFloatFieldUpdateOperationsInput | number | null
    taxes?: FloatFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuotationItemUncheckedUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    deliveryDays?: NullableFloatFieldUpdateOperationsInput | number | null
    taxes?: FloatFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAssessmentUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    classification?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    explanation?: StringFieldUpdateOperationsInput | string
    indicators?: StringFieldUpdateOperationsInput | string
    simulated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAssessmentUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    classification?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    explanation?: StringFieldUpdateOperationsInput | string
    indicators?: StringFieldUpdateOperationsInput | string
    simulated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAssessmentUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    classification?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    explanation?: StringFieldUpdateOperationsInput | string
    indicators?: StringFieldUpdateOperationsInput | string
    simulated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierProductUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierProductUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierProductUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierReviewUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierReviewUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierReviewUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcurementOrderUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    costBreakdown?: CostBreakdownUpdateOneWithoutOrderNestedInput
    items?: ProcurementOrderItemUpdateManyWithoutOrderNestedInput
  }

  export type ProcurementOrderUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    costBreakdown?: CostBreakdownUncheckedUpdateOneWithoutOrderNestedInput
    items?: ProcurementOrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ProcurementOrderUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationItemCreateManyQuotationInput = {
    id?: string
    product: string
    quantity: number
    unitPrice: number
    warranty?: string | null
  }

  export type QuotationItemUpdateWithoutQuotationInput = {
    id?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuotationItemUncheckedUpdateWithoutQuotationInput = {
    id?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuotationItemUncheckedUpdateManyWithoutQuotationInput = {
    id?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcurementOrderItemCreateManyOrderInput = {
    id?: string
    product: string
    quantity: number
    unitPrice: number
    subtotal: number
  }

  export type ProcurementOrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type ProcurementOrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type ProcurementOrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
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