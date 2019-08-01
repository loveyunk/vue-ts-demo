declare namespace webapi {
  /**
   * 后端接口通用数据
   */
  export interface IResponse<T = any> {
    /**
     * 错误码
     */
    error_code: number
    /**
     * 错误信息
     */
    error_msg: string
    data: T
  }

  export interface IPageableRequest {
    /**
     * 每页多少条数据 默认为 10
     */
    pageSize: number
    /**
     * 第多少页 第一页为 1
     */
    pageIndex: number
  }

  export interface IPageableResult<T = any> {
    /**
     * 总数
     */
    count: number
    data: T
  }

  namespace Event {
    namespace request {
      export interface getEvents extends IPageableRequest {
        /**
         * 关键字
         */
        keyword?: string
      }
      export interface getEvent {
        /**
         * ID
         */
        id: string
      }
    }

    namespace response {
      export interface IGegEventsData {
        id: string
        created_at: string
        points: number
        author: {
          name: string
        }
        tag: string[]
        title: string
        comment_text: string
        address: string
      }

      export type IGetEventData = IGegEventsData | null

      export type getEvents = webapi.IResponse<IPageableResult<IGegEventsData[]>>
      export type getEvent = webapi.IResponse<IGetEventData>
    }
  }
}
