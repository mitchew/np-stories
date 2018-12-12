'use strict';
/**
 * Author: Mitchell Wilson
 * Date: December 11, 2018
 * Description: This module is for the np-stories application. It will
 *   get a story and then use the stories module to write it to the page.
 * Dependencies: stores.js
 */

var ajax = (function ajax() {
    var data;
    var request = function request(method, url) {
        var req = new XMLHttpRequest();
        req.open(method, url);
        req.send();

        req.onreadystatechange = function orsc() {
            if (req.readyState === 4 && req.status === 200) {
                data = JSON.parse(req.responseText);
                document.data = data;
                console.log('Clearing story container');
                story.innerHTML = '';
                console.log('Writing the story');
                stories.writeStory(document, data);
            }
        }

        return;
    };

    return {
        request: request
        , data: data
    }
}());