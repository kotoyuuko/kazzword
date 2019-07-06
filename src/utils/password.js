export function password (params) {
  let {
    master,
    remember,
    length = 10,
    symbol = true
  } = params

  let generated = ''

  generated += master + ' '
  generated += remember + ' '

  if (length === 10) {
    generated += '10'
  }

  if (symbol) {
    generated += '@'
  }

  return generated
}
