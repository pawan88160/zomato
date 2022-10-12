window.onload =()=>{
    function onlode(){
        fetch('json.txt')
        .then((res)=>res.json())
        .then((data)=>{
        let conn = document.getElementById('conn')
        let stor='';
           for(let i = 0; i <data.length; i++){
            stor+=`
            <a class="${data[i].class}" href="${data[i].link}">
                <div class="card">
                    <span>
                        <h2>${data[i].name}</h4><br>
                        <p>${data[i].places}</p>
                    </span>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="20" height="15" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 jKmKoK"><title>chevron-right</title><path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path></svg>
                    </span>
                </div>
            </a>
            `;
           };
           conn.innerHTML=stor;
           var action = document.querySelectorAll('.action')
           var cshow = document.querySelectorAll('.cshow')
           for (i = 0; i <action.length; ++i) {
            action[i].removeAttribute("href")
            action[i].addEventListener('click',(e)=>{
                //action[i].classList.add('cshow')
               
                for (i = 0; i <cshow.length; ++i) {
                    cshow[i].classList.add()
                }
               // action[i].classList.remove('action')
               
          })
          }
        //    let act = document.querySelectorAll('.action')
        //    act.click,()=>{
        //     console.log('guh')
        //    }
        })
    }onlode()
    // _________________________________________________
    function click(){
      
    }click()



}