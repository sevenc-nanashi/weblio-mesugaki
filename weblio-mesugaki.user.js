// ==UserScript==
// @name         Weblio Mesugaki-ifyier
// @version      1.0.0
// @description  Weblio英和辞典の意味の読点をハートにするユーザースクリプト
// @match        https://ejje.weblio.jp/content/*
// ==/UserScript==

(function () {
  'use strict';

  function maybeGetElementBySelector(selector, from = document) {
    return from.querySelector(selector);
  }
  function getElementBySelector(selector, from = document) {
    const element = maybeGetElementBySelector(selector, from);
    if (!element) {
      throw new Error(`No element found for selector: ${selector}`);
    }
    return element;
  }
  const mainElement = getElementBySelector(".content-explanation");
  const content = mainElement.innerHTML;
  const heart = "❤️";
  mainElement.innerHTML = content.replaceAll("、", heart) + heart;

})();