
var VueGadgets = function() {

  var $ = function(e) {
    return {
      on: function(t, l) { e.addEventListener(t, l); return this; },
      off: function(t, l) { e.removeEventListener(t, l); return this; }
    };
  };

  return {
    $: $,
    components: {}
  };
}();
