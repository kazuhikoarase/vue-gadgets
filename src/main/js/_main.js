
var VueGadgets = function() {

  var $ = function(e) {
    return {
      on: function(t, l) { e.addEventListener(t, l); return this; },
      off: function(t, l) { e.removeEventListener(t, l); return this; }
    };
  };

  var closest = function(fn, event, root) {
    if (!root) {
      root = event.currentTarget;
    }
    var elm = event.target;
    while (elm != null && elm != root) {
      if (fn(elm) ) {
        return elm;
      }
      elm = elm.parentNode;
    }
    return null;
  };

  return {
    $: $,
    closest: closest,
    components: {}
  };
}();
