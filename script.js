let varukorgValue = 0
const varukorg_items = []
let prise
let varubild = []

function vitTröja()
{
    varukorgValue++
    varukorg_items.push('vitTröja')
    varubild.push("img/vitw.webp")
    console.log("hejsan");   
    prise = varukorg_items.length*499
}

function beigeTröja()
{
    varukorgValue++
    varukorg_items.push('beigeTröja')
    prise = varukorg_items.length*499
}

function ljusbrunTröja()
{
    varukorgValue++
    varukorg_items.push('ljusbrunTröja')
    prise = varukorg_items.length*499
    console.log("hejsan");   
}

function mörkgråTröja()
{
    varukorgValue++
    varukorg_items.push('mörkgråTröja')
    prise = varukorg_items.length*499
}

function mörkgrönTröja()
{
    varukorgValue++
    varukorg_items.push('mörkgrönTröja')
    prise = varukorg_items.length*499   
}

function turkosTröja()
{
    varukorgValue++
    varukorg_items.push('turkosTröja')
    prise = varukorg_items.length*499
}
function varukorg()
{

    localStorage.setItem('varukorg_items', JSON.stringify(varukorg_items));
    window.open('Varukorg.html', 'Varukorg', 'width=800,height=600');

}