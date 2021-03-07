

const card_names = ["clear", "configuration", "dataset", "filter", "load", "save", "visualization"];
let cont = 0;
main()

function main() {
    setupInteractions()
    // d3.select("#container").append("img")
}

function setupInteractions() {
    d3.select("#interaction-container").selectAll("img")
        .data(card_names)
        .join("img")
            .attr("src", d => "images/" + d + ".jpeg")
            .classed("cards-interaction",true)
            .on("click", addCard)
}

function addCard(e,d) {
    let i = cont++;

    d3.select("#cards-container").append("img")
        .attr("src", "images/" + d + ".jpeg")
        .attr("id", "card_"  + i)
        .classed("item", true)
        .on("dblclick", function(e,d) {
            d3.select(e.target).remove()
        })
        .on("contextmenu", function(e,d) {
            // console.log(e.target)
        })
    setInteract("#card_" + i)
}