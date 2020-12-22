(function() {
    function changeDOMCollectionClass(DOMElement, DOMCollection, className) {
        for (const element of DOMCollection) {
            element.classList.remove(className);
        }
        DOMElement.classList.add(className);
    }

    window.utils = {
        changeDOMCollectionClass: changeDOMCollectionClass
    };
})();