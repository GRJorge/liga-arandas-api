import { diskStorage } from 'multer';

export const imageStorage = {
  storage: diskStorage({
    destination: './uploads',
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
};

export const shieldStorage = {
  storage: diskStorage({
    destination: './uploads/shields',
    filename(req, file, callback) {
      callback(null, `shield-${Date.now()}-${file.originalname}`);
    },
  }),
};
