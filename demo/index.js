const fragmentNode = document.createDocumentFragment();

function createSection(language) {
  const sectionNode = document.createElement('section');
  const headingNode = document.createElement('h2');

  headingNode.innerText = language;

  sectionNode.appendChild(headingNode);

  const preNode = document.createElement('pre');
  const codeNode = document.createElement('code');

  codeNode.classList.add(`language-${language}`);
  codeNode.textContent = window.hljsExamples[language];
  preNode.appendChild(codeNode);
  sectionNode.appendChild(preNode);
  return sectionNode;
}

Object.keys(window.hljsExamples).map((language) => {
  fragmentNode.appendChild(createSection(language));
});

document.getElementById('target').appendChild(fragmentNode);
