  var disqus_shortname = 'ishubhamjain-github-io';
  var disqus_config = function () {
  this.page.url = '{{ page.url | replace:'index.html','' | prepend: site.url }}';
  this.page.identifier = '{{ page.id }}';
  };

(function() {
    var d = document, s = d.createElement('script');
    s.src = '//'+ disqus_shortname +'.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
 })();
