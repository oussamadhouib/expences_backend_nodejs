import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMediaDto } from './dto/create.media';
import { Media } from './interfaces/media.interface';
const fs = require('fs');
import * as sharp from 'sharp';

@Injectable()
export class MediaService {
  constructor(
    @InjectModel('Media') private readonly mediaModel: Model<Media>,
  ) {}

  public async createMedia(medias: CreateMediaDto[]): Promise<any> {
    let list = [
      { size: 128, dest: 'Small' },
      { size: 256, dest: 'Medium' },
      { size: 512, dest: 'Large' },
    ];

    let createdMedias = [];
    for (const media of medias) {
      const newMedia = await new this.mediaModel({ ...media });
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
  public async checkMediasExistence(mediaIds: string[]): Promise<any> {
    for (const mediaId of mediaIds) {
      const mediaExist = await this.mediaModel.findById(mediaId);
      if (!mediaExist) {
        throw new NotFoundException(`media ${mediaId} does not exist!`);
      }
    }
    return true;
  }

  public async removeMediaById(mediaId: string): Promise<any> {
    try {
      const mediaTodelete = await this.mediaModel.findOne({ _id: mediaId });
      if (fs.existsSync(`./uploads/${mediaTodelete.filename}`)) {
        fs.unlinkSync(`./uploads/${mediaTodelete.filename}`);
        return await this.mediaModel.findByIdAndRemove(mediaTodelete._id);
      } else {
        return {
          success: false,
          message: `file: {originalName: ${mediaTodelete.originalname}, id: ${mediaTodelete.id}} does not exist!`,
        };
      }
    } catch (err) {
      return { err: 'Image not found' };
    }
  }
}
