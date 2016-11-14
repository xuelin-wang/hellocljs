// Compiled by ClojureScript 1.9.293 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__10870_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__10870_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__6753__auto__)){
var changed__$1 = temp__6753__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__10875 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__10876 = null;
var count__10877 = (0);
var i__10878 = (0);
while(true){
if((i__10878 < count__10877)){
var s = cljs.core._nth.call(null,chunk__10876,i__10878);
var temp__6753__auto___10879 = (sheets[s]);
if(cljs.core.truth_(temp__6753__auto___10879)){
var sheet_10880 = temp__6753__auto___10879;
var temp__6753__auto___10881__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_10880.href,changed);
if(cljs.core.truth_(temp__6753__auto___10881__$1)){
var href_uri_10882 = temp__6753__auto___10881__$1;
sheet_10880.ownerNode.href = href_uri_10882.makeUnique().toString();
} else {
}
} else {
}

var G__10883 = seq__10875;
var G__10884 = chunk__10876;
var G__10885 = count__10877;
var G__10886 = (i__10878 + (1));
seq__10875 = G__10883;
chunk__10876 = G__10884;
count__10877 = G__10885;
i__10878 = G__10886;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__10875);
if(temp__6753__auto__){
var seq__10875__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10875__$1)){
var c__8295__auto__ = cljs.core.chunk_first.call(null,seq__10875__$1);
var G__10887 = cljs.core.chunk_rest.call(null,seq__10875__$1);
var G__10888 = c__8295__auto__;
var G__10889 = cljs.core.count.call(null,c__8295__auto__);
var G__10890 = (0);
seq__10875 = G__10887;
chunk__10876 = G__10888;
count__10877 = G__10889;
i__10878 = G__10890;
continue;
} else {
var s = cljs.core.first.call(null,seq__10875__$1);
var temp__6753__auto___10891__$1 = (sheets[s]);
if(cljs.core.truth_(temp__6753__auto___10891__$1)){
var sheet_10892 = temp__6753__auto___10891__$1;
var temp__6753__auto___10893__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_10892.href,changed);
if(cljs.core.truth_(temp__6753__auto___10893__$2)){
var href_uri_10894 = temp__6753__auto___10893__$2;
sheet_10892.ownerNode.href = href_uri_10894.makeUnique().toString();
} else {
}
} else {
}

var G__10895 = cljs.core.next.call(null,seq__10875__$1);
var G__10896 = null;
var G__10897 = (0);
var G__10898 = (0);
seq__10875 = G__10895;
chunk__10876 = G__10896;
count__10877 = G__10897;
i__10878 = G__10898;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__10903 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__10904 = null;
var count__10905 = (0);
var i__10906 = (0);
while(true){
if((i__10906 < count__10905)){
var s = cljs.core._nth.call(null,chunk__10904,i__10906);
var temp__6753__auto___10907 = (images[s]);
if(cljs.core.truth_(temp__6753__auto___10907)){
var image_10908 = temp__6753__auto___10907;
var temp__6753__auto___10909__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_10908.src,changed);
if(cljs.core.truth_(temp__6753__auto___10909__$1)){
var href_uri_10910 = temp__6753__auto___10909__$1;
image_10908.src = href_uri_10910.makeUnique().toString();
} else {
}
} else {
}

var G__10911 = seq__10903;
var G__10912 = chunk__10904;
var G__10913 = count__10905;
var G__10914 = (i__10906 + (1));
seq__10903 = G__10911;
chunk__10904 = G__10912;
count__10905 = G__10913;
i__10906 = G__10914;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__10903);
if(temp__6753__auto__){
var seq__10903__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10903__$1)){
var c__8295__auto__ = cljs.core.chunk_first.call(null,seq__10903__$1);
var G__10915 = cljs.core.chunk_rest.call(null,seq__10903__$1);
var G__10916 = c__8295__auto__;
var G__10917 = cljs.core.count.call(null,c__8295__auto__);
var G__10918 = (0);
seq__10903 = G__10915;
chunk__10904 = G__10916;
count__10905 = G__10917;
i__10906 = G__10918;
continue;
} else {
var s = cljs.core.first.call(null,seq__10903__$1);
var temp__6753__auto___10919__$1 = (images[s]);
if(cljs.core.truth_(temp__6753__auto___10919__$1)){
var image_10920 = temp__6753__auto___10919__$1;
var temp__6753__auto___10921__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_10920.src,changed);
if(cljs.core.truth_(temp__6753__auto___10921__$2)){
var href_uri_10922 = temp__6753__auto___10921__$2;
image_10920.src = href_uri_10922.makeUnique().toString();
} else {
}
} else {
}

var G__10923 = cljs.core.next.call(null,seq__10903__$1);
var G__10924 = null;
var G__10925 = (0);
var G__10926 = (0);
seq__10903 = G__10923;
chunk__10904 = G__10924;
count__10905 = G__10925;
i__10906 = G__10926;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__10929){
var map__10932 = p__10929;
var map__10932__$1 = ((((!((map__10932 == null)))?((((map__10932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10932):map__10932);
var on_jsload = cljs.core.get.call(null,map__10932__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__10932,map__10932__$1,on_jsload){
return (function (p1__10927_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__10927_SHARP_,".js");
});})(map__10932,map__10932__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__10932,map__10932__$1,on_jsload){
return (function (p1__10928_SHARP_){
return goog.Uri.parse(p1__10928_SHARP_).makeUnique();
});})(js_files,map__10932,map__10932__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__10932,map__10932__$1,on_jsload){
return (function() { 
var G__10934__delegate = function (_){
return on_jsload.call(null);
};
var G__10934 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__10935__i = 0, G__10935__a = new Array(arguments.length -  0);
while (G__10935__i < G__10935__a.length) {G__10935__a[G__10935__i] = arguments[G__10935__i + 0]; ++G__10935__i;}
  _ = new cljs.core.IndexedSeq(G__10935__a,0);
} 
return G__10934__delegate.call(this,_);};
G__10934.cljs$lang$maxFixedArity = 0;
G__10934.cljs$lang$applyTo = (function (arglist__10936){
var _ = cljs.core.seq(arglist__10936);
return G__10934__delegate(_);
});
G__10934.cljs$core$IFn$_invoke$arity$variadic = G__10934__delegate;
return G__10934;
})()
;})(js_files,map__10932,map__10932__$1,on_jsload))
,((function (js_files,map__10932,map__10932__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__10932,map__10932__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__10941_10945 = cljs.core.seq.call(null,things_to_log);
var chunk__10942_10946 = null;
var count__10943_10947 = (0);
var i__10944_10948 = (0);
while(true){
if((i__10944_10948 < count__10943_10947)){
var t_10949 = cljs.core._nth.call(null,chunk__10942_10946,i__10944_10948);
console.log(t_10949);

var G__10950 = seq__10941_10945;
var G__10951 = chunk__10942_10946;
var G__10952 = count__10943_10947;
var G__10953 = (i__10944_10948 + (1));
seq__10941_10945 = G__10950;
chunk__10942_10946 = G__10951;
count__10943_10947 = G__10952;
i__10944_10948 = G__10953;
continue;
} else {
var temp__6753__auto___10954 = cljs.core.seq.call(null,seq__10941_10945);
if(temp__6753__auto___10954){
var seq__10941_10955__$1 = temp__6753__auto___10954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10941_10955__$1)){
var c__8295__auto___10956 = cljs.core.chunk_first.call(null,seq__10941_10955__$1);
var G__10957 = cljs.core.chunk_rest.call(null,seq__10941_10955__$1);
var G__10958 = c__8295__auto___10956;
var G__10959 = cljs.core.count.call(null,c__8295__auto___10956);
var G__10960 = (0);
seq__10941_10945 = G__10957;
chunk__10942_10946 = G__10958;
count__10943_10947 = G__10959;
i__10944_10948 = G__10960;
continue;
} else {
var t_10961 = cljs.core.first.call(null,seq__10941_10955__$1);
console.log(t_10961);

var G__10962 = cljs.core.next.call(null,seq__10941_10955__$1);
var G__10963 = null;
var G__10964 = (0);
var G__10965 = (0);
seq__10941_10945 = G__10962;
chunk__10942_10946 = G__10963;
count__10943_10947 = G__10964;
i__10944_10948 = G__10965;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__10966_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__10966_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__10968 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__10968);

adzerk.boot_reload.reload.reload_css.call(null,G__10968);

adzerk.boot_reload.reload.reload_img.call(null,G__10968);

return G__10968;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map