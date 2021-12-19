import { hide, show, toggle } from "slidetoggle";

/* Open all PDF links in a new window */
document.querySelectorAll("a").forEach((linkElem: Element, index) => {
  if (
    linkElem.hasAttribute("href") &&
    (linkElem.getAttribute("href") as string).endsWith(".pdf")
  ) {
    linkElem.setAttribute("target", "_blank");
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
  let mailElement = document.querySelectorAll("[data-madr1]:not(.madr-done)");

  mailElement.forEach((mail: HTMLElement, index) => {
    const maddr =
      mail.getAttribute("data-madr1") +
      "@" +
      mail.getAttribute("data-madr2") +
      "." +
      mail.getAttribute("data-madr3");
    const linktext = mail.getAttribute("data-linktext")
      ? (mail.getAttribute("data-linktext") as string)
      : maddr;

    const a = document.createElement("a");
    a.setAttribute("href", `mailto:${maddr}`);
    a.innerHTML = linktext;

    if (mail.parentElement) mail.parentElement.appendChild(a);
    mail.classList.add("madr-done");
    mail.style.display = "none";
  });
}, 500);

/* Go to top button */
if (document.querySelector("#to-shine-to-top")) {
  (document.querySelector("#to-shine-to-top") as Element).addEventListener(
    "click",
    (e) => {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  );
}

const navheader = document.querySelector("header");
const navheight = navheader ? navheader.offsetHeight : 0;
window.addEventListener(
  "scroll",
  function (event) {
    const bc = document.querySelector(".to-shine-breadcrumb");
    if (bc) {
      (bc as HTMLElement).style.top = `${navheight - 1}px`;

      if (bc.getBoundingClientRect().top <= navheight) {
        bc.classList.add("bg-light", "shadow");
      } else {
        bc.classList.remove("bg-light", "shadow");
      }
    }

    const toTop = document.querySelector("#to-shine-to-top");
    if (toTop) {
      if (window.scrollY > 200) {
        toTop.classList.add("to-shine-top-visible");
      } else {
        toTop.classList.remove("to-shine-top-visible");
      }
    }
  },
  false
);

/* opens sub navs and mobile navs */
document
  .querySelectorAll(".to-shine-navopener")
  .forEach((openerElem: HTMLElement, index) => {
    openerElem.addEventListener("click", (e) => {
      const targetElem = e.currentTarget as HTMLElement;
      const targetParent = (targetElem.parentElement as HTMLElement)
        .parentElement as HTMLElement;

      if (!targetParent.classList.contains("to-shine-active")) {
        const cl = targetElem.closest(".has-child");
        if (cl && cl.classList.contains("to-shine-active")) {
          cl.classList.remove("to-shine-active");
          hide(
            document.querySelector(".to-shine-active ul") as HTMLElement,
            {}
          );
        }
        targetParent.classList.toggle("to-shine-active");
        show(targetParent.querySelector("ul") as HTMLElement, {});
      } else {
        targetParent.classList.toggle("to-shine-active");
        hide(targetParent.querySelector("ul") as HTMLElement, {});
      }
    });
  });

const bc2 = document.querySelector(".to-shine-breadcrumb");
if (bc2) {
  const el1 = document.querySelector(
    ".to-shine-page-breadcrumb span a:last-child"
  );
  if (el1) el1.classList.add("last");
  const el2 = document.querySelector(
    ".to-shine-page-breadcrumb span:last-child"
  );
  if (el2) el2.classList.add("last");
  const el3 = document.querySelector(
    ".to-shine-page-breadcrumb span .to-shine-page-breadcrumb-link:nth-last-child(3)"
  );
  if (el3) {
    el3.classList.add("second-last");
  }
  const el4 = document.querySelector(".to-shine-page-breadcrumb");
  if (el4)
    el4.classList.toggle(
      "to-shine-page-breadcrumb-shortened",
      document.querySelector(".to-shine-page-breadcrumb-link") != null ||
        document.querySelectorAll(".to-shine-page-breadcrumb-link").length > 2
    );
  const el6 = document.querySelector(".to-shine-page-breadcrumb-trigger");
  if (el6)
    el6.addEventListener("click", () => {
      bc2.classList.toggle("to-shine-page-breadcrumb-shortened");
    });
}
