import redis, { RedisClient } from 'redis'

export class Service
{
  private config : {
    port : number,
    host : string
  }
  
  constructor(config : {
    port : number,
    host : string
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

    redisClient.on('message', function(channel, message){
      // process message
      // send email
    });
  }
}