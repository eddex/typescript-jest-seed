import Charles from '../src/app'

describe('Charles', () => {

  const charles = new Charles()

  it('stating something', () => {
    const result = charles.hey('Tom-ay-to, tom-aaaah-to.')
    expect(result).toEqual('Whatever.')
  })

  it('shouting', () => {
    const result = charles.hey('WATCH OUT!')
    expect(result).toEqual('Whoa, chill out!')
  })

  it('shouting gibberish', () => {
    const result = charles.hey('FCECDFCAAB')
    expect(result).toEqual('Whoa, chill out!')
  })

  it('asking a question', () => {
    const result = charles.hey('Does this cryogenic chamber make me look fat?')
    expect(result).toEqual('Sure.')
  })

  it('asking a numeric question', () => {
    const result = charles.hey('You are, what, like 15?')
    expect(result).toEqual('Sure.')
  })

  it('asking gibberish', () => {
    const result = charles.hey('fffbbcbeab?')
    expect(result).toEqual('Sure.')
  })

  it('talking forcefully', () => {
    const result = charles.hey("Let's go make out behind the gym!")
    expect(result).toEqual('Whatever.')
  })

  it('using acronyms in regular speech', () => {
    const result = charles.hey("It's OK if you don't want to go to the DMV.")
    expect(result).toEqual('Whatever.')
  })

  it('forceful question', () => {
    const result = charles.hey('WHAT THE HELL WERE YOU THINKING?')
    expect(result).toEqual('Calm down, I know what I\'m doing!')
  })

  it('shouting numbers', () => {
    const result = charles.hey('1, 2, 3 GO!')
    expect(result).toEqual('Whoa, chill out!')
  })

  it('no letters', () => {
    const result = charles.hey('1, 2, 3')
    expect(result).toEqual('Whatever.')
  })

  it('question with no letters', () => {
    const result = charles.hey('4?')
    expect(result).toEqual('Sure.')
  })

  it('shouting with special characters', () => {
    const result = charles.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!')
    expect(result).toEqual('Whoa, chill out!')
  })

  it('shouting with no exclamation mark', () => {
    const result = charles.hey('I HATE THE DMV')
    expect(result).toEqual('Whoa, chill out!')
  })

  it('statement containing question mark', () => {
    const result = charles.hey('Ending with ? means a question.')
    expect(result).toEqual('Whatever.')
  })

  it('prattling on', () => {
    const result = charles.hey('Wait! Hang on.  Are you going to be OK?')
    expect(result).toEqual('Sure.')
  })

  it('silence', () => {
    const result = charles.hey('')
    expect(result).toEqual('Fine. Be that way!')
  })

  it('prolonged silence', () => {
    const result = charles.hey('   ')
    expect(result).toEqual('Fine. Be that way!')
  })

  it('alternate silence', () => {
    const result = charles.hey('\t\t\t\t\t\t\t\t\t\t')
    expect(result).toEqual('Fine. Be that way!')
  })

  it('multiple line question', () => {
    const result = charles.hey('\nDoes this cryogenic chamber make me look fat?\nNo.')
    expect(result).toEqual('Whatever.')
  })

  it('starting with whitespace', () => {
    const result = charles.hey('         hmmmmmmm...')
    expect(result).toEqual('Whatever.')
  })

  it('ending with whitespace', () => {
    const result = charles.hey('Okay if like my  spacebar  quite a bit?   ')
    expect(result).toEqual('Sure.')
  })

  it('other whitespace', () => {
    const result = charles.hey('\n\r \t')
    expect(result).toEqual('Fine. Be that way!')
  })

  it('non-question ending with whitespace', () => {
    const result = charles.hey('This is a statement ending with whitespace      ')
    expect(result).toEqual('Whatever.')
  })

})