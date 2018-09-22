chrome.declarativeContent.onPageChanged.removeRules(undefined, addRules);

function addRules() {

    chrome.declarativeContent.onPageChanged.addRules(
        [{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        schemes: ['https', 'http', 'localhost', 'chrome', 'file']
                    },
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]
    );
}


chrome.pageAction.onClicked.addListener(onClickedListener);


function onClickedListener() {

    chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        },
        function (tabs) {

            // chrome.tabs.executeScript(
            //     tabs[0].id,
            //     {
            //         code: 'document.body.style.backgroundColor = "green";'
            //     }
            // );

            chrome.tabs.executeScript(
                tabs[0].id,
                {
                    file:  'main.js'
                }
            );
        }
    );
}