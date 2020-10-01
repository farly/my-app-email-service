import * as Handlebars   from 'handlebars'
import fs from 'fs'

type creds {
  user : string,
  password : string
}

export function sendEmail(creds : creds, data : string) {
  const template = Handlebars.compile(`${fs.readFileSync('/Volumes/Dev/Farly/FarlyApp/email-service/src/templates/welcome.html')}`);
  const html = template({ name : 'this is a name' });
}