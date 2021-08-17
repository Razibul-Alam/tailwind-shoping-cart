const getFoodText=(foodItem,foodPrice)=>{
    // const foodText=document.getElementById(`${foodItem}`)
    const foodPrices=document.getElementById(`${foodPrice}`).innerText
  const foodPriceConvert=parseFloat(foodPrices)
  const totalCost=document.getElementById('total-cost')
  const totalCostConvert=parseFloat(totalCost.innerText)
  const newTotal=totalCostConvert+foodPriceConvert;
  totalCost.innerText=newTotal;
  // set list item
    // const itemDiv=document.getElementById('item-list')
    // const li=document.createElement('li')
    // li.innerText=foodText.innerText
    // itemDiv.appendChild(li)
    increametDecreament()
}

// increament and decreament

const increametDecreament=(type)=>{
    let inputValue=document.getElementById('input-value')
    let getInputValue=parseFloat(inputValue.value)
    console.log(getInputValue)
    if (type=='increase') {
        inputValue.value=getInputValue+1
    }else{
        if (getInputValue>0) {
            inputValue.value=getInputValue-1
        }
    }
}