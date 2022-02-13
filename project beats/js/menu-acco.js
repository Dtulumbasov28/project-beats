const mesureWidth = () => {
    return 500;
}

const openItem = item => {
    const hiddenContent = item.find(".color-menu__content");
    const reqWidth = mesureWidth();

    hiddenContent.width(reqWidth);
}

$(".color-menu__link").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".color-menu__item");

    openItem(item);
});