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
const navheight = navheader.offsetHeight;
window.addEventListener('scroll', function (event) {
	const bc = document.querySelector('.theme-page-breadcrumb');
	if(bc != null) {
		(bc as HTMLElement).style.top = `${navheader.offsetHeight - 1}px` ;

		if (window.scrollY > navheight) {
			bc.classList.add('bg-light' , 'shadow');
		} else {
			bc.classList.remove('bg-light' , 'shadow');
		}
	}

	const toTop = document.querySelector("#theme-to-top");
	if(toTop != null) {
		/* show / hide scroll to top button */
		if (window.scrollY > 200) {
			toTop.classList.add('theme-top-visible');
		} else {
			toTop.classList.remove('theme-top-visible');
		}
	}
	
}, false);

/* Breadcrumb */
const bc = document.querySelector('.theme-page-breadcrumb');
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


