/* Open all PDF links in a new window */
document.querySelectorAll('a').forEach((linkElem: Element, index) => {
	if(linkElem.hasAttribute('href') && linkElem.getAttribute('href').endsWith('.pdf')) {
		linkElem.setAttribute('target', '_blank');
	}
});

/* mailencrypting */
setTimeout(function () {
	let mailElement = document.querySelectorAll('[data-madr1]:not(.madr-done)');

	mailElement.forEach((mail: HTMLElement, index) => {
		const maddr = mail.getAttribute('data-madr1') + '@' + mail.getAttribute('data-madr2') + '.' + mail.getAttribute('data-madr3');
		const linktext = mail.getAttribute('data-linktext') ? mail.getAttribute('data-linktext') : maddr;

		const a = document.createElement('a')
		a.setAttribute('href', `mailto:${maddr}`)
		a.innerHTML = linktext;

		if (mail.parentElement) mail.parentElement.appendChild(a);
		mail.classList.add('madr-done');
		mail.style.display = 'none';
	});
}, 500);

/* Go to top button */
if(document.querySelector('#theme-to-top')) {
	document.querySelector('#theme-to-top').addEventListener('click', (e) => {
		e.preventDefault();
	
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	})
}

/* scrolling behavior (to top button / breadcrumb) */
const navheader = document.querySelector('#theme-page-navigation') as HTMLElement;
const bc = document.querySelector('.theme-page-breadcrumb') as HTMLElement | null;
const toTop = document.querySelector("#theme-to-top") as HTMLElement | null;

window.addEventListener('scroll', () => {
	const navHeight = navheader.offsetHeight;

	
	if (bc) {
		bc.style.top = `${navHeight - 1}px`;
		
		// Breadcrumb-Position relativ zum Viewport
		const bcPosition = Math.round(bc.getBoundingClientRect().top);
		
		// Klasse hinzufügen/entfernen, wenn Breadcrumb die obere Position erreicht
		bc.classList.toggle('bg-light', bcPosition < navHeight);
		bc.classList.toggle('shadow-sm', bcPosition < navHeight);
	}

	if (toTop) {
		// Scroll-to-top Button ein-/ausblenden
		toTop.classList.toggle('theme-top-visible', window.scrollY > 200);
	}
}, false);


/* Breadcrumb */
if(bc){
	const bcALast = document.querySelector('.theme-page-breadcrumb span a:last-child');
	if(bcALast) bcALast.classList.add('last');

	const bcSpanLast = document.querySelector('.theme-page-breadcrumb span:last-child')
	if(bcSpanLast) bcSpanLast.classList.add('last');

	const bcSpanLinkChild = document.querySelector('.theme-page-breadcrumb span .theme-page-breadcrumb-link:nth-last-child(3)');
	if(bcSpanLinkChild) bcSpanLinkChild.classList.add('second-last');

	bc.classList.toggle('theme-page-breadcrumb-shortened', 
		(document.querySelector('.theme-page-breadcrumb-link') != null || document.querySelectorAll('.theme-page-breadcrumb-link').length > 2)
	)
	
	const bcTrigger = document.querySelector('.theme-page-breadcrumb-trigger');
	if(bcTrigger) {
		bcTrigger.addEventListener('click', () => {
			bc.classList.toggle('theme-page-breadcrumb-shortened')
		})
	}
}


