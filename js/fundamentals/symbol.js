// Today's date
const today = new Date();

// Compare today's date with July 6th
if (today.getDate() === 6 && today.getMonth() === 7) {
  console.log("Today is July 6th.");
} else {
  console.log("Today is not July 6th.");
}
// Output "Today is not July 6th."