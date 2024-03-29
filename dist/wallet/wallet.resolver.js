"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const wallet_service_1 = require("./wallet.service");
const wallet_entity_1 = require("./entities/wallet.entity");
const create_wallet_input_1 = require("./dto/create-wallet.input");
const update_wallet_input_1 = require("./dto/update-wallet.input");
let WalletResolver = class WalletResolver {
    constructor(walletService) {
        this.walletService = walletService;
    }
    createWallet(createWalletInput) {
        return this.walletService.create(createWalletInput);
    }
    findAll() {
        return this.walletService.findAll();
    }
    findOne(id) {
        return this.walletService.findOne(id);
    }
    updateWallet(updateWalletInput) {
        return this.walletService.update(updateWalletInput.id, updateWalletInput);
    }
    removeWallet(id) {
        return this.walletService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => wallet_entity_1.Wallet),
    __param(0, graphql_1.Args('createWalletInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wallet_input_1.CreateWalletInput]),
    __metadata("design:returntype", void 0)
], WalletResolver.prototype, "createWallet", null);
__decorate([
    graphql_1.Query(() => [wallet_entity_1.Wallet], { name: 'wallet' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WalletResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => wallet_entity_1.Wallet, { name: 'wallet' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WalletResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => wallet_entity_1.Wallet),
    __param(0, graphql_1.Args('updateWalletInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_wallet_input_1.UpdateWalletInput]),
    __metadata("design:returntype", void 0)
], WalletResolver.prototype, "updateWallet", null);
__decorate([
    graphql_1.Mutation(() => wallet_entity_1.Wallet),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WalletResolver.prototype, "removeWallet", null);
WalletResolver = __decorate([
    graphql_1.Resolver(() => wallet_entity_1.Wallet),
    __metadata("design:paramtypes", [wallet_service_1.WalletService])
], WalletResolver);
exports.WalletResolver = WalletResolver;
//# sourceMappingURL=wallet.resolver.js.map