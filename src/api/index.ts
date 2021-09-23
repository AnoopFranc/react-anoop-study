import axios from "axios"

interface data {
  data: any
}

export const API_ENDPOINT = {
  TOPFUNDS: "https://api.regovitservices.com/v1/api/app/homepagefund/topfunds",
  DAILYPRICE: "https://api.regovitservices.com/v1/api/app/homepagefund/dailyfunds",
  FUNDSHISTORY: "https://api.regovitservices.com/v1/api/app/homepagefund/fundshistory",
  INCOMEDISTRIBUTION: "https://api.regovitservices.com/v1/api/app/homepagefund/incomedistribution",
  FUNDPERFORMANCE: "https://api.regovitservices.com/v1/api/app/homepagefund/fundsperformance",
  AMPFUNDS: "https://api.regovitservices.com/v1/api/app/homepagefund/ampfunds",
  ARTICLELIST: "https://api.regovitservices.com/v1/api/app/content/list",
  NOTICELIST: "https://api.regovitservices.com/v1/api/app/content/notices",
  ARTICLE: "https://api.regovitservices.com/v1/api/app/content/articles",
  SINGLEFUND: "https://api.regovitservices.com/v1/api/app/fund/singlefundinfo",
  FORFUNDSINCOME: "https://api.regovitservices.com/v1/api/app/fund/incomedistribution",
  FORFUNDSPERFORMANCE: "https://api.regovitservices.com/v1/api/app/fund/fundperformance",
  FORFUNDSDAILYPRICE: "https://api.regovitservices.com/v1/api/app/fund/dailyfunds",
  FORFUNDSHISTORY: "https://api.regovitservices.com/v1/api/app/fund/historyfunds",
  LATESTNOTICES: "https://api.regovitservices.com/v1/api/app/content/latestNotices",
  AMPFUND: "https://api.regovitservices.com/v1/api/app/fund/ampfunds",
  AMPViewed: "https://api.regovitservices.com/v1/api/app/fund/ampfundsmostviewed",
  RelatedArticle: "https://api.regovitservices.com/v1/api/app/content/relatedarticles",
  form: "https://api.regovitservices.com/v1/api/app/form/save",
  EXCEL: "https://api.regovitservices.com/v1/api/app/fund/downloadincomedist",
  fundFilter: "https://api.regovitservices.com/v1/api/app/fund/dailyfunds/filter",
}

export const API_Call = async (url: string, data: any, options?: any) => {
  let response
  try {
    response = await axios.post(url, data, options)
  } catch (error) {
    response = null
  }
  return response
}

export const getTopFund = async ({data}: data) => {
  return await API_Call(API_ENDPOINT.TOPFUNDS, data)
}
export const getDailyPrice = async ({data}: data) => {
  return await API_Call(API_ENDPOINT.DAILYPRICE, data)
}
export const getFundHistory = async ({data}: data) => {
  return await API_Call(API_ENDPOINT.FUNDSHISTORY, data)
}
export const getIncomeDistribution = async ({data}: data) => {
  return await API_Call(API_ENDPOINT.INCOMEDISTRIBUTION, data)
}
export const getFourFundIncome = async ({data}: data) => {
  return await API_Call(API_ENDPOINT.FORFUNDSINCOME, data)
}
export const getFourFundDaily = async ({data}: data) => {
  return await API_Call(API_ENDPOINT.FORFUNDSDAILYPRICE, data)
}
export const getFourFundHistory = async ({data}: data) => {
  return await API_Call(API_ENDPOINT.FORFUNDSHISTORY, data)
}
export const getFourFundPerformance = async ({data}: data) => {
  return await API_Call(API_ENDPOINT.FORFUNDSPERFORMANCE, data)
}
export const getFundPerformance = async ({data}: data) => {
  return await API_Call(API_ENDPOINT.FUNDPERFORMANCE, data)
}
export const getAmpFunds = async ({data}: data) => {
  return await API_Call(API_ENDPOINT.AMPFUNDS, data)
}

export const getArticleList = async (data: any) => {
  return await API_Call(API_ENDPOINT.ARTICLELIST, {...data})
}

export const getNoticeList = async (data: any) => {
  return await API_Call(API_ENDPOINT.ARTICLELIST, {type: 2, ...data})
}
export const getArticle = async (id: number) => {
  return await API_Call(API_ENDPOINT.ARTICLE, {type: 1, articleId: id})
}

export const getNotice = async (id: number) => {
  return await API_Call(API_ENDPOINT.NOTICELIST, {type: 2, articleId: id})
}

export const getSingleFund = async (id: number) => {
  return await API_Call(API_ENDPOINT.SINGLEFUND, {fundId: id})
}

export const getLatestNotice = async (id?: number) => {
  return await API_Call(API_ENDPOINT.LATESTNOTICES, {articleId: id})
}
export const getExcel = async (id: number) => {
  return await API_Call(
    API_ENDPOINT.EXCEL,
    {fundId: id},
    {
      responseType: "blob",
    }
  )
}

export const getAmpFund = async () => {
  return await API_Call(API_ENDPOINT.AMPFUND, {})
}

export const getAMpViewedFunds = async (id: number) => {
  return await API_Call(API_ENDPOINT.AMPViewed, {fundId: id})
}

export const getLatestArticle = async (id: number, tag: string[], type?: number) => {
  console.log(
    `data being send ::: ${JSON.stringify({articleId: id, tag: tag[0], type: type ? type : 1})}`
  )
  return await API_Call(API_ENDPOINT.RelatedArticle, {
    articleId: id,
    tag: tag[0],
    type: type ? type : 1,
  })
}

export const PostFormData = async (data: {}) => {
  return await API_Call(API_ENDPOINT.form, data)
}

export const FundFilter = async (
  fundtype?: string[],
  investmentType?: string[],
  fundCategory?: string[]
) => {
  return await API_Call(API_ENDPOINT.fundFilter, {
    fundType: fundtype,
    investmentType: investmentType,
    fundCategory: fundCategory,
  })
}