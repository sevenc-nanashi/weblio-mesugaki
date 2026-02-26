// ==UserScript==
// @name         Weblio Mesugaki-ifyier
// @version      1.0.0
// @description  Weblio英和辞典の意味の読点をハートにするユーザースクリプト
// @match        https://ejje.weblio.jp/content/*
// @match        https://thesaurus.weblio.jp/content/*
// ==/UserScript==

(function () {
  'use strict';

  function maybeGetElementsBySelector(selector, from = document) {
    return Array.from(from.querySelectorAll(selector));
  }
  function getElementsBySelector(selector, from = document) {
    const elements = maybeGetElementsBySelector(selector, from);
    if (elements.length === 0) {
      throw new Error(`No elements found for selector: ${selector}`);
    }
    return elements;
  }
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
  const heart$1 = "❤️";
  function tryReplace$1() {
    const pcElement = maybeGetElementBySelector(".content-explanation");
    if (pcElement) {
      const content = pcElement.innerHTML;
      pcElement.innerHTML = content.replaceAll("、", heart$1) + heart$1;
      return true;
    }
    const mobileElement = maybeGetElementBySelector(".explanation");
    if (mobileElement) {
      const content = mobileElement.innerHTML;
      mobileElement.innerHTML = content.replaceAll(",", heart$1) + heart$1;
      return true;
    }
    return false;
  }
  function main$1() {
    let interval = setInterval(() => {
      if (tryReplace$1()) {
        clearInterval(interval);
      }
    }, 1e3);
  }
  function replaceDlContent(element) {
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
  function main() {
    let interval = setInterval(() => {
      if (tryReplace()) {
        clearInterval(interval);
      }
    }, 1e3);
  }
  if (location.hostname.startsWith("ejje.")) {
    main$1();
  } else if (location.hostname.startsWith("thesaurus.")) {
    main();
  }

})();