function actualize() {
  chrome.tabs.create({url: "https://anyonecanlearntocode.com/chicago-coding-bootcamp"});
}

function google() {
  chrome.tabs.create({url: "https://docs.google.com/"});
}

function github() {
  chrome.tabs.create({url: "https://github.com/"});
}

document.querySelector('.actualize').addEventListener('click', actualize);
document.querySelector('.google').addEventListener('click', google);
document.querySelector('.github').addEventListener('click', github);
