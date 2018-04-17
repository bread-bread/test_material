document.addEventListener('DOMContentLoaded', function() {
    window.mdc.autoInit();
    let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector(".mdc-drawer--temporary"));
    document.querySelector(".menu").addEventListener("click", () => (drawer.open = true));

    const icons = document.querySelectorAll('.delete-icon');
    const buttons = document.querySelectorAll('.mdc-card__action--button');
    const footBtn = document.querySelectorAll('.footer-nav__link');

    function addRipple(elems) {
        elems.forEach(function(item) {
        window.mdc.ripple.MDCRipple.attachTo(item);
      })
    }

    addRipple(icons);
    addRipple(buttons);
    addRipple(footBtn);
})