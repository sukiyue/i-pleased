import{_ as s,c as n,o as a,d as e}from"./app.d69d6d02.js";const u=JSON.parse('{"title":"\u9762\u5411\u5BF9\u8C61\u7684\u7A0B\u5E8F\u8BBE\u8BA1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BF9\u8C61\u7684\u5C5E\u6027\u7C7B\u578B","slug":"\u5BF9\u8C61\u7684\u5C5E\u6027\u7C7B\u578B","link":"#\u5BF9\u8C61\u7684\u5C5E\u6027\u7C7B\u578B","children":[{"level":3,"title":"\u6570\u636E\u5C5E\u6027","slug":"\u6570\u636E\u5C5E\u6027","link":"#\u6570\u636E\u5C5E\u6027","children":[]},{"level":3,"title":"\u8BBF\u95EE\u5668\u5C5E\u6027","slug":"\u8BBF\u95EE\u5668\u5C5E\u6027","link":"#\u8BBF\u95EE\u5668\u5C5E\u6027","children":[]}]},{"level":2,"title":"Object.defineProperty()","slug":"object-defineproperty","link":"#object-defineproperty","children":[]}],"relativePath":"note/javascript/ObjectOriented.md","lastUpdated":1669196045000}'),l={name:"note/javascript/ObjectOriented.md"},p=e(`<h1 id="\u9762\u5411\u5BF9\u8C61\u7684\u7A0B\u5E8F\u8BBE\u8BA1" tabindex="-1">\u9762\u5411\u5BF9\u8C61\u7684\u7A0B\u5E8F\u8BBE\u8BA1 <a class="header-anchor" href="#\u9762\u5411\u5BF9\u8C61\u7684\u7A0B\u5E8F\u8BBE\u8BA1" aria-hidden="true">#</a></h1><h2 id="\u5BF9\u8C61\u7684\u5C5E\u6027\u7C7B\u578B" tabindex="-1">\u5BF9\u8C61\u7684\u5C5E\u6027\u7C7B\u578B <a class="header-anchor" href="#\u5BF9\u8C61\u7684\u5C5E\u6027\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u6709\u4E24\u79CD\u5C5E\u6027\u7C7B\u578B\uFF1A\u6570\u636E\u5C5E\u6027\u548C\u8BBF\u95EE\u5668\u5C5E\u6027\u3002</p><h3 id="\u6570\u636E\u5C5E\u6027" tabindex="-1">\u6570\u636E\u5C5E\u6027 <a class="header-anchor" href="#\u6570\u636E\u5C5E\u6027" aria-hidden="true">#</a></h3><p>\u6570\u636E\u5C5E\u6027\u5305\u542B 4 \u4E2A\u884C\u4E3A\u7279\u6027\uFF1A</p><ul><li><p>[[Configurable]]\uFF1A\u8868\u793A\u662F\u5426\u53EF\u4EE5\u5220\u9664\u5C5E\u6027\uFF0C\u662F\u5426\u53EF\u4EE5\u4FEE\u6539\u5C5E\u6027\u7279\u6027\uFF0C\u662F\u5426\u53EF\u4EE5\u4FEE\u6539\u5199\u4E3A\u8BBF\u95EE\u5668\u5C5E\u6027\u3002\u76F4\u63A5\u5B9A\u4E49\u5BF9\u8C61\u5C5E\u6027\u65F6\u9ED8\u8BA4\u503C\u4E3A <code>true</code>\u3002</p></li><li><p>[[Enumerable]]\uFF1A\u8868\u793A\u662F\u5426\u53EF\u4EE5\u901A\u8FC7 <code>for...in</code> \u5FAA\u73AF\u8FD4\u56DE\u5C5E\u6027\u3002\u76F4\u63A5\u5B9A\u4E49\u5BF9\u8C61\u5C5E\u6027\u65F6\u9ED8\u8BA4\u503C\u4E3A <code>true</code>\u3002</p></li><li><p>[[Writable]]\uFF1A\u8868\u793A\u662F\u5426\u53EF\u4EE5\u4FEE\u6539\u5C5E\u6027\u7684\u503C\u3002\u76F4\u63A5\u5B9A\u4E49\u5BF9\u8C61\u5C5E\u6027\u65F6\u9ED8\u8BA4\u503C\u4E3A <code>true</code>\u3002</p></li><li><p>[[Value]]\uFF1A\u8868\u793A\u5C5E\u6027\u7684\u503C\u3002\u9ED8\u8BA4\u503C\u4E3A <code>undefined</code>\u3002</p></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u53EF\u4EE5\u901A\u8FC7 <code>Object.defineProperty()</code> \u65B9\u6CD5\u4FEE\u6539\u9ED8\u8BA4\u5C5E\u6027\u7684\u7279\u6027\u3002</p><p>\u8C03\u7528\u65B9\u6CD5\u65F6\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\u7279\u6027\u7684\u503C\uFF0C<code>configurable\u3001enumerbale\u3001writable</code> \u7279\u6027\u5C06\u5747\u9ED8\u8BA4\u4E3A false\u3002\u540C\u65F6\u4E5F\u53EF\u4EE5\u591A\u6B21\u8C03\u7528\u4FEE\u6539\u540C\u4E00\u4E2A\u5C5E\u6027\u7684\u7279\u6027\uFF0C\u4F46\u662F\u628A <code>configurable</code> \u7279\u6027\u8BBE\u7F6E\u4E3A false \u4E4B\u540E\u5C31\u4F1A\u6709\u9650\u5236\uFF0C\u540E\u7EED\u66F4\u6539\u4E3A ture \u4F1A\u629B\u51FA\u9519\u8BEF\u3002</p></div><h3 id="\u8BBF\u95EE\u5668\u5C5E\u6027" tabindex="-1">\u8BBF\u95EE\u5668\u5C5E\u6027 <a class="header-anchor" href="#\u8BBF\u95EE\u5668\u5C5E\u6027" aria-hidden="true">#</a></h3><ul><li><p>[[Configurable]]\uFF1A\u8868\u793A\u662F\u5426\u53EF\u4EE5\u5220\u9664\u5C5E\u6027\uFF0C\u662F\u5426\u53EF\u4EE5\u4FEE\u6539\u5C5E\u6027\u7279\u6027\uFF0C\u662F\u5426\u53EF\u4EE5\u4FEE\u6539\u4E3A\u6570\u636E\u5C5E\u6027\u3002\u76F4\u63A5\u5B9A\u4E49\u5BF9\u8C61\u5C5E\u6027\u65F6\u9ED8\u8BA4\u503C\u4E3A <code>true</code>\u3002</p></li><li><p>[[Enumerable]]\uFF1A\u8868\u793A\u662F\u5426\u53EF\u4EE5\u901A\u8FC7 <code>for...in</code> \u5FAA\u73AF\u8FD4\u56DE\u5C5E\u6027\u3002\u76F4\u63A5\u5B9A\u4E49\u5BF9\u8C61\u5C5E\u6027\u65F6\u9ED8\u8BA4\u503C\u4E3A <code>true</code>\u3002</p></li><li><p>[[Get]]\uFF1A\u5728\u8BFB\u53D6\u5C5E\u6027\u65F6\u8C03\u7528\u7684\u51FD\u6570\u3002\u9ED8\u8BA4\u503C\u4E3A <code>undefined</code>\u3002</p></li><li><p>[[Set]]\uFF1A\u5728\u5199\u5165\u5C5E\u6027\u65F6\u8C03\u7528\u7684\u51FD\u6570\u3002\u9ED8\u8BA4\u503C\u4E3A <code>undefined</code>\u3002</p></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u8BBF\u95EE\u5668\u5C5E\u6027\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49\uFF0C\u5FC5\u987B\u4F7F\u7528 <code>Object.defineProperty()</code> \u65B9\u6CD5\u6765\u5B9A\u4E49\u3002</p></div><h2 id="object-defineproperty" tabindex="-1">Object.defineProperty() <a class="header-anchor" href="#object-defineproperty" aria-hidden="true">#</a></h2><p><code>Object.defineProperty()</code> \u65B9\u6CD5\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49\u4E00\u4E2A\u5BF9\u8C61\u7684\u65B0\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u4FEE\u6539\u9ED8\u8BA4\u5C5E\u6027\u7684\u7279\u6027\uFF0C\u5E76\u8FD4\u56DE\u8FD9\u4E2A\u5BF9\u8C61\u3002</p><p><strong>\u8BED\u6CD5</strong></p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperty</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> prop</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> descriptor)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u65B9\u6CD5\u63A5\u6536\u4E09\u4E2A\u53C2\u6570\uFF1A</p><ul><li>obj\uFF1A\u9700\u8981\u5B9A\u4E49\u5C5E\u6027\u7684\u5BF9\u8C61</li><li>prop\uFF1A\u9700\u8981\u88AB\u5B9A\u4E49\u6216\u4FEE\u6539\u7684\u5C5E\u6027\u540D</li><li>descriptor\uFF1A\u9700\u8981\u88AB\u5B9A\u4E49\u6216\u4FEE\u6539\u7684\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26\uFF0C\u5305\u542B configurable\u3001enumerbale\u3001writable \u548C value \u56DB\u4E2A\u7279\u6027\u3002</li></ul><p><strong>\u7528\u6CD5</strong></p><p>\u5B9A\u4E49\u5BF9\u8C61\u5C5E\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49\u5BF9\u8C61\u5C5E\u6027\u6216\u8005\u7528 <code>Object.defineProperty()</code> \u65B9\u6CD5\u5B9A\u4E49\u3002</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u5B9A\u4E49\u4E00\u4E2A\u7A7A\u5BF9\u8C61 user</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u76F4\u63A5\u5B9A\u4E49\u5C5E\u6027 name</span></span>
<span class="line"><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ws</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(user) </span><span style="color:#676E95;">// {name: &#39;ws&#39;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(user) </span><span style="color:#676E95;">// {name: &#39;wss&#39;}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5F53\u76F4\u63A5\u5B9A\u4E49\u5C5E\u6027\u65F6\uFF0C\u5C5E\u6027\u7684 <code>configurable\u3001enumerable\u3001writable</code> \u7279\u6027\u5747\u9ED8\u8BA4\u4E3A true\uFF0C\u6B64\u65F6\u76F4\u63A5\u4FEE\u6539\u5C5E\u6027 name \u7684\u503C\u662F\u53EF\u4EE5\u6210\u529F\u7684\u3002</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u5B9A\u4E49\u4E00\u4E2A\u7A7A\u5BF9\u8C61 user</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u7528Object.defineProperty() \u5B9A\u4E49\u5C5E\u6027 name</span></span>
<span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperty</span><span style="color:#A6ACCD;">(user</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ws</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(user) </span><span style="color:#676E95;">// {name: &#39;ws&#39;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(user) </span><span style="color:#676E95;">// {name: &#39;ws&#39;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">delete</span><span style="color:#A6ACCD;"> user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#676E95;">// \u6267\u884C\u5931\u8D25</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5F53\u7528 Object.defineProperty() \u5B9A\u4E49\u5C5E\u6027\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u7279\u522B\u6307\u5B9A\uFF0C\u5C5E\u6027\u7684 <code>configurable\u3001enumerable\u3001writable</code> \u7279\u6027\u5747\u9ED8\u8BA4\u4E3A <code>false</code>\uFF0C\u6B64\u65F6\u5C5E\u6027\u7684\u503C\u4E0D\u5141\u8BB8\u4FEE\u6539\uFF0C\u5219\u5E76\u4E0D\u4F1A\u4FEE\u6539\u6210\u529F\u3002\u540C\u65F6 <code>delete user.name</code> \u4E5F\u4F1A\u6267\u884C\u5931\u8D25\u3002</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperty</span><span style="color:#A6ACCD;">(user</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">configurable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ws</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(user) </span><span style="color:#676E95;">// {name: &#39;wss&#39;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">delete</span><span style="color:#A6ACCD;"> user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#676E95;">// \u6267\u884C\u6210\u529F</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5982\u679C\u5728\u5B9A\u4E49\u65F6\u8BBE\u7F6E\u4E86 configurable \u7279\u6027\u4E3A true\u65F6\uFF0C\u6B64\u65F6\u76F4\u63A5\u4FEE\u6539 name \u5C5E\u6027\u503C\u662F\u53EF\u884C\u7684\u3002\u540C\u65F6 <code>delete user.name</code> \u4E5F\u53EF\u4EE5\u6267\u884C\u6210\u529F\u3002</p><p>\u4F46\u5F53 configurable \u4E3A <code>false</code> \u65F6\uFF0C\u518D\u6B21\u8C03\u7528 Object.defineProperty() \u65B9\u6CD5\u4FEE\u6539\u7279\u6027 configurable \u4E3A <code>true</code> \u65F6\uFF0C\u5C31\u4F1A\u62A5\u9519\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u540C\u7406\uFF0C\u76F4\u63A5\u5B9A\u4E49\u5BF9\u8C61\u5C5E\u6027\u65F6 enumerable \u7279\u6027\u4E5F\u9ED8\u8BA4\u4E3A true\uFF0C\u4F46\u7528 Object.defineProperty() \u5B9A\u4E49\u5C5E\u6027\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u7279\u522B\u6307\u5B9A enumerable \u7279\u6027\u9ED8\u8BA4\u4E3A false\uFF0C\u6B64\u65F6 for...in \u6216\u8005\u7528 Object.keys() \u904D\u5386\u5C5E\u6027\u90FD\u4E0D\u4F1A\u904D\u5386\u6B64\u65F6\u5B9A\u4E49\u7684\u5C5E\u6027\u540D\uFF0C\u552F\u6709 enumerable \u7279\u6027\u4E3A true \u65F6\uFF0C\u624D\u4F1A\u904D\u5386\u3002</p></div>`,26),o=[p];function r(c,t,i,D,y,d){return a(),n("div",null,o)}const C=s(l,[["render",r]]);export{u as __pageData,C as default};