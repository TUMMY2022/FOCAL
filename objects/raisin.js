/**
   * const raisinAlarm = function (cookie) {
    let string = "";
    for( let i = 0; i < cookie.length; i++){
        if ( cookie[i] === "🍇") {
         string = "Raisin alert!";
         return string
        } else {
            string = "All Good";
        }
    }
    return string;
  };
   * console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
  console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
  console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
  console.log(raisinAlarm(["🍇", "🍫", "🍇", "🍫"]));
  */

const raisinAlarmArray = function(cookies) {
  let cookiesArray = [];
  for (let cookie of cookies) {
    if (cookie.includes("🍇")) {
      cookiesArray.push("Raisin alert!");
    } else {
      cookiesArray.push("All Good");
    }
  }
  return cookiesArray;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
    ["🍇", "🍫", "🍫", "🍫", "🍫", "🍫"]
  ])
);
 
//["Raisin alert!", "Raisin alert!", "All good!"]


  