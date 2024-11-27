
Perintah syncronisasi  menggunakan rsync
serba grosir
rsync -avh --progress  responsive-bottom-navigation-main/ serbagrosir@103.30.195.204:/var/www/html

azkamulia
cd Project/5.website/odoo mobile/azkamulia
rsync -avh --progress  ./ root@azkamulia.online:/var/www/web

Perintah copy menggunakan ssh
scp -r .\responsive-bottom-navigation-main\*.* serbagrosir@103.30.195.204:\var\www\html 
scp -r .\responsive-bottom-navigation-main\assets serbagrosir@103.30.195.204:\var\www\html 

cara update terbaru
rsync -avh --progress ../serba-grosir_nodejs/ serbagrosir@103.30.195.204:~/app
