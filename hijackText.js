const text = 'WUSCA SEES ALL ';
document.querySelectorAll('input[type=text],textarea').forEach(s => {
  s.onkeypress = function() {
    let start = s.selectionStart,
      end = s.selectionEnd;
    s.value = s.value.slice(0, start) + text[start % text.length] + s.value.slice(end);
    s.selectionStart = s.selectionEnd = start + 1;
    return false;
  }
});
