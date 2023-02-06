function downloadSAGE(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const dllang = urlParams.get('dllang');
	const dlversion = urlParams.get('dlversion');
	const dlfiletype = urlParams.get('dlfiletype');
	open("./dl/SAGE/" + dlversion + "/SAGE_v." + dlversion + "_" + dllang + "." + dlfiletype )
}

function initpage(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const dllang = urlParams.get('dllang');
	const dlversion = urlParams.get('dlversion');
	const dlfiletype = urlParams.get('dlfiletype');
	var lang = navigator.language.substr(0,2).toLowerCase();
	var thanksTitle = document.getElementById("thanksTitle");
	var forwhat = document.getElementById("forwhat");
	var dlnotstarting = document.getElementById("dlnotstarting");
	var downloadversion = dlversion.replace("b", " beta");
	
	if (dllang == "fr"){
		if (lang == "fr"){
			downloadlang = "Français";
		}
		
		if (lang == "en"){
			downloadlang = "French";
		}
	}
	
	if (dllang == "en"){
		if (lang == "fr"){
			downloadlang = "Anglais";
		}
		
		if (lang == "en"){
			downloadlang = "English";
		}
	}
	
	if (dlfiletype == "sprite"){
		downloadfiletype = "Scratch";
	}
	
	if (dlfiletype == "sb"){
		downloadfiletype = "Scratch 1";
	}
	
	if (dlfiletype == "sb3"){
		downloadfiletype = "Scratch 3";
	}
	
	if (lang == "fr"){
		thanksTitle.innerText = "Merci";
		forwhat.innerText = "d'avoir téléchargé SAGE v." + downloadversion + " en " + downloadlang + " pour " + downloadfiletype;
		dlnotstarting.innerHTML = 'Le téléchargement ne démmarre pas ? <a href="javascript: downloadSAGE();">Cliquez ici</a>';
		document.title = "SAGE - Téléchargement en cours";
	}
	
	if (lang == "en"){
		thanksTitle.innerText = "Thanks";
		forwhat.innerText = "We're downloading SAGE v." + downloadversion + " in " + downloadlang + " for " + downloadfiletype;
		dlnotstarting.innerHTML = 'The download isn\'t starting ? <a href="javascript: downloadSAGE();">Click here</a>';
		document.title = "SAGE - Downloading";
	}
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dllang = urlParams.get('dllang');
const dlversion = urlParams.get('dlversion');
const dlfiletype = urlParams.get('dlfiletype');

if (dllang == ''){
	missingvalue();
} else {
	if (dlversion == ''){
		missingvalue();
	} else {
		if (dlfiletype == ''){
			missingvalue();
		} else {
			initpage();
			downloadSAGE();
		}
	}
}