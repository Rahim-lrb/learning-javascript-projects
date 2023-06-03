const li = document.querySelectorAll('li');

li.forEach((l) => {
    l.addEventListener("click", () => {
		// delete active class and display none all the imgs
        document.querySelectorAll("li").forEach((el) => {
            el.classList.remove("active")
            deleteImgs()
        })

		// add active class and show the images that has that category
        l.classList.add("active")
        switch (l.dataset.cat) {
            case ".web":
				appear(".web");
				break;
            case ".gfx":
				appear(".gfx");
				break;
            case ".marketing":
				appear(".marketing");
				break;
            default:
				appear(".all");
        }

        /*
        if (l.getAttribute("data-cat") === ".web") {
            appear(".web")
        } else if (l.getAttribute("data-cat") === ".gfx") {
            appear(".gfx")
        } else if (l.getAttribute("data-cat") === ".marketing") {
            appear(".marketing")
        } else if (l.getAttribute("data-cat") === ".all") {
            appear(".all")
        }
        */
    })
})


function deleteImgs() {
    document.querySelectorAll(".gallery img").forEach((img) => {
        img.style.display = "none"
    })
}
function appear(web) {
    document.querySelectorAll('.gallery ' + web).forEach((one) => {
        one.style.display = "block"
    })
}




/*=====================================*/ 
// const lis = document.querySelectorAll('li');
// let imgs = Array.from(document.images);

// lis.forEach((l) => {
// 	l.addEventListener("click", removeActive);
// 	l.addEventListener("click", manageImgs);
// });

// // Remove Active Class From All Lis And Add To Current
// function removeActive() {
// 	lis.forEach((li) => {
// 		li.classList.remove("active");
// 		this.classList.add("active");
// 	});
// }

// // Manage Imgs
// function manageImgs() {
// 	imgs.forEach((img) => {
// 		img.style.display = "none";
// 	});
// 	document.querySelectorAll(this.dataset.cat).forEach((el) => {
// 		el.style.display = "block";
// 	});
// }





/* 
! dataSet => Any attribute on any element whose attribute name starts with data- is a data attribute
it can be used to store extra information that doesn't have any visual representation
<article
  id="electric-cars"  data-columns="3"  data-index-number="12314"  data-parent="cars"  
</article>
. access with js
<div id="myDiv" data-info="some data"></div>
const myDiv = document.getElementById("myDiv");
const info = myDiv.dataset.info; // "some data"
data-info => becomes info 
.in query selector
const elementsWithDataInfo = document.querySelectorAll('[data-info]');
. setting a value
myDiv.dataset.info = "new data";

*/