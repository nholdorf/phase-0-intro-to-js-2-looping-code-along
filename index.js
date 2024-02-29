function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
  }
  writeCards(["Charlie", "Samip", "Ali"], "birthday");

  function countDown (number) {
    let i = number;
    while (i >= 0) {
        console.log(i)
        i--;
    }
  }
 