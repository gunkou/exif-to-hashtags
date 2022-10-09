// 先頭にハッシュタグをつける
const appendHashtag = function(a, b = '#') {
  return b + a;
}

// ハッシュタグ作成時のスペースを別の文字に変更
const replaceSpace = function(a, b = '_') {
  return a.replace(/\s+/g, b);
}

// 先頭に文字を追加
const unshiftText = function(a, b = '') {
  return b + a;
}

// 最後に文字を追加
const pushText = function(a, b = '') {
  return a + b;
}

// 露出時間からシャッタースピードに変更
// https://github.com/Luegge/jetpack/blob/master/modules/carousel/jetpack-carousel.js#L999
// https://github.com/Automattic/jetpack/issues/692
const changeExposureTimeToShutterSpeed = function(d) {
  if (d >= 1) {
    return Math.round(d*10)/10 + 's';
  }
  var df = 1, top = 1, bot = 1;
  var tol = 1e-8;
  while (df !== d && Math.abs(df-d) > tol) {
    if (df < d) {
      top += 1;
    } else {
      bot += 1;
      top = parseInt(d * bot, 10);
    }
    df = top / bot;
  }
  if (top > 1) {
    bot = Math.round(bot / top);
    top = 1;
  }
  if (bot <= 1) {
    return '1s';
  }
  return top + '/' + bot + 's';
}

export {
  appendHashtag,
  replaceSpace,
  unshiftText,
  pushText,
  changeExposureTimeToShutterSpeed
};
