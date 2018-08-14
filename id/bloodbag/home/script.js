function BeautyController($scope) {
  $scope.beautify = function() {
    var usr,
      msg,
      usrl,
      lc,
      c = $scope.chat.split(':\n');
    $scope.chat = '';

    for (var i = 1; i < c.length; i++) {
      usrl = c[i - 1].split('\n');

      msg = c[i].split('\n');
      usr = usrl[usrl.length - 2];

      lc = i < c.length - 1 ? msg.length - 2 : msg.length;
      [...Array(lc)].forEach(
        (_, j) => ($scope.chat += usr + ' : ' + msg[j] + '\n')
      );
    }
  };
}
