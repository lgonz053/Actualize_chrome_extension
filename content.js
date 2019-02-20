// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse) {
//   console.log(message.txt);



  chrome.runtime.onMessage.addListener(openWebPage);

  function openWebPage(request, sender, sendResponse) {
    // if(request.message === "clicked_browser_action") {
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    // }
  }