/**
 * Author: Mitchell Wilson
 * Date: December 11, 2018
 * Description: This application will display Nez Perce stories in a story book
 *   like manner.
 * Dependencies: stories.js, ajax.js
 */
console.log('Loading application');
console.log('Setting menu container selector');
let menu = document.querySelectorAll('.menu')[0];
console.log(menu);
console.log('Clearing menu container');
menu.innerHTML = '';
console.log('Setting story container selector');
let story = document.querySelectorAll('.story')[0];
console.log(story);
console.log('Clearing story container');
story.innerHTML = '';
console.log('Setting storyList array');
let storyList = [
    "hey'uuxchacwal-kaa-hinmeet.json",
    "iceyeeye-tilipe-niin.json"
];
console.log(storyList);

console.log('Creating menu button elements');
storyList.forEach(function (story) {

    console.log('Creating button for ' + story);
    let fragment = stories.createElement('button', document);
    fragment.className = 'menu-button';
    fragment.textContent = story;
    console.log('Adding button to body');
    console.log(fragment);
    menu.appendChild(fragment);

});

console.log('Setting menu buttons array');
let menuList = document.querySelectorAll('.menu-button');
console.log(menuList);

console.log('Add menu button event handlers');
menuList.forEach(function (button) {

    button.addEventListener('click', function (item) {

        console.log(item);
        console.log(this);
        console.log('clicked');
        console.log('Setting storyName');
        let storyName = this.innerText;
        console.log(storyName);
        console.log('Setting storyPath');
        let storyPath = 'stories/' + storyName;
        console.log(storyPath);
        console.log('Getting the story');
        ajax.request('Get', storyPath);
            // .then(function (response) {
            //     console.log('response');
            //     console.log(response);
            //     console.log(response.data);
            //     document.data = response.data;
            //     writeStory(document, story);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
    });
});
