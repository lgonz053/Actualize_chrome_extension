function googleDocs() {
  chrome.tabs.create({url: "https://docs.google.com/"});
}

function github() {
  chrome.tabs.create({url: "https://github.com/"});
}

function rubyDocs() {
  chrome.tabs.create({url: "https://ruby-doc.org/"});
}

function w3Schools() {
  chrome.tabs.create({url: "https://www.w3schools.com"});
}

function killNill() {
  chrome.tabs.create({url: "https://github.com/killnil"});
}

function rubyGems() {
  chrome.tabs.create({url: "https://rubygems.org/gems"});
}

function bootstrap() {
  chrome.tabs.create({url: "https://getbootstrap.com/"});
}

function programmableWeb() {
  chrome.tabs.create({url: "https://www.programmableweb.com/category/search/apis?category=20055"})
}

function stackOverflow() {
  chrome.tabs.create({url: "https://stackoverflow.com/"})
}

document.querySelector('.google').addEventListener('click', googleDocs);
document.querySelector('.github').addEventListener('click', github);
document.querySelector('.ruby-docs').addEventListener('click', rubyDocs);
document.querySelector('.w3schools').addEventListener('click', w3Schools);
document.querySelector('.killnil').addEventListener('click', killNill);
document.querySelector('.bootstrap').addEventListener('click', boostrap);
document.querySelector('.programmable_web').addEventListener('click', programmableWeb);
document.querySelector('.stack_overflow').addEventListener('click', stackOverflow);
document.querySelector('.rubygems').addEventListener('click', rubyGems)