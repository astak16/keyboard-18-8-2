var keys = {
    0:['ESC','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','Delete','Power'],
    1:['`','1','2','3','4','5','6','7','8','9','0','-','=','Back'],
    2:['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\'],
    3:['Capslock','A','S','D','F','G','H','J','K','L',';','\'','Enter'],
    4:['Shift','Z','X','C','V','B','N','M',',','.','/','Shift'],
    5:['Ctrl','Fn','Window','Alt','','Alt','Ctrl','','',''],
    length:6
}
var keysUp = {
    0:['~','!','@','#','$','%','^','&','*','(',')','_','+'],
    1:['','','','','','','','','','','','{','}','|'],
    2:['','','','','','','','','','',':','"'],
    3:[,,,,,,,,'<','>','?'],
    length:4
}
var wrapper = document.getElementById('wrapper')

    for(var i = 0; i < keys.length; i++){
        var div = document.createElement('div')
        div.classList = 'row'
        for(var j = 0; j < keys[i].length;j++){
            var kbd = document.createElement('kbd')
            kbd.id = keys[i][j]
            // kbd.classList = keys[i][j]


           for(var k = 0; k < 2; k++){
               var span = document.createElement('span')
               span.classList = 'content'+k
               // span.textContent = keysUp[9][j]
               kbd.appendChild(span)
           }
            span.textContent = keys[i][j]
            div.appendChild(kbd)
        }
        wrapper.appendChild(div)
    }
var row = document.getElementsByClassName('row')
var rowChildOne = row[1].children
var rowChildTwo = row[2].children
var rowChildThree = row[3].children
var rowChildFour = row[4].children


for(i = 0; i < keysUp[0].length; i++){
    rowChildOne[i].children[0].textContent = keysUp[0][i]
}
for(i = 11; i < rowChildTwo.length; i++){
    rowChildTwo[i].children[0].textContent = keysUp[1][i]
}
for(i = 10; i < rowChildThree.length; i++){
    rowChildThree[i].children[0].textContent = keysUp[2][i]
}
for(i = 8; i < rowChildFour.length; i++){
    rowChildFour[i].children[0].textContent = keysUp[3][i]
}

row[5].lastChild.previousSibling.firstChild.textContent = '↑'
row[5].lastChild.previousSibling.lastChild.textContent = '↓'
row[5].lastChild.lastChild.textContent = '→'
row[5].lastChild.previousSibling.previousSibling.lastChild.textContent = '←'

