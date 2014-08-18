# React JSON Viewer

I wanted to mess with React some more. I needed to look at some JSON data. This happened.

## What is it?

A simple viewer for JSON data written using the React library who's goal is to be relatively fast, and "not ugly". It attempts to be fast by not drawing any child nodes of an Array or Object until it's expanded. It attempts to be not ugly by being simple and drawing on what I can remember from my design background.  

## Example

There is an [example page](http://eskimospy.com/stuff/react/json/) up that is simply a copy of this repo. There you can see some fake data rendered, and load data both remotely and via a set props call.

## Installation

Clone or download it.  The `jsonViewer.min.js` file in the `dist/js` directory is all you need to make your own "working" JSON viewer. The `screen.css` file in the `dist/css` directory will help make it not ugly.

To see it in action, load up the `index.html` file that came with the download, and you'll see a viewer load up a ~110k JSON file I made using [json-generator.com](http://www.json-generator.com/). Since my index page loads React from a CDN and makes an XMLHttpRequest, you very likely will need to view the `index.html` page trough a web server rather than a local file URL.


The source is all in the `src` directory. Use your favorite tool(s) to compile the SASS and convert the JSX if you want to modify anything. 

## Usage

You can pass data to an instance of the `JSONTree` component directly as the `data` prop, or set an initial URL for it to load data from when it mounts via the `source` prop.  After that, you can either call `setProps` and change the `data` value or call the `loadDataFromURL()` method on an instance to change what data it displays. Here are a couple examples:

    
    React.renderComponent(
        <JSONTree source="http://someurl.com/theData.json"  />,
        document.getElementById('content')
    );


The above creates a JSON viewer and will send an HTTP GET request to `http://someurl.com/theData.json` and renders it once it is loaded. Obviously any / all cross-domain caveats apply.

    var lol = {"one": "thing", "after": "another"};
    var aTree = React.renderComponent(
        <JSONTree data={lol} />, document.getElementById('content')
    );
    // some time later...
    aTree.loadDataFromURL('/data/directory/someFile.json');


That would create a viewer and render the data contained in the `lol` variable, and then later load new data in from `/data/directory/someFile.json'`

Once your data is rendered, clicking on any array or object node will expand or contract it. Its fun!*

If you use this somewhere and you want to be a swell person, provide a link back to the project.

*_May not actually be fun._

## Next Steps

Here is some stuff I (or some other enterprising person who wants to help out) might add in the future:

- Make it handle dragging in local JSON files to update data.
- Make a couple themes / alternate styles.
- Have a URL input to allow pasting in new URLs to load.
- Make the code suck less, namely by making it more "app-like" instead of a bunch of ugly globals. Don't pollute the whatnow?
- Handle errors in some other way than `console.error()` with bad messages.


## Have a Nice Day

I hope you have a really great day. 


