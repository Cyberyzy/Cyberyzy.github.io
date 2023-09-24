const container = document.getElementById('article');
const codeBlocks = container.getElementsByTagName('pre');
const codebar = container.getElementsByClassName('code-toolbar');
Array.from(codeBlocks).forEach(item => {
  item.style.whiteSpace = 'pre-wrap';
  // Add pre-mac element for Mac Style UI
  const preMac = document.createElement('div');
  preMac.classList.add('pre-mac');
  item.parentElement.insertBefore(preMac, item);
  item.classList.add('line-numbers');
});
