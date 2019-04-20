/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};


var Jukebox = function () {
    "use strict";
    var albums = [], self;

    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = -1, fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};

var jbox = new Jukebox();

var Album = function (artist, title) {
    "use strict";
	 this.artist = artist;
	 var self = {
        played: 0,
        play: function () {
            this.played += 1;
			//window.console.log("Album played " + self.played);
        },
        display: function () {
            return "<em>" + artist + "</em> The album has been played " + self.played + " times.";
        }
    };
    return self;
};
/*
//Replace old assignment startup code with a new code

var jbox = new Jukebox();

var album1 = new Album("Operation Ivy", "Energy");
var album2 = new Album("Blink 182", "Dude Ranch");
var album3 = new Album("New Found Glory", "Sticks and Stones");

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);

album1.play();
album1.play();
album1.play();
album2.play();
album3.play();
*/


window.addEventListener("load", function () {
	"use strict";

	//CREATE AN ARRAY FOR ALL ARTISTS AND SONGS
	// AND BIND THE ARRAY TO THE DROP DOWN MENU ON THE WEB PAGE

	// list album labels
	//var groups = $("albums").getElementsByTagName("optgroup");
	//window.console.log(groups[0].label);
	//window.console.log(groups[1].label);
	//window.console.log(groups[2].label);

    var optgroups = $("albums").getElementsByTagName('optgroup');
      //window.console.log("Number of optgroups: " + optgroups.length);

    var albumsArray = [];

    for (var i = 0; i < optgroups.length; i++) {
		var options = optgroups[i].getElementsByTagName('option');
		 //window.console.log("Number of option: " + options.length);
		for (var j = 0; j < options.length; j++) {
		albumsArray[i] = [optgroups[i].label,options[j].value];
		 // window.console.log(albumsArray[i]);
		}

     }

      window.console.log(albumsArray);

	//ITERATE THROUGH ARRAY AND CREATE NEW ALBUM CLASS INSTANCES AND NEW JUKEBOX INSTANCES Jukebox instances.



	var AlbumsInstances = [];

	for (var i = 0; i < albumsArray.length; i++ ) {
		/*
		var album1 = new Album("Operation Ivy", "Energy");
        var album2 = new Album("Blink 182", "Dude Ranch");
        var album3 = new Album("New Found Glory", "Sticks and Stones");

		jbox.addAlbum(album1);
        jbox.addAlbum(album2);
        jbox.addAlbum(album3);
        */
		AlbumsInstances[i] = new Album(albumsArray[i][0],albumsArray[i][1]);
		jbox.addAlbum(AlbumsInstances[i]);
		 // window.console.log("added album -" +AlbumsInstances[i]);
	}

	// PLAY BUTTON EVENT LISTENER
	$("play").addEventListener("click", function (e) {
		   "use strict";
		    e.preventDefault();

			// window.console.log("You clicked 'play' button");

		  	var song = $("albums").options[$("albums").selectedIndex].value;
			var artist = $("albums").options[$("albums").selectedIndex].parentNode.label;

			window.console.log("you selected song " + song, " from artist: " + artist);

			$("playing").innerHTML = "Playing <em>"+ artist + "'</em> song: <em>" + song + "</em>! ";

			/*album1.play();
			album1.play();
			album1.play();
			album2.play();
			album3.play();*/


		// ???? Problem here ????
			for (var i = 0; i < albumsArray.length; i++) {
				  //window.console.log(albumsArray[i][0], artist);
				if (albumsArray[i][0] === artist) {
					AlbumsInstances[i].play();
					break;
				}; // end if
			} // end for

	});

	// FAVORITE BUTTON EVENT LISTENER
	$("favorite").addEventListener("click", function () {
		   "use strict";
			 // window.console.log("You clicked ' show favorite' button");
			window.console.log("Your favorite album is: " + jbox.favoriteAlbum());
			$("favOutput").innerHTML = "Your Favorite Album - " + jbox.favoriteAlbum() + ".";
	});
});  // end dom load


