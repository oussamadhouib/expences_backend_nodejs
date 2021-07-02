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
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const fs = require('fs');
const sharp = require("sharp");
let MediaService = class MediaService {
    constructor(mediaModel) {
        this.mediaModel = mediaModel;
    }
    async createMedia(medias) {
        let list = [
            { size: 128, dest: 'Small' },
            { size: 256, dest: 'Medium' },
            { size: 512, dest: 'Large' },
        ];
        let createdMedias = [];
        for (const media of medias) {
            const newMedia = await new this.mediaModel(Object.assign({}, media));
            await newMedia.save();
            createdMedias.push(newMedia);
            list.map((i) => {
                const SmallImage = sharp(`uploads/${media.filename}`)
                    .rotate()
                    .resize(i.size)
                    .jpeg({ mozjpeg: true })
                    .toFile(`uploads/${i.dest}__${media.filename}`)
                    .then((data) => {
                    console.log(data);
                })
                    .catch((err) => {
                    console.log(err);
                });
            });
        }
        return createdMedias;
    }
    async checkMediasExistence(mediaIds) {
        for (const mediaId of mediaIds) {
            const mediaExist = await this.mediaModel.findById(mediaId);
            if (!mediaExist) {
                throw new common_1.NotFoundException(`media ${mediaId} does not exist!`);
            }
        }
        return true;
    }
    async removeMediaById(mediaId) {
        try {
            const mediaTodelete = await this.mediaModel.findOne({ _id: mediaId });
            if (fs.existsSync(`./uploads/${mediaTodelete.filename}`)) {
                fs.unlinkSync(`./uploads/${mediaTodelete.filename}`);
                return await this.mediaModel.findByIdAndRemove(mediaTodelete._id);
            }
            else {
                return {
                    success: false,
                    message: `file: {originalName: ${mediaTodelete.originalname}, id: ${mediaTodelete.id}} does not exist!`,
                };
            }
        }
        catch (err) {
            return { err: 'Image not found' };
        }
    }
};
MediaService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Media')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MediaService);
exports.MediaService = MediaService;
//# sourceMappingURL=media.service.js.map