"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const statusBarHeight1 = common_vendor.index.getSystemInfoSync().statusBarHeight || 20;
    const statusBarHeight = common_vendor.ref(statusBarHeight1);
    const list = common_vendor.ref([1, 2, 3, 4, 5]);
    let currentIndex = common_vendor.ref(0);
    const changeImage = (e) => {
      currentIndex.value = e.detail.current;
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (item, index, i0) => {
          return {};
        }),
        b: common_assets._imports_0$2,
        c: common_vendor.o(changeImage),
        d: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        e: statusBarHeight.value + "px",
        f: common_vendor.o(goBack),
        g: common_vendor.t(common_vendor.unref(currentIndex) + 1),
        h: common_vendor.t(list.value.length),
        i: statusBarHeight.value + "px",
        j: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        k: common_vendor.p({
          type: "info"
        }),
        l: common_vendor.p({
          type: "star"
        }),
        m: common_vendor.p({
          type: "download"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
