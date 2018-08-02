var keys = {
    0:['q','w','e','r','t','y','u','i','o','p'],
    1:['a','s','d','f','g','h','j','k','l'],
    2:['z','x','c','v','b','n','m'],
    length:3
}
var hash = {
    q:'qq.com',
    w:'weibo.com',
    e:'ele.me',
    y:'youtube.com',
    i:'aiqiyi.com'
}
var hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') ||'null')
if(hashInLocalStorage){
    hash = hashInLocalStorage
}
index = 0
while(index < keys.length){
    var divXXXX = document.createElement('div');
    mainXXXX.appendChild(divXXXX)
    var row = keys[index]
    var index2 = 0
    while(index2 < row.length){
        var kbdXXXX = document.createElement('kbd')
        kbdXXXX.textContent=row[index2]

        var buttonX = document.createElement('button')
        buttonX.textContent = 'E'
        buttonX.id = row[index2]
        buttonX.onclick = function(e){
            // console.log(e)
            var key = e.target.id
            var x = prompt('请输入网址')
            hash[key] = x
            localStorage.setItem('zzz',JSON.stringify(hash))
        }

        kbdXXXX.appendChild(buttonX)

        divXXXX.appendChild(kbdXXXX)
        index2 = index2 +1
    }
    index = index+1
}
document.onkeypress = function(e){
    var key = e.key
    var website = hash[key]
    // location.href = 'http://' + website
    window.open('http://' + website,'_blank')
}