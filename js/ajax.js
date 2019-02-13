/**
 * Author: Mitchell Wilson
 * Date: February 12, 2019
 * Description: This module is for the np-stories application. It will
 *   get a story and then use the stories module to write it to the page.
 * Dependencies: stories.js
 */
'use strict';

var ajax = (function ajax(stories) {

    var data;
    
    var request = function request(method, url, document, element) {
        var req = new XMLHttpRequest();
        req.open(method, url);
        req.send();

        req.onreadystatechange = function onReadyStateChange() {
            if (req.readyState === 4 && req.status === 200) {
                data = JSON.parse(req.responseText);
                document.data = data;
                console.log('Clearing element container');
                element.innerHTML = '';
                console.log('Writing the data');
                stories.writeStory(document, data);
            }
        }

        return document;

    };

    return {
        request: request,
    }

}(stories));