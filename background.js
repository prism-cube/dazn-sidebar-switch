const toggleSideBar = () => {
  const main = document.querySelector('main');
  const sideBar = document.querySelector('aside');
  if (!main || !sideBar) {
    return;
  }

  if (!main.dataset.visible || main.dataset.visible === 'true') {
    main.style.maxWidth = '100%';
    main.parentNode.style.padding = '0';
    main.firstElementChild.style.maxWidth = '100%';
    main.firstElementChild.style.maxHeight = '100%';
    sideBar.style.display = 'none';

    main.dataset.visible = 'false';
  } else {
    main.style.maxWidth = '1180px';
    main.parentNode.style.padding = '24px 32px 0 32px';
    main.firstElementChild.style.maxWidth = 'calc(100vw - 463px)';
    main.firstElementChild.style.maxHeight = 'calc(56.25vw - 260.4375px)';
    sideBar.style.display = 'flex';

    main.dataset.visible = 'true';
  }
}

chrome.action.onClicked.addListener((tab) => {
  if(tab.url.includes('dazn.com')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: toggleSideBar
    });
  }
});