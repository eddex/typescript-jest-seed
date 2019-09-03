class Charles {

  hey(message: string) {

    let isEmpty: boolean = message.trim() === '';
    let isQuestion: boolean = message.trim().slice(-1) === '?';
    let isAngry: boolean = message === message.toUpperCase();
    let containsLetters: boolean = !!message.match(/[a-z]/i); // i = case insensitive.

    return isEmpty ? 'Fine. Be that way!'
      : isQuestion ? isAngry && containsLetters ? 'Calm down, I know what I\'m doing!' : 'Sure.'
      : isAngry && containsLetters? 'Whoa, chill out!'
      : 'Whatever.';
  }
}

export default Charles