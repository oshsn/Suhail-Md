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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94725020823";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_55_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgODgsXG4gICAgICAgIDYxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQwLFxuICAgICAgICA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM1LFxuICAgICAgICA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MixcbiAgICAgICAgMTA4LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE3LFxuICAgICAgICA2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTY1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNixcbiAgICAgICAgMTY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyLFxuICAgICAgICA4MixcbiAgICAgICAgMTgxLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI2LFxuICAgICAgICA2NSxcbiAgICAgICAgNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDYwLFxuICAgICAgICA0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg5LFxuICAgICAgICA3LFxuICAgICAgICA4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgODIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjk4ZXR2K0dwVGg2RFpYdSt4Rlpyd2VmZFZHRTNMbHUvdWx0V1pMT2lkeG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MjUwMjA4MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIwQTk1RTlGRkQwRThCNUE1QUFFQjUxNzgwRUI3NEFCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODQ0MTcyMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxUTI1WTctZlQtNlQtZUw0M0ZzQkFBXCIsXG4gIFwicGhvbmVJZFwiOiBcImFhNTY0MTQzLTYwODMtNDY2OS1iNjlkLTQ3YTYzZjk1NjkwNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgNzQsXG4gICAgICAyLFxuICAgICAgMjIsXG4gICAgICA5MyxcbiAgICAgIDk0LFxuICAgICAgMTQ2LFxuICAgICAgOTksXG4gICAgICAxMzEsXG4gICAgICAxMTMsXG4gICAgICAxODQsXG4gICAgICAxODUsXG4gICAgICAxODcsXG4gICAgICAxOTIsXG4gICAgICAxMDAsXG4gICAgICAyNDAsXG4gICAgICA0NCxcbiAgICAgIDgwLFxuICAgICAgMjIwLFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICA5OSxcbiAgICAgIDIxNyxcbiAgICAgIDc3LFxuICAgICAgNCxcbiAgICAgIDExMSxcbiAgICAgIDg4LFxuICAgICAgNDgsXG4gICAgICAyMjksXG4gICAgICAxNzQsXG4gICAgICAzOCxcbiAgICAgIDM5LFxuICAgICAgMTY1LFxuICAgICAgMTk3LFxuICAgICAgOTEsXG4gICAgICA5MCxcbiAgICAgIDIyOSxcbiAgICAgIDk2LFxuICAgICAgMjQ4LFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEtSVk5OUU1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzI1MDIwODIzOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODMyNzUxNDY0Nzc4MjE6MjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlQxd3E4R0VPNnR0Yk1HR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEVGFzZWczZDZTbE5uTmpEVHNPZTlobTdqbjdsSXFaZFJEVURlM2R1M2s4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9RTXBNNCtZdE9nUzFlVlFqT3RRRUcvY0JDZ0p4UUJReUVMSVp3ZWxsNTMvbGQ3WndudWRDTlpmYWVkU1BETVBiK3ROSVlYQlNnSG9OZjRTZmd0b0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImIvZHpWSUlhS0VBY1ZBazNZV0kxNEhJUlZkdVN2SUtyRHNaRGtTUVdFbk5tOWk3MkxzKzhydHZVZlJvYmlBeHNYQi81bUNNaU9abkFlcHJyT29EM2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzI1MDIwODIzOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODQ0MTcxMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBLYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUEthLmpzb24iOiAie1wia2V5RGF0YVwiOlwid2FqMXMvUFpxT0JIS0NVNE95NW9WVGFNZERscU55bUVQZ29jYXFoUGFRbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzEwMjc1Mjg0LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "TEDDY",


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
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "true", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
