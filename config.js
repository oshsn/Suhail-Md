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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94 0725020823";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_53_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMyxcbiAgICAgICAgODMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NixcbiAgICAgICAgMTgxLFxuICAgICAgICA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODksXG4gICAgICAgIDc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMxLFxuICAgICAgICA5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIsXG4gICAgICAgIDIwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICA2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0LFxuICAgICAgICA4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExLFxuICAgICAgICAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NixcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMixcbiAgICAgICAgMixcbiAgICAgICAgNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib0pRNFpKdWltSE1sSmUrMDY3NnNpc0NFUWtYdlFyZDBCTDdYYmRzL2dIST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaXlENl8tQl9RdTZhdEU0UEd3REo5QVwiLFxuICBcInBob25lSWRcIjogXCJhZDczMzEzYS0xYWIwLTRmOTctOGRjNy05MmI5Mzg0MmIxMjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgNjAsXG4gICAgICAxODQsXG4gICAgICAxNTMsXG4gICAgICAxNTgsXG4gICAgICAyMDAsXG4gICAgICAxNyxcbiAgICAgIDIwOSxcbiAgICAgIDEzNixcbiAgICAgIDE5OCxcbiAgICAgIDgsXG4gICAgICAxODAsXG4gICAgICAyOSxcbiAgICAgIDEyNCxcbiAgICAgIDE1MSxcbiAgICAgIDg4LFxuICAgICAgMjI0LFxuICAgICAgMTU2LFxuICAgICAgMTI3LFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDQsXG4gICAgICAyMyxcbiAgICAgIDI2LFxuICAgICAgMjcsXG4gICAgICAxOTEsXG4gICAgICAyMjMsXG4gICAgICAxNzgsXG4gICAgICA3MSxcbiAgICAgIDY2LFxuICAgICAgMjA0LFxuICAgICAgNzYsXG4gICAgICAyMDgsXG4gICAgICA1MSxcbiAgICAgIDI0OSxcbiAgICAgIDEwNixcbiAgICAgIDEzLFxuICAgICAgMTIsXG4gICAgICA4MSxcbiAgICAgIDExMixcbiAgICAgIDEzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5U1QyQ0xUSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjUwMjA4MjM6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MzI3NTE0NjQ3NzgyMToxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOTDF3cThHRU5XZGhiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRUYXNlZzNkNlNsTm5OakRUc09lOWhtN2puN2xJcVpkUkRVRGUzZHUzazg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVEJ2cmpKaVZhUXI0QmdGK3oyMmRLZXJJSTBLZTkybERYb2dnYmpRaTJPQVZ2MTlmOWxVbXgrTjByVGZ3VDd4QVc0eE0yb0pVWXFhekpYcjRoNlpjQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibGRxaDdNZndCMjRBZ3dDVlR2RlJTZVV1czNiejN4MlUvRm1aZUNIZlNiNks3U1pOMGEzcUFoMTlUR012c1NxMHBYdW5KRWNaanV6QVdlN2hiaXBialE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MjUwMjA4MjM6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NjUzMjA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEtTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQS1MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkVDFwN2tLdWRldUhzdXgyemlyRnh6MDFlYm1xczM4UWJSR2VGb09nTTRjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MTAyNzUyNzcsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
