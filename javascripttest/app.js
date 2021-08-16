const main_div = document.querySelector(".div");
function main() {
  console.log("JS loaded");
  main_div.innerHTML = '<p>Your browser does support javascript!</p>';
  main_div.id = "true";
}

main();