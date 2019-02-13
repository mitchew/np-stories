/**
 * Author: Mitchell Wilson
 * Date: December 11, 2018
 * Description: This module is for the np-stories app. It is the main file as
 *   of this release.
 * Dependencies: a document, modal.js, helpers.js
 */
'use strict';

var stories = (function stories(document, modal, helpers){

    var create = modal.create;
    var createElement = helpers.createElement;
    var addClassList = helpers.addClassList;
    
    /**
     * This function will add event listeners to an array of word elements
     * @param {string} className 
     * @param {obj} document
     */
    var addNPWordsEventListener = function addNPWordsEventListener(className, document) {

        var words = document.querySelectorAll(className);

        words.forEach(function (word) {

            word.addEventListener('click', function () {

                isNPWord(this.classList[0]) ? create(document, this.innerText) : false;

            });

        });

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
            var npWords = line.np;
            var enWords = line.en;

            npWords = npWords.split(' ');

            // console.log('npWords');
            // console.log(npWords);
            // console.log('Creating line elements');
            var lineElement = createElement('div', document);
            var npLineElement = createElement('div', document);
            var enLineElement = createElement('div', document);

            lineElement = addClassList(lineElement, 'line');
            npLineElement = addClassList(npLineElement, 'np-line');
            enLineElement = addClassList(enLineElement, 'en-line');

            npWords.forEach(function (word) {

                // console.log(word);
                var wordElement = createElement('span', document);
                
                wordElement.innerText = word;
                wordElement = addClassList(wordElement, 'np-word');
                // console.log(wordElement);
                npLineElement.appendChild(wordElement);

            });

            enWords = enWords.split(' ');
            // console.log(enWords);
            enWords.forEach(function (word) {

                // console.log(word);
                var wordElement = createElement('span', document);

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
        writeStory: writeStory
    }

}(document, modal, helpers));