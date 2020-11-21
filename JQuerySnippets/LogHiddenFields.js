if (window.jQuery)
{
  jQuery(':hidden').each(function(i, obj) {
    if (obj.value && obj.id && obj.value.length != 0 && obj.id.length != 0) {
        console.log(obj.id.trim() + ': ' + obj.value.trim());
    }
  });
}
else
{
    alert('jQuery is not loaded');
}