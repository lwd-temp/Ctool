import cache from './tool/cache'
// 打开独立窗口
const panel = {
    cacheName: "background:panel:window_id",
    create() {
        chrome.windows.create({
            url: chrome.runtime.getURL("tool.html"),
            type: "popup",
            width: 850,
            left: 200,
            top: 200,
            height: 580,
        }, (w) => {
            cache.set(this.cacheName, w.id)
        })
    },
    open() {
        let windowId = cache.get(this.cacheName)
        if (windowId === null) {
            this.create()
        } else {
            chrome.windows.get(windowId, (w) => {
                if (!w) {
                    this.create()
                } else {
                    chrome.windows.update(windowId, {focused: true})
                }
            })
        }

    },
    onRemoved(id) {
        if (id === cache.get(this.cacheName)) {
            cache.remove(this.cacheName)
        }
    }
}

// 注册快捷键
chrome.commands.onCommand.addListener((command) => {
    switch (command) {
        case "panel":
            panel.open()

            break;
        default:
            return;
    }
})

// 窗口关闭事件
chrome.windows.onRemoved.addListener((id) => {
    panel.onRemoved(id);
})
