const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Kişisel komutlar | Not:Komutlar vt! ile baslar
        • Eglence Komutlari		
• .banned           :: Dene Ve Gör.
• .avatarım	        :: Avatarınınızı Gösterir.	
• .herkesebendençay :: Herkese Çay Alırsınız.
• .koş              :: Koşarsınız.
• .çayiç            :: Çay İçersiniz.
• .çekiç            :: İstediğiniz Kişiye Çekiç Atarsınız.
        • Bilgi Komutlari		
• değişiklikler     :: Sunucuda Yapilan değişiklikleri gosterir.
• istatistik        :: Bot Istatistiligini Gosterir.
• kullanıcıbilgim   :: kullanıcı bilgini gosterir.
• sunucuicon        :: Sunucu İcon Gösterir.
• sunucubilgi       :: Sunucu Bilgisini Gosterir.
• yapimcim          :: Bot Yapimcisini Gosterir.
• davet             :: Davet Link Verir.
• sponsor           :: Sponsorlarimizi Gosterir.
		• Moderasyon Komutlari		
• anket :: Anket Acar		
• ban   :: İstediğiniz kişiyi sunucudan yasaklar.
• kick    :: İstediğiniz kişiyi sunucudan atar.
• sustur  :: İstediğiniz kişiyi susturur.
• temizle :: Mesajları siler.
• uyar    :: İstediğiniz kişiye uyarı verir.
        • Minecraft Komutlari	
• mcödül  :: Istediniz Yaziyi Minecraft Basarisina Dondurur.
        •  Genel	
• hastebin :: Yazdin Yaziyi hastebin cevirir.		
• ailemiz  :: Bot Kac Sunucuda Oldunu Gosterir.		
• randomşifre :: Kafadan Sifre Verir		
• komutlar :: Tüm komutları listeler.
• ping     :: Botun pingini gösterir.
• duyuru   :: Sunucunuzda duyuru yapmanızı sağlar.
• avatarım :: Avatarini Gosterir
    Sayfa 1 / 1 | Yapımcım: ! ๖̶̶̶ۣۣۜۜ͜ζ͜͡xChairs#4713`);
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
