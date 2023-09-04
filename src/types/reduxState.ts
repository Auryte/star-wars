export interface FilmsReduxState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
