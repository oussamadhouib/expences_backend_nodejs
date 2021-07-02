"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currency = void 0;
const graphql_1 = require("@nestjs/graphql");
var currency;
(function (currency) {
    currency["TND"] = "TND";
    currency["AUD"] = "AUD";
    currency["USD"] = "USD";
})(currency = exports.currency || (exports.currency = {}));
graphql_1.registerEnumType(currency, {
    name: 'currency',
});
//# sourceMappingURL=types.js.map