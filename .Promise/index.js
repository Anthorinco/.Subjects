function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;
      if (dogwalked) {
        resolve("You walk the dog 🦮");
      } else {
        reject("You DIDN'T walk the dog");
      }
    }, 1500);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const Kitchencleaned = true;
      if (Kitchencleaned) {
        resolve("You clean the kitchen 🧹");
      } else {
        reject("You DIDN'T clean the kitchen");
      }
    }, 2500);
  });
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashtakenout = false;
      if (trashtakenout) {
        resolve("You take out the trash! 🚮 ");
      } else {
        reject("You HAVEN'T taken the trash out");
      }
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    return console.log("You Completed all the chores");
  })
  .catch(error => console.error(error));
  
