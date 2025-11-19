// Timestamp: 2025-11-19 01:07:25

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

