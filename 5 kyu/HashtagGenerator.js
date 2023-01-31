// https://www.codewars.com/kata/52449b062fb80683ec000024
// 5 KYU

function generateHashtag (str) {
  const hashtag = '#' + str.split(' ')
                                 .filter(e => e != '')
                                 .map(e => e.substring(0, 1).toUpperCase() + e.substring(1))
                                 .join('');
  return hashtag != '#' && hashtag.length <= 140 ? hashtag : false;
}