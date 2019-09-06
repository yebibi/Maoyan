<template>
  <div>
    <v-header>
          <a class="navbar-back" href="javascript:history.back();"></a>
      {{this.$route.params.name}}
    </v-header>
    <!-- <div class="movie-page"></div>
      <section class="movie-header">
        <div class="movie">
          <div class="movie-background" style="background-image:url(http://p0.meituan.net/177.249/moviemachine/7b9b0725ab5feae642e1fbba9fbb90fe3702078.jpg);" data-reactid=".2bpva5tjsd8.4.0.0.0"></div>
          <div class="movie-filter"></div>
          <div class="movie-container clearfix">
            <div class="movie-cover movie-with-video">
              <a href="/movie/1189879/preview?_v_=yes" class="link" data-event="poster" data-reactid=".2bpva5tjsd8.4.0.0.2.0.0"><img class="img noneBg" src="//p1.meituan.net/moviemachine/7b9b0725ab5feae642e1fbba9fbb90fe3702078.jpg@177w_249h.webp" data-yao="2" data-reactid=".2bpva5tjsd8.4.0.0.2.0.0.1"></a>
            </div>
            <div class="movie-content">
              <div class="movie-name text-ellipsis">
                <span></span>
                <span>狮子王</span>
              </div>
              <div class="movie-score">
                <div class="released-score">
                  <div class="rating">
                    <img class="img noneBg" src="//s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png" data-reactid=".2bpva5tjsd8.4.0.0.2.1.2.0.0.0:$0">
                    <img class="img noneBg" src="//s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png" data-reactid=".2bpva5tjsd8.4.0.0.2.1.2.0.0.0:$0">
                    <img class="img noneBg" src="//s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png" data-reactid=".2bpva5tjsd8.4.0.0.2.1.2.0.0.0:$0">
                    <img class="img noneBg" src="//s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png" data-reactid=".2bpva5tjsd8.4.0.0.2.1.2.0.0.0:$0">
                    <img class="img noneBg" src="//s0.meituan.net/bs/?f=myfe/canary:/img/star-half-new.png" data-reactid=".2bpva5tjsd8.4.0.0.2.1.2.0.0.0:$4">
                  </div>
                  <div class="score-num">
                    <span>(</span>
                    <span>10.6万</span>
                    <span>人评分)</span>
                  </div>
                </div>
              </div>
              <div class="movie-category">
                <span class="movie-cat">剧情,动画,冒险</span>
                <div class="movie-tag">
                  <div class="union-tag">
                    <span class="tag-d">3D</span>
                    <span class="tag-imax">IMAX</span>
                  </div>
                </div>
              </div>
              <div class="movie-content-row">
                <span>美国</span>
                <span>/</span>
                <span>
                  <span>118</span><span>分钟</span>
                </span>
                <span></span>
              </div>
              <div class="movie-content-row">
                2019-07-12大陆上映
              </div>
            </div>
            <div class="movie-ugc clearfix hide"></div>
            <div class="flaunt-wrap hide"></div>
          </div>
        </div>
      </section>
      <section class=" section-seperate section-expander ${$this.props.browser.name === 'dianping' ? 'dianping' : ''}">
        <a href="/cinema/movie/1189879?_v_=yes" class="link btn btn-block btn-pay"><span>特惠购票</span></a>
        <div class="text-expander text-expander-disable-false text-expander-expand-false">
          <div class="text-expander-content">
            <p>小狮子王辛巴（唐纳德·格洛弗 配音）在众多热情的朋友的陪伴下，不但经历了生命中最光荣的时刻，也遭遇了最艰难的挑战，最后终于成为了森林之王，也在周而复始生生不息的自然中体会出生命的真义。非洲大草原上一轮红日冉冉升起，为高大的乞力马扎罗山披上层金色的光纱，所有的动物涌向了同一个地方——荣耀石，兴奋地等待着一个重大消息的宣布：它们的国王木法沙将迎来自己的新生儿。这个新生儿就是小狮子辛巴，它是木法沙的法定接班人、荣耀石未来的国王。</p>
          </div>
          <div class="text-expander-button">
            <i class="icon icon-chevron-down"></i>
          </div>
        </div>
      </section>
      <section class="section-seperate section-movie-celebrities">
        <ul class="movie-celebrities">
          <li data-reactid=".2bpva5tjsd8.4.3.0.$0"><a href="/celebrity/28231?_v_=yes" class="link" data-event="celebrities" data-reactid=".2bpva5tjsd8.4.3.0.$0.0"><img class="img noneBg" src="//p1.meituan.net/moviemachine/a36a95ccb733e324163f031538f41a32162940.jpg@130w_180h.webp" data-reactid=".2bpva5tjsd8.4.3.0.$0.0.1:0"><span data-reactid=".2bpva5tjsd8.4.3.0.$0.0.1:1">乔恩·费儒</span><span class="movie-celebrities-roles" data-reactid=".2bpva5tjsd8.4.3.0.$0.0.1:2">导演</span></a></li>
        </ul>
        <a href="/movie/1189879/credits?_v_=yes" class="link link-more clearfix">
          <h4>全体演职人员</h4>
          <i class="icon  icon-chevron-right"></i>
        </a>
      </section>
      <section class="section-media section-seperate">
        <h3>媒体库</h3>
        <ul class="movie-stages view-scroll-x-container">
          <li class="stage-img-container video">
            <a href="movie/1189879/preview?_v_=yes" class="link">
            <img class="img noneBg" src="//p1.meituan.net/movie/a66031be71b0238207add0b903bb106326240.jpg@250w_140h_1e_1c.webp">
            </a>
          </li>
        </ul>
        <div class="link-group">
          <a href="/movie/1189879/photos?_v_=yes" class="link link-more">
            <h4>
              <span>视频</span>
              <i class="icon  icon-chevron-right"></i>
              <span class="link-num">35</span>
            </h4>
          </a>
          <a href="" class="link link-more">
            <h4>
              <span>剧照</span>
              <i class="icon  icon-chevron-right"></i>
              <span class="link-num">104</span>
            </h4>
          </a>
        </div>
      </section>
      <section class="storebill">
        <a href="/store?_v_=yes&amp;entry=moviepage" class="link link-more">
          <h4>
            <span >正版周边</span>
            <i class="icon  icon-chevron-right"></i>
            <span class="link-num">全部</span>
          </h4>
        </a>
        <ul class="deal-stages">
          <li>
            <a href="/store/detail/100236420?_v_=yes&amp;entry=moviepage" class="link clearfix">
            <img class="img noneBg" src="//p0.meituan.net/movie/6370d6b8604cf763dc2f90e6b7351fee186227.jpg.webp">
            </a>
          </li>
        </ul>
      </section>
      <section class="panel movie-news" style="border-width: 0.5px;">
        <div class="panel-title panel-title-unclosed" style="border-width:0px;">
          <h2 style="display:inline-block;">资讯</h2>
        </div>
        <div class="panel-content">
          <a href="/information/66534?_v_=yes" class="link clearfix">
          <img class="img noneBg" src="//p1.meituan.net/movie/774dcebeee95f996280619791b4b0b9758539.jpg@200w_150h_1e_1c.webp" >
          <i class="icon icon-chevron-right" ></i>
          <div class="news-wrapper " >
            <div class="news-content" >狮子王动画版豆瓣9分经典，为什么真狮版却遭遇口碑危机？</div>
          </div>
          </a>
        </div>
      </section>
      <section class="section-seperate section-movie-comment">
        <h3 class="clearfix">
          <span>讨论</span>
        </h3>
          
        <div class="title-text-left">精选</div>
        <ul class="list-view list-view-styled">
          <li class="list-view-item ">
            <div class="comment">
              <div class="comment-left">
                <img class="img avatar-img" src="//thirdwx.qlogo.cn/mmopen/1PdyYyCw1HUYWlpkATCPh4nzjibSoR6NYKodf989ggzNXDU4FpXvib6MZb2JLGfBl89TGZh0mNO16B52PqM9exAJdttT9ydwaY/132">
              </div>
              <div class="comment-right">
                <header>
                  <div class="mid-wrapper">
                    <em class="nick ellipsis" >Leonardo Simba</em>
                    <div class="nick-level nick-level5"></div>
                    <span class="tags"></span>
                  </div>
                  <div class="comment-score">给这部作品打了10分</div>
                </header>
                <section>
                  <a href="/movie/1189879/replies/1045919155?_v_=yes" class="link">
                  <p class="content">刚进电影院音乐就震撼到我了，从开始的兴奋到中间木法沙被害死而感到难受，又到辛巴重新找回自己，最后重返荣耀大地夺回王位而感到高兴，特别是最后那个音乐响起的时候我瞬间感动哭了，这是唯一一部能让我流下眼泪的电影，电影从开始到结束感情不断变化，既体会到开心也体会到悲伤。我对这部电影感触很深，这也是“唯一一部能与我的心灵相互共鸣的电影！”，已经不能用语言来形容了，太感动了，小时候第一部电影就是这个，从那时便爱上这部电影直到现在，这部电影在我心里的位置永远不会改变。感谢你《狮子王》遇到你真好。
                    “永远记住，你是谁。”
                    “你必须要在生命轮回中找到属于自己的位置。”
                    “哈库那，玛塔塔，没有烦恼，无忧无虑。”
                  </p>
                  </a>
                </section>
                <footer>
                  <time class="timeago" title="1562988840000">2天前</time>
                  <div class="pull-right">
                    <a href="" class="link comment-like">
                      <i class="icon icon-approve"></i>
                      <span> 4420</span>
                    </a>
                    <a href="http://m.maoyan.com/movie/1189879/replies/1045919155?_v_=yes" class="link comment-reply">
                      <i class="icon icon-comment"></i>
                      <span>332</span>
                    </a>
                  </div>
                </footer>
              </div>
            </div>
          </li>
        </ul>
        <a href="/movie/1189879/comments?_v_=yes" class="link link-more comments-link">
        <h4 data-reactid=".yp5yef1cfk.4.a.3.1">
          <span data-reactid=".yp5yef1cfk.4.a.3.1.0">查看全部</span>
          <span data-reactid=".yp5yef1cfk.4.a.3.1.1">35019</span>
          <span data-reactid=".yp5yef1cfk.4.a.3.1.2">条讨论 &gt;</span>
        </h4>
       </a>
      </section>
      <section class="section-seperate movie-relatedAttribute" style="display:blcok;">
        <ul>
          <li class="attrLi parentguidances">
            <a href="/movie/1189879/extras/parentguidances?_v_=yes" class="link">
            <div class="layout-grail-middle content ">
              <h4>家长引导</h4>
              <p>本片在韩国的评级为【全部】，适合任何年龄观看。</p>
            </div>
            <div class="layout-grail-left extra-icon">
              <img class="img" src="//p1.meituan.net/mmdb/250a17bc199c0b942073bec5429d2f422175.png.webp" >
            </div>
            <i class="icon color-lightgray icon-chevron-right layout-grail-right"></i>
          </a>
        </li>
        </ul>
      </section>
    <footer class="footer"> -->
      <!-- <div class="footer-misc">
        <div class="copyright">
          <span>
            <span data-reactid=".yp5yef1cfk.5.0.0.0.0">© 猫眼电影 客服电话: </span>
            <a href="tel:10105335" data-reactid=".yp5yef1cfk.5.0.0.0.1">1010-5335</a>
          </span>
        </div>
        <p class="icp">
          <a href="http://www.miibeian.gov.cn" class="link" target="_blank">
          <span data-reactid=".yp5yef1cfk.5.0.1.0.0">京ICP备16022489号-1</span>
          </a>
          <span data-reactid=".yp5yef1cfk.5.0.1.1">&nbsp;</span>
          <a href="http://www.beian.gov.cn" class="link" target="_blank">
          <span data-reactid=".yp5yef1cfk.5.0.1.2.0">京公网安备11010502030881号</span>
          </a>
          </p>
          <p class="sankuai" >
            <a href="javascript:void(0)" class="link">
            <span data-reactid=".yp5yef1cfk.5.0.2.0.0">北京猫眼文化传媒有限公司</span>
           </a>
          </p>
        </div>
      </footer> -->
      <div class="movie-page">
        <section class="movie-header" >
          <div class="movie" >
            <div class="movie-background" style="background-image:url(http://p0.meituan.net/177.249/movie/005955214d5b3e50c910d7a511b0cb571445301.jpg);" data-reactid=".14yv1n21hxi.4.0.0.0"></div><div class="movie-filter" data-reactid=".14yv1n21hxi.4.0.0.1"></div><div class="movie-container clearfix" data-reactid=".14yv1n21hxi.4.0.0.2"><div class="movie-cover movie-with-video" data-bid="b_aN5Ak" data-lab="{movie_id:1211270}" data-view-bid="b_wet6w" data-view-lab="{movie_id:1211270}" data-reactid=".14yv1n21hxi.4.0.0.2.0" data-view-sended="1"><a href="/movie/1211270/preview?_v_=yes" class="link" data-event="poster" data-reactid=".14yv1n21hxi.4.0.0.2.0.0"><img class="img noneBg" src="//p1.meituan.net/movie/005955214d5b3e50c910d7a511b0cb571445301.jpg@177w_249h.webp" data-yao="2" data-reactid=".14yv1n21hxi.4.0.0.2.0.0.1"></a></div><div class="movie-content" data-reactid=".14yv1n21hxi.4.0.0.2.1">
              <div class="movie-name text-ellipsis">
                <span> </span>
                <span>{{movieinfo.nm}}</span>
              </div>
            <div class="movie-ename text-ellipsis">{{movieinfo.enm}}</div>
            <div class="movie-score" >
              <div class="released-score">
                <div class="rating">
                  <img class="img noneBg" src="//s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png">
                  <img class="img noneBg" src="//s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png">
                  <img class="img noneBg" src="//s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png">
                  <img class="img noneBg" src="//s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png">
                  <img class="img noneBg" src="//s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png">
                  <span>{{movieinfo.sc}}</span>
                </div>
                <div class="score-num">
                  <span>(</span>
                  <span>{{movieinfo.snum}}</span>
                  <span>人评分)</span>
                  </div>
                </div>
              </div>
                  <div class="movie-category" >
                    <span class="movie-cat" >{{movieinfo.cat}}</span>
                  <div class="movie-tag">
                  <div class="union-tag">
                    <span class="tag-d">3D</span>
                    <span class="tag-imax">IMAX</span>
                  </div>
                </div>
              </div>
            <div class="movie-content-row">
              <span>{{movieinfo.src}}</span>
              <span> / </span>
              <span>
              <span>{{movieinfo.episodeDur}}</span>
              <span> 分钟</span>
              </span>
              <span></span>
            </div>
            <div class="movie-content-row" >{{movieinfo.pubDesc}}</div>
            </div>
            <div class="movie-ugc clearfix hide">
              <a href="imeituan://www.meituan.com/movie_review?movieId=1211270" class="link btn btn-score">
              <div class="overlay"></div>
              <i></i>
              <span>评分</span>
              </a>
              <a href="javascript:void(0)" class="link btn btn-wish">
                <div class="overlay" ></div>
              <i></i>
              <span>想看</span>
              </a>
            </div>
            <div class="flaunt-wrap hide" >
              <p class="flaunt-text" >这是我记录的第0部影视作品</p>
            <a href="imeituan://www.meituan.com/movie/wannasee_share?movieId=1211270" class="link btn btn-block btn-flaunt">
          <span >炫耀一下</span>
            </a>
          </div>
          </div>
        </div>
        </section>
        <section class=" section-seperate section-expander ${$this.props.browser.name === 'dianping' ? 'dianping' : ''}" >
          <a href="/cinema/movie/1211270?_v_=yes" class="link btn btn-block btn-pay" >
          <span>特惠购票</span>
          </a>
          <div  class="text-expander text-expander-disable-false text-expander-expand-false" >
            <div class="text-expander-content" >
              <p >{{movieinfo.dra}}</p>
              </div>
            <div class="text-expander-button">
              <i class="icon icon-chevron-down" >
              </i>
              </div>
            </div>
          </section>
          <section class="section-seperate section-tips" >
            <h3 >观影小贴士</h3>
          <div class="tip">
            <img src="//p0.meituan.net/mmdb/8f52014d6b15bf93415d10cdcd16cbf52917.png" >
            <span >有3个彩蛋，分别在片尾字幕前、中、后出现</span>
            </div>
          </section> 
          <section class="section-seperate section-movie-celebrities">
            <ul class="movie-celebrities">
              <li >
                <a href="/celebrity/1029021?_v_=yes" class="link">
                  <img class="img noneBg" src="//p1.meituan.net/movie/c047a7f5444ba9bef44044da352cb3ba114816.jpg@130w_180h.webp">
                  <span>饺子</span>
                  <span class="movie-celebrities-roles">导演</span>
                </a>
              </li>
            </ul>
             <a href="/movie/1211270/credits?_v_=yes" class="link link-more clearfix">
                <h4 data-reactid=".1rorf27dvq4.4.3.1.1:0">全体演职人员</h4>
               <i class="icon  icon-chevron-right">
                </i>
            </a>
            </section>
          <section class="storebill">
            <a href="/store?_v_=yes&amp;entry=moviepage" class="link link-more"  >
            <h4 data-reactid=".14yv1n21hxi.4.6.0.1">
              <span data-reactid=".14yv1n21hxi.4.6.0.1.0">正版周边</span>
              <i class="icon  icon-chevron-right" ></i>
              <span class="link-num" >全部</span>
            </h4>
            </a>
            <a href="/store/detail/100253627?_v_=yes" class="link clearfix" >
            <img class="img noneBg" src="//p1.meituan.net/movie/0e10cf3a692ac0ad753f58edaac98381151226.jpg.webp" >
            <div class="good-info" >
              <div >
                <h3 >经典故事哪吒闹海</h3>
              <div >
                <strong >
                  <span >36</span>
                  <i>元</i>
                  </strong>
                  <del>
                    <span >零售价</span>
                    <span >45</span>
                    <span >元</span>
                    </del>
                  </div>
                </div>
              </div>
            </a>
          </section>
          <section class="panel movie-news" style="border-width: 0.5px;" >
            <div class="panel-title panel-title-unclosed" style="border-width:0px;">
              <h2 style="display:inline-block;">资讯</h2>
            </div>
            <div class="panel-content" >
              <a href="/information/68030?_v_=yes" class="link clearfix" >
              <img class="img noneBg" src="//p0.meituan.net/movie/a2ab4543b26d023da7f7180ab97fa5283393103.jpg@200w_150h_1e_1c.webp">
              <i class="icon icon-chevron-right" ></i>
              <div class="news-wrapper ">
                <div class="news-content" >哪吒创国产票房新高，大圣归来发博祝贺，庆祝票房成功交接</div>
              </div>
              </a>
              </div>
            </section>     
          <section class="section-seperate section-movie-comment" >
            <h3 class="clearfix" >
              <span>讨论</span>
            </h3>
            <div class="title-text-left" >精选</div>
            <ul class="list-view list-view-styled" >
              <li class="list-view-item ">
                <div class="comment">
                  <div class="comment-left">
                    <img class="img avatar-img" src="//img.meituan.net/avatar/97778b98dacb4c2c29d95c3199fd3255292114.jpg" data-reactid=".14yv1n21hxi.4.a.2.2:$0.0.0.0"></div><div class="comment-right" data-reactid=".14yv1n21hxi.4.a.2.2:$0.0.1"><header data-reactid=".14yv1n21hxi.4.a.2.2:$0.0.1.0"><div class="mid-wrapper" data-reactid=".14yv1n21hxi.4.a.2.2:$0.0.1.0.0">
                      <em class="nick ellipsis" >机智的刘小鹿</em>
                      <div class="nick-level nick-level4" ></div>
                      <span class="tags"></span>
                      </div>
                    <div class="comment-score">给这部作品打了10分</div>
                    </header>
                    <section >
                      <a href="/movie/1211270/replies/1072755513?_v_=yes" class="link">
                      <p class="content" >哪吒的故事是我们90后的青春，无论是小时候看过的哪个版本，都让我们感受到那种母子情深，还有他那如火般的正义感，这个版本的哪吒补全了以往版本很多缺少的东西，比如描写了李靖对儿子那如山般的爱，还有哪吒更强烈的叛逆，更加真实的表现了一个孩子从小被排斥对待的情感反应，故事的最后更有热血漫的桥段展现，“若命运不公，那就和他斗到底”，致敬所有不服命运而奋斗着的人们，可以看的出作者的野心之大，想构筑出一篇新的故事，不同于以往的哪吒，当真国漫之光啊！</p>
                      </a>
                    </section>
                    <footer >
                      <time class="timeago" title="1564105800000" >4天前</time>
                      <div class="pull-right">
                        <a href="javascript:void(0)" class="link comment-like" >
                          <i class="icon icon-approve" ></i>
                          <span >21683</span>
                        </a>
                        <a href="/movie/1211270/replies/1072755513?_v_=yes" class="link comment-reply">
                        <i class="icon icon-comment" ></i>
                        <span >2928</span>
                        </a>
                        </div>
                      </footer>
                    </div>
                  </div>
                </li>
              <li class="list-view-item ">
                <div class="comment" data-reactid=".14yv1n21hxi.4.a.2.2:$1.0">
                  <div class="comment-left" data-reactid=".14yv1n21hxi.4.a.2.2:$1.0.0">
                    <img class="img avatar-img" src="//img.meituan.net/avatar/05a5b44fdb5f0bf49d5891178a3de14c100330.jpg" >
                    </div>
                    <div class="comment-right" >
                      <header >
                      <div class="mid-wrapper" >
                      <em class="nick ellipsis">杨谨婕了啦</em>
                      <div class="nick-level nick-level4">
                      </div>
                        <span class="tags" ></span>
                      </div>
                      <div class="comment-score">给这部作品打了10分</div>
                      </header>
                      <section>
                        <a href="/movie/1211270/replies/1072676722?_v_=yes" class="link" data-event="comdetail" data-bid="b_h9JYa" data-lab="[object Object]" data-reactid=".14yv1n21hxi.4.a.2.2:$1.0.1.2.0"><p class="content" data-reactid=".14yv1n21hxi.4.a.2.2:$1.0.1.2.0.1">土拨鼠尖叫！！！也好看了吧！！！放映结束观众全体鼓掌！！！哪吒小爷太值了！！！跟敖丙CP我磕了！！！</p></a></section><footer data-reactid=".14yv1n21hxi.4.a.2.2:$1.0.1.4"><time class="timeago" title="1564108140000" data-reactid=".14yv1n21hxi.4.a.2.2:$1.0.1.4.0">4天前</time><div class="pull-right" data-reactid=".14yv1n21hxi.4.a.2.2:$1.0.1.4.1"><a href="javascript:void(0)" class="link comment-like" data-event="comup" data-reactid=".14yv1n21hxi.4.a.2.2:$1.0.1.4.1.0"><i data-comment-id="1072676722" class="icon icon-approve" data-bid="b_plyeez40" data-lab="{movieId:1211270,commentId:1072676722}" data-reactid=".14yv1n21hxi.4.a.2.2:$1.0.1.4.1.0.1:0"></i><span data-reactid=".14yv1n21hxi.4.a.2.2:$1.0.1.4.1.0.1:1">16747</span></a><a href="/movie/1211270/replies/1072676722?_v_=yes" class="link comment-reply" data-event="comreply" data-bid="b_wbaokgdo" data-lab="[object Object]" data-reactid=".14yv1n21hxi.4.a.2.2:$1.0.1.4.1.1"><i class="icon icon-comment" data-comment-id="1072676722" data-reactid=".14yv1n21hxi.4.a.2.2:$1.0.1.4.1.1.1:0"></i><span data-reactid=".14yv1n21hxi.4.a.2.2:$1.0.1.4.1.1.1:1">674</span></a></div></footer></div></div></li><li class="list-view-item " data-bid="b_h7xvl" data-reactid=".14yv1n21hxi.4.a.2.2:$2"><div class="comment" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0"><div class="comment-left" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.0"><img class="img avatar-img" src="//img.meituan.net/avatar/a4941c95b727ae66779968b7bf28c7a066586.jpg" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.0.0"></div><div class="comment-right" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1"><header data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.0"><div class="mid-wrapper" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.0.0"><em class="nick ellipsis" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.0.0.0">陈圈圈</em><div class="nick-level nick-level4" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.0.0.1"></div><span class="tags" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.0.0.2"></span></div><div class="comment-score" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.0.1">给这部作品打了10分</div></header><section data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.2"><a href="/movie/1211270/replies/1072785086?_v_=yes" class="link" data-event="comdetail" data-bid="b_h9JYa" data-lab="[object Object]" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.2.0"><p class="content" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.2.0.1">“申公公，你也在呀？“不好意思我真的笑喷了！</p></a></section><footer data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.4"><time class="timeago" title="1564106280000" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.4.0">4天前</time><div class="pull-right" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.4.1"><a href="javascript:void(0)" class="link comment-like" data-event="comup" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.4.1.0"><i data-comment-id="1072785086" class="icon icon-approve" data-bid="b_plyeez40" data-lab="{movieId:1211270,commentId:1072785086}" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.4.1.0.1:0"></i><span data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.4.1.0.1:1">12095</span></a><a href="/movie/1211270/replies/1072785086?_v_=yes" class="link comment-reply" data-event="comreply" data-bid="b_wbaokgdo" data-lab="[object Object]" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.4.1.1"><i class="icon icon-comment" data-comment-id="1072785086" data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.4.1.1.1:0"></i><span data-reactid=".14yv1n21hxi.4.a.2.2:$2.0.1.4.1.1.1:1">499</span></a></div></footer></div></div></li></ul><a href="/movie/1211270/comments?_v_=yes" class="link link-more comments-link" data-event="comall" data-reactid=".14yv1n21hxi.4.a.3"><h4 data-reactid=".14yv1n21hxi.4.a.3.1"><span data-reactid=".14yv1n21hxi.4.a.3.1.0">查看全部</span><span data-reactid=".14yv1n21hxi.4.a.3.1.1">230852</span><span data-reactid=".14yv1n21hxi.4.a.3.1.2">条讨论 &gt;</span></h4></a></section>
            <div class="load-wrapper">

              <div class="download-placeholder" >
              </div>
                <div id="download" class="download" style="display: block;">
                  <a href="/app?_v_=yes&amp;f=&amp;to=meituanmovie%3A%2F%2Fwww.meituan.com%2Fmovie%3Fid%3D1211270%26nm%3D%25E5%2593%25AA%25E5%2590%2592%25E4%25B9%258B%25E9%25AD%2594%25E7%25AB%25A5%25E9%2599%258D%25E4%25B8%2596&amp;pageId=100383&amp;actionId=moviedetaildownload" class="link btn btn-block btn-download" data-event="moviedetaildownload" data-reactid=".14yv1n21hxi.4.e.1.0">
                  <span data-reactid=".14yv1n21hxi.4.e.1.0.1">下载猫眼电影，查看更多电影信息</span>
                  </a>
                </div>
              </div>
            <footer class="footer">
              <div class="footer-misc" >
                <div class="copyright">
                  <span>
                    <span>© 猫眼电影 客服电话: </span>
                    <a href="tel:10105335">1010-5335</a>
                  </span>
                </div>
                <p class="icp">
                  <a href="http://www.miibeian.gov.cn" class="link">
                   <span data-reactid=".14yv1n21hxi.5.0.1.0.0">京ICP备16022489号-1</span>
                  </a>
                  <span>&nbsp;</span>
                  <a href="http://www.beian.gov.cn" class="link" >
                  <span data-reactid=".14yv1n21hxi.5.0.1.2.0">京公网安备11010502030881号</span>
                  </a>
                  </p>
                  <p class="sankuai">
                    <a href="javascript:void(0)" class="link">
                      <span>北京猫眼文化传媒有限公司</span>
                    </a>
                  </p>
                </div>
              </footer> 
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  data(){
    return{
      id:this.$route.params.id,
      movieinfo:[],
    }
  },
  components:{
    'v-header':Header
  },
  created(){
      this.$http.get('https://www.easy-mock.com/mock/5d28a020c26cea5c144e782d/http:/m.maoyan.com/ajax/detailmovie/'+this.id).then(res=>{
          console.log(res);
          this.movieinfo = res.data.detailMovie;
        //   console.log(this.movieinfo.nm);
          
      })
  }
}
</script>

<style scoped>
a {
    cursor: pointer;
}
a {
    background-color: transparent;
}
.navbar-back:after {
    top: 16px;
    left: 12px;
    width: 13px;
    height: 13px;
    position: absolute;
    border: 2px solid #FFF;
    border-width: 0 0 2px 2px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
.navbar .city:after, .navbar-back:after {
    content: '';
}
.movie-page .movie-header {
    padding: 0;
    background: #f8f8f8;
    border-bottom: none;
}
section {
    display: block;
}
.movie-page {
    background: #f4f4f4;
    position: relative;
    z-index: 1;
    margin: 0;
    color: #555;
    min-width: 175px;
    /* -webkit-user-select: none; */
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    font: 14px/1.5 Arial,Helvetica,sans-serif;
}
.movie {
    color: #fff;
    padding: 15px;
    line-height: 1;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    -webkit-filter: blur(0);
    filter: blur(0);
}
.movie-background {
    z-index: 0;
    /* filter: blur(.6rem); */
    -webkit-filter: blur(.6rem);
    background-size: cover;
    /* background-image: gray; */
    background-repeat: no-repeat;
    background-position-y: 40%;
}
.movie-filter {
    background-color: #40454d;
    opacity: .55;
}
.movie-background, .movie-filter {
    top: 0;
    right: 0;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
}
.movie-container {
    z-index: 1;
    position: relative;
}
.movie-cover {
    float: left;
    width: 107px;
    height: 150px;
    filter: blur(0);
    font-style: initial;
    -webkit-filter: blur(0);
    border: 1px solid #f0f2f3;
    position: relative;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAwFBMV…mytghhgpB+Cgix7I1gjStOqq8c5jhkmLqiJ0McuoXq6j92ZWbxiZAstgAAAABJRU5ErkJggg==) center center no-repeat #c1c1c1;
}
.movie-content {
    z-index: 2;
    padding-left: 122.5px;
    height: 150px;
}
.movie-ugc {
    position: relative;
    z-index: 2;
    margin-top: 10px;
}
.hide {
    display: none!important;
}
.movie-page .flaunt-wrap {
    /* display: -webkit-box; */
    display: -ms-flexbox;
    /* display: flex; */
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    /* -ms-flex-direction: row; */
    flex-direction: row;
    -webkit-box-pack: justify;
    /* -ms-flex-pack: justify; */
    justify-content: space-between;
    border-radius: 3px;
    padding: 0 10px 0 15px;
    margin: 15px 0 0;
    font-size: 13px;
    -webkit-box-align: center;
    /* -ms-flex-align: center; */
    align-items: center;
    border: 1px solid rgba(255,255,255,.4);
    height: 45px;
    background-color: rgba(255,255,255,.25);
}
.link {
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    /* tap-highlight-color: rgba(0,0,0,0); */
}
.btn, .link, .navbar .city {
    text-decoration: none;
}
a {
    background-color: transparent;
}
.img.noneBg {
    background: 0 0;
}
.movie-cover img {
    width: 107px;
    height: 150px;
    vertical-align: top;
}
.img {
    border: 0;
    display: inline-block;
}

.movie-name {
    font-size: 17px;
    line-height: 1.2;
    margin-top: 3px;
    margin-bottom: 4px;
}
.text-ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.movie-ename {
    font-size: 11px;
    opacity: .8;
    height: 11px;
    margin-bottom: 6px;
}
.movie-score {
    color: #f90;
    font-size: 16px;
    margin-bottom: 6px;
}
.movie-score .released-score {
    padding-top: 1px;
    color: #ffc600;
}
.movie-score .rating {
    font-size: 18px;
}
.rating {
    display: inline-block;
    line-height: 1;
}
.movie-score .released-score .score-num {
    color: #fff;
    opacity: .7;
    font-size: 9px;
    margin-top: 4px;
    margin-bottom: 8px;
}
.rating img:first-child {
    margin-left: 0;
}
.img.noneBg {
    background: 0 0;
}
.rating img {
    width: 18px;
    height: 18px;
    /* margin-left: .06rem; */
}
.comment .rating .icon:before, .rating img {
    vertical-align: text-top;
}
.img {
    border: 0;
    display: inline-block;

}

.movie-category, .movie-content-row {
    font-size: 12px;
    margin-bottom: 6px;
}
.movie-category .movie-cat {
    opacity: .7;
    vertical-align: middle;
}

.movie-tag {
    display: inline-block;
    font-size: 0;
    margin-left: 3px;
}
.movie-tag .tag-d {
    width: 16px;
    vertical-align: bottom;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
}
.movie-tag .tag-d, .movie-tag .tag-d-only, .movie-tag .tag-imax {
    box-sizing: border-box;
    font-size: 8px;
    height: 13px;
    color: #fff;
    line-height: 13px;
    text-align: center;
}
.movie-tag .tag-d, .movie-tag .tag-d-only {
    background-color: rgba(255,255,255,.4);
    display: inline-block;
}
.movie-tag .tag-imax {
    display: inline-block;
    width: 27px;
    border: 1px solid rgba(255,255,255,.4);
    line-height: 11px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}
.movie-content-row {
    opacity: .7;
}
.movie-page section.section-seperate {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    margin: 10px 0;
}
.movie-page .section-expander {
    position: relative;
    margin-top: 0!important;
    padding: 15px 15px 0;
}
.movie-page section {
    background: #fff;
    /* border-bottom: 1px solid #e5e5e5; */
}
.movie-page .section-expander .btn {
    margin: 0 0 10px;
}
.btn-block {
    display: block;
    /* margin: .2rem; */
    padding: 10px;
}
.btn {
    cursor: pointer;
    font-size: 16px;
    /* padding: .13rem .24rem; */
    /* display: inline-block; */
    border-radius: 4px;
    line-height: 1;
    background: #e54847;
}
.btn, .navload .btn-open {
    color: #fff;
    text-align: center;
}
.btn, .link, .navbar .city {
    text-decoration: none;
}
.text-expander {
    cursor: pointer;
    font-size: 15px;
    background-color: #fff;
}
.text-expander-expand-false .text-expander-content {
    max-height: 58px;
}
.text-expander-content {
    margin: 0;
    line-height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
}
.text-expander-button {
    color: #aaa;
    text-align: center;
    height: 22px;
}
.text-expander-content p {
    font-size: 15px;
    margin: 0;
}
p {
    display: block;
    margin-block-start: 50px;
    margin-block-end: 50px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.icon {
    font-size: 50px;
    line-height: 50px;
    display: inline;
    vertical-align: middle;
}
i {
    font-style: italic;
}
/* .icon-chevron-down:before {
    content: "\EA15";
}
.icon:before {
    line-height: 1;
    display: inline-block;
    font-family: 'myfont';
    font-style: normal;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
} */
.movie-page section.section-seperate {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    margin: 10px 0;
}
.movie-page section {
    background: #fff;
}
.movie-page .movie-celebrities {
    width: 100%;
    padding:15px 0 5px 15px;
    margin: 0;
    list-style: none;
    overflow-x: scroll;
    white-space: nowrap;
    box-sizing: border-box;
}
ul {
    display: block;
    margin-block-start: 50px;
    margin-block-end: 50px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.movie-page .movie-celebrities li:first-child {
    padding-left: 0;
}
.movie-page .movie-celebrities li {
    padding: 0 1.5px;
    text-align: center;
    display: inline-block;
}
.movie-page .movie-celebrities a {
    color: #000;
    text-decoration: none;
}
.movie-page .section-movie-celebrities .link-more {
    border-top: 1px solid #e5e5e5;
    padding: 0 15px;
}
.movie-page section .link-more {
    display: block;
    line-height: 40px;
    height: 42px;
}
.movie-page .section-movie-celebrities .link-more h4 {
    float: left;
}
.movie-page section .link-more h4 {
    position: relative;
    color: #666;
    margin: 0;
    font-weight: lighter;
}
h4 {
    display: block;
    margin-block-start: 65.5px;
    margin-block-end: 65.5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.movie-page .section-movie-celebrities .link-more .icon {
    font-size: 13px;
}
.movie-page section .link-more .icon {
    color: #aaa;
    float: right;
    line-height: inherit;
    vertical-align: middle;
    margin-top: 2px;
}
.icon {

    display: inline;
}
.movie-page .storebill {
    margin-bottom: 10px;
    padding: 0 15px 10px;
}
.movie-page section {
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
}
.movie-page .storebill a {
    display: block;
}
.clearfix:before, .clearfix:after {
    content: " ";
    display: table;
}
.clearfix{
  height: 100px;
}
.movie-page section .link-more {
    line-height: 40px;
}
.movie-page section .link-more h4 {
    position: relative;
    color: #666;
    margin: 0;
    font-weight: lighter;
}
.movie-page .storebill img {
    float: left;
    width: 100px;
}
.img.noneBg {
    background: 0 0;
}
.img {
    border: 0;
    display: inline-block;
}
.movie-page .storebill .good-info {
    display: table;
    height: 100px;
    float: left;
    width: 190px;
    padding-left: 5px;
}
.movie-page .storebill .good-info>div {
    display: table-cell;
    vertical-align: middle;
}
.movie-page .storebill .good-info h3 {
    padding: 0;
    border: none;
    font-size: 16px;
    font-weight: 400;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.movie-page section h3 {
    margin: 0;
}
.movie-page .storebill .good-info div {
    margin-top: 8px;
}
.movie-page .storebill .good-info strong {
    font-weight: 400;
    font-size: 20px;
    color: #e54847;
}
.movie-page .storebill .good-info strong i {
    font-style: normal;
    font-size: 15px;
}
.movie-page .storebill .good-info del {
    margin-left: 10px;
    font-size: 10px;
    color: #999;
}
del {
    text-decoration: line-through;
}
movie-page section .link-more .icon {
    color: #aaa;
    float: right;
    line-height: inherit;
    vertical-align: middle;
    margin-top: 2px;
    font-size: 11px;
}
.movie-page .storebill .link-num {
    float: right;
    margin-right: 10px;
}
.movie-page .storebill .deal-stages {
    padding-left: 0;
    margin: 0;
    overflow-x: scroll;
    white-space: nowrap;
}
.movie-page .storebill .deal-stages li {
    display: inline-block;
    overflow: hidden;
    width: 125px;
    margin: 0 10px 10px 0;
    list-style: none;
}
.movie-page .storebill a {
    display: block;
}
.movie-page .storebill .deal-stages img {
    float: none;
    width: 125px;
}
.img.noneBg {
    background: 0 0;
}
.movie-page .movie-news {
    padding-bottom: 15px;
}
.movie-page section {
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
}
.panel {

    margin: 0 0 10px;
    border-top: 1px solid #e6e6e6;
}
.movie-page .panel .panel-title {
    line-height: 1;
    padding: 15px 0 10px;
}
.panel-title-unclosed {
    /* padding: .26rem 0; */
    margin: 0 0 0 13px;
}
.panel-title {
    border-bottom: 1px solid #e6e6e6;
}
.panel-content {
    padding: 0 15px;
    overflow: hidden;
}
.panel-title h2 {
    padding: 0;
    margin: 0;
    font-size: 15px;
    color: #333;
    font-weight: 400;
}
.panel-title h2, .panel-title span {
    line-height: 1.2;
}
.movie-page .movie-news .link {
    color: #333;
    display: block;
    position: relative;
}
.movie-page .movie-news img {
    float: left;
    width: 100px;
    height: 75px;
}
.movie-page .movie-news .news-wrapper {
    font-size: 16px;
    display: table;
    padding-left: 10px;
    height: 75px;
}

.movie-page .movie-news .news-content {
    display: table-cell;
    vertical-align: middle;
    padding-right: 10px;
}
.movie-page section.section-seperate {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    margin: 10px 0;
}
.movie-page .section-movie-comment {
    padding: 0;
}
.movie-page .section-movie-comment h3 {
    height: 28px;
    line-height: 28px;
}
.movie-page section h3 {
    margin: 0;
    color: #666;
    font-size: 15px;
}
.movie-page .section-tips h3, .movie-page section h3 {
    padding: 10px 15px;
    border-bottom: 1px solid #e5e5e5;
}
h3 {
    display: block;
    /* font-size: 1.17em; */
    margin-block-start: 50px;
    margin-block-end: 50px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.movie-page .movie-celebrities {
    width: 100%;
    padding: 15px 0 5px 15px;
    margin: 0;
    list-style: none;
    overflow-x: scroll;
    white-space: nowrap;
    box-sizing: border-box;
}
.movie-page .movie-celebrities li:first-child {
    padding-left: 0;
}
.movie-page .movie-celebrities li {
    padding: 0 1.5px;
    text-align: center;
    display: inline-block;
}
.movie-page .movie-celebrities a {
    color: #000;
    text-decoration: none;
}
.movie-page .movie-celebrities li:first-child img {
    margin-left: 0;
}
.movie-page .movie-celebrities img {
    width: 65px;
    height: 90px;
    margin: 2px;
}
.img.noneBg {
    background: 0 0;
}
.movie-page .movie-celebrities li:first-child span {
    width: 66.5px;
}
.movie-page .movie-celebrities span {
    display: block;
    font-size: 11px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.movie-page .movie-celebrities a {
    color: #000;
    text-decoration: none;
}
.movie-page .movie-celebrities li:first-child span {
    width: 66.5px;
}
.movie-page .section-movie-celebrities .link-more {
    border-top: 1px solid #e5e5e5;
    padding: 0 15px;
}
.movie-page .section-movie-celebrities .link-more h4 {
    float: left;
}
.movie-page section .link-more h4 {
    position: relative;
    color: #666;
    margin: 0;
    font-weight: lighter;
}
.movie-page .section-movie-celebrities .link-more .icon {
    font-size: 130px;
}
.movie-page section .link-more .icon {
    color: #aaa;
    float: right;
    line-height: inherit;
    vertical-align: middle;
    margin-top: 2px;
    font-size: 11px;
}
.movie-page section .title-text-left {
    margin-top: 11.5px;
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 700;
    color: #666;
    margin-left: 15px;
    text-align: left;
}
.list-view-styled {
    margin-left: 15px;
}
.list-view {
    margin: 0;
    padding: 0;
    list-style: none;
}
.list-view-styled .list-view-item {
    padding-left: 0;
}
.list-view-item {
    list-style: none;
    font-size: 14px;
    padding: 7.5px 12.5px;
    background-color: #fff;
    border-bottom: solid #e5e5e5 1px;
}
.comment {
    padding: 0 1.5px;
    /* display: -webkit-box; */
    /* display: -ms-flexbox; */
    display: flex;
    -webkit-box-pack: start;
    /* -ms-flex-pack: start; */
    justify-content: flex-start;
}
.comment .comment-left {
    min-width: 34px;
}
.comment .comment-left .img {
    float: left;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: inline-block;
}
.img.avatar-img {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFW…HDfdkoiC97xRpgTjE4ZnG34E7juCc/qPZSXmuUGP4vwAADixAniKIzrAAAAABJRU5ErkJggg==) 50% no-repeat #f5f5f5;
    background-size: 100%;
}
.comment .comment-right {
    -webkit-box-flex: 1;
    /* -ms-flex-positive: 1; */
    flex-grow: 1;
    margin-left: 10px;
}
.comment .mid-wrapper {
    /* display: -webkit-box; */
    /* display: -ms-flexbox; */
    display: flex;
    -webkit-box-align: center;
    /* -ms-flex-align: center; */
    align-items: center;
}
.comment .nick {
    display: inline-block;
    max-width: 150px;
    color: #333;
    font-size: 12px;
    font-style: normal;
    vertical-align: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.comment .nick-level5 {
    background: url(http://p1.meituan.net/moviemachine/12e2e86….png) no-repeat;
    background-size: contain;
}
.comment .nick-level {
    margin-left: 5px;
    display: inline-block;
    width: 36.5px;
    height: 17px;
}
.comment .comment-right .comment-score {
    font-size: 11px;
    line-height: 16px;
    color: #999;
}
.comment section {
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: none!important;
    /* -webkit-user-select: text; */
    /* -moz-user-select: text; */
    /* -ms-user-select: text; */
    user-select: text;
}
.comment section p.content {
    margin: 0;
    color: #333;
    font-size: 14px;
    line-height: 1.5;
    text-align: justify;
    word-wrap: break-word;
    padding: 0!important;
}

.comment footer {
    margin-top: 10px;
    margin-bottom: 2.5px;
    line-height: 25px;
    vertical-align: middle;
}
.comment .timeago {
    color: #999;
    position: relative;
}
.comment .rating, .comment .timeago {
    font-size: 12px;
    margin-right: 5px;
}
.comment footer {
    margin-top: 10px;
    margin-bottom: 2.5px;
    line-height: 25px;
    vertical-align: middle;
}
.pull-right {
    float: right;
}
.comment-like, .comment-reply {
    color: #999;
    margin: 0 0 0 10px;
    font-size: 12px;
    padding: 5px 12px;
    border: 0.5px solid #CCC;
    border-radius: 50px;
}
.comment-like .icon, .comment-reply .icon {
    margin-right: 5px;
}
.movie-page section.section-seperate {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    margin: 10px 0;
}
.movie-relatedAttribute {
    /* background-color: #fff; */
    padding: 0 5px;
}
.movie-relatedAttribute ul {
    margin: 0;
    padding: 0;
}
.movie-relatedAttribute ul li:last-child {
    border-bottom: none;
}
.movie-relatedAttribute ul li {
    list-style: none;
    height: 55px;
    overflow: hidden;
    padding: 0 20px 0 50px;
    /* border-bottom: solid 1px #e5e5e5; */
}
.movie-relatedAttribute ul li a {
    text-decoration: none;
    color: #000;
    vertical-align: middle;
}
.footer {
    text-align: center;
}
.footer-misc {
    text-align: center;
}
.footer-misc .icp a {
    font-size: 10px;
    color: #9e9e9e;
    text-decoration: none;
}
.footer-misc .sankuai a {
    font-size: 12.5px;
    color: #9e9e9e;
    text-decoration: none;
}
</style>
