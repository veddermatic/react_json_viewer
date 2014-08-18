/** @jsx React.DOM */
var someFakeJson = {
    "something": "A string value",
    "aBool": false,
    "anotherBool": true,
    "AnArray": [
        "how", "now", "brown", "cow"
    ],
    "ohNoItsNull": null,
    "numberVal": 17,
    "nestedObject": {
        "wow": "neato",
        "thisMany": 88,
        "thatArrayAgain": [
            "how", "now", "brown", "cow"
        ],
        "soCool": true,
        "rabbitHole": {
            "hippity": "hop",
            "youDont": "stop",
            "blah": "some witty value"
        }
    }
};
// This creates a JSON viewer and loads data from a file 
// I created with http://www.json-generator.com/
// you can load the small fake data above by replacing:
//
//      source="dist/data/fakeJSON.json" 
//
// with:
//
//       data={someFakeJson} 
//
var myJSONViewer = React.renderComponent(
    JSONTree({ source: 'dist/data/fakeJSON.json' }), document.getElementById('content')
);

var remoteDataButton = document.getElementById('loadRemoteData');
var propsDataButton = document.getElementById('loadWithProps');
var initialDataButton = document.getElementById('loadInitialData');

remoteDataButton.addEventListener('click', function () {
    myJSONViewer.loadDataFromURL("dist/data/moreFakeData.json");
});
propsDataButton.addEventListener('click', function () {
    myJSONViewer.setProps({ data: someFakeJson });
});
initialDataButton.addEventListener('click', function () {
    myJSONViewer.loadDataFromURL("dist/data/fakeJSON.json");
});
