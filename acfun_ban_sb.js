function getUpId() {
    const maybeUpname = document.getElementsByClassName("upname");
    if (maybeUpname.length) {
        const maybeUpHomepage = maybeUpname.item(0).href;
        if (maybeUpHomepage) {
            const r = /(\d*)\.aspx/;
            var match = r.exec(maybeUpHomepage);
            return match[1];
        }
    }
    return null;
}

function coverPage() {
    console.log('This page should be covered...');

    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
    .acfun-block-sb-cover-page {
        background-color:#ccc;
        position:fixed;
        width:100%;
        height:100%;
        top:0px;
        left:0px;
        z-index:1000;
    }`;
    document.getElementsByTagName('head')[0].appendChild(style);


    const div = document.createElement('div');
    div.id = 'acfun-block-sb';
    div.className = 'acfun-block-sb-cover-page';
    div.innerHTML = `
        <div style="font-size: 30px;">
            This up was blocked, do you really want to watch the post?
        </div>
        <button onclick="document.getElementsByClassName('acfun-block-sb-cover-page')[0].style.display='none';">
            Yes
        </button> 
    `
    document.getElementsByTagName('body')[0].appendChild(div);
}

function main() {
    console.log('ACFun ban sb activated');
    const upId = getUpId();
    console.log(upId);
    if (!upId) {
        return;
    }
    browser.storage.local.get("banlist", (item) => {
        console.log(item);
        const banlist = item["banlist"] || [];
        if (banlist.includes(upId)) {
            coverPage();
        }
    });
}

main();