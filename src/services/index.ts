import request from '@/utils/request'

const http = {
  Event: {
    getEvents: (params: webapi.Event.request.getEvents): Promise<webapi.Event.response.getEvents> => {
      return request({
        params,
        method: 'GET',
        url: '/events'
      })
    },
    getEvent: (params: webapi.Event.request.getEvent): Promise<webapi.Event.response.getEvent> => {
      return request({
        params,
        method: 'GET',
        url: '/event'
      })
    }
  }
}

export default http
