import { HttpStatus } from '@nestjs/common';
import { CreateMediaDto } from './dto/create.media';
import { MediaService } from './media.service';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    uploadImages(medias: CreateMediaDto[]): Promise<any>;
    getImage(image: any, res: any): {
        status: HttpStatus;
        data: any;
    };
}
