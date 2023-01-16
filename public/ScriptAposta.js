(function (document, window) {
  var a,
    c = document.createElement('script');
  c.id = 'CleverCoreLoader52789';
  c.src = '//scripts.cleverwebserver.com/187d4b61595af740ce91d9281dff2d08.js';
  c.async = !0;
  c.type = 'text/javascript';
  c.setAttribute('data-target', window.name);
  c.setAttribute('data-callback', 'put-your-callback-macro-here');
  try {
    a =
      parent.document.getElementsByTagName('script')[0] ||
      document.getElementsByTagName('script')[0];
  } catch (e) {
    a = !1;
  }
  a ||
    (a =
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]);
  a.parentNode.insertBefore(c, a);
})(document, window);
