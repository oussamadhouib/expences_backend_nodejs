import {
  BadRequestException,
  ConflictException,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

import { CreateMediaDto } from './dto/create.media';
import { MediaService } from './media.service';
import * as path from 'path';
import { diskStorage } from 'multer';
import { editFileName } from '../utils/file-upload.utils';


const fileFilter = (req, file, callback) => {
  let ext = path.extname(file.originalname);
  if (['.jpeg', '.bmp', '.png', '.jpg'].indexOf(ext) == -1) {
    req.fileValidationError = 'Invalid file type';
    return callback(new ConflictException(`Invalid file type ${ext}`), false);
  }
  return callback(null, true);
};


@Controller('api/media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) { }

  // @UseGuards(AuthGuard('jwt'))
  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('files[]', 20, {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
      fileFilter: fileFilter,
      limits: {
        fieldSize: 25 * 1024 * 1024,
      },
    }),
  )
  public async uploadImages(
    @UploadedFiles() medias: CreateMediaDto[],
  ): Promise<any> {
    if (medias == undefined || (medias && medias.length == 0)) {
      throw new BadRequestException('files[] could not be undefined or empty');
    }
    const mediasCreated = await this.mediaService.createMedia(medias);
    return mediasCreated;
  }

  @Get(':imagename')
  getImage(@Param('imagename') image, @Res() res) {
    const response = res.sendFile(image, { root: './uploads' });
    return {
      status: HttpStatus.OK,
      data: response,
    };
  }
}
