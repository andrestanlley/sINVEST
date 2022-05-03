export default function moneyInText(value){
    const symbol  = value >= 1000000000 ? "B" : "M"
    const tinyValue = (symbol == "B" ? value/1000000000 : value/1000000).toFixed(2)
    return tinyValue + " " + symbol
}