import $ from 'jquery';
export function moveBack(c) {
  let margin = parseInt($('.' + c + ' .grid').css('margin-left'));

  if (margin < 0) {
    margin += 280;
    $('.' + c + ' .grid').animate({ marginLeft: [margin, 'swing'] }, 100);
    if (margin > 0) {
      $('.' + c + ' .grid').css('margin-left', '0');
    }
  } else {
    $('.' + c + ' .grid').css('margin-left', '0');
  }
}

export function moveForward(c) {
  const gridLength = $('.' + c + ' .grid .grid-item').length - 3;
  const width = gridLength * (160 + 4);
  const divWidth = -width;
  let margin = parseInt($('.' + c + ' .grid').css('margin-left'));

  if (margin <= 0 && margin >= divWidth) {
    margin -= 280;
    $('.' + c + ' .grid').animate({ marginLeft: [margin, 'swing'] }, 100);
  }
}
