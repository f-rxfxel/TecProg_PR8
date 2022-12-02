const main = () => {
  const buyB1 = document.getElementById("buyBook1");
  const buyB2 = document.getElementById("buyBook2");
  const buyB3 = document.getElementById("buyBook3");
  const buyB4 = document.getElementById("buyBook4");
  const buyB5 = document.getElementById("buyBook5");
  const buyB6 = document.getElementById("buyBook6");

  localStorage.setItem("amountB1", 0);
  localStorage.setItem("amountB2", 0);
  localStorage.setItem("amountB3", 0);
  localStorage.setItem("amountB4", 0);
  localStorage.setItem("amountB5", 0);
  localStorage.setItem("amountB6", 0);

  var amountB1 = 0;
  var amountB2 = 0;
  var amountB3 = 0;
  var amountB4 = 0;
  var amountB5 = 0;
  var amountB6 = 0;

  buyB1.onclick = function increaseB1() {
    var amount = localStorage.getItem("amountB1");
    amount = parseInt(amount);
    amount++;
    localStorage.setItem("amountB1", amount);
    console.log(localStorage.getItem("amountB1"));
    document.getElementById("book1Quantity").innerText = amountB1;

  };
  buyB2.onclick = function increaseB2() {
    var amount = localStorage.getItem("amountB2");
    amount = parseInt(amount);
    amount++;
    localStorage.setItem("amountB2", amount);
    console.log(localStorage.getItem("amountB2"));
    document.getElementById("book2Quantity").innerText = amountB2;

  };
  buyB3.onclick = function increaseB3() {
    var amount = localStorage.getItem("amountB3");
    amount = parseInt(amount);
    amount++;
    localStorage.setItem("amountB3", amount);
    console.log(localStorage.getItem("amountB3"));
    document.getElementById("book3Quantity").innerText = amountB3;

  };
  buyB4.onclick = function increaseB4() {
    var amount = localStorage.getItem("amountB4");
    amount = parseInt(amount);
    amount++;
    localStorage.setItem("amountB4", amount);
    console.log(localStorage.getItem("amountB4"));
    document.getElementById("book4Quantity").innerText = amountB4;

  };
  buyB5.onclick = function increaseB5() {
    var amount = localStorage.getItem("amountB5");
    amount = parseInt(amount);
    amount++;
    localStorage.setItem("amountB5", amount);
    console.log(localStorage.getItem("amountB5"));
    document.getElementById("book5Quantity").innerText = amountB5;

  };
  buyB6.onclick = function increaseB6() {
    var amount = localStorage.getItem("amountB6");
    amount = parseInt(amount);
    amount++;
    localStorage.setItem("amountB6", amount);
    console.log(localStorage.getItem("amountB6"));
    document.getElementById("book6Quantity").innerText = amountB6;

  };
};

main();
