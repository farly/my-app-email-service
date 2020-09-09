export class BaseService
{
  constructor(config) {

  }

  start() : void {
    this.setUpDependency((error : Error | null) => {

    })
  }

  setUpDependency(cb : (error : Error | null)) {
    throw new Error('setUpDependency not implemented')
  }
}