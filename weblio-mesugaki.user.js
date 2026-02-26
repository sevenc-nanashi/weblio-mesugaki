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
  }, 1e3);

})();