import { hide, show, toggle } from 'slidetoggle';

/* Open all PDF links in a new window */
document.querySelectorAll('a').forEach((linkElem: Element, index) => {
	if(linkElem.hasAttribute('href') && linkElem.getAttribute('href').endsWith('.pdf')) {
		linkElem.setAttribute('target', '_blank');
	}
});

/* Mobile Navigation */
// document.querySelector('.to-shine-mobile-hamburger').addEventListener('click', () => {
// 	document.querySelector('.to-shine-mobile-hamburger').classList.toggle('open');
// 	document.querySelector('#nav-mobile').classList.toggle('open');
// 	document.querySelector('body').classList.toggle('to-shine-disablescroll');
// });

/* mailencrypting */
setTimeout(function () {
	let mailElement = document.querySelectorAll('[data-madr1]:not(.madr-done)');

	mailElement.forEach((mail: HTMLElement, index) => {
		const maddr = mail.getAttribute('data-madr1') + '@' + mail.getAttribute('data-madr2') + '.' + mail.getAttribute('data-madr3');
		const linktext = mail.getAttribute('data-linktext') ? mail.getAttribute('data-linktext') : maddr;

		const a = document.createElement('a')
		a.setAttribute('href', `mailto:${maddr}`)
		a.innerHTML = linktext;

		mail.parentElement.appendChild(a);
		mail.classList.add('madr-done');
		mail.style.display = 'none';
	});
}, 500);

/* Go to top button */
document.querySelector('#to-shine-to-top').addEventListener('click', (e) => {
	e.preventDefault();

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
})

/* Check if DNN < 9 */
// if(document.getElementsByTagName('body.role-admin').length > 0 && document.getElementsByClassName('personalBarContainer').length > 0) {
// 	document.querySelector('header').style.marginTop = "0";
// }

const navheader = document.querySelector('header');
const navheight = navheader.offsetHeight;
window.addEventListener('scroll', function (event) {
	(document.querySelector('.to-shine-page-breadcrumb') as HTMLElement).style.top = `${navheader.offsetHeight - 1}px` ;

	/* show / hide scroll to top button */
	if (window.scrollY > 200) {
		document.querySelector('#to-shine-to-top').classList.add('ly-top-visible');
		
	} else {
		document.querySelector('#to-shine-to-top').classList.remove('to-shine-top-visible');
	}

	/* sticky header */
	if (window.scrollY >= navheight) {
		navheader.classList.add('fixed-header');
		// document.querySelector('body').style.paddingTop = `${navheight}px`;
		if(document.querySelector('body').classList.contains('va-layout-landingpage')) {
			(document.querySelector('body.va-layout-landingpage') as HTMLElement).style.paddingTop = `0px`;
		}

		if (window.scrollY >= navheight + 1) {
			navheader.classList.add('fixed-top');
		}

	} else {
		navheader.classList.remove('fixed-header','fixed-top');
		document.querySelector('body').style.paddingTop = `0px`;
	}

	if (document.querySelector('.to-shine-page-breadcrumb').getBoundingClientRect().top <= navheight) {
		document.querySelector('.to-shine-page-breadcrumb').classList.add('bg-light' , 'shadow');
	} else {
		document.querySelector('.to-shine-page-breadcrumb').classList.remove('bg-light' , 'shadow');
	}
}, false);
// breadcrumb

/* opens sub navs and mobile navs */
document.querySelectorAll('.to-shine-navopener').forEach((openerElem: HTMLElement, index) => {
	openerElem.addEventListener('click', (e) => {
		const targetElem = e.currentTarget as HTMLElement;
		const targetParent = targetElem.parentElement.parentElement;

		if(!targetParent.classList.contains('to-shine-active')) {
			if(targetElem.closest('.has-child').classList.contains('to-shine-active')) {
				document.querySelector('.to-shine-active').classList.remove('to-shine-active')
				hide(document.querySelector('.to-shine-active ul') as HTMLElement, {});
			}
			targetParent.classList.toggle('to-shine-active');
			show(targetParent.querySelector('ul') as HTMLElement, {});
		} else {
			targetParent.classList.toggle('to-shine-active');
			hide(targetParent.querySelector('ul') as HTMLElement, {});
		}
	})
})


document.querySelector('.to-shine-page-breadcrumb span a:last-child').classList.add('last');
document.querySelector('.to-shine-page-breadcrumb span:last-child').classList.add('last');
if(document.querySelector('.to-shine-page-breadcrumb span .to-shine-page-breadcrumb-link:nth-last-child(3)') != null) {
	document.querySelector('.to-shine-page-breadcrumb span .to-shine-page-breadcrumb-link:nth-last-child(3)').classList.add('second-last');
}
document.querySelector('.to-shine-page-breadcrumb').classList.toggle('to-shine-page-breadcrumb-shortened', (document.querySelector('.to-shine-page-breadcrumb-link') != null || document.querySelectorAll('.to-shine-page-breadcrumb-link').length > 2))
document.querySelector('.to-shine-page-breadcrumb-trigger').addEventListener('click', () => {
	document.querySelector('.to-shine-page-breadcrumb').classList.toggle('to-shine-page-breadcrumb-shortened')
})

