function selectBadge(el) {
  if (el.getAttribute("data-active")) {
    el.removeAttribute("data-active");

    if (el.previousElementSibling) {
      if (el.previousElementSibling.getAttribute("data-active")) {
        el.previousElementSibling.style.marginRight = "10px";
        el.previousElementSibling.style.borderTopRightRadius = "10px";
        el.previousElementSibling.style.borderBottomRightRadius = "10px";

        el.style.marginLeft = "10px";
        el.style.borderTopLeftRadius = "10px";
        el.style.borderBottomLeftRadius = "10px";
      }
    }

    if (el.nextElementSibling) {
      if (el.nextElementSibling.getAttribute("data-active")) {
        el.nextElementSibling.style.marginLeft = "10px";
        el.nextElementSibling.style.borderTopLeftRadius = "10px";
        el.nextElementSibling.style.borderBottomLeftRadius = "10px";

        el.style.marginRight = "10px";
        el.style.borderTopRightRadius = "10px";
        el.style.borderBottomRightRadius = "10px";
      }
    }
  } else {
    el.setAttribute("data-active", true);

    if (el.previousElementSibling) {
      if (el.previousElementSibling.getAttribute("data-active")) {
        el.previousElementSibling.style.marginRight = "0px";
        el.previousElementSibling.style.borderTopRightRadius = "0px";
        el.previousElementSibling.style.borderBottomRightRadius = "0px";

        el.style.marginLeft = "0px";
        el.style.borderTopLeftRadius = "0px";
        el.style.borderBottomLeftRadius = "0px";
      }
    }

    if (el.nextElementSibling) {
      if (el.nextElementSibling.getAttribute("data-active")) {
        el.nextElementSibling.style.marginLeft = "0px";
        el.nextElementSibling.style.borderTopLeftRadius = "0px";
        el.nextElementSibling.style.borderBottomLeftRadius = "0px";

        el.style.marginRight = "0px";
        el.style.borderTopRightRadius = "0px";
        el.style.borderBottomRightRadius = "0px";
      }
    }
  }
}
