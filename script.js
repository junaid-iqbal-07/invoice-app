let netPrice;
// console.log(netPrice)
let tbody = document.querySelector("tbody");
let table = document.querySelector("table")
let costomerName;
let costomerAdress;
let slipNo;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("submit").onclick = function (e) {
        costomerName = document.getElementsByClassName("costomerName")[0]?.value || "";
        document.getElementById("costomername").textContent =`${costomerName}` ;
        
        costomerAdress = document.getElementsByClassName("CostomerAddress")[0]?.value || "";
        document.getElementById("costomeraddress").textContent =`${costomerAdress}` ;
        
        slipNo = document.getElementsByClassName("slipNo")[0]?.value || "";
        document.getElementById("slipno").textContent =`${slipNo}` ;
    
    const form = document.querySelector("form"); 
    let items = form.elements["items"]?.value || "";
    let stp = form.elements["stp"]?.value || "";
    let qty = form.elements["qty"]?.value || "";
    let disc = form.elements["disc"]?.value || "";
    
    let detail = JSON.parse(localStorage.getItem("data")) ?? [];

    let price = stp; 
    let percentage = 100;
    let discount = disc;
    let quantity = qty;
    
     if(price == price.valueOf(price)){
        netPrice = (price * discount) / percentage ;

        function myfunc(){
            return (price - netPrice) * quantity;
        }
    }
        myfunc();
        console.log(myfunc());

        detail.push({
            "items": items,
            "stp": stp,
            "qty": qty,
            "disc": disc,
            "netPrice": netPrice
               });
        localStorage.setItem("data", JSON.stringify(detail))
        // console.log(items , stp, qty , disc);
        e.preventDefault();
      display_tableData();

    };

    let display_tableData = () => {
    
        let detail = JSON.parse(localStorage.getItem("data")) ?? [];

          let show_tableData = "";
    
          detail.forEach((element, i) => {
                 
             show_tableData +=`<tbody>
                    <tr>
                    <td>${element.items}</td>
                    <td>${element.stp}</td>
                    <td>${element.qty}</td>
                    <td>${element.disc}</td>
                    <td id"netPrice">${element.netPrice}</td>
                    </tr>
                </tbody>`

          });
        tbody.innerHTML = show_tableData;
    }
    display_tableData();
    // console.log(display_tableData())

});


let print = document.querySelector("#print");

print.addEventListener("click", () => {

        window.print();
    
    });






