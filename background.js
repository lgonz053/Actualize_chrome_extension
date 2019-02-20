console.log("from background")

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
  let msg = {
    txt: "hello"
  };

  chrome.tabs.create({url: "https://docs.google.com/document/d/1Tpaf74hV-C_CF_BZqeie-7hzWjooLYhdtKt83o9eZuU/edit"});
}