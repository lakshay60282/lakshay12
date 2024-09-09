const editor = document.getElementById('code-editor');
const runBtn = document.getElementById('run-btn');
const languageSelector = document.getElementById('language-selector');

// Listen for key combinations
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault();
    saveCode();
  } else if (event.ctrlKey && event.key === 'z') {
    undoAction();
  }
});

// Run code button action
runBtn.addEventListener('click', () => {
  const code = editor.value;
  const language = languageSelector.value;
  runCode(code, language);
});

function saveCode() {
  // Code to save the content to a file
  console.log('Code saved!');
}

function undoAction() {
  // Code to undo last action
  console.log('Undo!');
}

function runCode(code, language) {
  // Placeholder function for running code (could use API or backend)
  console.log(`Running ${language} code: ${code}`);
}
