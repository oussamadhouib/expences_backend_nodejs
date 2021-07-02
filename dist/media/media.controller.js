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
exports.MediaController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const media_service_1 = require("./media.service");
const path = require("path");
const multer_1 = require("multer");
const file_upload_utils_1 = require("../utils/file-upload.utils");
const fileFilter = (req, file, callback) => {
    let ext = path.extname(file.originalname);
    if (['.jpeg', '.bmp', '.png', '.jpg'].indexOf(ext) == -1) {
        req.fileValidationError = 'Invalid file type';
        return callback(new common_1.ConflictException(`Invalid file type ${ext}`), false);
    }
    return callback(null, true);
};
let MediaController = class MediaController {
    constructor(mediaService) {
        this.mediaService = mediaService;
    }
    async uploadImages(medias) {
        if (medias == undefined || (medias && medias.length == 0)) {
            throw new common_1.BadRequestException('files[] could not be undefined or empty');
        }
        const mediasCreated = await this.mediaService.createMedia(medias);
        return mediasCreated;
    }
    getImage(image, res) {
        const response = res.sendFile(image, { root: './uploads' });
        return {
            status: common_1.HttpStatus.OK,
            data: response,
        };
    }
};
__decorate([
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('files[]', 20, {
        storage: multer_1.diskStorage({
            destination: './uploads',
            filename: file_upload_utils_1.editFileName,
        }),
        fileFilter: fileFilter,
        limits: {
            fieldSize: 25 * 1024 * 1024,
        },
    })),
    __param(0, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], MediaController.prototype, "uploadImages", null);
__decorate([
    common_1.Get(':imagename'),
    __param(0, common_1.Param('imagename')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "getImage", null);
MediaController = __decorate([
    common_1.Controller('api/media'),
    __metadata("design:paramtypes", [media_service_1.MediaService])
], MediaController);
exports.MediaController = MediaController;
//# sourceMappingURL=media.controller.js.map