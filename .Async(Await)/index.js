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

async function DoChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You Finished all the chores!");
  } catch (error) {
    console.log(error);
  }
}
DoChores();
