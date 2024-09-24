import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as n}from"./app-D1IVsyhP.js";const l="/course/5208482922.jpg",h="/course/3282078754.jpg",e={},t=n(`<h2 id="基础算法" tabindex="-1"><a class="header-anchor" href="#基础算法"><span>基础算法</span></a></h2><h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度"><span>时间复杂度</span></a></h3><h4 id="为什么需要计算时间复杂度" tabindex="-1"><a class="header-anchor" href="#为什么需要计算时间复杂度"><span>为什么需要计算时间复杂度</span></a></h4><p>我们需要预估程序的大概运行时间，当数据量很大的时候，初学者很容易写出1年都运行不完的代码。</p><h4 id="如何计算-此处省略诸多细节" tabindex="-1"><a class="header-anchor" href="#如何计算-此处省略诸多细节"><span>如何计算（此处省略诸多细节）</span></a></h4><p>简单来说主要看循环或者递归</p><p>时间复杂度O(1)</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x, y;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scanf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%d%d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> &amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">x， </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> z </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> y;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(z </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;123</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度O(n)</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ans </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ans </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度O(n^2)</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ans </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ans </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> j </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; j </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; j</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ans </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多内容可以参考<a href="https://oi.wiki/basic/complexity/" target="_blank" rel="noopener noreferrer">OI WiKi</a></p><h4 id="常数优化" tabindex="-1"><a class="header-anchor" href="#常数优化"><span>常数优化</span></a></h4><p>除了时间复杂度，我们还要进行更细致的优化，比如<code>a*512</code>可以改成<code>a &lt;&lt; 9</code>,后者会更快。</p><h3 id="二分算法" tabindex="-1"><a class="header-anchor" href="#二分算法"><span>二分算法</span></a></h3><p><a href="https://www.hello-algo.com/chapter_searching/binary_search/" target="_blank" rel="noopener noreferrer">先看别人的</a></p><h2 id="数据结构简介" tabindex="-1"><a class="header-anchor" href="#数据结构简介"><span>数据结构简介</span></a></h2><h3 id="链表" tabindex="-1"><a class="header-anchor" href="#链表"><span>链表</span></a></h3><p>链表是一种用于存储数据的数据结构，通过如链条一般的指针来连接元素。它的特点是插入与删除数据十分方便，但寻找与读取数据的表现欠佳。</p><p><img src="`+l+'" alt="img" loading="lazy"> 如果想在数组中插入一个数，需要把后面的数都右移一位，时间复杂度<code>O(n)</code> 但链表中的元素只需要更改一下next指针，时间复杂度<code>O(1)</code></p><h3 id="栈" tabindex="-1"><a class="header-anchor" href="#栈"><span>栈</span></a></h3><p>栈的修改与访问是按照后进先出的原则进行的，入栈会把一个数据放进栈，出栈会把最后入栈的数据取出来</p><p>程序运行时也有栈空间，比如函数a中调用了函数b,函数b中调用了函数c,我们只能先从函数c中返回，才能继续执行函数b 如果超出栈大小，就会栈溢出</p><h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列"><span>队列</span></a></h3><p>队列是一种具有「先进入队列的元素一定先出队列」性质的表。由于该性质，队列通常也被称为先进先出（first in first out）表，简称 FIFO 表。</p><h4 id="循环队列" tabindex="-1"><a class="header-anchor" href="#循环队列"><span>循环队列</span></a></h4><p>使用数组模拟队列会导致一个问题：随着时间的推移，整个队列会向数组的尾部移动，一旦到达数组的最末端，即使数组的前端还有空闲位置，再进行入队操作也会导致溢出（这种数组里实际有空闲位置而发生了上溢的现象被称为「假溢出」）。</p><p>解决假溢出的办法是采用循环的方式来组织存放队列元素的数组，即将数组下标为 0 的位置看做是最后一个位置的后继。（数组下标为 x 的元素，它的后继为 (x + 1) % SIZE）。这样就形成了循环队列。</p><p>循环队列常用于充当软/硬件的缓冲区，比如数字ic面试时，面试官经常要求应聘者当场手写fifo。</p><h3 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树"><span>二叉树</span></a></h3><figure><img src="'+h+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="堆" tabindex="-1"><a class="header-anchor" href="#堆"><span>堆</span></a></h3><p>堆是一棵树，其每个节点都有一个键值，且每个节点的键值都大于等于/小于等于其父亲的键值。</p><p>每个节点的键值都大于等于其父亲键值的堆叫做小根堆，否则叫做大根堆。</p><h2 id="部分语言特性介绍" tabindex="-1"><a class="header-anchor" href="#部分语言特性介绍"><span>部分语言特性介绍</span></a></h2><h3 id="类与对象" tabindex="-1"><a class="header-anchor" href="#类与对象"><span>类与对象</span></a></h3><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h3><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态"><span>多态</span></a></h3><h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装"><span>封装</span></a></h3><h3 id="模板" tabindex="-1"><a class="header-anchor" href="#模板"><span>模板</span></a></h3><h3 id="重载" tabindex="-1"><a class="header-anchor" href="#重载"><span>重载</span></a></h3><h3 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间"><span>命名空间</span></a></h3>',43),p=[t];function k(r,d){return a(),s("div",null,p)}const g=i(e,[["render",k],["__file","5.html.vue"]]),B=JSON.parse('{"path":"/software/Lab1/5.html","title":"编程进阶","lang":"zh-CN","frontmatter":{"title":"编程进阶","icon":"lightbulb","dir":{"link":true}},"headers":[{"level":2,"title":"基础算法","slug":"基础算法","link":"#基础算法","children":[{"level":3,"title":"时间复杂度","slug":"时间复杂度","link":"#时间复杂度","children":[]},{"level":3,"title":"二分算法","slug":"二分算法","link":"#二分算法","children":[]}]},{"level":2,"title":"数据结构简介","slug":"数据结构简介","link":"#数据结构简介","children":[{"level":3,"title":"链表","slug":"链表","link":"#链表","children":[]},{"level":3,"title":"栈","slug":"栈","link":"#栈","children":[]},{"level":3,"title":"队列","slug":"队列","link":"#队列","children":[]},{"level":3,"title":"二叉树","slug":"二叉树","link":"#二叉树","children":[]},{"level":3,"title":"堆","slug":"堆","link":"#堆","children":[]}]},{"level":2,"title":"部分语言特性介绍","slug":"部分语言特性介绍","link":"#部分语言特性介绍","children":[{"level":3,"title":"类与对象","slug":"类与对象","link":"#类与对象","children":[]},{"level":3,"title":"继承","slug":"继承","link":"#继承","children":[]},{"level":3,"title":"多态","slug":"多态","link":"#多态","children":[]},{"level":3,"title":"封装","slug":"封装","link":"#封装","children":[]},{"level":3,"title":"模板","slug":"模板","link":"#模板","children":[]},{"level":3,"title":"重载","slug":"重载","link":"#重载","children":[]},{"level":3,"title":"命名空间","slug":"命名空间","link":"#命名空间","children":[]}]}],"git":{"createdTime":1727154047000,"updatedTime":1727154047000,"contributors":[{"name":"cyh","email":"1909625265@qq.com","commits":1}]},"readingTime":{"minutes":2.85,"words":855},"filePathRelative":"software/Lab1/5.md","localizedDate":"2024年9月24日"}');export{g as comp,B as data};
