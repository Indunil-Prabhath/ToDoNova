document.querySelectorAll(".collapsible__header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.closest(".collapsible__item");
    const group = item.closest(".collapsible");
    const wasOpen = item.classList.contains("is-open");

    // FAQ-style groups stay exclusive (one panel at a time).
    // Groups marked `.collapsible--independent` (e.g. the footer) let
    // every panel open/close on its own.
    if (!group.classList.contains("collapsible--independent")) {
      group.querySelectorAll(".collapsible__item.is-open").forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem
            .querySelector(".collapsible__header")
            .setAttribute("aria-expanded", "false");
        }
      });
    }

    item.classList.toggle("is-open", !wasOpen);
    header.setAttribute("aria-expanded", String(!wasOpen));
  });
});