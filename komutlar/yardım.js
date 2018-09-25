const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Kişisel komutlar | Not:Komutlar . ile baslar
        • Eglence Komutlari • 		
• .banned           :: Dene ve Gör!
• .avatarım         :: Avatarınınızı Gösterir. 	
• .herkesebendençay :: Herkese Çay Alırsınız. 
• .koş              :: Koşarsınız.
• .çayiç            :: Çay İçersiniz. 
• .balıktut         :: Balık Tutarsınız 
• .çayaşekerat      :: Çaya Şeker Atarsınız. 
• .kaçcm            :: Malafat Ölçer
• .çekiç            :: İstediğiniz Kişiye Çekiç Atarsınız.
• .yumruh-at        :: Yumruk Atarsınız. 
• .yaz              :: Bota İstediğiniz Şeyi Yazdırırsınız. 
• .sunucuresmi      :: BOT Sunucunun Resmini Atar. 
• .sunucubilgi      :: BOT Sunucu Hakkında Bilgi Verir. 
• .kullanıcıbilgim  :: Sizin Hakkınızda Bilgi Verir.
        • Yetkilisi Komutlar•		
• .ban              :: İstediğiniz Kişiyi Sunucudan Banlar. 
• .kick             :: İstediğiniz Kişiyi Sunucudan Atar. 
• .unban            :: İstediğiniz Kişinin Yasağını Açar. 
• .sunucuicon       :: Sunucu İcon Gösterir.
• .sunucubilgi      :: Sunucu Bilgisini Gosterir.
• .sustur           :: İstediğiniz Kişiyi Susturur. 
• .oylama           :: Oylama Açar. 
• .duyuru           :: Güzel Bir Duyuru Görünümü Sağlar.
• .otorolbilgi      :: Otorol Hakkında Bilgi Verir
• .öneri            :: BOT Destek Sunucuna Öneriniz Gider
		• Ana Komutlar • 		
• .yardım           :: BOT Komutlarını Atar. 
• .bilgi            :: BOT Kendisi Hakkında Bilgi Verir. 
• .ping             :: BOT Gecikme Süresini Söyler. 
• .davet            :: BOT Davet Linkini Atar. 
• .istatistik       :: BOT İstatistiklerini Atar.
    Sayfa 1 / 1 | Yapımcım: ! 👑✶Utku.xxl✶👑#6337`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yardım'
};
