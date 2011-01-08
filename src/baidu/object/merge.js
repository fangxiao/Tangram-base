/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 */

///import baidu.object;

/**
 * 遍历数组中所有元素，将每一个元素应用方法进行转换，并返回转换后的新数组。
 * @name baidu.array.merge
 * @function
 * @grammar baidu.array.map(source, iterator)
 * @param {Array}    source   需要遍历的数组.
 * @param {Function} iterator 对每个数组元素进行处理的函数.
 * @return {Array} map后的数组.
 * @see baidu.array.extend
 * @author berg
 */
baidu.array.map = function(source, iterator) {
    var results = [],
        i = 0,
        l = source.length;
    for (; i < l; i++) {
        results[i] = iterator(source[i], i);
    }
    return results;
};
