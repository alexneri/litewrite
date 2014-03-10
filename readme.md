# [Litewrite Chrome App]
**unobtrusive writing** ported as a Chrome native app by [Alex Neri]

Seeing as this is an app that wonderfully does its job as a writing tool, I believe that it can be used as a native desktop app, though the use of the Chrome App framework. It's a small project that I plan to work on little by little, so there's no release date yet ^^;

This project is a work built on the code made by the cool guys below.

# [Litewrite](http://litewrite.net)
**unobtrusive writing** by [Jan-Christoph Borchardt](http://jancborchardt.net) & [Jorin Vogel](http://jorin-vogel.com)

Litewrite was built out of a need to have a simple way of taking notes, having them everywhere, working on any device, regardless if on- or offline.

* simple design
* available everywhere (device compatibility + synced data)
* works offline

No current solution provides that. It's quite strange that something as benign as jotting down text isn't really solved unless you buy into one specific »ecosystem«. Either the design is complicated, or they only work on Apple hardware, or they are tied to Dropbox, or you can't do anything if you don't have wifi, or or or …

So we built Litewrite

* simple design: There are lots of other self-titled distraction-free editors which offer music, themes, different typefaces, etc etc. We don't, because we think that's unnecessary. If you want music you can listen to it using your favorite music player, if you want to change the font size you can zoom using your browser, …
* device compatibility: It’s a web app which works on all devices and operating systems.
* synced data: Notes are available everywhere, using the open remoteStorage standard. Compatibility with Dropbox, Google Drive, ownCloud, etc.
* offline: Once loaded, it’s essentially a desktop app. Thanks to AppCache and localStorage, both app and data are fully cached offline and synced whenever online.

Now of course it's far from perfect, but we and lots of others use it day-to-day. And that's also why we made it open source If you experience any problems or have suggestions, please let us know at http://github.com/litewrite/litewrite/issues
And if you know a little about web development you're welcome to dive into the code at http://github.com/litewrite/litewrite


Cheers,
Jorin & Jan-Christoph


## Contribute

Play with the [development version](http://litewrite.github.com/litewrite), check out [issues](http://github.com/litewrite/litewrite/issues) and dive into the code if you like. Set up your development environment:

1. git clone http://github.com/litewrite/litewrite
2. Install [node.js](http://nodejs.org/#download)
3. Install grunt gobally via (`sudo `)`npm install -g grunt-cli`
4. Run `npm install` to install the development dependencies
5. `grunt` to start a web server at [http://localhost:8000](http://localhost:8000)

### Building the production version

Run `grunt build`. But keep attention because it overwrites the existing files.


## Thanks

Inspired by [iA Writer](http://iawriter.com) & [LightWrite](http://gun.io/w). Initial prototype built on [Notes](http://nv.github.com/notes). [Alegreya](http://www.huertatipografica.com.ar/tipografias/alegreya/ejemplos.html) typeface by Juan Pablo del Peral


## Remotestorage

This is an [unhosted web app](http://unhosted.org), meaning its code is fully client-side, without any server backend you need to trust! It also supports the open [remotestorage](http://remotestorage.io) protocol so you can sync your data across devices & browsers.


## License

Copyright (c) 2012 [Jan-Christoph Borchardt](http://jancborchardt.net) & [Jorin Vogel](http://jorin-vogel.com), licensed under the [Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.html) version 3 or later. See license.txt for the full license text. Short: **Do anything you want as long as you credit us and redistribute your changes under the same conditions.**


## [Litewrite](http://litewrite.net)
**unobtrusive writing** by [Jan-Christoph Borchardt](http://jancborchardt.net) & [Jorin Vogel](http://jorin-vogel.com)

Litewrite was built out of a need to have a simple way of taking notes, having them everywhere, working on any device, regardless if on- or offline.

* simple design
* available everywhere (device compatibility + synced data)
* works offline

No current solution provides that. It's quite strange that something as benign as jotting down text isn't really solved unless you buy into one specific »ecosystem«. Either the design is complicated, or they only work on Apple hardware, or they are tied to Dropbox, or you can't do anything if you don't have wifi, or or or …

So we built Litewrite

* simple design: There are lots of other self-titled distraction-free editors which offer music, themes, different typefaces, etc etc. We don't, because we think that's unnecessary. If you want music you can listen to it using your favorite music player, if you want to change the font size you can zoom using your browser, …
* device compatibility: It’s a web app which works on all devices and operating systems.
* synced data: Notes are available everywhere, using the open remoteStorage standard. Compatibility with Dropbox, Google Drive, ownCloud, etc.
* offline: Once loaded, it’s essentially a desktop app. Thanks to AppCache and localStorage, both app and data are fully cached offline and synced whenever online.

Now of course it's far from perfect, but we and lots of others use it day-to-day. And that's also why we made it open source If you experience any problems or have suggestions, please let us know at http://github.com/litewrite/litewrite/issues
And if you know a little about web development you're welcome to dive into the code at http://github.com/litewrite/litewrite


Cheers,
Jorin & Jan-Christoph


## Contribute

Play with the [development version](http://litewrite.github.com/litewrite), check out [issues](http://github.com/litewrite/litewrite/issues) and dive into the code if you like. Set up your development environment:

1. git clone http://github.com/litewrite/litewrite
2. Install [node.js](http://nodejs.org/#download)
3. Install grunt gobally via (`sudo `)`npm install -g grunt-cli`
4. Run `npm install` to install the development dependencies
5. `grunt` to start a web server at [http://localhost:8000](http://localhost:8000)

### Building the production version

Run `grunt build`. But keep attention because it overwrites the existing files.


## Thanks

Inspired by [iA Writer](http://iawriter.com) & [LightWrite](http://gun.io/w). Initial prototype built on [Notes](http://nv.github.com/notes). [Alegreya](http://www.huertatipografica.com.ar/tipografias/alegreya/ejemplos.html) typeface by Juan Pablo del Peral


## Remotestorage

This is an [unhosted web app](http://unhosted.org), meaning its code is fully client-side, without any server backend you need to trust! It also supports the open [remotestorage](http://remotestorage.io) protocol so you can sync your data across devices & browsers.


## License

Copyright (c) 2012 [Jan-Christoph Borchardt](http://jancborchardt.net) & [Jorin Vogel](http://jorin-vogel.com), licensed under the [Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.html) version 3 or later. See license.txt for the full license text. Short: **Do anything you want as long as you credit us and redistribute your changes under the same conditions.**
