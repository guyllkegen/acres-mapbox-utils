/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const UglifyJS = require('uglify-js');
const filesystem = require('fs');

const getAllFilesFromFolder = (dir) => {
  let results = [];
  const allJs = [];

  filesystem.readdirSync(dir).forEach((file) => {
    // eslint-disable-next-line no-param-reassign
    file = `${dir}/${file}`;
    const stat = filesystem.statSync(file);

    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFilesFromFolder(file));
    } else results.push(file);
  });

  results.forEach((v) => {
    if (v.includes('__mock__')) return;

    if (v.includes('.js')) {
      allJs.push(v);
    }
  });
  return allJs;
};

const compress = () => {
  const fileList = getAllFilesFromFolder('./dist');

  fileList.forEach((filePath) => {
    const data = filesystem.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });

    const result = UglifyJS.minify(data);

    filesystem.writeFileSync(filePath, result.code);

    console.log('done', filePath);
  });
};

compress();
