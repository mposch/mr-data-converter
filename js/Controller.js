var _gaq = _gaq || [];

$(document).ready(function() {
  var d = new DataConverter('converter');

  d.create();

  $('.settings-element').change(updateSettings);

  function updateSettings(evt) {

    if (evt) {
      _gaq.push(['_trackEvent', 'Settings', evt.currentTarget.id]);
    }

    d.includeWhiteSpace = $('#includeWhiteSpaceCB').prop('checked');

    if (d.includeWhiteSpace) {
      $('input[name=indentType]').removeAttr('disabled');
      switch ($('input[name=indentType]:checked').val()) {
        case 'spaces':
          d.indent = '  ';
          break;
        case 'tabs':
          d.indent = '\t';
          break;
      }
    } else {
      $('input[name=indentType]').prop('disabled', true);
    }

    d.headersProvided = $('#headersProvidedCB').prop('checked');

    if (d.headersProvided) {
      $('input[name=headerModifications]').removeAttr('disabled');
      switch ($('input[name=headerModifications]:checked').val()) {
        case 'none':
          d.downcaseHeaders = false;
          d.upcaseHeaders = false;
          break;
        case 'downcase':
          d.downcaseHeaders = true;
          d.upcaseHeaders = false;
          break;
        case 'upcase':
          d.downcaseHeaders = false;
          d.upcaseHeaders = true;
          break;
      }
    } else {
      $('input[name=headerModifications]').prop('disabled', true);
    }

    d.delimiter = $('input[name=delimiter]:checked').val();
    d.decimal = $('input[name=decimal]:checked').val();
    d.useUnderscores = true;
    d.convert();
  }

  updateSettings();

});