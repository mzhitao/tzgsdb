((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__User__Login__index'],
{ "src/pages/User/Login/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _api = __mako_require__("src/services/ant-design-pro/api.ts");
var _login = __mako_require__("src/services/ant-design-pro/login.ts");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _antdstyle = __mako_require__("node_modules/antd-style/es/index.js");
var _reactdom = __mako_require__("node_modules/react-dom/index.js");
var _defaultSettings = /*#__PURE__*/ _interop_require_default._(__mako_require__("config/defaultSettings.ts"));
var _layout = __mako_require__("node_modules/antd/es/layout/layout.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
var _s1 = $RefreshSig$();
var _s2 = $RefreshSig$();
const useStyles = (0, _antdstyle.createStyles)(({ token })=>{
    return {
        action: {
            marginLeft: '8px',
            color: 'rgba(0, 0, 0, 0.2)',
            fontSize: '24px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            transition: 'color 0.3s',
            '&:hover': {
                color: token.colorPrimaryActive
            }
        },
        lang: {
            width: 42,
            height: 42,
            lineHeight: '42px',
            position: 'fixed',
            right: 16,
            borderRadius: token.borderRadius,
            ':hover': {
                backgroundColor: token.colorBgTextHover
            }
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'auto',
            backgroundImage: "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
            backgroundSize: '100% 100%'
        }
    };
});
const ActionIcons = ()=>{
    _s();
    const { styles } = useStyles();
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.AlipayCircleOutlined, {
                className: styles.action
            }, "AlipayCircleOutlined", false, {
                fileName: "src/pages/User/Login/index.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.TaobaoCircleOutlined, {
                className: styles.action
            }, "TaobaoCircleOutlined", false, {
                fileName: "src/pages/User/Login/index.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.WeiboCircleOutlined, {
                className: styles.action
            }, "WeiboCircleOutlined", false, {
                fileName: "src/pages/User/Login/index.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(ActionIcons, "1BGFRu6BGAbhzJ8kKgs1GUjvI6w=", false, function() {
    return [
        useStyles
    ];
});
_c = ActionIcons;
const Lang = ()=>{
    _s1();
    const { styles } = useStyles();
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: styles.lang,
        "data-lang": true,
        children: _max.SelectLang && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.SelectLang, {}, void 0, false, {
            fileName: "src/pages/User/Login/index.tsx",
            lineNumber: 79,
            columnNumber: 22
        }, this)
    }, void 0, false, {
        fileName: "src/pages/User/Login/index.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
};
_s1(Lang, "1BGFRu6BGAbhzJ8kKgs1GUjvI6w=", false, function() {
    return [
        useStyles
    ];
});
_c1 = Lang;
const LoginMessage = ({ content })=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Alert, {
        style: {
            marginBottom: 24
        },
        message: content,
        type: "error",
        showIcon: true
    }, void 0, false, {
        fileName: "src/pages/User/Login/index.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
};
_c2 = LoginMessage;
const Login = ()=>{
    _s2();
    const [userLoginState, setUserLoginState] = (0, _react.useState)({});
    const [type, setType] = (0, _react.useState)('account');
    const { initialState, setInitialState } = (0, _max.useModel)('@@initialState');
    const { styles } = useStyles();
    const intl = (0, _max.useIntl)();
    const [api, contextHolder] = _antd.message.useMessage(); // 使用 useMessage 钩子
    const fetchUserInfo = async ()=>{
        var _initialState_fetchUserInfo;
        const userInfo = await (initialState === null || initialState === void 0 ? void 0 : (_initialState_fetchUserInfo = initialState.fetchUserInfo) === null || _initialState_fetchUserInfo === void 0 ? void 0 : _initialState_fetchUserInfo.call(initialState));
        if (userInfo) (0, _reactdom.flushSync)(()=>{
            setInitialState((s)=>({
                    ...s,
                    currentUser: userInfo
                }));
        });
    };
    const handleSubmit = async (values)=>{
        try {
            // 登录
            const msg = await (0, _api.login)({
                ...values,
                type
            });
            if (msg.status === 'ok') {
                const defaultLoginSuccessMessage = intl.formatMessage({
                    id: 'pages.login.success',
                    defaultMessage: '登录成功！'
                });
                api.success(defaultLoginSuccessMessage); // 使用 api.success
                await fetchUserInfo();
                const urlParams = new URL(window.location.href).searchParams;
                _max.history.push(urlParams.get('redirect') || '/');
                return;
            }
            console.log(msg);
            // 如果失败去设置用户错误信息
            setUserLoginState(msg);
        } catch (error) {
            const defaultLoginFailureMessage = intl.formatMessage({
                id: 'pages.login.failure',
                defaultMessage: '登录失败，请重试！'
            });
            console.log(error);
            api.error(defaultLoginFailureMessage); // 使用 api.error
        }
    };
    (0, _react.useEffect)(()=>{
        if (userLoginState.status === 'error') {
            const errorMessage = intl.formatMessage({
                id: 'pages.login.accountLogin.errorMessage',
                defaultMessage: '账户或密码错误(admin/ant.design)'
            });
            api.error(errorMessage);
        }
    }, [
        userLoginState,
        api,
        intl
    ]);
    const { status, type: loginType } = userLoginState;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: styles.container,
        children: [
            contextHolder,
            " ",
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Helmet, {
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("title", {
                    children: [
                        intl.formatMessage({
                            id: 'menu.login',
                            defaultMessage: '登录页'
                        }),
                        _defaultSettings.default.title && ` - ${_defaultSettings.default.title}`
                    ]
                }, void 0, true, {
                    fileName: "src/pages/User/Login/index.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/User/Login/index.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Lang, {}, void 0, false, {
                fileName: "src/pages/User/Login/index.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                style: {
                    flex: '1',
                    padding: '32px 0'
                },
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.LoginForm, {
                    contentStyle: {
                        minWidth: 280,
                        maxWidth: '75vw'
                    },
                    logo: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                        alt: "logo",
                        src: "/logo.svg"
                    }, void 0, false, {
                        fileName: "src/pages/User/Login/index.tsx",
                        lineNumber: 181,
                        columnNumber: 17
                    }, void 0),
                    title: "湖北天正建设工程咨询有限公司",
                    subTitle: intl.formatMessage({
                        id: 'pages.layouts.userLayout.title'
                    }),
                    initialValues: {
                        autoLogin: true
                    },
                    actions: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                            id: "pages.login.loginWith",
                            defaultMessage: "其他登录方式"
                        }, "loginWith", false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(ActionIcons, {}, "icons", false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, void 0)
                    ],
                    onFinish: async (values)=>{
                        await handleSubmit(values);
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tabs, {
                            activeKey: type,
                            onChange: setType,
                            centered: true,
                            items: [
                                {
                                    key: 'account',
                                    label: intl.formatMessage({
                                        id: 'pages.login.accountLogin.tab',
                                        defaultMessage: '账户密码登录'
                                    })
                                },
                                {
                                    key: 'mobile',
                                    label: intl.formatMessage({
                                        id: 'pages.login.phoneLogin.tab',
                                        defaultMessage: '手机号登录'
                                    })
                                }
                            ]
                        }, void 0, false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        status === 'error' && loginType === 'account' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(LoginMessage, {
                            content: intl.formatMessage({
                                id: 'pages.login.accountLogin.errorMessage',
                                defaultMessage: '账户或密码错误(admin/ant.design)'
                            })
                        }, void 0, false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this),
                        type === 'account' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                    name: "username",
                                    fieldProps: {
                                        size: 'large',
                                        prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.UserOutlined, {}, void 0, false, {
                                            fileName: "src/pages/User/Login/index.tsx",
                                            lineNumber: 235,
                                            columnNumber: 27
                                        }, void 0)
                                    },
                                    placeholder: intl.formatMessage({
                                        id: 'pages.login.username.placeholder',
                                        defaultMessage: '用户名: admin or user'
                                    }),
                                    rules: [
                                        {
                                            required: true,
                                            message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                id: "pages.login.username.required",
                                                defaultMessage: "请输入用户名!"
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 245,
                                                columnNumber: 23
                                            }, void 0)
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "src/pages/User/Login/index.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText.Password, {
                                    name: "password",
                                    fieldProps: {
                                        size: 'large',
                                        prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LockOutlined, {}, void 0, false, {
                                            fileName: "src/pages/User/Login/index.tsx",
                                            lineNumber: 257,
                                            columnNumber: 27
                                        }, void 0)
                                    },
                                    placeholder: intl.formatMessage({
                                        id: 'pages.login.password.placeholder',
                                        defaultMessage: '密码: ant.design'
                                    }),
                                    rules: [
                                        {
                                            required: true,
                                            message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                id: "pages.login.password.required",
                                                defaultMessage: "请输入密码！"
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 267,
                                                columnNumber: 23
                                            }, void 0)
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "src/pages/User/Login/index.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        status === 'error' && loginType === 'mobile' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(LoginMessage, {
                            content: "验证码错误"
                        }, void 0, false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 278,
                            columnNumber: 60
                        }, this),
                        type === 'mobile' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                    fieldProps: {
                                        size: 'large',
                                        prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.MobileOutlined, {}, void 0, false, {
                                            fileName: "src/pages/User/Login/index.tsx",
                                            lineNumber: 284,
                                            columnNumber: 27
                                        }, void 0)
                                    },
                                    name: "mobile",
                                    placeholder: intl.formatMessage({
                                        id: 'pages.login.phoneNumber.placeholder',
                                        defaultMessage: '手机号'
                                    }),
                                    rules: [
                                        {
                                            required: true,
                                            message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                id: "pages.login.phoneNumber.required",
                                                defaultMessage: "请输入手机号！"
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 295,
                                                columnNumber: 23
                                            }, void 0)
                                        },
                                        {
                                            pattern: /^1\d{10}$/,
                                            message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                id: "pages.login.phoneNumber.invalid",
                                                defaultMessage: "手机号格式错误！"
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 304,
                                                columnNumber: 23
                                            }, void 0)
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "src/pages/User/Login/index.tsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormCaptcha, {
                                    fieldProps: {
                                        size: 'large',
                                        prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LockOutlined, {}, void 0, false, {
                                            fileName: "src/pages/User/Login/index.tsx",
                                            lineNumber: 315,
                                            columnNumber: 27
                                        }, void 0)
                                    },
                                    captchaProps: {
                                        size: 'large'
                                    },
                                    placeholder: intl.formatMessage({
                                        id: 'pages.login.captcha.placeholder',
                                        defaultMessage: '请输入验证码'
                                    }),
                                    captchaTextRender: (timing, count)=>{
                                        if (timing) return `${count} ${intl.formatMessage({
                                            id: 'pages.getCaptchaSecondText',
                                            defaultMessage: '获取验证码'
                                        })}`;
                                        return intl.formatMessage({
                                            id: 'pages.login.phoneLogin.getVerificationCode',
                                            defaultMessage: '获取验证码'
                                        });
                                    },
                                    name: "captcha",
                                    rules: [
                                        {
                                            required: true,
                                            message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                id: "pages.login.captcha.required",
                                                defaultMessage: "请输入验证码！"
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 341,
                                                columnNumber: 23
                                            }, void 0)
                                        }
                                    ],
                                    onGetCaptcha: async (phone)=>{
                                        const result = await (0, _login.getFakeCaptcha)({
                                            phone
                                        });
                                        if (!result) return;
                                        _antd.message.success('获取验证码成功！验证码为：1234');
                                    }
                                }, void 0, false, {
                                    fileName: "src/pages/User/Login/index.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                marginBottom: 24
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormCheckbox, {
                                    noStyle: true,
                                    name: "autoLogin",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                        id: "pages.login.rememberMe",
                                        defaultMessage: "自动登录"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/User/Login/index.tsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                    style: {
                                        float: 'right'
                                    },
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                        id: "pages.login.forgotPassword",
                                        defaultMessage: "忘记密码"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/User/Login/index.tsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 360,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/User/Login/index.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/User/Login/index.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_layout.Footer, {}, void 0, false, {
                fileName: "src/pages/User/Login/index.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/User/Login/index.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
};
_s2(Login, "5tXjsqXxXA2gbuk+ylEH4gB7BP0=", false, function() {
    return [
        _max.useModel,
        useStyles,
        _max.useIntl,
        _antd.message.useMessage
    ];
});
_c3 = Login;
var _default = Login;
var _c;
var _c1;
var _c2;
var _c3;
$RefreshReg$(_c, "ActionIcons");
$RefreshReg$(_c1, "Lang");
$RefreshReg$(_c2, "LoginMessage");
$RefreshReg$(_c3, "Login");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/services/ant-design-pro/login.ts": function (module, exports, __mako_require__){
// @ts-ignore
/* eslint-disable */ "use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "getFakeCaptcha", {
    enumerable: true,
    get: function() {
        return getFakeCaptcha;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _max = __mako_require__("src/.umi/exports.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
async function getFakeCaptcha(params, options) {
    return (0, _max.request)('/api/login/captcha', {
        method: 'GET',
        params: {
            ...params
        },
        ...options || {}
    });
}
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
 }]);
//# sourceMappingURL=p__User__Login__index-async.js.map