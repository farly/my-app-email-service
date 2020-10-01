import redis, { RedisClient } from 'redis'
import { sendEmail } from './util/mailer.welcome'

export class Service
{
  private config : {
    port : number,
    host : string
    mailer : {
      user : string,
      password : string
    }
  }
  
  constructor(config : {
    port : number,
    host : string,
    mailer : {
      user : string,
      password : string
    }
  }) {
    this.config = config;
  }

  start() : void {
    const {host, port} = this.config;
    const redisClient : RedisClient = redis.createClient({
      host,
      port
    })

    redisClient.subscribe('create.user')

    redisClient.on('message', (channel, message) => {
      sendEmail(this.config.mailer, message);
      // process message
      // send email
    });
  }
}