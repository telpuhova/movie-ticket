function movieTicket (movie, date, age) {
  this.movie = movie;
  this.date = date;
  this.age = age;
  this.price = 10;
}

movieTicket.prototype.dateCheck = function () {

  var checkedDate = new Date();
  checkedDate.setFullYear(parseInt(this.date.substr(0,4)));
  checkedDate.setMonth(parseInt(this.date.substr(5,2))-1);
  checkedDate.setDate(parseInt(this.date.substr(8,2)));
  console.log(checkedDate);
  console.log(this.date.substr(0,4) + "Month: " + this.date.substr(5,2) + "day: " + this.date.substr(8,2));
  return checkedDate.getDay();

};



movieTicket.prototype.priceCalculator = function() {
  if (this.movie === "Fight club") {
    this.price += 2;
  } else if (this.movie === "Frozen") {
    this.price -= 2;
  } else {}

  if (this.age > 65) {
    this.price /= 2;
  } else if (this.age < 9) {
    this.price -= 2;
  }
  if ((this.dateCheck() === 0) || (this.dateCheck() === 6)) {
    this.price *= 2;
  }
}

movieTicket.prototype.output = function () {
  return this.movie + this.date + this.age + "$" + this.price;
};

// front end
$(document).ready(function() {

  $("#formMovieTicket").submit(function(event) {
    event.preventDefault();
    var inputMovie = $("#movie").val();
    var inputDate = $("#date").val();
    var inputAge = parseInt($("#age").val());

    var ticket = new movieTicket(inputMovie, inputDate, inputAge);
    ticket.priceCalculator();

    $(".movieName").text(ticket.movie);
    $(".movieDay").text(ticket.date);
    $(".movieAge").text(ticket.age);
    $(".movieCost").text("$"+ticket.price);
  });

});
