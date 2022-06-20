import Echo from 'laravel-echo'

export default {
  install: (app: any, config: any) => {
    app.config.globalProperties.$echo = new Echo(config)
  },
}
