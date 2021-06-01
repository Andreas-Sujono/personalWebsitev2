# build in local and replace the new build files to the cloud server
yarn
npm run build
scp  -i /Users/andreassujono/Desktop/FOLDER/job/andreas-server/id_rsa -r $(pwd)/build   root@165.22.0.89:/var/www/personalProject/andreas-website