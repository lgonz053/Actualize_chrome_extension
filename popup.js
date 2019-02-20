
function buttonClicked() {
  chrome.tabs.create({url: "https://anyonecanlearntocode.com/chicago-coding-bootcamp"});
}

document.querySelector('.actualize').addEventListener('click', buttonClicked);