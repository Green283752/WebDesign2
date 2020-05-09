var honey1 = document.getElementById('honey1')
var honey2 = document.getElementById('honey2')
var honey3 = document.getElementById('honey3')
var honey4 = document.getElementById('honey4')
var hexagon = document.getElementById('hexagon')
var navbar = document.getElementById('navbar')

var mainpic = document.getElementById('picturedisplay')

honey1.addEventListener('click', function(){

    mainpic.style.backgroundImage = 'url("https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/1296x728_Everything_You_Should_Know_About_Manuka_Honey.jpg?w=1155")'

})

honey2.addEventListener('click', function(){

    mainpic.style.backgroundImage = 'url("https://simplegreenmoms.com/wp-content/uploads/2019/04/manuka-honey-jar.jpg")'

})

honey3.addEventListener('click', function(){

    mainpic.style.backgroundImage = 'url("https://cdnmedia.eurofins.com/apac/media/603466/honey-on-stick.jpg?width=801&height=545&mode=max")'

})

honey4.addEventListener('click', function(){

    mainpic.style.backgroundImage = 'url("https://chowhound1.cbsistatic.com/thumbnail/800/0/chowhound1.cbsistatic.com/blog-media/2018/06/what-is-the-difference-between-regular-honey-raw-honey-manuka-honey-chowhound.jpg")'

})

hexagon.addEventListener('click', function(){

    hexagon.src = "navopen.png"
    navbar.style.display = "block" 
})
