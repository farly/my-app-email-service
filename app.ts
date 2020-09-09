import { Service } from './src/service'

const service = new Service({
  host : process.env.HOST || '0.0.0.0',
  port : Number(process.env.PORT || 6379)
})

service.start()