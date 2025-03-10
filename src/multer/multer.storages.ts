import { diskStorage } from 'multer';

export const imageStorage = {
  storage: diskStorage({
    destination: './uploads',
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
};
