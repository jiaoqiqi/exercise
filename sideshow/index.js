window.onload = function () {
    var list = document.getElementById('list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';


        // 之前一直点击右箭头 ，会出现空白，而且，不能回到第一张图片。要点击左箭头才能回到第一张图片。
        // 因为没有设置偏移量的范围，超过范围就么有图片啦啦啦啦
        // F12调试当看到left值小于3600时，因为没有第8张图片就出现空白，所以这里我们需要对偏移量做一个判断。
        if (newLeft < -3000) {
            list.style.left = -600 + 'px';
        }
        if (newLeft > -600) {
            list.style.left = -3000 + 'px';
        }
    }

    prev.onclick = function () {
        animate(600);
        // 按前面一张图位置加一张图的宽度即600px
    }
    next.onclick = function () {
        animate(-600);
    }

    var timer;

    // function play() {
    //     timer = setInterval(function () {
    //         prev.onclick()
    //     }, 2000)
    // }

    function play() {
        //将轮播图换成向右切换图片
        timer = setInterval(function () {
            next.onclick();
        }, 2000)
    }

    play();


    // 小点点的功能在此
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var index = 1;

    function buttonsShow() {
        //这里需要清除之前的样式
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
            }
        }
        //数组从0开始，故index需要-1
        buttons[index - 1].className = 'on';
    }

    prev.onclick = function () {
        index -= 1;
        if (index < 1) {
            index = 5;
        }
        buttonsShow();
        animate(600);
    }
    next.onclick = function () {
        //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
        index += 1;
        if (index > 5) {
            index = 1;
        }
        buttonsShow();
        animate(-600);
    }

    // for (var i = 0; i < buttons.length; i++) {
    //     buttons[i].onclick = function () {
    //         // 在浏览器的控制台打印一下，看看结果
    //         // console.log(i);  一直输出5  因为没有闭包啊
    //
    //         /* 偏移量获取：这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上*/
    //         /* 由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
    //         var clickIndex = parseInt(this.getAttribute('index'));
    //         var offset = 600 * (index - clickIndex);
    //         animate(offset); //存放鼠标点击后的位置，用于小圆点的正常显示
    //         index = clickIndex;
    //         buttonsShow();
    //     }
    // }

    for (var i = 0; i < buttons.length; i++) {
        // 这里使用的是立即执行函数，
        (function(i) {
            buttons[i].onclick = function() {
                console.log(i)
                var clickIndex = parseInt(this.getAttribute('index'));
                var offset = 600 * (index - clickIndex);
                animate(offset);
                index = clickIndex;
                buttonsShow();
            }
        })(i)
    }

}

