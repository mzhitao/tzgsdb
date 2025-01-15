((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__Employee__index'],
{ "src/pages/Employee/index.tsx": function (module, exports, __mako_require__){
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
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const EmployeeList = ()=>{
    _s();
    const [data, setData] = (0, _react.useState)([]);
    const [loading, setLoading] = (0, _react.useState)(true);
    // 获取员工数据
    (0, _react.useEffect)(()=>{
        const fetchEmployees = async ()=>{
            try {
                const response = await fetch('http://localhost:3000/api/employees');
                const result = await response.json();
                console.log(result);
                setData(result.employees);
            } catch (error) {
                console.error('Error fetching employees:', error);
            } finally{
                setLoading(false);
            }
        };
        fetchEmployees();
    }, []);
    // 定义列的配置，只包含指定字段
    const columns = [
        {
            title: '用户名',
            dataIndex: 'username',
            valueType: 'text'
        },
        {
            title: '级别',
            dataIndex: 'level',
            valueType: 'text'
        },
        {
            title: '电话',
            dataIndex: 'phone',
            valueType: 'text'
        },
        {
            title: '部门',
            dataIndex: 'partment',
            valueType: 'text'
        }
    ];
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.PageContainer, {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProTable, {
            columns: columns,
            dataSource: data,
            loading: loading,
            rowKey: "id",
            search: false,
            pagination: {
                pageSize: 10
            },
            options: {
                density: true,
                fullScreen: true,
                reload: true
            }
        }, void 0, false, {
            fileName: "src/pages/Employee/index.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Employee/index.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
};
_s(EmployeeList, "YP7e7Smzxlgf2d3MqLcgRZjo83U=");
_c = EmployeeList;
var _default = EmployeeList;
var _c;
$RefreshReg$(_c, "EmployeeList");
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
//# sourceMappingURL=p__Employee__index-async.js.map