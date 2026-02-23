var VERSION = "v1.0.0";

var pages = {
		"Monster Hunter Freedom DX": "https://github.com/SilverJolteon/FreedomDX",
		"MHXX/MHGU Save Manager": "https://silverjolteon.github.io/MHGU/save-manager/index.html",
		"MHP3rd Database": "https://mhp3db.github.io/",
		"ACNH Custom Color Editor": "https://silverjolteon.github.io/ACNH/editor/index.html",
		"Break0": "",
		"YouTube": "https://www.youtube.com/channel/UCRWS_gaVhwrD7aXDftkWS3A",
		"Twitch": "https://www.twitch.tv/silverjolteon",
		"Bluesky": "https://bsky.app/profile/silversuzuna.bsky.social",
		"Twitter": "https://twitter.com/SilverJolteon",
		"tumblr [Old]": "https://silverjolteon.tumblr.com/tagged/over%201000",
		"Break1": "",
		"MGN Discord": "https://discord.gg/kaPScVrPes"
};

function openSidenav(){
	document.getElementById("sidenav").style.visibility = "visible";
	document.getElementById("sidenav").style.width = "100vw";
}

function closeSidenav(){
	document.getElementById("sidenav").style.width = "0";
	document.getElementById("sidenav").style.visibility = "hidden";
}

window.addEventListener("load", () => {
	var page = window.location.pathname.split("/").pop();
	if(page === "") page = "index.html";
	var navbar = document.getElementById("navbar");
	/*
	navbar.innerHTML = `
		<button type="button" onClick="openSidenav()">
			<svg width="24" height="24">
				<path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path>
			</svg>
		</button>
	`;
	*/
	var sidenav = document.getElementById("sidenav");
	sidenav.innerHTML = `<a href="index.html"><img class="logo" src="assets/logo.png"></a>`;
	for(title in pages){
		if(pages[title] != "") sidenav.innerHTML += `<a href="${pages[title]}">${title}</a>`;
		else sidenav.innerHTML += `</br>`;
		if(page === pages[title]){
			navbar.innerHTML += `<span onClick="openSidenav()" style="cursor: pointer">${title}</span>`;
		}
	}
	
	var footer = document.getElementById("footer");
	var now = new Date();
	var year = now.getFullYear();
	var start_year = 2026;
	year = (year != start_year) ? `${start_year} - ${year}` : year;
	footer.innerHTML = `<p><a href="https://github.com/SilverJolteon">&copy;${year} SilverJolteon</a></p>&nbsp;&#183;&nbsp;<p><a href="https://kokomicomms.carrd.co/">Icon by kokomi</a></p>`;
});