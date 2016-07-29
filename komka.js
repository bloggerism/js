!function(e,a,t,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=a.createElement(t),s=a.getElementsByTagName(t)[0],o.async=1,o.src=n,s.parentNode.insertBefore(o,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-UA-63951122-1","auto"),ga("send","pageview");

var gcseDiv=document.getElementById("gcsengine");gcseDiv.innerHTML="<gcse:searchbox></gcse:searchbox>",function(){var e="partner-pub-007603576513701393863:qwrv1daz0dq",t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=("https:"==document.location.protocol?"https:":"http:")+"//www.google.com/cse/cse.js?cx="+e;var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(t,c)}();
function myFunction() {
    document.getElementById("gcsresults").innerHTML = "<gcse:searchresults></gcse:searchresults>";
}myFunction();

var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} };

var mql = window.matchMedia('screen and (min-width: 60em)');if (mql.matches){function makemeSticky2(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking2 bounceInUp",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky";window.addEventListener("scroll",t,!1)}makemeSticky2("bungkus");
};

function openSosprofil() {
  var e = document.getElementById("sos-profil");
  "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
  var e = document.getElementById("search-box");
  "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
  var e = document.getElementById("search-icon");
  "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
  var e = document.getElementById("ellipsis-icon");
  "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
};

function openMobilemenu(){var e=document.getElementById("mobile-menu");"block"!==e.style.display?e.style.display="block":e.style.display="none"};

function openToolmenu() {
  document.getElementById("tool-menu").style.display = "block";
};
var boxArray = ["tool-menu"];
window.addEventListener("mouseup", function(e) {
  for (var r = 0; r < boxArray.length; r++) {
    var o = document.getElementById(boxArray[r]);
    e.target != o && e.target.parentNode != o && (o.style.display = "none")
  }
});

var HW_config = {
    selector: ".changelog-badge", // CSS selector where to inject the badge
    account: "7OgKz7", // your account ID
    translations: { title: "Hot News" }
  };
(function() { var ch = document.createElement('script'); ch.type = 'text/javascript'; ch.async = true; ch.src = '//cdn.headwayapp.co/widget.js'; var sc = document.getElementsByTagName('script')[0]; sc.parentNode.insertBefore(ch, sc); })();

var disqus_shortname="ustouscommunity";
var disqus_url = disqus_blogger_current_url;

(function () {
    "use strict";
    var get_comment_block = function () {
        var block = document.getElementById('comments');
        if (!block) {
            block = document.getElementById('disqus-blogger-comment-block');
        }
        return block;
    };
    var comment_block = get_comment_block();
    if (!!comment_block) {
        var disqus_div = document.createElement('div');
        disqus_div.id = 'disqus_thread';
        comment_block.innerHTML = '';
        comment_block.appendChild(disqus_div);
        comment_block.style.display = 'block';
        var dsq = document.createElement('script');
        dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.body).appendChild(dsq);
    }
})();

!function(e,n,t){var o,c=e.getElementsByTagName(n)[0];e.getElementById(t)||(o=e.createElement(n),o.id=t,o.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3",c.parentNode.insertBefore(o,c))}(document,"script","facebook-jssdk");

    var divs = ["disqus-box", "blogger-box", "facebook-box"];
    var visibleDivId = null;
    function toggleVisibility(divId) {
      if(visibleDivId === divId) {
        visibleDivId = null;
      } else {
        visibleDivId = divId;
      }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }

$(".commentbtn").click(function (e) {
$(this).addClass("btncurrent").siblings().removeClass("btncurrent");
});
