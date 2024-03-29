/**
 * 按字节长度截取字符串
 * @param {String} str 要截取的字符串
 * @param {Number} L 要截取的字节长度，注意是字节不是字符，一个汉字两个字节
 */
 export const cutStr = (str, L) => {
    var result = ''
    var strlen = str.length // 字符串长度
    var chrlen = str.replace(/[^x00-\xff]/g, '**').length // 字节长度
   
    if (chrlen <= L) { return str }
   
    for (var i = 0, j = 0; i < strlen; i++) {
      var chr = str.charAt(i)
      if (/[x00-\xff]/.test(chr)) {
        j++ // ascii码为0-255，一个字符就是一个字节的长度
      } else {
        j += 2 // ascii码为0-255以外，一个字符就是两个字节的长度
      }
      if (j <= L) { // 当加上当前字符以后，如果总字节长度小于等于L，则将当前字符真实的+在result后
        result += chr
      } else { // 反之则说明result已经是不拆分字符的情况下最接近L的值了，直接返回
        return result
      }
    }
  }