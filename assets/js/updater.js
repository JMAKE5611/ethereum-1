const maxPoints = 50000;
var currentPoints = 37500;

function updatePercent(percent) {
  const otherPart = 100 - percent;
  const pattern = percent + ' ' + otherPart;
  $('#percent-circle-id').attr('stroke-dasharray', pattern);
}
setInterval(function () {
  let percent = (currentPoints / 100) * 1;
  currentPoints = currentPoints - percent;
  percent = (currentPoints / maxPoints) * 100;
  if (currentPoints >= 500) {
    updatePercent(percent);
    $('#progress-ico-bar').html(`${Math.floor(currentPoints)} / ${maxPoints}`);
  }
}, 5000);

var transTemplate = `<div class="inner trans-action">
<div class="top">
  <div class="rows row-trans-out">
    <div class="hash col-lg-2 col-md-2 col-sm-2 col-xs-2">$1$</div>
    <div class="block-num col-lg-1 col-md-1 col-sm-1 col-xs-1">$2$</div>
    <div class="bitwal-sec col-lg-2 col-md-2 col-sm-2 col-xs-2">$3$</div>
    <div class="out-trans col-lg-1 col-md-1 col-sm-2 col-xs-2">
      OUT
    </div>
    <div class="bitwal col-lg-2 col-md-2 col-sm-2 col-xs-2">$4$</div>
    <div class="age col-lg-1 col-md-1 col-sm-1 col-xs-1">
      1 min
    </div>
    <div class="value col-lg-2 col-md-2 col-sm-2 col-xs-2">$6$ BTC</div>
    <div class="tx-fee col-lg-1 col-md-1 col-sm-1 col-xs-1">0.00163</div>
  </div>
</div>
<div class="bottom">
  <div class="rows row-trans-in">
    <div class="hash col-lg-2 col-md-2 col-sm-2 col-xs-2">$8$</div>
    <div class="block-num col-lg-1 col-md-1 col-sm-1 col-xs-1">$9$</div>
    <div class="bitwal col-lg-2 col-md-2 col-sm-2 col-xs-2">$10$</div>
    <div class="in-trans col-lg-1 col-md-1 col-sm-1 col-xs-1">
      IN
    </div>
    <div class="bitwal-sec col-lg-2 col-md-2 col-sm-2 col-xs-2">$11$</div>
    <div class="age col-lg-1 col-md-1 col-sm-1 col-xs-1">1 min</div>
    <div class="value col-lg-2 col-md-2 col-sm-2 col-xs-2">$13$ BTC</div>
    <div class="tx-fee col-lg-1 col-md-1 col-sm-2 col-xs-2">0.00163</div>
  </div>
</div>
</div>`;

function generateLine(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

setInterval(function () {
  let count = Math.floor(Math.random() * 15) + 1;
  let temp = transTemplate.replace('$1$', generateLine(8) + '...')
    .replace('$2$', Math.floor(Math.random() * 65040580)).replaceAll('BTC', valute)
    .replace('$3$', generateLine(8) + '...').replace('$4$', generateLine(8) + '...')
    .replace('$8$', generateLine(8) + '...').replace('$10$', generateLine(8) + '...')
    .replace('$11$', generateLine(8) + '...').replace('$9$', Math.floor(Math.random() * 65040580))
    .replace('$6$', count + '.0').replace('$13$', (count * 2) + '.0');
  $('.transaction-table__list').prepend(temp);
  $('.trans-action').each((index, element) => {
    if (index > 5) element.remove();
  });
}, 10000);