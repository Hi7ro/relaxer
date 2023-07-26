const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  let count = 0;
  while (count < 3) {
    console.log("Breath In!");
    setTimeout(() => {
      console.log("Hold!");
      setTimeout(() => {
        console.log("Breath out!");
      }, holdTime);
    }, breathTime);
    
  }
}
