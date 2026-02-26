import { maybeGetElementBySelector } from "./utils";

const heart = "❤️";
function tryReplace() {
  const pcElement = maybeGetElementBySelector(".content-explanation");
  if (pcElement) {
    const content = pcElement.innerHTML;
    pcElement.innerHTML = content.replaceAll("、", heart) + heart;
    return true;
  }

  const mobileElement = maybeGetElementBySelector(".explanation");
  if (mobileElement) {
    const content = mobileElement.innerHTML;
    mobileElement.innerHTML = content.replaceAll(",", heart) + heart;
    return true;
  }
  return false;
}

let interval = setInterval(() => {
  if (tryReplace()) {
    clearInterval(interval);
  }
}, 1000);
