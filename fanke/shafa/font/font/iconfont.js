;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xingxing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M484.932016 187.17396c14.722306-31.228235 38.818097-31.228235 53.538357 0l63.772442 135.237077c14.721283 31.225165 54.809303 61.039191 89.064478 66.246797l137.750317 20.945031c34.254152 5.206582 42.479487 29.66974 18.286482 54.360072l-101.8292 103.877859c-24.211425 24.692379-39.442314 72.752977-33.865295 106.795305l24.530696 149.630902c5.578042 34.048467-14.669094 48.249911-45.000913 31.556717l-124.33375-68.417229c-30.331819-16.685008-79.960123-16.685008-110.291942 0l-124.340913 68.417229c-30.324656 16.693194-50.582025 2.492774-44.99682-31.556717l24.51637-149.630902c5.585205-34.043351-9.655917-82.10395-33.858132-106.795305l-101.81078-103.875812c-24.202215-24.690332-15.97688-49.154513 18.283412-54.361095l137.747247-20.945031c34.260292-5.206582 74.340125-35.021631 89.062432-66.246797L484.932016 187.17396z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiazai" viewBox="0 0 1045 1024">' +
    '' +
    '<path d="M504.797867 574.60736c2.17088 2.942293 5.092693 4.765013 8.321707 4.765013s6.150827-1.82272 8.321707-4.765013l174.03904-236.366507c1.16736-1.590613 1.624747-4.143787 1.00352-6.444373-0.641707-2.280107-2.157227-3.6864-3.761493-3.6864L580.123307 328.11008 580.123307 87.8592c0-4.491947-1.18784-8.983893-3.556693-12.356267-2.37568-3.447467-5.495467-5.167787-8.6016-5.167787L458.294613 70.335147c-3.106133 0-6.22592 1.713493-8.6016 5.167787-2.37568 3.3792-3.556693 7.871147-3.556693 12.356267l0 240.25088L333.530453 328.11008c-1.604267 0-3.119787 1.406293-3.761493 3.6864-0.621227 2.300587-0.18432 4.840107 1.00352 6.444373L504.797867 574.60736 504.797867 574.60736 504.797867 574.60736z"  ></path>' +
    '' +
    '<path d="M990.08512 654.47936 835.3792 547.109547l-96.6656 0 162.167467 131.242667-178.292053-2.33472c-5.167787 0-12.5952 4.983467-14.936747 9.127253l-49.527467 119.780693L368.128 804.92544l-49.527467-119.780693c-2.321067-4.143787-9.74848-9.127253-14.936747-9.127253L126.436693 676.017493l161.129813-128.907947L190.859947 547.109547 36.174507 654.47936c-24.152747 14.493013-38.66624 47.848107-32.187733 74.192213l28.678827 157.279573c6.519467 26.323627 35.273387 47.848107 63.91808 47.848107l833.10592 0c28.624213 0 57.398613-21.52448 63.91808-47.848107l28.644693-157.279573C1028.75136 702.327467 1014.258347 668.972373 990.08512 654.47936L990.08512 654.47936 990.08512 654.47936z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)