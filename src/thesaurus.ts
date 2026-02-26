import {
  getElementBySelector,
  getElementsBySelector,
  maybeGetElementBySelector,
} from "./utils";

function replaceDlContent(element: Element) {
  const header = getElementBySelector("dt", element);
  if (header) {
    const content = header.innerHTML;
    header.innerHTML = content.replaceAll("、", heart) + heart;
  }

  const contents = getElementsBySelector("dd ul li", element);
  for (const contentElement of contents) {
    const content = contentElement.innerHTML;
    contentElement.innerHTML = content.replaceAll("、", heart) + heart;
  }
}

const heart = "❤️";
function tryReplace() {
  const mainElements = getElementsBySelector(".dl-content");
  if (mainElements) {
    for (const element of mainElements) {
      replaceDlContent(element);
    }
    return true;
  }

  return false;
}

export function main() {
  let interval = setInterval(() => {
    if (tryReplace()) {
      clearInterval(interval);
    }
  }, 1000);
}
