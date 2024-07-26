const fontSelector = document.getElementById('font-select');

fontSelector.addEventListener('change', async (event) => {
  const selectedFont = event.target.value;
  const googleFontUrl = selectedFont
    ? `https://fonts.googleapis.com/css2?family=${selectedFont}:wght@400;700&display=swap`
    : '';

  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setPageFont,
    args: [googleFontUrl, selectedFont],
  });
});

const setPageFont = (url, fontFamily) => {
  let fontLink = document.querySelector('#google-fonts-extension-link');
  let fontStyle = document.querySelector('#google-font-style');
    
  if (!fontLink) {
    fontLink = document.createElement('link');
    fontLink.id = 'google-fonts-extension-link';
    fontLink.rel = 'stylesheet';
    fontLink.href = url;
    document.head.appendChild(fontLink);
  }

  if (!fontStyle) {
    fontStyle = document.createElement('style');
    fontStyle.id = 'google-font-style';
    document.head.appendChild(fontStyle);
  }

  fontLink.href = url;
  fontStyle.textContent = `body * { font-family: inherit !important; }`;
  document.body.style.fontFamily = fontFamily;
};
