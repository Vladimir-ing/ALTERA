/*
  Переключение языка лендинга ALTERA.

  Русский текст лежит прямо в index.html, английский — рядом, в атрибуте data-en
  того же элемента. Отдельного файла со словарём нет: правишь текст — правишь
  перевод в той же строке, разъехаться им негде.

    <p data-en="English text">Русский текст</p>
    <a aria-label="Русский" data-en-aria="English">…</a>
    <img alt="Русский" data-en-alt="English">

  Выбор языка запоминается в браузере. При первом визите язык берётся из
  настроек браузера: русский — RU, любой другой — EN.
*/
(function () {
  'use strict';

  var STORE = 'altera-lang';

  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-en]'));
  var arias = Array.prototype.slice.call(document.querySelectorAll('[data-en-aria]'));
  var alts = Array.prototype.slice.call(document.querySelectorAll('[data-en-alt]'));
  var buttons = Array.prototype.slice.call(document.querySelectorAll('.lang-switch button'));

  function isMeta(el) {
    return el.tagName === 'META';
  }

  // Русский вариант запоминаем таким, каким он пришёл из разметки.
  nodes.forEach(function (el) {
    el.dataset.ru = isMeta(el) ? el.getAttribute('content') : el.innerHTML;
  });
  arias.forEach(function (el) {
    el.dataset.ruAria = el.getAttribute('aria-label');
  });
  alts.forEach(function (el) {
    el.dataset.ruAlt = el.getAttribute('alt');
  });

  function apply(lang) {
    var en = lang === 'en';

    nodes.forEach(function (el) {
      var value = en ? el.dataset.en : el.dataset.ru;
      if (typeof value !== 'string') { return; }
      if (isMeta(el)) { el.setAttribute('content', value); }
      else { el.innerHTML = value; }
    });

    arias.forEach(function (el) {
      var value = en ? el.dataset.enAria : el.dataset.ruAria;
      if (typeof value === 'string') { el.setAttribute('aria-label', value); }
    });

    alts.forEach(function (el) {
      var value = en ? el.dataset.enAlt : el.dataset.ruAlt;
      if (typeof value === 'string') { el.setAttribute('alt', value); }
    });

    document.documentElement.lang = en ? 'en' : 'ru';

    buttons.forEach(function (button) {
      var active = button.dataset.lang === lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    try { localStorage.setItem(STORE, lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem(STORE); } catch (e) {}

  if (saved !== 'ru' && saved !== 'en') {
    var browser = (navigator.language || 'ru').toLowerCase();
    saved = browser.indexOf('ru') === 0 ? 'ru' : 'en';
  }

  apply(saved);

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      apply(button.dataset.lang);
    });
  });
})();
