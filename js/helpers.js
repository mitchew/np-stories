/**
 * Author: Mitchell Wilson
 * Date: February 12, 2019
 * Description: This will have some common helpers to interact with the DOM
 * Dependencies: a document with a DOM
 */
'use strict';

var helpers = (function(document){
    /**
     * This function will add a classList to an element and return the element
     * @param {obj} elem 
     * @param {string} list 
     */
    var addClassList = function addClassList(elem, list) {

        elem.classList = list;

        return elem;

    }
    /**
     * This function will add an event listener to an element
     * then return the element.
     * @param {string} event 
     * @param {obj} elem 
     * @param {function} func 
     */
    var addEventListener = function addEventListener(event, elem, func) {

        elem.addEventListener(event, func);

        return elem;

    }
    /**
     * This function will create an element
     * for a document and return it
     * @param {string} name 
     * @param {obj} document 
     */
    var createElement = function createElement(name, document) {

        return document.createElement(name);

    }
    /**
     * This function will remove the first element matching
     * the elem (classList) parameter
     * @param {obj} document 
     * @param {string} elem 
     */
    var removeElement = function removeElement(document, elem) {

        let eName = document.getElementsByClassName(elem)[0];
        // console.log('removing element ...');
        // console.log(eName);

        eName.remove();

        return document;

    }

    return {
        addClassList: addClassList,
        addEventListener: addEventListener,
        createElement: createElement,
        removeElement: removeElement,
    }

}(document));