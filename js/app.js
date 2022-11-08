(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    const preloader = document.querySelector(".preloader");
    const wrapper = document.querySelector(".wrapper");
    function addLoadedClass() {
        window.addEventListener("load", (function() {
            wrapper.classList.add("_active");
            setTimeout((function() {
                document.documentElement.classList.add("loaded");
            }), 3e3);
            preloader.classList.add("_active");
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const contentCalendar = document.querySelectorAll(".present__items");
    contentCalendar.forEach((item => {
        item.addEventListener("click", (function(e) {
            item.classList.toggle("_active");
        }));
    }));
    window["FLS"] = true;
    isWebp();
    addLoadedClass();
})();