window.onload = function () {
  const cartItems = JSON.parse(localStorage.getItem("varukorg_items")) || [];
  const varukorgNamn = [];
  const varukorgen = document.getElementById("varukorglistan")
  const bildList = document.getElementById("bilder")
  const pris = document.getElementById("pris")
  const priserList = document.getElementById("priser")
  const priser = []

  let bilder = [];
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i] == "vitTröja") {
      bilder.push("img/vitw.webp")
      priser.push("499kr")
      varukorgNamn.push("Isabellavit tröja")
    }
    if (cartItems[i] == "beigeTröja") {
      bilder.push("img/beige.webp")
      priser.push("499kr")
      varukorgNamn.push("Indisk Gul tröja")
    }
    if (cartItems[i] == "ljusbrunTröja") {
      bilder.push("img/Ljusbrun.webp")
      priser.push("499kr")
      varukorgNamn.push("ljusbrun tröja")
    }
    if (cartItems[i] == "mörkgråTröja") {
      bilder.push("img/Mörkgrå.webp")
      priser.push("499kr")
      varukorgNamn.push("Mörkgrå tröja")
    }
    if (cartItems[i] == "mörkgrönTröja") {
      bilder.push("img/mörkgrön.webp")
      priser.push("499kr")
      varukorgNamn.push("Mörkgrön tröja")
    }
    if (cartItems[i] == "turkosTröja") {
      bilder.push("img/Turkos.webp")
      priser.push("499kr")
      varukorgNamn.push("Turkos tröja")
    }
  }
  for (let i = 0; i < cartItems.length; i++) {
    const li = document.createElement("li")
    li.textContent = varukorgNamn[i];
    varukorglistan.appendChild(li);
  }
  for (let i = 0; i < cartItems.length; i++) {
    const li = document.createElement("li")
    const img = document.createElement("img")
    img.src = bilder[i]
    img.alt = "Produktbild"
    img.style.width = "100px"
    img.style.height = "auto"
    li.appendChild(img)
    bildList.appendChild(li)
  }
  for (let i = 0; i < cartItems.length; i++) {
      const li = document.createElement("li")
      li.textContent = priser[i]
      priserList.appendChild(li)
    }
    let prisTal = 499 * cartItems.length
    pris.textContent = prisTal + "kr" 
}
