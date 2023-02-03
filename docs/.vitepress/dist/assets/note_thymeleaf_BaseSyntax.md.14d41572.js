import{_ as s,c as a,o as n,d as l}from"./app.d69d6d02.js";const d=JSON.parse('{"title":"\u57FA\u7840\u8BED\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6587\u672C\u6807\u7B7E th:text \u548C th:utext","slug":"\u6587\u672C\u6807\u7B7E-th-text-\u548C-th-utext","link":"#\u6587\u672C\u6807\u7B7E-th-text-\u548C-th-utext","children":[]},{"level":2,"title":"th:if","slug":"th-if","link":"#th-if","children":[]},{"level":2,"title":"th:each","slug":"th-each","link":"#th-each","children":[]},{"level":2,"title":"th:switch","slug":"th-switch","link":"#th-switch","children":[]}],"relativePath":"note/thymeleaf/BaseSyntax.md","lastUpdated":1668505724000}'),p={name:"note/thymeleaf/BaseSyntax.md"},t=l(`<h1 id="\u57FA\u7840\u8BED\u6CD5" tabindex="-1">\u57FA\u7840\u8BED\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u8BED\u6CD5" aria-hidden="true">#</a></h1><h2 id="\u6587\u672C\u6807\u7B7E-th-text-\u548C-th-utext" tabindex="-1">\u6587\u672C\u6807\u7B7E th:text \u548C th:utext <a class="header-anchor" href="#\u6587\u672C\u6807\u7B7E-th-text-\u548C-th-utext" aria-hidden="true">#</a></h2><p>\u4E8C\u8005\u90FD\u7528\u4E8E\u6587\u672C\u5185\u5BB9\u7684\u663E\u793A\u64CD\u4F5C\uFF0C\u8FDB\u884C\u6587\u672C\u66FF\u6362\uFF0C\u533A\u522B\u5728\u4E8E<strong>\u524D\u8005\u4E0D\u4F1A\u89E3\u6790html\uFF0C\u800C\u540E\u8005\u4F1A\u89E3\u6790html\u3002</strong></p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">requestMapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/th</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">th</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Model</span><span style="color:#A6ACCD;"> model</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> msg </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;h1&gt;Demo&lt;h1&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    model</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addAttribute</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">msg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> msg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/demo/th</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">th:text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text\u6807\u7B7E\uFF1A + \${msg}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!-- &lt;p&gt;text\u6807\u7B7E\uFF1A&lt;h1&gt;Demo&lt;/h1&gt;&lt;/p&gt;  --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">th:utext</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text\u6807\u7B7E\uFF1A + \${msg}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>th:text</code> \u8FDB\u884C\u6587\u672C\u66FF\u6362\uFF0C<code>&lt;h1&gt;</code>\u6807\u7B7E\u4E0D\u4F1A\u88AB\u89E3\u6790\u3002<code>th:utext</code> \u8FDB\u884C\u6587\u672C\u66FF\u6362\uFF0C<code>&lt;h1&gt;</code>\u6807\u7B7E\u4F1A\u88AB\u89E3\u6790\u3002</p><h2 id="th-if" tabindex="-1">th:if <a class="header-anchor" href="#th-if" aria-hidden="true">#</a></h2><p>\u6839\u636E\u6761\u4EF6\u7684\u5E03\u5C14\u503C\u5224\u65AD\u662F\u5426\u9700\u8981\u5C55\u793A\u6B64\u6807\u7B7E\u3002</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">th:if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\${isShow}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5C55\u793A</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="th-each" tabindex="-1">th:each <a class="header-anchor" href="#th-each" aria-hidden="true">#</a></h2><p>\u904D\u5386\uFF0C\u652F\u6301 Iterable\u3001Map\u3001\u6570\u7EC4\u7B49\u3002</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">th:each</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tag:\${user.getTags()}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">       </span><span style="color:#C792EA;">th:text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\${tag}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="th-switch" tabindex="-1">th:switch <a class="header-anchor" href="#th-switch" aria-hidden="true">#</a></h2><p>\u4E0E Java \u7684 switch case\u8BED\u53E5\u7C7B\u4F3C\u901A\u5E38\u4E0E <code>th:case</code> \u914D\u5408\u4F7F\u7528\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u6761\u4EF6\u5C55\u793A\u4E0D\u540C\u7684\u5185\u5BB9\u3002</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">th:switch</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\${user.getSex()}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">th:case</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;1&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u7537</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">th:case</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;2&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5973</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">th:case</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u9ED8\u8BA4</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,15),e=[t];function o(c,r,D,F,y,i){return n(),a("div",null,e)}const u=s(p,[["render",o]]);export{d as __pageData,u as default};