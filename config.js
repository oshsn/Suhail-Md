const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "940725020823";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_34_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjExLFxuICAgICAgICA0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUxLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMzksXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDYwLFxuICAgICAgICA2NixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNixcbiAgICAgICAgMjEwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDczLFxuICAgICAgICA3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2LFxuICAgICAgICAyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk3LFxuICAgICAgICA2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTczLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgOTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInh3VzBLV05lUThRWHlSNU5ZWjdqcXB5VXRQb1JBSjFzWHJzVnI1ZDN4NWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNPbnVkM1llVEs2bjllWGNSUkpRTWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2FkNWU2ZjktMmMyYS00MDc3LWEwZDUtOTUyMjNmZjkzMDUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgMjksXG4gICAgICA2OSxcbiAgICAgIDEzMSxcbiAgICAgIDE1MyxcbiAgICAgIDYsXG4gICAgICA5NyxcbiAgICAgIDUzLFxuICAgICAgMTY5LFxuICAgICAgMTcyLFxuICAgICAgNDEsXG4gICAgICAxNDgsXG4gICAgICAxODUsXG4gICAgICA4LFxuICAgICAgMTM3LFxuICAgICAgNjIsXG4gICAgICAxNzksXG4gICAgICAxMDQsXG4gICAgICAxNTgsXG4gICAgICA3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICAxNjksXG4gICAgICAyMTIsXG4gICAgICAxMzIsXG4gICAgICAyMzMsXG4gICAgICAxNzUsXG4gICAgICAzMyxcbiAgICAgIDE4OSxcbiAgICAgIDU2LFxuICAgICAgNTMsXG4gICAgICAxMzgsXG4gICAgICA3OCxcbiAgICAgIDc4LFxuICAgICAgMjM1LFxuICAgICAgMTI1LFxuICAgICAgMTY4LFxuICAgICAgNDUsXG4gICAgICAxMjEsXG4gICAgICAyMTIsXG4gICAgICAxNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0hMUTgxQzNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzI1MDIwODIzOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODMyNzUxNDY0Nzc4MjE6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlQxd3E4R0VLaUZock1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEVGFzZWczZDZTbE5uTmpEVHNPZTlobTdqbjdsSXFaZFJEVURlM2R1M2s4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZSN1lnR2xWWWprdUd1dys2SDhUZ3FNb21jZmI5dmFwUktBWEF2QjVnRlF6dHJOdVdVSk1lVjdPZEl3YVlNZTcxKzRYSlhtd3FSS0QyajRLbk45eEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBhRkRZS28ydUVlOWRQcDdiZFJjODhXMllpU251dGdvQi9qRXUyRU5idUZWcTN5N1dzM25jRlpBcjM1bFlscW5rbytlR1pDMXBRZmxNZDNpc1lkYkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzI1MDIwODIzOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzY2NjQ3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBLU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUEtTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZFQxcDdrS3VkZXVIc3V4MnppckZ4ejAxZWJtcXMzOFFiUkdlRm9PZ000Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzEwMjc1Mjc3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
