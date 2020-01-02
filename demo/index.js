
!function() {
  // register components.
  for (var k in VueGadgets.components) {
    Vue.component(k, VueGadgets.components[k]);
  }
}();

new Vue({
  el: '#app',
  data: {
    colors: [ 
      "#ff5884",
      "#ffd56c",
      "#55ff5b",
      "#6962ff"
    ],
    fakeCmyk: false
  }
});
