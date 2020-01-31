function onMenuItemCreated() {
    if (browser.runtime.lastError) {
        console.log(`Error: ${browser.runtime.lastError}`);
    } else {
        console.log("Item created successfully");
    }
}

function addToBanlist(id) {
    browser.storage.local.get("banlist", (item) => {
        console.log(item);
        const s = new Set(item["banlist"] || []);
        s.add(id);
        browser.storage.local.set({ "banlist": Array.from(s) });
    });
}

function removeFromBanlist(id) {
    browser.storage.local.get("banlist", (item) => {
        console.log(item);
        const s = new Set(item["banlist"] || []);
        s.delete(id);
        browser.storage.local.set({ "banlist": Array.from(s) });
    });
}

browser.contextMenus.create({
    id: "ban-up",
    title: "Ban up",
    contexts: ["link"],
    documentUrlPatterns: ["*://www.acfun.cn/a/ac*"]
}, onMenuItemCreated);

browser.contextMenus.create({
    id: "allow-up",
    title: "Allow up",
    contexts: ["link"],
    documentUrlPatterns: ["*://www.acfun.cn/a/ac*"]
}, onMenuItemCreated);

function getUpId(homepageUrl) {
    const r = /(\d*)\.aspx/;
    var match = r.exec(homepageUrl);
    return match[1];
}

browser.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId == "ban-up") {
        const upId = getUpId(info.linkUrl);
        if (upId) {
            console.log("ban-up", upId);
            addToBanlist(upId);
        }
    } else if (info.menuItemId == "allow-up") {
        const upId = getUpId(info.linkUrl);
        if (upId) {
            console.log("allow-up", upId);
            removeFromBanlist(upId);
        }
    }
    console.log(info);
});