"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.FundFilter = exports.PostFormData = exports.getLatestArticle = exports.getAMpViewedFunds = exports.getAmpFund = exports.getExcel = exports.getLatestNotice = exports.getSingleFund = exports.getNotice = exports.getArticle = exports.getNoticeList = exports.getArticleList = exports.getAmpFunds = exports.getFundPerformance = exports.getFourFundPerformance = exports.getFourFundHistory = exports.getFourFundDaily = exports.getFourFundIncome = exports.getIncomeDistribution = exports.getFundHistory = exports.getDailyPrice = exports.getTopFund = exports.API_Call = exports.API_ENDPOINT = void 0;
var axios_1 = require("axios");
exports.API_ENDPOINT = {
    TOPFUNDS: "https://api.regovitservices.com/v1/api/app/homepagefund/topfunds",
    DAILYPRICE: "https://api.regovitservices.com/v1/api/app/homepagefund/dailyfunds",
    FUNDSHISTORY: "https://api.regovitservices.com/v1/api/app/homepagefund/fundshistory",
    INCOMEDISTRIBUTION: "https://api.regovitservices.com/v1/api/app/homepagefund/incomedistribution",
    FUNDPERFORMANCE: "https://api.regovitservices.com/v1/api/app/homepagefund/fundsperformance",
    AMPFUNDS: "https://api.regovitservices.com/v1/api/app/homepagefund/ampfunds",
    ARTICLELIST: "https://api.regovitservices.com/v1/api/app/content/list",
    NOTICELIST: "https://api.regovitservices.com/v1/api/app/content/notices",
    ARTICLE: "https://api.regovitservices.com/v1/api/app/content/articles",
    SINGLEFUND: "https://api.regovitservices.com/v1/api/app/fund/singlefundinfo",
    FORFUNDSINCOME: "https://api.regovitservices.com/v1/api/app/fund/incomedistribution",
    FORFUNDSPERFORMANCE: "https://api.regovitservices.com/v1/api/app/fund/fundperformance",
    FORFUNDSDAILYPRICE: "https://api.regovitservices.com/v1/api/app/fund/dailyfunds",
    FORFUNDSHISTORY: "https://api.regovitservices.com/v1/api/app/fund/historyfunds",
    LATESTNOTICES: "https://api.regovitservices.com/v1/api/app/content/latestNotices",
    AMPFUND: "https://api.regovitservices.com/v1/api/app/fund/ampfunds",
    AMPViewed: "https://api.regovitservices.com/v1/api/app/fund/ampfundsmostviewed",
    RelatedArticle: "https://api.regovitservices.com/v1/api/app/content/relatedarticles",
    form: "https://api.regovitservices.com/v1/api/app/form/save",
    EXCEL: "https://api.regovitservices.com/v1/api/app/fund/downloadincomedist",
    fundFilter: "https://api.regovitservices.com/v1/api/app/fund/dailyfunds/filter"
};
var API_Call = function (url, data, options) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1["default"].post(url, data, options)];
            case 1:
                response = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                response = null;
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/, response];
        }
    });
}); };
exports.API_Call = API_Call;
var getTopFund = function (_a) {
    var data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.TOPFUNDS, data)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
exports.getTopFund = getTopFund;
var getDailyPrice = function (_a) {
    var data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.DAILYPRICE, data)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
exports.getDailyPrice = getDailyPrice;
var getFundHistory = function (_a) {
    var data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.FUNDSHISTORY, data)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
exports.getFundHistory = getFundHistory;
var getIncomeDistribution = function (_a) {
    var data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.INCOMEDISTRIBUTION, data)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
exports.getIncomeDistribution = getIncomeDistribution;
var getFourFundIncome = function (_a) {
    var data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.FORFUNDSINCOME, data)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
exports.getFourFundIncome = getFourFundIncome;
var getFourFundDaily = function (_a) {
    var data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.FORFUNDSDAILYPRICE, data)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
exports.getFourFundDaily = getFourFundDaily;
var getFourFundHistory = function (_a) {
    var data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.FORFUNDSHISTORY, data)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
exports.getFourFundHistory = getFourFundHistory;
var getFourFundPerformance = function (_a) {
    var data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.FORFUNDSPERFORMANCE, data)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
exports.getFourFundPerformance = getFourFundPerformance;
var getFundPerformance = function (_a) {
    var data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.FUNDPERFORMANCE, data)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
exports.getFundPerformance = getFundPerformance;
var getAmpFunds = function (_a) {
    var data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.AMPFUNDS, data)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
exports.getAmpFunds = getAmpFunds;
var getArticleList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.ARTICLELIST, __assign({}, data))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getArticleList = getArticleList;
var getNoticeList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.ARTICLELIST, __assign({ type: 2 }, data))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getNoticeList = getNoticeList;
var getArticle = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.ARTICLE, { type: 1, articleId: id })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getArticle = getArticle;
var getNotice = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.NOTICELIST, { type: 2, articleId: id })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getNotice = getNotice;
var getSingleFund = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.SINGLEFUND, { fundId: id })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getSingleFund = getSingleFund;
var getLatestNotice = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.LATESTNOTICES, { articleId: id })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getLatestNotice = getLatestNotice;
var getExcel = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.EXCEL, { fundId: id }, {
                    responseType: "blob"
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getExcel = getExcel;
var getAmpFund = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.AMPFUND, {})];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getAmpFund = getAmpFund;
var getAMpViewedFunds = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.AMPViewed, { fundId: id })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getAMpViewedFunds = getAMpViewedFunds;
var getLatestArticle = function (id, tag, type) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("data being send ::: " + JSON.stringify({ articleId: id, tag: tag[0], type: type ? type : 1 }));
                return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.RelatedArticle, {
                        articleId: id,
                        tag: tag[0],
                        type: type ? type : 1
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getLatestArticle = getLatestArticle;
var PostFormData = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.form, data)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.PostFormData = PostFormData;
var FundFilter = function (fundtype, investmentType, fundCategory) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.API_Call)(exports.API_ENDPOINT.fundFilter, {
                    fundType: fundtype,
                    investmentType: investmentType,
                    fundCategory: fundCategory
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.FundFilter = FundFilter;
