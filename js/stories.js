'use strict';
/**
 * Author: Mitchell Wilson
 * Date: December 11, 2018
 * Description: This module is for the np-stories app. It is the main file as
 *   of this release.
 * Dependencies: none
 */
var stories = (function stories(){
    /**
     * This function will add a classList to an element and return the element
     * @param {obj} elem 
     * @param {string} classList 
     */
    var addClassList = function addClassList(elem, classList) {

        elem.classList = classList;

        return elem;

    }
    /**
     * This function will add event listeners to an array of items
     * @param {string} className 
     * @param {obj} document
     */
    var addNPWordsEventListener = function addNPWordsEventListener(className, document) {

        let words = document.querySelectorAll(className);
        // console.log('words');
        // console.log(words);

        words.forEach(function (word) {

            word.addEventListener('click', function () {

                isNPWord(this.classList[0]) ? addModal(document, this.innerText) : false;

            });

        });

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
     * for the document and return it
     * @param {string} name 
     * @param {obj} document 
     */
    var createElement = function createElement(name, document) {

        return document.createElement(name);

    }
    /**
     * This function returns whether a string is equal
     * to np-word
     * @param {string} string 
     */
    var isNPWord = function isNPWord(string) {

        return string === 'np-word';

    }
    /**
     * This function will create a modal-content element and return it
     * @param {obj} document 
     */
    var createModalContent = function createModalContent(document) {

        let fragment = createElement('div', document);
        fragment = addClassList(fragment, 'modal-content');
        fragment = addCloseButton(fragment, document, 'modal');

        console.log(document.data);

        return fragment;

    }
    /**
     * This function will add a close button element to the supplied element
     * that has the classList then return the element
     * @param {obj} elem 
     * @param {obj} document 
     * @param {string} classList 
     */
    var addCloseButton = function addCloseButton(elem, document, classList) {

        let fragment = createElement('div', document);
        fragment = addClassList(fragment, 'button button-close');
        fragment = addEventListener('click', fragment, function () {

            removeElement(document, classList);

        });

        elem.appendChild(fragment);

        return elem;

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
    /**
     * This function will remove the first element matching
     * the elem (classList) parameter
     * @param {obj} document 
     * @param {string} elem 
     */
    var removeElement = function removeElement(document, elem) {

        let eName = document.getElementsByClassName(elem)[0];
        console.log('removing element ...');
        console.log(eName);

        eName.remove();

        return document;

    }
    /**
     * This function will add a modal to a document
     * @param {*} document 
     * @param {*} word 
     */
    var addModal = function addModal(document, word) {

        let modal = createModalWrapper(document);

        let content = createModalContent(document);

        modal.appendChild(content);
        document.body.appendChild(modal);
        console.log('object.words');
        console.log(document.data.words);
        console.log('object.words.keys()');
        console.log(document.data.words.keys());
        console.log('word');
        console.log(word);
        return document;

    }
    /**
     * This function will write a story to the story element
     * within the document
     * @param {obj} document 
     * @param {obj} storyElem 
     */
    var writeStory = function writeStory(document, storyElem) {

        storyElem.innerHTML = '';

        document.data.lines.forEach(function (line) {
            // console.log(line.np);
            // console.log(line.en);
            let npWords = line.np;
            let enWords = line.en;
            npWords = npWords.split(' ');
            // console.log('npWords');
            // console.log(npWords);
            // console.log('Creating line elements');
            let lineElement = createElement('div', document);
            let npLineElement = createElement('div', document);
            let enLineElement = createElement('div', document);
            lineElement = addClassList(lineElement, 'line');
            npLineElement = addClassList(npLineElement, 'np-line');
            enLineElement = addClassList(enLineElement, 'en-line');

            npWords.forEach(function (word) {

                // console.log(word);
                let wordElement = createElement('span', document);
                wordElement.innerText = word;
                wordElement = addClassList(wordElement, 'np-word');
                // console.log(wordElement);
                npLineElement.appendChild(wordElement);

            });

            enWords = enWords.split(' ');
            // console.log(enWords);
            enWords.forEach(function (word) {

                // console.log(word);
                let wordElement = createElement('span', document);
                wordElement.innerText = word;
                wordElement = addClassList(wordElement, 'en-word');
                enLineElement.appendChild(wordElement);

            });

            lineElement.appendChild(npLineElement);
            lineElement.appendChild(enLineElement);
            story.appendChild(lineElement);

        });

        addNPWordsEventListener('.np-word', document);
        // addNPWordsEventListener('.en-word', document);

        return document;

    }

    return {
        createElement: createElement,
        writeStory: writeStory
    }

}());