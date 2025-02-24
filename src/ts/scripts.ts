import '../scss/styles.scss';

/* Open all PDF links in a new window */
document.querySelectorAll('a').forEach((linkElem: Element, index) => {
	if(linkElem.hasAttribute('href') && linkElem.getAttribute('href')?.endsWith('.pdf')) {
		linkElem.setAttribute('target', '_blank');
	}
});

/* mailencrypting */
setTimeout(function () {
	let mailElement = document.querySelectorAll('[data-madr1]:not(.madr-done)');

	mailElement.forEach((mail: Element, index) => {
		const maddr = mail.getAttribute('data-madr1') + '@' + mail.getAttribute('data-madr2') + '.' + mail.getAttribute('data-madr3');
		const linktext = mail.getAttribute('data-linktext') ? mail.getAttribute('data-linktext') : maddr;

		const a = document.createElement('a')
		a.setAttribute('href', `mailto:${maddr}`)
		a.innerHTML = linktext || '';

		if (mail.parentElement) mail.parentElement.appendChild(a);
		mail.classList.add('madr-done');
		(mail as HTMLElement).style.display = 'none';
	});
}, 500);

/* Go to top button */
const themeTop = document.querySelector('#theme-to-top');
if(themeTop) {
	themeTop.addEventListener('click', (e) => {
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
		
		// Breadcrumb-Positon relativ to Viewport
		const bcPosition = Math.round(bc.getBoundingClientRect().top);
		
		// Toggle class if breadcrumb reaches top
		bc.classList.toggle('bg-light', bcPosition < navHeight);
		bc.classList.toggle('shadow-sm', bcPosition < navHeight);
	}

	if (toTop) {
		// show/hide scroll-to-top button
		toTop.classList.toggle('theme-top-visible', window.scrollY > 200);
	}
}, false);

/* Breadcrumb */
if(bc){
	const bcTrigger = document.querySelector('.breadcrumb-item-trigger') as HTMLElement | null;
	const bcHome = document.querySelector('.breadcrumb-item-home') as HTMLElement;
	if(bcTrigger) {
		bcTrigger.addEventListener('click', () => {
			bcHome.style.display = bcHome.style.display === 'none' ? 'inline-block' : 'none';
		})

		bcTrigger.style.display = document.querySelectorAll('.breadcrumb-item').length > 2 ? 'inline-block' : 'none';
		bcHome.style.display = document.querySelectorAll('.breadcrumb-item').length > 2 ? 'none' : 'inline-block';

	}
}


