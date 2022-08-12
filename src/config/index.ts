const FILE_URL = import.meta.env.NODE_ENV === 'development' ? 'http://192.168.2.118:5070' : 'http://file.auv666.com';

module.exports = {
  // 文件url
  FILE_URL,
  FILE_UPLOAD: `/file/upLoad?u=2&ft=1`,
  // 图片url
  IMG_URL: `/file/downLoad?u=1&ft=8&fid=`,
  // 高清图片url
  HIGH_IMG_URL: `/file/downLoad?u=1&ft=1&fid=`,
  // 文件下载
  FILE_DOWNLOAD: `/file/downLoad?u=2&ft=7&fid=`,
};
