// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const mesurekelvin = function () {
  const muserment = {
    type: "temp",
    unit: "celsius",
    value: prompt("enter the value"),
  };
  return Number(muserment.value) + 273;
};

console.log(mesurekelvin());
