const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function totalBatteries(batteries) {
  batteries.reduce(function(total, element){ return element + total}, 0);
}
