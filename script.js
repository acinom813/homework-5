//User will be able to see the current date via script input in index.html


      var d = moment().format("dddd, MMMM Do");
      document.getElementById("currentDay").innerHTML= d;
    


var saveBtnEl = document.querySelectorAll(".saveBtn");
var getCurrentHour = moment().hour();


var militaryTime = [9, 10, 11, 12, 13, 14, 15, 16, 17]

//PART ONE: User will be able to use text area to descibe event for hour block
//Clicking saveBtn will save the event to localStorage.

function timeCheck () {
    for (let i = 0; i < militaryTime.length; i++) {
         
       if(getCurrentHour>militaryTime[i]){
        document.getElementById(i).classList.add("past")
       }
       else if(getCurrentHour===militaryTime[i]){
        document.getElementById(i).classList.add("present")
       }
       else{
        document.getElementById(i).classList.add("future")
       }
        
    }
}


timeCheck()

for (let i = 0; i < saveBtnEl.length; i++) {
      if(localStorage.getItem(i)) {
          document.getElementById(i).value =localStorage.getItem(i)
      }
  console.log(i)
    saveBtnEl[i].addEventListener("click", saveUserEntry)
}




function saveUserEntry (){
    var id=this.getAttribute("data-id")
    console.log(id)
    var text = document.getElementById(id).value
    localStorage.setItem(id, text)
}

//As day progresses, past hours will turn gray, present hour will turn red, future time plum






//PART TWO: Original colors of all rows are plum
//want to use the time indicator (dayjs.duration().hours()) to render hours
//current hour will be highlighted red
//hours before the current hour will be highlighted gray
//hours after the current houg will remain the original color of plum
