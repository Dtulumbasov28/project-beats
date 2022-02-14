const mesureWidth = item => {
    const screenWidth = $(window).width();
    const container = item.closest(".color-menu");
    const titlesBlocks = container.find(".color-menu__link");
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;
    
    const isMobile = window.matchMedia("(max-width: 768px").matches;

    if (isMobile) {
        return screenWidth - titlesWidth;
    } else {
        return 500;
    }

}

const closeEveryItemInContainer = container => {
    const items = container.find(".color-menu__item");
    const content = container.find(".color-menu__content");

    items.removeClass("active");
    content.width(0);
}

const unblockItem = item => {
    const hiddenContent = item.find(".color-menu__content");
    const reqWidth = mesureWidth(item);

    item.addClass("active");
    hiddenContent.width(reqWidth);
}

$(".color-menu__link").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".color-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".color-menu");

    if (itemOpened) {
        closeEveryItemInContainer(container);
    } else {
        closeEveryItemInContainer(container);
        unblockItem(item);
    }
});

$(".color-menu__close").on("click", e => {
    e.preventDefault();
    closeEveryItemInContainer($('.color-menu'));
})