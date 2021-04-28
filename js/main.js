// 菜单渲染
var type=getQueryVariable().type?getQueryVariable().type:1 //获取页面type
var id=getQueryVariable().id?getQueryVariable().id:'' //查看详情id
function menuFun(){
    var str=''; 
    $.each(menu,function(i,n){  
        str +=`<a href="${n.url}?type=${n.type}"><div class="litext ${n.type==type?'active':''}">
                    ${n.name}
        </div></a>`         
    });  
    $("#menu").append(str);  
}
//面包屑处理
const crumbsFun=()=>{
    let obj=menu.filter((el)=>(el.type==type))[0]
    $('#readTopNav').text(obj.name)
    $('#readTopNav').attr("href",`${obj.url}?type=${type}${id?`&id=${id}`:''}`);
}
// 列表页渲染
const listContentFun=()=>{
    let news_str=''
    $.each(newsList, function (i, n) {
        news_str += `<li>
        <a href="./indexdis.html?type=3&id=2" target="_blank">${n.name}</a> <span
            class="rt">（2018-11-02 14:23:59）</span>
         </li>`
         if ((i-1)%5== 0 && (i-1)!=0) {
            news_str+=' <div class="hr"></div>'
         }
    });
    $("#listContent").append(news_str);
}



