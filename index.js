function changeUnit(event) {
  let selectedId = event.currentTarget.options[event.currentTarget.selectedIndex].id;
  const elements = document.getElementsByClassName('unit-icon');
  Array.from(elements).forEach((element) => {
    element.classList.add('d-none');
  });
  document.getElementById(`${selectedId}Unit`).classList.remove('d-none')
}

function changeAmount(event) {
  if (event.currentTarget.value !== '') {
    document.getElementById('dealInputLabel').classList.add("deal-label")
    document.getElementById('submitBtn').classList.remove('disabled')
  } else {
    document.getElementById('submitBtn').classList.add('disabled')
  }
}

function calculateScrowblyFee(event) {
  event.preventDefault()
  let amount = document.getElementById('dealInput').value * 3 / 100;
  let unit = Array.from(document.getElementsByClassName('unit-icon')).find((elem) => {
    return !elem.classList.contains('d-none')
  })
  let currencySelect = document.getElementById('currencySelect')
  let currency = currencySelect.options[currencySelect.selectedIndex].innerText
  let feeDiv = document.getElementById('scrowblyFee')
  feeDiv.classList.remove('d-none')
  feeDiv.innerText = `Scrowbly Fee: ${unit.innerText}${amount} ${currency}`
}