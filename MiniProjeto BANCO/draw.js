let button = document.querySelector('button')
        button.addEventListener('click',()=>{
                getConfig()
                let input = document.querySelector('input')
                showName(input.value)
                input.value = '';
        })


let getViewBox = (url)=>{
        
        fetch(url).then((res)=>{
               let objJson = res.json();
                return objJson
        }).then((res2)=>{
                desenhaViewBox(res2[0].getviewbox)
        })
}

let getSvg = (url)=>{
        
        fetch(url).then((res)=>{
                let objJson = res.json();
                 return objJson
         }).then((res2)=>{
                 desenhaPath(res2[0].st_assvg)
         })
        
}

function getConfig(){
        event.preventDefault()
        let description = document.querySelector('input').value
        let urlViewBox = `http://localhost:3000/getViewBox/${description}`;
        let urlSVG = `http://localhost:3000/getSVG/${description}`
        getViewBox(urlViewBox);
        getSvg(urlSVG);
}

function desenhaViewBox(viewBoxString){
        let viewBox = document.querySelector('svg')
                viewBox.setAttribute('viewBox',viewBoxString)

}

function desenhaPath(pathString){
        let path = document.querySelector('path')
                path.setAttribute('d', pathString)
}

function showName(nameMun){
        let h1 = document.querySelector('h1')
                h1.textContent = nameMun
}

