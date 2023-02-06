function initpage(){
	var lang = navigator.language.substr(0,2).toLowerCase();
	var homeheader = document.getElementById("homeheader");
	var aboutheader = document.getElementById("aboutheader");
	var downloadheader = document.getElementById("downloadheader");
	var tutorialsheader = document.getElementById("tutorialsheader");
	var homeTitle = document.getElementById("homeTitle");
	var welcomeParagraph = document.getElementById("welcomeParagraph");
	var aboutTitle = document.getElementById("aboutTitle");
	var aboutParagraph = document.getElementById("aboutParagraph");
	var downloadTitle = document.getElementById("downloadTitle");
	var downloadParagraph = document.getElementById("downloadParagraph");
	var submitbtn = document.getElementById("submitbtn");
	var contact = document.getElementById("contact");
	var contactbtn = document.getElementById("contactbtn");
	var otherwebsites = document.getElementById("otherwebsites");
	
	if (lang == "fr"){
		// page title
		document.title = "SAGE";
		// header
		homeheader.innerText = "Acceuil";
		aboutheader.innerText = "À propos";
		downloadheader.innerText = "Téléchargements";
		tutorialsheader.innerText = "Tutoriels";
		// #home section
		homeTitle.innerText = "Acceuil";
		welcomeParagraph.innerHTML = "<h3>Bienvenue sur le site de <i>SAGE</i> .</h3>Créez, Imaginez, Partagez avec nous.";
		// #about section
		aboutTitle.innerText = "À propos";
		aboutParagraph.innerHTML = '<h3>SAGE est l&apos;anagramme de <u>S</u>cratch <u>A</u>dvanced <u>G</u>ame <u>E</u>ngine. </h3><br>Avec SAGE, on peut <a href="./howto/physics/">calculer des physiques</a>, <a href="./howto/animate_sprites/">animer des sprites</a>...<br>SAGE est un atout puissant pour les jeux 2D complexes.';
		// #download section
		downloadTitle.innerText = "Téléchargements";
		downloadParagraph.innerHTML = "<p>Séléctionnez la langue,la version,et le format de fichier de SAGE que vous voulez télécharger: ";
		submitbtn.innerHTML = '<input type="submit" value="Continuer" class="action-button">';
		contact.innerText = "Contact";
		contactbtn.innerHTML = '<input value="Me contacter" class="contact-button">';
		otherwebsites.innerText = "Mes autres plate-formes";
	}
	
	if (lang == "en"){
		// page title
		document.title = "SAGE";
		// header
		homeheader.innerText = "Home";
		aboutheader.innerText = "About";
		downloadheader.innerText = "Downloads";
		tutorialsheader.innerText = "Tutorials";
		// #home section
		homeTitle.innerText = "Home";
		welcomeParagraph.innerHTML = "<h3>Welcome on <i>SAGE</i>'s website .</h3>Create, Imagine, Share with us.";
		// #about section
		aboutTitle.innerText = "About";
		aboutParagraph.innerHTML = '<h3>SAGE the anagram of <u>S</u>cratch <u>A</u>dvanced <u>G</u>ame <u>E</u>ngine. </h3><br>With SAGE, we can <a href="./howto/physics/">calculate physics</a>, <a href="./howto/animate_sprites/">animate sprites</a>...<br>SAGE can be very helpful for complex 2D games.';
		// #download section
		downloadTitle.innerText = "Downloads";
		downloadParagraph.innerHTML = "<p>Select SAGE's language, version and file format to download: ";
		submitbtn.innerHTML = '<input type="submit" value="Continuer" class="action-button">';
		contact.innerText = "Contact";
		contactbtn.innerHTML = '<input value="Contact me" class="contact-button">';
		otherwebsites.innerText = "My other plate-formes";
	}
}

window.onload = function () {
 
    (function() // Code in a function to create an isolate scope
    {
    var speed = 500;
    var moving_frequency = 15; // Affects performance !
    var links = document.querySelectorAll("header a"); // Active links
    var href;
    for(var i=0; i<links.length; i++)
    {  
        href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
        if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
        {
            links[i].onclick = function()
            {
                var element;
                var href = this.attributes.href.nodeValue.toString();
                if(element = document.getElementById(href.substr(1)))
                {
                    var hop_count = speed/moving_frequency
                    var getScrollTopDocumentAtBegin = getScrollTopDocument();
                    var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;
 
                    for(var j = 1; j <= hop_count; j++)
                    {
                        (function()
                        {
                            var hop_top_position = gap*j;
                            setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*j);
                        })();
                    }
                }
 
                return false;
            };
        }
    }
 
    var getScrollTopElement =  function (e)
    {
        var top = 0;
 
        while (e.offsetParent != undefined && e.offsetParent != null)
        {
            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }
 
        return top;
    };
 
    var getScrollTopDocument = function()
    {
        return document.documentElement.scrollTop + document.body.scrollTop;
    };
    })();
     
}

function changelight(){
	if (localStorage.light == "on"){
		localStorage.lightcode = "<style>body{background-color: #3a3a3a; transition-duration: 1s;} #novideobg{color: white; transition-duration: 1s;}footer{background-color: #1c1c1c;} footer,table,tbody{color: white;} .octicon-mark-github{fill: black; transition-duration: 1s;}.action-button{ transition-duration: 1s; padding: 10px 40px;  float: left;  border-radius: 10px;  font-family: 'Ubuntu', arial;  font-size: 25px;  color: #ffffff;  text-decoration: none;  background-color: #666666;  border-bottom: 5px solid #979797;  text-shadow: 0px -2px #303030;  transition: all 0.1s;  -webkit-transition: all 0.1s; }.contact-button:active{ transition-duration: 1s; transform: translate(0px,5px);  -webkit-transform: translate(0px,5px);  border-bottom: 1px solid;}</style>";
		localStorage.light = "off";
	} else if (localStorage.light == "off"){
		localStorage.lightcode = "<style>body{background-color: white; transition-duration: 1s;} #novideobg{color: black; transition-duration: 1s;} footer{background-color: #3a3a3a;} footer table tbody{color: #959595;} .octicon-mark-github{fill: white; transition-duration: 1s;}.action-button { transition-duration: 1s; padding: 10px 40px; float: left; border-radius: 10px; font-family: 'Ubuntu', arial; font-size: 25px; color: #ffffff; text-decoration: none; background-color: #3498DB; border-bottom: 5px solid #2980B9; text-shadow: 0px -2px #2980B9; transition: all 0.1s; -webkit-transition: all 0.1s;} .action-button:active { transform: translate(0px,5px); -webkit-transform: translate(0px,5px); border-bottom: 1px solid; transition-duration: 1s;}</style>";
		localStorage.light = "on";
	}
	document.getElementById("styleinsert").innerHTML=localStorage.lightcode;
}

document.getElementById("styleinsert").innerHTML=localStorage.lightcode.replace(" transition-duration: 1s;", "");

initpage();