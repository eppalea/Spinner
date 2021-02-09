let delayTime = 100;
const charArray = ['|  ', '/  ', '-  ', '\\  ', '|  ', '/  ', '-  ', '\\  ', '|  '];

for (const char of charArray) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, delayTime += 200);
}