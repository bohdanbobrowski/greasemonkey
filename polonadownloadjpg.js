$(function () {
  setTimeout(function () {
    var page_number = $('input.page-selector').val();
    var page_title = $('meta[property="og:title"]').attr('content')
    $('a.download-button').click();
    var $dialog = $('body > .page-overlay').assertSize(1);
    var download_link = $dialog.find('#download-format-choose :selected').val();
    $('div.close-overlay').click();
    if (download_link.search('download_fullJPG') > - 1) {
      var link = document.createElement('a');
      var prefix = '';
      if (page_number.length == 1) {
        prefix = '00';
      }
      if (page_number.length == 2) {
        prefix = '0';
      }
      var file_name = prefix + page_number + '.jpg';
      $.ajax({
        'type': 'GET',
        'url': 'http://localhost/polonadownloadjpg.php',
        'data': {
          'title': page_title,
          'url': download_link,
          'file': file_name
        }
      });
      if (!$('.action-next-page').hasClass('disabled')) {
        var polona_url = window.location.href;
        polona_url = polona_url.split('/');
        var last = polona_url.pop();
        var last = parseInt(polona_url.pop());
        polona_url = polona_url.join('/') + '/' + (last + 1) + '/';
        console.log(polona_url);
        window.location.href = polona_url;
      }
    } else {
      alert('Brak pliku JPG do pobrania - prawdopodobnie zostałeś wylogowany.');
    }
  }, 3000);
});
