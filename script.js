

function scroll(){
    var scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true,
    });
}

var dynamic = [
    {
        name:"Design", paragraph:"Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.", images:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg",
    },
    {
        name:"Project",paragraph:"Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",images:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp"
    },{
        name:"Execution",paragraph:"We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.",images:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg"
    }
]



var elem = document.querySelector(".elem-container")
var fixed = document.querySelector(".fixed-image")
elem.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elem.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")

        fixed.style.backgroundImage = `url(${image})`

    })

})

var text = document.querySelector(".text")
var clutter = "";
var para = document.querySelector(".para");
var currentElement = null;
function showData(){

    dynamic.forEach(function(elem,indx){
        clutter += `<h2 data-add class = "h" id = "${indx}">${elem.name}</h2>`
        // console.log(clutter)
    })
     text.innerHTML=clutter;


     var h = document.querySelectorAll(".h")
    h.forEach(function(elem){
        
        elem.addEventListener("click", function handleClick(event){
            const clickedElement = event.target;
            if (previousElement && previousElement !== clickedElement) {
                // Reset text color of previously clicked element
                previousElement.style.color = "";
              }
            // Change color of clicked element
            clickedElement.style.color = "white";
            // Update the previously clicked element
            previousElement = clickedElement;
           

        })
          clickedElement=h[0]
          clickedElement.style.color = "white"
          previousElement = clickedElement
    })

}




var part2 = document.querySelector(".p2")


function action (){

    text.addEventListener('click', function(dets,){
    var b="";
    var v="";
   var m = dets.target.id


        
       var a = dynamic[dets.target.id]
        b += `<p>${a.paragraph}</p>`

       v += `<img src="${a.images}"  />`
               
                  
                 
                  
        para.innerHTML=b;
        part2.innerHTML = v;
          
      
        
      
    })
  
    
};






   





showData();
action();

// scroll();