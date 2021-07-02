"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenceModule = void 0;
const common_1 = require("@nestjs/common");
const expence_service_1 = require("./expence.service");
const expence_resolver_1 = require("./expence.resolver");
const mongoose_1 = require("@nestjs/mongoose");
const expence_schema_1 = require("./schema/expence.schema");
let ExpenceModule = class ExpenceModule {
};
ExpenceModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Expence', schema: expence_schema_1.ExpenceSchema }]),
        ],
        providers: [expence_resolver_1.ExpenceResolver, expence_service_1.ExpenceService]
    })
], ExpenceModule);
exports.ExpenceModule = ExpenceModule;
//# sourceMappingURL=expence.module.js.map