(function () {
  const old = console.log;
  console.log = function (message) {
    const logger = document.getElementById("log");
    message = new Date().toISOString() + ": " + message;
    // I think innerHTML technically has security issues?
    if (typeof message == "object") {
      logger.innerHTML +=
        (JSON && JSON.stringify ? JSON.stringify(message) : message) + "<br />";
    } else {
      logger.innerHTML += message + "<br />";
    }
    old(message);
  };

  console.log(
    "This is just a copy of the console log, displayed for convenience."
  );
})();

(function () {
  const log = document.getElementById("log");
  let lastHeight = log.scrollHeight;
  function detectChange() {
    let currentHeight = log.scrollHeight;
    if (lastHeight != currentHeight) {
      log.scrollTop = currentHeight;
      lastHeight = currentHeight;
    }
  }
  detectChange();
  setInterval(detectChange, 100);
})();
