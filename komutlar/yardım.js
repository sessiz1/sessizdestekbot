const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `h!banned = Dene ve Gör! \nh!avatarım = Avatarınınızı Gösterir. \nh!herkesebendençay = Herkese Çay Alırsınız. \nh!koş = Koşarsınız.\nh!çayiç = Çay İçersiniz. \nh!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nh!çayaşekerat = Çaya Şeker Atarsınız. \nh!yumruh-at = Yumruk Atarsınız. \nh!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nh!sunucuresmi = BOT Sunucunun Resmini Atar. \nh!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nh!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Yetkilisi Komutlar**", `h!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nh!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nh!unban = İstediğiniz Kişinin Yasağını Açar. \nh!sustur = İstediğiniz Kişiyi Susturur. \nh!oylama = Oylama Açar. \nh!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Ana Komutlar**", "h!yardım = BOT Komutlarını Atar. \nh!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nh!ping = BOT Gecikme Süresini Söyler. \nh!davet = BOT Davet Linkini Atar. \nh!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **FK | DS Y. Berkan Albayrak** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
