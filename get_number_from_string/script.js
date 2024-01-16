let text = "hell0 worl5";
const szovegLista = text.split("");
let szamLista = [];
for (let i = 0; i < szovegLista.length; i++)
{
    if (typeof szovegLista[i] == "number")
    {
        szamLista.push(szovegLista[i]);
    }
}
console.log(szamLista);
