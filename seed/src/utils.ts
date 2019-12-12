function awaitWrap<T, U = any>(promise: Promise<T>): Promise<[U | null, T | null]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, null]>(err => [err, null])
}

export { awaitWrap };