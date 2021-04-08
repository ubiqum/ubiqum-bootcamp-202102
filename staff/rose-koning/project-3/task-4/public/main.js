function initMaps() {
  initFirebase(function () {
    new Vue({
      el: "#app",
      router,
    });
  });
}
