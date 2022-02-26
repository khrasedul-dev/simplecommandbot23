const { Composer } = require('micro-bot')

const bot = new Composer()

bot.start(ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id , `This is command bot for groups`).catch((e)=>console.log(e))
})

bot.on('new_chat_members',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id , `Hello ${ctx.chat.id}, \nWelcome to Ready4player Multi-Metaverse Gaming `).catch((e)=>console.log(e))
})

bot.command('website',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id , `https://ready4player.io`).catch((e)=>console.log(e))
})

bot.command('whitepaper',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id , `https://ready4player.io/wp-content/uploads/2022/02/Ready4Player-Official-Whitepaper.pdf`).catch((e)=>console.log(e))
})

bot.command('report',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id , `Message does not set yet`).catch((e)=>console.log(e))
})

bot.command('chart',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id , `Message does not set yet`).catch((e)=>console.log(e))
})


module.exports = bot