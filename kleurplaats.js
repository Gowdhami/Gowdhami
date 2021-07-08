class Kleurplaats {
    constructor() {
        this.color = "white";
        this.kiescolor = "white";
    }

    getval(cel) {
        alert(cel.getAttribute("row-index") + " " + cel.getAttribute("col-index"));
        cel.style.backgroundColor = "#e01010";

    }
    changeColor(color) {
        this.kiescolor = color;
    }

}




let kleurplaats = new Kleurplaats();
var tbl = document.getElementById("tblMain");
if (tbl != null) {
    for (var i = 0; i < tbl.rows.length; i++) {
        for (var j = 0; j < tbl.rows[i].cells.length; j++)
            tbl.rows[i].cells[j].onclick = function() { kleurplaats.getval(this); };
    }
}
document.getElementById('colors').addEventListener('click', kleurplaats.changeColor(this));