// var far = ''
// var listiteam = '<div>+far+<div/>'
// listiteam = "<div>+far+<div/>"
// listiteam = `<div>
//                 ${far}
//              </div>`
/////////////////////////////////////////////////////////////////////////
// var SampleArrayData = [
//     'item1',
//     'item2',
//     'item3',
//     'item4'
// ]
// function creatList() {
//     var root = document.getElementById('root')
//     var listHtml = ''
//     for (var item of SampleArrayData)
//     {
//         listHtml += `
//                     <li>
//                         ${item}
//                     </li>
//                     `
//     }
//     var ul = document.createElement('ul')
//     ul.innerHTML = listHtml
//     root.appendChild(ul)
// }
// creatList()
/////////////////////////////////////////////////////////////////////////
var arrayObject = [
    {
        "name":"mobin",
        "age":"20",
        "image":"https://picsum.photos/150?random=1"
    },
    {
        "name":"mobin",
        "age":"20",
        "image":"https://picsum.photos/150?random=2"
    },
    {
        "name":"mobin",
        "age":"20",
        "image":"https://picsum.photos/150?random=3"
    }
]
function creatGallery(){
    var root = document.getElementById('root')
    var gallery = ''

    for (var obj of arrayObject){
        gallery += `
        <div>
            <img src="${obj.image}"/>
            <h4>
                Photo By : ${obj.name}
            </h4>
            <small>
                Age : ${obj.age}
            </small>
        </div>
`
    }
    root.style.display = 'flex'
    root.style.flexDirection = 'row'
    root.style.justifyContent = 'space-between'
    root.innerHTML = gallery
}
creatGallery()