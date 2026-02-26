import { maybeGetElementBySelector } from "./utils";

const pcElement = maybeGetElementBySelector(".content-explanation");
if (pcElement) {
  const content = pcElement.innerHTML;
  const heart = "❤️";
  pcElement.innerHTML = content.replaceAll("、", heart) + heart;
}

const mobileElement = maybeGetElementBySelector(".explanation");
if (mobileElement) {
  const content = mobileElement.innerHTML;
  const heart = "❤️";
  mobileElement.innerHTML = content.replaceAll(",", heart) + heart;
}
