import{_ as s,c as n,o as a,d as l}from"./app.d076aa75.js";const y=JSON.parse('{"title":"Nginx \u57FA\u7840\u77E5\u8BC6","description":"","frontmatter":{},"headers":[{"level":2,"title":"Nginx \u7684\u4EA7\u751F","slug":"nginx-\u7684\u4EA7\u751F","link":"#nginx-\u7684\u4EA7\u751F","children":[]},{"level":2,"title":"Nginx \u57FA\u672C\u6982\u5FF5","slug":"nginx-\u57FA\u672C\u6982\u5FF5","link":"#nginx-\u57FA\u672C\u6982\u5FF5","children":[{"level":3,"title":"\u5173\u4E8E\u4EE3\u7406","slug":"\u5173\u4E8E\u4EE3\u7406","link":"#\u5173\u4E8E\u4EE3\u7406","children":[]},{"level":3,"title":"\u6B63\u5411\u4EE3\u7406\u4E0E\u53CD\u5411\u4EE3\u7406","slug":"\u6B63\u5411\u4EE3\u7406\u4E0E\u53CD\u5411\u4EE3\u7406","link":"#\u6B63\u5411\u4EE3\u7406\u4E0E\u53CD\u5411\u4EE3\u7406","children":[]},{"level":3,"title":"\u8D1F\u8F7D\u5747\u8861","slug":"\u8D1F\u8F7D\u5747\u8861","link":"#\u8D1F\u8F7D\u5747\u8861","children":[]},{"level":3,"title":"\u52A8\u9759\u5206\u79BB","slug":"\u52A8\u9759\u5206\u79BB","link":"#\u52A8\u9759\u5206\u79BB","children":[]},{"level":3,"title":"Nginx \u5E38\u7528\u547D\u4EE4","slug":"nginx-\u5E38\u7528\u547D\u4EE4","link":"#nginx-\u5E38\u7528\u547D\u4EE4","children":[]}]},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u9009\u62E9 Nginx","slug":"\u4E3A\u4EC0\u4E48\u9009\u62E9-nginx","link":"#\u4E3A\u4EC0\u4E48\u9009\u62E9-nginx","children":[]},{"level":2,"title":"Nginx \u914D\u7F6E","slug":"nginx-\u914D\u7F6E","link":"#nginx-\u914D\u7F6E","children":[]}],"relativePath":"document/nginx/Nginx.md","lastUpdated":1661151152000}'),p={name:"document/nginx/Nginx.md"},e=l(`<h1 id="nginx-\u57FA\u7840\u77E5\u8BC6" tabindex="-1">Nginx \u57FA\u7840\u77E5\u8BC6 <a class="header-anchor" href="#nginx-\u57FA\u7840\u77E5\u8BC6" aria-hidden="true">#</a></h1><p>Nginx \u8054\u5408\u521B\u59CB\u4EBA\u5B89\u5FB7\u9C81\xB7\u963F\u5217\u514B\u8C22\u592B\uFF08Andrew Alexeev\uFF09\u66FE\u8BF4\uFF1ANginx \u662F\u4E3A\u5BF9 Apache \u6027\u80FD\u4E0D\u6EE1\u610F\u7684\u4EBA\u800C\u6784\u5EFA\u7684\u3002\u968F\u7740 Internet \u9700\u6C42\u7684\u53D8\u5316\uFF0CWeb \u670D\u52A1\u5668\u7684\u5DE5\u4F5C\u4E5F\u5728\u53D8\u5316\u3002Nginx \u7684\u6784\u5EFA\u6BD4\u4EE5\u5F80\u4EFB\u4F55\u65F6\u5019\u90FD\u66F4\u6709\u6548\u7387\uFF0C\u66F4\u53EF\u6269\u5C55\uFF0C\u66F4\u5B89\u5168\uFF0C\u66F4\u5F3A\u5927\u3002</p><h2 id="nginx-\u7684\u4EA7\u751F" tabindex="-1">Nginx \u7684\u4EA7\u751F <a class="header-anchor" href="#nginx-\u7684\u4EA7\u751F" aria-hidden="true">#</a></h2><p>Nginx \u540C Apache \u4E00\u6837\u90FD\u662F\u4E00\u79CD Web \u670D\u52A1\u5668\u3002\u57FA\u4E8E REST \u67B6\u6784\u98CE\u683C\uFF0C\u4EE5\u7EDF\u4E00\u8D44\u6E90\u63CF\u8FF0\u7B26\uFF08Uniform Resources Identifier\uFF09URI \u6216\u8005\u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26\uFF08Uniform Resources Locator\uFF09URL \u4F5C\u4E3A\u6C9F\u901A\u4F9D\u636E\uFF0C\u901A\u8FC7 HTTP \u534F\u8BAE\u63D0\u4F9B\u5404\u79CD\u7F51\u7EDC\u670D\u52A1\u3002</p><p>\u7136\u800C\uFF0C\u8FD9\u4E9B\u670D\u52A1\u5668\u5728\u8BBE\u8BA1\u4E4B\u521D\u53D7\u5230\u5F53\u65F6\u73AF\u5883\u7684\u5C40\u9650\uFF0C\u4F8B\u5982\u5F53\u65F6\u7684\u7528\u6237\u89C4\u6A21\uFF0C\u7F51\u7EDC\u5E26\u5BBD\uFF0C\u4EA7\u54C1\u7279\u70B9\u7B49\u5C40\u9650\u5E76\u4E14\u5404\u81EA\u7684\u5B9A\u4F4D\u548C\u53D1\u5C55\u90FD\u4E0D\u5C3D\u76F8\u540C\u3002\u8FD9\u4E5F\u4F7F\u5F97\u5404\u4E2A Web \u670D\u52A1\u5668\u6709\u7740\u5404\u81EA\u9C9C\u660E\u7684\u7279\u70B9\u3002</p><p>Apache \u7684\u53D1\u5C55\u65F6\u671F\u5F88\u957F\uFF0C\u800C\u4E14\u662F\u6BEB\u65E0\u4E89\u8BAE\u7684\u4E16\u754C\u7B2C\u4E00\u5927\u670D\u52A1\u5668\u3002\u5B83\u6709\u7740\u5F88\u591A\u4F18\u70B9\uFF1A\u7A33\u5B9A\u3001\u5F00\u6E90\u3001\u8DE8\u5E73\u53F0\u7B49\u7B49\u3002</p><p>\u5B83\u51FA\u73B0\u7684\u65F6\u95F4\u592A\u957F\u4E86\uFF0C\u5B83\u5174\u8D77\u7684\u5E74\u4EE3\uFF0C\u4E92\u8054\u7F51\u4EA7\u4E1A\u8FDC\u8FDC\u6BD4\u4E0D\u4E0A\u73B0\u5728\u3002\u6240\u4EE5\u5B83\u88AB\u8BBE\u8BA1\u4E3A\u4E00\u4E2A\u91CD\u91CF\u7EA7\u7684\u3002</p><p>\u5B83\u4E0D\u652F\u6301\u9AD8\u5E76\u53D1\u7684\u670D\u52A1\u5668\u3002\u5728 Apache \u4E0A\u8FD0\u884C\u6570\u4EE5\u4E07\u8BA1\u7684\u5E76\u53D1\u8BBF\u95EE\uFF0C\u4F1A\u5BFC\u81F4\u670D\u52A1\u5668\u6D88\u8017\u5927\u91CF\u5185\u5B58\u3002</p><p>\u64CD\u4F5C\u7CFB\u7EDF\u5BF9\u5176\u8FDB\u884C\u8FDB\u7A0B\u6216\u7EBF\u7A0B\u95F4\u7684\u5207\u6362\u4E5F\u6D88\u8017\u4E86\u5927\u91CF\u7684 CPU \u8D44\u6E90\uFF0C\u5BFC\u81F4 HTTP \u8BF7\u6C42\u7684\u5E73\u5747\u54CD\u5E94\u901F\u5EA6\u964D\u4F4E\u3002</p><p>\u8FD9\u4E9B\u90FD\u51B3\u5B9A\u4E86 Apache \u4E0D\u53EF\u80FD\u6210\u4E3A\u9AD8\u6027\u80FD Web \u670D\u52A1\u5668\uFF0C\u8F7B\u91CF\u7EA7\u9AD8\u5E76\u53D1\u670D\u52A1\u5668 Nginx \u5C31\u5E94\u8FD0\u800C\u751F\u4E86\u3002</p><p>\u4FC4\u7F57\u65AF\u7684\u5DE5\u7A0B\u5E08 Igor Sysoev\uFF0C\u4ED6\u5728\u4E3A Rambler Media \u5DE5\u4F5C\u671F\u95F4\uFF0C\u4F7F\u7528 C \u8BED\u8A00\u5F00\u53D1\u4E86 Nginx\u3002</p><p>Nginx \u4F5C\u4E3A Web \u670D\u52A1\u5668\u4E00\u76F4\u4E3A Rambler Media \u63D0\u4F9B\u51FA\u8272\u800C\u53C8\u7A33\u5B9A\u7684\u670D\u52A1\u3002\u7136\u540E\u5462\uFF0CIgor Sysoev \u5C06 Nginx \u4EE3\u7801\u5F00\u6E90\uFF0C\u5E76\u4E14\u8D4B\u4E88\u81EA\u7531\u8F6F\u4EF6\u8BB8\u53EF\u8BC1\u3002</p><p>Nginx \u706B\u7684\u7F18\u7531\uFF1A</p><ul><li>Nginx \u4F7F\u7528\u57FA\u4E8E\u4E8B\u4EF6\u9A71\u52A8\u67B6\u6784\uFF0C\u4F7F\u5176\u53EF\u4EE5\u652F\u6301\u6570\u767E\u4E07\u7EA7\u522B\u7684 TCP \u8FDE\u63A5\u3002</li><li>\u9AD8\u5EA6\u7684\u6A21\u5757\u5316\u548C\u81EA\u7531\u8F6F\u4EF6\u8BB8\u53EF\u8BC1\u4F7F\u5F97\u7B2C\u4E09\u65B9\u6A21\u5757\u5C42\u51FA\u4E0D\u7A77\u3002</li><li>Nginx \u662F\u4E00\u4E2A\u8DE8\u5E73\u53F0\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u8FD0\u884C\u5728 Linux\u3001Windows\u3001FreeBSD\u3001Solaris\u3001AIX\u3001Mac OS \u7B49\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u3002</li><li>\u8FD9\u4E9B\u4F18\u79C0\u7684\u8BBE\u8BA1\u5E26\u6765\u6781\u5927\u7684\u7A33\u5B9A\u6027\u3002</li></ul><h2 id="nginx-\u57FA\u672C\u6982\u5FF5" tabindex="-1">Nginx \u57FA\u672C\u6982\u5FF5 <a class="header-anchor" href="#nginx-\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a></h2><p>Nginx \u662F\u4E00\u6B3E\u81EA\u7531\u7684\u3001\u5F00\u6E90\u7684\u3001\u9AD8\u6027\u80FD\u7684 HTTP \u670D\u52A1\u5668\u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF1B\u540C\u65F6\u4E5F\u662F\u4E00\u4E2A IMAP\u3001POP3\u3001SMTP \u4EE3\u7406\u670D\u52A1\u5668\u3002</p><h3 id="\u5173\u4E8E\u4EE3\u7406" tabindex="-1">\u5173\u4E8E\u4EE3\u7406 <a class="header-anchor" href="#\u5173\u4E8E\u4EE3\u7406" aria-hidden="true">#</a></h3><p>\u5173\u4E8E\u4EE3\u7406\uFF0C\u9996\u5148\u8981\u660E\u786E\u4E00\u4E2A\u6982\u5FF5\uFF0C\u6240\u8C13\u4EE3\u7406\u5C31\u662F\u4E00\u4E2A\u4EE3\u8868\u3001\u4E00\u4E2A\u6E20\u9053\uFF1B\u6B64\u65F6\u5C31\u6D89\u53CA\u5230\u4E24\u4E2A\u89D2\u8272\uFF0C\u4E00\u4E2A\u662F\u88AB\u4EE3\u7406\u89D2\u8272\uFF0C\u4E00\u4E2A\u662F\u76EE\u6807\u89D2\u8272\u3002</p><p>\u88AB\u4EE3\u7406\u89D2\u8272\u901A\u8FC7\u8FD9\u4E2A\u4EE3\u7406\u8BBF\u95EE\u76EE\u6807\u89D2\u8272\u5B8C\u6210\u4E00\u4E9B\u4EFB\u52A1\u7684\u8FC7\u7A0B\u79F0\u4E3A\u4EE3\u7406\u64CD\u4F5C\u8FC7\u7A0B\uFF1B\u5982\u540C\u751F\u6D3B\u4E2D\u7684\u4E13\u5356\u5E97\uFF0C\u5BA2\u4EBA\u5230\u4E13\u5356\u5E97\u8D2D\u4E70\u4E1C\u897F\uFF0C\u8FD9\u4E2A\u4E13\u5356\u5E97\u5C31\u662F\u4EE3\u7406\uFF0C\u88AB\u4EE3\u7406\u89D2\u8272\u5C31\u662F\u5382\u5BB6\uFF0C\u76EE\u6807\u89D2\u8272\u5C31\u662F\u5BA2\u6237\u3002</p><h3 id="\u6B63\u5411\u4EE3\u7406\u4E0E\u53CD\u5411\u4EE3\u7406" tabindex="-1">\u6B63\u5411\u4EE3\u7406\u4E0E\u53CD\u5411\u4EE3\u7406 <a class="header-anchor" href="#\u6B63\u5411\u4EE3\u7406\u4E0E\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a></h3><p>Nginx \u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u3002</p><p>\u4EE3\u7406\u662F\u5728\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u4E4B\u95F4\u5047\u8BBE\u7684\u4E00\u5C42\u670D\u52A1\u5668\uFF0C\u4EE3\u7406\u5C06\u63A5\u6536\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u5E76\u5C06\u5B83\u8F6C\u53D1\u7ED9\u670D\u52A1\u5668\uFF0C\u7136\u540E\u5C06\u670D\u52A1\u7AEF\u7684\u54CD\u5E94\u8F6C\u53D1\u7ED9\u5BA2\u6237\u7AEF\u3002</p><h4 id="\u6B63\u5411\u4EE3\u7406" tabindex="-1">\u6B63\u5411\u4EE3\u7406 <a class="header-anchor" href="#\u6B63\u5411\u4EE3\u7406" aria-hidden="true">#</a></h4><p>\u6B63\u5411\u4EE3\u7406\uFF08Forward\uFF09\u610F\u601D\u662F\u4E00\u4E2A\u4F4D\u4E8E\u5BA2\u6237\u7AEF\u548C\u539F\u59CB\u670D\u52A1\u5668\uFF08Origin Server\uFF09\u4E4B\u95F4\u7684\u4E00\u4E2A\u670D\u52A1\u5668\uFF0C\u4E3A\u4E86\u4ECE\u539F\u59CB\u670D\u52A1\u5668\u83B7\u5F97\u5185\u5BB9\uFF0C\u5BA2\u6237\u7AEF\u5411\u4EE3\u7406\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42\u5E76\u6307\u5B9A\u76EE\u6807\uFF08\u539F\u59CB\u670D\u52A1\u5668\uFF09\uFF0C\u7136\u540E\u4EE3\u7406\u5411\u539F\u59CB\u670D\u52A1\u5668\u8F6C\u4EA4\u8BF7\u6C42\u5E76\u5C06\u83B7\u5F97\u7684\u5185\u5BB9\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</p><p>\u6B63\u5411\u4EE3\u7406\u662F\u4E3A\u6211\u4EEC\u670D\u52A1\u7684\uFF0C\u5373\u4E3A\u5BA2\u6237\u7AEF\u670D\u52A1\u7684\uFF0C\u5BA2\u6237\u7AEF\u53EF\u4EE5\u6839\u636E\u6B63\u5411\u4EE3\u7406\u8BBF\u95EE\u5230\u5B83\u672C\u8EAB\u65E0\u6CD5\u8BBF\u95EE\u5230\u7684\u670D\u52A1\u5668\u8D44\u6E90\u3002</p><p>\u6B63\u5411\u4EE3\u7406\u5BF9\u6211\u4EEC\u662F\u900F\u660E\u7684\uFF0C\u5BF9\u670D\u52A1\u7AEF\u662F\u975E\u900F\u660E\u7684\uFF0C\u5373\u670D\u52A1\u7AEF\u5E76\u4E0D\u77E5\u9053\u81EA\u5DF1\u6536\u5230\u7684\u662F\u6765\u81EA\u4EE3\u7406\u7684\u8BBF\u95EE\u8FD8\u662F\u6765\u81EA\u771F\u5B9E\u5BA2\u6237\u7AEF\u7684\u8BBF\u95EE\u3002</p><p><strong>\u6B63\u5411\u4EE3\u7406\u7684\u7528\u9014\uFF1A</strong></p><ul><li>\u8BBF\u95EE\u539F\u6765\u65E0\u6CD5\u8BBF\u95EE\u7684\u8D44\u6E90\uFF0C\u5982 Google\u3002</li><li>\u53EF\u4EE5\u505A\u7F13\u5B58\uFF0C\u52A0\u901F\u8BBF\u95EE\u8D44\u6E90\u3002</li><li>\u5BF9\u5BA2\u6237\u7AEF\u8BBF\u95EE\u6388\u6743\uFF0C\u4E0A\u7F51\u8FDB\u884C\u8BA4\u8BC1\u3002</li><li>\u4EE3\u7406\u53EF\u4EE5\u8BB0\u5F55\u7528\u6237\u8BBF\u95EE\u8BB0\u5F55\uFF08\u4E0A\u7F51\u884C\u4E3A\u7BA1\u7406\uFF09\uFF0C\u5BF9\u5916\u9690\u85CF\u7528\u6237\u4FE1\u606F\u3002</li></ul><h4 id="\u53CD\u5411\u4EE3\u7406" tabindex="-1">\u53CD\u5411\u4EE3\u7406 <a class="header-anchor" href="#\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a></h4><p>\u53CD\u5411\u4EE3\u7406\uFF08Reverse Proxy\uFF09\u65B9\u5F0F\u662F\u6307\u4EE5\u4EE3\u7406\u670D\u52A1\u5668\u6765\u63A5\u53D7 internet \u4E0A\u7684\u8FDE\u63A5\u8BF7\u6C42\uFF0C\u7136\u540E\u5C06\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u5185\u90E8\u7F51\u7EDC\u4E0A\u7684\u670D\u52A1\u5668\uFF0C\u5E76\u5C06\u4ECE\u670D\u52A1\u5668\u4E0A\u5F97\u5230\u7684\u7ED3\u679C\u8FD4\u56DE\u7ED9 internet \u4E0A\u8BF7\u6C42\u8FDE\u63A5\u7684\u5BA2\u6237\u7AEF\uFF0C\u6B64\u65F6\u4EE3\u7406\u670D\u52A1\u5668\u5BF9\u5916\u5C31\u8868\u73B0\u4E3A\u4E00\u4E2A\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u3002</p><p>\u53CD\u5411\u4EE3\u7406\u662F\u4E3A\u670D\u52A1\u7AEF\u670D\u52A1\u7684\uFF0C\u53CD\u5411\u4EE3\u7406\u53EF\u4EE5\u5E2E\u52A9\u670D\u52A1\u5668\u63A5\u53D7\u6765\u81EA\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\uFF0C\u5E2E\u52A9\u670D\u52A1\u5668\u505A\u8BF7\u6C42\u8F6C\u53D1\uFF0C\u8D1F\u8F7D\u5747\u8861\u7B49\u3002</p><p>\u53CD\u5411\u4EE3\u7406\u5BF9\u670D\u52A1\u7AEF\u662F\u900F\u660E\u7684\uFF0C\u5BF9\u6211\u4EEC\u662F\u975E\u900F\u660E\u7684\uFF0C\u5373\u6211\u4EEC\u5E76\u4E0D\u77E5\u9053\u81EA\u5DF1\u8BBF\u95EE\u7684\u662F\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u800C\u670D\u52A1\u5668\u77E5\u9053\u53CD\u5411\u4EE3\u7406\u5728\u4E3A\u4ED6\u670D\u52A1\u3002</p><p><strong>\u53CD\u5411\u4EE3\u7406\u7684\u4F5C\u7528\uFF1A</strong></p><ul><li>\u4FDD\u8BC1\u5185\u7F51\u7684\u5B89\u5168\uFF0C\u901A\u5E38\u5C06\u53CD\u5411\u4EE3\u7406\u4F5C\u4E3A\u516C\u7F51\u8BBF\u95EE\u5730\u5740\uFF0CWeb \u670D\u52A1\u5668\u662F\u5185\u7F51\u3002</li><li>\u8D1F\u8F7D\u5747\u8861\uFF0C\u901A\u8FC7\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u6765\u4F18\u5316\u7F51\u7AD9\u7684\u8D1F\u8F7D\u3002</li></ul><h3 id="\u8D1F\u8F7D\u5747\u8861" tabindex="-1">\u8D1F\u8F7D\u5747\u8861 <a class="header-anchor" href="#\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a></h3><p>\u5982\u679C\u8BF7\u6C42\u6570\u8FC7\u5927\uFF0C\u5355\u4E2A\u670D\u52A1\u5668\u89E3\u51B3\u4E0D\u4E86\uFF0C\u6211\u4EEC\u589E\u52A0\u670D\u52A1\u5668\u7684\u6570\u91CF\uFF0C\u7136\u540E\u5C06\u8BF7\u6C42\u5206\u53D1\u5230\u5404\u4E2A\u670D\u52A1\u5668\u4E0A\uFF0C\u5C06\u539F\u5148\u8BF7\u6C42\u96C6\u4E2D\u5230\u5355\u4E2A\u670D\u52A1\u5668\u7684\u60C5\u51B5\u6539\u4E3A\u8BF7\u6C42\u5206\u53D1\u5230\u591A\u4E2A\u670D\u52A1\u5668\u4E0A\uFF0C\u5C31\u662F\u8D1F\u8F7D\u5747\u8861\u3002</p><p>upstream \u6307\u5B9A\u540E\u7AEF\u670D\u52A1\u5668\u5730\u5740\u5217\u8868\uFF0C\u5728 server \u4E2D\u62E6\u622A\u54CD\u5E94\u8BF7\u6C42\uFF0C\u5E76\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230 upstream \u4E2D\u914D\u7F6E\u7684\u670D\u52A1\u5668\u5217\u8868\u3002</p><div class="language-nginx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#C792EA;">upstream</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">balanceServer </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">server</span><span style="color:#A6ACCD;"> 10.1.22.33:12345;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">server</span><span style="color:#A6ACCD;"> 10.1.22.34:12345;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">server</span><span style="color:#A6ACCD;"> 10.1.22.35:12345;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;"> fe.server.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/api </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://balanceServer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u4E0A\u9762\u7684\u914D\u7F6E\u53EA\u662F\u6307\u5B9A\u4E86 nginx \u9700\u8981\u8F6C\u53D1\u7684\u670D\u52A1\u5668\u5217\u8868\uFF0C\u5E76\u6CA1\u6709\u6307\u5B9A\u5206\u914D\u7B56\u7565\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u91C7\u7528\u7684\u662F\u8F6E\u8BE2\u7B56\u7565\uFF0C\u5C06\u6240\u6709\u5BA2\u6237\u7AEF\u8BF7\u6C42\u8F6E\u8BE2\u5206\u914D\u7ED9\u670D\u52A1\u7AEF\u3002\u8FD9\u79CD\u7B56\u7565\u662F\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\u7684\uFF0C\u4F46\u662F\u5982\u679C\u5176\u4E2D\u67D0\u4E00\u53F0\u670D\u52A1\u5668\u538B\u529B\u592A\u5927\uFF0C\u51FA\u73B0\u5EF6\u8FDF\uFF0C\u4F1A\u5F71\u54CD\u6240\u6709\u5206\u914D\u5728\u8FD9\u53F0\u670D\u52A1\u5668\u7684\u7528\u6237\u3002</p><p><strong>Nginx \u652F\u6301\u7684\u8D1F\u8F7D\u5747\u8861\u8C03\u5EA6\u7B97\u6CD5\u65B9\u5F0F\u5982\u4E0B\uFF1A</strong></p><p>**weight \u8F6E\u8BE2\uFF08\u9ED8\u8BA4\uFF0C\u5E38\u7528\uFF09\uFF1A**\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u6309\u7167\u6743\u91CD\u5206\u914D\u5230\u4E0D\u540C\u7684\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u5373\u4F7F\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u67D0\u4E00\u53F0\u540E\u7AEF\u670D\u52A1\u5668\u5B95\u673A\uFF0CNginx \u4F1A\u81EA\u52A8\u5C06\u8BE5\u670D\u52A1\u5668\u5254\u9664\u51FA\u961F\u5217\uFF0C\u8BF7\u6C42\u53D7\u7406\u60C5\u51B5\u4E0D\u4F1A\u53D7\u5230\u4EFB\u4F55\u5F71\u54CD\u3002\u8FD9\u79CD\u65B9\u5F0F\u4E0B\uFF0C\u53EF\u4EE5\u7ED9\u4E0D\u540C\u7684\u540E\u7AEF\u670D\u52A1\u5668\u8BBE\u7F6E\u4E00\u4E2A\u6743\u91CD\u503C(weight)\uFF0C\u7528\u4E8E\u8C03\u6574\u4E0D\u540C\u7684\u670D\u52A1\u5668\u4E0A\u8BF7\u6C42\u7684\u5206\u914D\u7387\uFF1B\u6743\u91CD\u6570\u636E\u8D8A\u5927\uFF0C\u88AB\u5206\u914D\u5230\u8BF7\u6C42\u7684\u51E0\u7387\u8D8A\u5927\uFF1B\u8BE5\u6743\u91CD\u503C\uFF0C\u4E3B\u8981\u662F\u9488\u5BF9\u5B9E\u9645\u5DE5\u4F5C\u73AF\u5883\u4E2D\u4E0D\u540C\u7684\u540E\u7AEF\u670D\u52A1\u5668\u786C\u4EF6\u914D\u7F6E\u8FDB\u884C\u8C03\u6574\u7684\u3002</p><p>**ip_hash\uFF08\u5E38\u7528\uFF09\uFF1A**\u6BCF\u4E2A\u8BF7\u6C42\u6309\u7167\u53D1\u8D77\u5BA2\u6237\u7AEF\u7684 ip \u7684 hash \u7ED3\u679C\u8FDB\u884C\u5339\u914D\uFF0C\u8FD9\u6837\u7684\u7B97\u6CD5\u4E0B\u4E00\u4E2A\u56FA\u5B9A ip \u5730\u5740\u7684\u5BA2\u6237\u7AEF\u603B\u4F1A\u8BBF\u95EE\u5230\u540C\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u8FD9\u4E5F\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u89E3\u51B3\u4E86\u96C6\u7FA4\u90E8\u7F72\u73AF\u5883\u4E0B session \u5171\u4EAB\u7684\u95EE\u9898\u3002</p><p>**fair\uFF1A**\u667A\u80FD\u8C03\u6574\u8C03\u5EA6\u7B97\u6CD5\uFF0C\u52A8\u6001\u7684\u6839\u636E\u540E\u7AEF\u670D\u52A1\u5668\u7684\u8BF7\u6C42\u5904\u7406\u5230\u54CD\u5E94\u7684\u65F6\u95F4\u8FDB\u884C\u5747\u8861\u5206\u914D\uFF0C\u54CD\u5E94\u65F6\u95F4\u77ED\u5904\u7406\u6548\u7387\u9AD8\u7684\u670D\u52A1\u5668\u5206\u914D\u5230\u8BF7\u6C42\u7684\u6982\u7387\u9AD8\uFF0C\u54CD\u5E94\u65F6\u95F4\u957F\u5904\u7406\u6548\u7387\u4F4E\u7684\u670D\u52A1\u5668\u5206\u914D\u5230\u7684\u8BF7\u6C42\u5C11\uFF1B\u7ED3\u5408\u4E86\u524D\u4E24\u8005\u7684\u4F18\u70B9\u7684\u4E00\u79CD\u8C03\u5EA6\u7B97\u6CD5\u3002\u4F46\u662F\u9700\u8981\u6CE8\u610F\u7684\u662F Nginx \u9ED8\u8BA4\u4E0D\u652F\u6301 fair \u7B97\u6CD5\uFF0C\u5982\u679C\u8981\u4F7F\u7528\u8FD9\u79CD\u8C03\u5EA6\u7B97\u6CD5\uFF0C\u8BF7\u5B89\u88C5 upstream_fair \u6A21\u5757\u3002url_hash\uFF1A\u6309\u7167\u8BBF\u95EE\u7684 url \u7684 hash \u7ED3\u679C\u5206\u914D\u8BF7\u6C42\uFF0C\u6BCF\u4E2A\u8BF7\u6C42\u7684 url \u4F1A\u6307\u5411\u540E\u7AEF\u56FA\u5B9A\u7684\u67D0\u4E2A\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u5728 Nginx \u4F5C\u4E3A\u9759\u6001\u670D\u52A1\u5668\u7684\u60C5\u51B5\u4E0B\u63D0\u9AD8\u7F13\u5B58\u6548\u7387\u3002\u540C\u6837\u8981\u6CE8\u610F Nginx \u9ED8\u8BA4\u4E0D\u652F\u6301\u8FD9\u79CD\u8C03\u5EA6\u7B97\u6CD5\uFF0C\u8981\u4F7F\u7528\u7684\u8BDD\u9700\u8981\u5B89\u88C5 Nginx \u7684 hash \u8F6F\u4EF6\u5305\u3002</p><h3 id="\u52A8\u9759\u5206\u79BB" tabindex="-1">\u52A8\u9759\u5206\u79BB <a class="header-anchor" href="#\u52A8\u9759\u5206\u79BB" aria-hidden="true">#</a></h3><p>\u4E3A\u4E86\u52A0\u5FEB\u670D\u52A1\u5668\u7684\u89E3\u6790\u901F\u5EA6\uFF0C\u53EF\u4EE5\u628A\u52A8\u6001\u9875\u9762\u548C\u9759\u6001\u9875\u9762\u4EA4\u7ED9\u4E0D\u540C\u7684\u670D\u52A1\u5668\u6765\u89E3\u6790\uFF0C\u52A0\u5FEB\u89E3\u6790\u901F\u5EA6\uFF0C\u964D\u4F4E\u539F\u6765\u5355\u4E2A\u670D\u52A1\u5668\u7684\u538B\u529B\u3002</p><h3 id="nginx-\u5E38\u7528\u547D\u4EE4" tabindex="-1">Nginx \u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#nginx-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h3><div class="language-nginx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5FEB\u901F\u5173\u95EDNginx\uFF0C\u53EF\u80FD\u4E0D\u4FDD\u5B58\u76F8\u5173\u4FE1\u606F\uFF0C\u5E76\u8FC5\u901F\u7EC8\u6B62web\u670D\u52A1</span></span>
<span class="line"><span style="color:#89DDFF;">nginx</span><span style="color:#A6ACCD;"> -s stop</span></span>
<span class="line"><span style="color:#676E95;"># \u5E73\u7A33\u5173\u95EDNginx\uFF0C\u4FDD\u5B58\u76F8\u5173\u4FE1\u606F\uFF0C\u6709\u5B89\u6392\u7684\u7ED3\u675Fweb\u670D\u52A1</span></span>
<span class="line"><span style="color:#89DDFF;">nginx</span><span style="color:#A6ACCD;"> -s quit</span></span>
<span class="line"><span style="color:#676E95;"># \u56E0\u6539\u53D8\u4E86Nginx\u76F8\u5173\u914D\u7F6E\uFF0C\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u800C\u91CD\u8F7D</span></span>
<span class="line"><span style="color:#89DDFF;">nginx</span><span style="color:#A6ACCD;"> -s reload</span></span>
<span class="line"><span style="color:#676E95;"># \u91CD\u65B0\u6253\u5F00\u65E5\u5FD7\u6587\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">nginx</span><span style="color:#A6ACCD;"> -s reopen</span></span>
<span class="line"><span style="color:#676E95;"># \u4E3A Nginx \u6307\u5B9A\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u6765\u4EE3\u66FF\u7F3A\u7701\u7684</span></span>
<span class="line"><span style="color:#89DDFF;">nginx</span><span style="color:#A6ACCD;"> -c filename</span></span>
<span class="line"><span style="color:#676E95;"># \u4E0D\u8FD0\u884C\uFF0C\u800C\u4EC5\u4EC5\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u3002nginx \u5C06\u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u7684\u8BED\u6CD5\u7684\u6B63\u786E\u6027\uFF0C\u5E76\u5C1D\u8BD5\u6253\u5F00\u914D\u7F6E\u6587\u4EF6\u4E2D\u6240\u5F15\u7528\u5230\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">nginx</span><span style="color:#A6ACCD;"> -t</span></span>
<span class="line"><span style="color:#676E95;">#  \u663E\u793A nginx \u7684\u7248\u672C</span></span>
<span class="line"><span style="color:#89DDFF;">nginx</span><span style="color:#A6ACCD;"> -v</span></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A nginx \u7684\u7248\u672C\uFF0C\u7F16\u8BD1\u5668\u7248\u672C\u548C\u914D\u7F6E\u53C2\u6570</span></span>
<span class="line"><span style="color:#89DDFF;">nginx</span><span style="color:#A6ACCD;"> -V</span></span>
<span class="line"><span style="color:#676E95;"># \u683C\u5F0F\u6362\u663E\u793A nginx \u914D\u7F6E\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">2&gt;&amp;</span><span style="color:#89DDFF;">1</span><span style="color:#A6ACCD;"> nginx -V | xargs -n1</span></span>
<span class="line"><span style="color:#A6ACCD;">2&gt;&amp;</span><span style="color:#89DDFF;">1</span><span style="color:#A6ACCD;"> nginx -V | xargs -n1 | grep lua</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u4E3A\u4EC0\u4E48\u9009\u62E9-nginx" tabindex="-1">\u4E3A\u4EC0\u4E48\u9009\u62E9 Nginx <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9009\u62E9-nginx" aria-hidden="true">#</a></h2><p>Nginx \u662F\u4E00\u6B3E\u81EA\u7531\u7684\u3001\u5F00\u6E90\u7684\u3001\u9AD8\u6027\u80FD\u7684 HTTP \u670D\u52A1\u5668\u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF1B\u540C\u65F6\u4E5F\u662F\u4E00\u4E2A IMAP\u3001POP3\u3001SMTP \u4EE3\u7406\u670D\u52A1\u5668\uFF1BNginx \u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A HTTP \u670D\u52A1\u5668\u8FDB\u884C\u7F51\u7AD9\u7684\u53D1\u5E03\u5904\u7406\uFF0C\u53E6\u5916 Nginx \u53EF\u4EE5\u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861\u7684\u5B9E\u73B0\u3002\u5728 Nginx \u7F51\u7AD9\u4E0A\uFF0C\u5176\u529F\u80FD\u5305\u62EC\uFF1A</p><ul><li>HTTP \u548C HTTPS\uFF08TLS / SSL / SNI\uFF09</li><li>\u8D85\u5FEB\u901F\u7684 Web \u670D\u52A1\u5668\u7528\u4E8E\u9759\u6001\u5185\u5BB9</li><li>FastCGI\uFF0CWSGI\uFF0CSCGI \u7528\u4E8E\u52A8\u6001\u5185\u5BB9</li><li>\u5177\u6709\u8D1F\u8F7D\u5E73\u8861\u548C\u7F13\u5B58\u529F\u80FD\u7684\u52A0\u901F Web \u4EE3\u7406</li><li>\u4E0D\u95F4\u65AD\u5B9E\u65F6\u4E8C\u8FDB\u5236\u5347\u7EA7\u548C\u914D\u7F6E</li><li>\u538B\u7F29\u548C\u5185\u5BB9\u8FC7\u6EE4\u5668</li><li>\u865A\u62DF\u4E3B\u673A</li><li>FLV \u548C MP4 \u7684\u5A92\u4F53\u6D41</li><li>\u5E26\u5BBD\u548C\u8FDE\u63A5\u7B56\u7565</li><li>\u5168\u9762\u7684\u8BBF\u95EE\u63A7\u5236</li><li>\u81EA\u5B9A\u4E49\u65E5\u5FD7</li><li>\u5D4C\u5165\u5F0F\u811A\u672C</li><li>\u5E26\u6709 TLS \u7684 SMTP / IMAP / POP3 \u7684\u90AE\u4EF6\u4EE3\u7406</li><li>\u903B\u8F91\uFF0C\u7075\u6D3B\uFF0C\u53EF\u6269\u5C55\u7684\u914D\u7F6E</li><li>\u5728 Linux\uFF0CFreeBSD\uFF0CMac OS X\uFF0CSolaris \u548C Windows \u4E0A\u8FD0\u884C</li></ul><h2 id="nginx-\u914D\u7F6E" tabindex="-1">Nginx \u914D\u7F6E <a class="header-anchor" href="#nginx-\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-nginx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;">#\u6253\u5F00\u4E3B\u914D\u7F6E\u6587\u4EF6\uFF0C\u82E5\u4F60\u662F\u7528lnmp\u73AF\u5883\u5B89\u88C5</span></span>
<span class="line"><span style="color:#89DDFF;">vim</span><span style="color:#A6ACCD;"> /usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">----------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">user </span><span style="color:#A6ACCD;">                   </span><span style="color:#676E95;">#\u8BBE\u7F6Enginx\u670D\u52A1\u7684\u7CFB\u7EDF\u4F7F\u7528\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes        </span><span style="color:#676E95;">#\u5DE5\u4F5C\u8FDB\u7A0B\u6570 \u4E00\u822C\u60C5\u51B5\u4E0ECPU\u6838\u6570\u4FDD\u6301\u4E00\u81F4</span></span>
<span class="line"><span style="color:#A6ACCD;">error_log               </span><span style="color:#676E95;">#nginx\u7684\u9519\u8BEF\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">pid                     </span><span style="color:#676E95;">#nginx\u542F\u52A8\u65F6\u7684pid</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">events {</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections    </span><span style="color:#676E95;">#\u6BCF\u4E2A\u8FDB\u7A0B\u5141\u8BB8\u6700\u5927\u8FDE\u63A5\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    use                   </span><span style="color:#676E95;">#nginx\u4F7F\u7528\u7684\u5185\u6838\u6A21\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u6211\u4EEC\u4F7F\u7528 nginx \u7684 http \u670D\u52A1\uFF0C\u5728\u914D\u7F6E\u6587\u4EF6 nginx.conf \u4E2D\u7684 http \u533A\u57DF\u5185\uFF0C\u914D\u7F6E\u65E0\u6570\u4E2A server \uFF0C\u6BCF\u4E00\u4E2A server \u5BF9\u5E94\u8FD9\u4E00\u4E2A\u865A\u62DF\u4E3B\u673A\u6216\u8005\u57DF\u540D\u3002</p><div class="language-nginx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#C792EA;">http</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ... ...        </span><span style="color:#676E95;">#\u540E\u9762\u518D\u8BE6\u7EC6\u4ECB\u7ECD http \u914D\u7F6E\u9879\u76EE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80                          </span><span style="color:#676E95;">#\u76D1\u542C\u7AEF\u53E3;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name localhost              </span><span style="color:#676E95;">#\u5730\u5740</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        location / {                       </span><span style="color:#676E95;">#\u8BBF\u95EE\u9996\u9875\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">            root /xxx/xxx/index.html       </span><span style="color:#676E95;">#\u9ED8\u8BA4\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">            index index.html index.htm     </span><span style="color:#676E95;">#\u9ED8\u8BA4\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        error_page  </span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">504</span><span style="color:#A6ACCD;">   /50x.html    </span><span style="color:#676E95;">#\u5F53\u51FA\u73B0\u4EE5\u4E0A\u72B6\u6001\u7801\u65F6\u4ECE\u65B0\u5B9A\u4E49\u523050x.html</span></span>
<span class="line"><span style="color:#A6ACCD;">        location = /50x.html {             </span><span style="color:#676E95;">#\u5F53\u8BBF\u95EE50x.html\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">            root /xxx/xxx/html             </span><span style="color:#676E95;">#50x.html \u9875\u9762\u6240\u5728\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ... ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u4E00\u4E2A server \u53EF\u4EE5\u51FA\u73B0\u591A\u4E2A location \uFF0C\u6211\u4EEC\u5BF9\u4E0D\u540C\u7684\u8BBF\u95EE\u8DEF\u5F84\u8FDB\u884C\u4E0D\u540C\u60C5\u51B5\u7684\u914D\u7F6E\u3002</p><p>\u6211\u4EEC\u518D\u6765\u770B\u770B http \u7684\u914D\u7F6E\u8BE6\u60C5</p><div class="language-nginx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">http</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> sendfile  on</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;">#\u9AD8\u6548\u4F20\u8F93\u6587\u4EF6\u7684\u6A21\u5F0F \u4E00\u5B9A\u8981\u5F00\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout   </span><span style="color:#F78C6C;">65</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#\u5BA2\u6237\u7AEF\u670D\u52A1\u7AEF\u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">    log_format </span><span style="color:#89DDFF;"> main</span><span style="color:#A6ACCD;">   XXX        </span><span style="color:#676E95;">#\u5B9A\u4E49\u65E5\u5FD7\u683C\u5F0F \u4EE3\u53F7\u4E3Amain</span></span>
<span class="line"><span style="color:#A6ACCD;">    access_log  /usr/local/access.log </span><span style="color:#89DDFF;"> main</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;">#\u65E5\u5FD7\u4FDD\u5B58\u5730\u5740 \u683C\u5F0F\u4EE3\u7801 main</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,58),r=[e];function i(c,o,t,b,C,A){return a(),n("div",null,r)}const g=s(p,[["render",i]]);export{y as __pageData,g as default};