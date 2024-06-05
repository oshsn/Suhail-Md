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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_03_06_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNyxcbiAgICAgICAgODksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4LFxuICAgICAgICA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDg1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNixcbiAgICAgICAgNTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDczLFxuICAgICAgICAxMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NyxcbiAgICAgICAgNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDY1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUyLFxuICAgICAgICA3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDMsXG4gICAgICAgIDEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIRzVnMnE0RnRoenFZU0FHWUx2MWxRdHdPUTN1cGRRK2ZXeE5PR3UvT2l3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzI1MDIwODIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMTYwRDAwNEJDQTU2MzY1N0Q1MTRBOUVGNDJBNUNFRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc1OTI1OTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiek9RVDAzb3dRV0NDWHp4NXpxR1hKd1wiLFxuICBcInBob25lSWRcIjogXCI2ZDVlNmZlNy1kYzA0LTQ3MDItOWM3YS1mNGYzNGI3MWJkNTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgNTAsXG4gICAgICA0MCxcbiAgICAgIDExOCxcbiAgICAgIDIyOSxcbiAgICAgIDUwLFxuICAgICAgMjAyLFxuICAgICAgMTYsXG4gICAgICAyNDMsXG4gICAgICAxODAsXG4gICAgICAxOTMsXG4gICAgICAxMzAsXG4gICAgICA5MCxcbiAgICAgIDIxNixcbiAgICAgIDI0NSxcbiAgICAgIDc5LFxuICAgICAgMjI2LFxuICAgICAgMTM3LFxuICAgICAgMCxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDUxLFxuICAgICAgNzQsXG4gICAgICA0NCxcbiAgICAgIDU5LFxuICAgICAgODcsXG4gICAgICAyMyxcbiAgICAgIDE5OCxcbiAgICAgIDEwOSxcbiAgICAgIDIzLFxuICAgICAgNjYsXG4gICAgICAxMzcsXG4gICAgICAyMjgsXG4gICAgICAxMTUsXG4gICAgICAyMTAsXG4gICAgICA5NixcbiAgICAgIDIwMCxcbiAgICAgIDI0NCxcbiAgICAgIDIwMixcbiAgICAgIDIyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxRjJFRktWR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjUwMjA4MjM6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MzI3NTE0NjQ3NzgyMToxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNMzF3cThHRUlqRWdiTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRUYXNlZzNkNlNsTm5OakRUc09lOWhtN2puN2xJcVpkUkRVRGUzZHUzazg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibVBqaUZoWmZKTEIyYkFnQ3hTa2s4cGlHZFFnR0hhOW5qWnlkanFsWmJZcG1GaXVCYVViNDJ0TnJCZnIwT2t4WlBLcm9rL1BkRnhjNGRTZXRVemJrQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMUYxdkdzWVZGME45TWJQN3FrS1VNblYxODVxencwTmdPMWZMb08wREpDT1BScTdtQmYvNXNkY0FZNE1LcU1xd2txdXEwVWxBM1ZPY2Y5dG0zcXFHZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MjUwMjA4MjM6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NTkyNTg3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEtSXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQS1IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2RnpybjdlZnc0Sk9lekMxdVV6d2hiVDlqWjlEY045cUtNNGcrdUpZUWZFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MTAyNzUyNzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzU5MDEyNTc1MlwifSIKfQ=="  // PUT your SESSION_ID 


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
