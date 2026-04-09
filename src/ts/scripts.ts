(function initTheme() {
	const MAIL_DECRYPT_DELAY = 500;
	const SCROLL_TO_TOP_THRESHOLD = 200;

	/* Open all PDF links in a new window */
	document.querySelectorAll('a').forEach((linkElem: Element) => {
		const href = linkElem.getAttribute('href');
		if (href?.endsWith('.pdf')) {
			linkElem.setAttribute('target', '_blank');
		}
	});

	/* mailencrypting */
	setTimeout(() => {
		document.querySelectorAll('[data-madr1]:not(.madr-done)').forEach((mail: Element) => {
			const maddr = mail.getAttribute('data-madr1') + '@' + mail.getAttribute('data-madr2') + '.' + mail.getAttribute('data-madr3');
			const linktext = mail.getAttribute('data-linktext') || maddr;

			const a = document.createElement('a');
			a.setAttribute('href', `mailto:${maddr}`);
			a.textContent = linktext;

			if (mail.parentElement) mail.parentElement.appendChild(a);
			mail.classList.add('madr-done');
			(mail as HTMLElement).style.display = 'none';
		});
	}, MAIL_DECRYPT_DELAY);

	/* Go to top button */
	const toTop = document.querySelector('#theme-to-top');
	if (toTop) {
		toTop.addEventListener('click', (e) => {
			e.preventDefault();
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		});
	}

	/* scrolling behavior (to top button / breadcrumb) */
	const navheader = document.querySelector('#theme-page-navigation') as HTMLElement | null;
	const bc = document.querySelector('.theme-page-breadcrumb') as HTMLElement | null;

	window.addEventListener('scroll', () => {
		const navHeight = navheader?.offsetHeight || 0;

		if (bc) {
			bc.style.top = `${navHeight - 1}px`;
			
			// Breadcrumb-Position relativ to Viewport
			const bcPosition = Math.round(bc.getBoundingClientRect().top);
			
			// Toggle class if breadcrumb reaches top
			bc.classList.toggle('bg-light', bcPosition < navHeight);
			bc.classList.toggle('shadow-sm', bcPosition < navHeight);
		}

		if (toTop) {
			// show/hide scroll-to-top button
			toTop.classList.toggle('theme-top-visible', window.scrollY > SCROLL_TO_TOP_THRESHOLD);
		}
	});

	/* Breadcrumb */
	if (bc) {
		const bcTrigger = document.querySelector('.breadcrumb-item-trigger') as HTMLElement | null;
		const bcHome = document.querySelector('.breadcrumb-item-home') as HTMLElement;
		
		if (bcTrigger) {
			const breadcrumbItemCount = document.querySelectorAll('.breadcrumb-item').length;
			const showTrigger = breadcrumbItemCount > 2;

			bcTrigger.addEventListener('click', () => {
				bcHome.style.display = bcHome.style.display === 'none' ? 'inline-block' : 'none';
			});

			bcTrigger.style.display = showTrigger ? 'inline-block' : 'none';
			bcHome.style.display = showTrigger ? 'none' : 'inline-block';
		}
	}
})();
