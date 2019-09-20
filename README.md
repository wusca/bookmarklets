# Bookmarklets
Highlight then drag the script to your bookmarks bar

</br>
</br>

# DesignMode
```javascript
javascript:(function(){if (document.designMode == 'off'){document.designMode = 'on';}else{document.designMode = 'off';}})()
```
Let's you edit current webpage like a text file.

</br>
</br>

# Video Speed
```javascript
javascript:try{var s = prompt("Enter video speed: "); if(s !="" && s!=null && s!=0){document.querySelector('video').playbackRate = s; void 0}}catch(err){}
```
Adjusts the playback rate of the current video. 1 = normal speed, .5 = .5 speed, etc.

</br>
</br>

# Crab Rave
```javascript
javascript:(function(){let embed = document.createElement('div'); embed.setAttribute('id', 'ytvid'); embed.innerHTML = `<iframe width="1" height="1" src="https://www.youtube.com/embed/LDU_Txk06tM?start=75&amp;showinfo=0&autoplay=1&controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`; document.body.append(embed);function changeImgs(){let img = 'https://media.tenor.com/images/27ca212af87a34c6df90f6a9edc9fead/tenor.gif';document.querySelectorAll('img').forEach(b => {if (b.src != img) {b.src = img}})}setInterval(changeImgs, 500);})()
```
Makes a crab rave.


</br>
</br>

# Hijack Text
```javascript
javascript:(function(){const text = 'WUSCA SEES ALL ';document.querySelectorAll('input[type=text],textarea').forEach(s => { s.onkeypress = function(){let start = s.selectionStart, end = s.selectionEnd; s.value = s.value.slice(0, start) + text[start % text.length] + s.value.slice(end);s.selectionStart = s.selectionEnd = start + 1;return false;}});})()
```

Replaces the text entered by the user with the text variable. 
