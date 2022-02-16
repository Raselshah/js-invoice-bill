document
  .getElementById("detail-submit-btn")
  .addEventListener("click", function () {
    const buyerInfo = document.getElementById("buyer-details-input");
    const buyer = buyerInfo.value;
    document.getElementById("buyer-info").innerText = buyer;
    buyerInfo.value = "";
  });

//   <!-- <tr>
//     <th >1</th>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
//   </tr> -->

document
  .getElementById("add-details-btn")
  .addEventListener("click", function () {
    const infoTable = document.getElementById("info-table");
    const itemName = document.getElementById("item-name-input");
    const itemPrice = document.getElementById("item-price-input");
    const itemQuantity = document.getElementById("item-quantity-input");

    if (
      itemName.value == "" ||
      itemPrice.value <= 0 ||
      itemQuantity.value <= 0 ||
      itemPrice.value == "" ||
      itemQuantity.value == ""
    ) {
      alert("error");
      return;
    }

    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);

    td3.classList.add("item-total");

    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = totalPrice;

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);

    itemName.value = "";
    itemPrice.value = "";
    itemQuantity.value = "";
    totalCalculation();
  });

function totalCalculation() {
  const subtotal = calculation();
  const tax = subtotal * 0.2;
  const grandTotal = subtotal + tax;
  document.getElementById("sub-total").innerText = subtotal;
  document.getElementById("tax").innerText = tax.toFixed(2);
  document.getElementById("grand-total").innerText = grandTotal;
  document.getElementById("grand-total-2").innerText = grandTotal;
}
function calculation() {
  const totalSum = document.getElementsByClassName("item-total");

  let sum = 0;
  for (let total of totalSum) {
    sum = sum + parseInt(total.innerText);
  }
  return sum;
}
