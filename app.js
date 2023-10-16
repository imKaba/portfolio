const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


document.addEventListener("scroll", function() {
	var currentScroll = window.scrollY;
  
	var sections = document.querySelectorAll("section");
  
	sections.forEach(function(section) {
	  var sectionTop = section.offsetTop;
	  var sectionBottom = sectionTop + section.clientHeight;
  
	  if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
		// Add the "active" class to the corresponding link
		var link = document.querySelector('a[href="#' + section.id + '"]');
		if (link) {
		  link.classList.add("active");
		  link.style.transition = "0.5s"; // Adjust the transition duration
		  link.style.transform = "scaleX(1)"; // Animate the underline to fully visible
		}
	  } else {
		// Remove the "active" class from other links
		var link = document.querySelector('a[href="#' + section.id + '"]');
		if (link) {
		  link.classList.remove("active");
		  link.style.transition = "0.3s"; // Adjust the transition duration
		  link.style.transform = "scaleX(0)"; // Animate the underline to hide
		}
	  }
	});
  });

  
  window.addEventListener("scroll", function() {
    var scrollIndicator = document.querySelector(".scroll-indicator");
    var arrowIcon = document.querySelector(".scroll-indicator i svg");
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      // Faites défiler vers le bas, affichez la flèche
      scrollIndicator.style.opacity = 1;
    } else {
      // En haut de la page, masquez la flèche
      scrollIndicator.style.opacity = 0;
    }
  
    if (scrollPosition + window.innerHeight >= document.documentElement.scrollHeight) {
      // Atteint le bas de la page, faites pivoter la flèche
      arrowIcon.style.transform = "rotate(180deg)";
	  arrowIcon.style.transition = ".6s";
    } else {
      // Pas encore au bas de la page, réinitialisez la rotation de la flèche
      arrowIcon.style.transform = "rotate(0deg)";
    }
  });