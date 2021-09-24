export type FieldOf<T> = keyof T & string;

export type ValueOrArray<T = any> = T | T[];

export type ValueOf<T, K extends FieldOf<T> = FieldOf<T>> = T | T[K];
