// 缓动函数来自 https://github.com/sole/tween.js/blob/master/src/Tween.js
define(function() {

    /**
     * @namespace qtek.animation.easing
     */
    var easing = {
        /**
         * @alias qtek.animation.easing.linear
         * @param {number} k
         * @return {number}
         */
        linear: function(k) {
            return k;
        },
        /**
         * @alias qtek.animation.easing.quadraticIn
         * @param {number} k
         * @return {number}
         */
        quadraticIn: function(k) {
            return k * k;
        },
        /**
         * @alias qtek.animation.easing.quadraticOut
         * @param {number} k
         * @return {number}
         */
        quadraticOut: function(k) {
            return k * (2 - k);
        },
        /**
         * @alias qtek.animation.easing.quadraticInOut
         * @param {number} k
         * @return {number}
         */
        quadraticInOut: function(k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k;
            }
            return - 0.5 * (--k * (k - 2) - 1);
        },
        /**
         * @alias qtek.animation.easing.cubicIn
         * @param {number} k
         * @return {number}
         */
        cubicIn: function(k) {
            return k * k * k;
        },
        /**
         * @alias qtek.animation.easing.cubicOut
         * @param {number} k
         * @return {number}
         */
        cubicOut: function(k) {
            return --k * k * k + 1;
        },
        /**
         * @alias qtek.animation.easing.cubicInOut
         * @param {number} k
         * @return {number}
         */
        cubicInOut: function(k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k + 2);
        },
        /**
         * @alias qtek.animation.easing.quarticIn
         * @param {number} k
         * @return {number}
         */
        quarticIn: function(k) {
            return k * k * k * k;
        },
        /**
         * @alias qtek.animation.easing.quarticOut
         * @param {number} k
         * @return {number}
         */
        quarticOut: function(k) {
            return 1 - (--k * k * k * k);
        },
        /**
         * @alias qtek.animation.easing.quarticInOut
         * @param {number} k
         * @return {number}
         */
        quarticInOut: function(k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k;
            }
            return - 0.5 * ((k -= 2) * k * k * k - 2);
        },
        /**
         * @alias qtek.animation.easing.quinticIn
         * @param {number} k
         * @return {number}
         */
        quinticIn: function(k) {
            return k * k * k * k * k;
        },
        /**
         * @alias qtek.animation.easing.quinticOut
         * @param {number} k
         * @return {number}
         */
        quinticOut: function(k) {
            return --k * k * k * k * k + 1;
        },
        /**
         * @alias qtek.animation.easing.quinticInOut
         * @param {number} k
         * @return {number}
         */
        quinticInOut: function(k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k * k * k + 2);
        },
        /**
         * @alias qtek.animation.easing.sinusoidalIn
         * @param {number} k
         * @return {number}
         */
        sinusoidalIn: function(k) {
            return 1 - Math.cos(k * Math.PI / 2);
        },
        /**
         * @alias qtek.animation.easing.sinusoidalOut
         * @param {number} k
         * @return {number}
         */
        sinusoidalOut: function(k) {
            return Math.sin(k * Math.PI / 2);
        },
        /**
         * @alias qtek.animation.easing.sinusoidalInOut
         * @param {number} k
         * @return {number}
         */
        sinusoidalInOut: function(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        },
        /**
         * @alias qtek.animation.easing.exponentialIn
         * @param {number} k
         * @return {number}
         */
        exponentialIn: function(k) {
            return k === 0 ? 0 : Math.pow(1024, k - 1);
        },
        /**
         * @alias qtek.animation.easing.exponentialOut
         * @param {number} k
         * @return {number}
         */
        exponentialOut: function(k) {
            return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);
        },
        /**
         * @alias qtek.animation.easing.exponentialInOut
         * @param {number} k
         * @return {number}
         */
        exponentialInOut: function(k) {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(1024, k - 1);
            }
            return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);
        },
        /**
         * @alias qtek.animation.easing.circularIn
         * @param {number} k
         * @return {number}
         */
        circularIn: function(k) {
            return 1 - Math.sqrt(1 - k * k);
        },
        /**
         * @alias qtek.animation.easing.circularOut
         * @param {number} k
         * @return {number}
         */
        circularOut: function(k) {
            return Math.sqrt(1 - (--k * k));
        },
        /**
         * @alias qtek.animation.easing.circularInOut
         * @param {number} k
         * @return {number}
         */
        circularInOut: function(k) {
            if ((k *= 2) < 1) {
                return - 0.5 * (Math.sqrt(1 - k * k) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        },
        /**
         * @alias qtek.animation.easing.elasticIn
         * @param {number} k
         * @return {number}
         */
        elasticIn: function(k) {
            var s, a = 0.1, p = 0.4;
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            if (!a || a < 1) {
                a = 1; s = p / 4;
            }else{
                s = p * Math.asin(1 / a) / (2 * Math.PI);
            }
            return - (a * Math.pow(2, 10 * (k -= 1)) *
                        Math.sin((k - s) * (2 * Math.PI) / p));
        },
        /**
         * @alias qtek.animation.easing.elasticOut
         * @param {number} k
         * @return {number}
         */
        elasticOut: function(k) {
            var s, a = 0.1, p = 0.4;
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            if (!a || a < 1) {
                a = 1; s = p / 4;
            }
            else{
                s = p * Math.asin(1 / a) / (2 * Math.PI);
            }
            return (a * Math.pow(2, - 10 * k) *
                    Math.sin((k - s) * (2 * Math.PI) / p) + 1);
        },
        /**
         * @alias qtek.animation.easing.elasticInOut
         * @param {number} k
         * @return {number}
         */
        elasticInOut: function(k) {
            var s, a = 0.1, p = 0.4;
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            if (!a || a < 1) {
                a = 1; s = p / 4;
            }
            else{
                s = p * Math.asin(1 / a) / (2 * Math.PI);
            }
            if ((k *= 2) < 1) {
                return - 0.5 * (a * Math.pow(2, 10 * (k -= 1))
                    * Math.sin((k - s) * (2 * Math.PI) / p));
            }
            return a * Math.pow(2, -10 * (k -= 1))
                    * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;

        },
        /**
         * @alias qtek.animation.easing.backIn
         * @param {number} k
         * @return {number}
         */
        backIn: function(k) {
            var s = 1.70158;
            return k * k * ((s + 1) * k - s);
        },
        /**
         * @alias qtek.animation.easing.backOut
         * @param {number} k
         * @return {number}
         */
        backOut: function(k) {
            var s = 1.70158;
            return --k * k * ((s + 1) * k + s) + 1;
        },
        /**
         * @alias qtek.animation.easing.backInOut
         * @param {number} k
         * @return {number}
         */
        backInOut: function(k) {
            var s = 1.70158 * 1.525;
            if ((k *= 2) < 1) {
                return 0.5 * (k * k * ((s + 1) * k - s));
            }
            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        },
        /**
         * @alias qtek.animation.easing.bounceIn
         * @param {number} k
         * @return {number}
         */
        bounceIn: function(k) {
            return 1 - easing.bounceOut(1 - k);
        },
        /**
         * @alias qtek.animation.easing.bounceOut
         * @param {number} k
         * @return {number}
         */
        bounceOut: function(k) {
            if (k < (1 / 2.75)) {
                return 7.5625 * k * k;
            }
            else if (k < (2 / 2.75)) {
                return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
            } else if (k < (2.5 / 2.75)) {
                return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
            } else {
                return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
            }
        },
        /**
         * @alias qtek.animation.easing.bounceInOut
         * @param {number} k
         * @return {number}
         */
        bounceInOut: function(k) {
            if (k < 0.5) {
                return easing.bounceIn(k * 2) * 0.5;
            }
            return easing.bounceOut(k * 2 - 1) * 0.5 + 0.5;
        }
    };

    return easing;
});

