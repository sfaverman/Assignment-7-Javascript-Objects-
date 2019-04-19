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

var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return artist + " : " + title + ". The album has been played " + this.played + " times.";
        }
    };
    return self;
};

var jbox = new Jukebox();

/*
var dropdown = document.getElementsById('albums');
var optgroups = dropdown.getElementsByTagName('optgroup');

var results = [];
for(var i = 0; i < optgroups.length; i++) {
    results.push(optgroups[i].getAttribute('value'));
}

window.alert(results);*/


var album1 = new Album("Operation Ivy", "Energy");
var album2 = new Album("Blink 182", "Dude Ranch");
var album3 = new Album("New Found Glory", "Sticks and Stones");

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);

/*album1.play();
album1.play();
album1.play();
album2.play();
album3.play();*/


window.addEventListener("load", function () {
	"use strict";

	// list album labels
	var groups = $("albums").getElementsByTagName("optgroup");
	window.console.log(groups[0].label);
	window.console.log(groups[1].label);
	window.console.log(groups[2].label);

	var song;

	$("play").addEventListener("click", function (e) {
		   "use strict";
		    e.preventDefault();
			window.console.log("You clicked 'play' button");
		    window.console.log("Selected option index" + $("albums").selectedIndex);
			/*song = $("albums").options[$("albums").selectedIndex].value;*/
			/* window.console.log("you selected song ", song);*/

			/* $("playing").innerHTML = "Playing song:  " + song + " !";*/
			/*var G=document.getElementsByTagName('optgroup');
			var selAlbum = G[selectedIndex].label;
			window.alert("Selected Album", selAlbum);*/
			/*To get a list of the options of the second optgroup:
			var ops=G[1].getElementsByTagName('option')*/
	});

	$("favorite").addEventListener("click", function () {
		   "use strict";
			window.console.log("You clicked 'favorite' button");
			window.console.log("You favorite album is: " + jbox.favoriteAlbum());
			$("favOutput").innerHTML = jbox.favoriteAlbum();
	});
});


