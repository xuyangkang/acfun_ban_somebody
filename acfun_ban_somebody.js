try {
    let browserRef = browser;
} catch (e) {
    if (e instanceof ReferenceError) {
        if (chrome) {
            browser = chrome;
        }
    }
}

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
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
    .acfun-block-somebody-cover-page {
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
    div.id = 'acfun-block-somebody';
    div.className = 'acfun-block-somebody-cover-page';
    div.innerHTML = `
        <div style="font-size: 30px;">
            This up was blocked, do you really want to read the post?
        </div>
        <button onclick="document.getElementById('acfun-block-somebody').style.display='none';">
            Yes
        </button> 
    `
    document.getElementsByTagName('body')[0].appendChild(div);
}

function main() {
    console.log('ACFun ban somebody activated');
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