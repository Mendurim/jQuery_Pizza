// Write your Pizza Builder JavaScript in this file.

$('.pep').fadeOut(0);
$('.btn-pepperonni').toggleClass('active');
$('.mushroom').fadeOut(0);
$('.btn-mushrooms').toggleClass('active');
$('.green-pepper').fadeOut(0);
$('.btn-green-peppers').toggleClass('active');
$('.crust').toggleClass('crust-gluten-free');
$('.btn-crust').toggleClass('active');
$('.sauce').toggleClass('sauce-white');
$('.btn-sauce').toggleClass('active');
$('.pep-price').hide();
$('.mush-price').hide();
$('.green-price').hide();
$('.white-price').hide();
$('.gluten-price').hide();


$('.btn-pepperonni').on('click', function() {
  $('.pep').fadeToggle(0);
  $('.btn-pepperonni').toggleClass('active');
  if ($('.btn-pepperonni').hasClass('active')) {
    var total = $('.price > strong').text();
    total = total.slice(1,3);
    total = parseInt(total);
    total++;
    $('.price > strong').text('$'+total);
    $('.pep-price').show();
  } else {
    var total = $('.price > strong').text();
    total = total.slice(1,3);
    total = parseInt(total);
    total--;
    $('.price > strong').text('$'+total);
    $('.pep-price').hide();
  }
});

$('.btn-mushrooms').on('click', function() {
  $('.mushroom').fadeToggle(0);
  $('.btn-mushrooms').toggleClass('active');
  if ($('.btn-mushrooms').hasClass('active')) {
    var total = $('.price > strong').text();
    total = total.slice(1,3);
    total = parseInt(total);
    total++;
    $('.price > strong').text('$'+total);
    $('.mush-price').show();
  } else {
    var total = $('.price > strong').text();
    total = total.slice(1,3);
    total = parseInt(total);
    total--;
    $('.price > strong').text('$'+total);
    $('.mush-price').hide();
  }
});

$('.btn-green-peppers').on('click', function() {
  $('.green-pepper').fadeToggle(0);
  $('.btn-green-peppers').toggleClass('active');
  if ($('.btn-green-peppers').hasClass('active')) {
    var total = $('.price > strong').text();
    total = total.slice(1,3);
    total = parseInt(total);
    total++;
    $('.price > strong').text('$'+total);
    $('.green-price').show();
  } else {
    var total = $('.price > strong').text();
    total = total.slice(1,3);
    total = parseInt(total);
    total--;
    $('.price > strong').text('$'+total);
    $('.green-price').hide();
  }
});

$('.btn-crust').on('click', function() {
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  if ($('.btn-crust').hasClass('active')) {
    var total = $('.price > strong').text();
    total = total.slice(1,3);
    total = parseInt(total);
    total += 5;
    $('.price > strong').text('$'+total);
    $('.gluten-price').show();
  } else {
    var total = $('.price > strong').text();
    total = total.slice(1,3);
    total = parseInt(total);
    total -= 5;
    $('.price > strong').text('$'+total);
    $('.gluten-price').hide();
  }
});

$('.btn-sauce').on('click', function() {
  $('.sauce').toggleClass('sauce-white');
  $('.btn-sauce').toggleClass('active');
  if ($('.btn-sauce').hasClass('active')) {
    var total = $('.price > strong').text();
    total = total.slice(1,3);
    total = parseInt(total);
    total += 3;
    $('.price > strong').text('$'+total);
    $('.white-price').show();
  } else {
    var total = $('.price > strong').text();
    total = total.slice(1,3);
    total = parseInt(total);
    total -= 3;
    $('.price > strong').text('$'+total);
    $('.white-price').hide();
  }
});
