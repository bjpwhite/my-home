
const routes = [
    {
        key: "home",
        title: "首页",
        path: "/",
        icon: "home"
    },
    {
        key: "tools",
        title: "工具类",
        path: "/tools",
        icon: "a",
        children: [
            {
                key: "tools-check",
                title: "校验",
                path: "/tools/check",
                icon: "a",
            },
            {
                key: "ab",
                title: "AB画面",
                path: "/tools/pageB",
                icon: "b",
            }
        ]
    },
    {
        key: "demos",
        title: "Demos",
        path: "/demos",
        icon: "a",
        children: [
            {
                key: "demos-demo1",
                title: "Demo1",
                path: "/demos/demo1",
                icon: "a",
            },
            {
                key: "demos-demo2",
                title: "Demo2",
                path: "/demos/demo2",
                icon: "b",
            },
            {
                key: "demos-demo3",
                title: "Demo3",
                path: "/demos/demo3",
                icon: "b",
            },
            {
                key: "demos-CRUD",
                title: "CRUD",
                path: "/demos/CRUD",
                icon: "b",
            },
            {
                key: "demos-test",
                title: "Test",
                path: "/demos/test",
                icon: "b",
            },
            {
                key: "demos-AMap",
                title: "AMap",
                path: "/demos/amap",
                icon: "b",
            },
            {
                key: "demos-AMap2",
                title: "AMap2",
                path: "/demos/amap2",
                icon: "b",
            }
        ]
    },
    {
        key: "c",
        title: "C画面",
        path: "/pageC",
        icon: "c"
    },
];

export default routes