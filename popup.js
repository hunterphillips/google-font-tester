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
  const existingLink = document.querySelector('#google-fonts-extension-link');

  if (existingLink) existingLink.href = url;
  else {
    const link = document.createElement('link');
    link.id = 'google-fonts-extension-link';
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
  }

  document.body.style.fontFamily = fontFamily;
  const style = document.createElement('style');
  style.textContent = `body * { font-family: inherit !important; }`;
  document.head.appendChild(style);
};
