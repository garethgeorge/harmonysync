export default (durationMs: number) => {
  return new Promise((accept, _) => {
    setTimeout(accept, durationMs)
  })
}