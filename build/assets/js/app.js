!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,n){"use strict";document.addEventListener("DOMContentLoaded",function(){window.mdc.autoInit();var e=new mdc.drawer.MDCTemporaryDrawer(document.querySelector(".mdc-drawer--temporary"));document.querySelector(".menu").addEventListener("click",function(){return e.open=!0});var t=document.querySelectorAll(".delete-icon"),n=document.querySelectorAll(".mdc-card__action--button"),r=document.querySelectorAll(".footer-nav__link");function o(e){e.forEach(function(e){window.mdc.ripple.MDCRipple.attachTo(e)})}o(t),o(n),o(r)})}]);