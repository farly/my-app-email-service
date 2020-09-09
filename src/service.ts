import redis, { RedisClient } from 'redis'

export class Service
{
  constructor() {

  }

  setUpDependency(cb : (err : Error | null) => void) {
    const redisClient : RedisClient = redis.createClient({
      host : process.env.REDIST_HOST || '0.0.0.0',
      port : Number(process.env.PORT || 6379)
    })

    redisClient.subscribe('create.user')

    redisClient.on('message', function(channel, message){
      console.info(message);
    });
  }
}