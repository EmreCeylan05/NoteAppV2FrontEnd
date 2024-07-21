# React / Not Uygulaması için Front End v2

Bu proje, basit bir tasarımla not ekleme, düzenleme, silme ve arama özelliklerine sahip bir React front-end yazılımıdır.

## Özellikler
- **Not Ekleme:** Yeni notlar eklenebilir.
- **Not Düzenleme:** Mevcut notlar üzerinde değişiklik yapabilir.
- **Not Silme:** Notlar silebilir.
- **Not Arama:** Notlar arasında arama yaparak istedikleri notu hızlıca bulabilirler.
- **Not Kilitleme:** Notlar kullanıcı isteğine göre şifreyle kilitlenebilir.
- **Not Sıralama:** Notlar arasında önem sırası 1 ile 3 olacak şekilde kullanıcılar istedikleri önem sırasını notlarına verebilirler.

## Kurulum
Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:
1. **Depoyu Klonlayın:**
   ```bash
   git clone https://github.com/EmreCeylan05/noteAppV2FrontEnd.git
   cd noteAppFrontEnd
2. **Back-end için aşağıdaki depoyu klonlayın**
    ```bash
    git clone https://github.com/EmreCeylan05/noteAppBackEnd.git
3. **Veritabanı için RethinkDB kullanın**
   - Veri tabanı için local ağınızda RethinkDB programını çalıştırınız.
   - `notes` adında bir tablo oluşturun.
   - Bu tabloya ikincil anahtar olarak `title`,`content`,`priority`,`password`,`owner`,`lockStatus` anahtarlarını ekleyin.
   - `users` adında bir tablo oluşturun.
   - Bu tabloya ikincil anahtar olarak `password` ve `username` anahtarlarını ekleyin.
4. **Sunucu için bağımlılıkları kurun ve ayağa kaldırın**
    ```bash
    cd noteAppBackEnd
    npm install
    node index.js
5. **Bağımlılıkları kurun**
    ```bash
    cd noteAppFrontEnd
    npm install
6. **Not uygulamasını çalıştırın**
    ```bash
    cd noteAppV2FrontEnd
    npm start