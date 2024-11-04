const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254705470210";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_44_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NixcbiAgICAgICAgODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc1LFxuICAgICAgICA1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDg2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTczLFxuICAgICAgICA2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzLFxuICAgICAgICAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1LFxuICAgICAgICA0NixcbiAgICAgICAgMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0LFxuICAgICAgICA5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdXTFB2SHRlcytva2VIZWtudXh5Zm44ckpFbDhXSHR0RVhkcUQ4NEhJZWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhMMm1vOFZSUjhPQi1oRHlkeFJKSHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDM1NmNjYzYtMjBlNS00ZmI1LWI3NWQtNjQzMjkxZjc1YjVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgMTMxLFxuICAgICAgMjUyLFxuICAgICAgMzYsXG4gICAgICA2NixcbiAgICAgIDQ2LFxuICAgICAgMTEyLFxuICAgICAgMjEyLFxuICAgICAgMTQwLFxuICAgICAgMTQxLFxuICAgICAgMTQ4LFxuICAgICAgMTYsXG4gICAgICAyNTUsXG4gICAgICAyMTYsXG4gICAgICAyNDYsXG4gICAgICAyNDksXG4gICAgICAxNzUsXG4gICAgICAxNzcsXG4gICAgICAxMzgsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgMTA3LFxuICAgICAgMjM1LFxuICAgICAgMTk1LFxuICAgICAgMjUxLFxuICAgICAgMTY5LFxuICAgICAgNjcsXG4gICAgICA0NCxcbiAgICAgIDUxLFxuICAgICAgMjA2LFxuICAgICAgNDYsXG4gICAgICAxNDAsXG4gICAgICAyOCxcbiAgICAgIDIzNyxcbiAgICAgIDY2LFxuICAgICAgOTcsXG4gICAgICAxNjIsXG4gICAgICA1OSxcbiAgICAgIDkyLFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZQOEpRQ0VQaVNvcmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlK29ablV1aGo5TWYwblJhMG9SY21GS2xLV2dpRkZCY1l1MlM5eEsza2xZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInU1eDRwbzV5Z2N6MDVmanNsRnc4U0ZLMkRyZ2ZDRVRvTGFIUU10Wjhjd1AySk1QWWcvKzROdW5CaDNmNnRXS3pwZ2xSRjRsajluZVdaaitmZURxaUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkEzUVBWd29IOVBNc0lwYWM4eGQ1RzhFRjFDRVVJRlFhbUZMRmJCWUxuNDlEL3BZOEZYaWsrb3Jic3NYY1pmWmYxeUUyL3N6M3VUWHN2aUtGVFhlYmh3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA1NDcwMjEwOjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTkxMjQzMjcyMzU3ODg6NjdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDU0NzAyMTA6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNzA5ODg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0thXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLS2EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDSnNRa2NFUTYzaFZWS1hvTDdZOEF2RTBvUXorOXF5SXNZNDNXNmpuR01BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU4MDY1OTA3OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNzA5ODkwMTMxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "XENON-XMD",
  ownername:process.env.OWNER_NAME|| "XENON-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
