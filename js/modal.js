/**
 * Author: Mitchell Wilson
 * Date: February 12, 2019
 * Description: This script will add a modal to a document
 * Dependencies: a document, helpers.js
 */
'use strict';

var modal = (function modal(document, helpers){

    var addClassList = helpers.addClassList;
    var addEventListener = helpers.addEventListener;
    var createElement = helpers.createElement;
    var removeElement = helpers.removeElement;
    
    /**
     * This function will add a close button element to the supplied element
     * that has the classList then return the element
     * @param {obj} elem 
     * @param {obj} document 
     * @param {string} classList 
     */
    var addCloseButton = function addCloseButton(elem, document, classList) {

        var fragment = createElement('div', document);
        fragment = addClassList(fragment, 'button button-close');
        fragment = addEventListener('click', fragment, function () {

            removeElement(document, classList);

        });

        elem.appendChild(fragment);

        return elem;

    }
    /**
     * This function will add a modal to a document
     * @param {obj} document 
     * @param {string} word 
     */
    var create = function create(document, word) {

        let modal = createModalWrapper(document);

        let content = createModalContent(document);

        modal.appendChild(content);
        document.body.appendChild(modal);
        // console.log('object.words');
        // console.log(document.data.words);
        // console.log('object.words.keys()');
        // console.log(document.data.words.keys());
        // console.log('word');
        // console.log(word);
        return document;

    }

    /**
     * This function will create a modal content element and return it
     * @param {obj} document
     */
    var createModalContent = function createModalContent(document) {

        let fragment = createElement('div', document);
        fragment = addClassList(fragment, 'modal-content');
        fragment = addCloseButton(fragment, document, 'modal');

        // console.log(document.data);

        return fragment;

    }
    /**
     * This function will create the wrapper for the modal element
     * @param {obj} document 
     */
    var createModalWrapper = function createModalWrapper(document) {

        let fragment = createElement('div', document);
        fragment = addClassList(fragment, 'modal');

        return fragment;

    }

    return {
        create: create,
    }


}(document, helpers));