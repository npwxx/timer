const systemBeep = function(userInput) {
  for (const num of userInput) {
    if (num >= 0) {
      setTimeout(() => {
        process.stdout.write('beep\n');
      }, num * 1000);
    }
  }
};
systemBeep(process.argv.slice(2));