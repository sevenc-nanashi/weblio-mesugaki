import { getElementBySelector } from "./utils";

const mainElement = getElementBySelector(".content-explanation");
const content = mainElement.innerHTML;
const heart = "❤️";
mainElement.innerHTML = content.replaceAll("、", heart) + heart;

