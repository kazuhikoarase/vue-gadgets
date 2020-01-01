
!function() {
  // register components.
  for (var k in VueGadgets.components) {
    Vue.component(k, VueGadgets.components[k]);
  }
}();

new Vue({
  el: '#app',
  data: {
    colors: [ '#f00', '#fc0', '#0f0', '#00f' ],
    fakeCmyk: false
  }
});
