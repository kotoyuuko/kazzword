import md5 from 'js-md5'

function flowerPassword (master, remember) {
  let md5one = md5(master + remember)
  let md5two = md5(md5one + 'kpeW2EyTEppLJzlwa9zT')
  let md5three = md5(md5one + '7vK8gs6liFj85xYxGHqF')
  let rule = md5three.split('')
  let source = md5two.split('')
  for (let i = 0; i < 32; i++) {
    if (isNaN(source[i])) {
      let str = 'oPvzqixg0k21wIWrMcwaWVwTexQeY18xFlILyS2WpLota5paY6ydaM4mKsFs'
      if (str.search(rule[i]) > -1) {
        source[i] = source[i].toUpperCase()
      }
    }
  }
  let pwd32 = source.join('')
  return pwd32
}

function kazz (pwd, length, symbol) {
  let lowers = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  let numbers = '0123456789'.split('')
  let symbols = ',.:;!?_-+=*/%$#@^&'.split('')
  let alphabet = lowers.concat(uppers).concat(numbers)

  if (symbol) {
    alphabet = alphabet.concat(symbols)
  }

  let kazzword = []

  for (let i = 0; i <= pwd.length - length; i++) {
    let hash = pwd.slice(i, i + length).split('')

    let count = 0
    let mapIndex = hash.map((c) => {
      count = (count + c.charCodeAt()) % alphabet.length
      return count
    })

    kazzword = mapIndex.map((index) => {
      return alphabet[index]
    })

    let match = [false, false, false, false]
    if (!symbol) {
      match[3] = true
    }
    kazzword.forEach((c) => {
      match = [
        match[0] || lowers.includes(c),
        match[1] || uppers.includes(c),
        match[2] || numbers.includes(c),
        match[3] || symbols.includes(c)
      ]
    })
    if (!kazzword.includes(false)) {
      break
    }
  }

  if (kazzword.length === 0) {
    return 'error'
  }

  return kazzword.join('')
}

export function password (params) {
  let {
    master,
    remember,
    length = 10,
    symbol = true
  } = params

  let generated = flowerPassword(master, remember)
  generated = kazz(generated, length, symbol)

  return generated
}
