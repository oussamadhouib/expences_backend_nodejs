import { Model } from 'mongoose';
import { CreateMediaDto } from './dto/create.media';
import { Media } from './interfaces/media.interface';
export declare class MediaService {
    private readonly mediaModel;
    constructor(mediaModel: Model<Media>);
    createMedia(medias: CreateMediaDto[]): Promise<any>;
    checkMediasExistence(mediaIds: string[]): Promise<any>;
    removeMediaById(mediaId: string): Promise<any>;
}
