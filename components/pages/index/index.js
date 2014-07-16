'use strict';

module.exports = {
    getHTML: function () {
        var data = [
            {
                title: '模块化开发',
                icon: 'cubes',
                href: '/#!/index'
            },
            {
                title: '按版本发布',
                icon: 'code-fork',
                href: '/#!/index'
            },
            {
                title: '项目脚手架',
                icon: 'wrench',
                href: '/#!/index'
            },
            {
                title: '按需加载',
                icon: 'crosshairs',
                href: '/#!/index'
            },
            {
                title: '请求合并',
                icon: 'flash',
                href: '/#!/index'
            },
            {
                title: '本地缓存',
                icon: 'database',
                href: '/#!/index'
            },
            {
                title: '代码压缩',
                icon: 'leaf',
                href: '/#!/index'
            },
            {
                title: '代码校验',
                icon: 'search',
                href: '/#!/index'
            },
            {
                title: 'CSS雪碧图',
                icon: 'th',
                href: '/#!/index'
            },
            {
                title: '本地调试',
                icon: 'bug',
                href: '/#!/index'
            },
            {
                title: '文件监听',
                icon: 'eye',
                href: '/#!/index'
            },
            {
                title: '自动刷新',
                icon: 'refresh',
                href: '/#!/index'
            },
            {
                title: '资源内嵌',
                icon: 'archive',
                href: '/#!/index'
            },
            {
                title: '多语言编译',
                icon: 'code',
                href: '/#!/index'
            },
            {
                title: '组件仓库',
                icon: 'github',
                href: '/#!/index'
            }
        ];
        var tpl = __inline('index.handlebars');
        return tpl(data);
    }
};