/**
 * 一款小巧的jQuery拾色器组件v0.2.29.04.2014
 * @version 0.2.29.04.2014
 *
 * @author Levi
 * @url http://levi.cg.am/archives/3467
 */
;(function ($) {
    $(function () {
        $(document).bind('click', function() {
            if ($iColor.is(':visible')) {
                $iColor.fadeOut('fast')[0].tar = null;
            }
        });
        
        $iColor = $('<div id="iColorPicker"><table class="pickerTable"><thead></thead><tbody><tr><td colspan="16" id="colorPreview"></td></tr></tbody></table></div>').css({
            'display': 'none', 
            'position': 'absolute'
        }).appendTo($('body')).each(function() {
            var group = [], row = '', hx = [
                    'f00', 'ff0', '0f0', '0ff', '00f', 'f0f', 'fff', 'ebebeb', 'e1e1e1', 'd7d7d7', 'ccc', 'c2c2c2', 'b7b7b7', 'acacac', 'a0a0a0', '959595', 
                    'ee1d24', 'fff100', '00a650', '00aeef', '2f3192', 'ed008c', '898989', '7d7d7d', '707070', '626262', '555', '464646', '363636', '262626', '111', '000',
                    'f7977a', 'fbad82', 'fdc68c', 'fff799', 'c6df9c', 'a4d49d', '81ca9d', '7bcdc9', '6ccff7', '7ca6d8', '8293ca', '8881be', 'a286bd', 'bc8cbf', 'f49bc1', 'f5999d',
                    'f16c4d', 'f68e54', 'fbaf5a', 'fff467', 'acd372', '7dc473', '39b778', '16bcb4', '00bff3', '438ccb', '5573b7', '5e5ca7', '855fa8', 'a763a9', 'ef6ea8', 'f16d7e',
                    'ee1d24', 'f16522', 'f7941d', 'fff100', '8fc63d', '37b44a', '00a650', '00a99e', '00aeef', '0072bc', '0054a5', '2f3192', '652c91', '91278f', 'ed008c', 'ee105a',
                    '9d0a0f', 'a1410d', 'a36209', 'aba000', '588528', '197b30', '007236', '00736a', '0076a4', '004a80', '003370', '1d1363', '450e61', '62055f', '9e005c', '9d0039',
                    '790000', '7b3000', '7c4900', '827a00', '3e6617', '045f20', '005824', '005951', '005b7e', '003562', '002056', '0c004b', '30004a', '4b0048', '7a0045', '7a0026'
                ];
            
            $.each(hx, function(num, color) {
                row += '<td style="background:#' + color + '" hx="' + color + '"></td>';
                if (num % 16 == 15) {
                    group.push('<tr>' + row + '</tr>');
                    row = '';
                }
            });
            
            $(this).find('thead').html(group.join(''));
        }).on({
            'mouseover': function(evt) {
                var hx = $(evt.target).attr('hx');
                hx != undefined && $('#colorPreview').css('background', '#' + hx).attr('hx', hx);
            },
            
            'click': function(evt) {
                var t = this.tar, hx = $(evt.target).attr('hx');
                if (!hx) {
                    evt.stopPropagation();
                    return false;
                }
                
                t.set.call($(t).attr('hx', hx), hx);
            },
            
            'coord': function(e) {
                var num = $.extend({'x': 0, 'y': 0}, e.num||null);
                $(this).fadeIn('fast').css({
                    'top': e.posix.y + num.y,
                    'left': e.posix.x + num.x
                });
            }
        });
    });
    
    $.fn.iColor = function(arg, set) {
        var def = $.extend({
            'x': 0 , 
            'y': 0, 
            'type': 'click',
            'open': function() {}, 
            'set': function(hx) {
                var val = '#' + hx;
                this[!this.attr('type') ? 'html' : 'val'](val).css('background', val);
            }
        }, arg);
        
        return this.each(function() {
            var $t = $(this), val = $t.attr('hx');
            this.set = set || ($.isFunction(arg) ? arg : def.set);
            if (val) {
                val = $.trim(val);
                if (val[0] == '#') {
                    val = val.substring(1);
                }
                
                !this.set && console.log(this);
                val.length && this.set.call($t, val + ['', '00', '0'][val.length % 3]);
            }
        })[def.type](function(e) {
            var t = e.target, od = $iColor[0].tar || null;
            if (od == t && t.show) {
                return;
            }
            
            t.show = true;
            e.stopPropagation();
            
            def.open.call($(t), e);
            $iColor.trigger({'type': 'coord', 'num': set, 'posix': {
                'x': e.pageX,
                'y': e.pageY
            }})[0].tar = t;
        });
    };
})(jQuery);