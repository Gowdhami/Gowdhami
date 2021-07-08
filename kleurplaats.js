class Kleurplaats {
    constructor() {
        this.color = "white";
        this.kiescolor = "white";
        this.addTableevents();
        this.addColorSelectEvents();
    }
    addTableevents() {
        const cells = document.querySelectorAll('td');
        let kies = this.kiescolor;
        for (var i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', (e) => {
                console.log("I am field " + e.target.getAttribute("row-index") + "  " + e.target.getAttribute("col-index"));
                e.target.style.backgroundColor = this.kiescolor;
                console.log("my color is " + this.kiescolor);
            });
        }
    }
    addColorSelectEvents() {
            var color = document.querySelector(".controls");
            color.addEventListener("click", (e) => {
                this.kiescolor = $(e.target).css("background-color");
            });

        }
        /*getval(cel) {
            alert(cel.getAttribute("row-index") + " " + cel.getAttribute("col-index"));
            cel.style.backgroundColor = this.kiescolor;

        }*/
    changeColor(color) {
        this.kiescolor = color;
    }
    reset() {
        const cells = document.querySelectorAll('td');
        this.kiescolor = "white";
        for (var i = 0; i < cells.length; i++) {

            cells[i].style.backgroundColor = this.kiescolor;

        };
    }

}



let kleurplaats = new Kleurplaats();
/*var tbl = document.getElementById("tblMain");
if (tbl != null) {
    for (var i = 0; i < tbl.rows.length; i++) {
        for (var j = 0; j < tbl.rows[i].cells.length; j++)
            tbl.rows[i].cells[j].onclick = function() { kleurplaats.getval(this); };
    }
}*/



document.querySelector(".controls");

/*
$(".controls").on("click", "li", function() {

    colour = $(this).css("background-color");
    kleurplaats.changeColor(colour);

});*/
document.getElementById("reset").addEventListener("click", kleurplaats.reset);