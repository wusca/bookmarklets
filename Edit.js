if (document.designMode == 'off') {
  document.designMode = 'on';
} else {
  document.designMode = 'off';
}

//or the fancy version
document.designMode = document.designMode == 'off' ? 'on' : 'off';
