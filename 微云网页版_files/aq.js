(function(_wnd, _doc, _ln) {
  function checkZyjReport() {
    return typeof _wnd.maskZyj !== "undefined";
  }
  function checkNonTxDomain(level, bid, pagetype) {
    if (checkZyjReport()) {
      return;
    }
    var checkInfo = {bid:bid, childUrl:_ln.href, parentUrl:""}, childCheckFlag, parentCheckFlag;
    try {
      checkInfo.parentUrl = parent.location.href;
    } catch (ign) {
    }
    if (pagetype == 1) {
      try {
        parentCheckFlag = parent != _wnd ? generateNonTxDomainFromDom(parent.document, "datapp", checkInfo, pagetype, level) : false;
      } catch (ign) {
      }
    } else {
      try {
        childCheckFlag = generateNonTxDomainFromDom(_doc, "datapt", checkInfo, pagetype, level);
        parentCheckFlag = parent != _wnd ? generateNonTxDomainFromDom(parent.document, "datapp", checkInfo, pagetype, level) : false;
      } catch (ign) {
      }
      try {
        if (parent != _wnd) {
          generateZyjIframed(checkInfo);
        }
      } catch (ign) {
      }
    }
  }
  function generateZyjIframed(checkInfo) {
    var data = [];
    data.push("beframed::url");
    packZyjUrlData(data, "beframed", checkInfo);
  }
  function packZyjUrlData(data, dataMark, checkInfo) {
    var version = "1.4", cgi = "http://zyjc.sec.qq.com/cr", img = new Image;
    data.push("childUrl::" + encodeURIComponent(checkInfo.childUrl));
    data.push("parentUrl::" + encodeURIComponent(checkInfo.parentUrl));
    img.src = cgi + "?id=" + checkInfo.bid + "&d=" + dataMark + "=v" + version + "|" + data.join("|");
    return true;
  }
  function generateNonTxDomainFromDom(dom, parentMark, checkInfo, pagetype, level) {
    _wnd._aqStartTime = +new Date;
    var scriptData = extractNonTxScriptWorm(dom, pagetype);
    var iframeData = extractNonTxIframe(dom, pagetype);
    var frameData = extractNonTxFrame(dom, pagetype);
    var embedData = extractNonTxEmbed(dom, pagetype);
    var imgData = extractNonTxIMG(dom, pagetype);
    var hacks = scriptData.concat(iframeData, frameData, imgData, embedData);
    _wnd._aqEndTime = +new Date;
    var pointMap = {"m.qzone.com":{"first_http":104975423, "second_http":104975424, "first_https":104975425, "second_https":104975426}, "mobile.qzone.qq.com":{"first_http":104975427, "second_http":104975428, "first_https":104975429, "second_https":104975430}, "h5.qzone.qq.com":{"first_http":104975431, "second_http":104975432, "first_https":104975433, "second_https":104975434}, "h5s.qzone.qq.com":{"first_http":104975435, "second_http":104975436, "first_https":104975437, "second_https":104975438}, 
    "www.weiyun.com":{"first_http":104975439, "second_http":104975440, "first_https":104975441, "second_https":104975442}};
    if (hacks.length > 0) {
      if (pagetype === 0) {
        if (Math.random() <= level) {
          hacks = distinctZyjArray(hacks);
          packZyjUrlData(hacks, parentMark, checkInfo);
        }
        reportHabo(hacks);
      } else {
        if (pagetype === 2) {
          if (Math.random() <= level) {
            hacks = distinctZyjArray(hacks);
            packZyjUrlData(hacks, parentMark, checkInfo);
          }
        }
      }
    }
    var interfaceId;
    var protocol = window.location.protocol.slice(0, -1);
    var browserMap = {"msie":1, "rv:11":2, "rv:12":3, "chrome":4, "safari":5, "qqbrowser":6, "f1browser":7, "metasr":8, "maxthon":9, "firefox":10, "opera":11, "navigator":12, "other":13}, reg = new RegExp("msie|rv:11|rv:12|chrome|safari|qqbrowser|f1browser|metasr|maxthon|firefox|opera|navigator", "igm"), ua = window.navigator.userAgent, browser1 = (reg.exec(ua) || [])[0], browser2 = (reg.exec(ua) || [])[0], browserCode;
    browser1 = browser1 && (browser1.toLocaleLowerCase && browser1.toLocaleLowerCase());
    browser2 = browser2 && (browser2.toLocaleLowerCase && browser2.toLocaleLowerCase());
    if (pointMap[window.location.host]) {
      interfaceId = pointMap[window.location.host][(pagetype ? "second_" : "first_") + protocol];
      if (interfaceId) {
      }
      if (pagetype === 0) {
        browserCode = browserMap[browser1] ? browserMap[browser2] ? browserMap[browser1] + "0000" + browserMap[browser2] : browserMap[browser1] : browserMap["other"];
      }
    }
  }
  function reportHabo(hacks) {
    var store = [];
    var path = location.protocol + "//" + location.hostname + location.pathname;
    var commandid;
    var regMap = [{key:/\/(ugc\/share\/[0-9a-zA-Z]{5,30})/ig, placeholder:"ugc/share/{id}"}, {key:/\/(feed\/visitor\/[0-9a-zA-Z_]{5,30})/ig, placeholder:"feed/visitor/{id}"}, {key:/\/(share\.weiyun\.com\/[0-9a-zA-Z_]{5,30})/ig, placeholder:"share.weiyun.com/{id}"}, {key:/\/(groupphoto\/inqq\/photo\/[0-9]{5,30}\/[0-9a-zA-Z_]{5,30})/ig, placeholder:"groupphoto/inqq/photo/{uin}/{id}"}, {key:/\/(secret\/detail\/[0-9a-zA-Z_]{5,50})/ig, placeholder:"secret/detail/{id}"}, {key:/([0-9]{5,20}\/qzvideo\/[_0-9a-zA-Z]{5,50})/ig, 
    placeholder:"{uin}/qzvideo/{videoid}"}];
    for (var i = 0;i < regMap.length;i++) {
      if (regMap[i].key.test(path)) {
        commandid = path.replace(regMap[i].key, regMap[i].placeholder);
      }
    }
    if (!commandid) {
      commandid = path.replace(/[0-9]{5,30}/gi, "{num}");
    }
    store.push({commandid:commandid, resultcode:0, releaseversion:"", tmcost:0});
    var keys = ["releaseversion", "commandid", "resultcode", "tmcost"];
    var keysParam = [];
    var i = 0, cur;
    for (;cur = store[i++];) {
      var ii = 0, cur2;
      for (;cur2 = keys[ii++];) {
        keysParam.push([i, ii].join("_") + "=" + (cur[cur2] || 0));
      }
    }
    keysParam = keysParam.join("&");
    var url = "https://h5.qzone.qq.com/wspeed.qq.com/w.cgi?appid=1000439&touin=10000&r=" + Math.random() + "&key=" + keys.join(",") + "&" + keysParam;
    (new Image).src = url;
    sendLog(commandid + "\n" + decodeURIComponent(hacks));
  }
  function sendLog(str, logKey) {
    try {
      logKey = logKey || "mobile/hijack";
      var postLogUrl = "//h5.qzone.qq.com/log/post/" + logKey;
      var request = new XMLHttpRequest;
      request.open("POST", postLogUrl, true);
      request.setRequestHeader("Content-Type", "text/plain");
      request.withCredentials = true;
      request.send("\n\n\n\n" + str + "\n\n\n");
    } catch (e) {
    }
  }
  function getbrowser() {
    var ua = navigator.userAgent;
    var android = ua.match(/(Android)\s+([\d.]+)/) || ua.match(/Android/), ios = ua.match(/(iPad|iPhone|iPod)(?:.*)CPU(?: iPhone)? OS ([^\s;]+)/);
    return{android:android, ios:ios};
  }
  function extractNonTxScriptWorm(dom, pagetype) {
    var scripts = dom.getElementsByTagName("script"), scriptData = [], tempScript, urlList, url, nonTxList, mapFunc, resultList;
    for (var i = 0;i < scripts.length;i++) {
      tempScript = scripts[i];
      if (url = tempScript.src) {
        scriptData.push({tag:tempScript, map:url});
      }
    }
    nonTxList = grepZyjList(scriptData, isAntiTxDomain);
    mapFunc = addTagToZyjUrlCallback("script", pagetype);
    resultList = mapZyjList(nonTxList, mapFunc);
    return resultList;
  }
  function grepZyjList(testList, testFunction) {
    var grepList = [];
    for (var idx = 0;idx < testList.length;++idx) {
      var temp = testList[idx];
      if (testFunction(temp.map)) {
        temp.tag.parentNode.removeChild(temp.tag);
        grepList.push(temp.map);
      }
    }
    return grepList;
  }
  function isAntiTxDomain(sUrl) {
    var sDomain = extractZyjDomain(sUrl), regErrDom, regTxCom, regTxCn, regTxNet, regTxOther;
    if (!sDomain) {
      return false;
    }
    regErrDom = /^xui.ptlogin2?\.?$/i;
    regTxCom = /(\.|^)(qq|paipai|soso|wenwen|tenpay|macromedia|gtimg|qstatic|qqmail|paipaiimg|qqgames|pengyou|foxmail|qzoneapp|qzone|qplus|imqq|tqapp|tencent|3366|21mmo|taotao|imrworldwide|idqqimg|17roco|expo2010china|fangqq|tencentmind|tencity|yingkebicheng|zhangzhongxing|expovol|otaworld|gzyunxun|heyyo|himoral|himorale|myrtx|qqwinner|redian|sjkx|rtxonline|nbaso|paipai\.500wan|qqjapan|qq\.salewell|sogou|weiyun|flzhan)\.com$/i;
    regTxCn = /(\.|^)(qq\.com|gtimg|gtimg\.com|qlogo|foxmail\.com|gtimg\.com|url|qpic|tencent\.com|expo2010|expo|himorale\.com|nbaso\.com|qqtest\.com|qq\.ucar|rtx\.com|soso\.com|tcimage)\.cn$/i;
    regTxNet = /(\.|^)(5999|gongyi)\.net$/i;
    regTxOther = /(\.|^)(himorale\.com\.hk|tencent\.com\.hk|qq\.chinacache\.net|qq\.com\.fastcdn\.com|qq\.com\.lxdns\.com|qq\.fastcdn\.com|soso\.com\.lxdns\.com|motu\.pagechoice\.net|ope\.tanx\.com|dap\.gentags\.net)$/i;
    if (regErrDom.test(sDomain) || (regTxCom.test(sDomain) || (regTxCn.test(sDomain) || (regTxNet.test(sDomain) || regTxOther.test(sDomain))))) {
      return false;
    }
    return true;
  }
  function extractZyjDomain(sUrl) {
    var regDomain = /^https?:\/\/([\w\-]+\.[\w\-.]+)/i, m = regDomain.exec(sUrl);
    if (!m) {
      return;
    }
    return m[1];
  }
  function addTagToZyjUrlCallback(tag, pagetype) {
    return function(url) {
      if (pagetype === 2) {
        tag = "remove";
      }
      return tag + "::" + encodeURIComponent(url);
    };
  }
  function mapZyjList(testList, testFunction) {
    var mapList = [], temp, mapTemp;
    for (var idx = 0;idx < testList.length;++idx) {
      temp = testList[idx];
      mapTemp = testFunction(temp);
      if (typeof temp === "object") {
        mapList.push({tag:temp, map:mapTemp});
      } else {
        mapList.push(mapTemp);
      }
    }
    return mapList;
  }
  function extractNonTxIframe(dom, pagetype) {
    var tagName = "IFRAME", rawFunc = function(x) {
      return x.src;
    }, mapFunc = addTagToZyjUrlCallback("iframe", pagetype);
    return extractNonTxTagData(dom, tagName, rawFunc, isAntiTxDomain, mapFunc);
  }
  function extractNonTxEmbed(dom, pagetype) {
    var tagName = "EMBED", rawFunc = function(x) {
      return x.src;
    }, mapFunc = addTagToZyjUrlCallback("embed", pagetype);
    return extractNonTxTagData(dom, tagName, rawFunc, isAntiTxDomain, mapFunc);
  }
  function extractNonTxTagData(dom, tag, rawFunc, grepFunc, mapFunc) {
    var tags = dom.getElementsByTagName(tag);
    var tagRaw = mapZyjList(tags, rawFunc);
    var tagData = grepZyjList(tagRaw, grepFunc);
    var tagResult = mapZyjList(tagData, mapFunc);
    return tagResult;
  }
  function extractNonTxFrame(dom, pagetype) {
    var tagName = "FRAME", rawFunc = function(x) {
      return x.src;
    }, mapFunc = addTagToZyjUrlCallback("frame", pagetype);
    return extractNonTxTagData(dom, tagName, rawFunc, isAntiTxDomain, mapFunc);
  }
  function extractNonTxIMG(dom, pagetype) {
    var tagName = "IMG", rawFunc = function(x) {
      return x.src;
    }, mapFunc = addTagToZyjUrlCallback("img", pagetype);
    return extractNonTxTagData(dom, tagName, rawFunc, isAntiTxDomain, mapFunc);
  }
  function distinctZyjArray(list) {
    var sortList = list.slice(0), derivedArray = [];
    sortList.sort();
    derivedArray.push(sortList[0]);
    for (var i = 1;i < sortList.length;i += 1) {
      if (sortList[i] != sortList[i - 1]) {
        derivedArray.push(sortList[i]);
      }
    }
    return derivedArray;
  }
  function removeNonTxTag() {
  }
  _wnd.checkNonTxDomain = checkNonTxDomain;
})(window, document, location);
try {
  setTimeout(function() {
    checkNonTxDomain(0.1, 100, 1);
  }, 0);
} catch (ign) {
}
try {
  setTimeout(function() {
    checkNonTxDomain(0.1, 100, 0);
  }, 3E3);
} catch (ign) {
}
try {
  setTimeout(function() {
    checkNonTxDomain(0.1, 100, 2);
  }, 3500);
} catch (ign) {
}
window.define && define([], function(require, exports, module) {
  return window;
});

