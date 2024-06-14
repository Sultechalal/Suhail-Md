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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349134359837";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_27_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM1LFxuICAgICAgICA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDcwLFxuICAgICAgICA3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDY0LFxuICAgICAgICAwLFxuICAgICAgICAzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgODYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MixcbiAgICAgICAgMTIxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkzLFxuICAgICAgICA0NixcbiAgICAgICAgNTksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDk4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDM3LFxuICAgICAgICA5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDgwLFxuICAgICAgICAzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYzLFxuICAgICAgICA5NixcbiAgICAgICAgOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRDNKaFRNNmEyTUZ5aWlXWk5rT0xWRnRpSDc1SnllcnhVZWRPRVZnYkZWOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZWhpZ3VpNFVUbXlVYlBkeDBjeXJNUVwiLFxuICBcInBob25lSWRcIjogXCJmYWUwNjJhMi0wMDdmLTRkOGYtODJmYi00NzY2MzUxZWY5MzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgODgsXG4gICAgICAyMTQsXG4gICAgICAyMDcsXG4gICAgICAxNyxcbiAgICAgIDE0MCxcbiAgICAgIDExNCxcbiAgICAgIDM4LFxuICAgICAgMTczLFxuICAgICAgMTMsXG4gICAgICAxMDIsXG4gICAgICAxNyxcbiAgICAgIDIxNixcbiAgICAgIDE4NCxcbiAgICAgIDE1OSxcbiAgICAgIDE2MCxcbiAgICAgIDYsXG4gICAgICAxMyxcbiAgICAgIDE2NyxcbiAgICAgIDEwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICA5LFxuICAgICAgMTI2LFxuICAgICAgNCxcbiAgICAgIDI3LFxuICAgICAgMjU1LFxuICAgICAgNzgsXG4gICAgICAxNTMsXG4gICAgICAxNjMsXG4gICAgICAxNzEsXG4gICAgICAyMzMsXG4gICAgICA5MCxcbiAgICAgIDE1NSxcbiAgICAgIDQsXG4gICAgICA0MSxcbiAgICAgIDI0MCxcbiAgICAgIDIzMSxcbiAgICAgIDc4LFxuICAgICAgOTAsXG4gICAgICA3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHSFpDNjRHS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNDM1OTgzNzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU3VsdGVjaCBIYWxhbFwiLFxuICAgIFwibGlkXCI6IFwiMjQyMzA5NTA1NDg2OTg2OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSytmdzlzSEVLdlNzTE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrak9lQ1E1bitvVkZSUXlKdG5BMVp0cGtMUXZnL3dxUTNDN0JMZ3dtTVFRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNrQ0hVcFlPMngyWXQ0WUZYRFlVMXdaK1ZZUnNQNTRKU0Z6aVNDNmIzRUFRUnlaQ2JpN0lDK25mVTMxMmRjb0g4TEN1ZkdxZ1U4d3YzOEt0SXNvL0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZRN25XNGdZUHNlMzdHYnREaitjVHpwVjVQS3IzTmNsNXZmSEVsRDZNSUEyTVBKcXA5bHFTcms4SGpJYkdyZVN2MUoxWENJVFBuVjd3STZsQmd6d2hRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzQzNTk4Mzc6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODM2NDQ2NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
