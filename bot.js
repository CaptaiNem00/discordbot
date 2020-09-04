const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = require('./ayarlar.json');
const ytdl = require('ytdl-core');

var fs = require('fs');
var commandlist = fs.readFileSync('./commandlist.txt','utf8');
var isReady = true;

client.on('ready', () => {
  console.log(`${client.user.tag} yargı dağıtmaya geldi!`);
});

client.on('message', msg => {
  const args = msg.content.split(" ");
  if (msg.content.toLowerCase() === 'ping') {
    msg.channel.send('Pong!');
  }
  if (msg.content.toLowerCase() === 'fatma sözer') {
    msg.reply('AŞKIMIN OĞLU');
  }
  if (msg.content.toLowerCase() === 'alperen ifşa') {
    msg.channel.send('hay allah elimden kaçtı',{files:["./images/alp.jpg"]});
  }
  if (msg.content.toLowerCase() === 'ortaparmak') {
    msg.channel.send('buyrun götüne sokarsın',{files:["./images/ortaparmak.jpg"]});
  }
  if (msg.content.toLowerCase() === 'yarakkafalı') {
    msg.channel.send({files:["./images/yarakkafalı.jpg"]});
  }
  if (msg.content.toLowerCase() === 'listerine') {
    msg.channel.send({files:["./images/listerine.jpg"]});
  }
  if (msg.content.toLowerCase() === 'mmm') {
    msg.channel.send('Mmmmm da mmmmm ne zaman dönersin ne zaman biterse şöyle devam mm çapında en çok okunan yerel ve bölgesel zayıflama ve kilo verme diyeti hakkında açıklama yaptı bu kadar çok şey kacirdin da knk değişen mm mda knk basliyor da knk basliyor ne zaman dönersin ne zaman biterse şöyle bir kişi eve cikiyoz da ne bileyim işte o anlar da ne edelum da bu kadar inmem da knk değişen bir kişi eve cikiyoz ne zaman dönersin ne kadar okursan ne zaman biterse cemaat ne zaman biterse cemaat ne zaman dönersin diye bı de bir yer var oraya gidiyom sınıf Türkçe etkinlik yok mu atiyoz da knk basliyor da ne bileyim ben bu sene daha sonra tekrar caliniyor da knk değişen bişey değil mi ayt da knk basliyor ne zaman biterse cemaat ne kadar eksik olan ne zaman dönersin diye bı sorun yok ama ben Ahmet bilgisayar ve Bilgisayar m da ne edelum ne zaman dönersin diye konuştu ben Ahmet bir yer gelirse gidecem da knk değişen bir kişi daha katılmak üzere bu kadar çok zor değil gene kazavnırım yani bu kadar inmem ne zaman biterse şöyle devam mm  mm',{files:["./images/mmm.jpg"]});
  }
  if (msg.content.toLowerCase() === 'ahmet ifşa') {
    msg.channel.send('hay allah elimden kaçtı',{files:["./images/ahmet ifşa.jpg"]});
  }
  if (msg.content.toLowerCase() === 'serhat ifşa') {
    msg.channel.send('hay allah elimden kaçtı',{files:["./images/serhat ifşa.jpg"]});
  }
  if (msg.content.toLowerCase() === 'emin ifşa') {
    msg.channel.send('hay allah elimden kaçtı',{files:["./images/emin ifşa.jpg"]});
  }
  if (msg.content.toLowerCase() === 'ahmet ifşa 2') {
    msg.channel.send('hay allah elimden kaçtı',{files:["./images/ahmet ifşa 2.jpg"]});
  }
  if (msg.content.toLowerCase() === 'ahmet ifşa 3') {
    msg.channel.send('hay allah elimden kaçtı',{files:["./images/ahmet ifşa 3.png"]});
  }
  if (msg.content.toLowerCase() === 'ahmet ifşa 4') {
    msg.channel.send('hay allah elimden kaçtı',{files:["./images/ahmet ifşa 4.jpg"]});
  }
  if (msg.content.toLowerCase() === 'ahmet ifşa 5') {
    msg.channel.send('hay allah elimden kaçtı',{files:["./images/ahmet ifşa 5.JPG"]});
  }
  if (msg.content.toLowerCase() === 'ahmet ifşa 6') {
    msg.channel.send('hay allah elimden kaçtı',{files:["./images/ahmet ifşa 6.JPG"]});
  }
  if (msg.content.toLowerCase() === 'ahmet ifşa 7') {
    msg.channel.send('hay allah elimden kaçtı',{files:["./images/ahmet ifşa 7.jpg"]});
  }
  if (msg.content.toLowerCase() === 'serhat ifşa 2') {
    msg.channel.send('hay allah elimden kaçtı',{files:["./images/serhat ifşa 2.jpeg"]});
  }
  if (msg.content.toLowerCase() === 'köz getir') {
    msg.channel.send('buyur',{files:["./images/köz.png"]});
  }
  if (msg.content.toLowerCase() === 'alperenin bebek hali') {
    msg.channel.send({files:["./images/alperen bebek.png"]});
  }
  if (msg.content.toLowerCase() === 'help') {
    msg.channel.send(commandlist);
  }
});
async function execute(message) {
  try{
  const args = message.content.split(" ");
  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel){
    return message.channel.send("ses komutlarını kullanabilmek için ses kanalında olmak gerekiyor");}

    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
      return message.channel.send("ses kanalına katılmak veya konuşmak için iznim yok");
    }
  }catch (error) {
    console.log(error);
    message.channel.send(error.message);
  }
}

client.on('message', async message => {
  const args = message.content.split(" ");
  const voiceChannel = message.member.voice.channel;
  if (message.content ==='yalan')
  {
    const args = message.content.split(" ");
    execute(message)
    try {
      var connection = await voiceChannel.join();
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.play("./sounds/yalan.mp3");
         dispatcher.setVolumeLogarithmic(5/5);
         dispatcher.on("finish", () => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));     
      }  
      catch (err) {
      console.log(err);
      return message.channel.send(err);
    } 
  }
  if (message.content ==='bruh')
  {
  const args = message.content.split(" ");
  execute(message)
    try {
      var connection = await voiceChannel.join();
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.play("./sounds/bruh.mp3");
         dispatcher.setVolumeLogarithmic(5/ 5);
         dispatcher.on("finish", () => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));     
      }  
      catch (err) {
      console.log(err);
      return message.channel.send(err);
    } 
  }
    if (message.content ==='nasıl siktim seni')
    {
    const args = message.content.split(" ");
    execute(message)
      try {
        var connection = await voiceChannel.join();
        voiceChannel.join().then(connection =>
        {
           const dispatcher = connection.play("./sounds/nasıl siktim ama.mp3");
           dispatcher.setVolumeLogarithmic(5/ 5);
           dispatcher.on("finish", () => {
             voiceChannel.leave();
             });
         }).catch(err => console.log(err));     
        }  
        catch (err) {
        console.log(err);
        return message.channel.send(err);
      } 
  }
  if (message.content ==='emin götten')
    {
    const args = message.content.split(" ");
    execute(message)
      try {
        var connection = await voiceChannel.join();
        voiceChannel.join().then(connection =>
        {
           const dispatcher = connection.play("./sounds/emin götten.opus");
           dispatcher.setVolumeLogarithmic(5/ 5);
           dispatcher.on("finish", () => {
             voiceChannel.leave();
             });
         }).catch(err => console.log(err));     
        }  
        catch (err) {
        console.log(err);
        return message.channel.send(err);
      } 
  }
  if (message.content ==='kalorifer kazanı')
    {
    const args = message.content.split(" ");
    execute(message)
      try {
        var connection = await voiceChannel.join();
        voiceChannel.join().then(connection =>
        {
           const dispatcher = connection.play("./sounds/kalorifer kazanı.opus");
           dispatcher.setVolumeLogarithmic(5/ 5);
           dispatcher.on("finish", () => {
             voiceChannel.leave();
             });
         }).catch(err => console.log(err));     
        }  
        catch (err) {
        console.log(err);
        return message.channel.send(err);
      } 
  }
  if (message.content ==='namaz')
  {
  const args = message.content.split(" ");
  execute(message)
    try {
      var connection = await voiceChannel.join();
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.play("./sounds/namaz.opus");
         dispatcher.setVolumeLogarithmic(5/ 5);
         dispatcher.on("finish", () => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));     
      }  
      catch (err) {
      console.log(err);
      return message.channel.send(err);
    } 
}
if (message.content ==='efendim yavrum')
  {
  const args = message.content.split(" ");
  execute(message)
    try {
      var connection = await voiceChannel.join();
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.play("./sounds/efendim yavrum.opus");
         dispatcher.setVolumeLogarithmic(5/ 5);
         dispatcher.on("finish", () => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));     
      }  
      catch (err) {
      console.log(err);
      return message.channel.send(err);
    } 
}
if (message.content ==='anasını pazarda put put')
  {
  const args = message.content.split(" ");
  execute(message)
    try {
      var connection = await voiceChannel.join();
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.play("./sounds/anasını pazarda put put.mp3");
         dispatcher.setVolumeLogarithmic(5/ 5);
         dispatcher.on("finish", () => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));     
      }  
      catch (err) {
      console.log(err);
      return message.channel.send(err);
    } 
}
if (message.content ==='ananın amındayım')
  {
  const args = message.content.split(" ");
  execute(message)
    try {
      var connection = await voiceChannel.join();
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.play("./sounds/ananın amındayım.opus");
         dispatcher.setVolumeLogarithmic(5/ 5);
         dispatcher.on("finish", () => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));     
      }  
      catch (err) {
      console.log(err);
      return message.channel.send(err);
    } 
}
if (message.content ==='telefon')
  {
  const args = message.content.split(" ");
  execute(message)
    try {
      var connection = await voiceChannel.join();
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.play("./sounds/telefon.opus");
         dispatcher.setVolumeLogarithmic(5/ 5);
         dispatcher.on("finish", () => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));     
      }  
      catch (err) {
      console.log(err);
      return message.channel.send(err);
    } 
}
if (message.content ==='sakso')
  {
  const args = message.content.split(" ");
  execute(message)
    try {
      var connection = await voiceChannel.join();
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.play("./sounds/sakso.opus");
         dispatcher.setVolumeLogarithmic(5/ 5);
         dispatcher.on("finish", () => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));     
      }  
      catch (err) {
      console.log(err);
      return message.channel.send(err);
    } 
}
if (message.content ==='aynen devam')
  {
  const args = message.content.split(" ");
  execute(message)
    try {
      var connection = await voiceChannel.join();
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.play("./sounds/aynen devam.mp3");
         dispatcher.setVolumeLogarithmic(5/ 5);
         dispatcher.on("finish", () => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));     
      }  
      catch (err) {
      console.log(err);
      return message.channel.send(err);
    } 
}
if (message.content ==='bruhh')
  {
  const args = message.content.split(" ");
  execute(message)
    try {
      var connection = await voiceChannel.join();
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.play("./sounds/bruhh.opus");
         dispatcher.setVolumeLogarithmic(5/ 5);
         dispatcher.on("finish", () => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));     
      }  
      catch (err) {
      console.log(err);
      return message.channel.send(err);
    } 
}
if (message.content ==='eminn')
  {
  const args = message.content.split(" ");
  execute(message)
    try {
      var connection = await voiceChannel.join();
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.play("./sounds/eminn.opus");
         dispatcher.setVolumeLogarithmic(5/ 5);
         dispatcher.on("finish", () => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));     
      }  
      catch (err) {
      console.log(err);
      return message.channel.send(err);
    } 
}  
if (message.content ==='ulan oç')
  {
  const args = message.content.split(" ");
  execute(message)
    try {
      var connection = await voiceChannel.join();
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.play("./sounds/ulan oç.opus");
         dispatcher.setVolumeLogarithmic(5/ 5);
         dispatcher.on("finish", () => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));     
      }  
      catch (err) {
      console.log(err);
      return message.channel.send(err);
    } 
}  
if (message.content ==='kusturmalı boşnak')
  {
  const args = message.content.split(" ");
  execute(message)
    try {
      var connection = await voiceChannel.join();
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.play("./sounds/kusturmalı boşnak.mp3");
         dispatcher.setVolumeLogarithmic(5/ 5);
         dispatcher.on("finish", () => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));     
      }  
      catch (err) {
      console.log(err);
      return message.channel.send(err);
    } 
}  
if (message.content ==='olur')
  {
  const args = message.content.split(" ");
  execute(message)
    try {
      var connection = await voiceChannel.join();
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.play("./sounds/olur.opus");
         dispatcher.setVolumeLogarithmic(5/ 5);
         dispatcher.on("finish", () => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));     
      }  
      catch (err) {
      console.log(err);
      return message.channel.send(err);
    } 
}  
if (message.content ==='ananı kör keşişler')
  {
  const args = message.content.split(" ");
  execute(message)
    try {
      var connection = await voiceChannel.join();
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.play("./sounds/ananı kör keşişler.opus");
         dispatcher.setVolumeLogarithmic(5/ 5);
         dispatcher.on("finish", () => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));     
      }  
      catch (err) {
      console.log(err);
      return message.channel.send(err);
    } 
}
if (message.content ==='ananı dişliyim')
{
const args = message.content.split(" ");
execute(message)
  try {
    var connection = await voiceChannel.join();
    voiceChannel.join().then(connection =>
    {
       const dispatcher = connection.play("./sounds/ananı dişliyim.opus");
       dispatcher.setVolumeLogarithmic(5/ 5);
       dispatcher.on("finish", () => {
         voiceChannel.leave();
         });
     }).catch(err => console.log(err));     
    }  
    catch (err) {
    console.log(err);
    return message.channel.send(err);
  } 
}
if (message.content ==='seni ciddiye bile almıyorum')
{
const args = message.content.split(" ");
execute(message)
  try {
    var connection = await voiceChannel.join();
    voiceChannel.join().then(connection =>
    {
       const dispatcher = connection.play("./sounds/seni ciddiye bile almıyorum.opus");
       dispatcher.setVolumeLogarithmic(5/ 5);
       dispatcher.on("finish", () => {
         voiceChannel.leave();
         });
     }).catch(err => console.log(err));     
    }  
    catch (err) {
    console.log(err);
    return message.channel.send(err);
  } 
}
if (message.content ==='emin sövme')
{
const args = message.content.split(" ");
execute(message)
  try {
    var connection = await voiceChannel.join();
    voiceChannel.join().then(connection =>
    {
       const dispatcher = connection.play("./sounds/emin sövme.opus");
       dispatcher.setVolumeLogarithmic(5/ 5);
       dispatcher.on("finish", () => {
         voiceChannel.leave();
         });
     }).catch(err => console.log(err));     
    }  
    catch (err) {
    console.log(err);
    return message.channel.send(err);
  } 
}
if (message.content ==='anana günaydın')
{
const args = message.content.split(" ");
execute(message)
  try {
    var connection = await voiceChannel.join();
    voiceChannel.join().then(connection =>
    {
       const dispatcher = connection.play("./sounds/anana günaydın.mp3");
       dispatcher.setVolumeLogarithmic(5/ 5);
       dispatcher.on("finish", () => {
         voiceChannel.leave();
         });
     }).catch(err => console.log(err));     
    }  
    catch (err) {
    console.log(err);
    return message.channel.send(err);
  } 
}
if (message.content ==='bırakın lan beni ibneler')
{
const args = message.content.split(" ");
  try {
    var connection = await voiceChannel.join();
    execute(message)
    voiceChannel.join().then(connection =>
    {
       const dispatcher = connection.play("./sounds/bırakın lan beni ibneler.mp3");
       dispatcher.setVolumeLogarithmic(5/ 5);
       dispatcher.on("finish", () => {
         voiceChannel.leave();
         });
     }).catch(err => console.log(err));     
    }  
    catch (err) {
    console.log(err);
    return message.channel.send(err);
  } 
}
if (message.content ==='ez bırçime')
{
const args = message.content.split(" ");
  try {
    var connection = await voiceChannel.join();
    execute(message)
    voiceChannel.join().then(connection =>
    {
       const dispatcher = connection.play("./sounds/ez bırçime.mp3");
       dispatcher.setVolumeLogarithmic(5/ 5);
       dispatcher.on("finish", () => {
         voiceChannel.leave();
         });
     }).catch(err => console.log(err));     
    }  
    catch (err) {
    console.log(err);
    return message.channel.send(err);
  } 
}
if (message.content ==='kanal d')
{
const args = message.content.split(" ");
  try {
    var connection = await voiceChannel.join();
    execute(message)
    voiceChannel.join().then(connection =>
    {
       const dispatcher = connection.play("./sounds/kanal d.mp3");
       dispatcher.setVolumeLogarithmic(5/ 5);
       dispatcher.on("finish", () => {
         voiceChannel.leave();
         });
     }).catch(err => console.log(err));     
    }  
    catch (err) {
    console.log(err);
    return message.channel.send(err);
  } 
}
if (message.content ==='midone sinane')
{
const args = message.content.split(" ");
  try {
    var connection = await voiceChannel.join();
    execute(message)
    voiceChannel.join().then(connection =>
    {
       const dispatcher = connection.play("./sounds/midone sinane.mp3");
       dispatcher.setVolumeLogarithmic(5/ 5);
       dispatcher.on("finish", () => {
         voiceChannel.leave();
         });
     }).catch(err => console.log(err));     
    }  
    catch (err) {
    console.log(err);
    return message.channel.send(err);
  } 
}
if (message.content ==='torigadi cinderi')
{
const args = message.content.split(" ");
  try {
    var connection = await voiceChannel.join();
    execute(message)
    voiceChannel.join().then(connection =>
    {
       const dispatcher = connection.play("./sounds/torigadi cinderi.mp3");
       dispatcher.setVolumeLogarithmic(5/ 5);
       dispatcher.on("finish", () => {
         voiceChannel.leave();
         });
     }).catch(err => console.log(err));     
    }  
    catch (err) {
    console.log(err);
    return message.channel.send(err);
  } 
}
if (message.content ==='adam')
{
const args = message.content.split(" ");
  try {
    var connection = await voiceChannel.join();
    execute(message)
    voiceChannel.join().then(connection =>
    {
       const dispatcher = connection.play("./sounds/adam.mp3");
       dispatcher.setVolumeLogarithmic(5/ 5);
       dispatcher.on("finish", () => {
         voiceChannel.leave();
         });
     }).catch(err => console.log(err));     
    }  
    catch (err) {
    console.log(err);
    return message.channel.send(err);
  } 
}
if (message.content ==='yarra')
{
const args = message.content.split(" ");
  try {
    var connection = await voiceChannel.join();
    execute(message)
    voiceChannel.join().then(connection =>
    {
       const dispatcher = connection.play("./sounds/yarra.mp3");
       dispatcher.setVolumeLogarithmic(5/ 5);
       dispatcher.on("finish", () => {
         voiceChannel.leave();
         });
     }).catch(err => console.log(err));     
    }  
    catch (err) {
    console.log(err);
    return message.channel.send(err);
  } 
}
if (message.content ==='yarrak')
{
const args = message.content.split(" ");
  try {
    var connection = await voiceChannel.join();
    execute(message)
    voiceChannel.join().then(connection =>
    {
       const dispatcher = connection.play("./sounds/yarrak.mp3");
       dispatcher.setVolumeLogarithmic(5/ 5);
       dispatcher.on("finish", () => {
         voiceChannel.leave();
         });
     }).catch(err => console.log(err));     
    }  
    catch (err) {
    console.log(err);
    return message.channel.send(err);
  } 
}
if (message.content ==='your mom pat pat')
{
const args = message.content.split(" ");
  try {
    var connection = await voiceChannel.join();
    execute(message)
    voiceChannel.join().then(connection =>
    {
       const dispatcher = connection.play("./sounds/your mom pat pat.mp3");
       dispatcher.setVolumeLogarithmic(5/ 5);
       dispatcher.on("finish", () => {
         voiceChannel.leave();
         });
     }).catch(err => console.log(err));     
    }  
    catch (err) {
    console.log(err);
    return message.channel.send(err);
  } 
}
if (message.content ==='gerizekalığğ')
{
const args = message.content.split(" ");
  try {
    var connection = await voiceChannel.join();
    execute(message)
    voiceChannel.join().then(connection =>
    {
       const dispatcher = connection.play("./sounds/gerizekalığğ.m4a");
       dispatcher.setVolumeLogarithmic(5/ 5);
       dispatcher.on("finish", () => {
         voiceChannel.leave();
         });
     }).catch(err => console.log(err));     
    }  
    catch (err) {
    console.log(err);
    return message.channel.send(err);
  } 
}
});


client.login(process.env.token);
