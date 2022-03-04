// add filename array below
let  fileArray = ["./static/1.csv","./static/2.csv","./static/3.csv","./static/4.csv","./static/5.csv"];
// add table headings below
let  fileHeading = ["head1","head2","head3","head4","head5"];
// loop for file array
    
   
        let count = 0;
        for(i=0;i<fileArray.length;i++){
             document.querySelector("body").innerHTML += `
            <table id="table${i}">
            <thead>
            <tr>
            <th id="head${i}" colspan="2">${fileHeading[i]}</th>
            </tr>
            </thead>
            <tbody id="tbody${i}"></tbody>
            </table>
            `;
// fetch data
         fetch(`${fileArray[i]}`).then(res => {
            return res.text()
        }).then(data => {
            // fetch data to parse 
            let result = data.split(/\r?\n|\r/).map(e => {
                return e.split(",")
            })
            // map results 
          let m =   result.map(data=>{
            //   add <td> </td>
              let tdmap =  data.map(td=>{
                   if(td!==""){
return `<td>${td}</td>`;
                   }

                   
               })
            //    add <tr></tr>
               let trmap = tdmap
               .join("")
               .split("\n")
               .map(tr=>{
                  
                       return `<tr>${tr}</tr>`
                  
               })
               
                
               return trmap.join("");
            })
           document.querySelector(`#tbody${count}`).innerHTML=m.join("");
           count = count+1;

        })
        }

        