let netPrice;
// console.log(netPrice)
let tbody = document.querySelector("tbody");
let table = document.querySelector("table")
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("submit").onclick = function (e) {
    
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

let discountAmount = (price * discount) / percentage;

let netPricePerUnit = price - discountAmount;

let totalNetPrice = netPricePerUnit * quantity;

        detail.push({
            "items": items,
            "stp": stp,
            "qty": qty,
            "disc": disc,
            "netPrice": totalNetPrice
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






